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

## Deferred arithmetic strategy audit

Review `DecimalStrategies`, `FractionStrategies`, and `IntegerStrategies` together for
field-versus-method boundaries, definitions, naming, and family structure before any broader
rename or relation conversion. Consider singular method concepts and specialization families
alongside plural organizers, based on their intended meanings under
[ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries).

Source: [core-areas-math.ttl](../../core-areas-math.ttl).
Rules: ONT-D4, ONT-S1, ONT-S2, ONT-W2.

## Deferred iteration consolidation and dataset adoption

Retain `Iteration` and `IteratedOperation` unchanged for now. Their overlap remains an open
meaning decision; neither consolidation nor a new specialization link is approved. Review the
general repetition meaning and the arithmetic descriptor's ambiguous "single operand value"
boundary before changing definitions, identifiers, or ancestry.

The dataset review at
[commit `2e08f365`](https://github.com/christian-bick/edugraph-dataset/tree/2e08f3654d30cc1567f701c4bc78b1b68f60d568)
found the arithmetic label in three generators and seven target permutations. Uses include
[array equations and two-equal-addend tasks](https://github.com/christian-bick/edugraph-dataset/blob/2e08f3654d30cc1567f701c4bc78b1b68f60d568/src/spec/ccss/grade-02.ts#L89)
and [whole-number multiples of fractions](https://github.com/christian-bick/edugraph-dataset/blob/2e08f3654d30cc1567f701c4bc78b1b68f60d568/src/spec/ccss/grade-04.ts#L578).
The repeated-group cases support general iteration. The equal-addends case needs separate
review: an expression such as `7 + 7` shows one addition, and equal operand values alone do not
clearly establish repeated application. The existing label also enforces operand equality;
simply dropping it would lose that task constraint.

If consolidation is resumed, resolve that evidence issue before migrating annotations: either
make repeated accumulation observable or represent the equal-addends requirement separately.
Review the affected targets, capabilities, tests, and visual evidence in the dataset repository,
then regenerate affected artifacts and validation records against the adopted ontology version.
Label changes affect target identities, so existing generated metadata and validation judgments
must not be treated as already migrated. Dataset implementation and release work remain owned
by that repository; no consumer migration has been performed.

A future merge must also review the arithmetic-specific ancestry and progression relations;
they cannot be transferred automatically to the general `Iteration` concept. See the
[family review](core-areas-family-consistency-review.md#24-intuitivemathematics) and
[annotation migration guidance](../annotations-and-models.md#interpreting-annotations-across-ontology-versions).

Rules: ONT-D1, ONT-D4, ONT-D6, ONT-E1, ONT-W2, ONT-W3.

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

For `EvenDivisibility` and `UnevenDivisibility`, review uses against their clarified pairing
and equal-sharing properties under `DivisibilityOfCollections`; they no longer inherit
`DivisionOfCollections`. That descriptor and its partitive and quotative specializations now
inherit `PartitionOfCollections`. Review inferred labels and direct-parent queries accordingly;
no consumer migration has been performed.

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
