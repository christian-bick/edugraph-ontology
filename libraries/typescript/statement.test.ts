import { strict as assert } from "node:assert";
import { readFileSync } from "node:fs";
import { createOntologyContext, InvolvementStatementOptions, OntologyStatement } from "./core";
import { Scope, involvementStatement } from "./index";
import { involvementStatement as generatedStatement } from "./generated";

interface Case {
  name: string; iri: string; dimension?: string; known?: boolean;
  definitions?: string[]; comments?: string[]; labels?: string[];
  options?: InvolvementStatementOptions; expected?: string; error?: string;
}
const cases: Case[] = JSON.parse(readFileSync("statement-fixtures.json", "utf8"));
const RDFS = "http://www.w3.org/2000/01/rdf-schema#";
const fact = (subject: string, predicate: string, object: string, objectKind: "NamedNode" | "Literal"): OntologyStatement =>
  ({ subject, predicate, object, objectKind, source: "text.ttl", sourceKind: "descriptors" });
for (const c of cases) {
  const rows: OntologyStatement[] = c.known === false ? [] : [fact(c.iri,
    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type", "http://edugraph.io/edu#" + (c.dimension ?? "Scope"), "NamedNode")];
  for (const [predicate, values] of [["isDefinedBy", c.definitions], ["comment", c.comments], ["label", c.labels]] as const)
    for (const value of values ?? []) rows.push(fact(c.iri, RDFS + predicate, value, "Literal"));
  const context = createOntologyContext(rows);
  if (c.error) assert.throws(() => context.involvementStatement(c.iri, c.options), new RegExp(c.error), c.name);
  else {
    assert.equal(context.involvementStatement(c.iri, c.options), c.expected, c.name);
    assert.equal(createOntologyContext([...rows].reverse()).involvementStatement(c.iri, c.options), c.expected, c.name);
  }
}
const iri = "urn:Context";
const rows = [fact(iri, "http://www.w3.org/1999/02/22-rdf-syntax-ns#type", "http://edugraph.io/edu#Scope", "NamedNode"),
  fact(iri, RDFS + "isDefinedBy", "Original.", "Literal"),
  fact(iri, RDFS + "comment", "urn:not-a-literal", "NamedNode"),
  { ...fact(iri, RDFS + "comment", "Schema text.", "Literal"), sourceKind: "schema" as const }];
const before = createOntologyContext(rows);
rows.push(fact(iri, RDFS + "comment", "New example.", "Literal"));
const after = createOntologyContext(rows);
assert.equal(before.involvementStatement(iri), "Involves Context: Original.");
assert.equal(after.involvementStatement(iri), "Involves Context: Original. For example: New example.");
const expected = "Involves Integer Numbers: Numbers with no fractional part, whether negative, zero, or positive. For example: -3, 0, 1, 10, and 1345. The value 2 remains an integer when written as 2.0.";
assert.equal(involvementStatement(Scope.IntegerNumbers), expected);
assert.equal(generatedStatement(Scope.IntegerNumbers), expected);
console.log(`Involvement statements passed (${cases.length} shared cases, snapshot isolation, root/generated adapters).`);
