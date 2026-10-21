import { deepStrictEqual, ok, strictEqual } from "node:assert";
import { basename, join } from "node:path";
import { runInNewContext } from "node:vm";
import ts from "typescript";
import { bundledStatements } from "./BundledSnapshot";
import { OntologyStatement, projectRdfStatements, RdfStatement } from "./OntologyTypes";
import { renderSnapshotSource } from "./snapshot-source";

function compile(source: string) {
  const path = join(__dirname, "SnapshotFixture.ts").replace(/\\/g, "/");
  const options: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES2019, module: ts.ModuleKind.CommonJS,
    strict: true, skipLibCheck: true, types: [], declaration: true,
    newLine: ts.NewLineKind.LineFeed, removeComments: true,
  };
  const host = ts.createCompilerHost(options);
  const read = host.getSourceFile.bind(host);
  host.getSourceFile = (name, language, onError, shouldCreateNewSourceFile) =>
    name === path ? ts.createSourceFile(name, source, language, true) :
      read(name, language, onError, shouldCreateNewSourceFile);
  const outputs = new Map<string, string>();
  host.writeFile = (name, text) => { outputs.set(basename(name), text); };
  const program = ts.createProgram([path], options, host);
  const diagnostics = ts.getPreEmitDiagnostics(program);
  if (diagnostics.length === 0) program.emit();
  return { diagnostics, outputs };
}

// Keep the real schema/descriptor mixture that exposed TS2590 and exercise additional RDF shapes.
const rdf: RdfStatement[] = Array.from({ length: 32 }, (_, i) => ({
  subject: { termType: i % 2 ? "NamedNode" : "BlankNode", value: `urn:subject:${i}` },
  predicate: { termType: "NamedNode", value: `urn:predicate:${i % 7}` },
  object: i % 3 === 0
    ? { termType: "Literal", value: `Value ${i}: "quoted"\nλ`, language: i % 2 ? "el" : "", datatype: "urn:datatype:text" }
    : { termType: i % 2 ? "NamedNode" : "BlankNode", value: `urn:object:${i}` },
  graph: i % 2 ? { termType: "NamedNode", value: "urn:graph" } : { termType: "DefaultGraph", value: "" },
  source: `fixture-${i % 4}.ttl`,
  sourceKind: i % 2 ? "schema" : "descriptors",
}));
const statements = [...bundledStatements, ...projectRdfStatements(rdf)];
const result = compile(renderSnapshotSource(statements));
deepStrictEqual(result.diagnostics.map(d => ts.flattenDiagnosticMessageText(d.messageText, "\n")), []);
const js = result.outputs.get("SnapshotFixture.js");
ok(js, "The large generated snapshot emits JavaScript.");
const sandbox: { exports: { bundledStatements?: unknown } } = { exports: {} };
runInNewContext(js, sandbox);
// JSON restores local prototypes for a cross-realm comparison, retaining every field and its order.
deepStrictEqual(JSON.parse(JSON.stringify(sandbox.exports.bundledStatements)), statements);
strictEqual(result.outputs.get("SnapshotFixture.d.ts"),
  'import type { OntologyStatement } from "./core";\nexport declare const bundledStatements: readonly OntologyStatement[];\n');

const malformed = [{ ...statements[0], sourceKind: "invalid" }] as unknown as OntologyStatement[];
ok(compile(renderSnapshotSource(malformed)).diagnostics.some(d => d.code === 2322),
  "Per-record validation still rejects invalid source kinds.");
const extra = [{ ...statements[0], unexpected: true }];
ok(compile(renderSnapshotSource(extra)).diagnostics.some(d => d.code === 2353),
  "Widening must retain excess-property checking rather than asserting records unchecked.");
const empty = compile(renderSnapshotSource([]));
deepStrictEqual(empty.diagnostics, []);
console.log("Large snapshot compilation, checked records, runtime parity and declaration tests passed.");
