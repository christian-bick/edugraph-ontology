import { readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";
import { parseOntologySources } from "./rdf";
import { projectRdfStatements } from "./core";

const [output, ...paths] = process.argv.slice(2);
if (!output || paths.length === 0) throw new Error("Usage: generate-snapshot <output.ts> <schema.ttl> [descriptors.ttl ...]");
const statements = projectRdfStatements(parseOntologySources(paths.map((path, i) => ({
  name: basename(path), kind: i === 0 ? "schema" : "descriptors", text: readFileSync(path, "utf8"),
}))));
writeFileSync(output, '// Generated from authored Turtle; includes original term/source information.\n' +
  'import type { OntologyStatement } from "./core";\n' +
  '/** Original release facts; inverse and superproperty access is derived by the core. */\n' +
  'export const bundledStatements: readonly OntologyStatement[] = ' + JSON.stringify(statements) + ';\n');
