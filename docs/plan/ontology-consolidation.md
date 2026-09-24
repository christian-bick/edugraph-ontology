# Ontology consolidation — open work

Open definition and inference questions. Algorithmic validation is tracked separately in
[automated rule checks](automated-rule-checks.md). Authoring rules live in
[the reference library](../README.md); findings here are not exceptions to those rules.
Completed changes and their verification are recorded in [release notes](../releases/)
and Git history.

## Open ontology work

### 1. Review measurement family definitions

Implemented; pending merge and release. `MetricDistanceScale` now says “Involves distances
expressed in metric units of length.” Its previous wording described only meters.

Reviewed all seven direct specializations: `CentimeterScale`, `DecimeterScale`, `KilometerScale`,
`MeterScale`, `MicrometerScale`, `MillimeterScale`, and `NanometerScale`. Their definitions retain
the concrete unit distinctions and each preserves the broader family meaning. For example,
3 centimeters supports `CentimeterScale` and the family claim; 3 inches does not support this
metric family, and 3 square meters describes area rather than distance.

Identifiers, unit definitions, relations, and labeling eligibility are unchanged. The family
remains usable when only metric length units are established; use a concrete unit when the
evidence supports it. Consumers interpreting the old family definition as meter-only should
review those uses when adopting the corrected definition.

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

The concrete shape/angle and nanometer relation conflicts are resolved in
[v0.25.1](../releases/v0.25.1.md). Broader progression definitions and inference remain open;
the one-relation-per-family rule does not make `integrates` a subproperty of `expands`.

Sources: [Areas](../../core-areas-math.ttl), [Scopes](../../core-scopes-math.ttl).
Rules: ONT-R1, ONT-R3, ONT-R4, ONT-R5.
