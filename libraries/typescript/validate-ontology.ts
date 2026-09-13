import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { OntologySource } from "./OntologyTypes";
import { assessOntologySources } from "./rdf";

const paths = process.argv.slice(2);
if (paths.length === 0) {
  console.error("Usage: validate-ontology <core-schema.ttl> [descriptor.ttl ...]");
  process.exitCode = 2;
} else {
  try {
    const sources: OntologySource[] = paths.map((path, index) => ({
      name: basename(path), kind: index === 0 ? "schema" : "descriptors", text: readFileSync(path, "utf8"),
    }));
    const assessment = assessOntologySources(sources);
    if (assessment.status === "input-error") {
      console.error(`${assessment.error.code}: ${assessment.error.message}`);
    } else {
      for (const f of assessment.findings) console.error(`${f.checkId} ${f.ruleId} ${f.code} ${f.source ?? ""}: ${f.message}`);
      for (const c of assessment.checks) if (c.status === "skipped" || c.status === "error") {
        console.error(`${c.checkId} ${c.status}: ${c.reason}`);
      }
    }
    if (assessment.status === "valid") console.log(`Ontology validation passed (${sources.length} source files).`);
    else { console.error(`Ontology validation ${assessment.status}.`); process.exitCode = 1; }
  } catch (error) {
    console.error(`Input error: ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  }
}
