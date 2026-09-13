"""Parser-independent records and queries for supplied ontology snapshots."""

from ._context import (
    DescriptorRecord as DescriptorRecord,
)
from ._context import (
    KnownLabel as KnownLabel,
)
from ._context import (
    LabelEligibility as LabelEligibility,
)
from ._context import (
    OntologyContext as OntologyContext,
)
from ._context import (
    RelationAccess as RelationAccess,
)
from ._context import (
    UnknownDescriptorError as UnknownDescriptorError,
)
from ._context import (
    UnknownLabel as UnknownLabel,
)
from ._context import (
    create_ontology_context as create_ontology_context,
)
from ._contracts import (
    IRI_RELATION_FAMILIES as IRI_RELATION_FAMILIES,
)
from ._contracts import (
    IRI_SCHEMA_CONTRACT as IRI_SCHEMA_CONTRACT,
)
from ._contracts import (
    RELATION_IRIS as RELATION_IRIS,
)
from ._contracts import (
    InverseContract as InverseContract,
)
from ._contracts import (
    SchemaContract as SchemaContract,
)
from ._contracts import (
    SubpropertyContract as SubpropertyContract,
)
from ._snapshot import (
    SnapshotFormatError as SnapshotFormatError,
)
from ._snapshot import (
    snapshot_from_json as snapshot_from_json,
)
from ._terms import (
    BlankNode as BlankNode,
)
from ._terms import (
    DefaultGraph as DefaultGraph,
)
from ._terms import (
    GraphTerm as GraphTerm,
)
from ._terms import (
    Iri as Iri,
)
from ._terms import (
    LiteralTerm as LiteralTerm,
)
from ._terms import (
    NamedNode as NamedNode,
)
from ._terms import (
    ObjectTerm as ObjectTerm,
)
from ._terms import (
    OntologySnapshot as OntologySnapshot,
)
from ._terms import (
    OntologySource as OntologySource,
)
from ._terms import (
    RdfFormat as RdfFormat,
)
from ._terms import (
    RdfStatement as RdfStatement,
)
from ._terms import (
    ResourceTerm as ResourceTerm,
)
from ._terms import (
    SourceKind as SourceKind,
)
