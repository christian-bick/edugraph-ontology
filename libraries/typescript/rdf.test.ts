import { deepStrictEqual, strictEqual, notStrictEqual, throws } from "node:assert";
import { parseOntologySources, OntologyParseError } from "./rdf";
import { projectRdfStatements } from "./core";
const text = '@prefix e: <https://example.org/> . _:same e:label "Hallo"@de; e:value "12"^^<http://www.w3.org/2001/XMLSchema#integer>; e:ref _:same .';
const parsed = parseOntologySources([
  { name: "a.ttl", kind: "descriptors", text }, { name: "b.ttl", kind: "descriptors", text },
]);
deepStrictEqual(parsed[0].object, { termType: "Literal", value: "Hallo", language: "de", datatype: "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString" });
strictEqual(parsed[1].object.termType, "Literal");
if (parsed[1].object.termType === "Literal") strictEqual(parsed[1].object.datatype, "http://www.w3.org/2001/XMLSchema#integer");
strictEqual(parsed[0].subject.value, parsed[2].object.value);
notStrictEqual(parsed[0].subject.value, parsed[3].subject.value);
strictEqual(projectRdfStatements(parsed)[0].rdf, parsed[0]);
for (const [format, source] of [
  ["TriG", '<https://e/g> { <https://e/s> <https://e/p> <https://e/o> . }'],
  ["N-Quads", '<https://e/s> <https://e/p> <https://e/o> <https://e/g> .'],
] as const) {
  strictEqual(parseOntologySources([{ name: format, kind: "descriptors", text: source, format }])[0].graph.value, "https://e/g");
}
throws(() => parseOntologySources([{ name: "bad.ttl", kind: "schema", text: "@prefix broken" }]),
  (error: unknown) => error instanceof OntologyParseError && error.source === "bad.ttl" && error.code === "parse-error");
throws(() => parseOntologySources([{ name: "a", kind: "schema", text: "", format: "RDF/XML" as "Turtle" }]),
  (error: unknown) => error instanceof OntologyParseError && error.code === "unsupported-format");
throws(() => parseOntologySources([{ name: "a", kind: "schema", text: "" }, { name: "a", kind: "schema", text: "" }]), OntologyParseError);
console.log("RDF term and source tests passed.");
