# October 2026 hierarchy consolidation — design decisions

This record covers the hierarchy consolidation from v0.31.0 through the five consolidation
branches, merged in [PR #86][pr86], [#87][pr87], [#88][pr88], [#89][pr89], and [#90][pr90].
It records the final choices and the alternatives considered, including accepted no-change
decisions. It is organized by the current Area structure rather than the order of implementation.
The [chronological history](2026-10-mathematics-and-consolidation.md) supplies the timeline;
the [authored Areas](../../core-areas-math.ttl) supply the current definitions and relations.

Paths in headings describe structural location. Exact `partOf` and `specializes` assertions are
spelled out where their distinction mattered; a path alone does not imply specialization.
Multiple valid parents are retained where stated. The governing references remain
[structure](../structure.md), [descriptor meaning](../descriptors.md),
[content evidence](../content-evidence.md), and [change review](../change-review.md).

The evidence is the merged source, historical review versions, and the decisions made during
the consolidation discussion. Early changes were squash-merged, and the retained triage commit
does not preserve a separate explanation for every accepted no-change item. Where that is the
case, this record states the disposition and the supported semantic distinction without
inventing an abandoned proposal or motivation. Historical findings describe their original
snapshot, not an additional present defect.

| Structural family | Decisions |
| --- | --- |
| [Root organization](#root-organization) | Retired root and review principles |
| [Algebra](#algebra) | Operation properties, substitution, dependence, equivalence and functions |
| [Analysis](#analysis) | Discontinuities and sequence theorems |
| [Arithmetic](#arithmetic) | Operations, percentages, strategies and naming |
| [Calculus](#calculus) | Approximation, integration and derivative rules |
| [Combinatorics](#combinatorics) | Unordered selections and circular arrangements |
| [FormalMathematics](#formalmathematics) | Notation and expression roles |
| [Geometry](#geometry) | Foundations, shapes, measurement, trigonometry and coordinates |
| [GraphTheory](#graphtheory) | Walks and foundational graph families |
| [IntuitiveMathematics](#intuitivemathematics) | Collection divisibility, intervals, iteration and spatial sense |
| [LinearAlgebra](#linearalgebra) | Linear systems, vectors and determinants |
| [Logic](#logic) | Logical equivalence |
| [NumberTheory](#numbertheory) | Divisibility, complex foundations and arithmetic functions |
| [Probability](#probability) | Random variables, distributions and Markov absorption |
| [SetTheory](#settheory) | Operations, relations and set properties |
| [Statistics](#statistics) | Central tendency and inference |
| [Repository decisions](#cross-cutting-dispositions-and-repository-decisions) | Parked proposals, documentation and generated RDF |

Implementation consequences are in the [dataset adoption handover](../releases/v0.32.0-dataset-adoption.md).
Unfinished matters outside this family review are preserved in the
[working-plan archive](2026-10-working-plan-archive.md).

## Root organization

**Removed `ComputationalMathematics`.** The alternatives were to populate this otherwise bare
discipline root or retire it. Retirement was chosen: it had no relations or children to reassign,
and the existing computational methods already belonged to their mathematical domains.
Its removal did not remove those methods or introduce a replacement root. [Decision][c86]

**Retained meaningful constituent differences.** A family with one child, mixed topic roles,
uneven depth, overlapping classifications, or an ineligible organizer was treated as a review
prompt rather than an automatic defect. The final choices below use definition-preserving
specialization and truthful constituent membership, rather than making the tree visually uniform
or restoring label eligibility mechanically (ONT-S1/S2/S4/S5, ONT-E7). [Triage][triage]

## Algebra

### AlgebraicStructures

**Retained the field and supplied a six-topic core.** Instead of folding the sole
`OperationClosure` child into another family, added `IdentityElement`, `InverseElement`,
`OperationAssociativity`, `OperationCommutativity`, and `OperationDistributivity` as `partOf`
siblings. The meanings name the operation and set: identity and inverse are two-sided;
distributivity states which side or sides apply. This is a fundamentals family, not a new
catalogue of groups, rings, or fields. `AssociativeLaw`, `CommutativeLaw`, and `DistributiveLaw`
retain `partOf ArithmeticLaws` and additionally specialize the corresponding generic properties.
Arithmetic knowledge therefore inherits the applicable general operation property without
relocating arithmetic laws. [Implementation][structures]

### AlgebraicSubstitution and AlgebraicModeling

**Kept both directly under `Algebra`.** Moving substitution wholesale into equivalence
transformations, or introducing a common symbolic-practice organizer, was considered.
Generic substitution can instantiate a value rather than preserve all values of an expression,
so it does not in general establish algebraic equivalence.

Added `NumericSubstitution specializes AlgebraicSubstitution`. It replaces designated symbol
occurrences by admissible numerical values, including closed expressions such as `sqrt(2)`,
while respecting binding and domain restrictions. `SystemSubstitution` additionally specializes
`AlgebraicSubstitution` and retains `SystemRewriting`. Numeric payload and solution-preserving
system context are overlapping distinctions: a numerical substitution can be outside a system;
a system substitution can use a free-variable expression; some substitutions satisfy both.
Substitution, arithmetic evaluation, and checking relation satisfaction remain distinct.
[Decision and boundary examples][c86]

### AlgebraicConstraints

**Retained constraint systems separately from solving.** `ConstraintSystem` with its equation
and inequality specializations describes simultaneous conditions. `ConstraintSolving` describes
finding admissible assignments. Different constituent roles under `AlgebraicConstraints` did
not justify merging or reparenting them. [Accepted triage][triage]

### ExpressionBasedDependence

**Made polynomial dependence a rational-expression case.** `PolynomialExpressionDependence`
specializes `RationalExpressionDependence`, whose definition includes nonzero constant
denominators and preserves the original domain exclusions. The alternative objection used
“rational dependence” for linear dependence over the rationals; that is a different meaning
from this ontology's classification by a governing rational expression. The subsequent renames
make that distinction explicit. [Inclusion][polynomial], [renames][dependence]

| Former identifier | Final identifier |
| --- | --- |
| `AlgebraicDependence` | `ExpressionBasedDependence` |
| `RationalDependence` | `RationalExpressionDependence` |
| `PolynomialDependence` | `PolynomialExpressionDependence` |
| `AffineDependence` | `AffineExpressionDependence` |
| `QuadraticDependence` | `QuadraticExpressionDependence` |
| `ExponentialDependence` | `ExponentialExpressionDependence` |

The six renames preserved definitions and relation meanings. The umbrella remains `partOf
Algebra`; its direct specializations are rational-expression and exponential-expression
dependence. Names were clarified without creating a duplicate set of function descriptors or
adding links to `NumericFunction`.

**Added `InverseProportionalDependence specializes RationalExpressionDependence`.** Its boundary
is `y = k/x` with fixed `k != 0` and `x != 0`, including signed cases. The proposed
`PowerFunction` specialization was not added: the dependence has a general numerical domain,
whereas the existing power-function definition explicitly uses real inputs and outputs.
[Implementation][inverse]

**Kept dependence and function families distinct.** A governing expression can describe a
constraint residual; `NumericFunction` requires one numerical output per admissible input.
The following proposals were left unapproved and are now parked, not outstanding work:
additional polynomial/rational/affine/quadratic/real-exponential function families;
`DirectProportionalDependence` and `InverseProportionalDependence` specializing `NumericFunction`;
`PowerFunction` specializing `ExpressionBasedDependence`; and inverse proportional dependence
specializing `PowerFunction`. Reopen only for a demonstrated defect, not missing optional
coverage or a plausible additional link. [Final disposition][closure]

### AlgebraicEquivalence

**Kept the top name instead of `AlgebraicIdentity`.** The existing definition accommodates
both equality of expression values and preservation of constraint solution sets. “Identity”
would not describe that full boundary as clearly. The mixed forms of equivalence were accepted;
useful subfamilies refine the meaning rather than replacing it. [Decision][rewriting]

**Introduced four eligible specialization families.** `RationalRewriting specializes
AlgebraicEquivalence`; `PolynomialRewriting specializes RationalRewriting`;
`FiniteSumIdentity` and `BinomialCoefficientIdentity` specialize `AlgebraicEquivalence`.
They are concepts specialized by narrower forms, rather than constituent organizers.

- `LinearRewriting`, `QuadraticRewriting`, and `PolynomialDivision` specialize
  `PolynomialRewriting`; `PartialFractionDecomposition` specializes `RationalRewriting`.
- `FiniteArithmeticSum` and `FiniteGeometricSum` specialize `FiniteSumIdentity`.
- `BinomialCoefficientSymmetry` and `PascalIdentity` specialize `BinomialCoefficientIdentity`.
- `BinomialTheorem` specializes both `PolynomialRewriting` and `FiniteSumIdentity`.
- `BinomialSquareIdentities` additionally specializes `QuadraticRewriting`.

Rewriting preserves domain restrictions; the rational family includes constant nonzero
denominators. Redundant direct ancestor links were replaced, while distinct existing parents
and the specific definitions were retained. [Grouping][rewriting], [quadratic link][links11]

**Retained `ExponentLaws` and `ExponentialRewriting`.** General arithmetic identities and
value-preserving rewriting remain useful separate topics in their existing families; their
overlap did not establish a duplicate to remove. [Accepted triage][triage]

### AlgebraicFunctions

**Separated interpretation from geometric slope.** Added `FunctionInterpretation partOf
AlgebraicFunctions`, with `AverageRateOfChange` and `InstantaneousRateOfChange` as `partOf`
children. Both `translate FunctionSlope`; they do not specialize it. `FunctionSlope` remains
directly under `AlgebraicFunctions` and now describes geometric secant slopes and nonvertical
tangent slopes where a finite limiting slope exists. Converting the rates to slope
specializations was rejected because a real-world interpretation is not the same narrower
geometric claim. This also restored `FunctionSlope`'s direct-label eligibility by meaning,
not by an arbitrary relation conversion. [Implementation][slope]

**Added `FunctionStructure` for domain, codomain, and range.** All three are `partOf` children
of this new organizer under `AlgebraicFunctions`; `FunctionCodomain` is new. Domain moved from
the direct algebraic-functions level and range from `FunctionValueProperties`. Their existing
definitions were retained. The declared codomain is distinguished from the actually attained
range. `FunctionInterpretation` was rejected as their parent and clarified to mean generalizable
interpretations of function properties in real-world quantities and relationships.
`FunctionValueProperties` was correspondingly clarified around zeros, signs, and output bounds.
[Implementation][functionstructure]

**Retained classification axes in `FunctionTypes`.** Injectivity (`OneToOneFunction`), sequence
structure, piecewise definitions, and numerical output classify different aspects. The review
did not mandate separate parallel trees or relocating injectivity merely because the siblings
use different axes. [Accepted triage][triage]

## Analysis

### FunctionProperties > FunctionRegularity

**Added a discontinuity family rather than leaving only removable discontinuity.**
`FunctionDiscontinuity partOf FunctionRegularity` has `FunctionRemovableDiscontinuity`, new
`FunctionJumpDiscontinuity`, and new `FunctionInfiniteDiscontinuity` as specializations.
The general definition covers finite accumulation inputs, including missing domain points,
and only approaches available in the stated domain. A jump requires unequal finite limits
from both sides; infinite discontinuity requires an infinite limit on at least one available
side. These are useful named cases, not an exhaustive classification. `FunctionRegularity`
now explicitly includes discontinuity; the removable case keeps its existing definition.
[Implementation][discontinuity]

**Retained the remaining function-property organization.** The claim that `FunctionProperties`
mixed constituent and specialization children was stale: its direct children were already
constituent families. Critical points and asymptotes need not be relocated simply because one
describes candidate inputs and the other limiting geometry; their current property families
were accepted. [Accepted triage and stale-finding removal][triage]

### SequenceAndSeriesProperties > SequenceTheorems

**Added `SequenceTheorems` and moved both monotone-sequence theorems into it using `partOf`.**
This keeps `MonotoneSequenceConvergenceTheorem` and `MonotoneSequenceDivergenceTheorem` out of
the continuous-function theorem family. Alternatives were direct placement under
`SequenceAndSeriesProperties` or broadening `FunctionTheorems` to a general analysis-theorem
organizer; the dedicated sequence family was selected. [Implementation][simplebatch]

## Arithmetic

### ArithmeticOperations and ArithmeticLaws

**Kept `Factorial` directly under `ArithmeticOperations` and moved `Modulo` there from
`BaseOperations`.** The latter names addition, subtraction, multiplication, and division;
remainder extraction deserves its own operation placement. A `CompositeOperations` organizer
was not introduced: depending on other operations during execution did not establish a useful
shared family boundary. An additional `Modulo partOf ModularArithmetic` was explicitly
rejected. [Placement][moduloplacement]

**Kept modulo as a general operation.** The alternative was to narrow its definition to
integer dividends, positive divisors, and a specific negative-input convention. The final
decision leaves domains and remainder conventions to context; `EuclideanDivision` retains
its explicitly narrower integer/positive-divisor boundary. `Modulo expands Division` remains.
The proposed `integrates` links from `Factorial` to `Multiplication` and from `Modulo` to
`EuclideanDivision` were skipped and are parked proposals, not approved missing edges. [Boundary][moduloboundary],
[final disposition][closure]

**Moved `OrderOfOperations` to `FormalMathematics > ExpressionStructure`.** Operator binding
and precedence are conventions for reading expression structure, not arithmetic identities.
The three general arithmetic-law specialization links are recorded under `AlgebraicStructures`.
[Implementation][simplebatch]

### PercentageArithmetic

**Retained the organizer and added two siblings to `PercentageEquivalence`.**
`PercentageRateDetermination` finds an unknown percentage from an amount and a nonzero reference
quantity of the same kind. `PercentageRateApplication` uses a stated rate to find the amount,
or recovers the reference quantity when the rate is nonzero. Both use `partOf`.

The alternatives were changing the lone equivalence edge to specialization, removing the
organizer, or adding more percentage tasks. The chosen siblings distinguish determining a
rate from applying it. `PercentagePointDifference` was rejected as too close to the reusable
`Difference`; relative percentage change can combine difference and rate determination.
`PercentageDeterminition`, `PercentageChange`, `PercentageCalculation`, and
`PercentageApplication` were candidate wording; the two explicit “Rate” names became final.
[Initial additions][percentage], [application rename][percentagerename]

### DecimalArithmetic > DecimalStrategies

**Retained the plural organizer and used `partOf`.** `DecimalDivisorShift`,
`DecimalPointAlignment`, `DecimalRounding`, and `DecimalPadding` form its four constituents.
The latter retains `specializes DecimalEquivalence`. Removing the intermediate organizer or
making every method specialize it was considered; the user retained its plural organizational
meaning and deferred any singular-name/strategy-relation audit to an independent decision.
`DecimalPrecission` was separately corrected to `DecimalPrecision`, including its reference
from `DecimalRounding`. [Grouping][decimals], [spelling correction][precision]

### IntegerArithmetic > IntegerStrategies

**No regrouping.** Its 20 direct `partOf` methods, including four standard algorithms, remain.
Written, mental, and decomposition methods overlap, but that alone does not establish a deficit
or justify new organizers. A general strategy naming/relation audit was not performed.
[Decision][integerstrategies]

**Renamed `ZeroConcept` to `Zero` under `IntegerArithmetic` without changing meaning.**
This remains the integer-zero Area, distinct from the `NumericZero` Scope. [Rename batch][conceptnames]

### FractionArithmetic > FractionStrategies

**Added definition-preserving links.** `FractionSimplification` additionally specializes
`FractionEquivalence`; `FractionReferenceDistanceComparison` specializes
`FractionReferenceComparison`, replacing its redundant direct strategy parent.
[Implementation][simplebatch]

**Kept denominator selection as a strategy.** `LowestCommonDenominator` concerns finding the
least common multiple of the supplied positive denominators. It was not made a subtype of the
number-valued `LeastCommonMultiple` merely because that value is used by the strategy. The
family's mixture of methods was otherwise accepted. [Accepted triage][triage]

**Clarified `LowestCommonNumerator`, retaining name and relations.** Minimality concerns
positive-integer expansion of the fractions as written, using the least common multiple of
their positive integer numerators. The unreduced `4/6` and `6/9` example expands both to
`12/18`, with shared numerator 12; it does not first simplify the inputs and seek a different
minimum. [Implementation][numerator]

**No extra routine addition/multiplication descriptors.** Existing operation Areas, fraction
Scopes, equivalence, denominator-selection, and simplification concepts already express the
routine cases. No distinct missing reusable method was established. This is not a claim that
all future fraction strategies are covered. [Decision][fractioncoverage]

## Calculus

### CalculusApproximation

**Made `LinearApproximation` specialize `TaylorPolynomialApproximation`.** Its first-order
case preserves the general Taylor-polynomial meaning; the redundant direct approximation
parent was removed. Procedures and associated error bounds remain complementary constituents
of `CalculusApproximation`, rather than being reorganized solely because they have different
roles. [Link][simplebatch], [accepted triage][triage]

### IntegralCalculus and CurveCalculus

**Broadened `AreaIntegration` and added the polar specialization.** Nonnegative plane-area
contributions replace the formerly slice-length-only boundary. `PolarAreaIntegration` now
specifies ordered outer/inner radial distances and counting each region part once, illustrated
by an annular sector. It specializes `AreaIntegration` while retaining `partOf CurveCalculus`;
the parametric specialization is preserved. This resolves the original sector-area versus
slice-length conflict before adding inheritance. [Implementation][areaintegration]

**Retained scalar/vector depth and volume-method distinctions.** Different levels for scalar
and vector-valued curve methods were accepted rather than flattened. Shell integration and
disk/washer integration remain distinct constituent methods; using related geometric slices
did not establish specialization of one method by the other. [Accepted triage][triage]

### DifferentialCalculus > DifferentiationRules

**Clarified the existing organizer.** Its definition now describes the body of derivative
identities and their applicability conditions. The name, six direct `partOf` children, and
existing elementary-identity specializations remain. Converting the whole family into a
uniform specialization tree or renaming it was not required. [Implementation][differentiation]

## Combinatorics

### CombinatorialEnumeration

**Added `UnorderedSelectionCounting partOf CombinatorialEnumeration`.** The generic concept
concerns determining or interpreting selection counts independently of selection order,
with and without repetition. `BinomialCoefficient` and `StarsAndBars` were retained with
their existing relations rather than treated as exhaustive generic coverage.

Their proposed specializations of `UnorderedSelectionCounting` were not approved. A subset
count and a selection-counting task are not automatically the same claim; a separator
construction for nonnegative integer solutions requires checking the intended selection and
multiplicity interpretation. A possible bijection alone was not used to create inheritance.
These links are parked unless a concrete defect is demonstrated. [Addition][unordered],
[final disposition][closure]

**Kept `CircularPermutationCounting` in place.** It remains `partOf CombinatorialEnumeration`
and integrates `PermutationCounting` and `DivisionCountingPrinciple`. Specializing either
`PermutationCounting` or `OrderedSelectionCounting` would import linear-arrangement or
position-distinguishing meaning into arrangements identified up to rotation. [Decision][circular]

## FormalMathematics

### MathematicalNotation

**Introduced one inclusive notation parent.** `MathematicalNotation partOf FormalMathematics`
is specialized by `DerivativeNotation`, `FunctionNotation`, `IntegralNotation`, `LimitNotation`,
`MatrixNotation`, `NumberNotation`, `ProbabilityNotation`, `SetNotation`, `SummationNotation`,
and `VectorNotation`. Existing number-notation descendants retain their relations.

The initial alternative was a sibling `SymbolicNotation` or `DomainNotation` for everything
outside numeric notation. The final umbrella includes number notation because mathematical
notation also includes words and arrangements; it does not partition numeric notation away
from symbolic conventions. `FunctionNotation` moved from `AlgebraicFunctions`. Notation
concepts remain directly label-eligible, but using notation is still distinct from learning
about its conventions (ONT-D5). [Decision][c86]

### ExpressionStructure

**Kept `RootIndex` outside `Operand`.** The root index includes implicit two in square-root
notation; `Operand` requires an explicit input. The proposed specialization was rejected
without changing either definition. This is consistent with `Factor`, which also includes
implied values and remains a structural constituent. [Decision][rootindex]

**Accepted piecewise-expression roles and overlapping variable classifications.** Constituent
roles such as a branch's condition and value need not be specialized forms of a common input
role. Variable classifications along independent axes were retained rather than replaced by
parallel intermediate groups. `OrderOfOperations` moved here as recorded under Arithmetic.
[Accepted triage][triage], [precedence placement][simplebatch]

## Geometry

### GeometricFoundations and GeometricObjects

**Renamed `GeometricConcepts` to `GeometricFoundations` and clarified its remit.** It covers
basic geometric entities and ambient spaces, quantities, and parameterized descriptions.
Its constituents are `Point`, `Plane`, `Space`, `Angle`, `Vector`, and `ParametricCurve`.
`NormalVector specializes Vector`, replacing its direct constituent link to the old organizer.

`GeometricObjects > OneDimensionalObjects` now has `Line`, `Ray`, `LineSegment`, and `Arc` as
`partOf` children. The dimensional object organizer is retained. `ParametricCurve` was not
moved there solely because “curve” suggests a one-dimensional figure: its defining feature is
a parameterized description. Foundations and object families keep distinct organizing roles.
[Implementation][foundations]

**Removed redundant `Concept` suffixes without broadening the meanings.**
`AngleConcept` → `Angle`, `ArchConcept` → `Arc`, `LineConcept` → `Line`,
`PlaneConcept` → `Plane`, `PointConcept` → `Point`, `RayConcept` → `Ray`,
`SlopeConcept` → `Slope`, `SpaceConcept` → `Space`, and `VectorConcept` → `Vector`.
`ZeroConcept` → `Zero` belongs to `Arithmetic > ArithmeticSpaces > IntegerArithmetic`.
“Arch” was corrected to “Arc”;
the latter still includes portions of curved lines, not only circles. `Space` remains the
three-dimensional geometric extent; `Vector` includes the zero vector; `Slope` is a line's
slope. These are identifier cleanups, not moves to a more general mathematical sense.
[Rename batch][conceptnames]

### GeometricObjects > TwoDimensionalObjects

**Represented inclusive shape families by specialization.** `EquilateralTriangle` specializes
both `IsoscelesTriangle` and `AcuteTriangle`; its redundant direct `Triangle` link was removed.
`Square` additionally specializes `Rhombus`, retaining `Rectangle`.
`Parallelogram specializes Trapezoid` follows the inclusive trapezoid definition of at least
one parallel side pair, replacing its redundant direct `Quadrilateral` edge. The alternatives
were keeping mathematically nested shapes as flat siblings or changing inclusive meanings;
the existing definitions were preserved. Independent side-length and angle classifications
remain valid overlapping axes. [First batch][links11], [trapezoids][simplebatch],
[classification decision][triage]

### GeometricObjects > ThreeDimensionalObjects

**Made `Sphere` specialize `SolidOfRevolution`.** Its redundant direct
`partOf ThreeDimensionalObjects` link was removed. [Implementation][simplebatch]

**Kept general circular-base cone/cylinder families and introduced right/oblique forms.**
`Cone` and `Cylinder` admit circular bases in right and oblique forms. `RightCircularCone` and
`ObliqueCircularCone` specialize `Cone`; `RightCircularCylinder` and `ObliqueCircularCylinder`
specialize `Cylinder`. Only the two right circular forms additionally specialize
`SolidOfRevolution`.

The considered alternatives were making the general terms mean only right circular solids,
making them all solids of revolution, or allowing arbitrary planar bases including pyramids
and prisms. The user explicitly chose circular bases with right and oblique cases. The
`GeometricNet` example was clarified for those distinctions. [Implementation][conecylinder]

### GeometricCalculations

**Connected narrower measurements to their general quantity.** `DistanceCalculation` and
`PerimeterCalculation` specialize `LengthCalculation`; `SurfaceAreaCalculation` specializes
`AreaCalculation`. Their redundant direct `GeometricCalculations` edges were removed.
`CoordinateDistance` additionally specializes `DistanceCalculation` while retaining its
coordinate-family placement. [Measure links][simplebatch], [coordinate link][links11]

**Retained both homes for `MidpointCalculation`.** Added `partOf GeometricVisualization`
without removing `partOf GeometricCalculations`. The clarified meaning and example concern
Cartesian coordinate-plane endpoints and averaging their coordinates. Calculation and
coordinate representation both contribute genuine context. [Implementation][midpoint]

### GeometricRelations

**Retained mixed constituent topics.** `CavalieriPrinciple` and
`PerpendicularBisectorTheorem` need not acquire new intermediate organizers simply because
their siblings are relation families. Angle-pair relationships and their transversal theorem,
and `Pi` alongside circle results, remain complementary topics of their existing families.
[Accepted triage][triage]

**Clarified the existing trigonometric functions instead of adding a right-triangle family.**
`Sine`, `Cosine`, and `Tangent` retain their general definitions and relationships, including
the `TrigonometricFunction` ancestry. Definitions and examples now explicitly state the
opposite/hypotenuse, adjacent/hypotenuse, and opposite/adjacent ratios for acute angles in
nondegenerate right triangles. The existing eligible descriptors therefore express those
interpretations without duplicating function concepts or labeling the organizational parent.
[Implementation][trigratios]

### GeometricVisualization

**Retained `CartesianPlane` as an organizer.** Its clarified definition covers the foundational
structure and conventions of two-dimensional Cartesian coordinate systems. `CoordinateAxes`,
`Origin`, and `Quadrants` remain its constituents; it remains ineligible for direct labels.
Turning it into a standalone observable concept and pushing its children into
`GeometricVisualization` was rejected. The visualization family already legitimately contains
coordinate systems, plotting, representations, and geometric quantities; different roles alone
do not warrant repartitioning it. [Clarification][cartesian], [accepted triage][triage]

## GraphTheory

### GraphFoundations

**Made `GraphCycle` specialize `GraphWalk`.** The definition already describes a positive-length
closed walk with the specified distinctness conditions. The redundant direct foundations
parent was removed, while `GraphPath` retains its separate walk specialization. [Link][links11]

**Expanded `GraphStructure` with five foundational families.** Added `DirectedGraph`,
`UndirectedGraph`, `SimpleGraph`, `BipartiteGraph`, and `TreeGraph`. The definitions state
direction, loop, and edge-multiplicity boundaries and impose no finite-cardinality restriction.
`CompleteGraph specializes SimpleGraph`; `TreeGraph` specializes both `SimpleGraph` and
`BipartiteGraph`. The single existing complete-graph specialization was not itself a defect,
but this bounded foundational coverage was explicitly requested. [Implementation][graphs]

## IntuitiveMathematics

### CollectionSense

**Separated divisibility properties from interpretations of division.** Added
`DivisibilityOfCollections partOf CollectionSense`; `EvenDivisibility` and
`UnevenDivisibility` specialize it rather than `DivisionOfCollections`. Their clarified
definitions and examples concern complete pairs/two equal groups or the impossibility of
forming them with no leftover object. An odd collection can still admit exact groups of
another size: nine can divide into groups of three but not pairs.

`DivisionOfCollections` now specializes `PartitionOfCollections`, replacing its direct
`CollectionSense` parent. Its `PartitiveDivision` and `QuotativeDivision` specializations
remain. Performing an exact equal partition and deciding whether a specified equal partition
is possible are different concepts. The alternatives were broadening the exact-division
parent to remainder outcomes, merging the concrete parity concepts with `IntegerParity`, or
nesting them under numerical perfect/imperfect divisibility. The concrete collection concepts
were retained with the property parent; numerical divisibility is recorded under NumberTheory.
Existing progression and contradiction relations were retained. [Final implementation][collection]

### NumberSense

**Moved interval sets out of numeration.** `NumerationWithIntervals` became `NumberIntervals`
and is directly `partOf NumberSense`, replacing its specialization of `Numeration`.
Its definition requires every intervening value in the stated ordered number domain and gives
both real and integer examples. `BoundedIntervals` and `UnboundedIntervals` specialize it;
the former was added, and the latter was renamed from `IntervalsWithInfinity` earlier.

The alternatives were retaining the broad numeration placement, a notation-specific name,
or a set-theory parent. `NumberIntervals` names the set concept and preserves the foundational
number context without adding a second parent. The bounded/unbounded cases retain their
definitions; no infinity endpoint is treated as an ordinary finite boundary value.
[Earlier interval family][intervals], [final meaning and placement][numberintervals]

**Kept `NumericComparison` and all four constituents.** `NumericEquality`,
`NumericInequality`, `NumericOrder`, and `NumericIdentity` remain `partOf` children.
Relocating identity, converting the relations into specializations, clarifying the organizer,
or replacing “magnitude” in the order definition was not pursued. Its organizational
ineligibility is retained as an accepted result, not an unresolved defect. [Decision][comparison]

**Retained `Iteration` and `IteratedOperation`.** A proposal to consolidate into `Iteration`
was initially accepted and then explicitly withdrawn. No consolidation, new specialization,
definition change, or dataset migration was implemented. The arithmetic “single operand value”
wording and general repetition overlap remain documented without an active change request.
The historical dataset investigation found repeated-group and equal-addend uses; it did not
prove a present ontology defect. A two-equal-addend example alone is not a mandate to merge
the concepts. [Recorded reversal][iteration], [final defect threshold][closure]

### SpatialSense

**Aligned measurement names and conversion inheritance.** `MeasuringVolumes` became
`MeasuringVolume`, matching `MeasuringLength` and `MeasuringWeight`.
`UnitFactorScaling` and `UnitMagnitudeScaling` specialize `UnitConversion` rather than sitting
as direct `MeasuringWithUnits` constituents. `MeasuringTime` retains its different depth:
time measurement need not be a narrower form of measuring an object's physical attributes.
[Name][volume], [links][links11], [accepted triage][triage]

**Kept `ShapeReflection` under `ShapeIdentity > ShapePartWholeRelations`.** Its mirrored-halves
meaning supports its current position beside decomposition and synthesis. A rename,
definition change, relocation, or additional symmetry specialization was judged unnecessary;
it remains distinct from the general `Reflection` transformation and `SymmetryRelation`.
[Decision][reflection]

**Renamed `SpatialModelling` to `SpatialModeling`.** Meaning and relations were preserved;
the other naming candidates in that pass were left unchanged. [Rename][intervals]

## LinearAlgebra

### LinearSystems

**Retained the field and supplied four fundamental topics.** `MatrixSystemRepresentation`,
`MatrixRowReduction`, `LinearSystemConsistency`, and `LinearSystemSolutionSet` are its
`partOf` children. Row reduction also belongs to `MatrixAlgebra`; the solution-set concept
specializes the general `SolutionSet`.

The alternative was merging the sole-child field into matrix algebra or linear maps.
The selected coverage distinguishes representation, transformations, existence, and the full
solution set over a stated field. Representation explicitly connects `Ax = b` and `[A | b]`
with fixed unknown ordering and right-hand sides. Row operations act on whole augmented rows;
consistency is existence, and the solution-set definition includes the empty case, a particular
solution plus the homogeneous nullspace, and uniqueness. This avoids introducing separate
organizers solely for homogeneous/particular cases. [Implementation][linearsystems]

### VectorAlgebra, MatrixAlgebra, and LinearMaps

**Kept the nine vector-algebra constituents.** Representation, metric properties, operations,
and relationships are complementary field topics. Additional abstract-vector/metric/coordinate
organizers were not necessary. `OrthonormalBasis` already specializes `Basis`; its alleged
flat-sibling placement was a stale finding. [Decision][vectors], [triage][triage]

**Retained the determinant distinction.** `MatrixDeterminant` is a matrix concept;
`DeterminantScaling` is the volume/orientation effect of a linear map and already integrates
`MatrixDeterminant`. Their different field placements do not require an additional structural
link merely because the same determinant participates in both. [Accepted triage][triage]

## Logic

### PropositionalLogic

**Kept `LogicalEquivalence` beside the connectives.** Formula construction and equivalence
across all admissible interpretations are both constituent topics of propositional logic.
`ContrapositionEquivalence` and `DeMorganLaws` remain specializations. The existing definition
already distinguishes equivalence from a biconditional true in one interpretation, so neither
another organizer nor a rename was needed. [Decision][logic]

## NumberTheory

### IntegerDivisibility

**Kept numerical remainder concepts outside collection division.** `PerfectDivisibility`
and `ImperfectDivisibility` describe zero and positive remainder in Euclidean division,
including negative and zero dividends with positive integer divisors. They were first made
specializations of `EuclideanDivision`, then grouped as `partOf DivisibilityRules` in the
final organization. They do not inherit the concrete exact-partition interpretation of
`DivisionOfCollections`.

The earlier inversion relation between the two outcomes and `Modulo`'s nonzero-only translation
were removed. `Multiplication` now translates `DivisionOfCollections` for its concrete grouping
perspective. These changes distinguish numerical outcomes from operations and concrete models.
[Numerical separation][numericaldivision], [final grouping][divisibilitygroup]

**Renamed `OddAndEvenNumbers` to `ParityTest`.** It tests divisibility by two directly from
numerical representation without division. It remains distinct from `IntegerParity`, the even
or odd character represented by `2k`/`2k+1`, and from the concrete collection interpretations.
It is `partOf DivisibilityRules` beside the two remainder outcomes. [Rename][precision]

**Retained divisibility concepts, algorithms, and lemmas together.** The field legitimately
contains factors, GCD/LCM, parity, algorithms, and results. Different constituent roles did not
justify additional organizer layers. [Accepted triage][triage]

### NumberSystems > ComplexNumberFoundations

**Added a distinct foundational organizer.** `ComplexNumberStructure`, `ComplexModulus`,
`ComplexArgument`, `ComplexConjugation`, and `ComplexRootStructure` are `partOf`
`ComplexNumberFoundations`, which is `partOf NumberSystems`. This leaves the cross-system
`NumberSystemRelations` and `NumberOperationResultTypes` as its siblings.

The alternatives were keeping all five flat, putting them under `ComplexNumberStructure`,
or a more expansive complex-number-theory organizer. The chosen name covers the fundamental
structure, properties, and characteristic operations without redefining the observable
`a + bi` structure concept or making it ineligible. The existing `ComplexNumbers` is a Scope,
not a candidate Area organizer. `RootsOfUnity` retains its specialization of
`ComplexRootStructure`; notation, geometry, and theorem families retain their existing homes.
The incoming `ComplexPlane translates ComplexNumberStructure` relation and existing
`ComplexModulus expands AbsoluteNumberMagnitude` relation are preserved. [Implementation][complex]

### NumberTheoreticFunctions

**Added multiplicative-function specializations and retained the organizer.** `DivisorCount`,
`DivisorSum`, and `EulersTotient` specialize `MultiplicativeArithmeticFunction`, replacing
their direct `partOf NumberTheoreticFunctions` edges. That leaves one direct constituent family,
but this was not sufficient reason to remove the field or invent more functions. [Links][links11],
[accepted triage][triage]

## Probability

### ProbabilityFoundations and ProbabilityRules

**Kept `RandomVariable` and `RandomVariableTheory` separate.** The former remains under
`ProbabilityFoundations`, whose remit includes the outcome-to-number concept. The latter
remains `partOf Probability`, organizing distributions, dependence, and numerical summaries.
A broader shared organizer, second parent, or specialization was considered unnecessary.
[Decision][randomvariable]

**Kept `ClassicalProbability partOf ProbabilityRules`.** The descriptor gives the favorable
outcomes/total outcomes rule for a finite equally likely sample space. Treating that rule
automatically as a specialization of the complete `ProbabilityModel` was not adopted.
[Accepted triage][triage]

### RandomVariableTheory

**Made `BernoulliDistribution` specialize `BinomialDistribution`.** The single-trial
case preserves the binomial meaning; the redundant direct discrete-distribution ancestor was
removed. Moment quantities and their identities remain complementary constituents of
`RandomVariableMoments` without additional subgrouping. [Link][simplebatch],
[accepted triage][triage]

### StochasticProcesses

**Kept the useful absorption group and removed the new redundant theory layer.** The first
implementation introduced `FiniteMarkovChainTheory` beneath `StochasticProcesses`, with a
`MarkovChainAbsorption` subgroup. The user then noted that the theory organizer was the sole
child of `StochasticProcesses`. The follow-up removed `FiniteMarkovChainTheory` again; that
short-lived preview identifier is not part of the final ontology.

Seven topics remain directly `partOf StochasticProcesses`: `FiniteMarkovChain`,
`MarkovTransitionMatrix`, `MarkovStateDistribution`, `MarkovChainIrreducibility`,
`MarkovChainPeriodicity`, `StationaryDistribution`, and `FiniteMarkovConvergenceTheorem`.
`MarkovChainAbsorption` is the eighth constituent and has `AbsorptionProbability`,
`AbsorptionProbabilityEquations`, and `FiniteMarkovAbsorptionTheorem` as `partOf` children.

Putting those three topics beneath `AbsorbingMarkovChain` was not adopted: that chain
specialization has stronger reachability conditions, whereas absorption questions can have
probability zero. Its specialization of `FiniteMarkovChain` is unchanged. The new organizer
concerns finite time-homogeneous chains; the existing general `FiniteMarkovChain` definition
does not impose time homogeneity. The original audit's claim that every child already had
that restriction was corrected rather than used to narrow the general concept.
[Initial grouping][markovfirst], [final removal and structure][markovfinal]

## SetTheory

**Organized the fundamentals into three `partOf` families.** `SetOperations` contains
`SetUnion`, `SetIntersection`, `SetDifference`, `CartesianProduct`, and new `PowerSet`;
`SetComplement` retains specialization of `SetDifference`. `SetRelations` contains
`SetMembership`, `SetInclusion`, and `SetDisjointness`; new `SetEquality` specializes the
inclusive `SetInclusion`. `SetProperties` contains `SetCardinality` and `SetCountability`.
[Implementation and completeness boundary][c86]

**Separated cardinal size from countability.** `FiniteSetCardinality` and
`InfiniteSetCardinality` specialize `SetCardinality`; `EmptySetCardinality` specializes the
finite case because zero is finite. The proposed flat empty/finite/infinite sibling arrangement
was adjusted accordingly. Countability remains a sibling property, including finite sets as
well as countably infinite sets, rather than a subtype restricted to infinite cardinality.
Equal size is distinguished from equal elements, and membership from subset inclusion.

**Added only the identified fundamental gaps.** `PowerSet` includes every subset, including
the empty and original sets; equality adds mutual inclusion. Symmetric difference was left
optional because it is expressible with union and differences. Indexed families, arbitrary
unions/intersections, partitions/equivalence classes, and axiomatic set theory were outside
this bounded fundamentals pass. They are not implied missing requirements of the release.

## Statistics

### DescriptiveStatistics

**Added `CentralTendencyMeasure` as an eligible concept.** It is `partOf DescriptiveStatistics`;
`WeightedArithmeticMean`, `Median`, and `Mode` specialize it. `ArithmeticMean` specializes
`WeightedArithmeticMean`, with equal weights; `Median` retains its `Quantile` specialization.
The weighted mean and mode no longer need redundant direct descriptive-statistics parents.

The candidate generic location/central-tendency family had to accommodate categorical modes
and ties, not only numerical locations, and preserve median's quantile meaning. The selected
name and definition cover central or typical values and categories without displacing the
existing dispersion/quantile families. [Mean inclusion][simplebatch], [new family][central]

**Kept frequency descriptors in their existing family.** `FrequencyDistribution` and
`RelativeFrequency` express distributional and proportional information, not necessarily a
particular table representation. No table-only family was introduced. [Accepted triage][triage]

### StatisticalInference and StudyDesign

**Added a shared inference organizer.** `StatisticalInference partOf Statistics` contains
`StatisticalEstimation`, `HypothesisTesting`, `SamplingDistribution`, and `StandardError`
through `partOf`. The first two move from the direct statistics level; the latter two move
out of estimation. The alternative was retaining their estimation-only home or adding
duplicate parents. The shared field reflects their use in inference while preserving all
four existing definitions and eligibility states. [Implementation][inference]

**Retained the remaining estimation and study-design organization.** A single authored
specialization of `ParameterEstimation` did not establish a coverage defect. `StudyDesign`
keeps study types, sampling, bias/confounding, and question formulation as complementary
constituents; no parallel organizer tree was required by their different roles.
[Accepted triage][triage]

## Cross-cutting dispositions and repository decisions

**No active family corrections remain.** The four last discussion topics—function/dependence
coverage and links, factorial/modulo progression links, unordered-selection specializations,
and iteration consolidation—are parked. Reopening requires a conflicting definition or
authored relation, an incorrect inherited claim, or demonstrated annotation failure. Missing
optional content, overlap, a possible new link, or a preferred name is insufficient. A consumer
annotation problem must be distinguished from an ontology defect. Earlier optional strategy
and set extensions likewise carry no blanket implementation approval. [Closure][closure]

**Separated general guidance from decision history.** Specific completed design discussions
were removed from `DESIGN.md` and planning notes, including completed curriculum analyses.
General authoring rules remain in `docs/`, tooling in `DOCS.md`, brief milestones in history,
and release/adoption implications in release documentation. Detailed historical analyses
remain recoverable through Git. [Cleanup][doccleanup], [history reconstruction][history]

**Kept RDF as generated output.** Removed the checked-in root `core-ontology-math.rdf`, ignored
that root copy, and made generator defaults and documentation use fresh `dist/` outputs.
Turtle is the authored source; RDF/XML and client packages are build/release products.
This did not change ontology semantics. [Implementation][rdf]

## Sources

The linked commits record implemented graph changes or accepted review dispositions. The
[final closed review at the merge commit][finalreview] preserves the final discussion state;
the [initial triage][triage] preserves the removed no-change/stale findings. Historical wording
is evidence of the decision process, not a request to restore an obsolete proposal.

[pr86]: https://github.com/christian-bick/edugraph-ontology/pull/86
[pr87]: https://github.com/christian-bick/edugraph-ontology/pull/87
[pr88]: https://github.com/christian-bick/edugraph-ontology/pull/88
[pr89]: https://github.com/christian-bick/edugraph-ontology/pull/89
[pr90]: https://github.com/christian-bick/edugraph-ontology/pull/90
[c86]: https://github.com/christian-bick/edugraph-ontology/commit/0e493459d5a61041f6479228f6d2fc303b823fda
[percentage]: https://github.com/christian-bick/edugraph-ontology/commit/0b318f77da9bb1d8655a93de582a1b15f4a74bf2
[percentagerename]: https://github.com/christian-bick/edugraph-ontology/commit/a116c1762c430b0915d8c826f673e5b78e5b4703
[decimals]: https://github.com/christian-bick/edugraph-ontology/commit/d42e84e33ec6157f3c411116d2bb6551749acd2a
[conceptnames]: https://github.com/christian-bick/edugraph-ontology/commit/20de58ab312a7e2df48159e25c82a848aa446da8
[foundations]: https://github.com/christian-bick/edugraph-ontology/commit/c2fc224e261830ef4ffdb4b95dc7d13c2942b41c
[structures]: https://github.com/christian-bick/edugraph-ontology/commit/a48003aad934898adc5aa5cee42ab6c6b93cbf99
[linearsystems]: https://github.com/christian-bick/edugraph-ontology/commit/ccf0ab8157a4d603d9ad719fb4968cadd887854e
[numericaldivision]: https://github.com/christian-bick/edugraph-ontology/commit/addfdddbdd1f95ed1b09493f9d541aeb044e1a4f
[divisibilitygroup]: https://github.com/christian-bick/edugraph-ontology/commit/e4538126057c7622679752971ac7696a305a29de
[links11]: https://github.com/christian-bick/edugraph-ontology/commit/b844c3dc629c508135bc46173961a7c0962b7b32
[slope]: https://github.com/christian-bick/edugraph-ontology/commit/b1164a4e0da34a0cbf2571f4c0f2c0e5953ef41c
[precision]: https://github.com/christian-bick/edugraph-ontology/commit/e565728b62008ad9addb9c5e66efc8ff7842d448
[volume]: https://github.com/christian-bick/edugraph-ontology/commit/677a6b811a13122f43c92bb6c4c3df61570ee14f
[intervals]: https://github.com/christian-bick/edugraph-ontology/commit/d53f507081d2db4f2d5376ce0e8548299091fb30
[simplebatch]: https://github.com/christian-bick/edugraph-ontology/commit/6cfeefaaadcb0222be3279484895116c341c003c
[triage]: https://github.com/christian-bick/edugraph-ontology/commit/9dc58d19a98c92fbf17b0f66d01594fa7dcd1be4
[polynomial]: https://github.com/christian-bick/edugraph-ontology/commit/285b9fb6434c6a8e327a1da90d2b1f6439effd9e
[inverse]: https://github.com/christian-bick/edugraph-ontology/commit/66678e28185dfe3dc600fabfb4eef3984f43ad5c
[dependence]: https://github.com/christian-bick/edugraph-ontology/commit/d00e0db1fab8adc4ea357d7e463069745b9306e2
[rewriting]: https://github.com/christian-bick/edugraph-ontology/commit/af6a6c857f46f7076df2543eb09a6cb6744f9b6b
[discontinuity]: https://github.com/christian-bick/edugraph-ontology/commit/c9e00af7e677f0206395ae25af5e32ea5ae879e8
[functionstructure]: https://github.com/christian-bick/edugraph-ontology/commit/46145e9387f9c51a70dcf15bf8d1b46fc7cdb9d9
[moduloplacement]: https://github.com/christian-bick/edugraph-ontology/commit/5d3de898f428f231b13cbcb1d3e3fd3c1b8bb623
[integerstrategies]: https://github.com/christian-bick/edugraph-ontology/commit/9aefbbdb1bf5fa15bafde69ae14a0379ec6845bd
[numerator]: https://github.com/christian-bick/edugraph-ontology/commit/c70fb3c6cf11c06dfb48de32e467d8c781add9b3
[fractioncoverage]: https://github.com/christian-bick/edugraph-ontology/commit/f2a2f04aeceb312928095bf05cd6be46439dd8ea
[areaintegration]: https://github.com/christian-bick/edugraph-ontology/commit/0797c73f58bf5c09521b58e94d1f394315388b9e
[differentiation]: https://github.com/christian-bick/edugraph-ontology/commit/5fceeb577a3503a577b309e94adbf3f664efc274
[unordered]: https://github.com/christian-bick/edugraph-ontology/commit/1b81cfef87337a63456cb4f189647a80b9b27015
[circular]: https://github.com/christian-bick/edugraph-ontology/commit/0df7560376b8b410c37d7c198242e14bb15faf41
[rootindex]: https://github.com/christian-bick/edugraph-ontology/commit/6f072047b1edac0622877fa9cf1ada7d74f2c116
[midpoint]: https://github.com/christian-bick/edugraph-ontology/commit/30a79f25d6cea243a2c1b81dbb8d3dfde003153c
[conecylinder]: https://github.com/christian-bick/edugraph-ontology/commit/307229fae9b5a97a4f486eeb8b74b187c87e583e
[trigratios]: https://github.com/christian-bick/edugraph-ontology/commit/048ed4eb0a47442bbd1ec21a4e43df4269d462cb
[cartesian]: https://github.com/christian-bick/edugraph-ontology/commit/f24b557d9826a92ca6ea2d5ec5805764eae53764
[graphs]: https://github.com/christian-bick/edugraph-ontology/commit/d8fd69c069942187dd372bf067a51e0edcb0f96b
[iteration]: https://github.com/christian-bick/edugraph-ontology/commit/d5adac9cf1f7ed48c580deeaeed4840002b493fb
[reflection]: https://github.com/christian-bick/edugraph-ontology/commit/c96fe4a290e21bb791546a4ec02d726535e2f9fe
[comparison]: https://github.com/christian-bick/edugraph-ontology/commit/f636b420e76ebd0e2309bba0d263757559ada2e8
[vectors]: https://github.com/christian-bick/edugraph-ontology/commit/cea92ab287b6d1c7e91c4a49238d8dce8fcc3dcd
[logic]: https://github.com/christian-bick/edugraph-ontology/commit/df2e09486e83d0a9d8d633ebd47e03f6ba0f3c5a
[randomvariable]: https://github.com/christian-bick/edugraph-ontology/commit/24d7f22eeff0cac47bfeb457670a9aec49b051ab
[central]: https://github.com/christian-bick/edugraph-ontology/commit/b69ab4545ef26e312be884525ad5f8bd18f328ae
[inference]: https://github.com/christian-bick/edugraph-ontology/commit/c0cbdf7099da02d158ba786a371144e3e7523c07
[moduloboundary]: https://github.com/christian-bick/edugraph-ontology/commit/37b94ea06f522584a52d29226b44f6c17131f409
[collection]: https://github.com/christian-bick/edugraph-ontology/commit/235d4051fd03cdc14774e16c2c0a0e71e085a339
[numberintervals]: https://github.com/christian-bick/edugraph-ontology/commit/52a1ceb6fa8b4a5bb947fdbf6a0d6c25adf41a95
[complex]: https://github.com/christian-bick/edugraph-ontology/commit/220a9b8a2ecdd707886368850c27bf21c15873a1
[markovfirst]: https://github.com/christian-bick/edugraph-ontology/commit/fd2449ade69420534313a20634ac3074830be070
[markovfinal]: https://github.com/christian-bick/edugraph-ontology/commit/882361fc36b3aa3b97253301a2a00380acc9a966
[closure]: https://github.com/christian-bick/edugraph-ontology/commit/337e1ec8b3fc06094a8ace4deb356ca2d793fa01
[finalreview]: https://github.com/christian-bick/edugraph-ontology/blob/337e1ec8b3fc06094a8ace4deb356ca2d793fa01/docs/plan/core-areas-family-consistency-review.md
[doccleanup]: https://github.com/christian-bick/edugraph-ontology/commit/57f19f2f7320a6002544c010bc40c8915f7c6e1c
[history]: https://github.com/christian-bick/edugraph-ontology/commit/15a0e56a82e793e817ed91faa08bebb352a1de1d
[rdf]: https://github.com/christian-bick/edugraph-ontology/commit/e9822ea8434d4a57d1ab5c9956c20af8a50dc1a1
