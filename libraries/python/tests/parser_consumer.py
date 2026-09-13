"""Installed optional parser smoke check."""

from edugraph.core import LiteralTerm, OntologySource
from edugraph.rdf import parse_ontology_sources

source = OntologySource("x", "descriptors", '<urn:a> <urn:p> "01"^^<http://www.w3.org/2001/XMLSchema#integer> .')
row, = parse_ontology_sources([source])
assert isinstance(row.object, LiteralTerm)
assert row.object.value == "01"
