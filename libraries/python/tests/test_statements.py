"""Shared presentation cases and snapshot/adaptor integration."""

import json
import os
from pathlib import Path

import pytest

from edugraph import Scope, involvement_statement
from edugraph.core import LiteralTerm, NamedNode, OntologyContext, RdfStatement
from edugraph.generated import involvement_statement as generated_statement

FIXTURES = Path(os.environ.get("EDUGRAPH_FIXTURES", Path(__file__).resolve().parents[2] / "shared"))
CASES = json.loads((FIXTURES / "statement-fixtures.json").read_text(encoding="utf-8"))
RDFS = "http://www.w3.org/2000/01/rdf-schema#"
TYPE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"


def fact(iri, predicate, value, kind="descriptors"):
    return RdfStatement(NamedNode(iri), NamedNode(predicate), value, "text.ttl", kind)


@pytest.mark.parametrize("case", CASES, ids=lambda case: case["name"])
def test_shared_statements(case):
    iri = case["iri"]
    rows = [] if case.get("known") is False else [
        fact(iri, TYPE, NamedNode("http://edugraph.io/edu#" + case.get("dimension", "Scope")))
    ]
    for key, predicate in (("definitions", "isDefinedBy"), ("comments", "comment"), ("labels", "label")):
        rows.extend(fact(iri, RDFS + predicate, LiteralTerm(value)) for value in case.get(key, []))
    names = {"label": "label", "includeComment": "include_comment", "commentPrefix": "comment_prefix"}
    options = {names[key]: value for key, value in case.get("options", {}).items()}
    context = OntologyContext(rows)
    if "error" in case:
        with pytest.raises(ValueError, match=case["error"]):
            context.involvement_statement(iri, **options)
    else:
        assert context.involvement_statement(iri, **options) == case["expected"]
        assert OntologyContext(reversed(rows)).involvement_statement(iri, **options) == case["expected"]


def test_snapshot_isolation_and_literal_comments():
    iri = "urn:Context"
    rows = [fact(iri, TYPE, NamedNode("http://edugraph.io/edu#Scope")),
            fact(iri, RDFS + "isDefinedBy", LiteralTerm("Original.")),
            fact(iri, RDFS + "comment", NamedNode("urn:not-a-literal")),
            fact(iri, RDFS + "comment", LiteralTerm("Schema text."), "schema")]
    before = OntologyContext(rows)
    rows.append(fact(iri, RDFS + "comment", LiteralTerm("New example.")))
    assert before.involvement_statement(iri) == "Involves Context: Original."
    assert OntologyContext(rows).involvement_statement(iri) == "Involves Context: Original. For example: New example."


def test_bundled_statements():
    expected = (
        "Involves Integer Numbers: Numbers with no fractional part, whether negative, zero, or positive. "
        "For example: -3, 0, 1, 10, and 1345. The value 2 remains an integer when written as 2.0."
    )
    assert involvement_statement(Scope.IntegerNumbers) == expected
    assert generated_statement(Scope.IntegerNumbers) == expected
