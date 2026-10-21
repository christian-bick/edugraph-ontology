import { readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { parseOntologySources } from "./rdf";
import { projectRdfStatements } from "./core";
import { renderSnapshotSource } from "./snapshot-source";

const [output, ...paths] = process.argv.slice(2);
if (!output || paths.length === 0) throw new Error("Usage: generate-snapshot <output.ts> <schema.ttl> [descriptors.ttl ...]");
const rdf = parseOntologySources(paths.map((path, i) => ({
  name: basename(path), kind: i === 0 ? "schema" : "descriptors", text: readFileSync(path, "utf8"),
})));
const shared = { formatVersion: 1, statements: rdf };
writeFileSync(join(dirname(output), "snapshot.json"), JSON.stringify(shared) + '\n');
// Both clients are built from these same authored records, never expanded relation maps.
const statements = projectRdfStatements(shared.statements);
writeFileSync(output, renderSnapshotSource(statements));
