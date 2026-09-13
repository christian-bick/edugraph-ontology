import { OntologyStatement, RdfStatement, projectRdfStatements } from "./OntologyTypes";
import { PRIMARY_RELATION_FAMILIES, RELATION_SCHEMA_CONTRACT } from "./RelationContracts";

const EDU = "http://edugraph.io/edu#";
const TYPE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
const DEFINITION = "http://www.w3.org/2000/01/rdf-schema#isDefinedBy";
const INVERSE = "http://www.w3.org/2002/07/owl#inverseOf";
const SUBPROPERTY = "http://www.w3.org/2000/01/rdf-schema#subPropertyOf";
const compare = (a: string, b: string): number => a < b ? -1 : a > b ? 1 : 0;

/** Full-IRI schema contracts; names are convenience keys, never navigation identities. */
export const RELATION_IRIS = Object.freeze({
  structures: EDU + "structures",
  structuredBy: EDU + "structuredBy",
  partOf: EDU + "partOf",
  hasPart: EDU + "hasPart",
  specializes: EDU + "specializes",
  specializedBy: EDU + "specializedBy",
  constrains: EDU + "constrains",
  constrainedBy: EDU + "constrainedBy",
  implies: EDU + "implies",
  impliedBy: EDU + "impliedBy",
  contradicts: EDU + "contradicts",
  contradictedBy: EDU + "contradictedBy",
  expands: EDU + "expands",
  expandedBy: EDU + "expandedBy",
  inverts: EDU + "inverts",
  invertedBy: EDU + "invertedBy",
  integrates: EDU + "integrates",
  integratedBy: EDU + "integratedBy",
  translates: EDU + "translates",
  translatedBy: EDU + "translatedBy",
  involves: EDU + "involves",
  involvedBy: EDU + "involvedBy",
});
/** Required inverse/subproperty declarations expressed entirely as IRIs. */
export const IRI_SCHEMA_CONTRACT = Object.freeze({
  inverses: Object.freeze(RELATION_SCHEMA_CONTRACT.inverses.map(c => Object.freeze({
    primary: EDU + c.primary, inverse: EDU + c.inverse, ruleId: c.ruleId,
  }))),
  subproperties: Object.freeze(RELATION_SCHEMA_CONTRACT.subproperties.map(c => Object.freeze({
    property: EDU + c.property, parent: EDU + c.parent, ruleId: c.ruleId,
  }))),
});
/** Primary authored properties grouped by the existing ontology rules. */
export const IRI_RELATION_FAMILIES = Object.freeze(Object.fromEntries(
  Object.entries(PRIMARY_RELATION_FAMILIES).map(([family, names]) => [family, Object.freeze(names.map(n => EDU + n))]),
)) as Readonly<Record<keyof typeof PRIMARY_RELATION_FAMILIES, readonly string[]>>;

/** One explicitly typed ontology descriptor in this snapshot. */
export interface DescriptorRecord {
  readonly iri: string;
  readonly dimensions: readonly string[];
  readonly definitions: readonly string[];
}
/** Unknown identifiers must not be interpreted as eligible leaves. */
export type LabelEligibility = Readonly<{ status: "unknown"; iri: string }> |
  Readonly<{ status: "known"; iri: string; eligible: boolean; constituentChildren: readonly string[] }>;
/** Supplied immutable-by-contract input. Rich RDF retains graph and literal identity. */
export type OntologySnapshot = readonly OntologyStatement[] | readonly RdfStatement[];
/** Authored access excludes inverse and superproperty consequences. */
export type RelationAccess = "authored" | "entailed";
type Adjacency = Map<string, Map<string, Set<string>>>;
function add(index: Adjacency, s: string, p: string, o: string): boolean {
  let properties = index.get(s);
  if (!properties) { properties = new Map(); index.set(s, properties); }
  let values = properties.get(p);
  if (!values) { values = new Set(); properties.set(p, values); }
  const fresh = !values.has(o); values.add(o); return fresh;
}
/** Whether the projection can participate in named-entity relation semantics. */
export function isNamedRelation(statement: OntologyStatement): boolean {
  return (statement.subjectKind ?? "NamedNode") === "NamedNode" && (statement.objectKind ?? "NamedNode") === "NamedNode";
}
function copyStatement(input: OntologyStatement | RdfStatement): OntologyStatement {
  const flat = typeof input.subject === "string" ? input as OntologyStatement : projectRdfStatements([input as RdfStatement])[0];
  const rdf = flat.rdf;
  return Object.freeze({ ...flat, ...(rdf ? { rdf: Object.freeze({ ...rdf,
    subject: Object.freeze({ ...rdf.subject }), predicate: Object.freeze({ ...rdf.predicate }),
    object: Object.freeze({ ...rdf.object }), graph: Object.freeze({ ...rdf.graph }),
  }) } : {}) });
}

/** Read-only queries over one complete caller-supplied snapshot; performs no I/O or editing.
 * Named graphs are retained in records; ontology queries use their union. Construct a new
 * context after edits. All indexes belong to this instance; returned records are frozen.
 */
export class OntologyContext {
  readonly statements: readonly Readonly<OntologyStatement>[];
  private readonly inventory = new Map<string, DescriptorRecord>();
  private readonly authoredIndex: Adjacency = new Map();
  private readonly entailedIndex: Adjacency = new Map();

  constructor(snapshot: OntologySnapshot) {
    this.statements = Object.freeze(snapshot.map(copyStatement));
    const dimensions = new Map<string, Set<string>>();
    const definitions = new Map<string, Set<string>>();
    const inverse = new Map<string, Set<string>>();
    const parents = new Map<string, Set<string>>();
    const put = (index: Map<string, Set<string>>, key: string, value: string): void => {
      const set = index.get(key) ?? new Set<string>(); set.add(value); index.set(key, set);
    };
    const queue: Array<readonly [string, string, string]> = [];
    for (const s of this.statements) {
      if (s.sourceKind === "schema" && isNamedRelation(s)) {
        if (s.predicate === INVERSE) { put(inverse, s.subject, s.object); put(inverse, s.object, s.subject); }
        if (s.predicate === SUBPROPERTY) put(parents, s.subject, s.object);
      }
      if (s.sourceKind !== "descriptors" || (s.subjectKind ?? "NamedNode") !== "NamedNode") continue;
      if (isNamedRelation(s)) {
        if (s.predicate === EDU + "partOf") put(this.incomingParts, s.object, s.subject);
        if (s.predicate === TYPE && [EDU + "Area", EDU + "Ability", EDU + "Scope"].includes(s.object)) put(dimensions, s.subject, s.object);
        if (add(this.authoredIndex, s.subject, s.predicate, s.object)) queue.push([s.subject, s.predicate, s.object]);
      }
      if (s.predicate === DEFINITION && (s.objectKind === "Literal" || s.objectKind === undefined)) put(definitions, s.subject, s.object);
    }
    for (const [iri, values] of dimensions) {
      this.inventory.set(iri, Object.freeze({ iri, dimensions: Object.freeze([...values].sort(compare)),
        definitions: Object.freeze([...(definitions.get(iri) ?? [])].sort(compare)) }));
    }
    for (let cursor = 0; cursor < queue.length; cursor++) {
      const [s, p, o] = queue[cursor];
      if (!add(this.entailedIndex, s, p, o)) continue;
      for (const inv of inverse.get(p) ?? []) queue.push([o, inv, s]);
      for (const parent of parents.get(p) ?? []) queue.push([s, parent, o]);
    }
    Object.freeze(this);
  }
  /** Resolve an explicitly typed descriptor by full IRI; absence returns undefined. */
  lookupDescriptor(iri: string): DescriptorRecord | undefined { return this.inventory.get(iri); }
  /** Inventory sorted by full IRI. Records contain no generated-enum assumptions. */
  descriptors(): readonly DescriptorRecord[] { return Object.freeze([...this.inventory.values()].sort((a, b) => compare(a.iri, b.iri))); }
  /** Original facts, including literals, source references, and retained RDF graph terms. */
  authoredAssertions(iri?: string): readonly Readonly<OntologyStatement>[] {
    return iri === undefined ? this.statements : Object.freeze(this.statements.filter(s => s.subject === iri));
  }
  /** Direct unique targets, sorted by IRI. Entailed access adds only declared inverses/subproperties. */
  related(iri: string, property: string, access: RelationAccess = "entailed"): readonly string[] {
    const index = access === "authored" ? this.authoredIndex : this.entailedIndex;
    return Object.freeze([...(index.get(iri)?.get(property) ?? [])].sort(compare));
  }
  /** Unique reachable targets. Self is included only when reached by an actual cycle/self-edge.
   * Terminates on cycles; this navigation is not a new progression or capability inference.
   */
  traverse(iri: string, property: string): readonly string[] {
    const visited = new Set<string>(); const queue = [iri];
    for (let cursor = 0; cursor < queue.length; cursor++) {
      for (const next of this.related(queue[cursor], property)) if (!visited.has(next)) { visited.add(next); queue.push(next); }
    }
    return Object.freeze([...visited].sort(compare));
  }
  /** ONT-E7 for a known descriptor in a complete snapshot, separate from content evidence.
   * Incoming authored partOf is inspected even if a defective schema omits its inverse.
   */
  inspectLabel(iri: string): LabelEligibility {
    if (!this.inventory.has(iri)) return Object.freeze({ status: "unknown", iri });
    const children = this.constituentChildren(iri);
    return Object.freeze({ status: "known", iri, eligible: children.length === 0, constituentChildren: children });
  }
  /** Boolean convenience; throws for unknown IRIs instead of reporting a false eligible leaf. */
  isLabelEligible(iri: string): boolean {
    const result = this.inspectLabel(iri);
    if (result.status === "unknown") throw new Error(`Unknown descriptor: ${iri}`);
    return result.eligible;
  }
  private constituentChildren(iri: string): readonly string[] {
    return Object.freeze([...new Set([
      ...this.related(iri, EDU + "hasPart"),
      ...(this.incomingParts.get(iri) ?? []),
    ])].sort(compare));
  }
  private readonly incomingParts = new Map<string, Set<string>>();
  /** Recorded implication/contradiction satisfiability; not a numeric or general logical solver. */
  incompatible(a: string, b: string): boolean {
    const targets = new Set([b, ...this.traverse(b, EDU + "implies")]);
    return [a, ...this.traverse(a, EDU + "implies")].some(x => this.related(x, EDU + "contradicts").some(y => targets.has(y)));
  }
  private boundTyped(iri: string): boolean {
    return [iri, ...this.traverse(iri, EDU + "implies"), ...this.traverse(iri, EDU + "impliedBy")]
      .some(x => this.related(x, EDU + "contradicts").length > 0);
  }
  /** Existing conjunctive compatible-label deduction, preserving the generated helper's semantics. */
  deductCompatible(constraints: readonly string[]): readonly string[] {
    const implied = new Set<string>(); const excluded = new Set<string>();
    const expand = (iri: string): readonly string[] => this.traverse(iri, EDU + (this.boundTyped(iri) ? "impliedBy" : "implies"));
    for (const constraint of constraints) {
      implied.add(constraint); for (const x of expand(constraint)) implied.add(x);
      for (const partner of this.related(constraint, EDU + "contradicts")) {
        excluded.add(partner); for (const x of expand(partner)) excluded.add(x);
      }
    }
    return Object.freeze([...implied].filter(x => !excluded.has(x)).sort(compare));
  }
  /** Existing disjunctive boundary-admission deduction; no interpretation of definition prose. */
  deductAdmitting(boundaries: readonly string[]): readonly string[] {
    const result = new Set<string>();
    for (const boundary of boundaries) {
      result.add(boundary); for (const x of this.traverse(boundary, EDU + "impliedBy")) result.add(x);
      for (const partner of this.related(boundary, EDU + "contradicts")) for (const x of this.traverse(partner, EDU + "implies")) result.add(x);
    }
    return Object.freeze([...result].sort(compare));
  }
}
/** Construct an isolated context from supplied RDF or legacy statements without mutating input. */
export function createOntologyContext(snapshot: OntologySnapshot): OntologyContext { return new OntologyContext(snapshot); }
