import {
  OntologyStatement,
  RELATION_SCHEMA_CONTRACT,
  parseOntologySources,
  validateOneRelationPerFamily,
  validatePrimaryRelations,
  validateProgressionCycles,
  validateRelationSchema,
  validateStructuralChildRoles,
  validateStructuralCycles,
  validateStructuralOrdering,
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

assert(validateStructuralCycles([
  descriptor("A", "partOf", "B"),
  descriptor("B", "specializes", "A"),
])[0].witness.join("/") === "A/partOf/B/specializes/A",
"a mixed structural cycle has a concrete deterministic witness");
assert(validateStructuralCycles([
  descriptor("A", "specializes", "A"),
]).length === 1, "a structural self-edge is a cycle");
assert(validateStructuralCycles([
  descriptor("A", "partOf", "B"),
  descriptor("B", "hasPart", "A"),
]).length === 0, "the same edge authored in both directions is normalized, not treated as a cycle");
assert(validateStructuralCycles([
  descriptor("A", "specializes", "B"),
  descriptor("B", "partOf", "C"),
]).length === 0, "an acyclic mixed structural chain passes O4");
assert(validateStructuralCycles([
  descriptor("A", "partOf", "B"), descriptor("B", "partOf", "A"),
  descriptor("C", "specializes", "D"), descriptor("D", "specializes", "C"),
]).length === 2, "independent cyclic components produce one finding each");

const deepStructure: OntologyStatement[] = [];
for (let index = 0; index < 5000; index++) {
  deepStructure.push(descriptor(`N${index}`, "partOf", `N${index + 1}`));
}
assert(validateStructuralCycles(deepStructure).length === 0,
  "O4 handles a deep acyclic graph without recursive traversal");

assert(validateStructuralOrdering([
  descriptor("A", "partOf", "B"),
  descriptor("B", "specializes", "C"),
])[0].witness.join("/") === "A/partOf/B/specializes/C",
"composition followed by specialization fails with a concrete path");
assert(validateStructuralOrdering([
  descriptor("A", "partOf", "B"),
  descriptor("B", "partOf", "C"),
  descriptor("C", "specializes", "D"),
])[0].witness.join("/") === "A/partOf/B/partOf/C/specializes/D",
"O5 checks the full path rather than adjacent mixed edges only");
assert(validateStructuralOrdering([
  descriptor("A", "specializes", "B"),
  descriptor("B", "partOf", "C"),
]).length === 0, "specialization may lead into composition in authored direction");
assert(validateStructuralOrdering([
  descriptor("Child", "partOf", "Whole"),
  descriptor("Child", "specializes", "BroaderChild"),
]).length === 0, "separate parent paths are not combined into a false ordering violation");
assert(validateStructuralOrdering([
  descriptor("B", "hasPart", "A"),
  descriptor("C", "specializedBy", "B"),
])[0].witness.join("/") === "A/partOf/B/specializes/C",
"O5 normalizes inverse assertions before checking paths");
assert(validateStructuralOrdering([
  descriptor("A", "partOf", "B"),
  descriptor("B", "specializes", "A"),
]).length === 0, "O5 defers cyclic input to O4");

const mixedChildRoles = validateStructuralChildRoles([
  descriptor("Constituent", "partOf", "Parent"),
  descriptor("Narrower", "specializes", "Parent"),
]);
assert(mixedChildRoles.length === 1 &&
  mixedChildRoles[0].witness.join("/") ===
    "Constituent/partOf/Parent/Narrower/specializes/Parent",
"a parent with both child roles fails O6 with one example of each role");
assert(validateStructuralChildRoles([
  descriptor("A", "partOf", "Parent"),
  descriptor("B", "partOf", "Parent"),
]).length === 0, "several constituent children are coherent");
assert(validateStructuralChildRoles([
  descriptor("A", "specializes", "Parent"),
  descriptor("B", "specializes", "Parent"),
]).length === 0, "several specializing children are coherent");
assert(validateStructuralChildRoles([
  descriptor("Child", "partOf", "Whole"),
  descriptor("Child", "specializes", "BroaderChild"),
]).length === 0, "a child may have parents in different roles");
assert(validateStructuralChildRoles([
  descriptor("Parent", "hasPart", "Constituent"),
  descriptor("Parent", "specializedBy", "Narrower"),
]).length === 1, "O6 derives child roles from inverse assertions");

assert(validateProgressionCycles([
  descriptor("A", "expands", "B"),
  descriptor("B", "integrates", "A"),
])[0].witness.join("/") === "A/expands/B/integrates/A",
"a cycle mixing progression relations fails O8 with a concrete witness");
assert(validateProgressionCycles([
  descriptor("A", "expands", "B"),
  descriptor("B", "inverts", "C"),
  descriptor("C", "translates", "A"),
]).length === 1, "a longer mixed progression cycle fails O8");
assert(validateProgressionCycles([
  descriptor("A", "integrates", "A"),
]).length === 1, "a progression self-edge is a cycle");
assert(validateProgressionCycles([
  descriptor("A", "expands", "B"),
  descriptor("B", "expandedBy", "A"),
]).length === 0, "a repeated forward/inverse progression assertion normalizes to one edge");
assert(validateProgressionCycles([
  descriptor("A", "expands", "B"),
  descriptor("B", "translates", "C"),
]).length === 0, "an acyclic mixed progression chain passes O8");
assert(validateProgressionCycles([
  descriptor("A", "expands", "B"),
  descriptor("B", "partOf", "A"),
  descriptor("B", "implies", "A"),
]).length === 0, "structural and constraint edges do not enter the progression graph");

console.log("Ontology validation tests passed (O2, O3a, O3b, O4, O5, O6, O8).");
