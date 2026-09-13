# edugraph-py

Typed snapshot queries, RDF parsing, and released enums for the [EduGraph Ontology](https://github.com/christian-bick/edugraph-ontology).

## Installation

You can install this package directly from GitHub Releases:

```bash
pip install "edugraph-py @ https://github.com/christian-bick/edugraph-ontology/releases/download/<version>/edugraph_py-<version>-py3-none-any.whl"
```

## Usage

### 1. Enum Mapping & Descriptions
Hovering over any enum member (such as `Area.AbsoluteNumberMagnitude`) in your IDE will display the entity's RDF definition as a docstring tooltip.

```python
from edugraph import Area, Scope, Ability

# Use the enums in your code
area = Area.IntegerMultiplication
print(f"Area IRI: {area.value}")  # http://edugraph.io/edu/IntegerMultiplication
```

### 2. Entity Descriptions & Definitions
You can access definitions directly using member properties, the `definition` helper, or the `relations` dict:

```python
from edugraph import Area, definition, relations

# 1. Accessing definition as a property on an enum member
print(Area.AbsoluteNumberMagnitude.definition)
# prints: "The nonnegative magnitude of a rational number independently of its sign..."

# 2. Using the definition() helper function
print(definition(Area.AbsoluteNumberMagnitude))

# 3. Accessing the definition key on the relations dictionary
print(relations(Area.AbsoluteNumberMagnitude).get("definition"))
```

### 3. Individual Relations
You can query direct and transitive structural, specialization, and progression relationships between individuals:

```python
from edugraph import Area, Scope, relations, specializes_transitive, structures_transitive, expands

# Direct relations dict
square_relations = relations(Area.Square)

# Direct expands list
sign_expands = expands(Area.SignNotation)  # [Area.AbsoluteNumberMagnitude, Area.ZeroConcept]

# Specialization inheritance does not traverse partOf
inherited_capabilities = specializes_transitive(Area.Square)
print(Area.Polygon in inherited_capabilities)  # True

# Combined structural navigation traverses both partOf and specializes
structural_context = structures_transitive(Scope.MeterScale)
print(Scope.DistanceAbstraction in structural_context)  # True
```


### 4. Typed snapshot queries

The package supports Python 3.11 and later and ships inline types plus a PEP 561
`py.typed` marker. Core and bundled helpers have no runtime dependencies. Install the
wheel attached to the chosen GitHub release; installing that wheel with the `[rdf]`
extra additionally enables parsing. Packages are not currently published by this workflow
on PyPI. For a local wheel:

```sh
pip install ./edugraph_py-VERSION-py3-none-any.whl
pip install "edugraph-py[rdf] @ file:///absolute/path/edugraph_py-VERSION-py3-none-any.whl"
```

```python
from edugraph.core import NamedNode, OntologyContext, RdfStatement

context = OntologyContext([
    RdfStatement(
        NamedNode("https://example.org/Draft"),
        NamedNode("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),
        NamedNode("http://edugraph.io/edu#Area"),
        source="draft.ttl",
        source_kind="descriptors",
    ),
])
assert context.is_label_eligible("https://example.org/Draft")
assert context.lookup_descriptor("https://example.org/Unknown") is None
```

Contexts consume their input once, retain frozen RDF records, and expose tuple results.
A new snapshot gets a new context; definitions, child roles, and indexes cannot leak between
versions. Named graphs remain in authored records; graph queries use their union. Core imports
load only vocabulary contracts, not the bundled ontology or optional parser.

- `lookup_descriptor` returns a record or `None`; `descriptors` returns the sorted inventory.
- `authored_assertions` retains RDF term distinctions and source/graph information.
- `related(iri, property, access="authored" | "entailed")` returns unique named targets.
  Entailed access uses only inverses/superproperties declared in the supplied schema.
- `traverse` returns sorted reachable IRIs and terminates on cycles. It includes the start only
  when an actual cycle/self-edge reaches it. Equality for capability coverage remains explicit.
- `inspect_label` returns a discriminated known/unknown result; `is_label_eligible` raises
  `UnknownDescriptorError` for unknown IRIs. Eligibility requires a complete snapshot, checks
  incoming `partOf` even without a schema inverse, and does not establish content evidence.
- `incompatible`, `deduct_compatible`, and `deduct_admitting` preserve existing recorded
  implication/contradiction behavior. They are not numerical solvers or new progression inference.
  Empty deduction inputs yield empty results; untyped IRIs can still participate in recorded edges.

`RELATION_IRIS`, `IRI_SCHEMA_CONTRACT`, and `IRI_RELATION_FAMILIES` expose fixed full-IRI
vocabulary metadata. They do not silently fill in an incomplete supplied schema.
`snapshot_from_json` decodes the version 1 shared authored snapshot and raises
`SnapshotFormatError` for malformed representations; it does not assess ontology validity.

### 5. Optional RDF parsing

```python
from edugraph.core import OntologyContext, OntologySource
from edugraph.rdf import parse_ontology_sources

sources = [OntologySource(
    name="draft.ttl", kind="descriptors",
    text='<https://example.org/A> <https://example.org/p> "01"^^<http://www.w3.org/2001/XMLSchema#integer> .',
)]
context = OntologyContext(parse_ontology_sources(sources))
```

The optional PyOxigraph adapter supports Turtle (default), TriG, N-Triples, and N-Quads.
It parses supplied text without loading files or fetching IRIs. An optional `base_iri`
resolves relative IRIs. It preserves literal lexical forms, language/datatype, named/default
and blank-node graphs, and document-scoped blank identity. IRI-looking literals remain literals.
Independent parses need not assign identical generated blank identifiers. Duplicate source names,
unsupported syntax, and malformed input raise `OntologyParseError` with `source`,
`source_kind`, and `code`; errors never return a successful partial snapshot.
The public term model is RDF 1.1: quoted triples and directional literals are rejected.
Original whitespace, prefixes, comments, and byte-identical serialization are not provided.

PyOxigraph was selected after a lexical-fidelity probe: RDFLib's defaults normalize numeric
literals, while this adapter preserves them without changing process-global parser settings.
Its binary parser dependency is optional; the query core remains native Python.
Ontology validation and assessment remain available only in TypeScript.

### 6. Compatibility, references, and development

Existing root imports and `edugraph.area`, `edugraph.ability`, `edugraph.scope`, and
`edugraph.relations` modules remain available. `edugraph.generated` explicitly exposes released
helpers and `bundled_context()`. Enum values and legacy definition newline flattening are retained.
Helper lists now have deterministic full-IRI order (matching TypeScript UTF-16 ordering), rather
than relying on set iteration. Returned dictionaries/lists and legacy `ENTITY_RELATIONS` and
`definitions` maps are detached compatibility views: changing them never edits the ontology or
changes subsequent helper answers. Use a supplied snapshot to represent changed data.

Original authoring references ship inside the package. Read them without assuming a filesystem
installation using `importlib.resources.files("edugraph").joinpath("RULES.md").read_text()`;
that index links the `references/` tree and lists intentional repository-only links.

The repository assembles maintained modules with generated enums and the shared authored snapshot,
then runs strict mypy, Ruff, shared conformance cases, existing regressions, and installed consumers.
Wheel and sdist include generated data: consumers need no Node, Jena, or Owlready2 to build/install.
Stable versions match the ontology tag. Previews derive their base from the latest reachable
stable ontology tag: `0.26.0-pre.2.SHA` becomes `0.26.0.dev2+gSHA`. The numeric suffix
counts commits since that tag; the SHA identifies the snapshot. These development versions
sort before the official base release, so install previews explicitly. The build resolves
one version for both client artifacts and the ontology preview release name.
