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

export function validateOntology(statements: readonly OntologyStatement[]): OntologyValidationFinding[] {
  return validateRelationSchema(statements);
}
