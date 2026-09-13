import {
  OntologyStatement,
  OntologyValidationFinding,
  RELATION_SCHEMA_CONTRACT,
} from "./core";

export interface DocumentationSource {
  /** Repository-relative path using forward slashes. */
  name: string;
  text: string;
}

const RULE_ID = /\bONT-[DESRW]\d+\b/g;
const RULE_HEADING = /^##\s+(ONT-[DESRW]\d+)\s+[—-]/gm;
const RELATION_NAMES = new Set([
  ...RELATION_SCHEMA_CONTRACT.inverses.flatMap(contract => [contract.primary, contract.inverse]),
  ...RELATION_SCHEMA_CONTRACT.subproperties.flatMap(contract => [contract.property, contract.parent]),
]);
const GENERIC_EXAMPLE_NAMES = new Set(["A", "B", "C", "X", "Y", "Z"]);

function localName(iri: string): string {
  const separator = Math.max(iri.lastIndexOf("#"), iri.lastIndexOf("/"));
  return separator >= 0 ? iri.slice(separator + 1) : iri;
}

function normalizePath(value: string): string {
  const parts: string[] = [];
  for (const part of value.replace(/\\/g, "/").split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") parts.pop();
    else parts.push(part);
  }
  return parts.join("/");
}

function directoryOf(path: string): string {
  const separator = path.lastIndexOf("/");
  return separator < 0 ? "" : path.slice(0, separator);
}

function safelyDecode(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function headingSlug(value: string): string {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/[`*_~]/g, "")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .trim()
    .replace(/\s/g, "-");
}

function documentAnchors(text: string): Set<string> {
  const anchors = new Set<string>();
  const counts = new Map<string, number>();
  for (const match of text.matchAll(/^#{1,6}\s+(.+?)\s*#*$/gm)) {
    const base = headingSlug(match[1]);
    const count = counts.get(base) ?? 0;
    anchors.add(count === 0 ? base : `${base}-${count}`);
    counts.set(base, count + 1);
  }
  return anchors;
}

function linkTargets(text: string): string[] {
  const targets: string[] = [];
  for (const match of text.matchAll(/\[[^\]\n]*\]\((?:<([^>\n]+)>|([^\s)\n]+))(?:\s+["'][^)\n]*["'])?\)/g)) {
    targets.push(match[1] ?? match[2]);
  }
  for (const match of text.matchAll(/^\[(?!\^)[^\]\n]+\]:\s+(?:<([^>\n]+)>|(\S+))/gm)) {
    targets.push(match[1] ?? match[2]);
  }
  return targets;
}

function validateLinks(
  documents: readonly DocumentationSource[],
  availablePaths: ReadonlySet<string>,
): OntologyValidationFinding[] {
  const byName = new Map(documents.map(document => [normalizePath(document.name), document]));
  const anchors = new Map([...byName].map(([name, document]) => [name, documentAnchors(document.text)]));
  const findings: OntologyValidationFinding[] = [];
  for (const document of documents) {
    for (const rawTarget of linkTargets(document.text)) {
      if (/^[a-z][a-z0-9+.-]*:/i.test(rawTarget) || rawTarget.startsWith("//")) continue;
      const hash = rawTarget.indexOf("#");
      const rawPath = hash < 0 ? rawTarget : rawTarget.slice(0, hash);
      const fragment = hash < 0 ? "" : safelyDecode(rawTarget.slice(hash + 1));
      const withoutQuery = safelyDecode(rawPath.split("?")[0]);
      const target = withoutQuery
        ? normalizePath(withoutQuery.startsWith("/")
          ? withoutQuery
          : `${directoryOf(normalizePath(document.name))}/${withoutQuery}`)
        : normalizePath(document.name);
      if (!availablePaths.has(target)) {
        findings.push({
          checkId: "O10",
          ruleId: "ONT-W3",
          code: "missing-document-target",
          message: `${document.name} links to missing local path ${rawTarget}.`,
          witness: [document.name, rawTarget],
          source: document.name,
        });
      } else if (fragment && byName.has(target) && !anchors.get(target)?.has(fragment)) {
        findings.push({
          checkId: "O10",
          ruleId: "ONT-W3",
          code: "missing-document-anchor",
          message: `${document.name} links to missing anchor #${fragment} in ${target}.`,
          witness: [document.name, target, fragment],
          source: document.name,
        });
      }
    }
  }
  return findings;
}

function validateRuleReferences(documents: readonly DocumentationSource[]): OntologyValidationFinding[] {
  const definitions = new Map<string, string>();
  const findings: OntologyValidationFinding[] = [];
  for (const document of documents) {
    for (const match of document.text.matchAll(RULE_HEADING)) {
      const previous = definitions.get(match[1]);
      if (previous) {
        findings.push({
          checkId: "O10",
          ruleId: "ONT-W3",
          code: "duplicate-rule-definition",
          message: `${match[1]} is defined in both ${previous} and ${document.name}.`,
          witness: [match[1], previous, document.name],
          source: document.name,
        });
      } else {
        definitions.set(match[1], document.name);
      }
    }
  }

  for (const document of documents) {
    const definedHere = [...document.text.matchAll(RULE_HEADING)].map(match => match[1]);
    const audit = document.text.match(/^## Audit\s*$([\s\S]*)/m)?.[1] ?? "";
    for (const id of definedHere) {
      if (!new RegExp(`\\*\\*${id}:\\*\\*`).test(audit)) {
        findings.push({
          checkId: "O10",
          ruleId: "ONT-W3",
          code: "rule-missing-audit-entry",
          message: `${id} has no Audit entry in ${document.name}.`,
          witness: [id, document.name],
          source: document.name,
        });
      }
    }
    for (const id of new Set(document.text.match(RULE_ID) ?? [])) {
      if (!definitions.has(id)) {
        findings.push({
          checkId: "O10",
          ruleId: "ONT-W3",
          code: "undefined-rule-reference",
          message: `${document.name} references undefined rule ${id}.`,
          witness: [document.name, id],
          source: document.name,
        });
      }
    }
  }
  return findings;
}

function assertedRelationKeys(statements: readonly OntologyStatement[]): Set<string> {
  const relationKey = (subject: string, relation: string, object: string) =>
    `${subject}\u0000${relation}\u0000${object}`;
  const inverse = new Map<string, string>();
  for (const contract of RELATION_SCHEMA_CONTRACT.inverses) {
    inverse.set(contract.primary, contract.inverse);
    inverse.set(contract.inverse, contract.primary);
  }
  const parent = new Map(RELATION_SCHEMA_CONTRACT.subproperties
    .map(contract => [contract.property, contract.parent] as const));
  const keys = new Set<string>();
  const queue: Array<[string, string, string]> = [];
  for (const statement of statements) {
    if (statement.sourceKind !== "descriptors") continue;
    const relation = localName(statement.predicate);
    if (!RELATION_NAMES.has(relation)) continue;
    queue.push([localName(statement.subject), relation, localName(statement.object)]);
  }
  for (let cursor = 0; cursor < queue.length; cursor++) {
    const [subject, relation, object] = queue[cursor];
    const key = relationKey(subject, relation, object);
    if (keys.has(key)) continue;
    keys.add(key);
    const inverseRelation = inverse.get(relation);
    if (inverseRelation) queue.push([object, inverseRelation, subject]);
    const parentRelation = parent.get(relation);
    if (parentRelation) queue.push([subject, parentRelation, object]);
  }
  return keys;
}

function ignoredExampleContext(text: string, index: number, subject: string, object: string): boolean {
  if (GENERIC_EXAMPLE_NAMES.has(subject) && GENERIC_EXAMPLE_NAMES.has(object)) return true;
  const blockStart = Math.max(
    text.lastIndexOf("\n\n", index),
    text.lastIndexOf("\n- ", index),
    text.lastIndexOf("\n| ", index),
  );
  const prefix = text.slice(blockStart + 1, index).toLocaleLowerCase();
  return /\b(?:not|never|hypothetical|proposed|invalid|without|former|removed|no longer)\b/.test(prefix);
}

function validateNamedExamples(
  documents: readonly DocumentationSource[],
  statements: readonly OntologyStatement[],
): OntologyValidationFinding[] {
  const relationKey = (subject: string, relation: string, object: string) =>
    `${subject}\u0000${relation}\u0000${object}`;
  const descriptors = new Set<string>();
  for (const statement of statements) {
    if (statement.sourceKind !== "descriptors") continue;
    descriptors.add(localName(statement.subject));
    if (statement.object.startsWith("http://edugraph.io/edu")) descriptors.add(localName(statement.object));
  }
  const assertions = assertedRelationKeys(statements);
  const findings: OntologyValidationFinding[] = [];
  for (const document of documents) {
    if (normalizePath(document.name).startsWith("docs/releases/")) continue;
    for (const match of document.text.matchAll(/`([A-Za-z][\w]*)\s+([A-Za-z][\w]*)\s+([A-Za-z][\w]*)`/g)) {
      const [, subject, relation, object] = match;
      if (!RELATION_NAMES.has(relation)) continue;
      if (ignoredExampleContext(document.text, match.index ?? 0, subject, object)) continue;
      const unknown = [subject, object].filter(name => !descriptors.has(name));
      if (unknown.length > 0) {
        findings.push({
          checkId: "O10",
          ruleId: "ONT-W3",
          code: "unknown-documented-descriptor",
          message: `${document.name} uses unknown descriptor ${unknown.join(", ")} in ${subject} ${relation} ${object}.`,
          witness: [subject, relation, object],
          source: document.name,
        });
      } else if (!assertions.has(relationKey(subject, relation, object))) {
        findings.push({
          checkId: "O10",
          ruleId: "ONT-W3",
          code: "missing-documented-relation",
          message: `${document.name} claims an ontology relation that is not present: ${subject} ${relation} ${object}.`,
          witness: [subject, relation, object],
          source: document.name,
        });
      }
    }
  }
  return findings;
}

/** O10: validates mechanical documentation integrity without checking external source claims. */
export function validateDocumentation(
  documents: readonly DocumentationSource[],
  availablePaths: readonly string[],
  ontologyStatements: readonly OntologyStatement[],
): OntologyValidationFinding[] {
  const paths = new Set(availablePaths.map(normalizePath));
  return [
    ...validateLinks(documents, paths),
    ...validateRuleReferences(documents),
    ...validateNamedExamples(documents, ontologyStatements),
  ].sort((left, right) =>
    `${left.source}:${left.code}:${left.witness.join(":")}`
      .localeCompare(`${right.source}:${right.code}:${right.witness.join(":")}`));
}
