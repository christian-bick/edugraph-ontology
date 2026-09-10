import { Parser } from "n3";

const EDU = "http://edugraph.io/edu#";
const OWL_INVERSE_OF = "http://www.w3.org/2002/07/owl#inverseOf";
const RDFS_SUBPROPERTY_OF = "http://www.w3.org/2000/01/rdf-schema#subPropertyOf";

export type OntologySourceKind = "schema" | "descriptors";

export interface OntologySource {
  name: string;
  kind: OntologySourceKind;
  text: string;
}

export interface OntologyStatement {
  subject: string;
  predicate: string;
  object: string;
  source: string;
  sourceKind: OntologySourceKind;
}

export interface OntologyValidationFinding {
  checkId: string;
  ruleId: string;
  code: string;
  message: string;
  witness: readonly string[];
  source?: string;
}

interface InverseContract {
  primary: string;
  inverse: string;
  ruleId: "ONT-S3" | "ONT-R1";
}

interface SubpropertyContract {
  property: string;
  parent: string;
  ruleId: "ONT-S3" | "ONT-R1";
}

const relation = (name: string): string => `${EDU}${name}`;

export const RELATION_SCHEMA_CONTRACT = {
  inverses: [
    ["structures", "structuredBy", "ONT-S3"],
    ["partOf", "hasPart", "ONT-S3"],
    ["specializes", "specializedBy", "ONT-S3"],
    ["constrains", "constrainedBy", "ONT-R1"],
    ["implies", "impliedBy", "ONT-R1"],
    ["contradicts", "contradictedBy", "ONT-R1"],
    ["expands", "expandedBy", "ONT-R1"],
    ["inverts", "invertedBy", "ONT-R1"],
    ["integrates", "integratedBy", "ONT-R1"],
    ["translates", "translatedBy", "ONT-R1"],
    ["involves", "involvedBy", "ONT-R1"],
  ].map(([primary, inverse, ruleId]) => ({ primary, inverse, ruleId })) as InverseContract[],
  subproperties: [
    ["partOf", "structures", "ONT-S3"],
    ["specializes", "structures", "ONT-S3"],
    ["hasPart", "structuredBy", "ONT-S3"],
    ["specializedBy", "structuredBy", "ONT-S3"],
    ["implies", "constrains", "ONT-R1"],
    ["contradicts", "constrains", "ONT-R1"],
    ["impliedBy", "constrainedBy", "ONT-R1"],
    ["contradictedBy", "constrainedBy", "ONT-R1"],
    ["inverts", "expands", "ONT-R1"],
    ["invertedBy", "expandedBy", "ONT-R1"],
    ["translates", "integrates", "ONT-R1"],
    ["translatedBy", "integratedBy", "ONT-R1"],
  ].map(([property, parent, ruleId]) => ({ property, parent, ruleId })) as SubpropertyContract[],
} as const;

export const PRIMARY_RELATION_FAMILIES = {
  structural: ["structures", "partOf", "specializes"],
  progression: ["expands", "inverts", "integrates", "translates"],
  constraints: ["constrains", "implies", "contradicts"],
} as const;

interface DirectedRelationEdge {
  from: string;
  to: string;
  relation: string;
  source: string;
}

export function parseOntologySources(sources: readonly OntologySource[]): OntologyStatement[] {
  return sources.flatMap(source => new Parser({ baseIRI: EDU }).parse(source.text).map(quad => ({
    subject: quad.subject.value,
    predicate: quad.predicate.value,
    object: quad.object.value,
    source: source.name,
    sourceKind: source.kind,
  })));
}

function statementKey(subject: string, predicate: string, object: string): string {
  return `${subject}\u0000${predicate}\u0000${object}`;
}

function compactIri(iri: string): string {
  const separator = Math.max(iri.lastIndexOf("#"), iri.lastIndexOf("/"));
  return separator >= 0 ? iri.slice(separator + 1) : iri;
}

/** O2: verifies the inverse and subproperty declarations required by ONT-S3 and ONT-R1. */
export function validateRelationSchema(
  statements: readonly OntologyStatement[],
): OntologyValidationFinding[] {
  const keys = new Set(statements
    .filter(statement => statement.sourceKind === "schema")
    .map(statement => statementKey(statement.subject, statement.predicate, statement.object)));
  const findings: OntologyValidationFinding[] = [];

  for (const contract of RELATION_SCHEMA_CONTRACT.inverses) {
    const primary = relation(contract.primary);
    const inverse = relation(contract.inverse);
    const forward = keys.has(statementKey(primary, OWL_INVERSE_OF, inverse));
    const reverse = keys.has(statementKey(inverse, OWL_INVERSE_OF, primary));
    if (!forward && !reverse) {
      findings.push({
        checkId: "O2",
        ruleId: contract.ruleId,
        code: "missing-inverse-declaration",
        message: `${contract.primary} and ${contract.inverse} must be declared as inverse properties.`,
        witness: [contract.primary, contract.inverse],
      });
    }
  }

  for (const contract of RELATION_SCHEMA_CONTRACT.subproperties) {
    const property = relation(contract.property);
    const parent = relation(contract.parent);
    if (!keys.has(statementKey(property, RDFS_SUBPROPERTY_OF, parent))) {
      findings.push({
        checkId: "O2",
        ruleId: contract.ruleId,
        code: "missing-subproperty-declaration",
        message: `${contract.property} must be declared as a subproperty of ${contract.parent}.`,
        witness: [contract.property, contract.parent],
      });
    }
  }

  return findings.sort((left, right) =>
    `${left.ruleId}:${left.code}:${left.witness.join(":")}`
      .localeCompare(`${right.ruleId}:${right.code}:${right.witness.join(":")}`));
}

/** O3a: descriptor sources assert primary relation directions, never their inverse properties. */
export function validatePrimaryRelations(
  statements: readonly OntologyStatement[],
): OntologyValidationFinding[] {
  const primaryByInverse = new Map(RELATION_SCHEMA_CONTRACT.inverses
    .map(contract => [relation(contract.inverse), contract] as const));
  return statements
    .filter(statement => statement.sourceKind === "descriptors" && primaryByInverse.has(statement.predicate))
    .map(statement => {
      const contract = primaryByInverse.get(statement.predicate)!;
      const subject = compactIri(statement.subject);
      const object = compactIri(statement.object);
      return {
        checkId: "O3a",
        ruleId: contract.ruleId,
        code: "authored-inverse-relation",
        message: `Use ${object} ${contract.primary} ${subject}; do not author ${contract.inverse}.`,
        witness: [subject, contract.inverse, object],
        source: statement.source,
      };
    })
    .sort((left, right) =>
      `${left.source}:${left.witness.join(":")}`.localeCompare(`${right.source}:${right.witness.join(":")}`));
}

/** O3b: a directed descriptor pair has at most one authored relation in each relation family. */
export function validateOneRelationPerFamily(
  statements: readonly OntologyStatement[],
): OntologyValidationFinding[] {
  const familyByPredicate = new Map<string, keyof typeof PRIMARY_RELATION_FAMILIES>();
  for (const [family, properties] of Object.entries(PRIMARY_RELATION_FAMILIES)) {
    for (const property of properties) {
      familyByPredicate.set(relation(property), family as keyof typeof PRIMARY_RELATION_FAMILIES);
    }
  }

  interface PairRelations {
    family: keyof typeof PRIMARY_RELATION_FAMILIES;
    subject: string;
    object: string;
    properties: Set<string>;
    sources: Set<string>;
  }
  const pairs = new Map<string, PairRelations>();
  for (const statement of statements) {
    if (statement.sourceKind !== "descriptors") continue;
    const family = familyByPredicate.get(statement.predicate);
    if (!family) continue;
    const key = `${family}\u0000${statement.subject}\u0000${statement.object}`;
    const pair = pairs.get(key) ?? {
      family,
      subject: compactIri(statement.subject),
      object: compactIri(statement.object),
      properties: new Set<string>(),
      sources: new Set<string>(),
    };
    pair.properties.add(compactIri(statement.predicate));
    pair.sources.add(statement.source);
    pairs.set(key, pair);
  }

  return [...pairs.values()]
    .filter(pair => pair.properties.size > 1)
    .map(pair => {
      const properties = [...pair.properties].sort();
      return {
        checkId: "O3b",
        ruleId: pair.family === "structural" ? "ONT-S3" : "ONT-R1",
        code: "multiple-relations-in-family",
        message: `${pair.subject} to ${pair.object} uses multiple ${pair.family} relations: ${properties.join(", ")}. Choose one.`,
        witness: [pair.subject, pair.object, ...properties],
        source: [...pair.sources].sort().join(", "),
      };
    })
    .sort((left, right) => left.witness.join(":").localeCompare(right.witness.join(":")));
}

function normalizedRelationEdges(
  statements: readonly OntologyStatement[],
  primaryRelations: readonly string[],
  inverseRelations: Readonly<Record<string, string>>,
): DirectedRelationEdge[] {
  const primary = new Set(primaryRelations.map(relation));
  const inverse = new Map(Object.entries(inverseRelations)
    .map(([inverseName, primaryName]) => [relation(inverseName), primaryName]));
  const edges = new Map<string, DirectedRelationEdge>();
  for (const statement of statements) {
    if (statement.sourceKind !== "descriptors") continue;
    let edge: DirectedRelationEdge | undefined;
    if (primary.has(statement.predicate)) {
      edge = {
        from: statement.subject,
        to: statement.object,
        relation: compactIri(statement.predicate),
        source: statement.source,
      };
    } else {
      const primaryName = inverse.get(statement.predicate);
      if (primaryName) {
        edge = {
          from: statement.object,
          to: statement.subject,
          relation: primaryName,
          source: statement.source,
        };
      }
    }
    if (edge) edges.set(`${edge.from}\u0000${edge.to}\u0000${edge.relation}`, edge);
  }
  return [...edges.values()];
}

function cyclicComponents(edges: readonly DirectedRelationEdge[]): string[][] {
  const nodes = new Set<string>();
  const outgoingSets = new Map<string, Set<string>>();
  const incomingSets = new Map<string, Set<string>>();
  for (const edge of edges) {
    nodes.add(edge.from);
    nodes.add(edge.to);
    const outgoing = outgoingSets.get(edge.from) ?? new Set<string>();
    outgoing.add(edge.to);
    outgoingSets.set(edge.from, outgoing);
    const incoming = incomingSets.get(edge.to) ?? new Set<string>();
    incoming.add(edge.from);
    incomingSets.set(edge.to, incoming);
  }
  const outgoing = new Map([...nodes].map(node =>
    [node, [...(outgoingSets.get(node) ?? [])].sort()] as const));
  const incoming = new Map([...nodes].map(node =>
    [node, [...(incomingSets.get(node) ?? [])].sort()] as const));

  const visited = new Set<string>();
  const finished: string[] = [];
  for (const start of [...nodes].sort()) {
    if (visited.has(start)) continue;
    visited.add(start);
    const stack: Array<{ node: string; next: number }> = [{ node: start, next: 0 }];
    while (stack.length > 0) {
      const frame = stack[stack.length - 1];
      const neighbors = outgoing.get(frame.node) ?? [];
      if (frame.next < neighbors.length) {
        const next = neighbors[frame.next++];
        if (!visited.has(next)) {
          visited.add(next);
          stack.push({ node: next, next: 0 });
        }
      } else {
        finished.push(frame.node);
        stack.pop();
      }
    }
  }

  const assigned = new Set<string>();
  const components: string[][] = [];
  for (const start of finished.reverse()) {
    if (assigned.has(start)) continue;
    const component: string[] = [];
    const stack = [start];
    assigned.add(start);
    while (stack.length > 0) {
      const node = stack.pop()!;
      component.push(node);
      for (const next of incoming.get(node) ?? []) {
        if (!assigned.has(next)) {
          assigned.add(next);
          stack.push(next);
        }
      }
    }
    component.sort();
    if (component.length > 1 || (outgoing.get(component[0]) ?? []).includes(component[0])) {
      components.push(component);
    }
  }
  return components.sort((left, right) => left[0].localeCompare(right[0]));
}

function cycleWitness(component: readonly string[], edges: readonly DirectedRelationEdge[]): {
  witness: string[];
  sources: string[];
} {
  const members = new Set(component);
  const relevant = edges.filter(edge => members.has(edge.from) && members.has(edge.to));
  const outgoing = new Map<string, DirectedRelationEdge[]>();
  for (const edge of relevant) {
    const list = outgoing.get(edge.from) ?? [];
    list.push(edge);
    outgoing.set(edge.from, list);
  }
  for (const list of outgoing.values()) {
    list.sort((left, right) =>
      `${left.to}:${left.relation}`.localeCompare(`${right.to}:${right.relation}`));
  }

  const visited = new Set<string>();
  const activeAt = new Map<string, number>();
  const path: string[] = [];
  const pathEdges: DirectedRelationEdge[] = [];
  for (const start of [...component].sort()) {
    if (visited.has(start)) continue;
    visited.add(start);
    activeAt.set(start, 0);
    path.push(start);
    const stack: Array<{ node: string; next: number }> = [{ node: start, next: 0 }];
    while (stack.length > 0) {
      const frame = stack[stack.length - 1];
      const candidates = outgoing.get(frame.node) ?? [];
      if (frame.next >= candidates.length) {
        activeAt.delete(frame.node);
        stack.pop();
        path.pop();
        if (pathEdges.length >= path.length) pathEdges.pop();
        continue;
      }
      const edge = candidates[frame.next++];
      const cycleStart = activeAt.get(edge.to);
      if (cycleStart !== undefined) {
        const cycleEdges = [...pathEdges.slice(cycleStart), edge];
        const witness: string[] = [];
        for (const cycleEdge of cycleEdges) {
          witness.push(compactIri(cycleEdge.from), cycleEdge.relation);
        }
        witness.push(compactIri(edge.to));
        return {
          witness,
          sources: [...new Set(cycleEdges.map(cycleEdge => cycleEdge.source))].sort(),
        };
      }
      if (!visited.has(edge.to)) {
        visited.add(edge.to);
        activeAt.set(edge.to, path.length);
        pathEdges.push(edge);
        path.push(edge.to);
        stack.push({ node: edge.to, next: 0 });
      }
    }
  }
  throw new Error("Cyclic component did not yield a cycle witness.");
}

function structuralEdges(statements: readonly OntologyStatement[]): DirectedRelationEdge[] {
  return normalizedRelationEdges(
    statements,
    ["partOf", "specializes"],
    { hasPart: "partOf", specializedBy: "specializes" },
  );
}

function progressionEdges(statements: readonly OntologyStatement[]): DirectedRelationEdge[] {
  return normalizedRelationEdges(
    statements,
    ["expands", "inverts", "integrates", "translates"],
    {
      expandedBy: "expands",
      invertedBy: "inverts",
      integratedBy: "integrates",
      translatedBy: "translates",
    },
  );
}

/** O4: the combined partOf/specializes descriptor graph is acyclic. */
export function validateStructuralCycles(
  statements: readonly OntologyStatement[],
): OntologyValidationFinding[] {
  const edges = structuralEdges(statements);
  return cyclicComponents(edges).map(component => {
    const cycle = cycleWitness(component, edges);
    return {
      checkId: "O4",
      ruleId: "ONT-S5",
      code: "structural-cycle",
      message: `Structural cycle: ${cycle.witness.join(" -> ")}.`,
      witness: cycle.witness,
      source: cycle.sources.join(", "),
    };
  });
}

interface StructuralPathState {
  edge: DirectedRelationEdge;
  previous?: string;
}

function structuralPathWitness(
  end: string,
  states: ReadonlyMap<string, StructuralPathState>,
  finalEdge: DirectedRelationEdge,
): { witness: string[]; sources: string[] } {
  const reversed: DirectedRelationEdge[] = [];
  let current: string | undefined = end;
  while (current !== undefined) {
    const state = states.get(current);
    if (!state) break;
    reversed.push(state.edge);
    current = state.previous;
  }
  const path = reversed.reverse().concat(finalEdge);
  const witness: string[] = [];
  for (const edge of path) witness.push(compactIri(edge.from), edge.relation);
  witness.push(compactIri(finalEdge.to));
  return {
    witness,
    sources: [...new Set(path.map(edge => edge.source))].sort(),
  };
}

/** O5: in authored child-to-parent direction, partOf must never lead into specializes. */
export function validateStructuralOrdering(
  statements: readonly OntologyStatement[],
): OntologyValidationFinding[] {
  const edges = structuralEdges(statements);
  if (cyclicComponents(edges).length > 0) return [];

  const nodes = new Set<string>();
  const outgoing = new Map<string, DirectedRelationEdge[]>();
  const incomingCount = new Map<string, number>();
  for (const edge of edges) {
    nodes.add(edge.from);
    nodes.add(edge.to);
    const list = outgoing.get(edge.from) ?? [];
    list.push(edge);
    outgoing.set(edge.from, list);
    incomingCount.set(edge.to, (incomingCount.get(edge.to) ?? 0) + 1);
    if (!incomingCount.has(edge.from)) incomingCount.set(edge.from, 0);
  }

  const queue = [...nodes].filter(node => (incomingCount.get(node) ?? 0) === 0);
  const pathWithComposition = new Map<string, StructuralPathState>();
  const findings: OntologyValidationFinding[] = [];
  for (let cursor = 0; cursor < queue.length; cursor++) {
    const node = queue[cursor];
    for (const edge of outgoing.get(node) ?? []) {
      const prior = pathWithComposition.get(node);
      if (edge.relation === "partOf" && !pathWithComposition.has(edge.to)) {
        pathWithComposition.set(edge.to, {
          edge,
          previous: prior ? node : undefined,
        });
      } else if (edge.relation === "specializes" && prior) {
        const path = structuralPathWitness(node, pathWithComposition, edge);
        findings.push({
          checkId: "O5",
          ruleId: "ONT-S4",
          code: "composition-before-specialization",
          message: `In authored child-to-parent direction, partOf must not lead into specializes: ${path.witness.join(" -> ")}.`,
          witness: path.witness,
          source: path.sources.join(", "),
        });
      }

      const remaining = (incomingCount.get(edge.to) ?? 0) - 1;
      incomingCount.set(edge.to, remaining);
      if (remaining === 0) queue.push(edge.to);
    }
  }
  return findings;
}

/** O6: a structural parent cannot mix constituent and specializing children. */
export function validateStructuralChildRoles(
  statements: readonly OntologyStatement[],
): OntologyValidationFinding[] {
  interface ChildRoles {
    partOf: DirectedRelationEdge[];
    specializes: DirectedRelationEdge[];
  }
  const rolesByParent = new Map<string, ChildRoles>();
  for (const edge of structuralEdges(statements)) {
    const roles = rolesByParent.get(edge.to) ?? { partOf: [], specializes: [] };
    roles[edge.relation as keyof ChildRoles].push(edge);
    rolesByParent.set(edge.to, roles);
  }

  const findings: OntologyValidationFinding[] = [];
  for (const [parent, roles] of rolesByParent) {
    if (roles.partOf.length === 0 || roles.specializes.length === 0) continue;
    const constituent = roles.partOf
      .slice()
      .sort((left, right) => left.from.localeCompare(right.from))[0];
    const specialization = roles.specializes
      .slice()
      .sort((left, right) => left.from.localeCompare(right.from))[0];
    const witness = [
      compactIri(constituent.from),
      "partOf",
      compactIri(parent),
      compactIri(specialization.from),
      "specializes",
      compactIri(parent),
    ];
    findings.push({
      checkId: "O6",
      ruleId: "ONT-S5",
      code: "mixed-structural-child-roles",
      message: `${compactIri(parent)} has both constituent child ${compactIri(constituent.from)} and specializing child ${compactIri(specialization.from)}.`,
      witness,
      source: [...new Set([constituent.source, specialization.source])].sort().join(", "),
    });
  }
  return findings.sort((left, right) => left.witness.join(":").localeCompare(right.witness.join(":")));
}

/** O8: the combined progression relation graph is acyclic. */
export function validateProgressionCycles(
  statements: readonly OntologyStatement[],
): OntologyValidationFinding[] {
  const edges = progressionEdges(statements);
  return cyclicComponents(edges).map(component => {
    const cycle = cycleWitness(component, edges);
    return {
      checkId: "O8",
      ruleId: "ONT-R3",
      code: "progression-cycle",
      message: `Progression cycle: ${cycle.witness.join(" -> ")}.`,
      witness: cycle.witness,
      source: cycle.sources.join(", "),
    };
  });
}

export function validateOntology(statements: readonly OntologyStatement[]): OntologyValidationFinding[] {
  return [
    ...validateRelationSchema(statements),
    ...validatePrimaryRelations(statements),
    ...validateOneRelationPerFamily(statements),
    ...validateStructuralCycles(statements),
    ...validateStructuralOrdering(statements),
    ...validateStructuralChildRoles(statements),
    ...validateProgressionCycles(statements),
  ];
}
