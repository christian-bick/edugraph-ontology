# Ontology consolidation — open work

Open definition and inference questions. Algorithmic validation is tracked separately in
[automated rule checks](automated-rule-checks.md). Authoring rules live in
[the reference library](../README.md); findings here are not exceptions to those rules.
Completed changes and their verification are recorded in [release notes](../releases/)
and Git history.

## Open ontology work

### 1. Review measurement family definitions

Resolved. `MetricDistanceScale` covers distances expressed in metric units of length.
Its previous wording described only meters. The
[definition normalization change](../releases/v0.28.0.md)
preserves that correction and applies the reusable text convention.

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

Resolved by clarifying the intended relation semantics in
[ONT-R2](../relations.md#ont-r2--interpret-constraints-at-the-descriptor-level).
Inclusive endpoints and the existing numeric contradiction assertions are intentional.
`NumbersSmaller10` and `NumbersLarger10` both include magnitude 10; their contradiction
concerns the opposing educational ranges, not exclusion of the shared boundary value.

Keep the current inclusive meanings, relation assertions, and deduction behavior. Exact interval
intersection and a separate relation for opposite bounds are not required. The schema and helper
documentation now explain partial conflict at the descriptor level. The separate question of
which quantities a particular content annotation covers remains subject to ONT-D4 and ONT-E4.

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

### 4. Review the unit-fraction endpoint

`UnitFractions` allows numerator one and any positive integer denominator, so it includes 1/1.
Its parent `ProperFractions` requires the numerator's absolute value to be strictly less than
the denominator's. The definitions and specialization therefore disagree at 1/1.

Decide whether this context should exclude denominator one or belong under a broader fraction
family. The normalization preserves the existing meanings and placement; changing this boundary
requires reviewing existing annotations as well as the relation.

Source: [core-scopes-math.ttl](../../core-scopes-math.ttl).
Rules: ONT-D4, ONT-S2, ONT-W2.

### 5. Adopt the revised definition and comment text

Review definition-dependent annotations, prompts, and model inputs when adopting the
[normalized text](../releases/v0.28.0.md). Identifiers and graph
edges are unchanged, but clarified definitions and revised examples can affect interpretation.
Application-specific rendering and dataset changes belong in their owning repositories.

Definition lookup in the TypeScript and Python clients returns definitions without comments.
Consumers can read the separate `rdfs:comment` assertions through the shared snapshot APIs;
Turtle and RDF releases also retain both annotations. Review consumers that previously obtained
examples from definition lookup alone. The combined statement helpers added in
[v0.29.0](../releases/v0.29.0.md) provide reusable rendering; adoption by downstream
consumers remains application-owned. A dedicated comment accessor can be considered separately. Follow
[the shared text guidance](../annotations-and-models.md#constructing-statements-from-descriptor-text)
and [client access guidance](../../DOCS.md#61-typescript-api-usage).

Rules: ONT-D4, ONT-E5, ONT-W2, ONT-W3.
