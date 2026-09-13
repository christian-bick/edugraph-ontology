"""Maintained compatibility adapters over the immutable bundled context."""

from collections.abc import Iterable
from functools import cache
from importlib.resources import files
from typing import TypeAlias, TypedDict

from .ability import Ability
from .area import Area
from .core import OntologyContext, snapshot_from_json
from .scope import Scope

CompetencyDescriptor: TypeAlias = Area | Scope | Ability


class DescriptorRelations(TypedDict, total=False):
    """Detached legacy relation lists and the flattened release definition."""

    definition: str
    structures: list[CompetencyDescriptor]
    structuredBy: list[CompetencyDescriptor]
    partOf: list[CompetencyDescriptor]
    hasPart: list[CompetencyDescriptor]
    specializes: list[CompetencyDescriptor]
    specializedBy: list[CompetencyDescriptor]
    constrains: list[CompetencyDescriptor]
    constrainedBy: list[CompetencyDescriptor]
    implies: list[CompetencyDescriptor]
    impliedBy: list[CompetencyDescriptor]
    contradicts: list[CompetencyDescriptor]
    contradictedBy: list[CompetencyDescriptor]
    expands: list[CompetencyDescriptor]
    expandedBy: list[CompetencyDescriptor]
    inverts: list[CompetencyDescriptor]
    invertedBy: list[CompetencyDescriptor]
    integrates: list[CompetencyDescriptor]
    integratedBy: list[CompetencyDescriptor]
    translates: list[CompetencyDescriptor]
    translatedBy: list[CompetencyDescriptor]


@cache
def bundled_context() -> OntologyContext:
    """Return the shared read-only release context, initialized on first use."""
    text = files(__package__).joinpath("snapshot.json").read_text(encoding="utf-8")
    return OntologyContext(snapshot_from_json(text))


_MEMBERS: dict[str, CompetencyDescriptor] = {
    str(member): member for cls in (Area, Scope, Ability) for member in cls
}


def _members(iris: Iterable[str]) -> list[CompetencyDescriptor]:
    return [_MEMBERS[iri] for iri in iris if iri in _MEMBERS]


def definition(descriptor: CompetencyDescriptor) -> str:
    """Return the released enum definition, or an empty string for unknown input."""
    member = _MEMBERS.get(str(descriptor))
    return member.definition if member is not None else ""


def relations(descriptor: CompetencyDescriptor) -> DescriptorRelations:
    """Return detached relation lists; mutation never changes the bundled ontology."""
    if str(descriptor) not in _MEMBERS:
        return {}
    result: DescriptorRelations = {}
    text = definition(descriptor)
    if text:
        result["definition"] = text
    if targets := structures(descriptor):
        result["structures"] = targets
    if targets := structured_by(descriptor):
        result["structuredBy"] = targets
    if targets := part_of(descriptor):
        result["partOf"] = targets
    if targets := has_part(descriptor):
        result["hasPart"] = targets
    if targets := specializes(descriptor):
        result["specializes"] = targets
    if targets := specialized_by(descriptor):
        result["specializedBy"] = targets
    if targets := constrains(descriptor):
        result["constrains"] = targets
    if targets := constrained_by(descriptor):
        result["constrainedBy"] = targets
    if targets := implies(descriptor):
        result["implies"] = targets
    if targets := implied_by(descriptor):
        result["impliedBy"] = targets
    if targets := contradicts(descriptor):
        result["contradicts"] = targets
    if targets := contradicted_by(descriptor):
        result["contradictedBy"] = targets
    if targets := expands(descriptor):
        result["expands"] = targets
    if targets := expanded_by(descriptor):
        result["expandedBy"] = targets
    if targets := inverts(descriptor):
        result["inverts"] = targets
    if targets := inverted_by(descriptor):
        result["invertedBy"] = targets
    if targets := integrates(descriptor):
        result["integrates"] = targets
    if targets := integrated_by(descriptor):
        result["integratedBy"] = targets
    if targets := translates(descriptor):
        result["translates"] = targets
    if targets := translated_by(descriptor):
        result["translatedBy"] = targets
    return result


def structures(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released structures targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#structures"))


def structures_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable structures targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#structures")
    )


def structured_by(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released structuredBy targets, including schema-derived access."""
    return _members(
        bundled_context().related(str(descriptor), "http://edugraph.io/edu#structuredBy")
    )


def structured_by_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable structuredBy targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#structuredBy")
    )


def part_of(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released partOf targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#partOf"))


def part_of_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable partOf targets; self only when reached by a cycle."""
    return _members(bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#partOf"))


def has_part(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released hasPart targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#hasPart"))


def has_part_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable hasPart targets; self only when reached by a cycle."""
    return _members(bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#hasPart"))


def specializes(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released specializes targets, including schema-derived access."""
    return _members(
        bundled_context().related(str(descriptor), "http://edugraph.io/edu#specializes")
    )


def specializes_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable specializes targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#specializes")
    )


def specialized_by(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released specializedBy targets, including schema-derived access."""
    return _members(
        bundled_context().related(str(descriptor), "http://edugraph.io/edu#specializedBy")
    )


def specialized_by_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable specializedBy targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#specializedBy")
    )


def constrains(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released constrains targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#constrains"))


def constrains_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable constrains targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#constrains")
    )


def constrained_by(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released constrainedBy targets, including schema-derived access."""
    return _members(
        bundled_context().related(str(descriptor), "http://edugraph.io/edu#constrainedBy")
    )


def constrained_by_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable constrainedBy targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#constrainedBy")
    )


def implies(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released implies targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#implies"))


def implies_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable implies targets; self only when reached by a cycle."""
    return _members(bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#implies"))


def implied_by(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released impliedBy targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#impliedBy"))


def implied_by_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable impliedBy targets; self only when reached by a cycle."""
    return _members(bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#impliedBy"))


def contradicts(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released contradicts targets, including schema-derived access."""
    return _members(
        bundled_context().related(str(descriptor), "http://edugraph.io/edu#contradicts")
    )


def contradicts_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable contradicts targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#contradicts")
    )


def contradicted_by(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released contradictedBy targets, including schema-derived access."""
    return _members(
        bundled_context().related(str(descriptor), "http://edugraph.io/edu#contradictedBy")
    )


def contradicted_by_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable contradictedBy targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#contradictedBy")
    )


def expands(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released expands targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#expands"))


def expands_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable expands targets; self only when reached by a cycle."""
    return _members(bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#expands"))


def expanded_by(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released expandedBy targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#expandedBy"))


def expanded_by_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable expandedBy targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#expandedBy")
    )


def inverts(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released inverts targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#inverts"))


def inverts_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable inverts targets; self only when reached by a cycle."""
    return _members(bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#inverts"))


def inverted_by(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released invertedBy targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#invertedBy"))


def inverted_by_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable invertedBy targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#invertedBy")
    )


def integrates(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released integrates targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#integrates"))


def integrates_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable integrates targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#integrates")
    )


def integrated_by(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released integratedBy targets, including schema-derived access."""
    return _members(
        bundled_context().related(str(descriptor), "http://edugraph.io/edu#integratedBy")
    )


def integrated_by_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable integratedBy targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#integratedBy")
    )


def translates(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released translates targets, including schema-derived access."""
    return _members(bundled_context().related(str(descriptor), "http://edugraph.io/edu#translates"))


def translates_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable translates targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#translates")
    )


def translated_by(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted released translatedBy targets, including schema-derived access."""
    return _members(
        bundled_context().related(str(descriptor), "http://edugraph.io/edu#translatedBy")
    )


def translated_by_transitive(descriptor: CompetencyDescriptor) -> list[CompetencyDescriptor]:
    """Return sorted reachable translatedBy targets; self only when reached by a cycle."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#translatedBy")
    )


def transitive_closure(
    descriptor: CompetencyDescriptor, relation: str
) -> list[CompetencyDescriptor]:
    """Legacy traversal by local property name; unknown properties return []."""
    return _members(
        bundled_context().traverse(str(descriptor), "http://edugraph.io/edu#" + relation)
    )


def incompatible(a: CompetencyDescriptor, b: CompetencyDescriptor) -> bool:
    """Check recorded implication/contradiction paths in the bundled release."""
    return bundled_context().incompatible(str(a), str(b))


def deduct_compatible(
    base_constraints: Iterable[CompetencyDescriptor],
) -> list[CompetencyDescriptor]:
    """Return existing conjunctive deduction results as a detached sorted list."""
    return _members(bundled_context().deduct_compatible(str(x) for x in base_constraints))


def deduct_admitting(boundaries: Iterable[CompetencyDescriptor]) -> list[CompetencyDescriptor]:
    """Return existing disjunctive boundary results as a detached sorted list."""
    return _members(bundled_context().deduct_admitting(str(x) for x in boundaries))


def is_label_eligible(descriptor: CompetencyDescriptor) -> bool:
    """Apply ONT-E7; unknown runtime input raises UnknownDescriptorError."""
    return bundled_context().is_label_eligible(str(descriptor))


# Detached compatibility snapshots. They are not an editing API.
definitions: dict[CompetencyDescriptor, str] = {
    x: definition(x) for x in _MEMBERS.values() if definition(x)
}
ENTITY_RELATIONS: dict[CompetencyDescriptor, DescriptorRelations] = {
    x: relations(x) for x in _MEMBERS.values()
}
