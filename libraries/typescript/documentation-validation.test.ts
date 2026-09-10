import { DocumentationSource, validateDocumentation } from "./DocumentationValidation";
import { OntologyStatement } from "./OntologyValidation";

const EDU = "http://edugraph.io/edu#";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function docs(...documents: Array<[string, string]>): DocumentationSource[] {
  return documents.map(([name, text]) => ({ name, text }));
}

function relation(subject: string, predicate: string, object: string): OntologyStatement {
  return {
    subject: `${EDU}${subject}`,
    predicate: `${EDU}${predicate}`,
    object: `${EDU}${object}`,
    source: "areas.ttl",
    sourceKind: "descriptors",
  };
}

const rule = `## ONT-S1 — Example rule\n\nSee ONT-S1.\n\n## Audit\n\n- [ ] **ONT-S1:** Reviewed.`;
assert(validateDocumentation(
  docs(["docs/index.md", `${rule}\n\n[Rule](rule.md#details)`], ["docs/rule.md", "# Details"]),
  ["docs/index.md", "docs/rule.md"],
  [],
).length === 0, "valid local links, anchors, rules, and audit entries pass O10");

const brokenLinks = validateDocumentation(
  docs(["docs/index.md", `${rule}\n\n[Missing](missing.md) [Anchor](rule.md#absent)`],
    ["docs/rule.md", "# Present"]),
  ["docs/index.md", "docs/rule.md"],
  [],
);
assert(brokenLinks.some(finding => finding.code === "missing-document-target"),
  "a missing local target fails O10");
assert(brokenLinks.some(finding => finding.code === "missing-document-anchor"),
  "a missing local anchor fails O10");

const ruleFindings = validateDocumentation(
  docs(["docs/a.md", "## ONT-S1 — One\n\nSee ONT-S9."],
    ["docs/b.md", "## ONT-S1 — Duplicate\n\n## Audit\n\n- [ ] **ONT-S1:** Done."]),
  ["docs/a.md", "docs/b.md"],
  [],
);
assert(ruleFindings.some(finding => finding.code === "duplicate-rule-definition"),
  "duplicate rule definitions fail O10");
assert(ruleFindings.some(finding => finding.code === "undefined-rule-reference"),
  "undefined rule references fail O10");
assert(ruleFindings.some(finding => finding.code === "rule-missing-audit-entry"),
  "a rule without an Audit entry fails O10");

const ontology = [
  relation("Square", "specializes", "Rectangle"),
  relation("Circle", "partOf", "CircularShapes"),
];
assert(validateDocumentation(
  docs(["docs/examples.md", `${rule}\n\n\`Square specializes Rectangle\`.\n\`Rectangle specializedBy Square\`.\n\`Circle structures CircularShapes\`.`]),
  ["docs/examples.md"],
  ontology,
).length === 0, "authored, inverse, and derived superproperty examples pass O10");
assert(validateDocumentation(
  docs(["docs/examples.md", `${rule}\n\n\`Square partOf Rectangle\`.`]),
  ["docs/examples.md"],
  ontology,
).some(finding => finding.code === "missing-documented-relation"),
"an absent named ontology relation fails O10");
assert(validateDocumentation(
  docs(["docs/examples.md", `${rule}\n\nThe hypothetical \`A partOf B\` is invalid.\nThis does not establish \`Circle partOf Rectangle\`.`]),
  ["docs/examples.md"],
  ontology,
).length === 0, "generic hypothetical and explicitly negated examples are not current-source claims");

console.log("Documentation validation tests passed (O10).");
