/** Identifies schema declarations separately from authored descriptor facts. */
export type OntologySourceKind = "schema" | "descriptors";

/** Caller-owned source text; parsing performs no I/O. */
export interface OntologySource {
  name: string;
  kind: OntologySourceKind;
  text: string;
}

/** Legacy flat statement. Omitted term kinds denote named nodes. */
export interface OntologyStatement {
  subject: string;
  predicate: string;
  object: string;
  source: string;
  sourceKind: OntologySourceKind;
  subjectKind?: "NamedNode" | "BlankNode";
  objectKind?: "NamedNode" | "BlankNode" | "Literal";
}

/** Stable diagnostic fields; compact witnesses are display text. */
export interface OntologyValidationFinding {
  checkId: string;
  ruleId: string;
  code: string;
  message: string;
  witness: readonly string[];
  source?: string;
}

