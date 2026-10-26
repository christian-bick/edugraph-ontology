# Core Areas Family and Sibling Consistency Review

Family and sibling review of [`core-areas-math.ttl`](../../core-areas-math.ttl).
No active family corrections remain. The four topics retained in
[section 3](#3-summary-of-priority-action-items) are parked and should be reopened only when
concrete evidence establishes an actual defect. Optional coverage, additional links, and
consolidation preferences are not outstanding implementation work. Completed work is summarized in
[history](../history/2026-10-mathematics-and-consolidation.md).

## Contents

- [1. Review boundary](#1-review-boundary)
- [2. Family-by-family findings](#2-family-by-family-sibling-consistency-analysis)
  - [Algebra](#21-algebra)
  - [Arithmetic](#22-arithmetic)
  - [Combinatorics](#23-combinatorics)
  - [IntuitiveMathematics](#24-intuitivemathematics)
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
evidence before implementation.

For the four parked topics, require a concrete conflicting definition or authored relation,
an incorrect inherited claim, or a demonstrated annotation failure before reopening work.
Missing optional descriptors or links, overlap, and possible naming improvements alone do not
establish a defect. Keep a consumer annotation issue distinct from a defect in the ontology
(ONT-D4, ONT-S2, ONT-E1, ONT-W2).

## 2. Family-by-Family Sibling Consistency Analysis

### 2.1 `Algebra`

#### 1. `AlgebraicFunctions` (`ExpressionBasedDependence` vs. `NumericFunction`):

- **Parked, group 3 (`ONT-D1`, `ONT-D4`, `ONT-S2`):**
  `NumericFunction` specializes into `AbsoluteValueFunction`, `ComplexExponentialFunction`,
  `LogarithmicFunction`, `PowerFunction`, `TrigonometricFunction`, `ArithmeticSequence`, and
  `GeometricSequence`, but polynomial, affine/linear, quadratic, rational, and real exponential
  families are represented under `ExpressionBasedDependence`. The dependence family classifies
  governing expressions, including constraint residuals; `NumericFunction` requires exactly one
  numerical output for each admissible input. This difference in coverage does not establish
  a defect. Retain the existing concepts and relations; additional function-family descriptors
  are not an active action item.

- **Parked, group 3 (`ONT-D4`, `ONT-S2`, `ONT-S5`):** The proposed
  `DirectProportionalDependence specializes NumericFunction`,
  `InverseProportionalDependence specializes NumericFunction`, and
  `PowerFunction specializes ExpressionBasedDependence` links remain unapproved. The proportional concepts
  designate numerical inputs and outputs, while the power-function definition supplies a
  governing expression. Their possible applicability does not establish a defect in the
  existing graph. Retain the current relations unless concrete evidence justifies reopening.

- **Parked, group 3 (`ONT-D4`, `ONT-S2`):** The proposed
  `InverseProportionalDependence specializes PowerFunction` link remains unapproved.
  Inverse proportional dependence retains a general numerical domain with $k \ne 0$ and
  $x \ne 0$, while `PowerFunction` explicitly describes real input-output relationships.
  For real inputs and outputs, inverse proportional dependence has exponent $-1$; the additional
  specialization is not an active action item. Its absence does not establish an incorrect
  authored relation or inherited claim.

---

### 2.2 `Arithmetic`

#### 1. `ArithmeticOperations` (Deferred progression links):

- **Parked, group 3 (`ONT-R3`, `ONT-W2`):** The proposed
  `Factorial integrates Multiplication` and `Modulo integrates EuclideanDivision` links
  remain unapproved; no defect is established by their absence. If concrete evidence warrants
  reopening, review their conceptual meaning and progression paths separately;
  any modulo proposal must account for the general operation's contextual domain and remainder
  convention alongside `EuclideanDivision`'s explicit integer and positive-divisor boundary.

---

### 2.3 `Combinatorics`

#### 1. `CombinatorialEnumeration` (Deferred unordered-selection specializations):

- **Parked, group 3 (`ONT-D4`, `ONT-S2`, `ONT-S5`, `ONT-W2`):** The proposed
  `BinomialCoefficient specializes UnorderedSelectionCounting` and
  `StarsAndBars specializes UnorderedSelectionCounting` links remain unapproved. `BinomialCoefficient`
  defines the number of subsets, while the new parent concerns determining or interpreting
  selection counts. This distinction does not establish a defect in the existing placement.
  `StarsAndBars` counts nonnegative integer solutions through a separator construction,
  including allocation interpretations. A possible bijection alone does not establish that those
  meanings preserve the proposed parent's selection and multiplicity interpretation. Existing
  relations remain unchanged; reopen only against a demonstrated defect.

---

### 2.4 `IntuitiveMathematics`

#### 1. `NumberSense > FoundationalOperations`:

- **Parked, group 3 (`ONT-D1`, `ONT-D4`, `ONT-E1`, `ONT-W2`):** Retain `Iteration` and
  `IteratedOperation` with their existing names, definitions, and relations for now.
  General repetition and its arithmetic application overlap, while the latter's phrase
  "single operand value" leaves its intended boundary unclear. Neither observation establishes
  an ontology defect requiring consolidation or a new specialization link. The
  [historical dataset evidence](ontology-consolidation.md#deferred-iteration-consolidation-and-dataset-adoption)
  about repeated groups and two equal addends remains a conditional verification note; it is
  not a confirmed current defect or authorization for an ontology merge.

---

## 3. Summary of Priority Action Items

### 1. Agreed simple changes

No open items remain from the applied simple-change batch. Its placement and specialization
changes, including sequence-theorem grouping, are recorded in
[history](../history/2026-10-mathematics-and-consolidation.md).

### 2. Agreed complex changes

No open items remain. Completed changes are recorded in
[history](../history/2026-10-mathematics-and-consolidation.md).

### 3. Discussion and conditional proposals

No active action items remain. No actual ontology defect has been established in the four
topics below. Retain them as parked proposals and reopen only with concrete defect evidence
under the review boundary above.

- [Algebra](#21-algebra): optional function-family coverage and specialization links connecting
  expression dependence, proportionality, `NumericFunction`, and `PowerFunction`.
- [Arithmetic](#22-arithmetic): optional factorial/modulo progression links.
- [Combinatorics](#23-combinatorics): optional unordered-selection specialization links.
- [Intuitive mathematics](#24-intuitivemathematics): possible iteration consolidation and
  conditional verification of historical dataset evidence.

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
