# Ontology consolidation — open work

Open definition, inference, and validation questions. Authoring rules live in
[the reference library](../README.md); findings here are not exceptions to those rules.
Completed changes and their verification are recorded in [release notes](../releases/)
and Git history.

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
in this library. Include the structural eligibility contract in
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes)
without confusing eligibility with proof from content. Historical migration checks are not proof
that a permanent validator exists; implementation remains a separate task.

Rules: ONT-E7, ONT-S4, ONT-S5, ONT-W3.
