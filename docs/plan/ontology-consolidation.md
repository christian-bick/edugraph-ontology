# Ontology documentation consolidation

Review date: 2026-09-09.

This record separates completed documentation work from open ontology questions.
The authoring rules live in [the reference library](../README.md). Findings here are not
exceptions to those rules.

## Review basis

The review inspected the ontology's schema and three descriptor files, both code generators,
client relation tests, build workflow, and the existing design rationale.
The source baseline was `f693796`, with the local changes recorded below.
This was a documentation and source review, not a new classification or embedding evaluation.

## Completed

- [x] Replace the monolithic authoring guide with focused references and stable rule IDs.
- [x] Define Area, Scope, Ability, evidence, and relations independently of application architecture.
- [x] Keep guidance about annotated content and models general, without current project contracts.
- [x] Preserve the manual wording and example choices from the documentation review.
- [x] Route README, technical docs, design links, and agent instructions to the reference library.
- [x] Leave `CompetencyDescription` composition open, as explicitly decided in this review:
  remove its three `owl:equivalentClass` descriptor-presence restrictions and remove global
  dimension-count requirements from the documentation.
- [ ] Verify the resulting schema export and generated clients through the supplied Docker build.
  The 2026-09-09 attempt could not start compilation: Docker Desktop was running, but its engine
  did not answer bounded pings on either Linux endpoint. The task's waiting build and diagnostic
  commands were stopped. Retry the Docker build after the engine is responsive. Client
  validation was not claimed at that time; the later native validation is recorded below.
- [x] Validate the schema export and generated clients through a native build on 2026-09-10
  while preparing [v0.24.0](../releases/v0.24.0.md). Jena 5.6.0 validated all four sources;
  export inspection confirmed the superclass and absence of equivalence restrictions.
  TypeScript compilation and relation checks and all 12 Python tests passed, including
  when run against the packaged assets. The Docker retry still did not respond, so the
  separate Docker verification above remains open.
- [x] Verify reference links, rule IDs, and worked ontology examples: 13 Markdown files,
  24 rules, and 15 concrete relation examples pass. All four Turtle sources parse successfully;
  the parsed schema retains the superclass and has no descriptor-presence restriction.

The former schema made the class equivalent to each of three separate existential restrictions.
That did not express the intended open composition. The class now remains a subclass of
`CompetencyEntity`, with no descriptor-presence or cardinality restriction.

## Open ontology work

### 1. Review measurement family definitions

`MetricDistanceScale` currently says “Involves distances expressed in meters.”
`MeterScale` has the same definition, while `CentimeterScale` and `MillimeterScale`
also specialize the family. The family wording describes just one member.

Review the family and its unit children together. Define the shared metric-distance context
without erasing the concrete unit distinctions. This is a definition review, not evidence that
the family must become unusable or that labels must always be leaves.

Source: [core-scopes-math.ttl](../../core-scopes-math.ttl).
Rules: ONT-D4, ONT-E3, ONT-S2.

### 2. Reconcile numeric boundary definitions and contradictions

`NumbersSmaller10` says absolute value is less than or equal to 10.
`NumbersLarger10` says it is greater than or equal to 10. Both include the endpoint,
yet they contradict each other.

Test the exact endpoints and review the rest of the bound families before changing a definition
or relation. Decide how endpoints and the set of covered quantities should work; then align
definitions, deduction helpers, and examples. A passing deduction test does not resolve a mismatch
between its encoded exclusion and the prose definitions.

Source: [core-scopes-math.ttl](../../core-scopes-math.ttl).
Rules: ONT-D4, ONT-R2.

### 3. Refine progression and its inference separately

Review direct `expands`, `integrates`, `inverts`, and `translates` assertions, especially
those whose endpoints are broad fields. Decide propagation along source and destination paths
separately from specialization inheritance.

A `partOf` path may contribute to a justified progression inference. The behavior or name of
a traversal helper does not establish that rule.
Any future inference through `involves` needs the same explicit treatment.

Rules: ONT-R3, ONT-R4, ONT-R5.

### 4. Centralize semantic validation as a separate implementation task

The Docker build and client tests cover selected relation behavior. They do not exhaustively
validate graph ordering, mixed children, or definition truth.

Build the agreed centralized validation module with documented rule coverage, using the rule IDs
in this library. Historical migration checks are evidence from that migration, not proof that a
permanent validator exists. The documentation work does not add a new validation subsystem.

Rules: ONT-S4, ONT-S5, ONT-W3.
