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
  - [Geometry](#24-geometry)
  - [GraphTheory](#25-graphtheory)
  - [IntuitiveMathematics](#26-intuitivemathematics)
  - [LinearAlgebra](#27-linearalgebra)
  - [Logic](#28-logic)
  - [NumberTheory](#29-numbertheory)
  - [Probability](#210-probability)
  - [Statistics](#211-statistics)
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

#### 1. `ArithmeticOperations` (Modulo convention and deferred progression links):

- **Complex change, group 2 (`ONT-D4`, `ONT-S2`, `ONT-W2`):** `Modulo` currently describes
  the remainder after dividing one number by another, without fixing its number domain,
  divisor restrictions, or convention for negative inputs. `EuclideanDivision` fixes an
  integer dividend, positive integer divisor, and remainder between zero inclusive and the
  divisor exclusive. Settle the intended modulo boundary before changing either definition
  or relating the two concepts; moving `Modulo` directly under `ArithmeticOperations` does
  not resolve that meaning decision.

- **Deferred, group 3 (`ONT-R3`, `ONT-W2`):** The proposed
  `Factorial integrates Multiplication` and `Modulo integrates EuclideanDivision` links
  remain unapproved. Revisit their conceptual meaning and progression paths separately;
  the modulo proposal also depends on the unresolved number-domain and remainder convention.

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

### 2.4 `Geometry`

#### 1. `GeometricCalculations` (`MidpointCalculation`):

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S3`):** `MidpointCalculation` determines a
  coordinate point, unlike the scalar measurements calculated by the other constituents.
  `GeometricCalculations` does not explicitly restrict outputs to scalar measures, so the
  difference alone does not invalidate its placement. Review whether coordinate-based
  `GeometricVisualization` provides a useful additional or replacement home, together with the
  intended calculation-family boundary.

#### 2. `ThreeDimensionalObjects` (`Cone`, `Cylinder`, and solids of revolution):

- **Discussion, group 3 (`ONT-D4`, `ONT-S2`):** The current `Cone` definition permits a
  general flat base, and `Cylinder` specifies parallel circular bases without requiring a
  right cylinder. A blanket specialization of either under `SolidOfRevolution` would therefore
  assert more than those definitions guarantee. Decide whether to retain these broad concepts
  and add useful right-circular specializations or clarify their intended boundaries.
  The completed `Sphere` specialization does not settle those separate decisions.

#### 3. `GeometricRelations` (Right-triangle trigonometric ratios):

- **Discussion, group 3 (`ONT-D4`, `ONT-E1`, `ONT-E7`):** `TrigonometricRelations` includes
  right-triangle ratios and circular trigonometry, and is an ineligible organizer.
  `Cosine`, `Sine`, and `Tangent` are eligible; their definitions use the unit circle and their
  comments already illustrate adjacent/hypotenuse, opposite/hypotenuse, and opposite/adjacent
  ratios. There is no established absence of an eligible descriptor for elementary
  right-triangle ratios. Reconcile definitions and examples, or establish the distinct
  observable knowledge a separate ratio-family descriptor would add, before adding one.

#### 4. `GeometricVisualization` (`CartesianPlane`):

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S2`, `ONT-E7`):** `CartesianPlane` is
  ineligible because `CoordinateAxes`, `Origin`, and `Quadrants` are its `partOf` children.
  Its sibling coordinate-system descriptors are eligible, but that asymmetry is not a defect.
  Decide whether content needs an independent generic coordinate-plane claim and whether the
  current node represents a field or a particular coordinate-system concept. Axes, origin,
  and quadrants are constituents, not narrower kinds of coordinate plane; eligibility alone
  does not justify converting their edges to specialization.

---

### 2.5 `GraphTheory`

#### 1. `GraphFoundations` (Possible foundational graph families):

- **Discussion, group 3 (`ONT-D1`, `ONT-D4`, `ONT-S2`, `ONT-S5`):**
  `GraphStructure` currently has `CompleteGraph` as its sole specialization. That is valid and
  does not require arbitrary siblings, but additional foundational graph families are a
  supported direction for consideration. Concrete candidates include trees, bipartite graphs,
  and directed/undirected graphs; no particular additions or identifiers are approved yet.

- Candidate boundaries need explicit conventions: a tree as a connected acyclic undirected
  graph, bipartiteness through two vertex classes with edges only between classes, and directed/
  undirected families through edge orientation. Check loop and multiplicity conventions and
  existing traversal concepts before choosing definitions or specialization parents. These
  families can overlap; they are not proposed as disjoint or exhaustive categories.

---

### 2.6 `IntuitiveMathematics`

#### 1. `CollectionSense > DivisionOfCollections` (Remaining parity boundary and partition link):

- **Complex change, group 2 (`ONT-S2`, `ONT-D4`):** `DivisionOfCollections` requires an exact
  equal partition, but `UnevenDivisibility` still specializes it while explicitly leaving one
  object undistributed. Keep the concrete collection meaning distinct from the numerical
  remainder cases represented by `PerfectDivisibility` and `ImperfectDivisibility` under
  `DivisibilityRules`.

- **Complex change, group 2 (`ONT-D1`, `ONT-D4`, `ONT-E1`, `ONT-W2`):** `EvenDivisibility` and
  `UnevenDivisibility` describe a concrete two-group sharing model; `IntegerParity` describes
  the even/odd character of all integers and its behavior under operations. Purely numerical
  even/odd versions would duplicate `IntegerParity` with the relevant `EvenNumbers` or
  `OddNumbers` context. The concrete concepts remain unchanged pending a decision about their
  distinct role. A candidate `ParityByEqualSharing` could cover both outcomes in one method
  concept: eight objects split into two groups of four, or seven objects into two groups of
  three with one left over. Review existing annotations individually: finding group sizes may
  also involve division, and a leftover-object example does not satisfy the exact
  `DivisionOfCollections` definition. Review `ParityTest expands EvenDivisibility` and
  `UnevenDivisibility contradicts EvenDivisibility` with any consolidation.

- **Conditional change, group 2 (`ONT-D4`, `ONT-S2`, `ONT-S4`, `ONT-S5`):**
  `DivisionOfCollections`' equal partition is a narrower form of `PartitionOfCollections`.
  The proposed specialization is agreed in principle but explicitly deferred with the unresolved
  `UnevenDivisibility` child conflict. Review the complete paths together with that parity work
  before implementation.

#### 2. `NumberSense` (`FoundationalOperations`, `Numeration`, and `NumericComparison`):

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S3`):** `FoundationalOperations` mixes
  the concrete additive/subtractive actions `Increment`, `Decrement`, `Sum`, and `Difference`
  with `Iteration`, a general repetition process overlapping `IteratedOperation` in
  `Arithmetic > ArithmeticEvaluation`. Clarify the boundary before merging, renaming, or
  changing structural or progression relations.

- **Complex change, group 2 (`ONT-D4`, `ONT-S2`, `ONT-S3`):** `NumerationWithIntegers`,
  `NumerationWithFractions`, and `NumerationWithDecimals` specialize `Numeration`, whose meaning
  includes counting, ordering, and grouping numbers and relating them to representations.
  `NumerationWithIntervals` instead represents sets through lower and upper bounds. Its
  `BoundedIntervals` and `UnboundedIntervals` specializations do not resolve that parent
  boundary. Review the intended meaning and placement while retaining the current identifiers.

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S2`, `ONT-S5`, `ONT-E7`):**
  `NumericIdentity` concerns invariance of value across representations rather than comparison
  of numerical values. Review the whole `NumericComparison` family: `NumericEquality` could
  preserve its broader comparison meaning through specialization, but converting it alone
  would mix child roles while `NumericInequality`, `NumericOrder`, and `NumericIdentity` remain
  constituents. `NumericInequality` establishes only unequal values, `NumericOrder` arranges
  multiple values by magnitude, and `NumericIdentity` concerns representation invariance.
  Decide each boundary and the parent's role before any conversions or relocations;
  `NumericComparison`'s present ineligibility does not establish the required change.

#### 3. `SpatialSense` (`ShapePartWholeRelations`):

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S3`):** `ShapePartWholeRelations` groups
  `ShapeDecomposition` and `ShapeSynthesis` with `ShapeReflection`, whose definition concerns
  reflective symmetry as a defining property of a shape. Its mirrored-halves definition and
  decomposition relation make the current part-whole placement defensible. Review its relationship to
  `ShapeIdentity` and `SymmetryRelation` before choosing a new placement or definition.

---

### 2.7 `LinearAlgebra`

#### 1. `VectorAlgebra` (Optional organization review):

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S3`):** The nine direct constituents combine
  abstract vector-space concepts (`Basis`, `LinearCombination`, `LinearIndependence`,
  `LinearSpan`), geometric properties (`VectorDirection`, `VectorMagnitude`,
  `VectorOrthogonality`), coordinate representation (`VectorComponents`), and operations
  (`VectorArithmetic`). `OrthonormalBasis` already specializes `Basis`. Review whether any
  additional organization or definition clarification adds useful meaning; the different
  constituent roles alone do not require regrouping.

---

### 2.8 `Logic`

#### 1. `PropositionalLogic` (`LogicalEquivalence`):

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S3`):** `LogicalConjunction`,
  `LogicalDisjunction`, `LogicalImplication`, and `LogicalNegation` construct compound formulas
  with specified truth conditions, such as $p \land q$. `LogicalEquivalence` instead compares
  formulas across all admissible interpretations: $p \land q$ and $q \land p$ have matching
  truth values throughout. It has `ContrapositionEquivalence` and `DeMorganLaws` as narrower
  equivalences. Both formula constructs and equivalence relationships fit the current
  `PropositionalLogic` field. Decide whether a more explicit distinction would help before
  proposing a rename, new family, or placement change; their differing roles alone do not make
  the current `partOf` relations invalid.

---

### 2.9 `NumberTheory`

#### 1. `NumberSystems` (Complex-number organization):

- **Complex change, group 2 (`ONT-D4`, `ONT-S1`, `ONT-S3`, `ONT-S4`, `ONT-S5`):**
  `ComplexArgument`, `ComplexConjugation`, `ComplexModulus`, `ComplexNumberStructure`, and
  `ComplexRootStructure` are direct constituents alongside the cross-system
  `NumberOperationResultTypes` and `NumberSystemRelations`. Consider a complex-number organizer
  or a clarified role for `ComplexNumberStructure`; check the full graph and the meaning of
  each candidate child before choosing a parent. Their shared complex-number context does not
  by itself make one concept a specialization of another.

---

### 2.10 `Probability`

#### 1. `ProbabilityFoundations` and `RandomVariableTheory`:

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S3`):** `ProbabilityFoundations` explicitly
  includes random variables, so the current `RandomVariable` placement is supported.
  `RandomVariableTheory` currently concerns their distributions, dependence, and numerical
  summaries. Review whether a broader shared home would add useful organization before
  redefining that field, relocating the concept, or adding a second parent.

#### 2. `StochasticProcesses` (Finite Markov-chain organization):

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

### 2.11 `Statistics`

#### 1. `DescriptiveStatistics` (Location/central-tendency family):

- **Discussion, group 3 (`ONT-D1`, `ONT-D4`, `ONT-S2`, `ONT-S4`, `ONT-S5`, `ONT-E7`):**
  `DispersionMeasure` provides an eligible family for spread summaries, while `Quantile` groups
  order cutoffs, including `Median`. `WeightedArithmeticMean`, its `ArithmeticMean`
  specialization, and `Mode` have no shared location/central-tendency family with `Median`.
  Consider a reusable generic location-summary concept if its definition preserves each
  member's meaning and supports useful content claims. Its boundary must accommodate a
  categorical `Mode`, and `Median` must retain its valid `Quantile` specialization; review
  overlapping families and all paths rather than replacing that existing relation.

#### 2. `StatisticalEstimation` vs. `HypothesisTesting`:

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S3`):** `SamplingDistribution` and
  `StandardError` are constituents of `StatisticalEstimation` and also support hypothesis
  testing. Review whether an additional or broader statistical-inference home is useful.
  Applicability in both contexts alone does not invalidate the present placement or require
  duplicate parents.

---

## 3. Summary of Priority Action Items

### 1. Agreed simple changes

No open items remain from the applied simple-change batch. Its placement and specialization
changes, including sequence-theorem grouping, are recorded in
[history](../history/2026-10-mathematics-and-consolidation.md).
The collection-partition proposal remains explicitly deferred with parity work in group 2.

### 2. Agreed complex changes

Agreement concerns the issue to resolve; identifiers, definitions, and final graph changes still
need a concrete proposal and review.

- [Arithmetic](#22-arithmetic): `Modulo`'s number domain, divisor restrictions, and
  negative-input convention relative to `EuclideanDivision`.
- [Intuitive mathematics](#26-intuitivemathematics): the exact-division/concrete-parity boundary
  and deferred division/partition specialization. The concrete parity descriptors remain
  unchanged pending the separate meaning decision.
- [Intuitive mathematics](#26-intuitivemathematics): interval numeration's meaning and parent
  boundary.
- [Number theory](#29-numbertheory): complex-number organization.
- [Probability](#210-probability): finite-Markov/absorption topic organization.

### 3. Discussion and conditional proposals

These items require a meaning or scope decision before implementation.

- [Algebra](#21-algebra): function-family coverage and deferred specialization links connecting
  expression dependence, proportionality, `NumericFunction`, and `PowerFunction`.
- [Arithmetic](#22-arithmetic): deferred factorial/modulo progression links.
- [Combinatorics](#23-combinatorics): deferred unordered-selection specialization links.
- [Geometry](#24-geometry): midpoint-calculation placement, broad cone/cylinder meanings vs.
  right-circular solids of revolution, right-triangle ratio definitions/examples, and the
  coordinate-plane field vs. observable-concept role.
- [Graph theory](#25-graphtheory): concrete foundational graph-family proposals and conventions.
- [Intuitive mathematics](#26-intuitivemathematics): iteration overlap, reflective-symmetry
  placement, and the whole numeric-comparison family's boundaries, structural roles, and
  eligibility consequences.
- [Linear algebra](#27-linearalgebra): whether additional vector-topic organization is useful.
- [Logic](#28-logic): formula construction vs. equivalence of formulas within propositional
  logic.
- [Probability](#210-probability): whether broader random-variable organization is useful
  beyond the current supported placements.
- [Statistics](#211-statistics): a location/central-tendency family that accommodates
  categorical modes and preserves median's quantile role, and the shared inference context of
  sampling distributions and standard errors.

### 4. Accepted no-change decisions

No open actions remain in this group. Accepted differences in constituent roles, hierarchy depth,
strategy organization, and overlapping classification axes have been removed from the findings.

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
