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

export function validateOntology(statements: readonly OntologyStatement[]): OntologyValidationFinding[] {
  return [
    ...validateRelationSchema(statements),
    ...validatePrimaryRelations(statements),
    ...validateOneRelationPerFamily(statements),
  ];
}
