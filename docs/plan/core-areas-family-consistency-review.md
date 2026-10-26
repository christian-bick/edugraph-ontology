# Core Areas Family and Sibling Consistency Review

Open family and sibling findings for [`core-areas-math.ttl`](../../core-areas-math.ttl).
The remaining work is grouped in [section 3](#3-summary-of-priority-action-items) as complex
changes or questions needing discussion. Completed changes, accepted nonissues, and stale
claims have been removed from the family findings; completed work is summarized in
[history](../history/2026-10-mathematics-and-consolidation.md).

## Contents

- [1. Review boundary](#1-review-boundary)
- [2. Family-by-family findings](#2-family-by-family-sibling-consistency-analysis)
  - [Algebra](#21-algebra)
  - [Arithmetic](#22-arithmetic)
  - [Combinatorics](#23-combinatorics)
  - [IntuitiveMathematics](#24-intuitivemathematics)
  - [NumberTheory](#25-numbertheory)
  - [Probability](#26-probability)
- [3. Priority actions](#3-summary-of-priority-action-items)
  - [1. Agreed simple changes](#1-agreed-simple-changes)
  - [2. Agreed complex changes](#2-agreed-complex-changes)
  - [3. Discussion and conditional proposals](#3-discussion-and-conditional-proposals)
  - [4. Accepted no-change decisions](#4-accepted-no-change-decisions)
  - [5. Already-addressed claims](#5-already-addressed-claims)

## 1. Review boundary

Use the normative [structure](../structure.md), [descriptor](../descriptors.md),
[content-evidence](../content-evidence.md), [relation](../relations.md), and
[change-review](../change-review.md) references. Relevant checks include truthful constituent
and specialization meanings (ONT-S1/S2), coherent descriptor dimensions and meanings
(ONT-D2/D4), complete multi-parent paths and uniform child roles (ONT-S4/S5), and direct-label
eligibility (ONT-E7).

Different sibling roles, missing parallel groups, or an ineligible organizer are review prompts;
they do not justify a mechanical rename, new group, or relation conversion. Every remaining
proposal needs review against definitions, incoming references, complete paths, and content
evidence before implementation. Group 2 records agreement on the concern, not approval of a
particular new identifier, definition, or hierarchy.

## 2. Family-by-Family Sibling Consistency Analysis

### 2.1 `Algebra`

#### 1. `AlgebraicFunctions` (`ExpressionBasedDependence` vs. `NumericFunction`):

- **Discussion, group 3 (`ONT-D1`, `ONT-D4`, `ONT-S2`):**
  `NumericFunction` specializes into `AbsoluteValueFunction`, `ComplexExponentialFunction`,
  `LogarithmicFunction`, `PowerFunction`, `TrigonometricFunction`, `ArithmeticSequence`, and
  `GeometricSequence`, but polynomial, affine/linear, quadratic, rational, and real exponential
  families are represented under `ExpressionBasedDependence`. The dependence family classifies
  governing expressions, including constraint residuals; `NumericFunction` requires exactly one
  numerical output for each admissible input. Review whether dedicated function-family
  descriptors add useful meanings or inheritance beyond supported combinations of existing
  descriptors before introducing them.

- **Deferred, group 3 (`ONT-D4`, `ONT-S2`, `ONT-S5`):** Review the proposed
  `DirectProportionalDependence specializes NumericFunction`,
  `InverseProportionalDependence specializes NumericFunction`, and
  `PowerFunction specializes ExpressionBasedDependence` links. The proportional concepts
  designate numerical inputs and outputs, while the power-function definition supplies a
  governing expression. The naming cleanup preserves existing relations; review the intended
  inheritance and complete affected paths before adding these links.

- **Deferred, group 3 (`ONT-D4`, `ONT-S2`):** Review the proposed
  `InverseProportionalDependence specializes PowerFunction` link with that family boundary.
  Inverse proportional dependence retains a general numerical domain with $k \ne 0$ and
  $x \ne 0$, while `PowerFunction` explicitly describes real input-output relationships.
  For real inputs and outputs, inverse proportional dependence has exponent $-1$; the additional
  specialization remains deferred until the intended domain and family roles are settled.

---

### 2.2 `Arithmetic`

#### 1. `ArithmeticOperations` (Deferred progression links):

- **Deferred, group 3 (`ONT-R3`, `ONT-W2`):** The proposed
  `Factorial integrates Multiplication` and `Modulo integrates EuclideanDivision` links
  remain unapproved. Revisit their conceptual meaning and progression paths separately;
  any modulo proposal must account for the general operation's contextual domain and remainder
  convention alongside `EuclideanDivision`'s explicit integer and positive-divisor boundary.

---

### 2.3 `Combinatorics`

#### 1. `CombinatorialEnumeration` (Deferred unordered-selection specializations):

- **Deferred, group 3 (`ONT-D4`, `ONT-S2`, `ONT-S5`, `ONT-W2`):** Review the proposed
  `BinomialCoefficient specializes UnorderedSelectionCounting` and
  `StarsAndBars specializes UnorderedSelectionCounting` links separately. `BinomialCoefficient`
  defines the number of subsets, while the new parent concerns determining or interpreting
  selection counts. Decide whether this supports specialization for the full coefficient meaning.
  `StarsAndBars` counts nonnegative integer solutions through a separator construction,
  including allocation interpretations. Establish whether those meanings preserve the parent's
  selection and multiplicity interpretation, rather than relying on a possible bijection alone. Review
  definitions and complete affected paths before adding either specialization; existing
  relations remain unchanged.

---

### 2.4 `IntuitiveMathematics`

#### 1. `NumberSense` (`FoundationalOperations` and `Numeration`):

- **Deferred, group 3 (`ONT-D1`, `ONT-D4`, `ONT-E1`, `ONT-W2`):** Retain `Iteration` and
  `IteratedOperation` with their existing names, definitions, and relations for now.
  General repetition and its arithmetic application overlap, while the latter's phrase
  "single operand value" leaves its intended boundary unclear. Consolidation and any new
  specialization link remain deferred. Revisit the meaning together with the
  [dataset adoption and equal-addends follow-up](ontology-consolidation.md#deferred-iteration-consolidation-and-dataset-adoption);
  the dataset currently uses the arithmetic label for both repeated groups and two equal addends.

- **Complex change, group 2 (`ONT-D4`, `ONT-S2`, `ONT-S3`):** `NumerationWithIntegers`,
  `NumerationWithFractions`, and `NumerationWithDecimals` specialize `Numeration`, whose meaning
  includes counting, ordering, and grouping numbers and relating them to representations.
  `NumerationWithIntervals` instead represents sets through lower and upper bounds. Its
  `BoundedIntervals` and `UnboundedIntervals` specializations do not resolve that parent
  boundary. Review the intended meaning and placement while retaining the current identifiers.

---

### 2.5 `NumberTheory`

#### 1. `NumberSystems` (Complex-number organization):

- **Complex change, group 2 (`ONT-D4`, `ONT-S1`, `ONT-S3`, `ONT-S4`, `ONT-S5`):**
  `ComplexArgument`, `ComplexConjugation`, `ComplexModulus`, `ComplexNumberStructure`, and
  `ComplexRootStructure` are direct constituents alongside the cross-system
  `NumberOperationResultTypes` and `NumberSystemRelations`. Consider a complex-number organizer
  or a clarified role for `ComplexNumberStructure`; check the full graph and the meaning of
  each candidate child before choosing a parent. Their shared complex-number context does not
  by itself make one concept a specialization of another.

---

### 2.6 `Probability`

#### 1. `StochasticProcesses` (Finite Markov-chain organization):

- **Complex change, group 2 (`ONT-D4`, `ONT-S1`, `ONT-S4`, `ONT-S5`):** All ten direct
  constituents concern finite, time-homogeneous Markov chains: `FiniteMarkovChain`,
  `MarkovTransitionMatrix`, `MarkovStateDistribution`, `MarkovChainIrreducibility`,
  `MarkovChainPeriodicity`, `StationaryDistribution`, `FiniteMarkovConvergenceTheorem`,
  `AbsorptionProbability`, `AbsorptionProbabilityEquations`, and
  `FiniteMarkovAbsorptionTheorem`. `AbsorbingMarkovChain` specializes `FiniteMarkovChain`.
  Consider a finite-Markov field organizer and a distinct absorption-topic grouping if useful;
  do not attach constituent children beneath the specializing chain descriptors without
  resolving the complete-path restrictions.

---

## 3. Summary of Priority Action Items

### 1. Agreed simple changes

No open items remain from the applied simple-change batch. Its placement and specialization
changes, including sequence-theorem grouping, are recorded in
[history](../history/2026-10-mathematics-and-consolidation.md).

### 2. Agreed complex changes

Agreement concerns the issue to resolve; identifiers, definitions, and final graph changes still
need a concrete proposal and review.

- [Intuitive mathematics](#24-intuitivemathematics): interval numeration's meaning and parent
  boundary.
- [Number theory](#25-numbertheory): complex-number organization.
- [Probability](#26-probability): finite-Markov/absorption topic organization.

### 3. Discussion and conditional proposals

These items require a meaning or scope decision before implementation.

- [Algebra](#21-algebra): function-family coverage and deferred specialization links connecting
  expression dependence, proportionality, `NumericFunction`, and `PowerFunction`.
- [Arithmetic](#22-arithmetic): deferred factorial/modulo progression links.
- [Combinatorics](#23-combinatorics): deferred unordered-selection specialization links.
- [Intuitive mathematics](#24-intuitivemathematics): deferred iteration consolidation and
  dataset adoption.

### 4. Accepted no-change decisions

No open actions remain in this group. Accepted differences in constituent roles, hierarchy depth,
strategy organization, and overlapping classification axes have been removed from the findings.

The `Modulo` boundary review is resolved as no change (`ONT-D4`, `ONT-D6`, `ONT-S1`): retain
its definition as the operation of finding a remainder, `partOf ArithmeticOperations`, and
`expands Division`. The operation does not impose a numerical domain; applicable operand
domains and remainder conventions come from context. Do not import `EuclideanDivision`'s
integer and positive-divisor restrictions into this operation. The proposed integration link
remains deferred independently, and no additional `ModularArithmetic` parent is introduced.

The `RandomVariable` and `RandomVariableTheory` review is resolved as no change (`ONT-D4`,
`ONT-S1`, `ONT-S3`): retain both names, definitions, and all relations. The foundational
outcome-to-number concept remains `partOf ProbabilityFoundations`, whose definition explicitly
includes random variables. `RandomVariableTheory` remains `partOf Probability`, organizing
distributions, dependence, and numerical summaries. Their distinct roles support the current
placements; no broader organizer, second parent, or specialization link is needed.

The `LogicalEquivalence` review is resolved as no change (`ONT-D4`, `ONT-S1`, `ONT-S2`):
retain its name, definition, `partOf PropositionalLogic`, and the `ContrapositionEquivalence`
and `DeMorganLaws` specializations. Formula construction and equivalence across admissible
interpretations are both constituents of propositional logic. The existing definition already
distinguishes equivalence from a biconditional that happens to be true in one interpretation;
no additional organizer or relation change is needed.

The `VectorAlgebra` organization review is resolved as no change (`ONT-D4`, `ONT-S1`, `ONT-S5`):
retain its nine direct `partOf` constituents and all names, definitions, and relations.
Representation, geometric properties, operations, and relationships among vectors are
complementary topics within the field. Their differing roles do not require additional
organizers; `OrthonormalBasis` already specializes `Basis`.

The `NumericComparison` family review is resolved as no change (`ONT-D4`, `ONT-S1`, `ONT-E7`):
retain the organizer and its four `partOf` children, `NumericEquality`, `NumericInequality`,
`NumericOrder`, and `NumericIdentity`, with all names, definitions, and relations unchanged.
The proposed organizer-definition clarification and replacement of "magnitude" in
`NumericOrder` are not being pursued. No specialization conversion or eligibility change is
required by this review.

The `ShapeReflection` review is resolved as no change (`ONT-D4`, `ONT-S1`, `ONT-S3`): retain
its name, definition, `partOf ShapePartWholeRelations`, and all existing progression relations.
Its mirrored-halves meaning supports the part-whole placement and remains distinct from the
general `Reflection` transformation and broader `SymmetryRelation`. The proposed rename,
definition clarification, and additional specialization are not being pursued.

The `RootIndex` placement question is resolved (`ONT-D4`, `ONT-S1`, `ONT-S2`): retain
`partOf ExpressionStructure` and its definition, including the implicit index two in square-root
notation. That implicit case does not preserve `Operand`'s explicit-input meaning. This matches
the neighboring `Factor` family, which also includes implied values and remains a constituent
of `ExpressionStructure`; no definitions or relations change.

The `CircularPermutationCounting` placement question is resolved (`ONT-S1`, `ONT-S2`, `ONT-R3`):
retain `partOf CombinatorialEnumeration` and its existing `integrates` links to
`PermutationCounting` and `DivisionCountingPrinciple`. Identifying arrangements up to rotation
does not preserve the linear-arrangement or position-distinguishing meanings of the proposed
specialization parents. Its definition and all relations remain unchanged.

The `FractionStrategies` coverage question is resolved (`ONT-D1`, `ONT-D2`, `ONT-E1`):
retain the existing family. Routine fraction addition and multiplication are expressible through
the existing arithmetic Areas and fraction Scopes, with equivalence, denominator selection,
and simplification concepts used when evidenced. No missing reusable method has been established;
specific procedural distinctions can be reconsidered against concrete content. The broader
strategy audit remains deferred independently.

The `IntegerStrategies` regrouping question is resolved (`ONT-D4`, `ONT-S1`, `ONT-S5`):
retain its current definition and 20 direct `partOf` methods, including the four standard
algorithms. Overlapping written, mental, and decomposition methods do not establish a family
deficit. The [broader strategy audit](ontology-consolidation.md#deferred-arithmetic-strategy-audit)
remains deferred independently.

The `AlgebraicEquivalence` naming question is resolved (`ONT-D4`, `ONT-S2`): retain its name and
definition, covering both expression-value equality and constraint solution-set equivalence.
The implemented rewriting and identity subfamilies are recorded in
[history](../history/2026-10-mathematics-and-consolidation.md).

### 5. Already-addressed claims

No open actions remain in this group. The stale mixed-child-role claim about `FunctionProperties`
and the stale direct-sibling claim about `OrthonormalBasis` have been removed.
