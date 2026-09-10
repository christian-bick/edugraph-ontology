import { readFileSync, readdirSync } from "node:fs";
import { basename, relative, resolve } from "node:path";
import { validateDocumentation } from "./DocumentationValidation";
import { OntologySource, parseOntologySources } from "./OntologyValidation";

function walk(root: string, directory = root): string[] {
  const paths: string[] = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && [".git", ".venv", "dist", "node_modules"].includes(entry.name)) continue;
    const path = resolve(directory, entry.name);
    paths.push(path);
    if (entry.isDirectory()) paths.push(...walk(root, path));
  }
  return paths;
}

const [rootArgument, ...ontologyPaths] = process.argv.slice(2);
if (!rootArgument || ontologyPaths.length === 0) {
  console.error("Usage: validate-documentation <repository-root> <core-schema.ttl> [descriptor.ttl ...]");
  process.exitCode = 2;
} else {
  const root = resolve(rootArgument);
  const files = walk(root);
  const repositoryPath = (path: string) => relative(root, path).replace(/\\/g, "/");
  const documents = files
    .filter(path => path.endsWith(".md"))
    .map(path => ({ name: repositoryPath(path), text: readFileSync(path, "utf8") }));
  const sources: OntologySource[] = ontologyPaths.map(path => ({
    name: basename(path),
    kind: basename(path) === "core-schema.ttl" ? "schema" : "descriptors",
    text: readFileSync(path, "utf8"),
  }));
  const findings = validateDocumentation(
    documents,
    files.map(repositoryPath),
    parseOntologySources(sources),
  );
  for (const finding of findings) {
    console.error(`${finding.checkId} ${finding.ruleId} ${finding.code} ${finding.source ?? ""}: ${finding.message}`);
  }
  if (findings.length > 0) {
    console.error(`Documentation validation failed with ${findings.length} finding(s).`);
    process.exitCode = 1;
  } else {
    console.log(`Documentation validation passed (${documents.length} Markdown files).`);
  }
}
