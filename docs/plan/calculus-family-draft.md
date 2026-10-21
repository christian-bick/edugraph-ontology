# Calculus — school foundations to university entry

Status: implemented for review on `codex/calculus-foundations`, updated 2026-10-21;
[draft PR #74](https://github.com/christian-bick/edugraph-ontology/pull/74), not merged.
Implementation baseline: `main` at `c313e4a`, whose ontology sources match the
[Linear Algebra merge, PR #73](https://github.com/christian-bick/edugraph-ontology/pull/73), at `69f60f9`.
The full A + B + E design below is authored in [core-areas-math.ttl](../../core-areas-math.ttl).
See [implementation and adoption](#implementation-and-adoption--2026-10-20) for source effects
and validation. Earlier alternatives remain as the design rationale.
This develops [roadmap step 6](algebra-family-draft.md#6-calculus-methods--after-the-ccss-extensions).

## Recommendation and scope

Populate the **existing Calculus root** as a peer of Algebra, Analysis, LinearAlgebra,
Geometry, and NumberTheory. The identifier already exists without children; a second root
or a `partOf Analysis` edge is unnecessary. Use seven constituent families:

1. LimitMethods
2. DifferentialCalculus
3. IntegralCalculus
4. DifferentialEquations
5. CalculusApproximation
6. SeriesCalculus
7. CurveCalculus

Cover real single-variable calculus, including curves with one real parameter. The intended
upper boundary includes the first university single-variable calculus sequence, rather than
only the material required before entering university. Complex and multivariable calculus,
general differential-equation theory, and advanced real analysis remain later extensions.
This is a researched ontology implementation, not an AP syllabus clone or a claim of completed
curriculum/dataset coverage. Calculus is outside the CCSS coverage work completed so far.

Keep the established separation between **formal representation**, **mathematical properties**,
and **reusable methods and theorems**. A derivative method composes with a function's existing
type/dependence and the requested objective. Do not create QuadraticDifferentiation,
ExponentialIntegration, or a complete object-by-method product of new Areas.

### Coverage stages

| Mark | Intended coverage | Boundary |
| --- | --- | --- |
| A | School calculus foundations / introductory single-variable course | Limits, derivatives, integrals, their interpretations and applications, elementary differential equations, and numerical integral estimates. |
| B | Extended school / university entry | Improper integrals, further integration methods, Euler approximation, series and Taylor work, and parametric/polar/vector-valued curves. |
| E | First-course enrichment | Newton iteration, trigonometric substitution, integrating factors, further quadrature and error estimates, and an introduction to quantified limits. |

Stages record coverage slices, not Scopes, prerequisites, or universal grade assignments.
All three are implemented on the review branch. E makes the university-entry boundary explicit
without pretending every school calculus course includes those topics.

## Research basis

| Primary source | Evidence used | Design consequence |
| --- | --- | --- |
| [College Board: AP Calculus AB](https://apcentral.collegeboard.org/courses/ap-calculus-ab) | Eight units spanning limits, differential and integral calculus, applications, and elementary differential equations. | Include interpretation, numerical work, and differential equations alongside symbolic techniques. |
| [College Board: AP Calculus BC](https://apstudents.collegeboard.org/courses/ap-calculus-bc) | Adds curve calculus and infinite series; its stated college equivalent spans two single-variable courses. | Series, Taylor approximation, and one-parameter curves are within this draft's upper boundary. |
| [Official AP course description](https://apcentral.collegeboard.org/media/pdf/ap-calculus-ab-and-bc-course-and-exam-description.pdf) | Topic-level distinctions, including improper integration, Euler approximation, convergence tests and error bounds. | Preserve applicability conditions and distinguish knowing a theorem from executing a procedure. |
| [MIT 18.01SC, Fall 2010 syllabus](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/syllabus/) | A first-year course connecting derivatives, integration, approximation, applications and infinite processes. | Include Newton's method, broader integration methods and geometric applications as entry-level enrichment. This is an archived curriculum example, not a current admissions claim. |
| [OpenStax: Fundamental Theorem](https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus) | Differentiating accumulation and evaluating integrals through antiderivatives are distinct connections. | Retain both statements and their hypotheses in one initial theorem Area. |
| [OpenStax: improper integrals](https://openstax.org/books/calculus-volume-2/pages/3-7-improper-integrals), [Taylor series](https://openstax.org/books/calculus-volume-2/pages/6-3-taylor-and-maclaurin-series), and [separation of variables](https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations) | Convergence, remainder and solution-domain conditions. | Preserve singularity splitting, Taylor representation conditions, and equilibrium solutions lost by division. |
| [MIT 18.02SC syllabus](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/syllabus/) and [MIT 18.100A Real Analysis](https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/pages/syllabus/) | Distinct multivariable and analysis continuations. | Defer several-variable operators and deeper convergence/integration foundations; proof alone does not require a duplicate version of an elementary concept. |
| [OpenStax: differentiation rules](https://openstax.org/books/calculus-volume-1/pages/3-3-differentiation-rules), [trigonometric derivatives](https://openstax.org/books/calculus-volume-1/pages/3-5-derivatives-of-trigonometric-functions), [exponential/logarithmic derivatives](https://openstax.org/books/calculus-volume-1/pages/3-9-derivatives-of-exponential-and-logarithmic-functions), and [inverse-function derivatives](https://openstax.org/books/calculus-volume-1/pages/3-7-derivatives-of-inverse-functions) | Elementary derivative identities have domain and branch conditions distinct from rules for combining functions. | Specialize identity knowledge without creating a differentiation method for each function type. |
| [OpenStax: integration by parts](https://openstax.org/books/calculus-volume-2/pages/3-1-integration-by-parts) and [trigonometric substitution](https://openstax.org/books/calculus-volume-2/pages/3-3-trigonometric-substitution) | Repeated and cyclic reductions, and substitution with a trigonometric change of variable. | Place these narrower methods below the rule they preserve. |
| [OpenStax: maxima and minima](https://openstax.org/books/calculus-volume-1/pages/4-3-maxima-and-minima) and [derivatives and graph shape](https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph) | Local tests, interval sign arguments, and global endpoint comparisons have different conclusions. | Keep local extremum tests, sign analysis, and closed-interval optimization distinct. |
| [OpenStax: differential-equation foundations](https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations), [parametric curve calculus](https://openstax.org/books/calculus-volume-2/pages/7-2-calculus-of-parametric-curves), and [polar area and arc length](https://openstax.org/books/calculus-volume-2/pages/7-4-area-and-arc-length-in-polar-coordinates) | Solution conditions, parameter differentiation, area and traced length have distinct meanings. | Separate solution concepts from methods; preserve parameter orientation and traversal multiplicity in curve applications. |
| [OpenStax: precise limits](https://openstax.org/books/calculus-volume-1/pages/2-5-the-precise-definition-of-a-limit), [limits at infinity](https://openstax.org/books/calculus-volume-1/pages/4-6-limits-at-infinity-and-asymptotes), [sequences](https://openstax.org/books/calculus-volume-2/pages/5-1-sequences), and [UC Davis: limits of functions, Definition 6.1 and Theorem 6.6](https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch6.pdf) | Quantified function/sequence criteria, directional unbounded limits and the sequential characterization of function limits. | Retain defining criteria within limit properties and sequential equivalence within FunctionTheorems; require an accumulation point or a domain unbounded in the approached direction, and retain universal quantification over nearby inputs, late indices or approaching sequences. |

The proposed hierarchy, names, stages, and definitions below are our synthesis. Sources guide
coverage; their teaching sequence is not converted into ontology progression edges.

## Relationship with existing fields

**Calculus** supplies operations, methods, approximation and application principles.
**Analysis** retains function properties and receives reusable convergence properties and
function theorems. The fields overlap mathematically; their separate roots provide useful
educational organization, not mutually exclusive mathematical territories.

In particular, keep FunctionProperties and its existing descendants under Analysis. Keep
InstantaneousRateOfChange in its accepted FunctionSlope home. Its definition already gives
the derivative at a fixed input; do not introduce a synonymous DerivativeAtPoint.

| Existing knowledge | Reuse in this draft |
| --- | --- |
| FunctionLocalLimitBehavior, FunctionEndBehavior, FunctionAsymptotes | What limiting behavior is being established; LimitMethods supplies applicable reasoning. |
| FunctionContinuity, FunctionDifferentiability, FunctionRemovableDiscontinuity | Properties distinct from methods for checking them and theorems relating them. |
| InstantaneousRateOfChange, AverageRateOfChange | Fixed-input limiting rate and secant rate; neither is replaced by a new calculus alias. |
| FunctionMonotonicity, FunctionConcavity, FunctionCriticalPoints, FunctionStationaryPoints, FunctionInflection, FunctionExtrema | Properties/objectives composed with derivative tests. A critical point is not a guaranteed extremum. |
| NumericFunction, FunctionComposition, FunctionInversion, FunctionArithmetic, dependence descriptors | Function structure and constructions; compose with differentiation and integration knowledge. |
| AlgebraicEquivalence, AlgebraicFactorization, PolynomialDivision, AlgebraicSubstitution, TrigonometricIdentities | Reusable intermediate rewriting. Differentiating a function does not preserve its values and is not an algebraic-equivalence transformation. |
| AlgebraicModeling | Its definition already admits selecting symbolic quantities, relationships and domains; use it in calculus models when evidenced. Its structural home does not restrict all models to algebraic formulas. |
| ConstraintSolving, EquationSolving, SolutionSet, RelationSatisfaction | Reuse for admissible assignments to function-valued unknowns when the full-solution meaning is satisfied. Verifying one curve or approximating a trajectory is not finding the complete solution set. |
| NumericApproximation, DeterministicErrorBound and justification Scopes | Numeric approximation and explicit guarantees. An approximate answer does not itself establish a guaranteed error bound. |
| Sequence, GeometricSequence, FiniteGeometricSum | Term/index organization and finite results; infinite sums additionally require convergence. |
| MathematicalExpression, Equation, BoundVariable, FreeVariable, Operator, Operand, ExpressionIndex, IndependentVariable, DependentVariable | Formal objects and roles. A finite written integral or series formula is admitted by MathematicalExpression even when its meaning involves an infinite process. |
| VectorComponents, VectorMagnitude, ScalarVectorMultiplication and geometry measurements | Coordinate calculations and geometric objectives in curve calculus; retain one independent parameter. |

### Accepted repairs to existing text

These text updates are authored alongside the new families.

| Existing Area | Authored replacement or decision | Effect |
| --- | --- | --- |
| Calculus | **Definition:** The concepts and methods of change, accumulation, and approximation developed through limits, derivatives, integrals, and infinite series. **Example:** Finding a velocity from a position function; recovering net change from a rate; approximating a function by a Taylor polynomial. | Reuses the root and clarifies the full family. First constituent children change Calculus from eligible label to organizer. |
| Algebra | Keep the first sentence; replace the last with: **Limiting behavior and function regularity are organized in Analysis; differential and integral methods are organized in Calculus.** | Aligns the field description with the independent root, without reparenting any existing concepts. |
| Analysis | Keep its definition; use the example: **Examining continuity at a point, convergence of a sequence, or conditions under which a series represents a function.** | Clarifies the organizational emphasis while retaining mathematical overlap. |
| FunctionRegularity | **Definition:** Continuity, differentiability, and specified forms of integrability of functions on stated domains. Keep its existing example. | Adds the RiemannIntegrability constituent without changing its already-organizational eligibility. |
| FunctionLocalLimitBehavior | **Definition:** Limiting behavior of a real-valued function as inputs approach a finite accumulation point of its domain, distinguishing finite limits, signed infinite limits, and failure to approach a limit. The approached point is excluded and need not be in the domain; one-sided approaches require accumulation from that side. Keep its existing example. | Clarifies the defining limit conditions within the property concept while retaining its specialization and label eligibility. |
| FunctionEndBehavior | **Definition:** Limiting behavior of a real-valued function as its input tends toward positive or negative infinity through a domain unbounded in that direction, distinguishing finite limits, signed infinite limits, and failure to approach a limit. Keep its existing example. | Clarifies the domain condition and retains all finite, infinite and nonconvergent behavior cases. |

## Structural sketch

`P` denotes `partOf`; `S` denotes `specializes`. The detailed placement tables are authoritative.
Every field organizer uses constituent children; specializations occur only below eligible
concepts and never return to constituent children. The five requested families are shown in
full below; other branches remain abbreviated, with their complete placements in the tables.

```text
Calculus                                      existing independent root
├── P LimitMethods
├── P DifferentialCalculus
│   ├── P DerivativeFunction
│   │   └── S HigherOrderDerivative
│   ├── P Differentiation
│   │   ├── S FirstPrinciplesDifferentiation
│   │   ├── S ImplicitDifferentiation
│   │   └── S LogarithmicDifferentiation
│   ├── P DifferentiationRules
│   │   ├── P ElementaryDerivativeIdentities
│   │   │   ├── S ConstantDerivativeIdentity
│   │   │   ├── S PowerDerivativeIdentity
│   │   │   ├── S ExponentialDerivativeIdentity
│   │   │   ├── S LogarithmicDerivativeIdentity
│   │   │   ├── S TrigonometricDerivativeIdentities
│   │   │   └── S InverseTrigonometricDerivativeIdentities
│   │   ├── P DerivativeLinearity
│   │   ├── P ProductRule
│   │   ├── P QuotientRule
│   │   ├── P ChainRule
│   │   └── P InverseFunctionDerivativeRule
│   └── P DerivativeApplications
│       ├── P DerivativeSignAnalysis
│       │   ├── S FirstDerivativeMonotonicityTest
│       │   ├── S SecondDerivativeConcavityTest
│       │   └── S SecondDerivativeInflectionTest
│       ├── P DerivativeExtremumTest
│       │   ├── S FirstDerivativeExtremumTest
│       │   └── S SecondDerivativeExtremumTest
│       ├── P ClosedIntervalExtremumMethod
│       ├── P RelatedRates
│       └── P DerivativeOptimization
├── P IntegralCalculus
│   ├── P IntegrationMethods
│   │   ├── P SubstitutionIntegration
│   │   │   └── S TrigonometricSubstitution
│   │   ├── P IntegrationByParts
│   │   │   └── S RepeatedIntegrationByParts
│   │   │       └── S CyclicIntegrationByParts
│   │   ├── P IntegrationByPartialFractions
│   │   └── P SymmetryIntegration
│   │       ├── S EvenFunctionIntegralReduction
│   │       └── S OddFunctionIntegralCancellation
│   └── P IntegralApplications
│       └── P CrossSectionIntegration
│           └── S DiskWasherIntegration
├── P DifferentialEquations
│   ├── P DifferentialEquationSolution
│   │   └── S EquilibriumSolution
│   ├── P InitialValueProblem
│   ├── P SlopeField
│   ├── P DifferentialEquationMethods
│   │   ├── P SeparationOfVariables
│   │   └── P FirstOrderLinearIntegratingFactor
│   └── P AutonomousDifferentialEquationModel
│       ├── S ExponentialDifferentialEquationModel
│       └── S LogisticDifferentialEquationModel
├── P CalculusApproximation
│   └── P NumericalIntegration                 also S NumericApproximation
│       ├── S RectangleQuadrature
│       ├── S TrapezoidalRule
│       └── S SimpsonRule
├── P SeriesCalculus
│   └── P SeriesConvergenceTests
└── P CurveCalculus
    ├── P ParametricDifferentiation
    │   └── S ParametricSecondDerivative
    ├── P ParametricAreaIntegration           also S AreaIntegration
    ├── P ArcLengthIntegration
    ├── P PolarAreaIntegration
    └── P VectorCurveCalculus
        ├── P VectorCurveDifferentiation
        ├── P VectorCurveIntegration
        │   ├── S VectorCurveAntidifferentiation
        │   └── S VectorCurveDefiniteIntegration
        └── P CurveMotion

Analysis                                      existing independent root
├── P FunctionProperties                      existing
│   └── P FunctionRegularity                  existing
│       └── P RiemannIntegrability
├── P FunctionTheorems
│   ├── P MeanValueTheorem
│   │   └── S RollesTheorem
│   └── P SequentialLimitCriterion
└── P SequenceAndSeriesProperties
    ├── P SequenceConvergence
    ├── P SeriesConvergence
    │   ├── S AbsoluteSeriesConvergence
    │   └── S ConditionalSeriesConvergence
    └── P PowerSeriesStructure

FormalMathematics                             existing root
├── P LimitNotation
├── P DerivativeNotation
├── P IntegralNotation
├── P SummationNotation
└── ... Equation                              existing specialization family
        └── S DifferentialEquation

AlgebraicEquivalence                          existing eligible concept
└── S PartialFractionDecomposition
GeometricConcepts                            existing organizer
└── P ParametricCurve
GeometricVisualization                       existing organizer
└── P PolarCoordinateRepresentation
```

NumericalIntegration has a subject home plus a genuine numerical-approximation specialization,
as MatrixOperationIdentities already has a subject home plus an equivalence specialization.
Its quadrature children specialize it; none is a constituent after that specialization.
LinearApproximation and TaylorPolynomialApproximation concern functions and are not automatically
specializations of NumericApproximation. Evaluating those approximants numerically may involve both.

### 2026-10-20 — requested family expansion

The expansion added 25 Areas to the design and retained all 105 earlier candidates. The changes
distinguish mathematical knowledge without creating every possible function-type, equation-type,
method and application combination:

| Requested family | Constituent organization | Meaningful specializations |
| --- | --- | --- |
| IntegrationMethods | Substitution, parts, partial fractions and symmetry remain distinct constituents. | Trigonometric substitution narrows substitution; repeated and cyclic parts preserve integration by parts; even reduction and odd cancellation narrow symmetry integration. |
| DifferentiationRules | Elementary identities sit alongside linearity, product, quotient, chain and inverse rules. | Six identity families distinguish their formulas and domain conditions, rather than naming a method for each function type. |
| DifferentialEquations | Solutions, initial conditions, slope fields, exact methods and autonomous models have separate roles. | EquilibriumSolution narrows solution; proportional and logistic models narrow autonomous-rate modeling. |
| CurveCalculus | Parameter differentiation, area, length and vector calculus remain distinct; vector calculus separates derivatives, integrals and motion. | Second parameter derivatives narrow the derivative method; vector antiderivatives and definite integrals narrow vector integration. |
| DerivativeApplications | Interval sign analysis, local extremum tests, global extrema, related rates and optimization remain distinct. | Sign analysis specializes by derivative evidence and conclusion; local extremum tests specialize by their criterion. |

All five families have constituent children followed, where justified, by specialization.
No parent mixes the two child roles, and no specializing descendant gains constituent children.
Unsplit leaves are deliberate: a different quantity, function type or application setting is
not sufficient reason to create another concept.

These refinements were made before implementation, so they do not migrate published descendants.
ArcLengthIntegration changed its planned home from IntegralApplications to CurveCalculus.
VectorCurveCalculus became an organizer; its formerly proposed progression edge was replaced by
edges on the relevant derivative and integral concepts. These relationships are now authored.

## Candidate definitions and examples

Each row names a new Area. `P: X` means `partOf X`; `S: X` means `specializes X`.
An organizer's role follows from its constituent children, not from the plural form of its name.
Formulas below use real variables and the stated domains. Trigonometric calculus uses radians.

### Organizers

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| LimitMethods | A | P: Calculus | Rules and comparison principles for establishing limits of real functions. | Establishing a quotient limit after cancellation; bounding an oscillating expression between two functions with the same limit. |
| DifferentialCalculus | A | P: Calculus | Derivatives, the operations and rules that determine them, and their use in studying change. | Forming the derivative of x^3 and using its sign to study change. |
| DifferentiationRules | A | P: DifferentialCalculus | Identities relating derivatives to the elementary functions and operations from which a function is formed. | Using a product rule or chain rule. |
| DerivativeApplications | A | P: DifferentialCalculus | Relationships that use derivatives to analyze function behavior, constrained extrema, and linked rates. | Testing a stationary point; relating the rates of change of a sphere's radius and volume. |
| IntegralCalculus | A | P: Calculus | Antiderivatives, definite accumulation, and their connections, methods, and applications. | Recovering a function from its derivative; finding signed accumulation over an interval. |
| IntegrationMethods | A | P: IntegralCalculus | Techniques for evaluating integrals or finding antiderivatives through justified transformations. | Changing variables in an integral; applying integration by parts. |
| IntegralApplications | A | P: IntegralCalculus | Relationships that express geometric and average quantities through definite integrals. | Finding a region's area or the volume of a solid from its cross sections. |
| DifferentialEquations | A | P: Calculus | Relationships constraining unknown functions through their derivatives, their solution families, and accompanying conditions. | Studying y' = 2y with or without y(0) = 3. |
| CalculusApproximation | A | P: Calculus | Derivative-, integral-, and series-based approximations, their numerical procedures, and their error guarantees. | Linearizing a function; estimating an integral by trapezoids. |
| SeriesCalculus | B | P: Calculus | Summation, convergence methods, and function representations using infinite numerical and power series. | Summing a geometric series; representing an exponential function by its Taylor series. |
| SeriesConvergenceTests | B | P: SeriesCalculus | Conditions that establish convergence or divergence of numerical series. | Comparing a positive series with a convergent p-series. |
| CurveCalculus | B | P: Calculus | Differential and integral relationships for curves described by one real parameter. | Finding velocity along a plane curve or area enclosed by a polar curve. |
| FunctionTheorems | A | P: Analysis | Theorems relating real-function limits, continuity, differentiability, values, and extrema under stated hypotheses. | Guaranteeing a zero by intermediate values; relating a derivative to a secant slope. |
| SequenceAndSeriesProperties | B | P: Analysis | Limit behavior and convergence classifications of numerical sequences and series. | Distinguishing a convergent sequence of terms from convergence of their sum. |

### Limits and foundational properties

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| LimitLaws | A | P: LimitMethods | Rules transferring finite function limits through sums, products, quotients with nonzero limiting denominator, and composition with a function continuous at the limiting value. | From f(x) -> 2 and g(x) -> 3, infer f(x)g(x) -> 6. |
| SqueezeTheorem | A | P: LimitMethods | The guarantee that a function bounded between two functions with the same finite limit has that limit, when the bounds hold sufficiently near the approached point or end of the domain. | From -x^2 <= x^2 sin(1/x) <= x^2, infer a limit of zero at x = 0. |
| LHopitalRule | A | P: LimitMethods | The equality of a quotient's limit in a 0/0 or infinity/infinity form with the limit of its derivative quotient when the functions are differentiable on the relevant punctured one-sided interval, the denominator derivative is nonzero there, and the derivative quotient has a finite or infinite limit. Other indeterminate forms must first be validly rewritten, and failure of the derivative quotient to have a limit is inconclusive. | lim_(x->0) (e^x - 1)/x = lim_(x->0) e^x = 1. |
| IntermediateValueTheorem | A | P: FunctionTheorems | The guarantee that a real function continuous on a closed interval takes every value between its endpoint values. | Continuity and opposite signs of x^3 + x - 1 at 0 and 1 guarantee a zero between them. |
| ExtremeValueTheorem | A | P: FunctionTheorems | The guarantee that a real function continuous on a nonempty closed bounded interval attains both a maximum and a minimum there. | x^2 on [-1, 2] attains minimum 0 and maximum 4. |
| DifferentiabilityContinuityTheorem | A | P: FunctionTheorems | The implication from existence of a finite derivative at an interior point to continuity there, without a converse guarantee of differentiability. | abs(x) is continuous at 0 but has no derivative there. |
| MeanValueTheorem | A | P: FunctionTheorems | The guarantee of an interior point c with f'(c) = (f(b)-f(a))/(b-a) for a real function continuous on [a,b] and differentiable on (a,b), with a < b. | For f(x) = x^2 on [1,3], c = 2 gives the secant slope 4. |
| RollesTheorem | A | S: MeanValueTheorem | The mean-value guarantee of an interior zero derivative when a real function is continuous on [a,b], differentiable on (a,b), a < b, and f(a) = f(b). | f(x) = x^2 - 1 has equal endpoint values on [-1,1] and f'(0) = 0. |
| RiemannIntegrability | A | P: FunctionRegularity | Existence of a proper Riemann integral for a bounded real function on a closed bounded interval, equivalently the ability to make the difference between its upper and lower partition sums arbitrarily small. | A bounded step function with one jump is Riemann integrable on [0,1]. |
| SequentialLimitCriterion | E | P: FunctionTheorems | The equivalence, for a real function at a finite accumulation point a of its domain, between having finite limit L and having f(x_n) approach L for every domain sequence with x_n != a and x_n approaching a. | For f(x) = abs(x)/x, the sequences x_n = 1/n and y_n = -1/n approach 0 while f(x_n) = 1 and f(y_n) = -1, ruling out a limit at 0. |

LimitLaws is reusable knowledge, while algebraic cancellation and continuity-based substitution
compose with existing rewriting and property concepts. Do not add a separate LimitByFactoring
for every algebraic technique. One-sided limits, limits at infinity and infinite behavior already
have property coverage; infinity is not a real output value.

### Limit properties and characterizations — 2026-10-21

This revision supersedes the separate LimitFoundations family introduced in the earlier PR draft
at `90fb994`. Areas already describe knowledge of properties, including their defining conditions.
Explicit quantifiers alone do not create another subject or a narrower kind of limiting behavior.
The organizer and four definitional criteria are removed; their content is retained as follows.

| Removed draft concept | Current home | Knowledge retained |
| --- | --- | --- |
| EpsilonDeltaLimitCriterion | FunctionLocalLimitBehavior | Finite limits at finite accumulation points, with epsilon-delta guarantees. |
| InfiniteLimitCriterion | FunctionLocalLimitBehavior | Signed infinite limits at finite accumulation points, including one-sided approaches. |
| LimitAtInfinityCriterion | FunctionEndBehavior | Finite or signed infinite limits through a domain unbounded in the approached direction. |
| EpsilonNSequenceLimitCriterion | SequenceConvergence | One index chosen for each tolerance that works for every later term; already present in the property's definition. |
| LimitFoundations | No replacement label | Organizational grouping removed; use the evidenced property or theorem. |

The defining formulations and useful examples remain part of those subjects:

| Property context | Defining formulation | Example |
| --- | --- | --- |
| FunctionLocalLimitBehavior: finite limit L at finite a | For each epsilon > 0 there is delta > 0 such that all domain x with 0 < abs(x-a) < delta satisfy abs(f(x)-L) < epsilon. The point a is an accumulation point of the approached domain; one-sided limits restrict both the approach and accumulation condition to that side. | For f(x) = 3x, delta = epsilon/3 guarantees abs(f(x)-3a) < epsilon whenever 0 < abs(x-a) < delta. |
| FunctionLocalLimitBehavior: signed infinite limit at finite a | For each M > 0 there is delta > 0 such that all domain x with 0 < abs(x-a) < delta satisfy f(x) > M for +infinity, or f(x) < -M for -infinity. The same accumulation and one-sided conditions apply. | For 1/x as x -> 0+, delta = 1/M gives 1/x > M whenever 0 < x < delta. |
| FunctionEndBehavior: input tends to signed infinity | Every positive output tolerance for a finite limit, or signed magnitude threshold for an infinite limit, must hold for all domain inputs beyond a sufficiently distant cutoff in the approached direction. The domain is unbounded in that direction. | For epsilon > 0, x > 1/epsilon gives abs(2 + 1/x - 2) < epsilon; for M > 0, x < -cuberoot(M) gives x^3 < -M. |
| SequenceConvergence: finite limit L | For every epsilon > 0 there is an integer N such that abs(a_n-L) < epsilon for every n >= N. N may depend on epsilon but must work uniformly for all those indices. | For a_n = 1/n, any integer N > 1/epsilon gives abs(a_n) < epsilon for every n >= N. |

The function-property definitions remain broad enough to cover failure to have a limit, and
their existing examples are retained. SequenceConvergence retains its definition and gains
the quantified example above. SeriesConvergence continues to use convergence of partial sums.

SequentialLimitCriterion remains independent knowledge: its equivalence between function limits
and convergence along every admissible approaching sequence is a theorem, now `partOf FunctionTheorems`.
That family's definition now explicitly includes limits. Checking a few sequences cannot establish
the universal condition, though incompatible image limits disprove it.

The review identified no additional reusable constructive procedure requiring a new proof-method
Area. Applying these definitions can compose with existing algebraic reasoning and an appropriate
Ability. LimitMethods retains its Calculus home. Existing property ancestry and eligibility remain
unchanged; no `partOf` children are added below their specialization branches.

### Differentiation and its applications

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| DerivativeFunction | A | P: DifferentialCalculus | The function assigning each interior input where a finite derivative exists the instantaneous rate of the original real function there. Its domain can be smaller than the original domain. | The derivative of abs(x) is -1 for x < 0 and 1 for x > 0, with 0 absent from its domain. |
| HigherOrderDerivative | A | S: DerivativeFunction | A derivative function obtained by repeated differentiation, of order at least two, on the inputs where the successive derivatives exist. | For f(x) = x^3, f''(x) = 6x and f'''(x) = 6. |
| Differentiation | A | P: DifferentialCalculus | Determining the derivative of a function with respect to a designated variable, retaining the domain on which the derivative exists. | Finding d/dx (x^3) = 3x^2. |
| FirstPrinciplesDifferentiation | A | S: Differentiation | Determining a derivative by taking the limit of the difference quotient as the input increment approaches zero. | ((x+h)^2-x^2)/h = 2x+h for h != 0, giving derivative 2x. |
| ImplicitDifferentiation | A | S: Differentiation | Differentiating a relation satisfied by a locally differentiable unknown function, using the chain rule and solving for the derivative where the resulting relation permits it. | From x^2+y^2 = 1 obtain y' = -x/y where y != 0 on a differentiable branch. |
| LogarithmicDifferentiation | E | S: Differentiation | Determining derivatives by differentiating ln(abs(f)) for a nonzero function on an interval of fixed sign, including positive-base variable powers, and then recovering the original derivative. | For x > 0, differentiating ln(x^x) = x ln(x) gives (x^x)' = x^x(ln(x)+1). |
| ElementaryDerivativeIdentities | A | P: DifferentiationRules | Identities giving derivatives of elementary real functions on their differentiability domains, with trigonometric arguments measured in radians. | (x^3)' = 3x^2; (ln(x))' = 1/x for x > 0; (sin(x))' = cos(x). |
| ConstantDerivativeIdentity | A | S: ElementaryDerivativeIdentities | The identity that the derivative of a constant with respect to the designated variable is zero. | d/dx 7 = 0. |
| PowerDerivativeIdentity | A | S: ElementaryDerivativeIdentities | The identity (x^r)' = r x^(r-1) for fixed real r and x > 0, with extensions to other real inputs where the power and its derivative exist. | d/dx sqrt(x) = 1/(2sqrt(x)) for x > 0; d/dx x^3 = 3x^2 for every real x. |
| ExponentialDerivativeIdentity | A | S: ElementaryDerivativeIdentities | The identity (a^x)' = a^x ln(a) for a fixed positive base, including (e^x)' = e^x. | d/dx 2^x = 2^x ln(2). |
| LogarithmicDerivativeIdentity | A | S: ElementaryDerivativeIdentities | The identities (log_a(x))' = 1/(x ln(a)) for x > 0, a > 0 and a != 1, and (ln(abs(x)))' = 1/x for x != 0. | d/dx log_10(x) = 1/(x ln(10)) for x > 0. |
| TrigonometricDerivativeIdentities | A | S: ElementaryDerivativeIdentities | Derivative identities for sine, cosine, tangent and their reciprocal functions on their differentiability domains, with arguments measured in radians. | (sin(x))' = cos(x); (cos(x))' = -sin(x); (tan(x))' = sec(x)^2 where cos(x) != 0. |
| InverseTrigonometricDerivativeIdentities | A | S: ElementaryDerivativeIdentities | Derivative identities for specified real inverse trigonometric branches on the interiors of their differentiability domains. | (arcsin(x))' = 1/sqrt(1-x^2) for -1 < x < 1; (arctan(x))' = 1/(1+x^2) for every real x. |
| DerivativeLinearity | A | P: DifferentiationRules | The identity equating the derivative of a constant linear combination of differentiable functions with the same linear combination of their derivatives. | (3f - 2g)' = 3f' - 2g'. |
| ProductRule | A | P: DifferentiationRules | The identity (fg)' = f'g + fg' at inputs where both real functions are differentiable. | (x^2 sin(x))' = 2x sin(x) + x^2 cos(x). |
| QuotientRule | A | P: DifferentiationRules | The identity (f/g)' = (f'g - fg')/g^2 where f and g are differentiable and g is nonzero. | (x/(x+1))' = 1/(x+1)^2 for x != -1. |
| ChainRule | A | P: DifferentiationRules | The identity (f composed with g)'(x) = f'(g(x))g'(x) where g is differentiable at x and f is differentiable at g(x). | (sin(x^2))' = 2x cos(x^2). |
| InverseFunctionDerivativeRule | A | P: DifferentiationRules | The identity (f^(-1))'(f(a)) = 1/f'(a) for a locally invertible continuously differentiable real function with nonzero derivative at a. | Inverting the exponential derivative gives (ln(x))' = 1/x for x > 0. |
| DerivativeSignAnalysis | A | P: DerivativeApplications | Using first- or second-derivative signs on intervals to establish monotonicity, concavity, or changes of concavity. | For x^3, the nonnegative first derivative establishes nondecrease; the second derivative changes from negative to positive at 0. |
| FirstDerivativeMonotonicityTest | A | S: DerivativeSignAnalysis | Establishing increase or decrease from the sign of a first derivative throughout an interval, with nonnegative or nonpositive signs guaranteeing the respective non-strict property. | For e^x, a positive derivative proves strict increase; a zero derivative throughout an interval implies constancy there. |
| SecondDerivativeConcavityTest | A | S: DerivativeSignAnalysis | Establishing concavity from the sign of a second derivative throughout an interval, with positive and negative signs giving strict upward and downward concavity respectively. | For x^2, f''=2 gives strict upward concavity; for 3x+1, f''=0 gives both non-strict concavity inequalities. |
| SecondDerivativeInflectionTest | A | S: DerivativeSignAnalysis | Establishing an inflection at a continuous point from opposite strict signs of the second derivative on the two neighboring intervals. A zero or nonexistent second derivative at the point alone is insufficient. | For x^3, f''=6x changes sign at 0, establishing an inflection; for x^4, f''=12x^2 does not. |
| DerivativeExtremumTest | A | P: DerivativeApplications | Using local derivative conditions to establish or rule out a local extremum at a candidate point, distinguishing inconclusive tests from absence of an extremum. | A derivative sign change from negative to positive establishes a local minimum; a zero second derivative alone leaves the classification open. |
| FirstDerivativeExtremumTest | A | S: DerivativeExtremumTest | Classifying a candidate local extremum of a continuous function by first-derivative signs on the two neighboring intervals. | The derivative of x^2 changes from negative to positive at 0, giving a local minimum. |
| SecondDerivativeExtremumTest | A | S: DerivativeExtremumTest | The local-extremum criterion that a positive second derivative at a stationary point of a twice continuously differentiable real function guarantees a local minimum, and a negative one a local maximum. A zero second derivative is inconclusive. | x^4 and x^3 both have first and second derivatives zero at 0, but only x^4 has an extremum there. |
| ClosedIntervalExtremumMethod | A | P: DerivativeApplications | Finding absolute extrema of a continuous real function on a closed bounded interval by comparing endpoint values with values at all interior critical points. | For f(x) = x(2-x) on [0,3], compare f(0)=0, f(1)=1 and f(3)=-3. |
| RelatedRates | A | P: DerivativeApplications | Relating the instantaneous rates of quantities constrained by an equation by differentiating that relationship with respect to their shared parameter. | Differentiating V = 4pi r^3/3 with respect to time gives dV/dt = 4pi r^2 dr/dt. |
| DerivativeOptimization | A | P: DerivativeApplications | Reducing a constrained extremum problem to an admissible function domain and using derivative information with boundary checks to identify the required optimum. | Among positive rectangles of perimeter 20, maximize A(x)=x(10-x) for 0 < x < 10 to obtain a square of side 5. |

DerivativeFunction identifies the new correspondence and its domain; Differentiation concerns
determining it. A task asking only for f'(3) need not demonstrate the full derivative-function
concept. ElementaryDerivativeIdentities has narrower identity children; each preserves the
derivative-identity meaning without requiring the whole table. Knowing PowerFunction and the
general Differentiation concept does not itself supply the power derivative identity. Function
types still compose with methods; there are no PolynomialDifferentiation or SineChainRule copies.

DerivativeSignAnalysis specializes by the derivative evidence and conclusion, while
DerivativeExtremumTest specializes by the local classification mechanism. ClosedIntervalExtremumMethod
retains its separate global meaning, including endpoint checks. RelatedRates and
DerivativeOptimization remain reusable leaves rather than splitting into application settings.

### Integral concepts, methods and applications

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| Antidifferentiation | A | P: IntegralCalculus | Recovering functions with a prescribed derivative on a connected interval, where any two antiderivatives differ by a constant. Disconnected domains can require independent constants on their components. | The antiderivatives of 2x on the real line are x^2 + C. |
| RiemannSum | A | P: IntegralCalculus | A finite sum of sampled function values multiplied by the widths of their partition subintervals, used to approximate accumulation and define a proper integral through refinement. | The right-endpoint sum for f(x)=x on [0,1] with n equal pieces is sum_(k=1)^n (k/n)(1/n). |
| DefiniteIntegral | A | P: IntegralCalculus | The signed accumulation of a Riemann-integrable real function over an oriented bounded interval, defined by the common limit of its tagged partition sums as the largest subinterval width tends to zero. | integral_(-1)^1 x dx = 0, although the total area between the graph and axis is 1. |
| AccumulationFunction | A | P: IntegralCalculus | The function A(x)=integral_a^x f(t) dt formed by holding a starting input fixed and varying an endpoint where the intervening integrals exist. | For f(t)=2t and a=1, A(x)=x^2-1. |
| FundamentalTheoremOfCalculus | A | P: IntegralCalculus | The identities connecting continuous real f on [a,b] with the accumulation A(x)=integral_a^x f(t) dt through A'=f at interior inputs and with any antiderivative F through integral_a^b f(x) dx=F(b)-F(a). | d/dx integral_0^x cos(t) dt = cos(x); integral_0^1 2x dx = 1. |
| DefiniteIntegralProperties | A | P: IntegralCalculus | Linearity, interval additivity, reversal of bounds, and order comparison for proper definite integrals of integrable real functions. | integral_0^2 f = integral_0^1 f + integral_1^2 f; integral_b^a f = -integral_a^b f. |
| ImproperIntegral | B | P: IntegralCalculus | Integration over an unbounded interval or past an unbounded integrand by taking limits of proper integrals. Each side of every interior singularity and each unbounded end must converge separately for a finite ordinary improper integral. | integral_1^infinity x^(-2) dx = 1, whereas integral_1^infinity 1/x dx diverges. |
| SubstitutionIntegration | A | P: IntegrationMethods | Changing variables in an integral using the chain rule in reverse, with the differential factor, transformed bounds and admissible domain preserved. | With u=x^2, integral_0^1 2x cos(x^2) dx = integral_0^1 cos(u) du = sin(1). |
| IntegrationByParts | B | P: IntegrationMethods | Rewriting an integral through the identity integral u v' = uv - integral u'v, reversing the product rule under conditions making the stated derivatives and integrals valid. | integral x e^x dx = x e^x - e^x + C. |
| RepeatedIntegrationByParts | B | S: IntegrationByParts | Reapplying integration by parts to successive residual integrals to simplify them or obtain a solvable relation among them. | integral x^2 e^x dx = e^x(x^2-2x+2)+C after two applications. |
| CyclicIntegrationByParts | E | S: RepeatedIntegrationByParts | Repeating integration by parts until the original integral recurs with a coefficient that permits isolating it algebraically. | Repeating integration by parts gives integral e^x cos(x) dx = e^x(cos(x)+sin(x))/2+C. |
| IntegrationByPartialFractions | B | P: IntegrationMethods | Integrating a rational function by polynomial division when needed and decomposition into simpler fraction terms over the chosen coefficient field, retaining poles and interval restrictions. | integral 1/(x(x+1)) dx = ln(abs(x)) - ln(abs(x+1)) + C on intervals avoiding -1 and 0. |
| TrigonometricSubstitution | E | S: SubstitutionIntegration | Changing the integration variable to a trigonometric expression to simplify a radical, with an interval choice that determines signs and the inverse substitution. | For -1 < x < 1, x=sin(theta) with -pi/2 < theta < pi/2 gives sqrt(1-x^2)=cos(theta). |
| SymmetryIntegration | A | P: IntegrationMethods | Evaluating or reducing proper definite integrals on symmetric intervals through reflection identities of their integrands. | integral_(-1)^1 (x^3+x^2) dx = 2 integral_0^1 x^2 dx = 2/3. |
| EvenFunctionIntegralReduction | A | S: SymmetryIntegration | Reduction of a proper definite integral of an even function on [-a,a], with a > 0, to twice its integral over [0,a]. | integral_(-2)^2 x^2 dx = 2 integral_0^2 x^2 dx = 16/3. |
| OddFunctionIntegralCancellation | A | S: SymmetryIntegration | Cancellation to zero of a proper definite integral of an odd function over [-a,a], with a > 0, by pairing reflected contributions. | integral_(-2)^2 x^3 dx = 0. |
| IntegralAverageValue | A | P: IntegralApplications | The mean value of an integrable real function over [a,b], a < b, defined as its integral divided by b-a. | The average value of x^2 on [0,3] is 3. |
| AreaIntegration | A | P: IntegralApplications | Expressing geometric area as an integral of nonnegative slice lengths, splitting the domain where boundary order changes. | The area between y=x and y=x^2 on [0,1] is integral_0^1 (x-x^2) dx = 1/6. |
| CrossSectionIntegration | A | P: IntegralApplications | Expressing a solid's volume as the integral of its cross-sectional area with respect to position along a stated axis. | Cross sections of area x^2 for 0 <= x <= 2 give volume integral_0^2 x^2 dx = 8/3. |
| DiskWasherIntegration | A | S: CrossSectionIntegration | Computing a solid of revolution's volume from circular or annular cross sections, integrating pi times the difference of squared outer and inner radii. | Rotating the region 0 <= y <= x, 0 <= x <= 1, about the x-axis gives volume integral_0^1 pi x^2 dx = pi/3. |
| CylindricalShellIntegration | E | P: IntegralApplications | Computing a solid of revolution's volume by integrating cylindrical-shell contributions of circumference times height times thickness, with radii and bounds determined by the axis. | Rotating 0 <= y <= x, 0 <= x <= 1, about the y-axis gives integral_0^1 2pi x*x dx = 2pi/3. |
| RevolutionSurfaceAreaIntegration | E | P: IntegralApplications | Computing the surface swept by a regular plane curve rotated about an axis in its plane by integrating circumference times arc-length element, with nonnegative radius and repeated coverage accounted for. | Rotating y=1, 0 <= x <= 2, about the x-axis gives lateral surface area integral_0^2 2pi dx = 4pi. |

Net change uses signed integration; total distance integrates speed, and total geometric area
uses nonnegative slice sizes. These distinctions can compose the concepts above with existing
quantity, geometry and modeling knowledge. Do not create an Area per application context such
as tank filling, employment growth or particle displacement. Weighted local contributions for
mass or work use the same integral/modeling principles with the appropriate quantities and units.

The Fundamental Theorem is not a definition of every integral. A function can be integrable
without possessing an elementary antiderivative. An ordinary improper integral is not a Cauchy
principal value: the apparent symmetric cancellation of 1/x across zero is insufficient.
The symmetry methods therefore require proper integrability; oddness alone does not establish
that an improper integral exists. TrigonometricSubstitution preserves SubstitutionIntegration's
meaning, and cyclic integration by parts preserves both repeated and ordinary integration by
parts. Partial-fraction integration stays separate from the algebraic decomposition it uses.

### Approximation and numerical methods

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| LinearApproximation | A | P: CalculusApproximation | Approximating a differentiable real function near a by f(a)+f'(a)(x-a), with an error that is small relative to x-a as x approaches a. | sqrt(4+h) is approximately 2+h/4 for small h. |
| TaylorPolynomialApproximation | B | P: CalculusApproximation | Approximating a sufficiently differentiable function near a by a finite polynomial whose coefficients are f^(k)(a)/k! through a chosen order. | Near 0, cos(x) is approximated by 1-x^2/2+x^4/24. |
| TaylorRemainderBound | B | P: CalculusApproximation | The bound abs(f(x)-T_n(x)) <= M abs(x-a)^(n+1)/(n+1)! when f has continuous derivatives through order n+1 on the interval joining a and x and its next derivative has magnitude at most M there. | Approximating e^0.1 by 1+0.1+0.1^2/2 has error at most e^0.1*0.1^3/6, less than 0.000185. |
| AlternatingSeriesRemainderBound | B | P: CalculusApproximation | The bound on the error after a partial sum of an alternating series with decreasing nonnegative term magnitudes tending to zero, limiting its magnitude to the first omitted magnitude and its direction to that term's sign. | After 100 terms of the alternating harmonic series, the error is at most 1/101. |
| NumericalDifferentiation | E | P: CalculusApproximation | Approximating derivative values from finite differences of sampled function values, with step size controlling truncation and numerical error. | For f(x)=x^2, the forward difference at 1 with h=0.01 is 2.01, compared with f'(1)=2. |
| NumericalIntegration | A | P: CalculusApproximation; S: NumericApproximation | Approximating a finite definite-integral value using a weighted finite combination of sampled integrand values. | Estimating integral_0^1 x^2 dx from equally spaced samples. |
| RectangleQuadrature | A | S: NumericalIntegration | Approximating a definite integral by partition rectangles using a stated left-endpoint, right-endpoint or midpoint sampling rule. | The two-piece right-endpoint estimate for integral_0^1 x^2 dx is 5/8. |
| TrapezoidalRule | A | S: NumericalIntegration | Approximating a definite integral by integrating the piecewise linear interpolant through ordered sampled inputs. | One trapezoid estimates integral_0^1 x^2 dx as 1/2. |
| SimpsonRule | E | S: NumericalIntegration | Approximating a definite integral by integrating quadratic interpolants across successive pairs of equal-width subintervals, with an even subinterval count in the composite rule. | Samples of x^2 at 0, 1/2 and 1 give the exact integral 1/3. |
| QuadratureErrorBounds | E | P: CalculusApproximation | Guaranteed bounds on quadrature error derived from interval width, partition spacing and bounds on the required integrand derivatives. | For x^2 on [0,1], the composite trapezoidal error with n equal pieces is at most 1/(6n^2). |
| NewtonMethod | E | P: CalculusApproximation | Approximating a root through x_(n+1)=x_n-f(x_n)/f'(x_n) where the derivative is nonzero, using tangent-line roots as successive estimates. Convergence depends on the function and starting value. | For x^2-2 from x_0=1, the first two updates are 1.5 and 17/12. |
| EulerMethod | B | P: CalculusApproximation | Approximating a solution of y'=F(x,y) by repeated tangent steps y_(n+1)=y_n+hF(x_n,y_n), with x_(n+1)=x_n+h and a supplied initial value. | For y'=y, y(0)=1 and h=0.1, the first two estimates are 1.1 and 1.21. |

A named approximation method is mathematical knowledge, while its grid size, requested precision,
or supplied guaranteed tolerance may be contextual. Do not create an Area for every step size.
An approximation, a certified error bound and an exact symbolic value remain distinct claims.

### Elementary differential equations

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| DifferentialEquationSolution | A | P: DifferentialEquations | A function having the required derivatives and satisfying a differential equation throughout a specified interval, including families distinguished by constants. The equation alone need not determine a unique solution. | Every y(x)=C e^(2x) satisfies y'=2y on the real line. |
| EquilibriumSolution | A | S: DifferentialEquationSolution | A constant function that satisfies a differential equation throughout the stated interval. | y=0 and y=1 satisfy y'=y(1-y). |
| InitialValueProblem | A | P: DifferentialEquations | A differential equation together with prescribed values of the unknown function, and any required derivatives, at a specified input. Its solutions satisfy both the equation and those conditions on an interval containing that input. | y'=2y with y(0)=3 has solution y(x)=3e^(2x). |
| SlopeField | A | P: DifferentialEquations | The field of local tangent directions specified by y'=F(x,y) wherever the right-hand side is defined. Solution curves follow these directions. | For y'=x-y, the slope is -1 at (1,2) and zero along y=x. |
| DifferentialEquationMethods | A | P: DifferentialEquations | Analytic techniques for obtaining exact solution families of ordinary differential equations through transformations and integration, retaining domain restrictions and exceptional solutions. | Separating y'=xy; multiplying y'+2y=4 by an integrating factor. |
| SeparationOfVariables | A | P: DifferentialEquationMethods | Rewriting y'=g(x)h(y) as dy/h(y)=g(x) dx and integrating on intervals where h(y) is nonzero. Constant solutions at zeros of h must be considered separately. | y'=y^2 has solutions y=-1/(x+C) on intervals avoiding the pole, and the equilibrium y=0. |
| FirstOrderLinearIntegratingFactor | E | P: DifferentialEquationMethods | Multiplying y'+p(x)y=q(x) by mu(x)=exp(integral p(x) dx) so its left side becomes (mu y)', when the coefficients are continuous on the interval. | Multiplying y'+2y=4 by e^(2x) gives y=2+C e^(-2x). |
| AutonomousDifferentialEquationModel | A | P: DifferentialEquations | A first-order rate model y'=F(y) in which the rate depends on the current state rather than explicitly on the independent variable, with zeros and signs of F identifying constant solutions and directions of change. | For y'=y(2-y), states between 0 and 2 increase and states above 2 decrease. |
| ExponentialDifferentialEquationModel | A | S: AutonomousDifferentialEquationModel | The relationship between a constant proportional rate y'=ky and exponential growth or decay, including the zero equilibrium. | y'=-0.2y with y(0)=50 gives y(t)=50e^(-0.2t). |
| LogisticDifferentialEquationModel | B | S: AutonomousDifferentialEquationModel | The rate model y'=ky(1-y/K), with positive k and K, relating growth to the current quantity and a carrying capacity. Its nonnegative equilibria are 0 and K. | For y'=0.1y(1-y/100), growth is positive below 100 for y>0, zero at 0 and 100, and negative above 100. |

EquilibriumSolution is a narrower solution concept; it does not assert stability or uniqueness.
The two model specializations identify proportional-rate and feedback knowledge, not merely
the occurrence of an exponential or another function type. DifferentialEquationMethods
organizes exact analytic methods; EulerMethod retains its single home in CalculusApproximation.
Equation form, initial conditions, method and model can compose without a separate
SeparableInitialValueProblem or ExponentialEquationSolving concept.
Existence and uniqueness theorems, systems of ODEs and higher-order solution methods remain
later work. An initial condition by itself does not guarantee a solution exists or is unique.

### Infinite processes and series

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| SequenceConvergence | B | P: SequenceAndSeriesProperties | Approach of an infinite numerical sequence to a finite value: every positive tolerance contains all sufficiently late terms around that value. | 1/n converges to 0, while (-1)^n does not converge. For a_n = 1/n and epsilon > 0, choosing an integer N > 1/epsilon ensures abs(a_n) < epsilon for every n >= N. |
| SeriesConvergence | B | P: SequenceAndSeriesProperties | Convergence of an infinite numerical series when its sequence of finite partial sums approaches a finite limit, which is its sum. | sum_(n=1)^infinity 1/2^n converges to 1, while the harmonic series diverges despite terms tending to zero. |
| AbsoluteSeriesConvergence | B | S: SeriesConvergence | Convergence of a real or complex series together with convergence of the series of absolute term values. | sum_(n=1)^infinity (-1)^n/n^2 converges absolutely. |
| ConditionalSeriesConvergence | B | S: SeriesConvergence | Convergence of a real or complex series whose series of absolute term values diverges. | The alternating harmonic series converges conditionally. |
| PowerSeriesStructure | B | P: SequenceAndSeriesProperties | The coefficients, center and convergence radius of sum c_n(x-a)^n, with absolute convergence inside the radius and divergence outside. Finite boundary points require separate tests. | sum_(n=1)^infinity x^n/n has radius 1, converges at -1 and diverges at 1. |
| GeometricSeriesSummation | B | P: SeriesCalculus | The infinite-sum identity a+ar+ar^2+...=a/(1-r) for abs(r)<1, obtained from limits of finite partial sums. For nonzero a the series diverges when abs(r)>=1. | 1+1/2+1/4+...=2. |
| TelescopingSeriesSummation | B | P: SeriesCalculus | Rewriting finite partial sums so intermediate terms cancel, then finding an infinite sum from the limit of the remaining boundary terms when it exists. | sum_(n=1)^N 1/(n(n+1))=1-1/(N+1), giving infinite sum 1. |
| NthTermDivergenceTest | B | P: SeriesConvergenceTests | The necessary condition that terms of a convergent series tend to zero. A nonzero or nonexistent term limit proves divergence, while a zero term limit is inconclusive. | The terms n/(n+1) tend to 1, so their series diverges. |
| ComparisonSeriesTest | B | P: SeriesConvergenceTests | Comparing eventually nonnegative terms with a convergent upper bound or a divergent lower bound, or comparing positive terms whose ratio tends to a finite positive constant. In the ratio case both series have the same convergence status. | Since 0<1/(n^2+1)<=1/n^2, sum 1/(n^2+1) converges. |
| IntegralSeriesTest | B | P: SeriesConvergenceTests | Equivalence of convergence of sum f(n) and integral_N^infinity f(x) dx when f is eventually continuous, positive and decreasing. Their values need not be equal. | Convergence of integral_1^infinity x^(-2) dx establishes convergence of sum_(n=1)^infinity 1/n^2. |
| AlternatingSeriesTest | B | P: SeriesConvergenceTests | Convergence of an alternating series whose nonnegative term magnitudes eventually decrease to zero. | 1-1/2+1/3-1/4+... converges by this test. |
| RatioSeriesTest | B | P: SeriesConvergenceTests | The convergence criterion for eventually nonzero terms using L=lim abs(a_(n+1)/a_n): L below 1 guarantees absolute convergence and L above 1, including infinity, guarantees divergence. L=1 is inconclusive. | For a_n=2^n/n!, the ratio 2/(n+1) tends to zero, proving absolute convergence. |
| RootSeriesTest | E | P: SeriesConvergenceTests | The convergence criterion using a limit L=lim abs(a_n)^(1/n): L below 1 guarantees absolute convergence and L above 1, including infinity, guarantees divergence. L=1 is inconclusive. | For a_n=(n/(2n+1))^n, the nth root tends to 1/2. |
| PowerSeriesOperations | B | P: SeriesCalculus | Addition and Cauchy multiplication of power series with a common center within their common open interval of convergence, and termwise differentiation or integration within a series' open interval of convergence. Differentiation and integration preserve the radius but can change endpoint convergence. | Integrating sum_(n=0)^infinity x^n=1/(1-x) from 0 to x gives sum_(n=1)^infinity x^n/n=-ln(1-x) for abs(x)<1. |
| TaylorSeriesRepresentation | B | P: SeriesCalculus | Representation of a function by the power series with coefficients f^(n)(a)/n!, equal to that function where the Taylor remainders tend to zero. Existence of all derivatives alone does not guarantee equality. | e^x=sum_(n=0)^infinity x^n/n! for every real x. |

TaylorPolynomialApproximation concerns a finite approximation; TaylorSeriesRepresentation
concerns an infinite representation. Maclaurin means center zero and initially needs no
separate Area. FiniteGeometricSum remains in algebraic equivalence, while the infinite formula
adds a limiting condition. Harmonic and p-series are benchmark examples of convergence tests;
do not create a new sequence family for every benchmark without independent structural knowledge.

Direct and limit comparison are initially bundled. A later split into genuinely narrower
specializations is reasonable if distinguishing those mechanisms is an intended target.
The root test is an enrichment item here; the limsup generalization belongs to a later analysis
extension. Convergence of an infinite series never follows merely from observing many terms.

### One-parameter curves and supporting representations

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| ParametricCurve | B | P: GeometricConcepts | A continuous correspondence from a real parameter interval to geometric points, distinguishing the parameterized traversal from the set of points traced. | (cos(t),sin(t)) for 0<=t<=4pi traverses the unit circle twice. |
| PolarCoordinateRepresentation | B | P: GeometricVisualization | The correspondence between plane points and radius-angle pairs through x=r cos(theta), y=r sin(theta), including nonunique angle and signed-radius representations. | (r,theta)=(2,pi/2) and (-2,-pi/2) both represent (0,2). |
| ParametricDifferentiation | B | P: CurveCalculus | Finding derivatives along a differentiable plane parameterization using dy/dx=(dy/dt)/(dx/dt) where dx/dt is nonzero, with further x-derivatives obtained by applying (1/x'(t))d/dt again. | For x=t^2,y=t^3 with t>0, dy/dx=3t/2 and d^2y/dx^2=3/(4t). |
| ParametricSecondDerivative | B | S: ParametricDifferentiation | Determining d^2y/dx^2 along a twice differentiable plane parameterization by applying (1/x'(t))d/dt to y'(t)/x'(t), where x'(t) is nonzero. | For x=t^2,y=t^3 with t>0, d^2y/dx^2=3/(4t). |
| ParametricAreaIntegration | B | P: CurveCalculus; S: AreaIntegration | Expressing geometric area through a piecewise continuously differentiable parameterization by integrating nonnegative slice lengths against a monotone coordinate, subdividing intervals and choosing orientation to preserve boundary order and count the region once. | For x=t^2,y=t,0<=t<=1, the area under the curve is integral_0^1 t(2t) dt=2/3. |
| ArcLengthIntegration | B | P: CurveCalculus | The length traced by a piecewise continuously differentiable Euclidean curve, obtained by integrating the magnitude of its velocity over the parameter interval. Retraced portions contribute each time they are traversed. | r(t)=(3t,4t), 0 <= t <= 2, has length integral_0^2 5 dt = 10. |
| VectorCurveCalculus | B | P: CurveCalculus | Differentiation and integration of finite-dimensional vector-valued curves component by component in a fixed basis, with velocity given by the derivative and speed by its Euclidean magnitude in orthonormal coordinates. | For r(t)=(cos(t),sin(t)), velocity is (-sin(t),cos(t)) and speed is 1. |
| VectorCurveDifferentiation | B | P: VectorCurveCalculus | Determining a finite-dimensional vector-valued curve's derivative by differentiating its coordinates in a fixed basis with respect to the designated parameter. | For r(t)=(cos(t),sin(t)), r'(t)=(-sin(t),cos(t)). |
| VectorCurveIntegration | B | P: VectorCurveCalculus | Integrating a finite-dimensional vector-valued curve coordinate by coordinate in a fixed basis, as a family of antiderivative curves or a definite-integral vector, when the required component integrals exist. | Integrating (1,2t) gives (t,t^2)+C for a constant vector C, while its integral from 0 to 1 is (1,1). |
| VectorCurveAntidifferentiation | B | S: VectorCurveIntegration | Constructing vector-valued antiderivative curves by integrating their coordinates, with one arbitrary constant vector on each connected parameter interval. | integral (1,2t) dt=(t,t^2)+C for a constant vector C. |
| VectorCurveDefiniteIntegration | B | S: VectorCurveIntegration | Determining the vector of proper coordinate-wise definite integrals over an oriented bounded parameter interval, retaining cancellation within each coordinate. | integral_0^(2pi) (-sin(t),cos(t)) dt=(0,0). |
| CurveMotion | B | P: VectorCurveCalculus | Relating position, velocity, acceleration and speed for motion along a Euclidean curve, and distinguishing displacement from distance by integrating velocity or its magnitude. | For r(t)=(cos(t),sin(t)),0<=t<=2pi, speed is 1, distance is 2pi and displacement is (0,0). |
| PolarAreaIntegration | B | P: CurveCalculus | Expressing area swept by a polar curve as one half the integral of squared radius with respect to angle, with intervals and multiplicity chosen to describe the intended region. | For r=2 on 0<=theta<=pi/2, the sector area is integral_0^(pi/2) 2 dtheta=pi. |

Polar derivative and length tasks compose polar conversion, ParametricDifferentiation and
ArcLengthIntegration; they need no duplicate derivative/length rule family. ArcLengthIntegration
now has its single primary home in CurveCalculus and remains reusable for graphs.
ParametricAreaIntegration also specializes AreaIntegration because it retains nonnegative
slice area; a signed closed-curve area formula would require a different definition.
VectorCurveCalculus now organizes distinct derivative, integral and motion knowledge.
VectorCurveIntegration's antiderivative and definite-integral specializations distinguish a family
of curves from a vector value. Vector curves have one independent parameter and do not imply partial
derivatives or vector-field calculus.
PolarCoordinateRepresentation is knowledge of the coordinate correspondence; an optional
PolarCoordinateSystem Scope would separately express the context of a diagram. This draft
does not silently introduce that deferred Scope from the complex-number proposal.

### Formal representation and shared algebraic support

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| LimitNotation | A | P: FormalMathematics | The conventions for naming a limiting expression, its approaching variable and target, and its one-sided or infinite approach. | Distinguishing lim_(x->0+) 1/x from the value of 1/x at 0. |
| DerivativeNotation | A | P: FormalMathematics | The conventions for writing derivative values, derivative functions and differentiation operators, including the designated variable and derivative order. | Distinguishing f'(a), f', d/dx and d^2y/dx^2; interpreting dy/dx as a derivative rather than an ordinary quotient of two numbers. |
| IntegralNotation | A | P: FormalMathematics | The conventions for integrands, integration variables, definite-integral bounds, antiderivative families and the differential marking the variable of integration. | Interpreting t as bound and x as free in integral_0^x t^2 dt; distinguishing that value from integral x^2 dx=x^3/3+C. |
| SummationNotation | A | P: FormalMathematics | The conventions for indexed sums, including the summand, bound index and index limits, with an infinite endpoint interpreted through finite partial sums. | sum_(k=1)^3 k=6; sum_(n=1)^infinity 2^(-n)=1. |
| DifferentialEquation | A | S: Equation | The form and meaning of an equation relating an unknown function to one or more of its derivatives. | Interpreting y'=2y as a constraint on a function, rather than on one numerical y-value. |
| PartialFractionDecomposition | B | S: AlgebraicEquivalence | Rewriting a rational function as a polynomial plus simpler fractions based on its denominator factors over a specified coefficient field, preserving the original excluded inputs. | 1/(x(x+1))=1/x-1/(x+1), with x!=-1 and x!=0 retained. |

Reuse formal roles rather than adding integration-specific copies of BoundVariable, Operator,
or Operand. Notation knowledge is annotated when interpreting or constructing those conventions
is evidenced, not whenever a calculus symbol occurs. MathematicalExpression already supplies
the generic expression concept; a separate CalculusExpression is optional granularity, not
needed for this implementation proposal. AlgebraicExpression's explicit calculus exclusions stay.

## Proposed progression links

These are selected conceptual relationships, not an exhaustive prerequisite graph. They do not
automatically add their targets to every task annotation. No field-to-field progression is proposed.

| Source | Relation | Target | Meaning |
| --- | --- | --- | --- |
| DerivativeFunction | expands | InstantaneousRateOfChange | Organizes pointwise rates into a function with its own domain. |
| Differentiation | integrates | DerivativeFunction | Determines the derivative correspondence or its requested values. |
| FirstPrinciplesDifferentiation | integrates | FunctionLocalLimitBehavior | Computes the difference-quotient limit. |
| ImplicitDifferentiation | integrates | ChainRule | Differentiates an unknown function inside a relation. |
| Antidifferentiation | inverts | Differentiation | Recovers functions from a derivative, with constant/domain qualifications. |
| DefiniteIntegral | expands | RiemannSum | Passes from finite weighted sums to their refinement limit. |
| FundamentalTheoremOfCalculus | integrates | DefiniteIntegral | Relates proper integrals to accumulation derivatives and endpoint evaluation. |
| FundamentalTheoremOfCalculus | integrates | Antidifferentiation | Uses antiderivatives for integral evaluation. |
| SubstitutionIntegration | inverts | ChainRule | Reverses the derivative composition relationship. |
| IntegrationByParts | inverts | ProductRule | Reverses the derivative product relationship in integral form. |
| IntegrationByPartialFractions | integrates | PartialFractionDecomposition | Uses rational rewriting before antiderivative rules. |
| LHopitalRule | integrates | Differentiation | Uses derivative quotients under the rule's hypotheses. |
| TaylorPolynomialApproximation | expands | LinearApproximation | Extends first-order approximation to higher polynomial orders. |
| TaylorRemainderBound | integrates | TaylorPolynomialApproximation | Supplies a guarantee for a finite approximant. |
| TaylorSeriesRepresentation | expands | TaylorPolynomialApproximation | Considers the infinite sequence of matching polynomials and the limit of their remainders. |
| GeometricSeriesSummation | expands | FiniteGeometricSum | Takes a convergent partial-sum limit. |
| SeriesConvergence | integrates | SequenceConvergence | Applies convergence to the partial-sum sequence. |
| IntegralSeriesTest | integrates | ImproperIntegral | Transfers convergence through a monotone integral comparison. |
| EulerMethod | integrates | SlopeField | Uses the equation's local slope in successive numerical steps. |
| NewtonMethod | integrates | LinearApproximation | Uses tangent-line roots for iteration. |
| VectorCurveDifferentiation | expands | Differentiation | Extends the scalar operation to coordinate-vector curves. |
| VectorCurveAntidifferentiation | inverts | VectorCurveDifferentiation | Recovers curves from their vector derivatives, retaining constant vectors and interval domains. |
| VectorCurveDefiniteIntegration | expands | DefiniteIntegral | Extends proper scalar accumulation to a vector of component integrals. |

No reverse Differentiation-to-Antidifferentiation edge is added. FTC uses both without making
a cycle. Some shared meanings, such as numerical multiplication inside a quadrature formula,
need not receive every possible integrates edge at this stage.

## Coverage and evidence probes

This is a topic-level crosswalk, not a terminal-standard census or a certification of AP alignment.
The [AB framework](https://apcentral.collegeboard.org/courses/ap-calculus-ab) supplies units 1–8;
the [BC overview](https://apstudents.collegeboard.org/courses/ap-calculus-bc) adds units 9–10
and extended content within earlier units. MIT's linked syllabus supports the enrichment slice.

| Topic block | Proposed/reused coverage | Probe that distinguishes the knowledge |
| --- | --- | --- |
| Limits and continuity | Existing limiting/regularity properties; LimitLaws, SqueezeTheorem, IVT | Explain a finite limit at a missing input; distinguish it from the missing function value. |
| Derivative meaning and rules | InstantaneousRateOfChange, DerivativeFunction, Differentiation and rule family | Compare f'(3) with the entire f'; contrast a product rule with differentiating factors independently and multiplying. |
| Composite/implicit/inverse derivatives | ChainRule, ImplicitDifferentiation, InverseFunctionDerivativeRule, HigherOrderDerivative | Differentiate a local branch of a circle and identify where the resulting formula ceases to apply. |
| Rates, approximation, curve behavior | RelatedRates, LinearApproximation, LHopitalRule, derivative tests, existing properties | Distinguish a stationary inflection from a minimum; include endpoints in an absolute-extremum problem. |
| Definite accumulation and FTC | RiemannSum, DefiniteIntegral, AccumulationFunction, FTC, integral properties | Distinguish signed displacement from total distance; differentiate an accumulation with a composed endpoint using ChainRule. |
| Integration techniques | Antidifferentiation and IntegrationMethods; substitution, repeated/cyclic parts, partial fractions and symmetry | Retain poles when decomposing a rational integrand; distinguish an odd proper-integral cancellation from an undefined improper integral. |
| Integral applications | AreaIntegration, volume methods, IntegralAverageValue; later arc/surface methods | Split an area where curves cross; use a nonnegative radius relative to the chosen rotation axis. |
| Elementary ODE | Solution/equilibrium and IVP concepts, slope fields, exact methods, autonomous models, EulerMethod | Keep y=0 when solving y'=y^2 by separation; distinguish Euler estimates from an exact solution family. |
| Parametric, polar and vector curves | Parameter derivative/area methods, vector derivatives/integrals/motion, and shared ArcLengthIntegration | Integrate speed for travel length; distinguish a definite-integral vector from an antiderivative curve and check traversal multiplicity. |
| Infinite sequences and series | Analysis convergence properties, SeriesCalculus, Taylor/error concepts | Explain why a_n->0 does not ensure summability; test power-series endpoints separately. |
| First-course enrichment | NewtonMethod, integrating factors, trig substitution, shells/surfaces, Simpson/error bounds, quantified limits | Exhibit failure of Newton iteration from a poor starting value; justify a specified error guarantee instead of only producing decimal digits. |

Further boundary probes for implementation review:

- abs(x) is continuous but not differentiable at zero. Neither a plotted corner nor a limit
  symbol alone establishes use of a particular derivative method.
- lim_(x->0) (x^2-1)/(x-1) is not a 0/0 form; blindly differentiating numerator and denominator
  changes its answer. LHopitalRule requires its hypotheses, not just a quotient.
- A bounded step function is properly Riemann integrable despite a jump. 1/sqrt(x) on (0,1]
  has a convergent improper integral but is not a bounded proper-integrability example on [0,1].
- integral_(-1)^1 1/x dx is not an ordinary convergent improper integral, despite its symmetric
  principal value being zero.
- A Taylor polynomial needs only finite derivative data; a Taylor series is not automatically
  equal to the original function. The remainder condition carries independent meaning.
- Ratio/root tests at L=1 are inconclusive. A positive term limit rules out convergence,
  but a zero term limit does not prove it.
- A graph or table samples behavior; no finite sample alone proves a limit, continuity on
  an entire interval, an exact ODE solution, or convergence of an infinite process.
- Repeated integration by parts may terminate in a familiar integral or yield a cyclic
  relation. A recurrence with zero coefficient on the isolated integral supplies no solution.
- A second parameter derivative is not simply y''(t)/x''(t). For x=t^2, y=t^3 and t>0,
  that ratio is 3t, while the required derivative is 3/(4t).
- A complete circuit can have zero vector displacement and positive traveled length.
  Clockwise traversal does not make geometric area negative; area methods must control orientation.

## Alternatives and refinement choices

| Approach | Independent sketch | Assessment |
| --- | --- | --- |
| **Recommended: retain properties in Analysis, methods in Calculus** | Existing function properties remain; new convergence and theorem knowledge uses Analysis. Calculus has the seven operational/topic families above. | Preserves established meanings and gives each reusable concept one primary subject home. |
| Consolidate all elementary analysis under Calculus | Move FunctionProperties and its descendants, elementary convergence properties and related theorems beneath Calculus; reserve Analysis for later completeness, topology and uniform convergence. | Coherent as a curriculum organization, but changes much more existing ancestry and weakens the deliberate distinction already reviewed. Not recommended for this extension. |
| Smaller methods-first implementation | Begin with A; use one Differentiation concept instead of separately tracking DerivativeFunction, compose simple rate models, and defer B/E. | Useful first release slice, but is not completion of the requested school-to-university-entry range. Retain the full continuation in this document. |
| Finer knowledge granularity | Beyond the identity specializations now included, split individual trigonometric identities, both FTC statements, or direct/limit series comparison. | Reasonable only when separate labels identify materially different observable knowledge. Avoid a function-type × method taxonomy. |

Decisions selected for this draft: reuse the existing Calculus root; preserve Analysis placements;
retain distinct derivative-function and differentiation meanings; retain the two elementary ODE
models under autonomous modeling; specialize elementary identities and the five requested families;
keep FTC and comparison bundles initially; use no new Scopes in the initial proposal.
These choices are reviewable, not claims that one hierarchy is mathematically canonical.

## Later continuation

| Field | Preserved next subjects |
| --- | --- |
| Multivariable calculus | Partial and directional derivatives, gradients, Jacobians, Hessians, constrained optimization, multiple integrals and coordinate-change Jacobians. |
| Vector calculus | Line and surface integrals, vector fields, divergence/curl and the Green/Gauss/Stokes relationships. |
| Differential equations | Existence/uniqueness theorems, higher-order and systems methods, qualitative stability, numerical ODE error and stability, PDE introduction. |
| Real analysis | Completeness and compactness, rigorous sequence/function limits, uniform convergence, interchange theorems, broader integration and measure. |
| Complex analysis | Complex differentiability, analytic functions, contour integration, residues and branch behavior. |

Proof remains a reusable Ability and evidence dimension across both current and later subjects.
A proof exercise does not automatically create a second "rigorous" Area for the same theorem.
Later analysis adds genuinely new objects, conditions and results.

## Adoption and verification

The implementation review inspected incoming references and direct uses of Calculus. Its first
constituent children deliberately change its eligibility under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
Replace old direct labels only after reviewing the actual content for eligible knowledge;
do not substitute every child or an arbitrary default. This is the one intended existing
eligibility change. Existing non-root ancestry is intended to remain unchanged.

The Calculus definition, Algebra boundary wording, Analysis example and FunctionRegularity
definition updates are recorded together above. The three named root fields remain independent;
no shared-property concept is relocated. New notation is a knowledge claim, not a context-only
Scope. The polar Scope and the earlier decimal/fraction boundary decisions remain separate.

Check all definitions and examples under [ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries),
paths and child roles under [ONT-S4–S5](../structure.md#ont-s4--composition-may-lead-into-specialization),
and progression direction/cycles under [ONT-R3](../relations.md#ont-r3--state-the-conceptual-progression-precisely).
Apply the probes above to test meaning, including cases where a theorem is inapplicable or a
method is inconclusive. A valid graph alone cannot settle mathematical applicability.

The design was checked through graph simulation before implementation. The source review and
build results are recorded below under [ONT-W3](../change-review.md#ont-w3--verify-and-report-the-actual-change).
Consumer-package adoption and actual curriculum/task validation remain separate work.

### Design-stage verification

The initial 130-Area design, before the [limit-property consolidation](#limit-properties-and-characterizations--2026-10-21), was simulated
against `main` at `c313e4a` on 2026-10-20. Candidate names are unique and do not
collide with existing descriptors; all candidates have a definition, example, stage and placement.
Each adoption slice includes its structural and progression dependencies and passes graph
validation with zero findings:

| Adoption slice | New Areas | New organizers | New eligible Areas | Total descriptors | Total assertions |
| --- | ---: | ---: | ---: | ---: | ---: |
| A | 77 | 11 | 66 | 1,086 | 5,790 |
| A + B | 118 | 16 | 102 | 1,127 | 6,008 |
| A + B + E | 130 | 16 | 114 | 1,139 | 6,069 |

The full simulated proposal adds 95 partOf, 37 specializes and 23 progression assertions. All 52
descendant edges beneath the five requested families appear in the expanded sketch and agree
with their placement tables. Its sole
existing eligibility change is Calculus becoming an organizer; existing descriptor ancestry
is unchanged. The four proposed existing-text replacements and the added Calculus example
are included in the simulation. That design-stage check did not change Turtle sources.

Documentation validation also passed for all 38 Markdown files. These checks validate the
proposed graph and documentation, not an implemented release or curriculum coverage certification.
The adoption and content probes above remain necessary.

## Implementation and adoption — 2026-10-20

All **130 Areas** across A, B and E are authored on `codex/calculus-foundations` for review,
based on `main` at `c313e4a`. The branch is not merged; this record includes the 2026-10-21 consolidation. The implementation includes **16 new
organizers and 114 new eligible Areas**, with **95 partOf**, **37 specializes** and **23
progression** assertions. The full ontology contains **1,139 descriptors and 6,069 assertions**.

The seven Calculus branches and their supporting concepts use the placements and examples
above. Existing Analysis properties retain their homes. No descriptor from main is renamed or retired,
and no schema, Ability or Scope source is changed. Five unmerged draft identifiers are removed
by the consolidation recorded above.

| Change | Adoption effect |
| --- | --- |
| Calculus | Retains its identifier, receives the agreed definition and example, and becomes an organizer when its first constituent children are added. Direct labels must be reviewed for evidence-supported eligible descendants. |
| Algebra | Its boundary wording now recognizes Analysis properties and the separate Calculus methods root; its structural relations are unchanged. |
| Analysis | Its example now illustrates continuity, convergence and series representation; its definition and existing ancestry are unchanged. |
| FunctionRegularity | Its definition includes specified forms of integrability and its new constituent is RiemannIntegrability; it was already an organizer. |
| Limit-property consolidation | Removes LimitFoundations and the four definitional criterion identifiers from the unmerged draft. FunctionLocalLimitBehavior and FunctionEndBehavior clarify domain conditions; SequenceConvergence gains a quantified example. SequentialLimitCriterion moves to FunctionTheorems. Draft labels using removed identifiers require evidence-based remapping through the table above; retained properties keep their ancestry and eligibility. |
| New formal, geometric and algebraic support | Includes calculus/summation notation, DifferentialEquation, parameter/polar representation, and PartialFractionDecomposition, with the placements documented above. |
| Existing labels and consumers | The inspected authored `edugraph-content` files contain no direct Calculus or FunctionRegularity uses, and no Area.Algebra or Area.Analysis uses requiring updates. External annotations, model vocabularies and consumer package pins still require review when adopting a release containing this branch. |

Twelve retained new definitions were adjusted to self-contained noun-phrase openings under
[ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries), preserving
the approved mathematics and examples.

### Editor serialization and source verification

The source was serialized using the editor's actual `serializeOntology` function. Entities
sort by full IRI using `localeCompare`; each entity writes its types, definition and example,
followed by relation predicates in alphabetical order, with each predicate's target IRIs sorted.
Thus progression predicates precede partOf and specializes where their names sort earlier.
The file uses LF line endings and one final newline. One pre-existing LinearSystems block
moves to its editor-defined alphabetical position without any change to its assertions.

Independent source verification passed:

- All 130 definitions and examples, 132 structural edges and 23 progression edges match the
  design tables exactly, with no additional candidate relations.
- Parsing and serializing through the editor reproduces the source byte for byte.
- The authored graph has zero validation findings, with 1,139 descriptors and 6,069 assertions.
- Comparison with `c313e4a` confirms 675 new-entity assertions, six existing annotation
  replacements and the added Calculus example. Only Calculus changes existing label eligibility;
  all existing structural ancestry and the other three Turtle sources remain unchanged.
- Documentation validation passed for all authored Markdown files.

After Docker became available, the full build exposed TypeScript's union-complexity limit in
the larger generated snapshot. The branch includes a narrow generator fix: each emitted record
is checked against OntologyStatement and widened before the array is assembled, preserving
data, order and the public API. The full Docker gate passed: TypeScript compilation, client
tests, ontology/documentation validation and npm package checks, followed by Python lint,
typing, all 49 tests, and wheel/sdist consumer verification.
