import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";
import { OntologyContext, RdfStatement, RelationAccess } from "./core";

interface Query {
  op: "related" | "traverse" | "incompatible" | "deductCompatible" | "deductAdmitting" | "inspectLabel";
  iri: string; property: string; access?: RelationAccess; a: string; b: string; iris: string[];
  expected: unknown;
}
const fixture: { snapshot: { statements: RdfStatement[] }; queries: Query[] } =
  JSON.parse(readFileSync("query-fixtures.json", "utf8"));
const context = new OntologyContext(fixture.snapshot.statements);
for (const q of fixture.queries) {
  let actual: unknown;
  switch (q.op) {
    case "related": actual = context.related(q.iri, q.property, q.access); break;
    case "traverse": actual = context.traverse(q.iri, q.property); break;
    case "incompatible": actual = context.incompatible(q.a, q.b); break;
    case "deductCompatible": actual = context.deductCompatible(q.iris); break;
    case "deductAdmitting": actual = context.deductAdmitting(q.iris); break;
    case "inspectLabel": actual = context.inspectLabel(q.iri); break;
  }
  assert.deepEqual(actual, q.expected, JSON.stringify(q));
}
console.log(`Shared query conformance passed (${fixture.queries.length} cases).`);
