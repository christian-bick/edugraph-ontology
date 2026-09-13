import { OntologyContext, OntologySnapshot, createOntologyContext } from "./OntologyContext";
import { FindingReferences, OntologyValidationFinding } from "./OntologyTypes";
import * as rules from "./ValidationRules";

/** Stable checks executed by the complete ontology gate. O7/O10 have separate query/document APIs. */
export type OntologyCheckId = "O2" | "O3a" | "O3b" | "O4" | "O5" | "O6" | "O8";
/** Navigation-ready ontology finding; witnesses/messages remain human-readable. */
export interface AssessmentFinding extends OntologyValidationFinding { readonly references: FindingReferences; }
/** A check either ran, was prevented by a failed prerequisite, or could not complete. */
export type CheckOutcome =
  Readonly<{ checkId: OntologyCheckId; status: "passed" | "failed" }> |
  Readonly<{ checkId: OntologyCheckId; status: "skipped"; reason: string; prerequisites: readonly OntologyCheckId[] }> |
  Readonly<{ checkId: OntologyCheckId; status: "error"; reason: string }>;
/** Complete-gate assessment. Only valid means every mandatory check passed. */
export interface OntologyAssessment {
  readonly status: "valid" | "invalid" | "incomplete";
  readonly findings: readonly AssessmentFinding[];
  readonly checks: readonly CheckOutcome[];
}
const checks: readonly [OntologyCheckId, typeof rules.validateOntology][] = [
  ["O2", rules.validateRelationSchema], ["O3a", rules.validatePrimaryRelations],
  ["O3b", rules.validateOneRelationPerFamily], ["O4", rules.validateStructuralCycles],
  ["O5", rules.validateStructuralOrdering], ["O6", rules.validateStructuralChildRoles],
  ["O8", rules.validateProgressionCycles],
];
function freezeFinding(f: OntologyValidationFinding): AssessmentFinding {
  if (!f.references) throw new Error(`Missing navigation references for ${f.checkId}`);
  return Object.freeze({ ...f, witness: Object.freeze([...f.witness]), references: Object.freeze({
    entities: Object.freeze([...f.references.entities]), properties: Object.freeze([...f.references.properties]),
    sources: Object.freeze(f.references.sources.map(source => Object.freeze({ ...source }))),
  }) });
}
/** Assess all agreed rules using one snapshot/context. Independent checks run after failures.
 * Findings are ordered by check, code, full identities and sources using codepoint comparison.
 * Ordering is explicitly skipped when structural cycles prevent assessment. No workflow policy
 * or new ontology inference is implied by a failed/skipped check.
 */
export function assessOntology(input: OntologySnapshot | OntologyContext): OntologyAssessment {
  const context = input instanceof OntologyContext ? input : createOntologyContext(input);
  const outcomes: CheckOutcome[] = [];
  const findings: AssessmentFinding[] = [];
  for (const [checkId, run] of checks) {
    if (checkId === "O5" && outcomes.find(c => c.checkId === "O4")?.status !== "passed") {
      outcomes.push(Object.freeze({ checkId, status: "skipped", reason: "Structural acyclicity was not established.", prerequisites: Object.freeze(["O4"] as const) }));
      continue;
    }
    try {
      const current = run(context.statements).map(freezeFinding);
      findings.push(...current);
      outcomes.push(Object.freeze({ checkId, status: current.length ? "failed" : "passed" }));
    } catch (error) {
      outcomes.push(Object.freeze({ checkId, status: "error", reason: error instanceof Error ? error.message : String(error) }));
    }
  }
  const key = (f: AssessmentFinding): string => JSON.stringify([f.checkId, f.code, f.references, f.witness]);
  findings.sort((a, b) => key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0);
  return Object.freeze({
    status: outcomes.some(c => c.status === "error") ? "incomplete" : findings.length ? "invalid" : outcomes.some(c => c.status === "skipped") ? "incomplete" : "valid",
    findings: Object.freeze(findings), checks: Object.freeze(outcomes),
  });
}
