import { Parser } from "n3";
import { OntologySource, OntologyStatement } from "./OntologyTypes";

/** Parse supplied Turtle into the legacy flat statement representation. */
export function parseOntologySources(sources: readonly OntologySource[]): OntologyStatement[] {
  return sources.flatMap(source => new Parser({ baseIRI: "http://edugraph.io/edu#" }).parse(source.text).map(quad => ({
    subject: quad.subject.value,
    predicate: quad.predicate.value,
    object: quad.object.value,
    source: source.name,
    sourceKind: source.kind,
  })));
}

