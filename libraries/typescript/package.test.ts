import { strictEqual, deepStrictEqual, ok } from "node:assert";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, relative } from "node:path";
import { runInNewContext } from "node:vm";
import { buildSync } from "esbuild";
import { validateDocumentation } from "./DocumentationValidation";
import { bundledStatements } from "./BundledSnapshot";
import { bundledContext, isLabelEligible, specializesTransitive, deductCompatible } from "./Relations";
import { Area, Scope } from "./generated";
import { createOntologyContext, RELATION_IRIS } from "./core";
const archive = process.argv[2];
if (!archive) throw new Error("Usage: package.test <npm-pack.tgz>");
const directory = mkdtempSync(join(tmpdir(), "edugraph-package-"));
function run(command: string, args: string[], cwd = directory, env = process.env): string {
  const result = spawnSync(command, args, { cwd, env, encoding: "utf8", timeout: 30000 });
  if (result.error || result.status !== 0) throw new Error(`${command}: ${result.error?.message ?? result.stderr}`);
  return result.stdout;
}
function walk(dir: string): string[] {
  return readdirSync(dir, {withFileTypes:true}).flatMap(entry => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? [path, ...walk(path)] : [path];
  });
}
try {
  run("tar", ["-xf", resolve(archive), "-C", directory]);
  mkdirSync(join(directory, "node_modules"));
  const installed = join(directory, "node_modules", "edugraph-ts");
  renameSync(join(directory, "package"), installed);
  run(process.execPath, ["-e", `
    const core = require('edugraph-ts/core');
    if (core.createOntologyContext([]).descriptors().length !== 0) throw Error('core import failed');
    if (Object.keys(require.cache).some(p => /[\\/](rdf|Area|Ability|Scope|Relations|BundledSnapshot)\\.js$/.test(p))) throw Error('core loaded optional data/parser');
  `], directory, { ...process.env, NODE_PATH: "" });
  run(process.execPath, ["-e", `
    const assert = require('node:assert/strict');
    const core = require('edugraph-ts/core');
    const released = require('edugraph-ts/generated');
    const supplied = core.createOntologyContext(released.bundledContext.statements);
    assert.equal(released.isLabelEligible(released.Area.Rectangle), supplied.isLabelEligible(released.Area.Rectangle));
    assert.deepEqual(released.specializesTransitive(released.Area.Square), supplied.traverse(released.Area.Square, core.RELATION_IRIS.specializes));
    assert.deepEqual(released.deductCompatible([released.Scope.NumbersSmaller10]), supplied.deductCompatible([released.Scope.NumbersSmaller10]));
    assert.equal(released.involvementStatement(released.Scope.IntegerNumbers), supplied.involvementStatement(released.Scope.IntegerNumbers));
    assert.ok(released.involvementStatement(released.Scope.IntegerNumbers).startsWith('Involves Integer Numbers:'));
  `], directory, { ...process.env, NODE_PATH: "" });
  writeFileSync(join(directory, "consumer.ts"), `
    import { createOntologyContext, assessOntology, OntologyStatement } from 'edugraph-ts/core';
    import { involvementStatement, Scope } from 'edugraph-ts/generated';
    const facts: readonly OntologyStatement[] = [];
    const context = createOntologyContext(facts);
    const status: 'valid' | 'invalid' | 'incomplete' = assessOntology(context).status;
    void status;
    const rendered: string = involvementStatement(Scope.IntegerNumbers, { includeComment: false });
    const supplied: string = context.involvementStatement('urn:descriptor', { label: 'Custom label', commentPrefix: '' });
    void rendered; void supplied;
  `);
  run(process.execPath, [require.resolve("typescript/bin/tsc"), "--strict", "--skipLibCheck", "--target", "es2019", "--module", "node16", "--moduleResolution", "node16", "--noEmit", "consumer.ts"]);
  for (const entry of ["core", "rdf"]) {
    const contents = entry === "core"
      ? `import {createOntologyContext} from 'edugraph-ts/core'; export const count = createOntologyContext([]).descriptors().length;`
      : `import {parseOntologySources} from 'edugraph-ts/rdf'; export const count = parseOntologySources([{name:'a.ttl',kind:'descriptors',text:'<https://e/a> <https://e/b> "text" .'}]).length;`;
    const result = buildSync({ stdin: { contents, resolveDir: directory }, bundle: true, write: false,
      platform: "browser", format: "iife", globalName: "ontologyTest", metafile: true,
      nodePaths: [join(process.cwd(), "node_modules")],
    });
    const browserGlobals = { AbortController, AbortSignal, TextEncoder, TextDecoder, setTimeout, clearTimeout, queueMicrotask };
    const sandbox: { ontologyTest?: {count:number}; self: typeof browserGlobals } = { ...browserGlobals, self: browserGlobals };
    runInNewContext(result.outputFiles[0].text, sandbox);
    strictEqual(sandbox.ontologyTest?.count, entry === "core" ? 0 : 1);
    ok(!Object.keys(result.metafile!.inputs).some(path => /[\\/](Area|Scope|Ability|BundledSnapshot)\.ts$/.test(path)));
  }
  const files = walk(installed).map(path => relative(installed, path).replace(/\\/g, "/"));
  const docs = files.filter(path => path.endsWith(".md")).map(name => ({name,text:readFileSync(join(installed,name),"utf8")}));
  const guide = readFileSync(join(installed,"RULES.md"),"utf8");
  const external = [...guide.matchAll(/^- `(references\/[^`]+)`$/gm)].map(match=>match[1]);
  const paths = [...files, ...external];
  // Historical docs have repository-relative semantics inside references/.
  const findings = validateDocumentation(docs.filter(d=>d.name.startsWith('references/')).map(d=>({name:d.name.slice('references/'.length),text:d.text})),
    paths.filter(p=>p.startsWith('references/')).map(p=>p.slice('references/'.length)), bundledStatements);
  deepStrictEqual(findings, [], 'packaged original documents retain their link and rule closure');
  ok(files.includes('references/docs/content-evidence.md'));
  ok(!files.some(p=>p.endsWith('.test.js')));
  // Selected equivalence guards preserve release adapters without reimplementing generation.
  const supplied = createOntologyContext(bundledStatements);
  strictEqual(isLabelEligible(Area.Rectangle), supplied.isLabelEligible(Area.Rectangle));
  deepStrictEqual(specializesTransitive(Area.Square), supplied.traverse(Area.Square, RELATION_IRIS.specializes));
  deepStrictEqual(deductCompatible([Scope.NumbersSmaller10]), supplied.deductCompatible([Scope.NumbersSmaller10]));
  strictEqual(bundledContext.isLabelEligible(Area.CircularShapes), false);
  console.log('Packed exports, core isolation, browser bundles, declarations, rule assets and adapters passed.');
} finally {
  // directory is the unique temporary root created by this test; all extraction stays inside it.
  rmSync(directory, {recursive:true,force:true});
}
