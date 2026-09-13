"""Optional RDF text adapter; no ontology validation, loading, or serialization."""

from collections.abc import Iterable
from typing import Literal
from urllib.parse import quote

from ._terms import (
    BlankNode,
    DefaultGraph,
    GraphTerm,
    LiteralTerm,
    NamedNode,
    ObjectTerm,
    OntologySnapshot,
    OntologySource,
    RdfStatement,
    ResourceTerm,
)

try:
    import pyoxigraph as ox
except ModuleNotFoundError as error:
    if error.name != "pyoxigraph":
        raise
    raise ImportError(
        "RDF parsing requires the optional extra: pip install 'edugraph-py[rdf]'"
    ) from error

ParseErrorCode = Literal["parse-error", "unsupported-format", "duplicate-source"]


class OntologyParseError(ValueError):
    """A parse failure identified by source name/kind and a stable input-error code."""

    def __init__(self, source: OntologySource, code: ParseErrorCode, message: str) -> None:
        self.source = source.name
        self.source_kind = source.kind
        self.code = code
        super().__init__(f"{source.name}: {message}")


def _resource(term: object, scope: str) -> ResourceTerm:
    if isinstance(term, ox.NamedNode):
        return NamedNode(term.value)
    if isinstance(term, ox.BlankNode):
        return BlankNode(scope + term.value)
    raise ValueError("Only RDF 1.1 resource terms are supported")


def _object(term: object, scope: str) -> ObjectTerm:
    if isinstance(term, ox.Literal):
        if term.direction is not None:
            raise ValueError("Directional literals are outside RDF 1.1")
        return LiteralTerm(term.value, term.language or "", term.datatype.value)
    return _resource(term, scope)


def parse_ontology_sources(sources: Iterable[OntologySource]) -> OntologySnapshot:
    """Parse supplied Turtle/TriG/N-Triples/N-Quads, preserving RDF terms and sources.

    Errors are source-associated; no partial result is returned. Blank identifiers are
    document-scoped. Textual prefixes, comments, whitespace and statement order are not
    serialization promises. Names/base IRIs are never fetched. No ontology rules run.
    """
    formats = {
        "Turtle": ox.RdfFormat.TURTLE,
        "TriG": ox.RdfFormat.TRIG,
        "N-Triples": ox.RdfFormat.N_TRIPLES,
        "N-Quads": ox.RdfFormat.N_QUADS,
    }
    names: set[str] = set()
    result: list[RdfStatement] = []
    for source in sources:
        if source.name in names:
            raise OntologyParseError(source, "duplicate-source", "Source names must be unique")
        names.add(source.name)
        if source.format not in formats:
            raise OntologyParseError(
                source, "unsupported-format", f"Unsupported format: {source.format}"
            )
        scope = quote(source.name, safe="") + ":"
        try:
            for quad in ox.parse(
                input=source.text, format=formats[source.format], base_iri=source.base_iri
            ):
                graph: GraphTerm = (
                    DefaultGraph()
                    if isinstance(quad.graph_name, ox.DefaultGraph)
                    else _resource(quad.graph_name, scope)
                )
                result.append(
                    RdfStatement(
                        _resource(quad.subject, scope),
                        NamedNode(quad.predicate.value),
                        _object(quad.object, scope),
                        source.name,
                        source.kind,
                        graph,
                    )
                )
        except (SyntaxError, ValueError) as error:
            raise OntologyParseError(source, "parse-error", str(error)) from error
    return tuple(result)
