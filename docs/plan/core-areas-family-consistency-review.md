# Core Areas Family and Sibling Consistency Review

Open family and sibling findings for [`core-areas-math.ttl`](../../core-areas-math.ttl).
Each proposal still needs review against the affected definitions, incoming references, complete
paths, and content evidence before implementation. This document retains unresolved work;
completed changes are summarized in [history](../history/2026-10-mathematics-and-consolidation.md).

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

## 1. Review boundary

Use the normative [structure](../structure.md), [descriptor](../descriptors.md),
[content-evidence](../content-evidence.md), [relation](../relations.md), and
[change-review](../change-review.md) references. Relevant checks include truthful constituent
and specialization meanings (ONT-S1/S2), coherent descriptor dimensions (ONT-D2/D3), complete
multi-parent paths and uniform child roles (ONT-S4/S5), and direct-label eligibility (ONT-E7).

Different sibling roles, missing parallel groups, or an ineligible organizer are review prompts;
they do not justify a mechanical rename, new group, or relation conversion.

## 2. Family-by-Family Sibling Consistency Analysis

### 2.1 `Algebra`

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

- **Category mismatch of `QuadraticFormula`:** `QuadraticFormula` ("characterizing all real or
  complex solutions of $ax^2 + bx + c = 0$ with $a$ nonzero") is a root-finding formula for a
  quadratic equation rather than an expression-rewriting equivalence on the same footing as
  `LinearRewriting` or `ExponentialRewriting`.

- **Combinatorial identity placement:** `BinomialCoefficientSymmetry` and `PascalIdentity` are
  identities on `BinomialCoefficient` (which lives in `Combinatorics > CombinatorialEnumeration`),
  sitting as flat top-level siblings of `LinearRewriting` and `SystemRewriting`.

- **Suggestion (`ONT-S2`, `ONT-S3`, `ONT-S5`):**

  - Group polynomial/rational rewriting (`PolynomialDivision`, `PartialFractionDecomposition`,
    `AlgebraicFactorization`) and summation/binomial identities (`BinomialTheorem`,
    `BinomialCoefficientSymmetry`, `PascalIdentity`, `FiniteArithmeticSum`, `FiniteGeometricSum`)
    under intermediate specialization families, and review whether `QuadraticFormula` belongs
    under `AlgebraicConstraints` / `EquationSolving` or `QuadraticRewriting`.

#### 4. `AlgebraicFunctions` (`FunctionTypes` and `NumericFunction`):

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
  `NumericFunction`.

---

### 2.2 `Analysis`

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

### 2.3 `Arithmetic`

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

### 2.4 `Calculus`

#### 1. `CalculusApproximation` (Methods mixed with error bounds, and `LinearApproximation` vs. `TaylorPolynomialApproximation`):

- The 9 `partOf` children of `CalculusApproximation` mix **approximation procedures/models**
  (`LinearApproximation`, `TaylorPolynomialApproximation`, `NewtonMethod`, `EulerMethod`,
  `NumericalDifferentiation`, `NumericalIntegration`) with **error-bound theorems**
  (`AlternatingSeriesRemainderBound`, `QuadratureErrorBounds`, `TaylorRemainderBound`).

- Furthermore, `LinearApproximation` ($f(a) + f'(a)(x-a)$) is the first-order special case of
  `TaylorPolynomialApproximation` ($\sum_{k=0}^n \frac{f^{(k)}(a)}{k!}(x-a)^k$), yet sits as an
  unlinked `partOf` sibling (`ONT-S2`).

#### 2. `CurveCalculus` and `IntegralApplications` (Asymmetric grouping and deferred area boundary):

- **Asymmetric intermediate organizer (`ONT-S1`, `ONT-S3`):** Under `CurveCalculus`, scalar
  parametric and polar curve descriptors (`ArcLengthIntegration`, `ParametricAreaIntegration`,
  `ParametricDifferentiation`, `PolarAreaIntegration`) sit directly as `partOf` children of
  `CurveCalculus`, whereas vector curve concepts are grouped under an intermediate `partOf`
  organizer `VectorCurveCalculus` (`CurveMotion`, `VectorCurveDifferentiation`,
  `VectorCurveIntegration`).

- **Deferred polar-area specialization (`ONT-D4`, `ONT-S2`, `ONT-S5`):** `AreaIntegration`
  requires integrals of nonnegative slice lengths. `PolarAreaIntegration` uses the angular
  sector-area density $r(\theta)^2/2$, rather than a slice length, with intervals and multiplicity
  chosen for the intended region. Review that defining boundary and orientation/multiplicity
  conditions before adding the proposed specialization. Both definitions and placements remain
  unchanged.

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

### 2.5 `Combinatorics`

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

### 2.6 `FormalMathematics`

#### 1. `ExpressionStructure` (`RootIndex` vs. `Operand`, piecewise components, and `Variable` axes):

- **Deferred `RootIndex` vs. `Operand` (`ONT-D4`, `ONT-S2`, `ONT-S3`):** `Operand` requires an
  explicit input role determined by written structure, while `RootIndex` includes the implicit
  index two in square-root notation. An explicit radical index can match that input role, but
  an omitted index does not satisfy the current explicit-input boundary. Review the explicit/
  implicit distinction before adding the proposed specialization; both definitions and the
  current `RootIndex partOf ExpressionStructure` placement remain unchanged.

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

### 2.7 `Geometry`

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

#### 2. `ThreeDimensionalObjects` (`SolidOfRevolution`, `Cone`, `Cylinder`, and `Sphere`):

- **`ThreeDimensionalObjects` (`SolidOfRevolution` vs. `Cone`, `Cylinder`, `Sphere`, `ONT-S2`, `ONT-S3`):**
  Under `ThreeDimensionalObjects`, `Polyhedron` specializes into `Prism` (`RectangularPrism` ->
  `Cube`) and `Pyramid`, whereas `SolidOfRevolution` sits as a leaf `partOf` sibling alongside
  `Cone`, `Cylinder`, and `Sphere`—even though right circular cones, circular cylinders, and
  spheres are solids of revolution.

#### 3. `Polygon` (`Triangle` and `Quadrilateral` specialization hierarchies, `ONT-S2`, `ONT-S3`):

- **`Triangle` (`specializes` children flatten two orthogonal axes):**

  - Flattens **angle classification** (`AcuteTriangle`, `RightTriangle`, `ObtuseTriangle`) and
    **side-length classification** (`IsoscelesTriangle`, `ScaleneTriangle`) into a single
    5-sibling list. `EquilateralTriangle` is nested under `IsoscelesTriangle` and `AcuteTriangle`.

- **`Quadrilateral` (inclusive `Trapezoid` tension):**

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
  concepts (`CoordinateDistance`, `Slope`, `ComplexArithmeticGeometry`).

---

### 2.8 `GraphTheory`

#### 1. `GraphFoundations` (Single-specialization `GraphStructure`):

- **Under-populated `GraphStructure` (`ONT-S3`):** `GraphStructure` has only one specialization
  (`CompleteGraph specializes GraphStructure`), with no sibling graph families (such as trees,
  bipartite graphs, or directed/undirected graph classes).

---

### 2.9 `IntuitiveMathematics`

#### 1. `CollectionSense > DivisionOfCollections` (Remaining parity boundary and partition link):

- **Remaining definition conflict (`ONT-S2`, `ONT-D4`):** `DivisionOfCollections` requires an
  exact equal partition, but `UnevenDivisibility` still specializes it while explicitly leaving
  one object undistributed. Keep the concrete collection meaning distinct from the numerical
  remainder cases now represented by `PerfectDivisibility` and `ImperfectDivisibility` under
  `DivisibilityRules`.

- **Open parity consolidation (`ONT-D1`, `ONT-D4`, `ONT-E1`, `ONT-W2`):** `EvenDivisibility` and
  `UnevenDivisibility` currently describe a concrete two-group sharing model; `IntegerParity`
  describes the even/odd character of all integers and its behavior under operations. Purely
  numerical even/odd versions would duplicate `IntegerParity` with the relevant `EvenNumbers`
  or `OddNumbers` context. Decide whether the concrete model merits a distinct concept before
  retiring, renaming, or reparenting these descriptors. A candidate `ParityByEqualSharing` could
  cover both outcomes in one method concept: eight objects split into two groups of four, or
  seven objects into two groups of three with one left over. Review existing annotations individually:
  finding group sizes may also involve division, and a leftover-object example does not satisfy
  the exact `DivisionOfCollections` definition. Review `ParityTest expands EvenDivisibility`
  and `UnevenDivisibility contradicts EvenDivisibility` with any consolidation.

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

- **`MeasuringObjects` vs. `MeasuringTime` (`ONT-S3`):** `MeasuringLength`, `MeasuringVolume`,
  and `MeasuringWeight` specialize `MeasuringObjects`, while `MeasuringTime` sits one tier higher
  as a `partOf` sibling of `MeasuringObjects` and `MeasuringWithUnits`.

- **`ShapePartWholeRelations` (`ONT-S1`, `ONT-S3`):** Pairs `ShapeDecomposition` and
  `ShapeSynthesis` (part-whole composition/decomposition operations) with `ShapeReflection`
  ("Understanding reflective symmetry as a defining property of a shape's form..."), which is an
  intrinsic symmetry property of a shape (`ShapeIdentity` / `SymmetryRelation`).

---

### 2.10 `LinearAlgebra`

#### 1. `VectorAlgebra` and `MatrixAlgebra`:

- **`VectorAlgebra` flat sibling mix (`ONT-S1`, `ONT-S3`):** Mixes abstract vector-space
  concepts (`Basis`, `LinearCombination`, `LinearIndependence`, `LinearSpan`), Euclidean metric
  properties (`VectorDirection`, `VectorMagnitude`, `VectorOrthogonality`, `OrthonormalBasis`),
  coordinate representation (`VectorComponents`), and an ineligible operation organizer
  (`VectorArithmetic`) in a single 9-child `partOf` list.

- **`DeterminantScaling` placement (`ONT-S3`):** `DeterminantScaling` sits under `LinearMaps`
  while `MatrixDeterminant` sits under `MatrixAlgebra` with no structural link between them.

---

### 2.11 `Logic`

#### 1. `PropositionalLogic` (`LogicalEquivalence` vs. truth-functional connectives):

- Four of the five `partOf` children of `PropositionalLogic` (`LogicalConjunction`,
  `LogicalDisjunction`, `LogicalImplication`, `LogicalNegation`) are **truth-functional
  connectives / compound statement forms**, whereas the fifth (`LogicalEquivalence`, with
  `ContrapositionEquivalence` and `DeMorganLaws`) is a **meta-logical equivalence relation and
  law family** between statements (`ONT-S3`).

---

### 2.12 `NumberTheory`

#### 1. `IntegerDivisibility` (Level mixing):

- **Suggestion (`ONT-S3`):** Separate divisibility concepts (`FactorsAndMultiples`,
  `GreatestCommonDivisor`, `LeastCommonMultiple`, `Coprimality`, `IntegerParity`) from division/GCD
  algorithms and lemmas (`EuclideanDivision`, `EuclideanAlgorithm`, `BezoutIdentity`,
  `CoprimeDivisibilityLemma`).

#### 2. `NumberSystems` (Complex-number components mixed with general number-system relations):

- Five of the seven `partOf` children of `NumberSystems` (`ComplexArgument`,
  `ComplexConjugation`, `ComplexModulus`, `ComplexNumberStructure`, `ComplexRootStructure`) are
  **complex-number specific**, sitting as flat siblings alongside two general cross-system
  descriptors (`NumberOperationResultTypes`, `NumberSystemRelations`).

- **Suggestion (`ONT-S1`, `ONT-S3`):** Group the five complex-number descriptors under a
  complex-number parent (or make `ComplexArgument`, `ComplexConjugation`, `ComplexModulus`, and
  `ComplexRootStructure` `partOf` `ComplexNumberStructure`) so `NumberSystems` has siblings at
  the same level of generality.

#### 3. `NumberTheoreticFunctions` (Optional organizer review):

- `MultiplicativeArithmeticFunction` is now the sole direct `partOf` child of
  `NumberTheoreticFunctions`; `DivisorCount`, `DivisorSum`, and `EulersTotient` specialize that
  eligible family.

- **Optional review (`ONT-S1`, `ONT-D4`, `ONT-E7`):** Assess the usefulness of the broader
  organizer with its current single-family coverage. A single direct family is a review prompt;
  any later additions need independent educational justification. This review proposes no new
  concepts.

---

### 2.13 `Probability`

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

### 2.14 `Statistics`

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

## 3. Summary of Priority Action Items

### 1. Fix definition/specialization conflicts and missing `specializes` edges (`ONT-S2`, `ONT-D2`):

- Resolve `UnevenDivisibility`'s remaining conflict with the exact `DivisionOfCollections`
  definition, assess the two concrete divisor-two concepts against `IntegerParity`, and review the proposed
  `DivisionOfCollections specializes PartitionOfCollections`. Numerical zero/nonzero remainder
  cases now belong to `DivisibilityRules`; do not broaden the collection parent to absorb them.

- **Deferred:** Review `RootIndex`'s implicit index two against `Operand`'s explicit-input
  boundary before adding the proposed specialization or changing either definition.

- **Deferred:** Review `PolarAreaIntegration`'s angular sector-area density against
  `AreaIntegration`'s nonnegative slice-length definition, including orientation and multiplicity,
  before adding the proposed specialization or changing either definition.

### 2. Repair cross-branch misplacements (`ONT-S1`, `ONT-S3`):

- Move `MonotoneSequenceConvergenceTheorem` and `MonotoneSequenceDivergenceTheorem` out of
  `FunctionTheorems` into `SequenceAndSeriesProperties`.

- **Open:** Reconcile `FunctionDomain` (`Algebra`) with `FunctionRange` (`Analysis`).

- Relocate `NumericIdentity` out of `NumericComparison`, `ShapeReflection` out of
  `ShapePartWholeRelations`, `OneToOneFunction` out of `FunctionTypes`, and `MidpointCalculation`
  out of `GeometricCalculations`.
