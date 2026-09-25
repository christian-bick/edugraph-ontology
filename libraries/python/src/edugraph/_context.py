"""Snapshot-local navigation and existing deduction semantics, without validation."""

from collections import defaultdict, deque
from collections.abc import Iterable
from dataclasses import dataclass, field
from typing import Literal, TypeAlias

from ._terms import LiteralTerm, NamedNode, RdfStatement
from ._text import format_involvement_statement, normalized_text

EDU = "http://edugraph.io/edu#"
TYPE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
DEFINITION = "http://www.w3.org/2000/01/rdf-schema#isDefinedBy"
COMMENT = "http://www.w3.org/2000/01/rdf-schema#comment"
LABEL = "http://www.w3.org/2000/01/rdf-schema#label"
INVERSE = "http://www.w3.org/2002/07/owl#inverseOf"
SUBPROPERTY = "http://www.w3.org/2000/01/rdf-schema#subPropertyOf"
RelationAccess: TypeAlias = Literal["authored", "entailed"]
Adjacency: TypeAlias = dict[tuple[str, str], set[str]]


def _ordered(values: Iterable[str]) -> tuple[str, ...]:
    # Match JavaScript's UTF-16 code-unit ordering, including supplementary IRIs.
    return tuple(sorted(set(values), key=lambda value: value.encode("utf-16-be", "surrogatepass")))


@dataclass(frozen=True, slots=True)
class DescriptorRecord:
    """An explicitly typed descriptor with sorted dimensions and definitions."""

    iri: str
    dimensions: tuple[str, ...]
    definitions: tuple[str, ...]


@dataclass(frozen=True, slots=True)
class KnownLabel:
    """Structural eligibility for a known descriptor in a complete snapshot."""

    iri: str
    eligible: bool
    constituent_children: tuple[str, ...]
    status: Literal["known"] = field(default="known", init=False)


@dataclass(frozen=True, slots=True)
class UnknownLabel:
    """An IRI absent from the snapshot's explicitly typed descriptor inventory."""

    iri: str
    status: Literal["unknown"] = field(default="unknown", init=False)


LabelEligibility: TypeAlias = KnownLabel | UnknownLabel


class UnknownDescriptorError(ValueError):
    """Raised when eligibility or statement text is requested for an unknown descriptor."""


class OntologyContext:
    """Read-only queries over a complete snapshot; graph queries use the dataset union.

    Input is consumed once. Frozen records and tuple results cannot change the private
    indexes. Construct another context for changed data; no bundled schema is added.
    """

    __slots__ = (
        "_statements",
        "_inventory",
        "_authored",
        "_entailed",
        "_incoming",
        "_presentation",
    )

    def __init__(self, snapshot: Iterable[RdfStatement]) -> None:
        self._statements = tuple(snapshot)
        self._inventory: dict[str, DescriptorRecord] = {}
        self._authored: Adjacency = defaultdict(set)
        self._entailed: Adjacency = defaultdict(set)
        self._incoming: dict[str, set[str]] = defaultdict(set)
        dimensions: dict[str, set[str]] = defaultdict(set)
        definitions: dict[str, set[str]] = defaultdict(set)
        comments: dict[str, set[str]] = defaultdict(set)
        labels: dict[str, set[str]] = defaultdict(set)
        self._presentation: dict[str, tuple[str, str, str]] = {}
        inverse: dict[str, set[str]] = defaultdict(set)
        parents: dict[str, set[str]] = defaultdict(set)
        queue: deque[tuple[str, str, str]] = deque()
        for statement in self._statements:
            s, p, o = statement.subject.value, statement.predicate.value, statement.object.value
            named = isinstance(statement.subject, NamedNode) and isinstance(
                statement.object, NamedNode
            )
            if statement.source_kind == "schema" and named:
                if p == INVERSE:
                    inverse[s].add(o)
                    inverse[o].add(s)
                if p == SUBPROPERTY:
                    parents[s].add(o)
            if statement.source_kind != "descriptors" or not isinstance(
                statement.subject, NamedNode
            ):
                continue
            if named:
                if p == EDU + "partOf":
                    self._incoming[o].add(s)
                if p == TYPE and o in (EDU + "Area", EDU + "Ability", EDU + "Scope"):
                    dimensions[s].add(o)
                if o not in self._authored[s, p]:
                    self._authored[s, p].add(o)
                    queue.append((s, p, o))
            if p == DEFINITION and isinstance(statement.object, LiteralTerm):
                definitions[s].add(o)
            if isinstance(statement.object, LiteralTerm):
                if p == COMMENT:
                    comments[s].add(o)
                if p == LABEL:
                    labels[s].add(o)

        def first(index: dict[str, set[str]], iri: str) -> str:
            values = _ordered(normalized_text(value) for value in index.get(iri, ()))
            return next((value for value in values if value), "")

        for iri, values in dimensions.items():
            self._inventory[iri] = DescriptorRecord(
                iri, _ordered(values), _ordered(definitions[iri])
            )
            self._presentation[iri] = (
                first(definitions, iri),
                first(comments, iri),
                first(labels, iri),
            )
        while queue:
            s, p, o = queue.popleft()
            if o in self._entailed[s, p]:
                continue
            self._entailed[s, p].add(o)
            queue.extend((o, inv, s) for inv in inverse.get(p, ()))
            queue.extend((s, parent, o) for parent in parents.get(p, ()))

    @property
    def statements(self) -> tuple[RdfStatement, ...]:
        """Original immutable records, including literals, graphs, and sources."""
        return self._statements

    def lookup_descriptor(self, iri: str) -> DescriptorRecord | None:
        """Resolve an explicitly typed descriptor; unknown IRIs return None."""
        return self._inventory.get(iri)

    def involvement_statement(
        self,
        iri: str,
        *,
        label: str | None = None,
        include_comment: bool = True,
        comment_prefix: str = "For example:",
    ) -> str:
        """English display text, not inference or evidence of involvement.

        Select the lexically first nonempty normalized definition, comment, and label.
        Raise for unknown descriptors, missing definitions, or an empty explicit label.
        """
        if iri not in self._presentation:
            raise UnknownDescriptorError(f"Unknown descriptor: {iri}")
        definition, comment, authored_label = self._presentation[iri]
        if not definition:
            raise ValueError(f"Missing definition: {iri}")
        return format_involvement_statement(
            iri,
            definition,
            comment,
            authored_label,
            label=label,
            include_comment=include_comment,
            comment_prefix=comment_prefix,
        )

    def descriptors(self) -> tuple[DescriptorRecord, ...]:
        """Return the inventory ordered by full IRI."""
        return tuple(self._inventory[iri] for iri in _ordered(self._inventory))

    def authored_assertions(self, iri: str | None = None) -> tuple[RdfStatement, ...]:
        """Return original assertions, optionally filtered by named subject IRI."""
        return tuple(
            s
            for s in self._statements
            if iri is None or (isinstance(s.subject, NamedNode) and s.subject.value == iri)
        )

    def related(
        self, iri: str, property: str, access: RelationAccess = "entailed"
    ) -> tuple[str, ...]:
        """Sorted unique named targets; unknown/unconnected IRIs return an empty tuple.

        Entailed access adds only supplied-schema inverses and superproperties.
        """
        if access not in ("authored", "entailed"):
            raise ValueError(f"Unknown relation access: {access}")
        index = self._authored if access == "authored" else self._entailed
        return _ordered(index.get((iri, property), ()))

    def traverse(self, iri: str, property: str) -> tuple[str, ...]:
        """Sorted reachable nodes; self appears only when a cycle or self-edge reaches it.

        Terminates on cycles. Navigation alone does not establish capability inference.
        """
        visited: set[str] = set()
        queue = deque([iri])
        while queue:
            for target in self.related(queue.popleft(), property):
                if target not in visited:
                    visited.add(target)
                    queue.append(target)
        return _ordered(visited)

    def inspect_label(self, iri: str) -> LabelEligibility:
        """Return explicit known/unknown ONT-E7 eligibility, not content evidence.

        The caller must supply a complete snapshot, including incoming partOf facts.
        """
        if iri not in self._inventory:
            return UnknownLabel(iri)
        children = _ordered((*self.related(iri, EDU + "hasPart"), *self._incoming.get(iri, ())))
        return KnownLabel(iri, not children, children)

    def is_label_eligible(self, iri: str) -> bool:
        """Return structural eligibility; raise UnknownDescriptorError for unknown IRIs."""
        result = self.inspect_label(iri)
        if result.status == "unknown":
            raise UnknownDescriptorError(f"Unknown descriptor: {iri}")
        return result.eligible

    def incompatible(self, a: str, b: str) -> bool:
        """Test recorded implication/contradiction paths, not numerical satisfiability."""
        targets = {b, *self.traverse(b, EDU + "implies")}
        return any(
            y in targets
            for x in (a, *self.traverse(a, EDU + "implies"))
            for y in self.related(x, EDU + "contradicts")
        )

    def _bound_typed(self, iri: str) -> bool:
        return any(
            self.related(x, EDU + "contradicts")
            for x in (
                iri,
                *self.traverse(iri, EDU + "implies"),
                *self.traverse(iri, EDU + "impliedBy"),
            )
        )

    def deduct_compatible(self, constraints: Iterable[str]) -> tuple[str, ...]:
        """Existing conjunctive deduction over recorded relations; empty input yields ()."""
        implied: set[str] = set()
        excluded: set[str] = set()

        def expand(iri: str) -> tuple[str, ...]:
            return self.traverse(iri, EDU + ("impliedBy" if self._bound_typed(iri) else "implies"))

        for constraint in constraints:
            implied.update((constraint, *expand(constraint)))
            for partner in self.related(constraint, EDU + "contradicts"):
                excluded.update((partner, *expand(partner)))
        return _ordered(implied - excluded)

    def deduct_admitting(self, boundaries: Iterable[str]) -> tuple[str, ...]:
        """Existing disjunctive boundary deduction; no interpretation of definition prose."""
        result: set[str] = set()
        for boundary in boundaries:
            result.update((boundary, *self.traverse(boundary, EDU + "impliedBy")))
            for partner in self.related(boundary, EDU + "contradicts"):
                result.update(self.traverse(partner, EDU + "implies"))
        return _ordered(result)


def create_ontology_context(snapshot: Iterable[RdfStatement]) -> OntologyContext:
    """Build an isolated query context from supplied immutable RDF records."""
    return OntologyContext(snapshot)
