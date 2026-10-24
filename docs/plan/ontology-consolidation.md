# Ontology consolidation — open work

Open definition, inference, and adoption decisions. Authoring rules live in
[the reference library](../README.md); findings here are not exceptions to those rules.
Validation work is tracked in [automated rule checks](automated-rule-checks.md), and sibling
structure in the [family review](core-areas-family-consistency-review.md).

## Progression assertions and inference

Review direct `expands`, `integrates`, `inverts`, and `translates` assertions, especially those
whose endpoints are broad fields. Decide propagation along source and destination paths
separately from specialization inheritance.

A `partOf` path may contribute to a justified progression inference, but a traversal helper's
behavior or name does not establish that rule. Treat any future inference through `involves`
explicitly as well; the one-relation-per-family rule does not make `integrates` a subproperty
of `expands`.

Sources: [Areas](../../core-areas-math.ttl), [Scopes](../../core-scopes-math.ttl).
Rules: ONT-R1, ONT-R3, ONT-R4, ONT-R5.

## Unit-fraction endpoint

`UnitFractions` allows numerator one and any positive integer denominator, so it includes 1/1.
Its parent `ProperFractions` requires the numerator's absolute value to be strictly less than
the denominator's. The definitions and specialization therefore disagree at 1/1.

Decide whether this context should exclude denominator one or belong under a broader fraction
family. Review existing annotations alongside the definition and relation before changing the
boundary.

Source: [core-scopes-math.ttl](../../core-scopes-math.ttl).
Rules: ONT-D4, ONT-S2, ONT-W2.

## Adopt revised definition and comment text

Review definition-dependent annotations, prompts, and model inputs when adopting clarified
definitions and revised examples. Application-specific rendering and dataset changes belong in
their owning repositories.

Review consumers that previously obtained examples from definition lookup alone. Use the
separate `rdfs:comment` assertions or the combined statement helpers where appropriate. A
dedicated comment accessor can be considered if a concrete consumer need remains. Follow
[the shared text guidance](../annotations-and-models.md#constructing-statements-from-descriptor-text)
and [client access guidance](../../DOCS.md#61-typescript-api-usage).

Rules: ONT-D4, ONT-E5, ONT-W2, ONT-W3.

## 6. Audit existing descriptor comments for example-only content

Review comments that mix examples with explanatory prose, such as
[`IntegerNumbers`](../../core-scopes-math.ttl), against
[ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries).
Move essential defining boundaries into definitions, retain only illustrative examples in
comments, and remove nonessential explanation. Review affected annotations and model inputs;
do not mechanically delete substantive caveats.

Rules: ONT-D4, ONT-W2, ONT-W3.
