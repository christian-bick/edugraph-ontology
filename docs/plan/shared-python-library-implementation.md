# Shared Python library implementation plan

Status: batches 1-5 implemented on 2026-09-13; verification and delivery decisions are
recorded below. Baseline: `b9199b3` (v0.26.0). Selected approach: a native Python implementation with shared ontology data,
relation contracts, and behavioral fixtures. No Node runtime or cross-language bindings.

## Scope and source of truth

Provide the non-validation capabilities of the TypeScript library through an idiomatic,
strongly typed `edugraph-py` distribution, retaining the `edugraph` import package.
Reuse [shared requirements](shared-typescript-library.md) R1.1, R2.1-R2.3, R3.1, R5.1,
and applicable delivery requirements R6.1-R6.3. R4.1-R4.4 are excluded: ontology checks,
assessments, diagnostic witnesses, and validation performance work remain TypeScript-only.
Packaged authoring references are included; a Python documentation validator is not.

The [authoring references](../README.md) define meaning. In particular, preserve
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes),
[ONT-S3](../structure.md#ont-s3--keep-structural-navigation-distinct-from-inheritance),
and [ONT-R4](../relations.md#ont-r4--state-the-inference-rule-separately).
Use [annotations and models](../annotations-and-models.md) for consumer boundaries.
Parity means equivalent observable semantics, not identical syntax or internal representations.
The [TypeScript implementation record](shared-typescript-library-implementation.md)
provides a starting point; accidental implementation behavior is not a new ontology rule.

Label eligibility and compatibility/deduction queries remain in scope. RDF syntax errors,
malformed interchange records, and unknown-descriptor errors are ordinary input handling,
not ontology assessment. Accept well-formed RDF even when it violates ontology authoring rules.
No editing, persistence, implicit fetching, delta engine, partial-snapshot subsystem, new
inference rules, or application-specific annotation requirements are introduced.

## Baseline coverage

This is a source review, not a certification of installed package behavior.

| Capability | Python baseline | Work needed |
| --- | --- | --- |
| Released enums and definitions | Present | Retain enum names/full IRI values and public helpers; generate typed data. |
| Relations, traversal, compatibility, deductions | Present as generated algorithm templates | Move algorithms to maintained core code and delegate bundled helpers. |
| Supplied snapshots and isolated contexts | Missing | Add immutable records and reusable indexes independent of enums. |
| Authored/derived distinction and full RDF provenance | Missing from generated relation maps | Consume an authored snapshot with explicit term, graph, and source records. |
| Label eligibility with explicit unknown handling | Missing | Add snapshot and bundled APIs following ONT-E7. |
| Public RDF text parsing | Missing | Add an optional parser adapter without a runtime dependency in core. |
| Distributed typing | Partial: enum unions and TypedDicts exist | Add strict checking, PEP 561 marker, and installed-consumer type tests. |
| Packaging and verification | Hatchling, src layout in build output, wheel/sdist, relation tests | Maintain source modules, test actual artifacts, include references, extend CI. |

Evidence: [generator](../../src/ontology/generate-py.py),
[Python metadata](../../libraries/python/pyproject.toml),
[relation tests](../../libraries/python/test_relations.py),
[TypeScript context](../../libraries/typescript/OntologyContext.ts), and
[Docker pipeline](../../Dockerfile). Python currently has no runtime dependencies; Owlready2
is used during generation. Its mutable generated relation maps cannot recover authorship.

## Architecture and Python conventions

### Public modules and compatibility

Maintain runtime code under `libraries/python/src/edugraph/`; assemble generated release data
into the distribution during the existing build. Keep generated files separate from maintained
algorithms and include everything needed to rebuild a wheel in the sdist.

| Module | Responsibility |
| --- | --- |
| `edugraph.core` | RDF/source records, relation contracts, immutable context, lookup, navigation, eligibility, deductions. Standard-library runtime only. |
| `edugraph.rdf` | Parse caller-supplied text into core records; optional `edugraph-py[rdf]` dependency extra. |
| `edugraph.generated` | Released enums, bundled snapshot/context, and typed convenience adapters. |
| `edugraph` | Existing root imports, with explicit typed re-exports and lazy loading where needed. |
| `edugraph.references` | Original rule/supporting Markdown assets, discoverable through `importlib.resources`. |

Python executes the parent `__init__.py` when importing a submodule. Keep it lightweight so
`import edugraph.core` neither imports the parser nor loads generated ontology data. A lazy root
compatibility layer must expose precise static exports, not an untyped catch-all `__getattr__`.
Preserve existing enum-module import paths as well as root imports where practical.

Use snake_case functions and PascalCase record classes. Existing enum member spellings and
full IRI values stay stable. Core queries accept full IRI strings independently of released
enums; a documented `Iri` type alias may clarify signatures without pretending to validate IRIs.
RDF identity comes from distinct term classes, never string shape. Preserve legacy list/dict
return shapes through detached adapter results; modifying them must not change core answers.
Document any change to the behavior of exported mutable maps and any observable ordering changes.

### Strong typing and supported Python

- Retain Python >=3.11 support. Use compatible built-in generics, `X | None`, `TypeAlias`,
  `Literal`, and frozen, slotted dataclasses; avoid syntax requiring a newer interpreter.
  Separate this consumer minimum from the repository's Python 3.13 build environment.
- Model `NamedNode`, `BlankNode`, `LiteralTerm`, and `DefaultGraph` separately. Restrict subject,
  predicate, object, and graph positions with unions; a literal must not type-check as a subject.
  Preserve literal lexical form, language/datatype, source name/kind, and graph identity.
- Use immutable tuples and isolated read-only mappings for public records. Frozen dataclasses
  alone do not freeze nested containers. Keep mutable indexes private and snapshot-local.
- Give descriptor lookup an explicit optional result. Represent known/unknown eligibility as
  a discriminated union; the boolean convenience method raises a documented
  `UnknownDescriptorError` for unknown IRIs. Use specific exceptions for parse/input failures.
- Check maintained code, generated public code, and typed examples with pinned `mypy --strict`.
  Do not expose `Any`, unparameterized collections, blanket import ignores, or unchecked casts
  through public APIs. Narrow JSON/parser values at the adapter boundary; use protocols only
  for an actual interchangeable boundary. Add narrow, explained third-party typing workarounds
  only if needed. Strict mode is a baseline, not proof that no `Any` escapes.
- Ship `py.typed` in wheel and sdist, following the
  [typing distribution specification](https://typing.python.org/en/latest/spec/distributing.html).
  Use [mypy strict checking](https://mypy.readthedocs.io/en/stable/command_line.html#cmdoption-mypy-strict)
  and [Ruff](https://docs.astral.sh/ruff/) for focused linting/formatting. Keep tools in development
  dependencies and lock their versions for reproducible repository checks.
- Add concise public docstrings describing inputs, output ordering/immutability, exceptions,
  and semantic limits. Include typed examples for bundled and supplied snapshots.

### Shared data and parity boundary

Produce one versioned, language-neutral authored snapshot from the source Turtle, then adapt
that representation into both clients. Use JSON with explicit term discriminators, full IRIs,
literal fields, graph terms, and source name/kind. Define required fields and reject unsupported
format versions at decoding. Distinguish interchange format version from ontology release version.
Do not reconstruct authored assertions from expanded generated maps or merged RDF that lost sources.

Extract the existing fixed relation contract/family data from TypeScript's validation module
into a small shared data asset, retaining TypeScript exports through adapters. The Python core
must not require a validator build or a parser to access those constants. Fixed contracts describe
the agreed vocabulary; query expansion must still use the supplied snapshot's schema declarations,
without filling in missing schema from the bundled release.

Keep the algorithms native and small. Shared JSON fixtures contain explicit, reviewed expected
results and are consumed by both test suites. Do not generate expectations solely by executing
TypeScript. Compare blank-node identity relationships up to consistent renaming rather than
requiring independent parsers to choose identical generated identifiers. Agree on deterministic
query ordering, including the comparator used for full IRIs; raw parser iteration order is not
a parity promise. Preserve assertion provenance while deduplicating query results.

## Implementation sequence

Each batch includes its focused tests and documentation. Check boxes indicate completion only
after verification; this plan does not authorize publication.

### 1. Establish typed contracts and shared fixtures

- [x] Add maintained Python source layout, core record types, explicit exports, `py.typed`,
  development tooling, and a small typed consumer example. Retain Hatchling and existing names.
- [x] Specify snapshot JSON and shared relation data; move fixed TypeScript contract data out
  of the validation dependency while preserving its public API and rule behavior.
- [x] Create minimal shared query fixtures and runners for both languages. Record the API mapping:
  `create_ontology_context`, `lookup_descriptor`, `authored_assertions`, `related`, `traverse`,
  `inspect_label`, `is_label_eligible`, `incompatible`, `deduct_compatible`, `deduct_admitting`.

Acceptance: parser-free/data-free core import succeeds; valid consumer code type-checks and
an invalid RDF term position fails type checking. Both runners read the same fixture contract.
Existing TypeScript contract/validation regressions pass after the extraction.

### 2. Implement immutable snapshot queries

- [x] Index descriptors, definitions, authored assertions, named-node adjacency, supplied-schema
  inverse/superproperty expansion, and incoming constituent children once per context.
- [x] Add lookup, authored/entailed access, cycle-safe traversal, eligibility, and the existing
  compatibility/deduction operations. Return deterministic immutable core results.
- [x] Keep full RDF assertions inspectable even where literals or blank nodes are excluded from
  named-entity queries. Query over the union of supplied graphs as TypeScript does, retaining
  graph/source identity in assertions. Preserve multiple source occurrences of the same fact.
- [x] Specify lookup versus query behavior for unknown IRIs, traversal self-inclusion when a cycle
  reaches the start, and empty deduction inputs using explicit parity fixtures. Document that
  eligibility requires the caller's complete snapshot and does not prove content evidence.

Acceptance: fixtures cover a named descriptor versus unknown IRI; no children, specialization-only,
constituent, and mixed children; incoming `partOf` without an explicit inverse; authored versus
derived relations; multi-parent/duplicate edges and a cycle; and existing deduction examples.
Two contexts sharing an IRI but differing in definitions/children stay independent. Mutating
original input containers or adapter results cannot alter a context.

### 3. Add faithful optional RDF parsing

- [x] Evaluate [RDFLib](https://rdflib.readthedocs.io/en/stable/) through a small fidelity fixture,
  then select a typed adapter for Turtle, TriG, N-Triples, and N-Quads, matching TypeScript's scope.
  Verify lexical literal preservation and dataset/default-graph handling before finalizing its
  supported dependency range; parser defaults must not silently normalize away required information.
- [x] Accept source text, source name/kind, explicit syntax, and optional base IRI. Scope blank
  nodes per document while preserving identity within it. Keep parsing free of filesystem/network
  loading and process-global parser configuration changes.
- [x] Report source-associated malformed syntax, unsupported format, and duplicate source-name
  errors. Missing optional dependencies receive an actionable installation error.

Acceptance: public parse-to-context fixtures cover plain, IRI-looking, language-tagged, and typed
literals (including a noncanonical numeric lexical form), repeated blank-node labels across
documents, named/default graphs, relative IRIs, and source-associated failures. Ontologically
invalid but syntactically valid input still parses. Core and bundled APIs work without the extra.

### 4. Migrate bundled helpers and document the API

- [x] Extend snapshot generation so both distributions consume the same authored data and contract
  assets. Keep generated enum definitions consistent; remove Python algorithm templates in favor
  of maintained adapters over one lazily initialized bundled context.
- [x] Preserve existing helper names, enum-module/root imports, enum values, and useful return
  shapes. Add bundled eligibility and full-IRI contracts. Record compatibility decisions for
  definition formatting, result order, and mutable legacy maps rather than silently changing them.
- [x] Package original authoring references and required supporting links using the existing
  document-copying approach; expose resource access without importing Markdown into core.
- [x] Update the Python README and DOCS.md with installation extras, type support, supplied
  snapshots, unknown handling, inference limits, resource access, and migration examples.

Acceptance: existing Python client regressions pass; selected bundled lookup, traversal,
eligibility, and deduction answers match a context loaded from the shared snapshot and the
TypeScript adapter. Root compatibility imports remain typed without eager core-import data loading.

### 5. Verify distributions and integrate release gates

- [x] Keep standardized `pyproject.toml` metadata and isolated Hatchling builds. Add explicit
  license/license-file metadata consistent with the repository, project URLs, tested Python
  classifiers, and the optional parser extra. Include runtime modules, data, `py.typed`, and
  references in both artifacts; exclude build tools from runtime dependencies. Follow the
  [PyPA metadata guide](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/).
- [x] Build wheel and sdist, install the wheel in a clean environment outside the checkout,
  and rebuild/install a wheel from the sdist without repository files, Node, Jena, or Owlready2.
  Run public imports, core/bundled queries, optional parsing, resource checks, and a typed consumer
  against installed artifacts without `PYTHONPATH` pointing at repository sources.
- [x] Test supported stable Python versions from 3.11 through the latest stable release at
  implementation time; use the [Python support table](https://devguide.python.org/versions/)
  to maintain this matrix. Run the full suite on Linux and a focused Windows install/import smoke
  test. Retain existing unittest cases; pytest may run them alongside new parameterized fixtures.
- [x] Add Python lint, strict types, conformance, and artifact checks to the Docker/CI delivery
  gate. Preserve the TypeScript ontology/documentation checks and existing package checks.
- [x] Keep stable package versions tied to the same ontology tag. Explicitly document/test the
  Python preview mapping under [PEP 440](https://packaging.python.org/en/latest/specifications/version-specifiers/):
  the current Docker build maps `0.0.0-pre.<sha>` to `0.0.0+pre.<sha>`, a local version rather
  than a Python prerelease. Use a deliberate development-release mapping for new previews,
  retain source-revision traceability, and do not assume npm version syntax is interchangeable.

Acceptance: all supported-version checks, strict typing, shared fixtures, legacy regressions,
clean wheel/sdist consumers, and the authoritative Docker gate pass. Report the tested versions,
artifact contents, remaining limitations, and any compatibility changes before declaring release
readiness. Continue delivering GitHub release assets; adding a PyPI publishing workflow is separate.

## Delivery boundary

Order: 1 -> 2 -> 3 -> 4 -> 5. Batch 2 yields a useful typed core; complete non-validation
parity additionally requires parsing, bundled adapters, references, and installed-artifact checks.
Use a handful of semantic fixtures and consumer checks rather than a new general testing framework.
Stress benchmarks, incremental updates, additional RDF syntaxes, serialization, and new deduction
semantics are deferred. Existing unresolved numeric/progression meaning remains tracked in
[ontology consolidation](ontology-consolidation.md); this port does not resolve it implicitly.


## Implementation and verification record

All five batches are implemented. Maintained Python modules replace emitted algorithm templates;
generation now creates enum data from the same authored snapshot used by TypeScript. The checked
JSON decoder also serves the Python assembler. Fixed contracts/families live in a shared JSON
asset, with stable TypeScript export names and immutable full-IRI Python records.

Core operations use frozen RDF records, private snapshot indexes, sorted immutable results,
explicit unknown eligibility, and the existing deduction semantics. Root exports use a precise
stub plus lazy runtime loading; importing core does not load released enums or a parser.
Compatibility helpers retain enum values, definition newline flattening, and list/dict shapes.
Result order is now deterministic. Mutating a returned result or exported legacy map does not
change the bundled context or subsequent helper answers; supplied snapshots represent changes.

The parser selection changed after the planned fidelity probe. RDFLib 7.6.0's default literal
construction normalizes lexical forms, including paths that turn unquoted numeric tokens into
Python numeric values. Preserving all lexical forms would require overriding parser internals
or changing global settings. The optional [PyOxigraph parser](https://pyoxigraph.readthedocs.io/en/stable/io.html)
preserved quoted and unquoted numeric lexical forms in the probe and exposes typed streaming
records. The implemented range is >=0.5.11,<0.6; repository tests lock 0.5.11. Only this optional
extra has a binary dependency. All core/bundled algorithms and the base wheel remain pure Python.
No serialization, RDF store, ontology validation, or new inference module was added.

Verification on 2026-09-13:

- The authoritative Docker gate passed: TypeScript standalone/full builds, existing validation
  and client suites, shared conformance cases, ontology/documentation checks, browser/npm artifact
  checks, Python strict typing and lint, functional tests, and wheel/sdist consumers.
- The 16 shared query cases pass in both languages. Python has 34 focused functional/regression
  tests, covering source/term fidelity, snapshots, child roles, traversal/deductions, and versions.
- Clean wheel installation, sdist rebuild/install, optional-parser installation, positive static
  consumer checks, and a rejected literal-subject type example passed on Windows Python 3.11.13,
  3.12.9, 3.13.4, and 3.14.7; Docker exercised Linux Python 3.13.11. Consumer checks ran outside
  the checkout without repository import paths. Rebuilt package files matched the original wheel.
- Maintained runtime/generated code, assembler, version mapping, and package verifier pass strict
  mypy; the lazy root implementation was also checked separately from its public stub.
- Release CI now builds once, then gates publication on Linux Python 3.11-3.14 and Windows 3.14
  consumers. These remote jobs have been configured, not executed in this local implementation run.

Stable tags retain their version; preview identifiers now map to development releases such as
0.0.0.dev0+g14b9676e2980. The wheel and sdist include types, shared data, and original reference
assets. No Node, Jena, or Owlready2 is needed to rebuild the shipped sdist. Local release checks
are complete; tagging/publication and the remote CI matrix remain separate delivery actions.
