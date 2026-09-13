import { deepStrictEqual } from "node:assert";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { assessOntologySources } from "./rdf";
import {
  OntologyStatement,
  RELATION_SCHEMA_CONTRACT,
  parseOntologySources,
  validateOntology,
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

// Exercise parsing and orchestration together, beyond the focused rule tests above.
const schemaTurtle = validSchema().map(item =>
  `<${item.subject}> <${item.predicate}> <${item.object}> .`).join("\n");
const prefixes = `@prefix edu: <${EDU}> .\n`;
const validDescriptors = [
  "edu:Child edu:partOf edu:Whole .",
  "edu:Child edu:specializes edu:BroaderChild .",
  "edu:BroaderChild edu:partOf edu:Field .",
  "edu:Child edu:expands edu:Foundation .",
  "edu:Child edu:implies edu:Foundation .",
];

function validateTurtle(lines: readonly string[], schema = schemaTurtle) {
  return validateOntology(parseOntologySources([
    { name: "schema.ttl", kind: "schema", text: schema },
    { name: "areas.ttl", kind: "descriptors", text: prefixes + lines.join("\n") },
  ]));
}

deepStrictEqual(validateTurtle(validDescriptors), [],
  "the public gate accepts separate parent roles, valid ordering, and independent relation families");

const gateCases = [
  {
    lines: ["edu:Rectangle edu:specializedBy edu:Square ."],
    checkId: "O3a", ruleId: "ONT-S3", code: "authored-inverse-relation",
    witness: ["Rectangle", "specializedBy", "Square"],
  },
  {
    lines: ["edu:A edu:translates edu:B .", "edu:A edu:integrates edu:B ."],
    checkId: "O3b", ruleId: "ONT-R1", code: "multiple-relations-in-family",
    witness: ["A", "B", "integrates", "translates"],
  },
  {
    lines: ["edu:A edu:partOf edu:B .", "edu:B edu:specializes edu:A ."],
    checkId: "O4", ruleId: "ONT-S5", code: "structural-cycle",
    witness: ["A", "partOf", "B", "specializes", "A"],
  },
  {
    lines: ["edu:A edu:partOf edu:B .", "edu:B edu:partOf edu:C .",
      "edu:C edu:specializes edu:D ."],
    checkId: "O5", ruleId: "ONT-S4", code: "composition-before-specialization",
    witness: ["A", "partOf", "B", "partOf", "C", "specializes", "D"],
  },
  {
    lines: ["edu:Constituent edu:partOf edu:Parent .", "edu:Narrower edu:specializes edu:Parent ."],
    checkId: "O6", ruleId: "ONT-S5", code: "mixed-structural-child-roles",
    witness: ["Constituent", "partOf", "Parent", "Narrower", "specializes", "Parent"],
  },
  {
    lines: ["edu:A edu:expands edu:B .", "edu:B edu:integrates edu:A ."],
    checkId: "O8", ruleId: "ONT-R3", code: "progression-cycle",
    witness: ["A", "expands", "B", "integrates", "A"],
  },
];

function diagnosticFields(findings: ReturnType<typeof validateOntology>) {
  return findings.map(({ checkId, ruleId, code, source, witness }) =>
    ({ checkId, ruleId, code, source, witness }));
}

for (const { lines, ...expected } of gateCases) {
  const findings = validateTurtle(lines);
  deepStrictEqual(diagnosticFields(findings), [{ ...expected, source: "areas.ttl" }],
    `${expected.checkId} is wired into the public gate with a useful diagnostic`);
  assert(findings[0].message.length > 0, `${expected.checkId} explains the finding`);
  deepStrictEqual(diagnosticFields(validateTurtle([...lines].reverse())), diagnosticFields(findings),
    `${expected.checkId} preserves diagnostic fields when these fixture statements are reordered`);
}

for (const [predicate, subject, code, witness] of [
  [OWL_INVERSE_OF, "structuredBy", "missing-inverse-declaration", ["structures", "structuredBy"]],
  [RDFS_SUBPROPERTY_OF, "partOf", "missing-subproperty-declaration", ["partOf", "structures"]],
] as const) {
  const incompleteSchema = validSchema().filter(item =>
    !(item.predicate === predicate && item.subject === `${EDU}${subject}`))
    .map(item => `<${item.subject}> <${item.predicate}> <${item.object}> .`).join("\n");
  deepStrictEqual(diagnosticFields(validateTurtle([], incompleteSchema)), [{
    checkId: "O2", ruleId: "ONT-S3", code, witness: [...witness], source: undefined,
  }], "the public gate detects missing schema contracts");
}

const combined = validateTurtle([
  ...gateCases[2].lines, // Structural cycle: O5 must defer while independent checks still run.
  "edu:X edu:expandedBy edu:Y .",
  "edu:P edu:expands edu:Q .", "edu:Q edu:integrates edu:P .",
]);
deepStrictEqual(combined.map(finding => finding.checkId).sort(), ["O3a", "O4", "O8"],
  "the gate collects independent errors and defers ordering on cyclic structure");

// O3a diagnoses any authored inverse assertion without inventing named-entity identity.
const inverseTermCases = [
  { text: "edu:A edu:hasPart edu:B .", entities: [`${EDU}A`, `${EDU}B`], kind: "NamedNode" },
  { text: 'edu:A edu:hasPart "some text" .', entities: [`${EDU}A`], kind: "Literal", display: 'literal "some text"' },
  { text: 'edu:A edu:hasPart "https://example.org/B" .', entities: [`${EDU}A`], kind: "Literal", display: 'literal "https://example.org/B"' },
  { text: 'edu:A edu:hasPart "Text"@de .', entities: [`${EDU}A`], kind: "Literal", display: 'literal "Text"@de' },
  { text: 'edu:A edu:hasPart "12"^^<http://www.w3.org/2001/XMLSchema#integer> .', entities: [`${EDU}A`], kind: "Literal", display: 'literal "12"^^<http://www.w3.org/2001/XMLSchema#integer>' },
  { text: "edu:A edu:hasPart _:b .", entities: [`${EDU}A`], kind: "BlankNode" },
  { text: "_:a edu:hasPart edu:B .", entities: [`${EDU}B`], kind: "BlankNode" },
  { text: "_:a edu:hasPart _:b .", entities: [], kind: "BlankNode" },
] as const;
for (const fixture of inverseTermCases) {
  const sources = [
    { name: "schema.ttl", kind: "schema" as const, text: schemaTurtle },
    { name: "terms.ttl", kind: "descriptors" as const, text: prefixes + fixture.text },
  ];
  const statements = parseOntologySources(sources);
  const direct = validatePrimaryRelations(statements);
  const assessment = assessOntologySources(sources);
  assert(assessment.status === "invalid", "an inverse assertion remains invalid for every RDF term kind");
  assert(assessment.checks.find(check => check.checkId === "O3a")?.status === "failed", "the public assessment runs O3a");
  const publicFindings = assessment.findings.filter(finding => finding.checkId === "O3a");
  assert(direct.length === 1 && publicFindings.length === 1, "both APIs preserve the O3a finding");
  deepStrictEqual(publicFindings, direct, "the public path preserves the individual validator's diagnostic");
  const finding = direct[0];
  deepStrictEqual([finding.checkId, finding.ruleId, finding.code], ["O3a", "ONT-S3", "authored-inverse-relation"]);
  deepStrictEqual(finding.references, {
    entities: [...fixture.entities], properties: [`${EDU}hasPart`], sources: [{ name: "terms.ttl", kind: "descriptors" }],
  }, "navigation references contain only named nodes plus the property and source");
  assert(finding.source === "terms.ttl", "legacy source information remains available");
  if (fixture.kind === "NamedNode") {
    assert(finding.message.includes("Use B partOf A"), "named endpoints retain valid reversal guidance");
    deepStrictEqual(finding.witness, ["A", "hasPart", "B"]);
  } else {
    assert(!finding.message.startsWith("Use "), "non-named endpoints receive review guidance");
    if (fixture.kind === "Literal") {
      assert(finding.message.includes("cannot be repaired by simply reversing endpoints"), "literal reversal is explicitly ruled out");
      assert(finding.message.includes(fixture.display) && finding.witness.includes(fixture.display), "literal identity survives in text and witness");
    } else {
      assert(finding.message.includes("blank node") && finding.witness.some(term => term.startsWith("blank node _:")), "blank-node identity is explicit");
    }
  }
  // Flattened callers may supply term kinds without retaining the original RDF objects.
  deepStrictEqual(validatePrimaryRelations(statements.map(({ rdf, ...flat }) => flat))[0].references,
    finding.references, "flat term kinds are sufficient for safe navigation");
}
const iriValue = `${EDU}B`;
for (const objectKind of ["NamedNode", "Literal", "BlankNode"] as const) {
  const finding = validatePrimaryRelations([{ ...descriptor("A", "hasPart", "B"), objectKind }])[0];
  assert(finding.references?.entities.includes(iriValue) === (objectKind === "NamedNode"),
    "the same IRI-looking value changes identity only with its RDF term kind");
}

// Run the same compiled CLI used by the build, using isolated temporary input files.
const cliDirectory = mkdtempSync(join(tmpdir(), "edugraph-validation-"));
try {
  const schemaPath = join(cliDirectory, "schema.ttl");
  const descriptorPath = join(cliDirectory, "areas.ttl");
  writeFileSync(schemaPath, schemaTurtle);
  const runCli = (text: string) => {
    writeFileSync(descriptorPath, text);
    const result = spawnSync(process.execPath,
      [join(__dirname, "validate-ontology.js"), schemaPath, descriptorPath],
      { encoding: "utf8", timeout: 10000 });
    assert(!result.error, `CLI could not run: ${result.error?.message}`);
    assert(result.signal === null, "CLI completes without a signal");
    return result;
  };
  const valid = runCli(prefixes + validDescriptors.join("\n"));
  assert(valid.status === 0 && valid.stdout.includes("Ontology validation passed"),
    "CLI succeeds for valid Turtle");
  assert(valid.stderr === "", "valid input has no error diagnostics");

  const invalid = runCli(prefixes + gateCases[5].lines.join("\n"));
  assert(invalid.status === 1, "CLI exits with validation failure for a progression cycle");
  assert(invalid.stderr.includes("O8 ONT-R3 progression-cycle areas.ttl") &&
    invalid.stderr.includes("A -> expands -> B -> integrates -> A"),
  "CLI prints the rule, code, source, and cycle witness");
  assert(!invalid.stdout.includes("Ontology validation passed"), "invalid input cannot report success");

  const malformed = runCli(prefixes + "edu:A edu:partOf .");
  assert(malformed.status !== null && malformed.status !== 0, "CLI rejects malformed Turtle");
  assert(/line\s+\d+/i.test(malformed.stderr), "parse failure identifies the input line");
  assert(!malformed.stdout.includes("Ontology validation passed"), "parse failure cannot report success");
} finally {
  rmSync(cliDirectory, { recursive: true, force: true });
}

console.log("Ontology validation tests passed (O2, O3a, O3b, O4, O5, O6, O8, public gate, CLI).");
