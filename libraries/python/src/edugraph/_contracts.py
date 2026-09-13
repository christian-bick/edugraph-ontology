"""Immutable full-IRI contracts loaded from the shared vocabulary asset."""

import json
from collections.abc import Mapping
from dataclasses import dataclass
from importlib.resources import files
from types import MappingProxyType

from ._snapshot import SnapshotFormatError, _is_list, _mapping, _string

EDU = "http://edugraph.io/edu#"


@dataclass(frozen=True, slots=True)
class InverseContract:
    """A primary property and its required inverse, identified by full IRIs."""

    primary: str
    inverse: str
    rule_id: str


@dataclass(frozen=True, slots=True)
class SubpropertyContract:
    """A property, its required parent, and the owning authoring rule."""

    property: str
    parent: str
    rule_id: str


@dataclass(frozen=True, slots=True)
class SchemaContract:
    """Fixed vocabulary metadata; it does not replace a supplied ontology schema."""

    inverses: tuple[InverseContract, ...]
    subproperties: tuple[SubpropertyContract, ...]


def _rows(value: object) -> list[dict[str, object]]:
    if not _is_list(value):
        raise SnapshotFormatError("Expected contract array")
    return [_mapping(row) for row in value]


_raw: object = json.loads(
    files(__package__).joinpath("relation-contracts.json").read_text(encoding="utf-8")
)
_data = _mapping(_raw)
_schema = _mapping(_data["schema"])
IRI_SCHEMA_CONTRACT = SchemaContract(
    tuple(
        InverseContract(
            EDU + _string(c["primary"]), EDU + _string(c["inverse"]), _string(c["ruleId"])
        )
        for c in _rows(_schema["inverses"])
    ),
    tuple(
        SubpropertyContract(
            EDU + _string(c["property"]), EDU + _string(c["parent"]), _string(c["ruleId"])
        )
        for c in _rows(_schema["subproperties"])
    ),
)
RELATION_IRIS: Mapping[str, str] = MappingProxyType(
    {
        iri.removeprefix(EDU): iri
        for c in IRI_SCHEMA_CONTRACT.inverses
        for iri in (c.primary, c.inverse)
    }
)


def _families() -> Mapping[str, tuple[str, ...]]:
    result: dict[str, tuple[str, ...]] = {}
    for family, values in _mapping(_data["families"]).items():
        if not _is_list(values):
            raise SnapshotFormatError("Expected relation family array")
        result[family] = tuple(EDU + _string(value) for value in values)
    return MappingProxyType(result)


IRI_RELATION_FAMILIES = _families()
