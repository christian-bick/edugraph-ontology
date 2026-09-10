import {
  OntologyStatement,
  RELATION_SCHEMA_CONTRACT,
  parseOntologySources,
  validateOneRelationPerFamily,
  validatePrimaryRelations,
  validateRelationSchema,
} from "./OntologyValidation";

const EDU = "http://edugraph.io/edu#";
const OWL_INVERSE_OF = "http://www.w3.org/2002/07/owl#inverseOf";
const RDFS_SUBPROPERTY_OF = "http://www.w3.org/2000/01/rdf-schema#subPropertyOf";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function statement(subject: string, predicate: string, object: string): OntologyStatement {
  return { subject, predicate, object, source: "schema.ttl", sourceKind: "schema" };
}

function validSchema(): OntologyStatement[] {
  return [
    ...RELATION_SCHEMA_CONTRACT.inverses.map(contract =>
      statement(`${EDU}${contract.inverse}`, OWL_INVERSE_OF, `${EDU}${contract.primary}`)),
    ...RELATION_SCHEMA_CONTRACT.subproperties.map(contract =>
      statement(`${EDU}${contract.property}`, RDFS_SUBPROPERTY_OF, `${EDU}${contract.parent}`)),
  ];
}

const parsed = parseOntologySources([{
  name: "schema.ttl",
  kind: "schema",
  text: `@prefix edu: <${EDU}> . @prefix owl: <http://www.w3.org/2002/07/owl#> .
    edu:structuredBy owl:inverseOf edu:structures .`,
}]);
assert(parsed.length === 1 && parsed[0].source === "schema.ttl", "Turtle parsing retains provenance");

const complete = validSchema();
assert(validateRelationSchema(complete).length === 0, "the complete schema contract passes");

const missingInverse = complete.filter(item =>
  !(item.subject === `${EDU}structuredBy` && item.predicate === OWL_INVERSE_OF));
const inverseFindings = validateRelationSchema(missingInverse);
assert(inverseFindings.some(finding =>
  finding.code === "missing-inverse-declaration" && finding.witness[0] === "structures"),
"a missing inverse pair is reported");

const reverseDeclaration = missingInverse.concat(
  statement(`${EDU}structures`, OWL_INVERSE_OF, `${EDU}structuredBy`));
assert(validateRelationSchema(reverseDeclaration).length === 0,
  "declaring an inverse on either side satisfies the contract");

const missingSubproperty = complete.filter(item =>
  !(item.subject === `${EDU}invertedBy` && item.predicate === RDFS_SUBPROPERTY_OF));
const subpropertyFindings = validateRelationSchema(missingSubproperty);
assert(subpropertyFindings.some(finding =>
  finding.code === "missing-subproperty-declaration" && finding.witness[0] === "invertedBy"),
"an inverse subproperty omission is reported");

const schemaWithoutPartOf = complete.filter(item =>
  !(item.subject === `${EDU}partOf` && item.predicate === RDFS_SUBPROPERTY_OF));
const descriptorSubstitute = schemaWithoutPartOf.concat({
  ...statement(`${EDU}partOf`, RDFS_SUBPROPERTY_OF, `${EDU}structures`),
  source: "descriptors.ttl",
  sourceKind: "descriptors" as const,
});
assert(validateRelationSchema(descriptorSubstitute).some(finding =>
  finding.code === "missing-subproperty-declaration" && finding.witness[0] === "partOf"),
"descriptor assertions do not substitute for schema declarations");

const primaryDescriptor = statement(`${EDU}Square`, `${EDU}specializes`, `${EDU}Rectangle`);
primaryDescriptor.source = "areas.ttl";
primaryDescriptor.sourceKind = "descriptors";
assert(validatePrimaryRelations([primaryDescriptor]).length === 0,
  "primary relation assertions pass O3a");

const inverseDescriptor = statement(`${EDU}Rectangle`, `${EDU}specializedBy`, `${EDU}Square`);
inverseDescriptor.source = "areas.ttl";
inverseDescriptor.sourceKind = "descriptors";
const primaryFindings = validatePrimaryRelations([inverseDescriptor]);
assert(primaryFindings.length === 1 && primaryFindings[0].code === "authored-inverse-relation",
  "an inverse-only descriptor assertion fails O3a");
assert(primaryFindings[0].message.includes("Square specializes Rectangle"),
  "O3a suggests the equivalent primary assertion with reversed endpoints");

const schemaInverse = { ...inverseDescriptor, source: "schema.ttl", sourceKind: "schema" as const };
assert(validatePrimaryRelations([schemaInverse]).length === 0,
  "schema statements are outside the primary-only descriptor rule");

function descriptor(subject: string, predicate: string, object: string): OntologyStatement {
  return {
    subject: `${EDU}${subject}`,
    predicate: `${EDU}${predicate}`,
    object: `${EDU}${object}`,
    source: "areas.ttl",
    sourceKind: "descriptors",
  };
}

assert(validateOneRelationPerFamily([
  descriptor("A", "expands", "B"),
  descriptor("A", "integrates", "B"),
]).length === 1, "distinct progression relations on one directed pair fail O3b");
assert(validateOneRelationPerFamily([
  descriptor("A", "translates", "B"),
  descriptor("A", "integrates", "B"),
])[0].witness.join("/") === "A/B/integrates/translates",
"a subproperty and its parent fail with a deterministic witness");
assert(validateOneRelationPerFamily([
  descriptor("A", "expands", "B"),
  descriptor("A", "implies", "B"),
]).length === 0, "relations in different families remain independent");
assert(validateOneRelationPerFamily([
  descriptor("A", "expands", "B"),
  descriptor("A", "integrates", "C"),
  descriptor("B", "integrates", "A"),
]).length === 0, "different directed endpoint pairs remain independent");
assert(validateOneRelationPerFamily([
  { ...descriptor("A", "expands", "B"), sourceKind: "schema" },
  { ...descriptor("A", "integrates", "B"), sourceKind: "schema" },
]).length === 0, "schema declarations are outside O3b");

console.log("Ontology validation tests passed (O2, O3a, O3b).");
