"""Public text-to-context checks preserve term identity and source provenance."""

from dataclasses import replace

import pytest

from edugraph.core import BlankNode, DefaultGraph, LiteralTerm, NamedNode, OntologyContext, OntologySource
from edugraph.rdf import OntologyParseError, parse_ontology_sources

PREFIX = '@prefix : <https://example.org/> . @prefix edu: <http://edugraph.io/edu#> . '


@pytest.mark.parametrize("value,lexical,language,datatype", [
    ('"text"', "text", "", "http://www.w3.org/2001/XMLSchema#string"),
    ('"https://example.org/B"', "https://example.org/B", "", "http://www.w3.org/2001/XMLSchema#string"),
    ('"Text"@de', "Text", "de", "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),
    ('"01"^^<http://www.w3.org/2001/XMLSchema#integer>', "01", "", "http://www.w3.org/2001/XMLSchema#integer"),
    ('+01', "+01", "", "http://www.w3.org/2001/XMLSchema#integer"),
    ('1.00', "1.00", "", "http://www.w3.org/2001/XMLSchema#decimal"),
])
def test_literal_inverse_assertion(value, lexical, language, datatype):
    rows = parse_ontology_sources([OntologySource("draft.ttl", "descriptors",
        PREFIX + f':A a edu:Area; edu:hasPart {value}.')])
    literal_row = next(row for row in rows if isinstance(row.object, LiteralTerm))
    assert literal_row.object == LiteralTerm(lexical, language, datatype)
    assert literal_row.source == "draft.ttl"
    context = OntologyContext(rows)
    assert context.related("https://example.org/A", "http://edugraph.io/edu#hasPart") == ()
    assert len(context.descriptors()) == 1


@pytest.mark.parametrize("format,text", [
    ("Turtle", PREFIX + '_:same :p _:same .'),
    ("TriG", PREFIX + ':g { _:same :p _:same . } _:same :q "x" .'),
    ("N-Triples", '_:same <https://example.org/p> _:same .'),
    ("N-Quads", '_:same <https://example.org/p> _:same <https://example.org/g> .'),
])
def test_blank_scope_and_graphs(format, text):
    rows = parse_ontology_sources([OntologySource(name, "descriptors", text, format) for name in ("one", "two")])
    linked = [row for row in rows if isinstance(row.object, BlankNode)]
    assert linked[0].subject == linked[0].object
    assert linked[1].subject == linked[1].object
    assert linked[0].subject != linked[1].subject
    if format in ("TriG", "N-Quads"):
        assert linked[0].graph == NamedNode("https://example.org/g")
    else:
        assert linked[0].graph == DefaultGraph()
    if format == "TriG":
        assert any(row.graph == DefaultGraph() for row in rows)


def test_relative_and_errors():
    source = OntologySource("x.ttl", "schema", '<A> <p> <B> .', base_iri="https://example.org/")
    assert parse_ontology_sources([source])[0].subject == NamedNode("https://example.org/A")
    for sources, code in (([replace(source, text="broken")], "parse-error"),
                          ([replace(source, format="XML")], "unsupported-format"),
                          ([source, source], "duplicate-source")):
        with pytest.raises(OntologyParseError) as error:
            parse_ontology_sources(sources)
        assert error.value.code == code
        assert error.value.source == "x.ttl"
        assert error.value.source_kind == "schema"
