# September 2026 — authoring and tooling

Dates below use UTC merge dates for pull requests and UTC committer dates for direct commits.

- **September 10–12 — Authoring rules and validation.** Consolidated focused references with
  stable rule IDs, opened competency composition, and defined observable-label eligibility.
  Added schema/relation, structural, progression-cycle, and documentation checks, followed by
  public validator and CLI tests.
  [Rules](https://github.com/christian-bick/edugraph-ontology/commit/145130c454a3334a5645277943f0023e49ee69b1),
  [eligibility](https://github.com/christian-bick/edugraph-ontology/commit/11cdc23b16f7b94b57d3a896354f9c85e6b40880),
  [validation tests](https://github.com/christian-bick/edugraph-ontology/commit/ceeebce7dc14bc6cf9e3af85a53048e584fa1011).
- **September 13 — Shared TypeScript snapshots.** Separated parser-independent core, RDF,
  and generated entry points. Supplied snapshots gained isolated queries and explicit
  assessments; packaged adapters and authoring references supported downstream use.
  [Implementation](https://github.com/christian-bick/edugraph-ontology/commit/14b9676e298037931647f9b05d86ee34ab039d1b).
- **September 13 — Typed Python parity.** Added immutable supplied-snapshot queries, optional
  RDF parsing, maintained compatibility adapters, shared behavioral fixtures, and typed package
  verification. Ontology validation remained TypeScript-only.
  [Implementation](https://github.com/christian-bick/edugraph-ontology/commit/dacd9f5d5c2f488bd8b3050bd3a6967333d1b29c).
- **September 25 — Definitions and statements.** Normalized descriptor definitions and
  separated comments, then added combined involvement-statement rendering in both clients.
  [PR #54](https://github.com/christian-bick/edugraph-ontology/pull/54),
  [statement helpers](https://github.com/christian-bick/edugraph-ontology/commit/1bee64092b60eaaaacfbf287b19d9f682eeb0b4c).
- **September 27–30 — Content refinements.** Clarified time measurement, task-value bounds,
  and nested operand counts; added correctness evaluation and multiples-of-five contexts.
  Arithmetic-law topics were regrouped under Arithmetic.
  [Time](https://github.com/christian-bick/edugraph-ontology/pull/55),
  [bounds](https://github.com/christian-bick/edugraph-ontology/commit/dee88508f2f8277730f4ef16650eae03f81a6104),
  [operands](https://github.com/christian-bick/edugraph-ontology/commit/a08f9a91131777245431045e29c3e844d98d21e8),
  [evaluation](https://github.com/christian-bick/edugraph-ontology/pull/56),
  [multiples](https://github.com/christian-bick/edugraph-ontology/pull/57),
  [arithmetic laws](https://github.com/christian-bick/edugraph-ontology/pull/58).
