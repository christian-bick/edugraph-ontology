import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
const [rootArg, targetArg] = process.argv.slice(2);
if (!rootArg || !targetArg) throw new Error("Usage: package-docs <repository> <package>");
const root = resolve(rootArg), target = resolve(targetArg);
function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if ([".git", ".venv", "dist", "node_modules", "core-dist", "bootstrap"].includes(entry.name)) return [];
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}
const documents = [...walk(join(root, "docs")).filter(path => path.endsWith(".md")),
  ...["README.md", "DOCS.md", "DESIGN.md", "AGENTS.md", "DOCS_ONTOLOGY.md"].map(name => join(root, name))];
// Follow linked Markdown outside docs/ (for example the public package API guide).
const included = new Set(documents);
for (let cursor = 0; cursor < documents.length; cursor++) {
  const source = documents[cursor];
  for (const match of readFileSync(source, "utf8").matchAll(/\[[^\]\n]*\]\(([^\s)]+)\)/g)) {
    const link = match[1].split("#")[0];
    if (!link || /^[a-z]+:/i.test(link)) continue;
    const path = resolve(dirname(source), link);
    const name = relative(root, path);
    if (!name.startsWith("..") && path.endsWith(".md") && existsSync(path) && !included.has(path)) {
      documents.push(path); included.add(path);
    }
  }
}
for (const source of documents) {
  const destination = join(target, "references", relative(root, source));
  mkdirSync(dirname(destination), { recursive: true }); copyFileSync(source, destination);
}
// Original repository-code links remain intentional external references, listed for artifact QA.
const external = [...new Set(documents.flatMap(source => {
  const links = [...readFileSync(source, "utf8").matchAll(/\[[^\]\n]*\]\(([^\s)]+)\)/g)];
  return links.flatMap(match => {
    const link = match[1].split("#")[0];
    if (!link || /^[a-z]+:/i.test(link)) return [];
    const path = resolve(dirname(source), link);
    const name = relative(root, path).replace(/\\/g, "/");
    if (name.startsWith("../") || path.endsWith(".md") || !existsSync(path)) return [];
    return [name];
  });
}))].sort();
writeFileSync(join(target, "RULES.md"), '# Packaged ontology references\n\n' +
  'Start at [the original reference index](references/docs/README.md). These are the original documents for this package version.\n\n' +
  'Agents can read these files locally. Browser help panels may explicitly bundle `edugraph-ts/references/docs/*.md`; core imports never load Markdown.\n\n' +
  'Relative links to the repository code and source files listed below are intentionally outside this package. Resolve them in the matching release tag or preview commit, not live main.\n\n' +
  external.map(path => '- `references/' + path + '`').join('\n') + '\n');
// Ensure the originals were copied byte-for-byte.
for (const source of documents) if (!readFileSync(source).equals(readFileSync(join(target, "references", relative(root, source))))) throw new Error(`Document changed: ${source}`);
