# Core Areas Family and Sibling Consistency Review

This document records the structural review of [`core-areas-math.ttl`](../../core-areas-math.ttl)
with respect to consistent descriptor families, focusing on logically consistent siblings in the
[`structures`](../structure.md) relations (`partOf` and `specializes`) and equivalence of semantic
and logical level across sibling sets.

## Contents

- [1. Scope and Evaluation Criteria](#1-scope-and-evaluation-criteria)
- [2. Cross-Family Structural Patterns](#2-cross-family-structural-patterns)
- [3. Root-Level and Single-Child Organizer Findings](#3-root-level-and-single-child-organizer-findings)
  - [3.1 Root-Level Consistency (`ONT-E7`, `ONT-S1`, `ONT-D1`)](#31-root-level-consistency-ont-e7-ont-s1-ont-d1)
  - [3.2 Single-Child `partOf` Organizers (`ONT-E7`, `ONT-S1`, `ONT-D6`)](#32-single-child-partof-organizers-ont-e7-ont-s1-ont-d6)
- [4. Family-by-Family Sibling Consistency Analysis](#4-family-by-family-sibling-consistency-analysis)
  - [4.1 `Algebra`](#41-algebra)
  - [4.2 `Analysis`](#42-analysis)
  - [4.3 `Arithmetic`](#43-arithmetic)
  - [4.4 `Calculus`](#44-calculus)
  - [4.5 `Combinatorics`](#45-combinatorics)
  - [4.6 `FormalMathematics`](#46-formalmathematics)
  - [4.7 `Geometry`](#47-geometry)
  - [4.8 `GraphTheory`](#48-graphtheory)
  - [4.9 `IntuitiveMathematics`](#49-intuitivemathematics)
  - [4.10 `LinearAlgebra`](#410-linearalgebra)
  - [4.11 `Logic`](#411-logic)
  - [4.12 `NumberTheory`](#412-numbertheory)
  - [4.13 `Probability`](#413-probability)
  - [4.14 `Statistics`](#414-statistics)
- [5. Summary of Priority Action Items](#5-summary-of-priority-action-items)

## 1. Scope and Evaluation Criteria

The review evaluates all 894 `Area` individuals across the 16 root domains of
[`core-areas-math.ttl`](../../core-areas-math.ttl) against the normative rules in
[`docs/structure.md`](../structure.md), [`docs/descriptors.md`](../descriptors.md),
[`docs/content-evidence.md`](../content-evidence.md), [`docs/relations.md`](../relations.md), and
[`docs/change-review.md`](../change-review.md):

- **Composition vs. Specialization (`ONT-S1`, `ONT-S2`):** `partOf` (`hasPart`) connects a broader
  area to constituent components, stages, instruments, or aspects without inheritance; `specializes`
  (`specializedBy`) connects a narrower subtype to a broader concept whose core meaning it preserves
  and substitutes for.

- **Sibling Independence and Level Equivalence (`ONT-S3`, `ONT-D2`, `ONT-D3`):** Siblings under a
  shared parent should sit at the same semantic level, partition or organize the parent along a
  coherent dimension, and state what distinguishes each sibling from its parent and peers.

- **Hierarchy Path Ordering and Multi-Parent Integrity (`ONT-S4`, `ONT-S5`):** From root to leaf,
  composition (`hasPart`) may transition into specialization (`specializedBy`), never the reverse;
  a parent must not mix `hasPart` and `specializedBy` children; multi-parent paths must reflect
  genuine dual membership rather than asymmetric omissions.

- **Labeling Eligibility (`ONT-E7`, `ONT-E3`):** A descriptor is eligible for direct content
  labeling if and only if it has no `hasPart` children (`specializedBy` children preserve parent
  eligibility). Consequently, attaching a single child via `partOf` instead of `specializes`—or
  creating an under-populated `partOf` organizer—removes the parent from content labeling.

---

## 2. Cross-Family Structural Patterns

Across the 16 roots, sibling inconsistencies fall into six recurring structural patterns:

### 1. Single-Child `partOf` Organizers Suppressing Parent Eligibility (`ONT-E7`, `ONT-S1`, `ONT-D6`):

Five organizational nodes have only a single `hasPart` child, making the parent ineligible for
content labeling while providing no sibling decomposition.

### 2. Missing `specializes` Links Between Mathematically Nested Siblings (`ONT-S2`, `ONT-S3`):

Several sibling sets place a mathematically narrower concept as a flat peer of the broader
concept it satisfies (even when the broader sibling's `rdfs:isDefinedBy` text is explicitly
inclusive).

### 3. Orthogonal Classification Axes Flattened into One `specializes` List (`ONT-S2`, `ONT-S3`):

A parent specializes simultaneously along two or more independent dimensions (e.g., side length
vs. interior angle, or problem role vs. remainder outcome) without intermediate grouping or
clear dimensional separation.

### 4. Constituent Roles, Theorems, or Constants Mixed with Object/Operation Siblings (`ONT-S1`, `ONT-S2`, `ONT-S3`):

`partOf` or `specializes` sibling lists mix general families, concrete operations, named
theorems, and mathematical constants at the same structural tier.

### 5. Asymmetric Intermediate Grouping Across Parallel Subfamilies (`ONT-S1`, `ONT-S3`, `ONT-E7`):

One branch introduces an intermediate `partOf` or `specializes` parent (e.g.,
`OrderedSelectionCounting`, `DispersionMeasure`, `VectorCurveCalculus`), while its immediate
counterpart leaves parallel concepts ungrouped at the parent level.

### 6. Cross-Root Placement and Boundary Asymmetries (`ONT-D3`, `ONT-S1`, `ONT-S5`):

Closely paired concepts (such as `FunctionDomain` vs. `FunctionRange`, or `FunctionNotation` vs.
all other `*Notation` descriptors) are split across different root domains.

---

## 3. Root-Level and Single-Child Organizer Findings

### 3.1 Root-Level Consistency (`ONT-E7`, `ONT-S1`, `ONT-D1`)

#### `ComputationalMathematics`

**Resolved — 2026-10-24:** Removed `ComputationalMathematics` from
[`core-areas-math.ttl`](../../core-areas-math.ttl). It had no descriptor relations or children to
reassign. The removal left 893 `Area` individuals across 15 root domains; counts elsewhere in
this document describe the original review snapshot. Existing annotations using the removed
identifier require review when adopting this change.

- **Structure at Review:** Root `Area` with `0` `hasPart` and `0` `specializedBy` children

- **Rule IDs:** `ONT-E7`, `ONT-S1`, `ONT-D1`

Out of 16 roots, 15 have `hasPart` children and act as non-eligible discipline organizers
(`ONT-E7`). `ComputationalMathematics` is a bare leaf root—making an entire branch of mathematics
directly label-eligible—while computational and numerical methods (`EulerMethod`, `NewtonMethod`,
`NumericalDifferentiation`, `NumericalIntegration`, `EuclideanAlgorithm`, standard arithmetic
algorithms) reside under domain roots.

**Original Suggestion:** Retire `ComputationalMathematics` (per
[`ontology-consolidation.md`](ontology-consolidation.md)) or populate it with `hasPart` branches so
root-level eligibility is uniform.

#### `Algebra`

**Resolved — 2026-10-24:** Retained `AlgebraicSubstitution` directly under `Algebra` and added
`NumericSubstitution` as its specialization. `SystemSubstitution` now also specializes
`AlgebraicSubstitution`, retaining its existing `SystemRewriting` parent. This adds one `Area`
after the 903-Area set-foundations stage, bringing the ontology at this stage to 904 individuals
across 15 root domains; the original review and earlier implementation-stage counts remain
historical.

`AlgebraicSubstitution partOf Algebra` remains appropriate for the cross-cutting practice of
replacing designated symbol occurrences with admissible values or expressions. Its definition
continues to require consistency, variable binding, and domain restrictions
([ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries)).
`AlgebraicModeling` also remains directly under `Algebra`; no new organizer is introduced
([ONT-S1](../structure.md#ont-s1--partof-organizes-constituents)).

`NumericSubstitution` has this definition:

> The consistent replacement of designated symbol occurrences by specified admissible numerical
> values, represented by numerals or expressions without free variables, while respecting
> variable binding and domain restrictions.

The two narrower substitutions classify overlapping axes: `NumericSubstitution` concerns the
replacement payload, whereas `SystemSubstitution` concerns a solution-preserving system context.
Replacing `x` by `4` or `sqrt(2)` can be numeric substitution outside a system. Rewriting
`{y = 2x + 1, x + y = 7}` as `{y = 2x + 1, x + (2x + 1) = 7}` is system substitution with the
symbolic payload `2x + 1`, which has a free variable and is not numeric substitution. Rewriting
`{x = 2, x + y = 5}` as `{x = 2, 2 + y = 5}` fits both: the replacement is numerical, and the
retained equation preserves the condition needed to recover the original system's solutions.
The unchanged `SystemSubstitution` definition still requires its defining equation or an
equivalent reconstruction condition and preservation of the complete solution set over the
original variables and admissible domain.

Numeric replacement alone does not establish `AlgebraicEquivalence`: replacing `x` by `4` in
`3x + 2` instantiates a selected value, rather than preserving that expression for every `x`.
Substitution yields `3*4 + 2`; arithmetic evaluation yields `14`, while establishing that `x = 4`
satisfies `3x + 2 = 14` concerns `RelationSatisfaction`.
Replacing `x` by zero in `1/x` is inadmissible. Numeric substitution therefore specializes the
generic substitution concept without acquiring a value- or solution-preservation claim from
the separate system-rewriting family
([ONT-S2](../structure.md#ont-s2--specializes-preserves-the-broader-meaning)).

Both system-substitution parent paths retain composition before specialization and uniform
child roles ([ONT-S4](../structure.md#ont-s4--composition-may-lead-into-specialization),
[ONT-S5](../structure.md#ont-s5--review-the-entire-affected-structure)). Existing definitions,
comments, and progression relations are unchanged. `AlgebraicSubstitution` remains eligible
with specialization children, and existing direct labels retain eligibility under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
`SystemSubstitution` gains the broader substitution claim while retaining its rewriting ancestry;
`NumericSubstitution` is eligible as a new specific label. Derived ancestor claims and model
representations should be reviewed using
[the adoption guidance](../annotations-and-models.md#interpreting-annotations-across-ontology-versions).

- **Structure at Review:** 6 `partOf` subtrees + 2 direct leaf children (`AlgebraicModeling`,
  `AlgebraicSubstitution`)

- **Rule IDs:** `ONT-S1`, `ONT-S3`

**Former finding:** Direct `partOf` children mix broad sub-branches (`AlgebraicConstraints`,
`AlgebraicDependence`, `AlgebraicEquivalence`, `AlgebraicFunctions`, `AlgebraicStructures`,
`AlgebraicTheorems`) with two
atomic leaf concepts (`AlgebraicModeling`, `AlgebraicSubstitution`).

**Original Suggestion:** Consider placing `AlgebraicSubstitution` with expression/equivalence
transformations or grouping foundational symbolic practices consistently.

#### `FormalMathematics`

**Resolved — 2026-10-24:** Added `MathematicalNotation` as the common parent of the notation
families, including `NumberNotation`. This addition brings the ontology to 894 `Area` individuals
across 15 root domains after the earlier removal of `ComputationalMathematics`; the original
review snapshot remains 894 individuals across 16 roots.

The new family's definition follows
[ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries):

> The conventions for writing and interpreting the symbols, words, and arrangements used to
> denote mathematical objects, operations, and relations.

`MathematicalNotation partOf FormalMathematics` places the family within the broader field
([ONT-S1](../structure.md#ont-s1--partof-organizes-constituents)). Its ten direct `specializes`
children are `DerivativeNotation`, `FunctionNotation`, `IntegralNotation`, `LimitNotation`,
`MatrixNotation`, `NumberNotation`, `ProbabilityNotation`, `SetNotation`, `SummationNotation`, and
`VectorNotation` ([ONT-S2](../structure.md#ont-s2--specializes-preserves-the-broader-meaning)).
The ten existing specializations of `NumberNotation` retain their definitions and parent links.

The eight notation leaves previously attached directly to `FormalMathematics`, and
`NumberNotation` itself, now specialize `MathematicalNotation`. `FunctionNotation` also
specializes the new family, replacing its `partOf AlgebraicFunctions` link. Its structural
ancestry therefore moves from `Algebra` to `FormalMathematics`; the other notation families gain
the intermediate parent without changing their root. These paths retain composition before
specialization ([ONT-S4](../structure.md#ont-s4--composition-may-lead-into-specialization)) and
uniform child roles at each parent
([ONT-S5](../structure.md#ont-s5--review-the-entire-affected-structure)).

Existing notation identifiers, definitions, comments, and direct-labeling eligibility are
unchanged. `MathematicalNotation` and `NumberNotation` have only specialization children and
are eligible under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
Existing direct notation labels remain usable; derived ancestor claims now include
`MathematicalNotation`. Interpreting what the argument in `f(3)` denotes establishes notation
knowledge; merely evaluating `f(3)` from a function rule does not establish that knowledge
([ONT-D5](../descriptors.md#ont-d5--distinguish-learning-about-notation-from-using-notation)).

- **Structure at Review:** 4 subtrees (`ExpressionStructure`, `MathematicalExpression`,
  `MathematicalStatement`, `NumberNotation`) + 8 leaf `*Notation` nodes

- **Rule IDs:** `ONT-S1`, `ONT-S3`

**Former finding:** While numerical notations are grouped under `NumberNotation`, eight
domain-specific notations (`DerivativeNotation`, `IntegralNotation`, `LimitNotation`,
`MatrixNotation`, `ProbabilityNotation`, `SetNotation`, `SummationNotation`, `VectorNotation`) sit
directly under `FormalMathematics`, and
`FunctionNotation` sits in `Algebra` (`FunctionNotation partOf AlgebraicFunctions`).

**Original Suggestion:** Group domain notations under a sibling parent (e.g., proposed
`SymbolicNotation` or `DomainNotation` alongside `NumberNotation`) and align `FunctionNotation`.

#### `SetTheory`

**Resolved — 2026-10-24:** Organized `SetTheory` into `SetOperations`, `SetRelations`, and
`SetProperties`, and added the cardinality and countability distinctions below. The fundamentals
completeness check also identified `PowerSet` and `SetEquality` as essential additions. This
batch adds nine `Area` individuals, bringing the ontology to 903 individuals across 15 root
domains. The original review snapshot remains 894 individuals across 16 roots; the earlier
notation stage had 894 individuals across 15 roots.

##### Implemented hierarchy and definitions

The three organizers are `partOf` children of `SetTheory`, with these definitions and direct
constituents:

- **`SetOperations`:** "The study of constructions that form result sets from specified input
  sets by determining their elements or constructing ordered tuples."
  Its `partOf` children are `SetUnion`, `SetIntersection`, `SetDifference`, `CartesianProduct`,
  and `PowerSet`. The existing `SetComplement` continues to specialize `SetDifference`.

- **`SetRelations`:** "The study of relationships involving sets and their elements, including
  membership, inclusion, and whether sets share elements."
  Its `partOf` children are `SetMembership`, `SetInclusion`, and `SetDisjointness`.
  `SetEquality` specializes the existing inclusive `SetInclusion` concept.

- **`SetProperties`:** "The intrinsic characteristics of individual sets, including their sizes
  and countability."
  Its `partOf` children are `SetCardinality` and `SetCountability`.

The general cardinality concept and its specializations distinguish these meanings:

- **`SetCardinality`:** "The size of a set, with two sets having equal cardinality exactly when
  there is a bijection between them."
  `FiniteSetCardinality` and `InfiniteSetCardinality` specialize this parent.

- **`FiniteSetCardinality`:** Its existing definition remains "The number of distinct elements
  in a finite set, independent of their order or repeated listing."
  Its former `partOf SetTheory` placement is replaced by specialization of `SetCardinality`.

- **`InfiniteSetCardinality`:** "The cardinal size of an infinite set and comparisons of such
  sizes through injections and bijections, including equal and unequal infinite cardinalities."

- **`EmptySetCardinality`:** "The zero cardinality of a set containing no elements."
  It specializes `FiniteSetCardinality`, retaining the empty set within finite cardinality.

- **`SetCountability`:** "The classification of sets by whether their elements admit an injection
  into the natural numbers, with countable sets comprising finite and countably infinite sets."
  This is a sibling constituent of `SetCardinality` under `SetProperties`, rather than a
  specialization restricted to infinite cardinality.

The two additions from the completeness check have these definitions:

- **`PowerSet`:** "The set of all subsets of a given set, including the empty set and the given
  set itself."

- **`SetEquality`:** "The relationship in which two sets have exactly the same elements,
  equivalently each is a subset of the other."

These definitions follow
[ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries). Organizers
and their constituents use
[ONT-S1](../structure.md#ont-s1--partof-organizes-constituents); cardinality narrowings, equality
under inclusive inclusion, and complement under difference use
[ONT-S2](../structure.md#ont-s2--specializes-preserves-the-broader-meaning). The resulting paths
retain composition before specialization
([ONT-S4](../structure.md#ont-s4--composition-may-lead-into-specialization)) and uniform child
roles at each parent ([ONT-S5](../structure.md#ont-s5--review-the-entire-affected-structure)).

##### Evidence and counterexamples

- `SetUnion`, `SetIntersection`, `SetDifference`, `SetComplement`, `CartesianProduct`, and
  `PowerSet` concern result sets. Membership, inclusion, disjointness, and equality concern
  relationships. Forming `A x B` produces ordered tuples; it does not multiply the elements as
  numbers. A complement requires the specified universe: for `U = {1, 2, 3}` and `A = {1}`,
  the complement is `{2, 3}`.

- `EmptySetCardinality` applies to the size of the empty set, which is zero. The set containing
  the empty set, `{empty set}`, has one element and is not empty.

- `{a, b}` and `{1, 2}` have equal cardinality when `a` and `b` are distinct objects different
  from `1` and `2`; they are not equal sets. Equal size does not establish `SetEquality`.

- `{1}` is a subset of `{1, 2}`, but the sets are unequal. `SetEquality` requires inclusion in
  both directions. Similarly, `1` being an element of `{1, 2}` differs from `{1}` being a
  subset of that set.

- `PowerSet` includes every subset: the power set of `{a}` is `{empty set, {a}}`, and the power
  set of the empty set is `{empty set}`. It is not the original input set in either case.

- Finite sets, including the empty set, are countable under the adopted definition; the natural
  numbers are countably infinite, while the real numbers are uncountable. Infinite sets can
  have equal cardinality without being equal sets, as with the natural numbers and integers.
  Infinite cardinality is not a single undifferentiated size.

The empty-set distinction and cardinality/countability boundaries were checked against
[Hammack, *Book of Proof*, chapters 1 and 14](https://richardhammack.github.io/BookOfProof/).
The operation-versus-relation distinction, subset/equality tests, and power-set cases were
checked against
[Levin, *Discrete Mathematics: An Open Introduction*, section 5.1](https://discrete.openmathbooks.org/dmoi4/sec_structures-sets.html)
and Hammack's chapter 8 on proofs involving sets.

##### Eligibility, adoption, and completeness boundary

`SetTheory` remains organizational. The three new organizers have constituent children and are
ineligible for direct labeling under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
The existing eight direct-child labels remain eligible after reparenting. `SetCardinality`,
`FiniteSetCardinality`, `SetInclusion`, and `SetDifference` are eligible despite their
specialization children; `SetCountability`, `PowerSet`, and the new specialization leaves are
also eligible.

Existing identifiers, definitions, comments, and progression relations are unchanged. Existing
direct labels retain their meanings, while structural ancestry now includes the appropriate
organizer. `FiniteSetCardinality` additionally supports the broader `SetCardinality` claim;
`EmptySetCardinality` supports both. Adopters should review derived ancestor claims and model
representations against these changed paths using
[the annotation and model guidance](../annotations-and-models.md#interpreting-annotations-across-ontology-versions).

The bounded completeness check covers basic result-set constructions, complement's universe,
ordered products, element-versus-subset relations, equality versus one-way inclusion, empty,
finite and infinite cardinality, and countability. `PowerSet` and `SetEquality` close the two
essential gaps identified within that scope; no other essential gap was identified within this
boundary. A dedicated symmetric-difference descriptor is an optional follow-up: its construction
is expressible with set differences and union. Indexed
families and general arbitrary-union/intersection theory, partitions and equivalence classes,
and axiomatic set theory are outside this minimal fundamentals batch. This is not a claim of
complete coverage of set theory.

- **Structure at Review:** 8 direct `partOf` children (`CartesianProduct`, `FiniteSetCardinality`,
  `SetDifference`, `SetDisjointness`, `SetInclusion`, `SetIntersection`, `SetMembership`,
  `SetUnion`)

- **Rule IDs:** `ONT-S1`, `ONT-S3`

**Former finding:** `SetTheory` is the only multi-node root without mid-level branch organizers,
mixing binary set operations (`SetUnion`, `SetIntersection`, `SetDifference`, `CartesianProduct`),
set relations (`SetMembership`, `SetInclusion`, `SetDisjointness`), and a cardinality invariant
(`FiniteSetCardinality`) in one flat list.

**Original Suggestion:** Separate set-forming operations (e.g., proposed `SetOperations`) from set
relations/predicates and cardinality concepts.

### 3.2 Single-Child `partOf` Organizers (`ONT-E7`, `ONT-S1`, `ONT-D6`)

At the original review, every node below had exactly **one** `hasPart` child, making the parent
**ineligible for content labeling under `ONT-E7`** while providing no sibling contrast (`ONT-S3`).
The percentage family is now resolved with three constituents, as recorded below. The other
four organizers remain single-child findings.

#### `PercentageArithmetic`

**Resolved — 2026-10-24:** Added `PercentageApplication` and `PercentageRateDetermination` as
`partOf` siblings of the unchanged `PercentageEquivalence`. `PercentageArithmetic` remains
`partOf RationalArithmetic`. These two additions bring the ontology to 906 `Area` individuals
across 15 root domains, following the earlier 904-Area substitution stage; original-review and
earlier implementation-stage totals remain historical.

- **`PercentageApplication`:** "Using a specified percentage rate to determine the corresponding
  amount from a reference quantity, or recover the reference quantity from a known amount when
  the rate is nonzero."
  The rate is supplied: finding 12 as 15% of 80, or recovering 80 when 12 is 15% of it, exercises
  the two directions of application. A zero rate permits a forward amount calculation but does
  not determine a unique reference quantity from a zero amount.

- **`PercentageRateDetermination`:** "Determining the unknown percentage rate represented by a
  quantity relative to a specified nonzero reference quantity of the same kind."
  The rate is unknown: expressing 12 relative to 80 as 15%, or 120 relative to 80 as 150%, fits
  this concept. The reference need not contain the compared amount; rates above 100% are
  included. A zero reference does not define the ratio.

The new boundaries follow
[ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries).
`PercentageEquivalence` continues to cover equal percentage, fraction, and decimal forms. The
three siblings are constituent aspects of percentage arithmetic under
[ONT-S1](../structure.md#ont-s1--partof-organizes-constituents), with uniform child roles under
[ONT-S5](../structure.md#ont-s5--review-the-entire-affected-structure).

Percentage change and percentage-point difference receive no additional descriptors. A relative
change from 80 to 100 can combine `Difference` for the change of 20 with
`PercentageRateDetermination` relative to 80, giving 25%. Applying a known increase or decrease
can combine `PercentageApplication` with `Sum` or `Difference`. Comparing rates of 15% and 20%
uses `Difference` to obtain five percentage points. These compositions reuse existing concepts
under [ONT-D1](../descriptors.md#ont-d1--define-reusable-concepts); descriptors apply when their
knowledge or procedure is evidenced, rather than being automatic labels for every percentage
word problem.

`PercentageArithmetic` remains an ineligible organizer, and all three constituents are eligible
for direct labeling under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
Existing definitions, comments, parent links, and progression relations are unchanged. Existing
`PercentageEquivalence` labels retain their meaning and eligibility; the two new labels express
knowledge that equivalence alone did not identify. Adoption follows
[the annotation and model guidance](../annotations-and-models.md#interpreting-annotations-across-ontology-versions).
The [earlier coverage audit](core-ccss-coverage-audit.md) uses `PercentageEquivalence` in general
percentage-application compositions; review those uses against the new quantity-role boundaries
and retain equivalence claims where representation conversion is evidenced.

- **Sole `hasPart` Child at Review:** `PercentageEquivalence`

- **Rule IDs:** `ONT-E7`, `ONT-S1`, `ONT-D6`

**Former finding:** Because `PercentageEquivalence partOf PercentageArithmetic` is the only child,
`PercentageArithmetic` is ineligible under `ONT-E7`, and no eligible descriptor exists for
calculating percentages of quantities, percentage increase/decrease, or finding rate/base (only
converting between percent, fraction, and decimal representations).

**Original Suggestion:** Add sibling descriptors for percentage calculations/applications, or
convert `PercentageEquivalence` to `specializes` if appropriate, or flatten until siblings are
authored.

#### `DecimalStrategies`

- **Sole `hasPart` Child:** `DecimalDivisorShift`

- **Rule IDs:** `ONT-E7`, `ONT-S1`, `ONT-S3`

`DecimalDivisorShift partOf DecimalStrategies` is the sole child of `DecimalStrategies`, whereas
`DecimalPointAlignment` and `DecimalRounding` sit as `partOf` siblings of `DecimalStrategies` under
`DecimalArithmetic`, and `DecimalPadding` specializes `DecimalEquivalence`.

**Suggestion:** Either group decimal procedural techniques (`DecimalPointAlignment`,
`DecimalDivisorShift`, place-value shifting) together under `DecimalStrategies` or make
`DecimalStrategies` an eligible concept specialized by concrete decimal strategies (`ONT-S2`,
`ONT-E7`).

#### `OneDimensionalObjects`

- **Sole `hasPart` Child:** `LineSegment`

- **Rule IDs:** `ONT-E7`, `ONT-S1`, `ONT-S3`

`LineSegment partOf OneDimensionalObjects` is the only child because `LineConcept`, `RayConcept`,
`ArchConcept`, and `ParametricCurve` are placed under `GeometricConcepts`.

**Suggestion:** Reconcile the boundary between `GeometricConcepts` and `GeometricObjects` so 1D
geometric figures (`LineConcept`, `RayConcept`, `LineSegment`, `ArchConcept`, `ParametricCurve`) are
not split across two branches leaving a single-child organizer.

#### `AlgebraicStructures`

- **Sole `hasPart` Child:** `OperationClosure`

- **Rule IDs:** `ONT-E7`, `ONT-S1`, `ONT-D6`

`OperationClosure partOf AlgebraicStructures` leaves `AlgebraicStructures` ineligible with only one
property leaf, while `AssociativeLaw`, `CommutativeLaw`, and `DistributiveLaw` sit in
`Arithmetic > ArithmeticLaws`.

**Suggestion:** Either expand `AlgebraicStructures` with structural properties (identity, inverse,
associativity/commutativity in algebraic structures) or fold `OperationClosure` into a broader
laws/structures family.

#### `LinearSystems`

- **Sole `hasPart` Child:** `MatrixSystemRepresentation`

- **Rule IDs:** `ONT-E7`, `ONT-S1`, `ONT-D6`

`MatrixSystemRepresentation partOf LinearSystems` is the only child under
`LinearAlgebra > LinearSystems`, leaving row-reduction/echelon methods and linear-system solution
structure unrepresented under `LinearSystems` (while `SystemRewriting` sits in `Algebra`).

**Suggestion:** Populate `LinearSystems` with sibling descriptors (e.g., row reduction / Gaussian
elimination, homogeneous and particular solution structure) or merge with `MatrixAlgebra` /
`LinearMaps`.

---

## 4. Family-by-Family Sibling Consistency Analysis

### 4.1 `Algebra`

#### 1. `AlgebraicConstraints` (`ConstraintSolving` vs. `ConstraintSystem`):

- `ConstraintSolving` has three `specializes` children covering single equations, single
  inequalities, and systems (`EquationSolving`, `InequalitySolving`, `SystemSolving`).

- Its structural counterpart `ConstraintSystem` covers only systems (`SystemOfEquations`,
  `SystemOfInequalities`), whereas single `Equation` and `Inequality` reside under
  `FormalMathematics > MathematicalStatement` (`Equation specializes MathematicalStatement`,
  `Inequality specializes MathematicalStatement`).

- **Suggestion (`ONT-S3`, `ONT-D3`):** Clarify or cross-link the boundary between syntactic
  statement forms (`Equation`, `Inequality` in `FormalMathematics`) and constraint families
  (`ConstraintSystem` in `AlgebraicConstraints`).

#### 2. `AlgebraicDependence` (`PolynomialDependence` vs. `RationalDependence`):

- `PolynomialDependence` specializes into `AffineDependence` (which specializes into
  `DirectProportionalDependence`) and `QuadraticDependence`, while `RationalDependence` is a
  sibling of `PolynomialDependence`.

- Mathematically, `RationalDependence` ("represented by a quotient of polynomials... with a
  denominator polynomial that is not identically zero") includes polynomials when the denominator
  is a nonzero constant, unless `RationalDependence` explicitly excludes polynomial quotients.

- Furthermore, while `DirectProportionalDependence` ($y = kx$) is modeled under
  `AffineDependence`, inverse proportionality ($y = k/x$) has no counterpart under
  `RationalDependence` or `PowerFunction`.

- **Suggestion (`ONT-D2`, `ONT-S2`, `ONT-S3`):** State in `RationalDependence` whether
  nonconstant denominator polynomials are required (keeping it disjoint from
  `PolynomialDependence`), and consider adding inverse proportional dependence as a specialization
  of `RationalDependence` (and/or `PowerFunction`).

#### 3. `AlgebraicEquivalence` (`specializes` siblings mix broad families, procedures, and single identities):

- Direct `specializes` children of `AlgebraicEquivalence` mix three distinct semantic levels:

  - **Broad domain rewriting families (with `specializes` children):** `LinearRewriting`,
    `QuadraticRewriting`, `ExponentialRewriting`, `SystemRewriting`, `TrigonometricIdentities`.

  - **General polynomial/rational transformation procedures:** `AlgebraicFactorization`,
    `PolynomialDivision`, `PartialFractionDecomposition`.

  - **Individual named theorems, formulas, and recurrences:** `BinomialTheorem`,
    `BinomialCoefficientSymmetry`, `PascalIdentity`, `DeMoivreIdentity`, `FiniteArithmeticSum`,
    `FiniteGeometricSum`, `QuadraticFormula`, `MatrixOperationIdentities`.

- **Quadratic identity split:** `CompletingSquare` and `DifferenceOfSquaresIdentity` specialize
  `QuadraticRewriting` ("Equivalent forms of expressions based on degree-two polynomial patterns
  in designated variables or subexpressions..."), whereas `BinomialSquareIdentities`
  ($(a \pm b)^2 = a^2 \pm 2ab + b^2$) only specializes `BinomialTheorem` (`BinomialSquareIdentities specializes BinomialTheorem`)
  and is missing a `specializes` link to `QuadraticRewriting`.

- **Category mismatch of `QuadraticFormula`:** `QuadraticFormula` ("characterizing all real or
  complex solutions of $ax^2 + bx + c = 0$ with $a$ nonzero") is a root-finding formula for a
  quadratic equation rather than an expression-rewriting equivalence on the same footing as
  `LinearRewriting` or `ExponentialRewriting`.

- **Combinatorial identity placement:** `BinomialCoefficientSymmetry` and `PascalIdentity` are
  identities on `BinomialCoefficient` (which lives in `Combinatorics > CombinatorialEnumeration`),
  sitting as flat top-level siblings of `LinearRewriting` and `SystemRewriting`.

- **Suggestion (`ONT-S2`, `ONT-S3`, `ONT-S5`):**

  - Add proposed `BinomialSquareIdentities` `specializes` `QuadraticRewriting` so all three core
    degree-two polynomial identities (`CompletingSquare`, `DifferenceOfSquaresIdentity`,
    `BinomialSquareIdentities`) are reachable under `QuadraticRewriting`.

  - Group polynomial/rational rewriting (`PolynomialDivision`, `PartialFractionDecomposition`,
    `AlgebraicFactorization`) and summation/binomial identities (`BinomialTheorem`,
    `BinomialCoefficientSymmetry`, `PascalIdentity`, `FiniteArithmeticSum`, `FiniteGeometricSum`)
    under intermediate specialization families, and review whether `QuadraticFormula` belongs
    under `AlgebraicConstraints` / `EquationSolving` or `QuadraticRewriting`.

#### 4. `AlgebraicFunctions` (`FunctionSlope`, `FunctionTypes`, and `NumericFunction`):

- **`FunctionSlope` eligibility (`ONT-S2`, `ONT-E7`):** `AverageRateOfChange partOf FunctionSlope`
  and `InstantaneousRateOfChange partOf FunctionSlope` make `FunctionSlope` ineligible under
  `ONT-E7`. Yet `FunctionSlope` is defined as *"Rates of change of a real-valued function with
  respect to its real input, measured between distinct inputs or at a point where a finite
  limiting rate exists"*—so `AverageRateOfChange` and `InstantaneousRateOfChange` are narrower
  forms (`specializes`) of `FunctionSlope`. Changing these two edges from `partOf` to proposed
  `specializes` restores `FunctionSlope`'s eligibility under `ONT-E7`.

- **`FunctionTypes` category mixing (`ONT-S1`, `ONT-S3`):** The four `partOf` children of
  `FunctionTypes` are `NumericFunction` (input/output value domain), `Sequence` (consecutive
  integer index domain), `PiecewiseFunction` (syntactic rule-branching format), and
  `OneToOneFunction` (injectivity—a mapping property). Injectivity (`OneToOneFunction`) is a
  relational mapping property (parallel to properties in `Analysis > FunctionProperties`), not a
  function family alongside `NumericFunction`.

- **Dual specialization of sequences (`ONT-S5`):** `ArithmeticSequence` and `GeometricSequence`
  specialize both `NumericFunction` and `Sequence`, while `Sequence` and `NumericFunction` sit
  as `partOf` siblings under `FunctionTypes`.

- **Split elementary function families (`ONT-S3`):** `NumericFunction` specializes into
  `AbsoluteValueFunction`, `ComplexExponentialFunction`, `LogarithmicFunction`, `PowerFunction`,
  `TrigonometricFunction`, `ArithmeticSequence`, and `GeometricSequence`, but omits polynomial,
  affine/linear, quadratic, rational, and real exponential functions (which are represented only
  under `AlgebraicDependence`).

- **Suggestion (`ONT-S1`, `ONT-S2`, `ONT-S3`):** Move `OneToOneFunction` out of `FunctionTypes`
  (e.g., directly under `AlgebraicFunctions` next to `FunctionInversion`, or under
  `FunctionProperties`), clarify the relationship between `AlgebraicDependence` and
  `NumericFunction`, and convert `FunctionSlope`'s children to `specializes`.

---

### 4.2 `Analysis`

#### 1. `FunctionProperties` (Mixed `partOf` vs. `specializes` subtrees and `FunctionLimitingBehavior`):

- Five children of `FunctionProperties` (`FunctionOrderProperties`, `FunctionRegularity`,
  `FunctionRepetitionProperties`, `FunctionShapeProperties`, `FunctionValueProperties`) are
  `partOf` organizers, whereas three (`FunctionCriticalPoints`, `FunctionLimitingBehavior`,
  `FunctionSymmetry`) use `specializes`.

- **`FunctionCriticalPoints` level mismatch (`ONT-S1`, `ONT-S3`):** `FunctionCriticalPoints` is a
  specific domain-point feature closely tied to `FunctionExtrema` (in `FunctionOrderProperties`)
  and `FunctionDifferentiability` (in `FunctionRegularity`), yet sits as a top-level sibling of
  the broad property families.

- **`FunctionLimitingBehavior` (`ONT-S2`, `ONT-S3`):** `FunctionEndBehavior` ($x \to \pm\infty$)
  and `FunctionLocalLimitBehavior` ($x \to a$) are genuinely subtypes of limiting behavior,
  whereas `FunctionAsymptotes` ("Straight lines describing a real function's limiting graph...")
  is a geometric line feature derived from either local infinite limits (vertical asymptotes) or
  end behavior (horizontal/oblique asymptotes), not a third disjoint kind of limit behavior.

- **`FunctionRegularity` (`ONT-S3`):** Contains `FunctionContinuity`, `FunctionDifferentiability`,
  `RiemannIntegrability`, and `FunctionRemovableDiscontinuity`. Here
  `FunctionRemovableDiscontinuity` is a specific subtype of *discontinuity* sitting as a peer of
  major regularity classes while jump and infinite discontinuities are absent.

- **`FunctionDomain` vs. `FunctionRange` split (`ONT-S3`):** `FunctionRange` is placed under
  `Analysis > FunctionProperties > FunctionValueProperties`, whereas `FunctionDomain` is placed
  under `Algebra > AlgebraicFunctions`.

#### 2. `FunctionTheorems` (Sequence theorems placed under function theorems):

- `FunctionTheorems` is defined as *"Theorems relating real-function limits, continuity,
  differentiability, values, and extrema under stated hypotheses."*

- However, two of its `partOf` children—`MonotoneSequenceConvergenceTheorem` and
  `MonotoneSequenceDivergenceTheorem`—are theorems about **infinite real sequences**, not real
  functions on intervals.

- **Suggestion (`ONT-S1`, `ONT-D2`):** Move `MonotoneSequenceConvergenceTheorem` and
  `MonotoneSequenceDivergenceTheorem` under `SequenceAndSeriesProperties` (or broaden
  `FunctionTheorems` to `AnalysisTheorems` / add a sequence-theorems sibling).

---

### 4.3 `Arithmetic`

#### 1. `ArithmeticLaws` (`OrderOfOperations` mixed with axiomatic identities):

- `AssociativeLaw`, `CommutativeLaw`, `DistributiveLaw`, `ExponentLaws`, and `RulesOfSigns` are
  mathematical identities/properties governing numerical operations.

- By contrast, `OrderOfOperations` ("The conventions determining how operators bind to
  subexpressions in written mathematical notation, including precedence...") is a **syntactic
  parsing convention** closely aligned with `FormalMathematics > ExpressionStructure` (`GroupingSymbol`,
  `Operator`).

- Also note the overlap between `ExponentLaws` (`ExponentLaws partOf ArithmeticLaws`) and
  `ExponentialRewriting` (`ExponentialRewriting specializes AlgebraicEquivalence`).

#### 2. `ArithmeticOperations` (`Factorial` and `Modulo`):

- **Semantic level mismatch (`ONT-S1`, `ONT-S3`):** `BaseOperations` and `PowerOperations` are
  multi-operation family organizers (`hasPart` parents), whereas their sibling `Factorial`
  (`Factorial partOf ArithmeticOperations`) is a single concrete unary operation leaf.

- **Definition mismatch in `BaseOperations` (`ONT-D2`, `ONT-S3`):** `BaseOperations` is defined
  as performing primary calculations *"through the core actions of addition, subtraction,
  multiplication, and division"*, yet its `partOf` children are `Addition`, `Division`,
  `Multiplication`, `Subtraction`, and `Modulo` (which is omitted from the parent definition and
  overlaps with `EuclideanDivision` in `NumberTheory`).

#### 3. `ArithmeticSpaces` (`IntegerArithmetic` and `RationalArithmetic`):

- **`IntegerStrategies` flat 20-node list (`ONT-S1`, `ONT-S3`):** `IntegerStrategies` contains 20
  direct `partOf` children mixing **4 standard written vertical/long algorithms**
  (`AdditionStandardAlgorithm`, `SubtractionStandardAlgorithm`, `MultiplicationStandardAlgorithm`,
  `DivisionStandardAlgorithm`) with **16 flexible mental/decomposition strategies** across all
  four operations. Grouping by operation or separating standard algorithms from mental/partitioning
  strategies would improve sibling coherence.

- **Identifier typo in `DecimalArithmetic` (`ONT-D5`):** `DecimalPrecission`
  (`DecimalPrecission partOf DecimalArithmetic`) is misspelled with a double `s` instead of
  `DecimalPrecision`.

- **Inconsistent relation choice for equivalence techniques (`ONT-S1`, `ONT-S2`):** Under
  `DecimalArithmetic`, `DecimalPadding` is modeled as `DecimalPadding specializes DecimalEquivalence`,
  rendering `DecimalEquivalence` eligible under `ONT-E7`. Under `FractionArithmetic`,
  `FractionSimplification`, `LowestCommonDenominator`, and `LowestCommonNumerator` are placed as
  `partOf` children of `FractionStrategies` rather than under `FractionEquivalence`, and all four
  comparison methods (`FractionCommonDenominatorComparison`, `FractionCommonNumeratorComparison`,
  `FractionReferenceComparison`, `FractionReferenceDistanceComparison`—where the fourth is a
  narrower form of the third) are mixed with simplification/LCD in `FractionStrategies` while
  actual fraction addition/multiplication strategies are absent.

---

### 4.4 `Calculus`

#### 1. `CalculusApproximation` (Methods mixed with error bounds, and `LinearApproximation` vs. `TaylorPolynomialApproximation`):

- The 9 `partOf` children of `CalculusApproximation` mix **approximation procedures/models**
  (`LinearApproximation`, `TaylorPolynomialApproximation`, `NewtonMethod`, `EulerMethod`,
  `NumericalDifferentiation`, `NumericalIntegration`) with **error-bound theorems**
  (`AlternatingSeriesRemainderBound`, `QuadratureErrorBounds`, `TaylorRemainderBound`).

- Furthermore, `LinearApproximation` ($f(a) + f'(a)(x-a)$) is the first-order special case of
  `TaylorPolynomialApproximation` ($\sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x-a)^k$), yet sits as an
  unlinked `partOf` sibling (`ONT-S2`).

#### 2. `CurveCalculus` and `IntegralApplications` (Asymmetric grouping and missing `specializes` link):

- **Asymmetric intermediate organizer (`ONT-S1`, `ONT-S3`):** Under `CurveCalculus`, scalar
  parametric and polar curve descriptors (`ArcLengthIntegration`, `ParametricAreaIntegration`,
  `ParametricDifferentiation`, `PolarAreaIntegration`) sit directly as `partOf` children of
  `CurveCalculus`, whereas vector curve concepts are grouped under an intermediate `partOf`
  organizer `VectorCurveCalculus` (`CurveMotion`, `VectorCurveDifferentiation`,
  `VectorCurveIntegration`).

- **Asymmetric `AreaIntegration` specialization (`ONT-S2`, `ONT-S5`):** `ParametricAreaIntegration`
  has both `ParametricAreaIntegration partOf CurveCalculus` and
  `ParametricAreaIntegration specializes AreaIntegration`. Its immediate sibling
  `PolarAreaIntegration` ("Expressing area swept by a polar curve as one half the integral of
  squared radius with respect to angle...") has `PolarAreaIntegration partOf CurveCalculus` but
  is missing proposed `PolarAreaIntegration` `specializes` `AreaIntegration`.

- **Volume of revolution split in `IntegralApplications` (`ONT-S2`, `ONT-S3`):** Under
  `IntegralApplications`, `DiskWasherIntegration` specializes `CrossSectionIntegration`, while
  `CylindricalShellIntegration` sits one level higher as a `partOf` sibling of
  `CrossSectionIntegration` and `AreaIntegration`.

#### 3. `DifferentialCalculus > DifferentiationRules` (Asymmetric `partOf` vs. `specializes` structure):

- `DifferentiationRules` has 5 leaf `partOf` children for structural combination rules
  (`ChainRule`, `DerivativeLinearity`, `InverseFunctionDerivativeRule`, `ProductRule`,
  `QuotientRule`) alongside 1 `specializes`-parent `ElementaryDerivativeIdentities` (which groups
  6 function-family derivative identities via `specializes`).

- Because the 5 structural rules use `partOf`, `DifferentiationRules` is ineligible under
  `ONT-E7`, whereas `ElementaryDerivativeIdentities` is eligible. Grouping the 5 structural
  combination rules under an eligible `specializes`-parent (or converting `DifferentiationRules`
  children to `specializes`) would make both halves symmetric (`ONT-S2`, `ONT-E7`).

---

### 4.5 `Combinatorics`

#### 1. `CombinatorialEnumeration` (Asymmetric Ordered vs. Unordered Selection and role mixing):

- **Ordered vs. Unordered asymmetry (`ONT-S2`, `ONT-S3`):** Ordered selection is organized as an
  eligible specialization hierarchy under `OrderedSelectionCounting`
  (`OrderedSelectionWithRepetition` and `OrderedSelectionWithoutRepetition`, with
  `PermutationCounting specializes OrderedSelectionWithoutRepetition`). By contrast, unordered
  selection has no `UnorderedSelectionCounting` parent: unordered selection without repetition is
  represented only by the symbolic quantity `BinomialCoefficient`, and unordered selection with
  repetition (multiset counting) is represented by the technique name `StarsAndBars`.

- **`CircularPermutationCounting` placement (`ONT-S2`, `ONT-S3`):**
  `CircularPermutationCounting` sits as a `partOf` sibling of `OrderedSelectionCounting` rather
  than specializing `OrderedSelectionCounting` (or `PermutationCounting`).

- **Suggestion:** Introduce an unordered-selection / combination-counting parent (or align
  `BinomialCoefficient`, `MultinomialCoefficient`, and `StarsAndBars` so symbolic coefficients
  and counting problem types are at a consistent semantic level).

---

### 4.6 `FormalMathematics`

#### 1. `ExpressionStructure` (`RootIndex` vs. `Operand`, piecewise components, and `Variable` axes):

- **`RootIndex` vs. `Operand` (`ONT-S2`, `ONT-S3`):** In power and radical expressions,
  `PowerBase`, `Exponent`, and `Radicand` all specialize `Operand` (`PowerBase specializes Operand`,
  `Exponent specializes Operand`, `Radicand specializes Operand`). However, `RootIndex` ("The
  role of the index specifying which root is requested by radical notation...") is placed as a
  `partOf` sibling of `Operand` under `ExpressionStructure` (`RootIndex partOf ExpressionStructure`)
  instead of proposed `RootIndex` `specializes` `Operand`.

- **`BranchCondition` and `ConditionalBranch` level (`ONT-S1`, `ONT-S3`):** `BranchCondition` and
  `ConditionalBranch` are specific syntactic components of a `PiecewiseExpression`
  (`PiecewiseExpression specializes MathematicalExpression`), yet sit at the top level of
  `ExpressionStructure` alongside universal syntactic roles (`Variable`, `Operator`, `Operand`,
  `Term`, `Factor`, `Constant`).

- **`Variable` orthogonal specialization axes (`ONT-S2`, `ONT-S3`):** The 8 `specializes`
  children of `Variable` mix three independent dimensions in one flat list:

  - *Syntactic binding:* `BoundVariable`, `FreeVariable`

  - *Functional direction:* `IndependentVariable`, `DependentVariable`

  - *Contextual/epistemic role:* `UnknownVariable`, `Parameter`, `VaryingVariable`,
    `GeneralizedVariable`

---

### 4.7 `Geometry`

#### 1. `GeometricCalculations` (`MidpointCalculation` and missing `specializes` links):

- **Category mismatch (`ONT-S1`, `ONT-S3`):** Seven of the eight `partOf` children of
  `GeometricCalculations` (`AngleCalculation`, `AreaCalculation`, `DistanceCalculation`,
  `LengthCalculation`, `PerimeterCalculation`, `SurfaceAreaCalculation`, `VolumeCalculation`)
  compute a **scalar geometric measure**. The eighth child, `MidpointCalculation` ("finding the
  exact center point of a line segment on the coordinate plane by averaging the coordinates of
  its endpoints"), computes a **coordinate point** in the Cartesian plane and belongs with
  analytic coordinate concepts in `GeometricVisualization`.

- **Missing `specializes` links (`ONT-S2`, `ONT-S5`):**

  - `CircumferenceCalculation specializes PerimeterCalculation`, yet `PerimeterCalculation` and
    `DistanceCalculation` have no `specializes` link to `LengthCalculation`, and
    `SurfaceAreaCalculation` has no link to `AreaCalculation`.

  - `CoordinateDistance` (`CoordinateDistance partOf GeometricVisualization`) computes straight-line
    distance from Cartesian coordinates but is missing proposed `CoordinateDistance` `specializes`
    `DistanceCalculation`.

#### 2. `GeometricConcepts` vs. `GeometricObjects` (`NormalVector`, `ArchConcept`, and `SolidOfRevolution`):

- **`NormalVector` vs. `VectorConcept` (`ONT-S2`):** Under `GeometricConcepts`, `NormalVector`
  ("The role of a nonzero vector perpendicular to every direction of a specified line or plane in
  Euclidean space") sits as a `partOf` sibling of `VectorConcept` instead of proposed
  `NormalVector` `specializes` `VectorConcept`.

- **Naming accuracy (`ONT-D5`):** `ArchConcept` ("A continuous portion of the circumference of a
  circle or any other curved line") uses the spelling `Arch` instead of the standard mathematical
  term `Arc` (`ArcConcept`).

- **`ThreeDimensionalObjects` (`SolidOfRevolution` vs. `Cone`, `Cylinder`, `Sphere`, `ONT-S2`, `ONT-S3`):**
  Under `ThreeDimensionalObjects`, `Polyhedron` specializes into `Prism` (`RectangularPrism` ->
  `Cube`) and `Pyramid`, whereas `SolidOfRevolution` sits as a leaf `partOf` sibling alongside
  `Cone`, `Cylinder`, and `Sphere`—even though right circular cones, circular cylinders, and
  spheres are solids of revolution.

#### 3. `Polygon` (`Triangle` and `Quadrilateral` specialization hierarchies, `ONT-S2`, `ONT-S3`):

- **`Triangle` (`specializes` children flatten two orthogonal axes and omit mathematical inclusion):**

  - Flattens **angle classification** (`AcuteTriangle`, `RightTriangle`, `ObtuseTriangle`) and
    **side-length classification** (`EquilateralTriangle`, `IsoscelesTriangle`, `ScaleneTriangle`)
    into a single 6-sibling list.

  - By the ontology's own inclusive definitions—`IsoscelesTriangle` ("at least two sides of equal
    length") and `AcuteTriangle` ("all three interior angles are acute angles")—every
    `EquilateralTriangle` ("all three sides are of equal length and all three angles are 60
    degrees") is both an `IsoscelesTriangle` and an `AcuteTriangle`. Yet `EquilateralTriangle`
    only has `EquilateralTriangle specializes Triangle`, missing proposed
    `EquilateralTriangle` `specializes` `IsoscelesTriangle` and proposed
    `EquilateralTriangle` `specializes` `AcuteTriangle`.

- **`Quadrilateral` (missing `Square` -> `Rhombus` and inclusive `Trapezoid` tension):**

  - `Square` ("four right angles and four equal sides") has `Square specializes Rectangle`, but
    is missing proposed `Square` `specializes` `Rhombus` ("A parallelogram with four equal-length
    sides").

  - `Trapezoid` is defined inclusively as *"A quadrilateral with at least one pair of parallel
    sides"*. Under that definition, `Parallelogram` ("two pairs of parallel sides") satisfies
    `Trapezoid`, yet sits as a disjoint sibling under `Quadrilateral` (`ONT-D2`, `ONT-S2`).

#### 4. `GeometricRelations` (Level mixing and `TrigonometricRelations` eligibility):

- **Top-level children mix 8 family organizers with 2 individual theorems (`ONT-S1`, `ONT-S3`):**
  `CavalieriPrinciple` and `PerpendicularBisectorTheorem` sit directly under `GeometricRelations`
  alongside 8 sub-branch organizers (`AngleRelations`, `CircleRelations`, `ConicRelations`,
  `PositionalRelations`, `QuadrilateralRelations`, `ShapeEquivalenceRelations`,
  `TriangleRelations`, `TrigonometricRelations`).

- **`AngleRelations` (`ONT-S3`):** Mixes 4 angle-pair concepts (`AdjacentAngles`,
  `ComplementaryAngles`, `SupplementaryAngles`, `VerticalAngles`) with 1 theorem
  (`ParallelTransversalAngleTheorem`).

- **`CircleRelations` (`ONT-S3`):** Mixes a mathematical constant (`Pi`) with 7 geometric
  relations and theorems.

- **`TrigonometricRelations` eligibility gap for right-triangle ratios (`ONT-E7`, `ONT-D2`):**
  `TrigonometricRelations` explicitly includes *"right-triangle ratios and circular trigonometry"*
  in its definition, but is **ineligible for content labeling under `ONT-E7`** because it has
  `hasPart` children (`TriangleTrigonometricRelations`, `TrigonometricFunction`,
  `TrigonometricIdentities`). Meanwhile, `Cosine`, `Sine`, and `Tangent` under
  `TrigonometricFunction` are defined solely via the **unit circle**, and
  `TriangleTrigonometricRelations` contains only `LawOfCosines`, `LawOfSines`, and
  `TriangleSineAreaFormula`—leaving no eligible descriptor for elementary right-triangle
  trigonometric ratios (opposite/adjacent/hypotenuse).

#### 5. `GeometricVisualization` (Ineligible `CartesianPlane` and 13-child category mix):

- Because `CoordinateAxes`, `Origin`, and `Quadrants` are `partOf` children of `CartesianPlane`,
  `CartesianPlane` is **ineligible under `ONT-E7`**, whereas its sibling coordinate systems
  (`CartesianSpace`, `ComplexPlane`, `PolarCoordinateRepresentation`) are eligible leaves.

- The 13 `partOf` children of `GeometricVisualization` mix coordinate reference systems,
  plotting actions (`PointPlotting`, `LineGraphing`, `ShapePlotting`), analytic line/plane
  representations (`AffineParametrization`, `NormalVectorEquation`), and metric/geometric
  concepts (`CoordinateDistance`, `SlopeConcept`, `ComplexArithmeticGeometry`).

---

### 4.8 `GraphTheory`

#### 1. `GraphFoundations` (`GraphCycle` vs. `GraphWalk` and single-child `GraphStructure`):

- **Missing `specializes` link (`ONT-S2`, `ONT-S3`):** `GraphWalk` has `GraphPath specializes GraphWalk`
  ("A graph walk with no repeated vertices"). Meanwhile, `GraphCycle` is defined as *"A
  positive-length closed **graph walk** with distinct edges and no repeated vertices except its
  common first and last vertex..."*, yet sits as a `partOf` sibling of `GraphWalk`
  (`GraphCycle partOf GraphFoundations`) instead of proposed `GraphCycle` `specializes` `GraphWalk`.

- **Under-populated `GraphStructure` (`ONT-S3`):** `GraphStructure` has only one specialization
  (`CompleteGraph specializes GraphStructure`), with no sibling graph families (such as trees,
  bipartite graphs, or directed/undirected graph classes).

---

### 4.9 `IntuitiveMathematics`

#### 1. `CollectionSense > DivisionOfCollections` (Definition contradiction, flattened axes, and missing `specializes` links):

- **Parent definition contradicts `ImperfectDivisibility` and `UnevenDivisibility` (`ONT-S2`, `ONT-D2`):**
  `DivisionOfCollections` states: *"The source cardinality equals the number of subcollections
  multiplied by their shared cardinality, so either factor can be determined through division."*
  This requires remainder zero. However, two of its `specializes` children—`ImperfectDivisibility`
  and `UnevenDivisibility`—explicitly have a **nonzero remainder**, contradicting the parent's
  definition.

- **Missing `specializes` links for divisor-2 cases (`ONT-S2`, `ONT-S3`):**
  `EvenDivisibility` (divisor = 2, remainder = 0) is a narrower case of `PerfectDivisibility`
  (any divisor, remainder = 0), and `UnevenDivisibility` (divisor = 2, remainder = 1) is a
  narrower case of `ImperfectDivisibility` (any divisor, nonzero remainder), yet all four sit as
  flat siblings directly under `DivisionOfCollections`.

- **Orthogonal classification axes flattened (`ONT-S3`):** `PartitiveDivision` and
  `QuotativeDivision` classify division by **given vs. unknown role**, whereas
  `PerfectDivisibility` and `ImperfectDivisibility` classify division by **remainder outcome**.

- **Missing link to `PartitionOfCollections` (`ONT-S2`):** Under `CollectionSense`,
  `DivisionOfCollections` ("splitting a single bounded collection into two or more distinct
  non-overlapping subcollections of equal cardinality") is by definition a narrower form of its
  sibling `PartitionOfCollections` ("splitting a single bounded collection into two or more
  distinct non-overlapping subcollections"), suggesting proposed
  `DivisionOfCollections` `specializes` `PartitionOfCollections`.

#### 2. `NumberSense` (`FoundationalOperations`, `Numeration`, and `NumericComparison`):

- **`FoundationalOperations` (`ONT-S3`):** Mixes four concrete additive/subtractive actions
  (`Increment`, `Decrement`, `Sum`, `Difference`) with `Iteration` ("Repeatedly applying the
  exact same operation, evaluation or rule an exact number of times"), which is a general
  repetition meta-process and overlaps with `IteratedOperation` in `Arithmetic > ArithmeticEvaluation`.

- **`Numeration` (`ONT-S2`, `ONT-S3`):** `NumerationWithIntegers`, `NumerationWithFractions`, and
  `NumerationWithDecimals` specialize `Numeration` ("Counting, ordering, and grouping numbers and
  relating them to numerical representations") by number domain, whereas `NumerationWithIntervals`
  ("Representing sets of numbers by their lower and upper bounds...") is about interval set
  representation rather than counting and ordering numbers.

- **`NumericComparison` (`ONT-S1`, `ONT-S2`, `ONT-E7`):**

  - `NumericIdentity` ("Understanding that a number retains its value across different
    representations") is value conservation across representations, not comparing two values for
    greater than, less than, or equal (`NumericComparison`).

  - Because `NumericEquality`, `NumericInequality`, and `NumericOrder` are attached via `partOf`,
    `NumericComparison` is **ineligible for content labeling under `ONT-E7`**.

#### 3. `SpatialSense` (`Measurement` and `ShapePartWholeRelations`):

- **`MeasuringObjects` vs. `MeasuringTime` (`ONT-S3`):** `MeasuringLength`, `MeasuringVolumes`
  (note plural `MeasuringVolumes` vs. singular `MeasuringLength` and `MeasuringWeight`, `ONT-D5`),
  and `MeasuringWeight` specialize `MeasuringObjects`, while `MeasuringTime` sits one tier higher
  as a `partOf` sibling of `MeasuringObjects` and `MeasuringWithUnits`.

- **`MeasuringWithUnits` missing `specializes` links (`ONT-S2`, `ONT-S3`):** `UnitConversion`,
  `UnitFactorScaling` ("converting measurements within a system using specific, non-base-10
  numerical conversion factors"), and `UnitMagnitudeScaling` ("Converting a measurement between
  metric units related by powers of ten...") sit as flat `partOf` siblings under
  `MeasuringWithUnits`, even though `UnitFactorScaling` and `UnitMagnitudeScaling` are direct
  narrowings (proposed `specializes`) of `UnitConversion`.

- **`ShapePartWholeRelations` (`ONT-S1`, `ONT-S3`):** Pairs `ShapeDecomposition` and
  `ShapeSynthesis` (part-whole composition/decomposition operations) with `ShapeReflection`
  ("Understanding reflective symmetry as a defining property of a shape's form..."), which is an
  intrinsic symmetry property of a shape (`ShapeIdentity` / `SymmetryRelation`).

---

### 4.10 `LinearAlgebra`

#### 1. `VectorAlgebra` and `MatrixAlgebra`:

- **`VectorAlgebra` flat sibling mix (`ONT-S1`, `ONT-S3`):** Mixes abstract vector-space
  concepts (`Basis`, `LinearCombination`, `LinearIndependence`, `LinearSpan`), Euclidean metric
  properties (`VectorDirection`, `VectorMagnitude`, `VectorOrthogonality`, `OrthonormalBasis`),
  coordinate representation (`VectorComponents`), and an ineligible operation organizer
  (`VectorArithmetic`) in a single 9-child `partOf` list.

- **`DeterminantScaling` placement (`ONT-S3`):** `DeterminantScaling` sits under `LinearMaps`
  while `MatrixDeterminant` sits under `MatrixAlgebra` with no structural link between them.

---

### 4.11 `Logic`

#### 1. `PropositionalLogic` (`LogicalEquivalence` vs. truth-functional connectives):

- Four of the five `partOf` children of `PropositionalLogic` (`LogicalConjunction`,
  `LogicalDisjunction`, `LogicalImplication`, `LogicalNegation`) are **truth-functional
  connectives / compound statement forms**, whereas the fifth (`LogicalEquivalence`, with
  `ContrapositionEquivalence` and `DeMorganLaws`) is a **meta-logical equivalence relation and
  law family** between statements (`ONT-S3`).

---

### 4.12 `NumberTheory`

#### 1. `IntegerDivisibility` (`OddAndEvenNumbers` vs. `IntegerParity` and level mixing):

- `OddAndEvenNumbers` (`OddAndEvenNumbers specializes DivisibilityRules`) is defined as *"Testing
  an integer's divisibility by two directly from its numerical representation without performing
  division"*, whereas its sibling `IntegerParity` (`IntegerParity partOf IntegerDivisibility`) is
  defined as *"The even or odd character of integers, represented by the forms $2k$ and $2k + 1$..."*.

- **Suggestion (`ONT-D5`, `ONT-S3`):** Rename `OddAndEvenNumbers` to reflect that it is a
  **divisibility-by-two rule/test** (rather than the number class of odd and even integers), and
  separate divisibility concepts (`FactorsAndMultiples`, `GreatestCommonDivisor`,
  `LeastCommonMultiple`, `Coprimality`, `IntegerParity`) from division/GCD algorithms and lemmas
  (`EuclideanDivision`, `EuclideanAlgorithm`, `BezoutIdentity`, `CoprimeDivisibilityLemma`).

#### 2. `NumberSystems` (Complex-number components mixed with general number-system relations):

- Five of the seven `partOf` children of `NumberSystems` (`ComplexArgument`,
  `ComplexConjugation`, `ComplexModulus`, `ComplexNumberStructure`, `ComplexRootStructure`) are
  **complex-number specific**, sitting as flat siblings alongside two general cross-system
  descriptors (`NumberOperationResultTypes`, `NumberSystemRelations`).

- **Suggestion (`ONT-S1`, `ONT-S3`):** Group the five complex-number descriptors under a
  complex-number parent (or make `ComplexArgument`, `ComplexConjugation`, `ComplexModulus`, and
  `ComplexRootStructure` `partOf` `ComplexNumberStructure`) so `NumberSystems` has siblings at
  the same level of generality.

#### 3. `NumberTheoreticFunctions` (Missing `specializes` links to `MultiplicativeArithmeticFunction`):

- `DivisorCount`, `DivisorSum`, `EulersTotient`, and `MultiplicativeArithmeticFunction` sit as
  four flat `partOf` siblings under `NumberTheoreticFunctions`.

- Mathematically, `DivisorCount` ($d(n)$), `DivisorSum` ($\sigma(n)$), and `EulersTotient`
  ($\varphi(n)$) are concrete examples (`specializes`) of `MultiplicativeArithmeticFunction`
  ($f(mn) = f(m)f(n)$ for $\gcd(m,n)=1$).

- **Suggestion (`ONT-S2`, `ONT-E7`):** Model `DivisorCount`, `DivisorSum`, and `EulersTotient` as
  proposed `specializes` children of `MultiplicativeArithmeticFunction` (keeping
  `MultiplicativeArithmeticFunction` eligible under `ONT-E7`).

---

### 4.13 `Probability`

#### 1. `ProbabilityFoundations`, `ProbabilityRules`, and `RandomVariableTheory`:

- **`RandomVariable` placement (`ONT-S1`, `ONT-S3`):** `RandomVariable` sits in
  `ProbabilityFoundations` (`RandomVariable partOf ProbabilityFoundations`) rather than in the
  sibling branch `RandomVariableTheory`.

- **`ClassicalProbability` inside `ProbabilityRules` (`ONT-S2`, `ONT-S3`):** Six of the seven
  children of `ProbabilityRules` (`AdditionProbabilityRule`, `ComplementProbability`,
  `ConditionalProbability`, `MultiplicationProbabilityRule`, `TotalProbabilityTheorem`,
  `BayesTheorem`) are general probability calculus identities/theorems valid in any probability
  model, whereas `ClassicalProbability` is a specific uniform finite-sample-space **model**
  (logically a specialization of `ProbabilityModel` in `ProbabilityFoundations`).

- **`BernoulliDistribution` vs. `BinomialDistribution` (`ONT-S2`):** Under
  `DiscreteProbabilityDistribution`, `BernoulliDistribution` (single trial) sits as a flat
  sibling of `BinomialDistribution` ($n$ trials) rather than proposed
  `BernoulliDistribution` `specializes` `BinomialDistribution`.

- **`RandomVariableMoments` (`ONT-S3`):** Mixes four moment/summary quantities (`ExpectedValue`,
  `RandomVariableVariance`, `RandomVariableStandardDeviation`, `Covariance`) with two moment
  identities (`ExpectationLinearity`, `VarianceOfSum`).

#### 2. `StochasticProcesses` (Markov-chain concepts flattened directly under `StochasticProcesses`):

- All 10 `partOf` children of `StochasticProcesses` pertain exclusively to finite,
  time-homogeneous Markov chains, placing `FiniteMarkovChain` (`AbsorbingMarkovChain specializes FiniteMarkovChain`)
  as a flat sibling of its own structural components/properties (`MarkovTransitionMatrix`,
  `MarkovStateDistribution`, `MarkovChainIrreducibility`, `MarkovChainPeriodicity`,
  `StationaryDistribution`, `FiniteMarkovConvergenceTheorem`) and placing absorbing-chain
  concepts (`AbsorptionProbability`, `AbsorptionProbabilityEquations`,
  `FiniteMarkovAbsorptionTheorem`) as siblings of `FiniteMarkovChain` rather than connecting
  them to `AbsorbingMarkovChain`.

---

### 4.14 `Statistics`

#### 1. `DescriptiveStatistics` (Asymmetric grouping of Dispersion vs. Location/Central Tendency):

- Spread summaries are unified under an `ONT-E7`-eligible parent `DispersionMeasure` (`DataRange`,
  `DataStandardDeviation`, `DataVariance`, `InterquartileRange`, `MeanAbsoluteDeviation`), and
  order cutoffs are unified under `Quantile` (`Median`, `Quartile`).

- By contrast, **location / central tendency summaries** (`ArithmeticMean`,
  `WeightedArithmeticMean`, `Mode`, plus `Median` under `Quantile`) have no unifying parent (such
  as proposed `LocationMeasure` or `CentralTendencyMeasure`), and `ArithmeticMean` has no
  `specializes` link to `WeightedArithmeticMean`.

- **Suggestion (`ONT-S2`, `ONT-S3`, `ONT-E7`):** Introduce an eligible location/central-tendency
  parent or link `ArithmeticMean` and `WeightedArithmeticMean`, and separate frequency-table
  representations (`FrequencyDistribution`, `RelativeFrequency`) from numerical summary measures.

#### 2. `StatisticalEstimation` vs. `HypothesisTesting` and `StudyDesign`:

- `SamplingDistribution` and `StandardError` are placed inside `StatisticalEstimation`, even
  though both are equally foundational to `HypothesisTesting` (`TestStatistic`, `MeanTTest`).

- `ParameterEstimation` has only a single specialization (`UnbiasedVarianceEstimation specializes ParameterEstimation`).

- `StudyDesign` mixes data-collection study types (`Census`, `ObservationalStudy`,
  `RandomizedExperiment`), sampling methods (`SamplingDesign`), methodological biases/threats
  (`Confounding`, `SamplingBias`), and question formulation (`StatisticalQuestion`) in one flat
  7-child `partOf` list.

---

## 5. Summary of Priority Action Items

### 1. Resolve the remaining 4 single-child `partOf` organizers (`ONT-E7`, `ONT-S1`):

**Resolved — 2026-10-24:** `PercentageArithmetic` now has three constituents, as recorded in
[section 3.2](#percentagearithmetic).

**Remaining:** `DecimalStrategies`, `OneDimensionalObjects`, `AlgebraicStructures`, and
`LinearSystems`.

### 2. Fix definition/specialization conflicts and missing `specializes` edges (`ONT-S2`, `ONT-D2`):

- Revise `DivisionOfCollections` so its definition admits nonzero remainders, and nest
  `EvenDivisibility` under `PerfectDivisibility`, `UnevenDivisibility` under
  `ImperfectDivisibility`, and `DivisionOfCollections` under `PartitionOfCollections`.

- Add missing mathematical `specializes` links: `EquilateralTriangle` $\to$ `IsoscelesTriangle` &
  `AcuteTriangle`; `Square` $\to$ `Rhombus`; `UnitFactorScaling` & `UnitMagnitudeScaling` $\to$
  `UnitConversion`; `GraphCycle` $\to$ `GraphWalk`; `RootIndex` $\to$ `Operand`; `NormalVector`
  $\to$ `VectorConcept`; `PolarAreaIntegration` $\to$ `AreaIntegration`;
  `CoordinateDistance` $\to$ `DistanceCalculation`; `BinomialSquareIdentities` $\to$
  `QuadraticRewriting`; `DivisorCount`, `DivisorSum`, & `EulersTotient` $\to$
  `MultiplicativeArithmeticFunction`.

- Convert `AverageRateOfChange` and `InstantaneousRateOfChange` from `partOf` to `specializes`
  under `FunctionSlope` to restore `FunctionSlope`'s `ONT-E7` eligibility.

### 3. Repair cross-branch misplacements and naming typos (`ONT-S1`, `ONT-S3`, `ONT-D5`):

- Fix typos `DecimalPrecission` $\to$ `DecimalPrecision`, `ArchConcept` $\to$ `ArcConcept`, and
  clarify `OddAndEvenNumbers` (divisibility-by-2 rule) vs. `IntegerParity`, and plural
  `MeasuringVolumes` vs. singular `MeasuringLength` / `MeasuringWeight`.

- Move `MonotoneSequenceConvergenceTheorem` and `MonotoneSequenceDivergenceTheorem` out of
  `FunctionTheorems` into `SequenceAndSeriesProperties`.

- **Resolved — 2026-10-24:** Aligned `FunctionNotation` with the notation descriptors in
  `FormalMathematics` through the `MathematicalNotation` family recorded in
  [section 3.1](#formalmathematics).

- **Open:** Reconcile `FunctionDomain` (`Algebra`) with `FunctionRange` (`Analysis`).

- Relocate `NumericIdentity` out of `NumericComparison`, `ShapeReflection` out of
  `ShapePartWholeRelations`, `OneToOneFunction` out of `FunctionTypes`, and `MidpointCalculation`
  out of `GeometricCalculations`.
