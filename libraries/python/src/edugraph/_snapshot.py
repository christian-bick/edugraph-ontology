"""Checked decoding of the shared, versioned RDF snapshot interchange."""

import json
from typing import TypeGuard

from ._terms import (
    BlankNode,
    DefaultGraph,
    GraphTerm,
    LiteralTerm,
    NamedNode,
    ObjectTerm,
    OntologySnapshot,
    RdfStatement,
    ResourceTerm,
)


class SnapshotFormatError(ValueError):
    """Malformed or unsupported shared snapshot data."""


def _is_mapping(value: object) -> TypeGuard[dict[str, object]]:
    return isinstance(value, dict) and all(isinstance(key, str) for key in value)


def _is_list(value: object) -> TypeGuard[list[object]]:
    return isinstance(value, list)


def _mapping(value: object) -> dict[str, object]:
    if not _is_mapping(value):
        raise SnapshotFormatError("Expected an object with string keys")
    return value


def _string(value: object) -> str:
    if not isinstance(value, str):
        raise SnapshotFormatError("Expected a string")
    return value


def _resource(value: object) -> ResourceTerm:
    record = _mapping(value)
    kind = record.get("termType")
    text = _string(record.get("value"))
    if kind == "NamedNode":
        return NamedNode(text)
    if kind == "BlankNode":
        return BlankNode(text)
    raise SnapshotFormatError("Expected NamedNode or BlankNode")


def _object(value: object) -> ObjectTerm:
    record = _mapping(value)
    if record.get("termType") == "Literal":
        return LiteralTerm(
            _string(record.get("value")),
            _string(record.get("language")),
            _string(record.get("datatype")),
        )
    return _resource(record)


def _graph(value: object) -> GraphTerm:
    record = _mapping(value)
    if record.get("termType") == "DefaultGraph" and record.get("value") == "":
        return DefaultGraph()
    return _resource(record)


def snapshot_from_json(text: str) -> OntologySnapshot:
    """Decode version 1 JSON; raise SnapshotFormatError for invalid records or versions.

    Only representation is checked. No ontology rules are assessed and no I/O occurs.
    """
    try:
        raw: object = json.loads(text)
    except ValueError as error:
        raise SnapshotFormatError("Malformed snapshot JSON") from error
    data = _mapping(raw)
    if type(data.get("formatVersion")) is not int or data["formatVersion"] != 1:
        raise SnapshotFormatError("Unsupported snapshot formatVersion")
    records = data.get("statements")
    if not _is_list(records):
        raise SnapshotFormatError("Expected statements array")
    statements: list[RdfStatement] = []
    for item in records:
        row = _mapping(item)
        predicate = _resource(row.get("predicate"))
        if not isinstance(predicate, NamedNode):
            raise SnapshotFormatError("Predicate must be a NamedNode")
        kind = row.get("sourceKind")
        if kind not in ("schema", "descriptors"):
            raise SnapshotFormatError("Unknown sourceKind")
        # Explicit branches narrow the runtime boundary to the public Literal union.
        statements.append(
            RdfStatement(
                _resource(row.get("subject")),
                predicate,
                _object(row.get("object")),
                _string(row.get("source")),
                "schema" if kind == "schema" else "descriptors",
                _graph(row.get("graph")),
            )
        )
    return tuple(statements)
