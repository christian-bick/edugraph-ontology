"""Focused semantics and cross-language conformance, independent of RDF parsing."""

import json
import os
from dataclasses import FrozenInstanceError
from pathlib import Path

import pytest

from edugraph.core import (
    BlankNode, KnownLabel, LiteralTerm, NamedNode, OntologyContext, RdfStatement,
    SnapshotFormatError, UnknownDescriptorError, snapshot_from_json,
)

EDU = "http://edugraph.io/edu#"
EX = "https://example.org/"
TYPE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
FIXTURES = Path(os.environ.get("EDUGRAPH_FIXTURES", Path(__file__).resolve().parents[2] / "shared"))


def test_shared_queries():
    fixture = json.loads((FIXTURES / "query-fixtures.json").read_text(encoding="utf-8"))
    context = OntologyContext(snapshot_from_json(json.dumps(fixture["snapshot"])))
    for q in fixture["queries"]:
        if q["op"] == "related":
            actual = list(context.related(q["iri"], q["property"], q.get("access", "entailed")))
        elif q["op"] == "traverse":
            actual = list(context.traverse(q["iri"], q["property"]))
        elif q["op"] == "incompatible":
            actual = context.incompatible(q["a"], q["b"])
        elif q["op"] == "deductCompatible":
            actual = list(context.deduct_compatible(q["iris"]))
        elif q["op"] == "deductAdmitting":
            actual = list(context.deduct_admitting(q["iris"]))
        else:
            result = context.inspect_label(q["iri"])
            actual = {"status": result.status, "iri": result.iri}
            if isinstance(result, KnownLabel):
                actual.update(eligible=result.eligible, constituentChildren=list(result.constituent_children))
        assert actual == q["expected"], q


def statement(s, p, o):
    return RdfStatement(NamedNode(EX + s), NamedNode(p), o, "draft.ttl", "descriptors")


def test_isolation_unknown_and_child_roles():
    rows = [statement("A", TYPE, NamedNode(EDU + "Area")),
            statement("A", "http://www.w3.org/2000/01/rdf-schema#isDefinedBy", LiteralTerm("before"))]
    before = OntologyContext(rows)
    rows.append(statement("Child", EDU + "partOf", NamedNode(EX + "A")))
    rows.append(statement("Other", EDU + "specializes", NamedNode(EX + "A")))
    after = OntologyContext(rows)
    rows.clear()
    assert before.is_label_eligible(EX + "A")
    assert not after.is_label_eligible(EX + "A")  # incoming partOf works without schema
    assert after.inspect_label(EX + "A").constituent_children == (EX + "Child",)
    with pytest.raises(UnknownDescriptorError):
        before.is_label_eligible(EX + "unknown")
    assert before.lookup_descriptor(EX + "unknown") is None
    with pytest.raises(FrozenInstanceError):
        before.lookup_descriptor(EX + "A").definitions = ("changed",)
    with pytest.raises(AttributeError):
        before.statements = ()


def test_term_identity_and_ordering():
    rows = [statement("A", EDU + "hasPart", LiteralTerm(EX + "B")),
            statement("A", EDU + "hasPart", BlankNode(EX + "B")),
            RdfStatement(BlankNode(EX + "A"), NamedNode(EDU + "hasPart"), NamedNode(EX + "B"), "x", "descriptors")]
    rows += [statement("A", EDU + "specializes", NamedNode(EX + x)) for x in ("\ue000", "\U00010000")]
    context = OntologyContext(rows)
    assert context.related(EX + "A", EDU + "hasPart") == ()
    assert len(context.authored_assertions(EX + "A")) == 4
    assert context.related(EX + "A", EDU + "specializes") == (EX + "\U00010000", EX + "\ue000")


@pytest.mark.parametrize("data", [{}, {"formatVersion": True, "statements": []},
                                    {"formatVersion": 2, "statements": []},
                                    {"formatVersion": 1, "statements": ["invalid"]}])
def test_bad_snapshot(data):
    with pytest.raises(SnapshotFormatError):
        snapshot_from_json(json.dumps(data))
