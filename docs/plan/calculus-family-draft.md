# Calculus — school foundations to university entry

Status: proposal for review, 2026-10-11. No Turtle changes are made by this document.
Baseline: `main` at `69f60f9`, after the [Linear Algebra merge, PR #73](https://github.com/christian-bick/edugraph-ontology/pull/73).
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
This is a researched ontology design, not an AP syllabus clone or a claim of completed
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

Stages are proposed adoption slices, not Scopes, prerequisites, or universal grade assignments.
All three belong to this draft. Stage A can be implemented first; B is necessary for the full
requested range. E makes the university-entry boundary explicit without pretending every
school calculus course includes those topics.

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

### Proposed repairs to existing text

These are explicit future source changes, not edits made by this document.

| Existing Area | Proposed replacement or decision | Effect |
| --- | --- | --- |
| Calculus | **Definition:** The concepts and methods of change, accumulation, and approximation developed through limits, derivatives, integrals, and infinite series. **Example:** Finding a velocity from a position function; recovering net change from a rate; approximating a function by a Taylor polynomial. | Reuses the root and clarifies the full family. First constituent children change Calculus from eligible label to organizer. |
| Algebra | Keep the first sentence; replace the last with: **Limiting behavior and function regularity are organized in Analysis; differential and integral methods are organized in Calculus.** | Aligns the field description with the independent root, without reparenting any existing concepts. |
| Analysis | Keep its definition; use the example: **Examining continuity at a point, convergence of a sequence, or conditions under which a series represents a function.** | Clarifies the organizational emphasis while retaining mathematical overlap. |
| FunctionRegularity | **Definition:** Continuity, differentiability, and specified forms of integrability of functions on stated domains. Keep its existing example. | Adds the RiemannIntegrability constituent without changing its already-organizational eligibility. |

## Structural sketch

`P` denotes `partOf`; `S` denotes `specializes`. The detailed placement tables are authoritative.
Every field organizer uses constituent children; specializations occur only below eligible
concepts and never return to constituent children.

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
│   └── P DerivativeApplications
├── P IntegralCalculus
│   ├── P IntegrationMethods
│   └── P IntegralApplications
│       └── P CrossSectionIntegration
│           └── S DiskWasherIntegration
├── P DifferentialEquations
├── P CalculusApproximation
│   └── P NumericalIntegration                 also S NumericApproximation
│       ├── S RectangleQuadrature
│       ├── S TrapezoidalRule
│       └── S SimpsonRule
├── P SeriesCalculus
│   └── P SeriesConvergenceTests
└── P CurveCalculus

Analysis                                      existing independent root
├── P FunctionProperties                      existing
│   └── P FunctionRegularity                  existing
│       └── P RiemannIntegrability
├── P FunctionTheorems
│   └── P MeanValueTheorem
│       └── S RollesTheorem
├── P SequenceAndSeriesProperties
│   ├── P SequenceConvergence
│   ├── P SeriesConvergence
│   │   ├── S AbsoluteSeriesConvergence
│   │   └── S ConditionalSeriesConvergence
│   └── P PowerSeriesStructure
└── P EpsilonDeltaLimitCriterion

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
| FunctionTheorems | A | P: Analysis | Theorems relating real-function continuity, differentiability, values, and extrema under stated hypotheses. | Guaranteeing a zero by intermediate values; relating a derivative to a secant slope. |
| SequenceAndSeriesProperties | B | P: Analysis | Limit behavior and convergence classifications of numerical sequences and series. | Distinguishing a convergent sequence of terms from convergence of their sum. |

### Limits and foundational properties

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| LimitLaws | A | P: LimitMethods | Rules transferring finite function limits through sums, products, quotients with nonzero limiting denominator, and composition with a function continuous at the limiting value. | From f(x) -> 2 and g(x) -> 3, infer f(x)g(x) -> 6. |
| SqueezeTheorem | A | P: LimitMethods | A function bounded between two functions with the same finite limit has that limit, when the bounds hold sufficiently near the approached point or end of the domain. | From -x^2 <= x^2 sin(1/x) <= x^2, infer a limit of zero at x = 0. |
| LHopitalRule | A | P: LimitMethods | For a quotient in a 0/0 or infinity/infinity form, its limit equals the limit of the derivative quotient when the functions are differentiable on the relevant punctured one-sided interval, the denominator derivative is nonzero there, and the derivative quotient has a finite or infinite limit. Other indeterminate forms must first be validly rewritten, and failure of the derivative quotient to have a limit is inconclusive. | lim_(x->0) (e^x - 1)/x = lim_(x->0) e^x = 1. |
| IntermediateValueTheorem | A | P: FunctionTheorems | A real function continuous on a closed interval takes every value between its endpoint values. | Continuity and opposite signs of x^3 + x - 1 at 0 and 1 guarantee a zero between them. |
| ExtremeValueTheorem | A | P: FunctionTheorems | A real function continuous on a nonempty closed bounded interval attains both a maximum and a minimum there. | x^2 on [-1, 2] attains minimum 0 and maximum 4. |
| DifferentiabilityContinuityTheorem | A | P: FunctionTheorems | Existence of a finite derivative at an interior point guarantees continuity there; continuity alone does not guarantee differentiability. | abs(x) is continuous at 0 but has no derivative there. |
| MeanValueTheorem | A | P: FunctionTheorems | A real function continuous on [a,b] and differentiable on (a,b), with a < b, has an interior point c where f'(c) = (f(b)-f(a))/(b-a). | For f(x) = x^2 on [1,3], c = 2 gives the secant slope 4. |
| RollesTheorem | A | S: MeanValueTheorem | The mean-value guarantee of an interior zero derivative when a real function is continuous on [a,b], differentiable on (a,b), a < b, and f(a) = f(b). | f(x) = x^2 - 1 has equal endpoint values on [-1,1] and f'(0) = 0. |
| RiemannIntegrability | A | P: FunctionRegularity | Existence of a proper Riemann integral for a bounded real function on a closed bounded interval, equivalently the ability to make the difference between its upper and lower partition sums arbitrarily small. | A bounded step function with one jump is Riemann integrable on [0,1]. |
| EpsilonDeltaLimitCriterion | E | P: Analysis | At a finite accumulation point of the domain, the condition that every positive output tolerance admits a positive input tolerance making all sufficiently close, distinct domain inputs have outputs within the requested tolerance of the limit. | For f(x) = 3x at a, delta = epsilon/3 ensures abs(f(x)-3a) < epsilon whenever 0 < abs(x-a) < delta. |

LimitLaws is reusable knowledge, while algebraic cancellation and continuity-based substitution
compose with existing rewriting and property concepts. Do not add a separate LimitByFactoring
for every algebraic technique. One-sided limits, limits at infinity and infinite behavior already
have property coverage; infinity is not a real output value.

### Differentiation and its applications

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| DerivativeFunction | A | P: DifferentialCalculus | The function assigning each interior input where a finite derivative exists the instantaneous rate of the original real function there. Its domain can be smaller than the original domain. | The derivative of abs(x) is -1 for x < 0 and 1 for x > 0, with 0 absent from its domain. |
| HigherOrderDerivative | A | S: DerivativeFunction | A derivative function obtained by repeated differentiation, of order at least two, on the inputs where the successive derivatives exist. | For f(x) = x^3, f''(x) = 6x and f'''(x) = 6. |
| Differentiation | A | P: DifferentialCalculus | Determining the derivative of a function with respect to a designated variable, retaining the domain on which the derivative exists. | Finding d/dx (x^3) = 3x^2. |
| FirstPrinciplesDifferentiation | A | S: Differentiation | Determining a derivative by taking the limit of the difference quotient as the input increment approaches zero. | ((x+h)^2-x^2)/h = 2x+h for h != 0, giving derivative 2x. |
| ImplicitDifferentiation | A | S: Differentiation | Differentiating a relation satisfied by a locally differentiable unknown function, using the chain rule and solving for the derivative where the resulting relation permits it. | From x^2+y^2 = 1 obtain y' = -x/y where y != 0 on a differentiable branch. |
| LogarithmicDifferentiation | E | S: Differentiation | Determining derivatives by differentiating ln(abs(f)) for a nonzero function on an interval of fixed sign, including positive-base variable powers, and then recovering the original derivative. | For x > 0, differentiating ln(x^x) = x ln(x) gives (x^x)' = x^x(ln(x)+1). |
| ElementaryDerivativeIdentities | A | P: DifferentiationRules | Derivative identities for constants, powers, exponentials, logarithms, trigonometric and inverse trigonometric functions on their differentiability domains, with trigonometric arguments in radians. | (x^3)' = 3x^2; (ln(x))' = 1/x for x > 0; (sin(x))' = cos(x). |
| DerivativeLinearity | A | P: DifferentiationRules | The derivative of a constant linear combination of differentiable functions is the same linear combination of their derivatives. | (3f - 2g)' = 3f' - 2g'. |
| ProductRule | A | P: DifferentiationRules | The identity (fg)' = f'g + fg' at inputs where both real functions are differentiable. | (x^2 sin(x))' = 2x sin(x) + x^2 cos(x). |
| QuotientRule | A | P: DifferentiationRules | The identity (f/g)' = (f'g - fg')/g^2 where f and g are differentiable and g is nonzero. | (x/(x+1))' = 1/(x+1)^2 for x != -1. |
| ChainRule | A | P: DifferentiationRules | The identity (f composed with g)'(x) = f'(g(x))g'(x) where g is differentiable at x and f is differentiable at g(x). | (sin(x^2))' = 2x cos(x^2). |
| InverseFunctionDerivativeRule | A | P: DifferentiationRules | The identity (f^(-1))'(f(a)) = 1/f'(a) for a locally invertible continuously differentiable real function with nonzero derivative at a. | Inverting the exponential derivative gives (ln(x))' = 1/x for x > 0. |
| DerivativeSignAnalysis | A | P: DerivativeApplications | Using first-derivative signs to establish monotonicity and second-derivative signs to establish concavity on intervals where the required derivatives exist. | For x^3, the nonnegative first derivative establishes nondecrease; the second derivative changes from negative to positive at 0. |
| FirstDerivativeExtremumTest | A | P: DerivativeApplications | Classifying a candidate local extremum of a continuous function by a first-derivative sign change on the neighboring intervals. | The derivative of x^2 changes from negative to positive at 0, giving a local minimum. |
| SecondDerivativeExtremumTest | A | P: DerivativeApplications | At a stationary point of a twice continuously differentiable real function, a positive second derivative guarantees a local minimum and a negative one a local maximum. A zero second derivative is inconclusive. | x^4 and x^3 both have first and second derivatives zero at 0, but only x^4 has an extremum there. |
| ClosedIntervalExtremumMethod | A | P: DerivativeApplications | Finding absolute extrema of a continuous real function on a closed bounded interval by comparing endpoint values with values at all interior critical points. | For f(x) = x(2-x) on [0,3], compare f(0)=0, f(1)=1 and f(3)=-3. |
| RelatedRates | A | P: DerivativeApplications | Relating the instantaneous rates of quantities constrained by an equation by differentiating that relationship with respect to their shared parameter. | Differentiating V = 4pi r^3/3 with respect to time gives dV/dt = 4pi r^2 dr/dt. |
| DerivativeOptimization | A | P: DerivativeApplications | Reducing a constrained extremum problem to an admissible function domain and using derivative information with boundary checks to identify the required optimum. | Among positive rectangles of perimeter 20, maximize A(x)=x(10-x) for 0 < x < 10 to obtain a square of side 5. |

DerivativeFunction identifies the new correspondence and its domain; Differentiation concerns
determining it. A task asking only for f'(3) need not demonstrate the full derivative-function
concept. ElementaryDerivativeIdentities is initially a compact table-of-identities concept;
the independently reusable product, quotient and chain rules remain separate. Any later split
should distinguish mathematical knowledge, not merely the occurrence of a function type.

### Integral concepts, methods and applications

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| Antidifferentiation | A | P: IntegralCalculus | Recovering functions with a prescribed derivative on a connected interval, where any two antiderivatives differ by a constant. Disconnected domains can require independent constants on their components. | The antiderivatives of 2x on the real line are x^2 + C. |
| RiemannSum | A | P: IntegralCalculus | A finite sum of sampled function values multiplied by the widths of their partition subintervals, used to approximate accumulation and define a proper integral through refinement. | The right-endpoint sum for f(x)=x on [0,1] with n equal pieces is sum_(k=1)^n (k/n)(1/n). |
| DefiniteIntegral | A | P: IntegralCalculus | The signed accumulation of a Riemann-integrable real function over an oriented bounded interval, defined by the common limit of its tagged partition sums as the largest subinterval width tends to zero. | integral_(-1)^1 x dx = 0, although the total area between the graph and axis is 1. |
| AccumulationFunction | A | P: IntegralCalculus | The function A(x)=integral_a^x f(t) dt formed by holding a starting input fixed and varying an endpoint where the intervening integrals exist. | For f(t)=2t and a=1, A(x)=x^2-1. |
| FundamentalTheoremOfCalculus | A | P: IntegralCalculus | For continuous real f on [a,b], the accumulation A(x)=integral_a^x f(t) dt satisfies A'=f at interior inputs. The definite integral equals F(b)-F(a) for any antiderivative F on the interval. | d/dx integral_0^x cos(t) dt = cos(x); integral_0^1 2x dx = 1. |
| DefiniteIntegralProperties | A | P: IntegralCalculus | Linearity, interval additivity, reversal of bounds, and order comparison for proper definite integrals of integrable real functions. | integral_0^2 f = integral_0^1 f + integral_1^2 f; integral_b^a f = -integral_a^b f. |
| ImproperIntegral | B | P: IntegralCalculus | Integration over an unbounded interval or past an unbounded integrand by taking limits of proper integrals. Each side of every interior singularity and each unbounded end must converge separately for a finite ordinary improper integral. | integral_1^infinity x^(-2) dx = 1, whereas integral_1^infinity 1/x dx diverges. |
| SubstitutionIntegration | A | P: IntegrationMethods | Changing variables in an integral using the chain rule in reverse, with the differential factor, transformed bounds and admissible domain preserved. | With u=x^2, integral_0^1 2x cos(x^2) dx = integral_0^1 cos(u) du = sin(1). |
| IntegrationByParts | B | P: IntegrationMethods | The integral identity integral u v' = uv - integral u'v, obtained from the product rule under conditions making the stated derivatives and integrals valid. | integral x e^x dx = x e^x - e^x + C. |
| IntegrationByPartialFractions | B | P: IntegrationMethods | Integrating a rational function by polynomial division when needed and decomposition into simpler fraction terms over the chosen coefficient field, retaining poles and interval restrictions. | integral 1/(x(x+1)) dx = ln(abs(x)) - ln(abs(x+1)) + C on intervals avoiding -1 and 0. |
| TrigonometricSubstitution | E | P: IntegrationMethods | Changing the integration variable to a trigonometric expression to simplify a radical, with an interval choice that determines signs and the inverse substitution. | For -1 < x < 1, x=sin(theta) with -pi/2 < theta < pi/2 gives sqrt(1-x^2)=cos(theta). |
| IntegralAverageValue | A | P: IntegralApplications | The mean value of an integrable real function over [a,b], a < b, defined as its integral divided by b-a. | The average value of x^2 on [0,3] is 3. |
| AreaIntegration | A | P: IntegralApplications | Expressing geometric area as an integral of nonnegative slice lengths, splitting the domain where boundary order changes. | The area between y=x and y=x^2 on [0,1] is integral_0^1 (x-x^2) dx = 1/6. |
| CrossSectionIntegration | A | P: IntegralApplications | Expressing a solid's volume as the integral of its cross-sectional area with respect to position along a stated axis. | Cross sections of area x^2 for 0 <= x <= 2 give volume integral_0^2 x^2 dx = 8/3. |
| DiskWasherIntegration | A | S: CrossSectionIntegration | Computing a solid of revolution's volume from circular or annular cross sections, integrating pi times the difference of squared outer and inner radii. | Rotating the region 0 <= y <= x, 0 <= x <= 1, about the x-axis gives volume integral_0^1 pi x^2 dx = pi/3. |
| CylindricalShellIntegration | E | P: IntegralApplications | Computing a solid of revolution's volume by integrating cylindrical-shell contributions of circumference times height times thickness, with radii and bounds determined by the axis. | Rotating 0 <= y <= x, 0 <= x <= 1, about the y-axis gives integral_0^1 2pi x*x dx = 2pi/3. |
| ArcLengthIntegration | B | P: IntegralApplications | The length traced by a piecewise continuously differentiable Euclidean curve, obtained by integrating the magnitude of its velocity over the parameter interval. Retraced portions contribute each time they are traversed. | r(t)=(3t,4t), 0 <= t <= 2, has length integral_0^2 5 dt = 10. |
| RevolutionSurfaceAreaIntegration | E | P: IntegralApplications | Computing the surface swept by a regular plane curve rotated about an axis in its plane by integrating circumference times arc-length element, with nonnegative radius and repeated coverage accounted for. | Rotating y=1, 0 <= x <= 2, about the x-axis gives lateral surface area integral_0^2 2pi dx = 4pi. |

Net change uses signed integration; total distance integrates speed, and total geometric area
uses nonnegative slice sizes. These distinctions can compose the concepts above with existing
quantity, geometry and modeling knowledge. Do not create an Area per application context such
as tank filling, employment growth or particle displacement. Weighted local contributions for
mass or work use the same integral/modeling principles with the appropriate quantities and units.

The Fundamental Theorem is not a definition of every integral. A function can be integrable
without possessing an elementary antiderivative. An ordinary improper integral is not a Cauchy
principal value: the apparent symmetric cancellation of 1/x across zero is insufficient.

### Approximation and numerical methods

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| LinearApproximation | A | P: CalculusApproximation | Approximating a differentiable real function near a by f(a)+f'(a)(x-a), with an error that is small relative to x-a as x approaches a. | sqrt(4+h) is approximately 2+h/4 for small h. |
| TaylorPolynomialApproximation | B | P: CalculusApproximation | Approximating a sufficiently differentiable function near a by a finite polynomial whose coefficients are f^(k)(a)/k! through a chosen order. | Near 0, cos(x) is approximated by 1-x^2/2+x^4/24. |
| TaylorRemainderBound | B | P: CalculusApproximation | The bound abs(f(x)-T_n(x)) <= M abs(x-a)^(n+1)/(n+1)! when f has continuous derivatives through order n+1 on the interval joining a and x and its next derivative has magnitude at most M there. | Approximating e^0.1 by 1+0.1+0.1^2/2 has error at most e^0.1*0.1^3/6, less than 0.000185. |
| AlternatingSeriesRemainderBound | B | P: CalculusApproximation | The error after a partial sum of an alternating series with decreasing nonnegative term magnitudes tending to zero is at most the first omitted magnitude and has that term's sign. | After 100 terms of the alternating harmonic series, the error is at most 1/101. |
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
| InitialValueProblem | A | P: DifferentialEquations | A differential equation together with prescribed values of the unknown function, and any required derivatives, at a specified input. Its solutions satisfy both the equation and those conditions on an interval containing that input. | y'=2y with y(0)=3 has solution y(x)=3e^(2x). |
| SlopeField | A | P: DifferentialEquations | The field of local tangent directions specified by y'=F(x,y) wherever the right-hand side is defined. Solution curves follow these directions. | For y'=x-y, the slope is -1 at (1,2) and zero along y=x. |
| SeparationOfVariables | A | P: DifferentialEquations | Rewriting y'=g(x)h(y) as dy/h(y)=g(x) dx and integrating on intervals where h(y) is nonzero. Constant solutions at zeros of h must be considered separately. | y'=y^2 has solutions y=-1/(x+C) on intervals avoiding the pole, and the equilibrium y=0. |
| FirstOrderLinearIntegratingFactor | E | P: DifferentialEquations | Multiplying y'+p(x)y=q(x) by mu(x)=exp(integral p(x) dx) so its left side becomes (mu y)', when the coefficients are continuous on the interval. | Multiplying y'+2y=4 by e^(2x) gives y=2+C e^(-2x). |
| ExponentialDifferentialEquationModel | A | P: DifferentialEquations | The relationship between a constant proportional rate y'=ky and exponential growth or decay, including the zero equilibrium. | y'=-0.2y with y(0)=50 gives y(t)=50e^(-0.2t). |
| LogisticDifferentialEquationModel | B | P: DifferentialEquations | The rate model y'=ky(1-y/K), with positive k and K, relating growth to the current quantity and a carrying capacity. Its nonnegative equilibria are 0 and K. | For y'=0.1y(1-y/100), growth is positive below 100 for y>0, zero at 0 and 100, and negative above 100. |

The two models identify rate-to-solution and feedback knowledge, not merely the occurrence of
an exponential or another function type. They can be omitted in a smaller implementation if
composition demonstrably retains those distinctions; the default draft retains them.
Existence and uniqueness theorems, systems of ODEs and higher-order solution methods remain
later work. An initial condition by itself does not guarantee a solution exists or is unique.

### Infinite processes and series

| Candidate | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| SequenceConvergence | B | P: SequenceAndSeriesProperties | Approach of an infinite numerical sequence to a finite value: every positive tolerance contains all sufficiently late terms around that value. | 1/n converges to 0, while (-1)^n does not converge. |
| SeriesConvergence | B | P: SequenceAndSeriesProperties | Convergence of an infinite numerical series when its sequence of finite partial sums approaches a finite limit, which is its sum. | sum_(n=1)^infinity 1/2^n converges to 1, while the harmonic series diverges despite terms tending to zero. |
| AbsoluteSeriesConvergence | B | S: SeriesConvergence | Convergence of a real or complex series together with convergence of the series of absolute term values. | sum_(n=1)^infinity (-1)^n/n^2 converges absolutely. |
| ConditionalSeriesConvergence | B | S: SeriesConvergence | Convergence of a real or complex series whose series of absolute term values diverges. | The alternating harmonic series converges conditionally. |
| PowerSeriesStructure | B | P: SequenceAndSeriesProperties | The coefficients and center of sum c_n(x-a)^n determine a radius with absolute convergence inside and divergence outside. Finite boundary points require separate tests. | sum_(n=1)^infinity x^n/n has radius 1, converges at -1 and diverges at 1. |
| GeometricSeriesSummation | B | P: SeriesCalculus | The infinite-sum identity a+ar+ar^2+...=a/(1-r) for abs(r)<1, obtained from limits of finite partial sums. For nonzero a the series diverges when abs(r)>=1. | 1+1/2+1/4+...=2. |
| TelescopingSeriesSummation | B | P: SeriesCalculus | Rewriting finite partial sums so intermediate terms cancel, then finding an infinite sum from the limit of the remaining boundary terms when it exists. | sum_(n=1)^N 1/(n(n+1))=1-1/(N+1), giving infinite sum 1. |
| NthTermDivergenceTest | B | P: SeriesConvergenceTests | The necessary condition that terms of a convergent series tend to zero. A nonzero or nonexistent term limit proves divergence, while a zero term limit is inconclusive. | The terms n/(n+1) tend to 1, so their series diverges. |
| ComparisonSeriesTest | B | P: SeriesConvergenceTests | Comparing eventually nonnegative terms with a convergent upper bound or a divergent lower bound, or comparing positive terms whose ratio tends to a finite positive constant. In the ratio case both series have the same convergence status. | Since 0<1/(n^2+1)<=1/n^2, sum 1/(n^2+1) converges. |
| IntegralSeriesTest | B | P: SeriesConvergenceTests | Equivalence of convergence of sum f(n) and integral_N^infinity f(x) dx when f is eventually continuous, positive and decreasing. Their values need not be equal. | Convergence of integral_1^infinity x^(-2) dx establishes convergence of sum_(n=1)^infinity 1/n^2. |
| AlternatingSeriesTest | B | P: SeriesConvergenceTests | Convergence of an alternating series whose nonnegative term magnitudes eventually decrease to zero. | 1-1/2+1/3-1/4+... converges by this test. |
| RatioSeriesTest | B | P: SeriesConvergenceTests | For eventually nonzero terms, L=lim abs(a_(n+1)/a_n) below 1 guarantees absolute convergence, while L above 1, including infinity, guarantees divergence. L=1 is inconclusive. | For a_n=2^n/n!, the ratio 2/(n+1) tends to zero, proving absolute convergence. |
| RootSeriesTest | E | P: SeriesConvergenceTests | A limit L=lim abs(a_n)^(1/n) below 1 guarantees absolute convergence, while L above 1, including infinity, guarantees divergence. L=1 is inconclusive. | For a_n=(n/(2n+1))^n, the nth root tends to 1/2. |
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
| VectorCurveCalculus | B | P: CurveCalculus | Differentiation and integration of finite-dimensional vector-valued curves component by component in a fixed basis, with velocity given by the derivative and speed by its Euclidean magnitude in orthonormal coordinates. | For r(t)=(cos(t),sin(t)), velocity is (-sin(t),cos(t)) and speed is 1. |
| PolarAreaIntegration | B | P: CurveCalculus | Expressing area swept by a polar curve as one half the integral of squared radius with respect to angle, with intervals and multiplicity chosen to describe the intended region. | For r=2 on 0<=theta<=pi/2, the sector area is integral_0^(pi/2) 2 dtheta=pi. |

Polar derivative and length tasks compose polar conversion, ParametricDifferentiation and
ArcLengthIntegration; they need no duplicate derivative/length rule family. Vector curves have
one independent parameter and do not imply partial derivatives or vector-field calculus.
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
| VectorCurveCalculus | expands | Differentiation | Extends the scalar operation to coordinate-vector curves. |

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
| Integration techniques | Antidifferentiation and IntegrationMethods; algebraic/trig rewriting reused | Retain poles when decomposing a rational integrand; state intervals for logarithmic antiderivatives. |
| Integral applications | AreaIntegration, volume methods, IntegralAverageValue; later arc/surface methods | Split an area where curves cross; use a nonnegative radius relative to the chosen rotation axis. |
| Elementary ODE | Solution and IVP concepts, slope fields, separation, model concepts, EulerMethod | Keep y=0 when solving y'=y^2 by separation; distinguish Euler estimates from an exact solution family. |
| Parametric, polar and vector curves | CurveCalculus with parameter/coordinate concepts and ArcLengthIntegration | Integrate speed for travel length; check whether a chosen parameter interval traces a region twice. |
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

## Alternatives and refinement choices

| Approach | Independent sketch | Assessment |
| --- | --- | --- |
| **Recommended: retain properties in Analysis, methods in Calculus** | Existing function properties remain; new convergence and theorem knowledge uses Analysis. Calculus has the seven operational/topic families above. | Preserves established meanings and gives each reusable concept one primary subject home. |
| Consolidate all elementary analysis under Calculus | Move FunctionProperties and its descendants, elementary convergence properties and related theorems beneath Calculus; reserve Analysis for later completeness, topology and uniform convergence. | Coherent as a curriculum organization, but changes much more existing ancestry and weakens the deliberate distinction already reviewed. Not recommended for this extension. |
| Smaller methods-first implementation | Begin with A; use one Differentiation concept instead of separately tracking DerivativeFunction, compose simple rate models, and defer B/E. | Useful first release slice, but is not completion of the requested school-to-university-entry range. Retain the full continuation in this document. |
| Finer knowledge granularity | Split elementary derivative identities, both FTC statements, direct/limit comparison, or selected integration theorems into specializing subfamilies. | Reasonable only when separate labels identify materially different observable knowledge. Avoid a function-type × method taxonomy. |

Decisions selected for this draft: reuse the existing Calculus root; preserve Analysis placements;
retain distinct derivative-function and differentiation meanings; retain the two elementary ODE
models; keep FTC and comparison bundles initially; use no new Scopes in the initial proposal.
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

## Adoption and verification plan

Before implementation, inspect incoming references and direct uses of Calculus. Its first
constituent children deliberately change its eligibility under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
Replace old direct labels only after reviewing the actual content for eligible knowledge;
do not substitute every child or an arbitrary default. This is the one intended existing
eligibility change. Existing non-root ancestry is intended to remain unchanged.

Record the proposed Calculus definition, Algebra boundary wording, Analysis example and
FunctionRegularity definition updates together. The three named root fields remain independent;
no shared-property concept is relocated. New notation is a knowledge claim, not a context-only
Scope. The polar Scope and the earlier decimal/fraction boundary decisions remain separate.

Check all definitions and examples under [ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries),
paths and child roles under [ONT-S4–S5](../structure.md#ont-s4--composition-may-lead-into-specialization),
and progression direction/cycles under [ONT-R3](../relations.md#ont-r3--state-the-conceptual-progression-precisely).
Apply the probes above to test meaning, including cases where a theorem is inapplicable or a
method is inconclusive. A valid graph alone cannot settle mathematical applicability.

This proposal is checked through graph simulation and documentation validation. Source implementation,
its full Docker/client gate, consumer-package adoption and actual curriculum/task validation
remain subsequent work under [ONT-W3](../change-review.md#ont-w3--verify-and-report-the-actual-change).

### Proposal verification

Simulated against `main` at `69f60f9` on 2026-10-11. Candidate names are unique and do not
collide with existing descriptors; all candidates have a definition, example, stage and placement.
Each adoption slice includes its structural and progression dependencies and passes graph
validation with zero findings:

| Adoption slice | New Areas | New organizers | New eligible Areas | Total descriptors | Total assertions |
| --- | ---: | ---: | ---: | ---: | ---: |
| A | 61 | 10 | 51 | 1,070 | 5,710 |
| A + B | 94 | 14 | 80 | 1,103 | 5,885 |
| A + B + E | 105 | 14 | 91 | 1,114 | 5,941 |

The full proposal adds 92 partOf, 14 specializes and 21 progression assertions. Its sole
existing eligibility change is Calculus becoming an organizer; existing descriptor ancestry
is unchanged. The four proposed existing-text replacements and the added Calculus example
are included in the simulation. All four Turtle source files remain unchanged.

Documentation validation passed for all 38 Markdown files. These checks validate the proposed
graph and document structure, not an implemented release
or curriculum coverage certification. The adoption and content probes above remain necessary.
