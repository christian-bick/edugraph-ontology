# Shared TypeScript library implementation plan

Status: batches 1-5 implemented on 2026-09-13; final delivery verification is recorded below.
The baseline review used `ceeebce` and requirements commit `5ea52e5`. Batch 6 remains deferred.

[Shared library requirements](shared-typescript-library.md) define the requested capabilities.
The authoring references remain authoritative, especially ONT-E7, ONT-S3 through ONT-S5,
and ONT-R1 through ONT-R5. This plan changes library access and assessment contracts, not
ontology semantics. The [automated-check inventory](automated-rule-checks.md) remains the
record of existing rule coverage.

## Baseline coverage

**Fulfilled** means the stated capability exists in source; it does not certify a released
artifact or a downstream integration. **Partial** means useful implementation can be retained,
but the requirement is not complete. **Missing** means the requested public capability is absent.

| Requirement | Status | Existing implementation and remaining work |
| --- | --- | --- |
| R1.1: faithful RDF parsing | Partial | `parseOntologySources` accepts text and retains filename/kind, but keeps only term values and discards graph, term kind, language, and datatype. Preserve RDF terms and document-scoped blank-node identity; attach source identity to parse errors. Assess editor parse/serialize compatibility before replacing its parser. |
| R2.1: supplied snapshots | Partial | Validators already inspect supplied full-IRI statements without enum lookup, fetching, or edit operations. Queries and eligibility still use bundled generated data. Extend the same input boundary to those operations and verify non-mutation. |
| R2.2: reusable isolated context | Missing | Checks construct private indexes repeatedly; there is no public snapshot context shared by validation and queries. Add a read-only context with snapshot-local indexes. Mutable updates and cross-snapshot result reuse are unnecessary. |
| R2.3: inspectable facts | Partial | Parsed assertions and generated definitions/relations are available, but there is no unified supplied-snapshot lookup with authored/derived distinctions. Expose records, incoming children, definitions, and ancestry by full IRI. |
| R3.1: contracts and queries | Partial | Relation contracts/families are exported as local names. Generated direct, traversal, and deduction helpers exist. Add full-IRI contracts and snapshot queries, preserving existing meanings and identifying derived access. |
| R4.1: shared validation and consumer policy | Fulfilled | The CLI and public validator use the same O2, O3a, O3b, O4, O5, O6, and O8 functions. They impose no application save policy or descriptor cardinality. Retain this boundary during refactoring; O7 remains a query and O10 remains document validation. |
| R4.2: structured deterministic findings | Partial | IDs, codes, messages, and compact witnesses exist. Full-IRI navigation references and structured sources are missing. Ordering witnesses can depend on encounter order; duplicate normalized edges retain the last source. Existing reorder tests cover simple fixtures, not these cases. |
| R4.3: explicit assessment outcomes | Missing | The public result is a findings array. O5 returns an empty array when structural cycles prevent assessment. Add per-check outcomes and reasons; distinguish input failure from a completed assessment. |
| R4.4: efficient complete validation | Partial | Iterative cycle/order traversals exist, but structural indexes are rebuilt and cycle detection repeats. Cycle witnesses rescan all edges per cyclic component; sorting also needs explicit complexity accounting. Work-counter coverage remains deferred, not fulfilled. |
| R5.1: safe eligibility | Partial | Generated `isLabelEligible` implements the no-constituent-children rule for known release descriptors. Unknown runtime inputs also receive an empty child list. Add lookup-aware eligibility over complete supplied snapshots, with explicit unknown handling. |
| R6.1: independent public modules | Partial | Files separate some responsibilities, but `OntologyValidation` imports `n3`, and the generated root index exports data and validation together. Add independent core/parser/data entry points, standalone core builds, and convenience adapters. |
| R6.2: packaged rule documents | Missing | Package configuration ships `dist`; the release bundle includes the package README but not the original authoring reference tree. Add document assets, discoverable paths, and packaged-link checks. |
| R6.3: public integration verification | Partial | Rule fixtures, public parsing/validation tests, valid multi-parent cases, CLI success/failure/parse-error tests, and generated-client regressions exist. Packed imports, browser boundaries, term fidelity, snapshot isolation, unknown lookup, and explicit assessment outcomes need coverage. |

Evidence: [validation](../../libraries/typescript/OntologyValidation.ts),
[public and CLI tests](../../libraries/typescript/validation.test.ts),
[generated-client tests](../../libraries/typescript/test.ts),
[generator](../../src/ontology/generate-ts.py),
[package configuration](../../libraries/typescript/package.json), and
[Docker delivery](../../Dockerfile). This is a source audit, not a new runtime or browser audit.

## Implementation sequence

Keep each batch focused and add its acceptance tests with the implementation. Reuse the existing
fixtures rather than building a second rule engine or a large fixture framework. The names below
are proposed public boundaries; finalize signatures in the first batch.

### 1. Define contracts and isolate the core

Requirements: R2.1, R4.1, R6.1; foundation for R1.1 and R4.3.

- Define parser-independent snapshot, RDF-term, source-reference, and assessment types. Preserve
  named nodes, literals, blank nodes, and graph identity without importing an RDF parser at runtime.
  A validation projection must retain enough identity to avoid treating a literal as a named node.
- Split contracts and algorithms from parsing. Propose `edugraph-ts/core`, `edugraph-ts/rdf`, and
  `edugraph-ts/generated`; keep filesystem/process operations in CLI modules. Add a core-only
  build that needs neither generated sources nor a parser installation.
- Retain existing root APIs through adapters where practical. In particular, avoid silently
  changing the legacy parser's statement shape or `validateOntology`'s array return type.
  Introduce an explicit assessment API as the complete gate, and document the limits of any
  retained findings-only convenience wrapper.

Acceptance: import/build core with no generated files or parser; inspect a small unpublished
full-IRI snapshot through the same validation implementation. Record API/migration decisions
before downstream integration, including any intentional breaking change.

### 2. Preserve RDF terms and source identity

Requirements: R1.1; supports R2.3 and R4.2.

- Review the editor's actual parser, serializer, supported syntax, blank-node handling, and
  roundtrip fixtures before implementing its migration. This downstream review has not been
  performed here and is a prerequisite for declaring editor compatibility. Reuse or adapt its
  fixtures where appropriate; editing and serialization stay in the editor repository.
- Implement the rich parser entry point over supplied text. Declare supported formats and retain
  graph terms for supported dataset formats. Preserve filename/kind and independent blank-node
  scope across documents. Reject unsupported formats explicitly.
- Return or throw a structured source-associated parse failure. Derive the legacy/simple
  validation view from the retained RDF representation rather than discarding the original terms.

Acceptance: language and typed literals; equal blank-node labels in separate documents staying
distinct while references within one document agree; graph preservation for supported syntax;
malformed/unsupported input with source identity. An error must never become an empty successful
assessment. No byte-identical serialization promise is added.

### 3. Add a read-only snapshot context and shared queries

Requirements: R2.1-R2.3, R3.1, R5.1; foundation for R4.4 and generated adapters.

- Build entity/definition lookup, authored assertions, adjacency, relation-family, and child-role
  indexes once per context. Copy or otherwise isolate input data and do not expose mutable internal
  maps/arrays. A caller constructs a new context for a changed snapshot.
- Export full-IRI relation contracts and retain asserted access separately from schema-derived
  inverse/superproperty access. Keep supported schema interpretation aligned with the existing
  contract; do not silently replace a caller's schema or add new inference.
- Move direct traversal, eligibility, `incompatible`, `deductCompatible`, and `deductAdmitting`
  algorithms into the core. Preserve documented deduction behavior, including currently unresolved
  numeric semantics tracked in [consolidation](ontology-consolidation.md).
- Require a known descriptor lookup for eligibility, or return an explicit unknown result.
  Document the complete-snapshot prerequisite; partial-input support and completeness detection
  are outside the baseline. Do not add an O1 validity gate.
- Specify traversal direction, duplicate handling, output order, cycle termination, and whether
  a starting node is returned when a cycle reaches it. Preserve useful legacy helper behavior
  through adapters; equality for capability coverage remains explicit under ONT-R4.

Acceptance: two contexts using the same IRI but different entities, definitions, and constituent
children return independent answers. Include unknown IRI versus known leaf, specialization-only
children, mixed roles, authored versus derived access, and a terminating cyclic traversal.
Verify input records and returned context data cannot be used to change another query's ontology.
Use focused deduction fixtures already present in the client tests.

### 4. Make validation outcomes and navigation explicit

Requirements: R4.1-R4.3; uses the context from batch 3.

- Have rule functions reuse the context while keeping authored assertions distinct from derived
  access. Retain stable rule/check IDs and codes; add full-IRI entities/properties, structured
  sources, and witnesses suitable for navigation. Compact strings remain display conveniences.
- Return an assessment containing findings and per-check passed, failed, skipped, or error
  outcomes, with scope and prerequisite reasons. Preserve the structural-cycle finding and mark
  ordering skipped; independent checks still run. Treat parse/input failure explicitly before
  graph assessment. No new ontology rule is introduced for an unassessed check.
- Select witnesses deterministically by full RDF identity, including alternative ordering paths
  and duplicate assertions across files. Define semantic result ordering without relying on
  compact names or locale-specific comparisons. Preserve all relevant source references.
- Move the repository CLI to the assessment API. A mandatory check that could not run cannot be
  reported as complete success; application save/adoption policy remains consumer-owned.

Acceptance: reuse the public-gate cases for every existing rule. Add a cyclic input with explicit
O5 skip and independent failures, alternative-path statement permutations, duplicate edges from
different files, and two namespaces with the same local name. Assert structured fields, not
whole-message snapshots. Verify CLI and direct assessment agree for equivalent input.

### 5. Delegate generated helpers and package the public boundary

Requirements: R3.1, R6.1-R6.3.

- Generate a bundled snapshot that preserves authored facts needed by the core; do not infer
  authorship from the existing expanded relation map. Keep enum values and convenient function
  names where practical, but make helpers delegate to one release-bound core context. Replace
  TypeScript algorithm templates rather than keeping two implementations. Retain Python client
  regressions without expanding Python into a validation implementation.
- Add executable and type exports for core, RDF parsing, and generated data. Ensure the core can
  be imported with parser/data absent. Parser consumers may load the parser dependency explicitly;
  neither core nor parser imports Node filesystem/process modules. Avoid an unsolicited module
  format migration; select browser-compatible packaging through a small consumer smoke test.
- Ship original rule/supporting documents with relative paths intact. Start with the reference
  index and follow required local document links; explicitly list intentional repository-only
  links. Update package inclusion and Docker/release copying together. Document local paths and
  explicit browser asset bundling without importing Markdown from core. No provenance manifest.
- Update DOCS.md and the package README for snapshots, query semantics, assessment results,
  complete-input eligibility, subpath imports, compatibility adapters, and packaged rule access.

Acceptance: install the actual distribution tarball in a temporary consumer, test public imports
and declarations, build a minimal browser consumer, and check shipped Markdown paths/link closure.
Verify generated and supplied-snapshot adapters agree on selected eligibility, traversal, and
deduction cases. Run existing generated-client tests and the authoritative Docker gate before
claiming deliverable completion. Tagging/publishing is a separate release action.

### 6. Deferred performance evidence

Requirements: remaining R4.4 and related R6.3 evidence.

The earlier decision to defer graph stress testing remains in effect for the immediate work.
Keep this as a visible follow-up, not an implicit prerequisite for starting batches 1-5 and not
a completed requirement when functional tests pass.

Reuse indexes and structural cycle results during the context refactor. Before declaring R4.4
complete, add bounded work-counter fixtures for deep, wide, multi-parent, and independently cyclic
graphs. Eliminate whole-edge rescans per cyclic component, account for deterministic sorting and
witness output size, and avoid repeated eager closures for all descriptors. Use measurements to
justify any further optimization. Incremental validation and cross-snapshot reuse remain optional.

## Delivery and scope decisions

- Order: batch 1 precedes 2 and 3; batch 4 uses 3; batch 5 integrates 2-4. Batch 6 is explicitly
  deferred. Reusable indexes within one snapshot do not require delta validation across edits.
- The first usable milestone is a parser-independent core with supplied-snapshot validation and
  queries. The complete downstream delivery additionally requires rich parsing, explicit outcomes,
  generated adapters, packaging, and artifact tests. Do not mark the entire requirements document
  fulfilled while performance evidence or editor compatibility review remains open.
- Keep editor model construction, edits, serialization, persistence, UI, dataset invalidation,
  classifier policy, content evidence, and adoption workflows in their owning repositories.
- This plan contains no new progression propagation, semantic rename/diff engine, partial-ontology
  subsystem, or new descriptor/cardinality rule. Unresolved meaning stays in consolidation.


## Implementation and verification record

Batches 1-5 retain the original rule implementation and add typed public boundaries:

- `core` builds independently; `rdf` preserves terms and reports source-associated errors;
  `generated` exposes released enums and adapters using one bundled context. Root APIs remain
  compatibility wrappers. The package README documents migration and sorted query outputs.
- Contexts copy input, expose frozen records, and keep indexes isolated. Tests cover unpublished
  IRIs, distinct definitions/entities across snapshots, authored/derived access, incoming child
  eligibility, unknown descriptors, traversal, and existing deduction operations.
- `assessOntology` reports explicit per-check outcomes with full-IRI references and structured
  sources. Tests cover ordering skips, independent failures, alternate-path ordering, duplicate
  source assertions, namespace collisions, and CLI parse failures.
- Generated TypeScript algorithm templates were replaced with maintained core adapters. The
  original authored Turtle supplies the bundled snapshot; expanded maps are not treated as
  authored assertions. Python retains its descriptor/relation client and regression tests.
- Docker packages original references and verifies the npm artifact's exports, declarations,
  parser-free core imports, browser bundles, document links, and selected adapter equivalence.
  Release packaging uses the same npm inclusion rules.

Editor compatibility review inspected `src/infrastructure/rdf/ontology-parser.ts`,
`ontology-serializer.ts`, and `ontology-rdf.test.ts` in the sibling editor repository. Both
parsers use N3 and supplied text. The editor's model intentionally discards inverse predicates,
keeps selected definitions/examples, and regenerates headers on serialization. Those are
consumer projection policies: the shared parser preserves all source assertions. Its immutable
term records are not N3 Quad instances (literal datatype is an IRI string), so adoption requires
an explicit projection/type adapter and rerunning the editor's roundtrip suite. No editor files
were changed and no downstream migration is claimed. The source review prerequisite is complete.

The new library tests are part of the Docker gate. Browser smoke tests execute bundled code with
browser globals in a sandbox; they do not replace downstream UI tests. Performance/work-counter
coverage from batch 6 remains open and does not block the requested batches 1-5 release scope.
Incremental validation remains optional and unimplemented.


Verification on 2026-09-13: `docker build . --output dist` passed, including TypeScript core and
full builds, Python client build/tests, existing and new functional suites, repository ontology
and documentation gates, and the packed artifact checks above. Batches 1-5 are ready for release;
no version tag or publication is part of this implementation run.
