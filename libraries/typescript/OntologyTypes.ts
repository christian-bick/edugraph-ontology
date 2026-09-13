/** Identifies schema declarations separately from authored descriptor facts. */
export type OntologySourceKind = "schema" | "descriptors";

/** Caller-owned source text; parsing performs no I/O. */
export interface OntologySource {
  name: string;
  kind: OntologySourceKind;
  text: string;
  /** Defaults to Turtle; relative IRIs resolve against baseIRI when provided. */
  format?: "Turtle" | "TriG" | "N-Triples" | "N-Quads";
  baseIRI?: string;
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
  /** Original RDF terms, when projected from the rich parser. */
  rdf?: RdfStatement;
}

/** Parser-independent RDF identity. Blank-node values are scoped to a source document. */
export type ResourceTerm = Readonly<{ termType: "NamedNode" | "BlankNode"; value: string }>;
/** A literal retains its lexical form, language, and datatype IRI. */
export interface LiteralTerm {
  readonly termType: "Literal";
  readonly value: string;
  readonly language: string;
  readonly datatype: string;
}
/** RDF 1.1 graph name, including the default graph. */
export type GraphTerm = ResourceTerm | Readonly<{ termType: "DefaultGraph"; value: "" }>;
/** Faithful RDF 1.1 statement with caller-supplied provenance. */
export interface RdfStatement {
  readonly subject: ResourceTerm;
  readonly predicate: Readonly<{ termType: "NamedNode"; value: string }>;
  readonly object: ResourceTerm | LiteralTerm;
  readonly graph: GraphTerm;
  readonly source: string;
  readonly sourceKind: OntologySourceKind;
}

/** Project RDF for legacy rules while retaining term kinds and original statements. */
export function projectRdfStatements(statements: readonly RdfStatement[]): OntologyStatement[] {
  return statements.map(rdf => ({
    subject: rdf.subject.value, predicate: rdf.predicate.value, object: rdf.object.value,
    subjectKind: rdf.subject.termType, objectKind: rdf.object.termType,
    source: rdf.source, sourceKind: rdf.sourceKind, rdf,
  }));
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

