/** Compatibility entry point; prefer core and rdf subpaths for isolated imports. */
export * from "./OntologyTypes";
export * from "./ValidationRules";
import { OntologySource, OntologyStatement, projectRdfStatements } from "./OntologyTypes";
import { parseOntologySources as parseRdfSources } from "./rdf";

/** Compatibility projection; use edugraph-ts/rdf to access full RDF terms directly. */
export function parseOntologySources(sources: readonly OntologySource[]): OntologyStatement[] {
  return projectRdfStatements(parseRdfSources(sources));
}
