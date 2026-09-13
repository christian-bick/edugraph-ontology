"""Immutable RDF 1.1 records independent of any parser or released ontology."""

from dataclasses import dataclass, field
from typing import Literal, TypeAlias

Iri: TypeAlias = str
SourceKind: TypeAlias = Literal["schema", "descriptors"]
RdfFormat: TypeAlias = Literal["Turtle", "TriG", "N-Triples", "N-Quads"]


@dataclass(frozen=True, slots=True)
class NamedNode:
    """A named RDF resource identified by its full IRI."""

    value: Iri
    term_type: Literal["NamedNode"] = field(default="NamedNode", init=False)


@dataclass(frozen=True, slots=True)
class BlankNode:
    """A blank resource; its identifier must be scoped to its source document."""

    value: str
    term_type: Literal["BlankNode"] = field(default="BlankNode", init=False)


@dataclass(frozen=True, slots=True)
class LiteralTerm:
    """A literal's lexical value, language, and full datatype IRI."""

    value: str
    language: str = ""
    datatype: Iri = "http://www.w3.org/2001/XMLSchema#string"
    term_type: Literal["Literal"] = field(default="Literal", init=False)


@dataclass(frozen=True, slots=True)
class DefaultGraph:
    """The unnamed graph of an RDF dataset."""

    value: Literal[""] = field(default="", init=False)
    term_type: Literal["DefaultGraph"] = field(default="DefaultGraph", init=False)


ResourceTerm: TypeAlias = NamedNode | BlankNode
ObjectTerm: TypeAlias = ResourceTerm | LiteralTerm
GraphTerm: TypeAlias = ResourceTerm | DefaultGraph


@dataclass(frozen=True, slots=True)
class RdfStatement:
    """An authored RDF statement with graph identity and caller-owned provenance."""

    subject: ResourceTerm
    predicate: NamedNode
    object: ObjectTerm
    source: str
    source_kind: SourceKind
    graph: GraphTerm = DefaultGraph()


@dataclass(frozen=True, slots=True)
class OntologySource:
    """Supplied RDF text; parsing never loads the name or base IRI as a location."""

    name: str
    kind: SourceKind
    text: str
    format: RdfFormat = "Turtle"
    base_iri: Iri | None = None


OntologySnapshot: TypeAlias = tuple[RdfStatement, ...]
