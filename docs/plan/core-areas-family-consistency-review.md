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
  - [Analysis](#22-analysis)
  - [Arithmetic](#23-arithmetic)
  - [Calculus](#24-calculus)
  - [Combinatorics](#25-combinatorics)
  - [FormalMathematics](#26-formalmathematics)
  - [Geometry](#27-geometry)
  - [GraphTheory](#28-graphtheory)
  - [IntuitiveMathematics](#29-intuitivemathematics)
  - [LinearAlgebra](#210-linearalgebra)
  - [Logic](#211-logic)
  - [NumberTheory](#212-numbertheory)
  - [Probability](#213-probability)
  - [Statistics](#214-statistics)
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

### 2.2 `Analysis`

#### 1. `FunctionProperties` (Domain/range placement):

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S3`):** `FunctionRange` is placed under
  `Analysis > FunctionProperties > FunctionValueProperties`, whereas `FunctionDomain` is placed
  under `Algebra > AlgebraicFunctions`. Reconcile their intended family roles and the
  algebra/analysis boundary before changing placement. `FunctionInterpretation` is a possible
  shared context to consider; preserve the distinction between admissible inputs and the range
  of outputs actually attained, rather than an arbitrary output set.

---

### 2.3 `Arithmetic`

#### 1. `ArithmeticOperations` (`Factorial`, `Modulo`, and a possible composite-operation family):

- **Complex change, group 2 (`ONT-D4`, `ONT-S2`, `ONT-W2`):** `Modulo` currently describes
  the remainder after dividing one number by another, without fixing its number domain,
  divisor restrictions, or convention for negative inputs. `EuclideanDivision` fixes an
  integer dividend, positive integer divisor, and remainder between zero inclusive and the
  divisor exclusive. Settle the intended modulo boundary before adding a structural link or
  changing either definition; the composite-operation proposal below does not resolve it.

- **Discussion, group 3 (`ONT-D1`, `ONT-D4`, `ONT-S1`, `ONT-R3`):** `Factorial` is a direct
  constituent of `ArithmeticOperations`, whereas `Modulo` is a constituent of `BaseOperations`.
  The `BaseOperations` definition names addition, subtraction, multiplication, and division but
  does not describe remainders. Review that boundary alongside the proposed
  `CompositeOperations` grouping for `Factorial` and `Modulo`.

- Using other operations during execution is not yet a distinguishing definition for that
  proposed family: multiplication and powers can also be carried out using other operations.
  Compare a new family with truthful progression or composition relations, including
  `integrates` where appropriate. No new organizer or placement change is approved here.

#### 2. `ArithmeticSpaces` (`IntegerStrategies` and fraction-strategy coverage):

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S3`):** `IntegerStrategies` contains 20
  direct `partOf` children: four standard written vertical/long algorithms
  (`AdditionStandardAlgorithm`, `SubtractionStandardAlgorithm`, `MultiplicationStandardAlgorithm`,
  `DivisionStandardAlgorithm`) and 16 other strategies across the four operations. Written,
  mental, and decomposition methods can overlap, so they do not supply disjoint groups.
  Consider grouping by operation alongside other proposals in the
  [shared strategy audit](ontology-consolidation.md#deferred-arithmetic-strategy-audit).
  This does not reopen the accepted use of fraction techniques as strategies.

- **Discussion, group 3 (`ONT-D4`, `ONT-D6`):** `LowestCommonNumerator` finds the least common
  multiple of the written positive numerators. Clarify whether its name means that procedure
  or a lowest common numerator after simplifying the inputs: $4/6$ and $6/9$ both reduce to
  $2/3$, giving common numerator two rather than the original numerators' least common multiple
  twelve. Retain the accepted strategy role of `LowestCommonDenominator`.

- **Discussion, group 3 (`ONT-D1`, `ONT-E1`):** `FractionStrategies` covers equivalence and
  comparison techniques but has no explicit fraction-addition or fraction-multiplication
  methods. Assess whether reusable methods add observable knowledge beyond the existing
  arithmetic Areas and fraction Scopes before proposing new descriptors.

---

### 2.4 `Calculus`

#### 1. `CurveCalculus` (Deferred polar-area boundary):

- **Discussion, group 3 (`ONT-D4`, `ONT-S2`, `ONT-S5`):** `AreaIntegration` requires integrals
  of nonnegative slice lengths. `PolarAreaIntegration` uses the angular sector-area density
  $r(\theta)^2/2$, rather than a slice length, with intervals and multiplicity chosen for the
  intended region. Review that defining boundary and orientation/multiplicity conditions before
  adding the proposed specialization. Both definitions and placements remain unchanged.

#### 2. `DifferentialCalculus > DifferentiationRules` (Family role):

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S2`, `ONT-S5`, `ONT-E7`):**
  `DifferentiationRules` has five structural combination rules (`ChainRule`,
  `DerivativeLinearity`, `InverseFunctionDerivativeRule`, `ProductRule`, `QuotientRule`) and
  `ElementaryDerivativeIdentities` as `partOf` children. The latter has six specializing
  derivative identities. The definition of `DifferentiationRules` as identities makes a
  specialization family worth considering, but different depths and label eligibility do not
  establish that conversion. Decide between the current plural organizer and a family of
  narrower identities through their intended meanings; review every child and complete path
  before any conversion.

---

### 2.5 `Combinatorics`

#### 1. `CombinatorialEnumeration` (Unordered selection and circular permutations):

- **Discussion, group 3 (`ONT-D1`, `ONT-D4`, `ONT-S2`, `ONT-E7`):** Ordered selection has an
  eligible hierarchy under `OrderedSelectionCounting`, whereas unordered selection without
  repetition is represented by `BinomialCoefficient` and multiset counting by `StarsAndBars`.
  Consider an unordered-selection / combination-counting family only if it adds a useful
  observable generic claim. The current difference in names and hierarchy depth is not itself
  a defect, and the coefficient descriptors already express counting knowledge.

- **Discussion, group 3 (`ONT-D4`, `ONT-S2`):** `CircularPermutationCounting` identifies
  arrangements up to rotation, while `OrderedSelectionCounting` distinguishes positions and
  `PermutationCounting` describes linear arrangements. Review the desired counting-family
  boundary before proposing either specialization; circular arrangements do not automatically
  preserve those current linear/position-distinguishing meanings.

---

### 2.6 `FormalMathematics`

#### 1. `ExpressionStructure` (`RootIndex` vs. `Operand`):

- **Discussion, group 3 (`ONT-D4`, `ONT-S2`, `ONT-S3`):** `Operand` requires an explicit input
  role determined by written structure, while `RootIndex` includes the implicit index two in
  square-root notation. An explicit radical index can match that input role, but an omitted
  index does not satisfy the current explicit-input boundary. Review the explicit/implicit
  distinction before adding the proposed specialization; both definitions and the current
  `RootIndex partOf ExpressionStructure` placement remain unchanged.

---

### 2.7 `Geometry`

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

### 2.8 `GraphTheory`

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

### 2.9 `IntuitiveMathematics`

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

### 2.10 `LinearAlgebra`

#### 1. `VectorAlgebra` (Optional organization review):

- **Discussion, group 3 (`ONT-D4`, `ONT-S1`, `ONT-S3`):** The nine direct constituents combine
  abstract vector-space concepts (`Basis`, `LinearCombination`, `LinearIndependence`,
  `LinearSpan`), geometric properties (`VectorDirection`, `VectorMagnitude`,
  `VectorOrthogonality`), coordinate representation (`VectorComponents`), and operations
  (`VectorArithmetic`). `OrthonormalBasis` already specializes `Basis`. Review whether any
  additional organization or definition clarification adds useful meaning; the different
  constituent roles alone do not require regrouping.

---

### 2.11 `Logic`

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

### 2.12 `NumberTheory`

#### 1. `NumberSystems` (Complex-number organization):

- **Complex change, group 2 (`ONT-D4`, `ONT-S1`, `ONT-S3`, `ONT-S4`, `ONT-S5`):**
  `ComplexArgument`, `ComplexConjugation`, `ComplexModulus`, `ComplexNumberStructure`, and
  `ComplexRootStructure` are direct constituents alongside the cross-system
  `NumberOperationResultTypes` and `NumberSystemRelations`. Consider a complex-number organizer
  or a clarified role for `ComplexNumberStructure`; check the full graph and the meaning of
  each candidate child before choosing a parent. Their shared complex-number context does not
  by itself make one concept a specialization of another.

---

### 2.13 `Probability`

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

### 2.14 `Statistics`

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

- [Arithmetic](#23-arithmetic): `Modulo`'s number domain, divisor restrictions, and
  negative-input convention relative to `EuclideanDivision`.
- [Intuitive mathematics](#29-intuitivemathematics): the exact-division/concrete-parity boundary
  and deferred division/partition specialization. The concrete parity descriptors remain
  unchanged pending the separate meaning decision.
- [Intuitive mathematics](#29-intuitivemathematics): interval numeration's meaning and parent
  boundary.
- [Number theory](#212-numbertheory): complex-number organization.
- [Probability](#213-probability): finite-Markov/absorption topic organization.

### 3. Discussion and conditional proposals

These items require a meaning or scope decision before implementation.

- [Algebra](#21-algebra): function-family coverage and deferred specialization links connecting
  expression dependence, proportionality, `NumericFunction`, and `PowerFunction`.
- [Analysis](#22-analysis): domain/range organization with their distinct meanings retained.
- [Arithmetic](#23-arithmetic): `Factorial`/`Modulo` placement and a defensible boundary for any
  composite-operation family; overlapping integer-method classifications; the meaning of
  `LowestCommonNumerator`; and any missing reusable fraction-operation strategies.
- [Calculus](#24-calculus): the deferred polar-area definition boundary and the organizer vs.
  specialization-family role of differentiation rules.
- [Combinatorics](#25-combinatorics): unordered-selection coverage and circular vs. linear
  counting-family boundaries.
- [Formal mathematics](#26-formalmathematics): the deferred explicit/implicit radical-index
  boundary.
- [Geometry](#27-geometry): midpoint-calculation placement, broad cone/cylinder meanings vs.
  right-circular solids of revolution, right-triangle ratio definitions/examples, and the
  coordinate-plane field vs. observable-concept role.
- [Graph theory](#28-graphtheory): concrete foundational graph-family proposals and conventions.
- [Intuitive mathematics](#29-intuitivemathematics): iteration overlap, reflective-symmetry
  placement, and the whole numeric-comparison family's boundaries, structural roles, and
  eligibility consequences.
- [Linear algebra](#210-linearalgebra): whether additional vector-topic organization is useful.
- [Logic](#211-logic): formula construction vs. equivalence of formulas within propositional
  logic.
- [Probability](#213-probability): whether broader random-variable organization is useful
  beyond the current supported placements.
- [Statistics](#214-statistics): a location/central-tendency family that accommodates
  categorical modes and preserves median's quantile role, and the shared inference context of
  sampling distributions and standard errors.

### 4. Accepted no-change decisions

No open actions remain in this group. Accepted differences in constituent roles, hierarchy depth,
strategy organization, and overlapping classification axes have been removed from the findings.

The `AlgebraicEquivalence` naming question is resolved (`ONT-D4`, `ONT-S2`): retain its name and
definition, covering both expression-value equality and constraint solution-set equivalence.
The implemented rewriting and identity subfamilies are recorded in
[history](../history/2026-10-mathematics-and-consolidation.md).

### 5. Already-addressed claims

No open actions remain in this group. The stale mixed-child-role claim about `FunctionProperties`
and the stale direct-sibling claim about `OrthonormalBasis` have been removed.
