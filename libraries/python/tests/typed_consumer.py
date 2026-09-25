"""Positive installed-package typing contract; also executable as a smoke test."""

from typing import assert_type

from edugraph import Area, CompetencyDescriptor, definition, involvement_statement, specializes
from edugraph.core import (
    LabelEligibility, NamedNode, OntologyContext, RdfStatement, UnknownLabel,
)

assert_type(definition(Area.Square), str)
assert_type(involvement_statement(Area.Square, include_comment=False), str)
assert_type(specializes(Area.Square), list[CompetencyDescriptor])
row = RdfStatement(NamedNode("urn:A"), NamedNode("urn:p"), NamedNode("urn:B"), "x", "descriptors")
context = OntologyContext([row])
assert_type(context.related("urn:A", "urn:p"), tuple[str, ...])
result: LabelEligibility = context.inspect_label("urn:A")
if result.status == "known":
    assert_type(result.eligible, bool)
else:
    assert_type(result, UnknownLabel)
