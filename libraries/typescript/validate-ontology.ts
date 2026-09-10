import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { OntologySource, parseOntologySources, validateOntology } from "./OntologyValidation";

const paths = process.argv.slice(2);
if (paths.length === 0) {
  console.error("Usage: validate-ontology <core-schema.ttl> [descriptor.ttl ...]");
  process.exitCode = 2;
} else {
  const sources: OntologySource[] = paths.map((path, index) => ({
    name: basename(path),
    kind: index === 0 ? "schema" : "descriptors",
    text: readFileSync(path, "utf8"),
  }));
  const findings = validateOntology(parseOntologySources(sources));
  for (const finding of findings) {
    const location = finding.source ? ` ${finding.source}` : "";
    console.error(`${finding.checkId} ${finding.ruleId} ${finding.code}${location}: ${finding.message}`);
  }
  if (findings.length > 0) {
    console.error(`Ontology validation failed with ${findings.length} finding(s).`);
    process.exitCode = 1;
  } else {
    console.log(`Ontology validation passed (${sources.length} source files).`);
  }
}
