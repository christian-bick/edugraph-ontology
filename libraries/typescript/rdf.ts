import { Parser, Quad } from "n3";
import { GraphTerm, OntologySource, RdfStatement, ResourceTerm, LiteralTerm } from "./OntologyTypes";
export type { OntologySource, RdfStatement } from "./OntologyTypes";

/** Source-associated input failure; never represents a successful empty assessment. */
export class OntologyParseError extends Error {
  readonly name = "OntologyParseError";
  constructor(
    readonly source: string,
    readonly sourceKind: OntologySource["kind"],
    readonly code: "parse-error" | "unsupported-format" | "duplicate-source",
    message: string,
  ) { super(`${source}: ${message}`); }
}
type ParserTerm = Quad["subject"] | Quad["object"] | Quad["graph"];
function resource(term: ParserTerm): ResourceTerm {
  if (term.termType !== "NamedNode" && term.termType !== "BlankNode") {
    throw new Error(`Unsupported RDF resource term: ${term.termType}`);
  }
  return Object.freeze({ termType: term.termType, value: term.value });
}
function object(term: Quad["object"]): ResourceTerm | LiteralTerm {
  return term.termType === "Literal"
    ? Object.freeze({ termType: "Literal", value: term.value, language: term.language, datatype: term.datatype.value })
    : resource(term);
}
function graph(term: Quad["graph"]): GraphTerm {
  return term.termType === "DefaultGraph"
    ? Object.freeze({ termType: "DefaultGraph", value: "" }) : resource(term);
}
/** Parse supplied RDF 1.1 without I/O. Source names must be unique in a snapshot.
 * Preserves terms and graphs, not comments, formatting, prefixes, or statement order.
 * Blank-node identity is scoped by source name; separately named documents never collide.
 */
export function parseOntologySources(sources: readonly OntologySource[]): readonly RdfStatement[] {
  const names = new Set<string>();
  const result: RdfStatement[] = [];
  for (const source of sources) {
    if (names.has(source.name)) throw new OntologyParseError(source.name, source.kind, "duplicate-source", "Source names must be unique.");
    names.add(source.name);
    const format = source.format ?? "Turtle";
    if (!["Turtle", "TriG", "N-Triples", "N-Quads"].includes(format)) {
      throw new OntologyParseError(source.name, source.kind, "unsupported-format", `Unsupported format: ${format}`);
    }
    try {
      const quads = new Parser({ format, baseIRI: source.baseIRI ?? "http://edugraph.io/edu#",
        blankNodePrefix: `doc${encodeURIComponent(source.name)}_` }).parse(source.text);
      for (const quad of quads) {
        if (quad.predicate.termType !== "NamedNode") throw new Error("Predicate must be a named node.");
        result.push(Object.freeze({
          subject: resource(quad.subject), predicate: Object.freeze({ termType: "NamedNode", value: quad.predicate.value }),
          object: object(quad.object), graph: graph(quad.graph), source: source.name, sourceKind: source.kind,
        }));
      }
    } catch (error) {
      throw new OntologyParseError(source.name, source.kind, "parse-error", error instanceof Error ? error.message : String(error));
    }
  }
  return Object.freeze(result);
}
