# Shared ontology libraries — remaining work

Current APIs, installation, compatibility boundaries, and package verification belong in
[DOCS.md](../../DOCS.md#67-shared-snapshot-apis-and-package-verification), the
[TypeScript guide](../../libraries/typescript/README.md), and the
[Python guide](../../libraries/python/README.md). This roadmap retains unfinished requirements
and adoption work, rather than completed implementation batches.

## Validation performance

Finish the deferred TypeScript validation-performance evidence using the
[automated-check backlog](automated-rule-checks.md#performance-evidence): bounded work-counter
fixtures, adverse graph shapes, measured latency, and explicit accounting for sorting and output
size. Incremental validation and cross-snapshot reuse are conditional optimizations, not
completion requirements. Ontology validation remains TypeScript-only.

## Downstream adoption

Adoption belongs in the consuming repositories:

- Adapt shared immutable RDF records to the editor's model explicitly. They are not N3 Quad
  instances; literal datatypes are IRI strings. Preserve the editor's intentional projection
  policies and rerun its parsing/serialization roundtrip suite against the adapter.
- Review callers that depended on mutable exported maps or insertion-order query results.
  Supplied snapshots represent changed inputs; immutable contexts must retain isolation.
- Review definition-dependent annotations, model inputs, and example rendering against the
  [text adoption backlog](ontology-consolidation.md#adopt-revised-definition-and-comment-text)
  and [annotation guidance](../annotations-and-models.md).

Editor mutation, serialization, persistence and UI, dataset invalidation, classifier policy,
and adoption scheduling remain consumer-owned. No downstream migration is claimed by the
shared packages.
