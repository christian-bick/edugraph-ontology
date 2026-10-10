# Remaining core CCSS coverage audit

Reviewed 2026-10-11 against ontology `main` at `1b9ecc3`, after the NumberTheory merge.
This completes the evidence review in [roadmap step 2](algebra-family-draft.md#2-close-the-remaining-core-algebrafunction-coverage-questions).
It assesses what the ontology can describe, not whether target specifications, generators,
released packages, or datasets already supply that content. The 114-row inventory preserves
that source baseline. The [implementation record](#implementation-adoption-and-preview--2026-10-11)
separately records the two follow-up concepts now authored on `codex/unit-dimensionality-pythagorean`
for preview review.

## Findings and recommended next work

The earlier algebra gaps are closed by existing eligible concepts and composition. In
particular, polynomial closure, rational-exponent justification, rational/radical solving,
graphical solution sets, the remainder/factor theorems, finite geometric sums, and periodic
models no longer justify additional object-by-method families.

The review identified three follow-ups, now resolved for the requested preview scope:

| Finding | Evidence and boundary | Recommended next step |
| --- | --- | --- |
| Formal function knowledge | NumericFunction describes numerical input-output correspondence; FunctionSymbol and FunctionArgument identify the function and input roles in an expression. | Accepted composition for the reviewed part of F-IF.A.1. Retain FunctionTypes and the existing formal concepts without source changes. |
| Dimensional analysis | N-Q.A.1 includes coherent use of units in formulas. UnitConversion preserves one quantity while changing units; it does not state how dimensions combine in products/quotients or why incompatible quantities cannot be added. | UnitDimensionality is authored under MeasuringWithUnits for preview. Keep simple conversions on the existing concepts. |
| Pythagorean theorem specificity | G-SRT.C.8 applications have broad coverage through RightTriangle and length concepts, but PythagoreanTriples and PythagoreanTrigonometricIdentity do not identify the general geometric theorem and its converse. | PythagoreanTheorem is authored under GeometricRelations for preview. This refines broadly supported tasks, especially proof and justification. |

The first is covered compositionally in the accepted numerical scope, the second supplies
specific reusable knowledge, and the third refines broad coverage with a theorem-specific concept.
The [targeted follow-up proposal](#targeted-follow-up-proposal) supplies concrete definitions,
placements, alternatives, and adoption consequences for all three. Its status distinguishes
the implemented preview from deferred suggestions. No new calculus family is needed for
these core requirements.

## Scope, evidence, and counting

The inventory covers the selected middle-school algebra prerequisites, high-school Number and
Quantity foundations, all high-school Algebra and Functions core leaves, and the three
right-triangle standards directly supporting trigonometry. It is not an audit of all school
arithmetic, geometry, statistics, probability, or the mathematical practices independently.

Numbered standards with lettered children contribute their terminal children; the parent
requirements still apply. Standards marked `(+)` are excluded from the core count even when
the ontology already supports them. A modeling star does not mean `(+)`. In particular,
F-IF.C.7.e is core although its adjacent rational-asymptote item F-IF.C.7.d is `(+)`.
The official pages linked with each table determine these boundaries, rather than the local
coverage explorer's metadata.

The tables list vocabulary available for different facets of a standard, **not mandatory
conjunctive label bundles**. Choose only what a concrete task or explanation evidences.
An `or` separates alternatives; a slash also indicates alternatives, not a new identifier.
Identifiers are Areas unless prefixed `S:` for Scope or `B:` for Ability. A supported row
means its required knowledge has a defensible composition; it does not certify every possible
wording or establish learner mastery.

The review applies [ONT-D1/D2](../descriptors.md), [ONT-E1/E2/E6/E7](../content-evidence.md),
[ONT-S1/S2](../structure.md), and [ONT-R5](../relations.md#ont-r5--compose-competency-descriptions-with-involves).
Organizers cannot substitute for missing knowledge. In particular, NumericComparison,
FunctionSlope, FunctionTypes, AlgebraicFunctions, ArithmeticLaws, and MeasuringWithUnits have
constituent children and are not direct labels. The tables use eligible constituents or
specialization parents instead.

## Composition checks and contrasting evidence

These checks settle the specific questions carried forward from the roadmap. Examples are
review probes, not newly authored target specifications.

| Question | Representative task and supported composition | Nearby task that does not establish the same claim |
| --- | --- | --- |
| Polynomial closure | Explain why arbitrary real-coefficient polynomials remain polynomials under addition, subtraction, and multiplication: `OperationClosure` + `PolynomialDependence` + `B:DeductiveReasoning`. | Expanding one product does not establish a universal closure claim. Division by a nonconstant polynomial supplies counterexamples to closure under division. |
| Rational-exponent meaning | For positive a, derive why a^(1/3) must be the positive cube root if the power-of-a-power law is retained: `ExponentLaws` + `Root` + `Exponentiation` + `S:FractionExponent` + `B:ConceptDerivation`. | Computing 8^(1/3) from a supplied rule supports execution, not derivation. Exponentiation alone does not establish the justification; negative bases require explicit conventions and valid restrictions. |
| Irrational approximation | Bound sqrt(2) between 1.41 and 1.42 by squaring the endpoints, refine the interval, and locate it on a line: `NumericApproximation` + `NumericOrder` + `S:Numberline`; `S:DeterministicErrorBound` when the bound is actually justified. | Reading a calculator decimal does not establish an error guarantee, irrationality, or a repeating-decimal characterization. |
| Rational rewriting | Rewrite (x^2+1)/(x-1) as x+1+2/(x-1), retaining x != 1: `PolynomialDivision` + `AlgebraicEquivalence` + `RationalDependence`. | A cancelled denominator does not erase the original domain exclusion. Integer `Factorization` is not algebraic factorization. |
| Extraneous candidates | Solve sqrt(x+2)=x over the reals; squaring gives 2 and -1, but the original equation rejects -1: `EquationSolving` + `ConstraintTransformationLogic` + `RelationSatisfaction` + `S:SquaringBothSides`. | The unrestricted squaring step is implication, not equivalence. Merely checking a supplied candidate does not demonstrate complete solving. |
| Parameters and reversibility | Solve ax=b for real x, separating a != 0, a=b=0, and a=0 with b != 0: `EquationSolving` + `AffineDependence` + `ConstraintTransformationLogic`; `S:ProofByCases` when the argument uses those cases. | Dividing by a without examining a=0 does not solve the unrestricted problem. A visible letter alone does not establish knowledge of its formal parameter role. |
| Equivalent systems | Retain E1 and replace E2 by E2+kE1, proving reversibility: `SystemRewriting` + `AlgebraicEquivalence` + `B:DeductiveReasoning`. | Keeping only the combined equation generally loses a constraint. `SystemElimination` additionally requires eliminating a term or variable; not every row replacement does so. |
| Graphs and approximate solutions | Approximate the unique intersection of y=2^x and y=3, using monotonicity to establish uniqueness: `EquationSolving` + `NumericApproximation` + `S:GraphicalSolutionRepresentation`; `FunctionMonotonicity` when used. | A cropped graph with one crossing does not establish that no other solutions exist. A rounded result is not an exact satisfying assignment. |
| Whole graphical solution sets | Explain why precisely the points of y=x^2 satisfy its equation; shade the intersection of y>x and y<=2x+1: `SolutionSet` + `RelationSatisfaction` + `S:GraphicalSolutionRepresentation`, with solving or visualization as required. | Plotting three satisfying points establishes only those instances. `LineGraphing` does not cover arbitrary curves. |
| Remainder/factor knowledge | Relate p(2), the remainder on division by x-2, and whether x-2 divides p: `PolynomialRemainderTheorem` + `PolynomialFactorTheorem`. | Polynomial long division without examining that connection does not automatically evidence either theorem. |
| Finite geometric sums | For a finite sum S, subtract rS and derive the identity, treating r=1 separately: `FiniteGeometricSum` + `AlgebraicEquivalence` + `B:DeductiveReasoning`. | `GeometricSequence` describes the terms; a formula supplied for substitution does not demonstrate its derivation. |
| Radians and unit-circle functions | Explain why equal arc/radius ratios give equal turns, then connect the unit-circle coordinates to sine/cosine: `AngleConcept` + `ArchConcept` + `RatioEquivalence` + `S:RadianScale`, and `Sine`/`Cosine` when the coordinate relation is examined. | The incidental presence of pi/6 or a radian unit is insufficient. RadianScale already states the arc/radius relationship, so no new radian Area is demonstrated. |
| Periodic model parameters | Fit y=3 sin(2t)+5 to a cycle and explain its range [2,8], midline 5, amplitude 3, and period pi: `OscillationParameters` + `FunctionPeriodicity`, with `FunctionTransformation`, `FunctionRange`, `FunctionExtrema`, or `AlgebraicModeling` as evidenced. | Merely evaluating the rule at one input does not establish parameter meaning or period. OscillationParameters already explicitly covers amplitude and midline. |
| Eventual growth comparison | Use tables/graphs to compare 2^x and x^2, then distinguish observed crossings from eventual dominance: `ExponentialDependence` + `PolynomialDependence` + `FunctionArithmetic` + `FunctionSign`, with the evidenced reasoning. | One value where 2^x exceeds x^2 does not establish that it stays larger. A rigorous universal claim needs an argument appropriate to its domain; calculus is not required by the standard. |

Approximate solving is read as a complete-solution **objective**, with NumericApproximation
describing the numerical representation obtained. The current definitions do not require
closed-form outputs. They also do not allow a partial sample to become a complete solution
set merely by adding an approximation label. The task must specify its domain and precision;
claims about all roots need corresponding evidence.

For polynomial calculations, use AlgebraicEquivalence and the evidenced laws or rewriting
methods. The numerical definitions of Addition, Subtraction, and Multiplication do not by
themselves license claims about polynomial objects. FunctionArithmetic applies when functions
are actually combined pointwise. This does not require a separate Area per operation and
object kind.

Mixed systems expose an annotation issue rather than a missing mathematical concept.
For y=x together with x^2+y^2=2, the first residual is affine and the second quadratic;
the whole system does not meet QuadraticDependence's requirement that **each** governing
residual have degree two. Keep the object of each dependence claim explicit in the task or
competency description. A flat collection of labels does not independently bind each property
to one displayed relation.

## Reviewed coverage decisions

### General functions

The accepted composition is NumericFunction, FunctionSymbol, and FunctionArgument for the
numerical correspondence and formal expression roles reviewed in F-IF.A.1. This needs no new
function descriptor or relocation. FunctionNotation remains available when its conventions
are themselves the subject of knowledge. NumericFunction keeps its numerical boundary;
the acceptance does not redefine it as arbitrary-set correspondence.
See [F-IF](https://www.thecorestandards.org/Math/Content/HSF/IF/) and the
[functions introduction](https://www.thecorestandards.org/Math/Content/HSF/).

The initial proposal to replace FunctionTypes with a general specialization parent was
rejected. Retain the existing type family. The earlier suggestions to relocate FunctionNotation
or add FunctionDefinition are not part of this implementation and are not blockers for the
accepted coverage. The [follow-up record](#1-retain-functiontypes-and-clarify-formal-function-knowledge)
distinguishes the existing concepts and the separate graph facet of the standard.

### Dimensional analysis

For [N-Q.A.1](https://www.thecorestandards.org/Math/Content/HSN/Q/), compare explaining why
(meters/second)*seconds has length dimension with explaining why a speed and a time cannot
be added. No numerical evaluation or change of unit is required. UnitConversion and
UnitScaleRelation cover different knowledge, and ordinary numerical operations do not supply
the dimensional rule. DimensionalAbstraction is a Scope for spatial dimensions, not this concept.

Implemented for preview: UnitDimensionality, covering composition of dimensions in products,
quotients, and powers, and compatibility of dimensions in sums and equalities, placed under
MeasuringWithUnits. Keep concrete unit contexts as Scopes. Consistent dimensions
are necessary but do not establish that a proposed physical formula is correct.
N-Q.A.2's selection of relevant quantities is already explicit in AlgebraicModeling; N-Q.A.3
can combine approximation, rounding knowledge, and an evidenced choice of appropriate precision.
A displayed number of decimal places alone does not establish measurement accuracy.

### Pythagorean theorem

[G-SRT.C.8](https://www.thecorestandards.org/Math/Content/HSG/SRT/) explicitly includes this
theorem. Its proof/converse and applications also occur in
[8.G.B.6-8](https://www.thecorestandards.org/Math/Content/8/G/), outside the main inventory below.
G-SRT.B.4 also explicitly requires its proof using triangle similarity. Existing RightTriangle
and Triangle knowledge provides broad coverage of applications; the added theorem identifies
the reusable result itself more precisely.
Implemented for preview: PythagoreanTheorem, expressing the relation a^2+b^2=c^2 for right
triangles and the converse for a triangle with positive side lengths and longest side c.
The reviewed placement, directly under GeometricRelations, is agreed. It needs no new
theorem/triangle-relations organizer or constituent under RightTriangle's specialization chain.

Use a right triangle with legs 1 and sqrt(2), hence hypotenuse sqrt(3), as a boundary example:
it is not an integer Pythagorean triple. Conversely, merely checking 3^2+4^2=5^2 does not
prove the general theorem. CoordinateDistance and LengthCalculation describe objectives;
they do not identify every theorem used to achieve them. The trigonometric identity can be
related to the geometric theorem without being an alias or replacement.

## Targeted follow-up proposal

Drafted, revised, and implemented for preview on 2026-10-11 from the `1b9ecc3` source baseline.
The accepted implementation retains the complete function family and adds UnitDimensionality
under MeasuringWithUnits and PythagoreanTheorem under GeometricRelations. The Turtle below
records those authored additions and the clarification of MeasuringWithUnits. FunctionNotation
and Measurement retain their existing placement. The inventory later in this document
continues to report the historical baseline, rather than silently substituting the new terms.

### 1. Retain FunctionTypes and clarify formal function knowledge

The earlier replacement of FunctionTypes is withdrawn. Retain its four constituent types
and all their relationships. NumericFunction, FunctionSymbol, and FunctionArgument are accepted
as the composition covering the reviewed numerical correspondence and expression roles:

| Existing concept | Current meaning and placement | Example |
| --- | --- | --- |
| FunctionSymbol | The role identifying the function being applied; specializes Operator under ExpressionStructure. | f in f(x + 1), or sin in sin(x). |
| FunctionArgument | The role of the supplied input; specializes Operand under ExpressionStructure. | The whole x + 1 in f(x + 1). |
| AlgebraicExpression | Includes expressions containing nonarithmetic function applications; specializes MathematicalExpression under FormalMathematics. | The complete expression f(x + 1) or sin(1). |
| FunctionNotation | Conventions for names, arguments, and outputs; currently partOf AlgebraicFunctions. | The difference between f and f(3). |
| NumericFunction | Numerical input-output correspondence with exactly one output per admitted input; partOf FunctionTypes. | x mapped to x^2 over the reals. |
| FunctionArithmetic | Pointwise arithmetic combinations of numerical functions; partOf AlgebraicFunctions. | (f + g)(x) = f(x) + g(x). |

There is no missing function-name primitive: that is FunctionSymbol. A further `Function`
role would duplicate it, while reviving FunctionApplicationExpression would reverse the
earlier choice to compose an expression kind with its structural roles.

No function source changes are required for the accepted composition. FunctionNotation keeps
its current definition and placement in AlgebraicFunctions; FunctionSymbol and FunctionArgument
keep their specialization parents. The earlier relocation suggestion remains a separate,
deferred organizational question, rather than a requirement of this preview.

#### What F-IF.A.1 requires

[F-IF.A.1](https://www.thecorestandards.org/Math/Content/HSF/IF/) combines three distinguishable
claims: each input has exactly one output, f(x) denotes that output, and the function graph
is the locus of y = f(x). The current FunctionArithmetic definition instead addresses
pointwise combinations, the subject of [F-BF.A.1.b](https://www.thecorestandards.org/Math/Content/HSF/BF/).
NumericFunction covers the first claim for numerical inputs and outputs. The accepted
composition adds the formal roles where they are interpreted or explained; incidental symbol
occurrence does not establish those knowledge claims. The graph facet uses the existing
function, equation, solution-set, coordinate, and representation concepts as evidenced.

| Observable question | Knowledge distinguished |
| --- | --- |
| Identify the function name and complete input in f(x + 1) | Existing FunctionSymbol and FunctionArgument. |
| Explain why f denotes a function but f(3) denotes one of its values | Existing FunctionNotation. |
| Decide whether a numerical input-output table defines a function | NumericFunction; notation need not be the subject. |
| Determine (f + g)(x) from two numerical functions | FunctionArithmetic, with the evidenced arithmetic and domains. |
| Relate graph points to the equation y = f(x) | Compose existing function, equation, solution-set, coordinate, and representation knowledge as evidenced; not FunctionArithmetic by default. |

The earlier arbitrary-set example, assigning each pupil a birth-month name, remains outside
NumericFunction's definition. A future curriculum focused on such correspondence may motivate
the previously discussed FunctionDefinition concept, but that extension is deferred and is
not a remaining action for this accepted numerical scope. FunctionRange continues to mean
attained outputs, and inversion continues to exchange domain and attained range.

### 2. Add UnitDimensionality under MeasuringWithUnits

Use one reusable concept for dimensional composition and consistency. This supplies the
unit-manipulation distinction in [6.RP.A.3.d](https://www.thecorestandards.org/Math/Content/6/RP/)
and consistent formula use in [N-Q.A.1](https://www.thecorestandards.org/Math/Content/HSN/Q/).

```turtle
:UnitDimensionality a owl:NamedIndividual, edu:Area;
    rdfs:isDefinedBy "The composition of quantity dimensions and units through products, quotients, and powers, and dimensional compatibility in sums and equalities.";
    rdfs:comment "Explaining why (m/s)*s has length dimension, why a speed cannot be added to a duration, and why the ratio of two lengths has dimension one.";
    edu:partOf :MeasuringWithUnits.
```

The name UnitDimensionality and its placement under MeasuringWithUnits are implemented.
The organizer's definition and example now explicitly include unit composition and compatibility:

```turtle
:MeasuringWithUnits a owl:NamedIndividual, edu:Area;
    rdfs:isDefinedBy "Standard units for expressing quantities, their systems, relative sizes and conversions, and their composition and compatibility in quantity relations.";
    rdfs:comment "Expressing one meter as one hundred centimeters; relating meters per second to distance and duration.";
    edu:partOf :Measurement.
```

Measurement keeps its definition and placement under SpatialSense. Promoting it to a root
field remains a separate deferred suggestion: it already contains time and general units,
while SpatialSense is explicitly about two- and three-dimensional space. This preview adds
the requested knowledge within the existing unit family without changing old structural paths.

Keep UnitConversion and its neighbors independent. Converting 3 m to cm does not establish
knowledge of dimensional composition. Conversely, rejecting d = v + t because the dimensions
are incompatible does not require changing units or evaluating numbers. Explaining why
(m/s)*s produces a length or deriving the dimension of k in E = k*v^2 does establish the new
knowledge. Add the actual Ability and algebraic methods evidenced by each task.

Boundaries follow the distinctions in [NIST SP 330, section 2](https://www.nist.gov/pml/special-publication-330/sp-330-section-2)
and [SP 811, chapter 7](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-7-rules-and-style-conventions-expressing-values):

- Matching dimensions are necessary for sums and equalities of quantities, but do not
  establish meaningful combination or formula correctness. Energy and torque share dimensions;
  dimensional checking cannot determine a dimensionless numerical coefficient.
- A quantity's dimension is independent of its unit. Dimension-one quantities retain their
  contextual meaning; a ratio of lengths does not become an arbitrary unnamed quantity.
- Quantity equations differ from numerical-value equations tied to specified units. Offset
  temperature readings need their conversion convention: a 10 degree Celsius interval is
  10 kelvin, while a 10 degree Celsius temperature corresponds to 283.15 kelvin.

These are adoption boundaries, not additional leaves. Separate QuantityDimension,
UnitAlgebra, and DimensionalConsistency concepts would overdivide the present need.
Keep concrete units as Scopes; do not reuse the spatial DimensionalAbstraction Scope.
No new progression edge is needed.

The retained hierarchy is structurally valid; the broader organizational question above
does not change the new descriptor's dimensional meaning or its evidence boundary.

### 3. Add PythagoreanTheorem directly under GeometricRelations

The direct GeometricRelations placement is agreed. Use one concept for the theorem and its
converse: both directions describe the same
geometric equivalence. [8.G.B.6](https://www.thecorestandards.org/Math/Content/8/G/) explicitly
pairs them; [G-SRT.B.4 and C.8](https://www.thecorestandards.org/Math/Content/HSG/SRT/) require
a similarity proof and applications respectively.

```turtle
:PythagoreanTheorem a owl:NamedIndividual, edu:Area;
    rdfs:isDefinedBy "The equivalence, for a Euclidean triangle with positive real side lengths a, b, and longest side c, between the angle opposite c being a right angle and a^2 + b^2 = c^2.";
    rdfs:comment "A right triangle with legs 1 and sqrt(2) has hypotenuse sqrt(3); a triangle with side lengths 5, 12, and 13 is right-angled because 5^2 + 12^2 = 13^2.";
    edu:expands :RightTriangle;
    edu:partOf :GeometricRelations.
```

GeometricRelations already organizes spatial and quantitative relationships. A new
TriangleRelations organizer can wait for a coordinated treatment of triangle laws; a
one-child organizer is unnecessary here. ShapeEquivalenceRelations compares figures,
whereas this theorem relates sides and an angle within a triangle. A constituent beneath
RightTriangle or Triangle would violate the existing specialization-path rule (ONT-S4).
It also needs no second structural parent in AlgebraicEquivalence: the geometric result
and any algebraic rewriting used with it remain composable knowledge.

The `expands RightTriangle` edge records the added metric characterization. Retain the
existing definitions and placements of PythagoreanTriples, PythagoreanTrigonometricIdentity,
and CoordinateDistance. Integer solutions, the trigonometric identity, and distance
calculation are independent concepts; none is an alias of this theorem. Potential
`integrates PythagoreanTheorem` links from the identity and coordinate-distance concepts
can be reviewed separately if their geometric construction is recorded. Do not add an
automatic theorem relation to pure integer-triple knowledge or every distance calculation.

| Evidence probe | Distinction |
| --- | --- |
| Find the hypotenuse from legs 1 and sqrt(2) using the squared-length relation | Theorem knowledge extends beyond integer triples. |
| Infer a right angle from side lengths 5, 12, 13 | Converse direction of the same concept. |
| Prove the relation by similar triangles formed by an altitude to the hypotenuse | Compose theorem, SimilarityRelation, relevant algebra, DeductiveReasoning, and DirectProof as evidenced. |
| Check 3^2 + 4^2 = 5^2 | Verifies an instance; does not prove the general theorem. |
| Identify a right triangle from an angle marking | RightTriangle alone; the theorem is not evidenced. |

### Implementation, adoption, and preview — 2026-10-11

Implemented on `codex/unit-dimensionality-pythagorean`, pending preview review. The authored
source now has **967 descriptors and 5,171 assertions**, compared with the historical audit
baseline of 965 descriptors and 5,159 assertions. The change adds two eligible Areas and
retires none. The only existing descriptor changed is MeasuringWithUnits, whose definition
and example explicitly accommodate its new constituent.

| Change | Authored effect | Adoption boundary |
| --- | --- | --- |
| UnitDimensionality | New constituent of MeasuringWithUnits, defining dimensional composition and compatibility. | Add only where the content uses or explains those rules; ordinary unit conversion alone is insufficient. |
| PythagoreanTheorem | New constituent of GeometricRelations, expanding RightTriangle through the metric characterization and converse. | Use for theorem-specific application or justification, not every right-triangle task. |
| MeasuringWithUnits | Definition and example clarified; identifier, relations, and organizer role retained. | Existing exclusions from direct labels remain appropriate. |
| Function coverage | NumericFunction with FunctionSymbol and FunctionArgument accepted for the reviewed numerical and formal roles. | No function descriptor, notation placement, or type relationship changes. |

All existing descriptors retain their eligibility, structural ancestry, and specialization
ancestry. Measurement remains under SpatialSense; FunctionNotation remains in AlgebraicFunctions.
The prior graph simulations included relocations that are excluded from this implementation;
their structural-consumer effects do not apply to the preview.

The historical tables below intentionally retain their **114 core leaves and 183 distinct
mapping descriptors**. Apply the following additions during consumer adoption, rather than
silently rewriting that baseline:

- N-Q.A.1 and 6.RP.A.3.d may use UnitDimensionality when dimensional composition or consistency
  is actually evidenced. Existing conversion-only tasks retain their existing concepts.
- G-SRT.C.8 may use PythagoreanTheorem when the theorem supplies the right-triangle relation.
  Proof and converse probes in 8.G.B.6-8 and G-SRT.B.4 can also use it, without changing this
  selected inventory's count.
- F-IF.A.1 uses the accepted existing composition for numerical correspondence and expression
  roles; its graph facet continues to compose the existing graph and solution-set concepts.

Select this branch in the ontology editor for preview. Review UnitDimensionality within
MeasuringWithUnits and PythagoreanTheorem within GeometricRelations, including its progression
relation to RightTriangle. Regenerated clients and downstream package adoption are separate
from accepting the source preview; this change does not update content dependencies or datasets.

Focused source and delta assessment passes all seven ontology checks and confirms the counts,
the exact two additions, unchanged existing ancestry and eligibility, and unchanged historical
mapping rows. The full `docker build . --output dist` gate passed on 2026-10-11, including
RDF generation, TypeScript build/client tests, ontology and documentation validation, package
consumer checks, Python lint and typing, all 49 Python tests, and wheel/sdist verification.
Focused checks of the generated TypeScript exports confirm both new identifiers and their
relations; the exported Turtle matches the authored source. The final verification-record
edits also pass documentation validation. These checks do not establish annotation quality,
learner mastery, or dataset coverage.

## Remaining evidence and adoption work

- Translate selected probes into actual competency/task examples before claiming dataset
  coverage. The ontology audit does not test generator support, annotation quality, or model
  distinguishability.
- Resolve decimal/fraction Scope boundaries separately as recorded in the
  [NumberTheory adoption record](number-theory-basics-draft.md#remaining-decisions). Real-number
  approximation must not acquire a rational-context claim merely through a problematic
  decimal representation ancestry.
- Retain task evidence for proof, parameter interpretation, input/output roles, original domains,
  all-solution claims, and approximation guarantees. Neither a family name nor an example
  that happens to use a concept establishes every related learning claim.
- Keep advanced complex numbers, matrix/vector algebra, rational asymptotes, additional
  trigonometric identities and general-triangle laws, and calculus methods on their existing
  later roadmap stages. They do not block the supported core compositions in this report.

## Standards-to-concepts inventory

The domain tables below preserve explicit terminal IDs and eligible vocabulary from the
`1b9ecc3` audit baseline. Boundary rows retain the findings recorded at that time; accepted
decisions and preview additions are recorded above. All other rows have a supported
composition, subject to actual task evidence.


### Inventory totals

| Domains | Terminal core standards reviewed |
| --- | ---: |
| 6.RP, 6.EE, 7.RP, 7.EE, 8.EE, 8.F, 8.NS | 46 |
| N-RN, N-Q, core N-CN | 9 |
| A-SSE, A-APR, A-CED, A-REI | 27 |
| F-IF, F-BF, F-LE, F-TF | 29 |
| G-SRT.C.6-8 crosslinks | 3 |
| **Total** | **114** |

The tables use **C** for supported composition, **B/Boundary** for a specific uncovered breadth
or knowledge clause, **P** for a precision improvement to broadly supported knowledge, and
**E** for an evidence/adoption condition. These are audit judgments, not numerical coverage scores.

### Middle-school and number-system foundations

#### Grade 6 ratios — six leaves

Source: [CCSS 6.RP](https://www.thecorestandards.org/Math/Content/6/RP/).

| Leaf | Requirement fragment | Existing eligible composition | Result |
| --- | --- | --- | --- |
| 6.RP.A.1 | Ratio meaning and language | `RatioAntecedentInterpretation` + `RatioConsequentInterpretation`; `RatioNotation` when notation is taught; `B:Interpretation`/`B:Articulation` | C |
| 6.RP.A.2 | Unit-rate meaning | `RatioAntecedentInterpretation` + `RatioConsequentInterpretation` + `Division` + `ProportionalScaling`; contextual unit Scopes; `B:Interpretation` | C |
| 6.RP.A.3.a | Equivalent-ratio tables and plots | `RatioEquivalence` + `ProportionManipulation` + `OrderedCoordinatePair` + `PointPlotting`; `S:DataTable`/`S:CartesianCoordinateSystem`; `B:Visualization` | C |
| 6.RP.A.3.b | Unit-rate applications | `Division` + `ProportionalScaling` + `DirectProportionalDependence` when the dependence is examined; `B:ProcedureExecution`/`B:ResultInterpretation` | C |
| 6.RP.A.3.c | Percent, part, and whole | `PercentageEquivalence` + `ProportionalScaling` + `Multiplication`/`Division`; `B:ProcedureExecution`/`B:ProcedureInversion` | C |
| 6.RP.A.3.d | Conversion and unit manipulation | `UnitConversion` + `UnitFactorScaling`/`UnitMagnitudeScaling` + `ProportionalScaling` cover conversion. Compound-unit conversion is covered; the rule for combining unit dimensions needs review. | Boundary: unit algebra |

#### Grade 6 expressions and equations — eleven leaves

Source: [CCSS 6.EE](https://www.thecorestandards.org/Math/Content/6/EE/).

| Leaf | Requirement fragment | Existing eligible composition | Result |
| --- | --- | --- | --- |
| 6.EE.A.1 | Numerical expressions with powers | `ArithmeticExpression` + `ArithmeticEvaluation` + `Exponentiation`; `S:IntegerExponent`, and `S:PositiveExponent` only when strictly positive; `B:Formalization`/`B:ProcedureExecution` | C |
| 6.EE.A.2.a | Translate verbal operations | `AlgebraicExpression` + `Variable` + `Operator`, with relevant `Operand` roles; `B:Formalization` | C |
| 6.EE.A.2.b | Expression components and grouping | `Term` + `Factor` + `Coefficient` + `Operand` + `BinaryOperator` + `Subexpression` + `GroupingSymbol` as evidenced; `ArithmeticExpression`/`AlgebraicExpression`; `B:ConceptClassification`/`B:VisualDecomposition` | C |
| 6.EE.A.2.c | Substitution, evaluation, precedence | `AlgebraicSubstitution` + `ArithmeticEvaluation` + `OrderOfOperations` + `Exponentiation` where used; `B:ProcedureExecution` | C |
| 6.EE.A.3 | Generate equivalent forms | `LinearRewriting` + `DistributiveLaw`/`DistributingLinearCombinations`/`CollectingLinearTerms` as used; `AlgebraicEquivalence` remains eligible; `B:ProcedureExecution` | C |
| 6.EE.A.4 | Recognize general equivalence | `AlgebraicEquivalence`; `B:CorrectnessEvaluation` or `B:DeductiveReasoning` when a reason is required; `AlgebraicSubstitution` only when actually used | C; E for unsupported universal claims from examples |
| 6.EE.B.5 | Solution meaning and checks | `SolutionSet` + `RelationSatisfaction` + `AlgebraicSubstitution`; `EquationSolving`/`InequalitySolving` when finding the full set; `B:Interpretation`/`B:CorrectnessEvaluation` | C |
| 6.EE.B.6 | Unknown versus varying quantity | `UnknownVariable` + `VaryingVariable` or general `Variable`; `AlgebraicModeling` + `AlgebraicExpression` when constructing a model; `B:Formalization`/`B:Interpretation` | C |
| 6.EE.B.7 | One-step modeled equations | `AlgebraicModeling` + `Equation` + `EquationSolving` + `AffineDependence`; `S:RationalNumbers` and relevant sign conditions | C |
| 6.EE.B.8 | `Inequality` constraints and number-line solutions | `Inequality` + `SolutionSet` + `InequalitySolving` + `NumerationWithIntervals`; `S:GraphicalSolutionRepresentation`/`S:Numberline`; `B:Visualization`/`B:Interpretation` | C |
| 6.EE.C.9 | Input-output quantities, equations, tables, graphs | `IndependentVariable` + `DependentVariable` + `AlgebraicModeling` + `NumericFunction` + `OrderedCoordinatePair`; `S:DataTable`/`S:CartesianCoordinateSystem`; appropriate dependence and plotting concepts | C |

#### Grade 7 ratios — six leaves

Source: [CCSS 7.RP](https://www.thecorestandards.org/Math/Content/7/RP/).

| Leaf | Requirement fragment | Existing eligible composition | Result |
| --- | --- | --- | --- |
| 7.RP.A.1 | Rates involving fractional quantities | `Division` + `ProportionalScaling` + `RatioAntecedentInterpretation` + `RatioConsequentInterpretation`; `S:FractionNumbers`; relevant units | C; compound-unit generalization shares 6.RP.A.3.d boundary |
| 7.RP.A.2.a | Recognize proportionality | `ProportionIdentification` + `DirectProportionalDependence` + `RatioEquivalence`; `Origin`/`LineGraphing` when graph evidence is used; `S:DataTable`/`S:CartesianCoordinateSystem` | C |
| 7.RP.A.2.b | Identify proportionality constant | `DirectProportionalDependence` + `Coefficient` + `Division` where calculated; `SlopeConcept` for a graph; `B:InformationExtraction`/`B:Interpretation` | C |
| 7.RP.A.2.c | Proportional equations | `ProportionExpression` + `Equation` + `DirectProportionalDependence`; `B:Formalization` | C |
| 7.RP.A.2.d | Interpret plotted pairs | `OrderedCoordinatePair` + `DirectProportionalDependence` + `Origin` when relevant; `S:CartesianCoordinateSystem`; `B:Interpretation`/`B:ResultInterpretation` | C |
| 7.RP.A.3 | Multistep ratio and percent applications | `ProportionalScaling` + `PercentageEquivalence` + arithmetic operations; `NumericApproximation` where used; `B:ProcedureComposition`/`B:ProcedureExecution`/`B:ResultInterpretation` | C |

#### Grade 7 expressions and equations — five leaves

Source: [CCSS 7.EE](https://www.thecorestandards.org/Math/Content/7/EE/).

| Leaf | Requirement fragment | Existing eligible composition | Result |
| --- | --- | --- | --- |
| 7.EE.A.1 | Linear expansion and factoring | `LinearRewriting` + `CollectingLinearTerms`/`DistributingLinearCombinations`/`AlgebraicFactorization`; `S:RationalNumbers`; `B:ProcedureExecution` | C |
| 7.EE.A.2 | Interpret equivalent contextual forms | `AlgebraicEquivalence` + `AlgebraicModeling`; `PercentageEquivalence`/`ProportionalScaling` when relevant; `B:Interpretation`/`B:ResultInterpretation` | C |
| 7.EE.B.3 | Multistep rational problems and reasonableness | `ArithmeticEvaluation` + actual operations + `DecimalEquivalence`/`PercentageEquivalence` + `NumericApproximation`; `B:ProcedureComposition`/`B:PlausibilityEvaluation` | C |
| 7.EE.B.4.a | Affine equations; compare approaches | `EquationSolving` + `AffineDependence` + `AlgebraicModeling` + `LinearRewriting`; arithmetic alternative uses `ArithmeticEvaluation`; `B:ProcedureUnderstanding`/`B:AnalogicalReasoning` | C |
| 7.EE.B.4.b | Affine inequalities and contextual solutions | `InequalitySolving` + `AffineDependence` + `AlgebraicModeling` + `SolutionSet` + `NumerationWithIntervals`; `S:GraphicalSolutionRepresentation`; `B:ResultInterpretation` | C |

#### Grade 8 expressions and equations — eleven leaves

Source: [CCSS 8.EE](https://www.thecorestandards.org/Math/Content/8/EE/).

| Leaf | Requirement fragment | Existing eligible composition | Result |
| --- | --- | --- | --- |
| 8.EE.A.1 | Integer exponent identities | `ExponentLaws` + `Exponentiation` + `ArithmeticEvaluation`; `S:IntegerExponent`, `S:NegativeExponent` when used; `B:ProcedureExecution`/`B:ProcedureUnderstanding` | C |
| 8.EE.A.2 | `Root` notation, root solutions, irrationality | `Root` + `EquationSolving` + `Exponentiation`; `RationalNumberCharacterization`/`NumberSystemRelations` for the irrationality component; `B:Interpretation`/`B:ConceptClassification` | C |
| 8.EE.A.3 | Large/small estimates and comparisons | `NumericApproximation` + `NumericOrder` + `Division` + `Exponentiation`; `S:ScientificExponentNotation`/`S:PowersOf10`; `B:ProcedureExecution` | C |
| 8.EE.A.4 | Scientific arithmetic, units, technology notation | `ArithmeticExpression` + `ArithmeticEvaluation` + `ExponentLaws` + `UnitScaleRelation`/`UnitConversion`; `S:ScientificExponentNotation`; `B:Interpretation`/`B:ProcedureExecution` | C |
| 8.EE.B.5 | Proportional graphs and unit-rate slope | `DirectProportionalDependence` + `SlopeConcept` + `AverageRateOfChange` + `LineGraphing` + `NumericOrder`; contextual units/representations; `B:Interpretation` | C |
| 8.EE.B.6 | Similar triangles justify slope/line equations | `SimilarityRelation` + `Triangle` + `SlopeConcept` + `AffineDependence` + `Equation`; `B:DeductiveReasoning`/`B:ConceptDerivation` | C |
| 8.EE.C.7.a | Unique, empty, or infinite solutions | `EquationSolving` + `SolutionSet` + `AffineDependence` + `AlgebraicEquivalence`/`LinearRewriting`; `B:CorrectnessEvaluation`/`B:ProcedureUnderstanding` | C |
| 8.EE.C.7.b | Solve rational-coefficient equations | `EquationSolving` + `AffineDependence` + `DistributingLinearCombinations` + `CollectingLinearTerms`; `S:RationalNumbers`; `B:ProcedureExecution` | C |
| 8.EE.C.8.a | Graph intersections as joint solutions | `SystemOfEquations` + `SolutionSet` + `RelationSatisfaction` + `LineGraphing`; `S:GraphicalSolutionRepresentation`; `B:Interpretation`/`B:DeductiveReasoning` | C |
| 8.EE.C.8.b | Algebraic, graphical, inspection solutions | `SystemSolving` + `AffineDependence` + `SystemElimination`/`SystemSubstitution` when used; `NumericApproximation` for graph estimates; `S:GraphicalSolutionRepresentation` | C |
| 8.EE.C.8.c | Model two-equation problems | `AlgebraicModeling` + `SystemOfEquations` + `SystemSolving` + `AffineDependence`; `LineGraphing`/`IntersectionRelation` as evidenced | C |

#### Grade 8 functions — five leaves

Source: [CCSS 8.F](https://www.thecorestandards.org/Math/Content/8/F/). Function notation is explicitly not required in grade 8; do not infer `FunctionNotation` solely from a table or graph.

| Leaf | Requirement fragment | Existing eligible composition | Result |
| --- | --- | --- | --- |
| 8.F.A.1 | Single-output rule and ordered-pair graph | `NumericFunction` + `OrderedCoordinatePair` + `FunctionDomain` where domain matters; `S:CartesianCoordinateSystem`; `B:Interpretation`/`B:ConceptClassification` | C for numerical functions; general-set breadth is discussed with F-IF.A.1 |
| 8.F.A.2 | Compare differently represented functions | `NumericFunction` + compared property, such as `AverageRateOfChange` + `NumericOrder`; `S:DataTable`/`S:CartesianCoordinateSystem`; `B:Interpretation` | C |
| 8.F.A.3 | Affine line versus nonlinear function | `NumericFunction` + `AffineDependence` + `LineGraphing`; contrasting `PowerFunction`/`QuadraticDependence` when actually evidenced; `B:ConceptClassification` | C |
| 8.F.B.4 | Build affine model; interpret slope and start | `AlgebraicModeling` + `NumericFunction` + `AffineDependence` + `AverageRateOfChange` + `ConstantTerm`; `AlgebraicSubstitution` for value at zero; `B:Formalization`/`B:Interpretation` | C |
| 8.F.B.5 | Qualitative graphs and verbal features | `NumericFunction` + `FunctionMonotonicity` + `AffineDependence` only for affine portions; `S:CartesianCoordinateSystem`; `B:SpatialInterpretation`/`B:Visualization` | C |

#### Grade 8 number systems — two leaves

Source: [CCSS 8.NS](https://www.thecorestandards.org/Math/Content/8/NS/).

| Leaf | Requirement fragment | Existing eligible composition | Result |
| --- | --- | --- | --- |
| 8.NS.A.1 | Rational/irrational decimals and conversion | `RationalNumberCharacterization` + `NumberSystemRelations` + `DecimalEquivalence`; `AlgebraicEquivalence`/`EquationSolving` if the repeating-decimal conversion uses an equation; `S:RationalNumbers`/`S:IrrationalNumbers` as evidenced | C; E for existing `S:DecimalNumbers`/`S:FractionNumbers` boundaries |
| 8.NS.A.2 | Approximate, compare, locate, estimate | `NumericApproximation` + `NumericOrder` + `Numeration`; `NumerationWithIntervals` for enclosing bounds; `S:IrrationalNumbers`/`S:RealNumbers`/`S:Numberline`; `Exponentiation` and `ArithmeticEvaluation` for expression estimates | C |

#### High-school real numbers — three leaves

Source: [CCSS N-RN](https://www.thecorestandards.org/Math/Content/HSN/RN/).

| Leaf | Requirement fragment | Existing eligible composition | Result |
| --- | --- | --- | --- |
| N-RN.A.1 | Justify rational exponents from integer laws | `ExponentLaws` + `Root` + `Exponentiation`; `S:FractionExponent` when written as a fraction; `B:ConceptDerivation`/`B:DeductiveReasoning`, or `B:ProcedureUnderstanding` for an explained procedure | C |
| N-RN.A.2 | Radical/rational-power rewriting | `ExponentLaws` + `Root` + `Exponentiation` + `AlgebraicEquivalence`; `S:FractionExponent` when present; `B:ProcedureExecution` | C |
| N-RN.B.3 | Rational and mixed result types | `NumberOperationResultTypes` + `RationalNumberCharacterization`; `OperationClosure` for rational+rational or rational*rational claims; `B:DeductiveReasoning` | C |

#### High-school quantities — three leaves

Source: [CCSS N-Q](https://www.thecorestandards.org/Math/Content/HSN/Q/).

| Leaf | Requirement fragment | Existing eligible composition | Result |
| --- | --- | --- | --- |
| N-Q.A.1 | Consistent units and graphical scales/origins | `UnitConversion` + `UnitScaleRelation`; `CoordinateAxes` + `Origin` with `B:Interpretation`/`B:Visualization` for scale/origin choices; `AlgebraicModeling` for quantities. No existing eligible definition expresses unit algebra or dimensional compatibility of a formula. | Boundary: unit algebra |
| N-Q.A.2 | Select descriptive-model quantities | `AlgebraicModeling` explicitly includes selecting relevant quantities and their relationships; `B:ConceptSpecification`/`B:Formalization`; relevant context Scopes | C |
| N-Q.A.3 | Report measurement-appropriate accuracy | `NumericApproximation` + `DecimalPrecission`/`DecimalRounding` where relevant + `B:ProcedureApplicability`/`B:CorrectnessEvaluation`/`B:ResultInterpretation`; `S:ProvidedMeasurement` and actual instrument Scopes | C; E if measurement limitations are not observable |

#### High-school core complex numbers — three leaves

Source: [CCSS N-CN](https://www.thecorestandards.org/Math/Content/HSN/CN/).

| Leaf | Requirement fragment | Existing eligible composition | Result |
| --- | --- | --- | --- |
| N-CN.A.1 | Imaginary unit and complex form | `ComplexNumberStructure`; `S:ComplexNumbers`; `B:Interpretation`/`B:ConceptClassification` | C |
| N-CN.A.2 | Complex addition, subtraction, multiplication | `ComplexNumberStructure` + `Addition`/`Subtraction`/`Multiplication` + `AssociativeLaw`/`CommutativeLaw`/`DistributiveLaw` when used; `S:ComplexNumbers`; `B:ProcedureExecution` | C |
| N-CN.C.7 | Real-coefficient quadratic, complex roots | `EquationSolving` + `QuadraticDependence` + `QuadraticFormula`/`CompletingSquare` as used; `ComplexNumberStructure`; `S:ComplexNumbers` | C |

### High-school Algebra

Sources: [A-SSE](https://www.thecorestandards.org/Math/Content/HSA/SSE/),
[A-APR](https://www.thecorestandards.org/Math/Content/HSA/APR/),
[A-CED](https://www.thecorestandards.org/Math/Content/HSA/CED/), and
[A-REI](https://www.thecorestandards.org/Math/Content/HSA/REI/).
All 27 core leaves have supported compositions. A-APR.C.5/D.7 and A-REI.C.8/C.9 are (+).

#### Seeing Structure in Expressions

| Core leaf | Evidence to identify | Existing eligible concepts |
| --- | --- | --- |
| A-SSE.A.1a | Meaning of constituent roles | `Term`, `Factor`, `Coefficient`; `B:Interpretation` |
| A-SSE.A.1b | `Subexpression` treated as a unit | `Factor`, `GroupingSymbol`, `AlgebraicExpression`; `B:Interpretation` |
| A-SSE.A.2 | Recognized equivalent pattern | `AlgebraicEquivalence`, `AlgebraicFactorization`, `DifferenceOfSquaresIdentity`, `BinomialSquareIdentities`, or another evidenced rewriting specialization |
| A-SSE.B.3a | Product form exposes zeros | `AlgebraicFactorization`, `FunctionZeros`, `QuadraticDependence`; `PolynomialFactorTheorem` or `AlgebraicEquivalence` when the connection itself is explained |
| A-SSE.B.3b | Square form exposes extrema | `CompletingSquare`, `FunctionExtrema`, `QuadraticDependence` |
| A-SSE.B.3c | Equivalent exponential form | `ExponentialRewriting`, `ExponentLaws`, `ExponentialDependence`; `B:ResultInterpretation` for the contextual parameter meaning |
| A-SSE.B.4 | Finite sum derivation/application | `FiniteGeometricSum`; `B:DeductiveReasoning` and `S:DirectProof` for derivation; `B:ProcedureExecution` for application; `AlgebraicModeling` when constructing the situational model |

#### Arithmetic with Polynomials and Rational Expressions

| Core leaf | Evidence to identify | Existing eligible concepts |
| --- | --- | --- |
| A-APR.A.1 | Closure and polynomial calculation | `OperationClosure`, `PolynomialDependence`; `AlgebraicEquivalence`, `CollectingLinearTerms`, `DistributiveLaw` for the performed operations |
| A-APR.B.2 | Remainder/value/factor connection | `PolynomialRemainderTheorem`, `PolynomialFactorTheorem`; `AlgebraicSubstitution` and `PolynomialDivision` only when carried out or examined |
| A-APR.B.3 | Zeros support rough graph | `FunctionZeros`, `PolynomialFactorTheorem`, `PolynomialDependence`; `B:Visualization`; `FunctionSign`/`FunctionEndBehavior` when actually established |
| A-APR.C.4 | General identity and consequence | `AlgebraicEquivalence`, `PolynomialDependence`, with the specific identity when present; `B:DeductiveReasoning`, `S:DirectProof`; `PythagoreanTriples` for that application |
| A-APR.D.6 | Quotient/remainder rational form | `PolynomialDivision`, `AlgebraicEquivalence`, `RationalDependence` |

#### Creating Equations

| Core leaf | Evidence to identify | Existing eligible concepts |
| --- | --- | --- |
| A-CED.A.1 | One-unknown situational constraint | `AlgebraicModeling`, `EquationSolving` or `InequalitySolving`; `S:SingleVariable`; evidenced dependence |
| A-CED.A.2 | Multivariable model and graph | `AlgebraicModeling`, `Equation`, `CoordinateAxes`; `B:Visualization`; `S:CartesianCoordinateSystem`; `LineGraphing` only for a straight line |
| A-CED.A.3 | Feasibility under joint conditions | `AlgebraicModeling`, `ConstraintSystem`, `RelationSatisfaction`, `SystemSolving`; `B:ResultInterpretation` |
| A-CED.A.4 | Isolate designated quantity | `EquationSolving`, `AlgebraicEquivalence`; `Parameter`/`Coefficient` only when their roles are examined; `ConstraintTransformationLogic` when reversibility or exceptional parameter values are considered |

#### Reasoning with Equations and Inequalities

| Core leaf | Evidence to identify | Existing eligible concepts |
| --- | --- | --- |
| A-REI.A.1 | Justify solution steps | `EquationSolving`, `AlgebraicEquivalence`, `ConstraintTransformationLogic`; `B:ProcedureUnderstanding`, `B:DeductiveReasoning`; `S:DirectProof` if a proof is supplied or required |
| A-REI.A.2 | Rational/radical candidates checked | `EquationSolving`, `ConstraintTransformationLogic`, `RelationSatisfaction`; `RationalDependence` or `Root` as evidenced; `S:ClearingDenominators`/`S:SquaringBothSides`; `B:CorrectnessEvaluation` |
| A-REI.B.3 | Affine solving including parameters | `EquationSolving`/`InequalitySolving`, `AffineDependence`, `AlgebraicEquivalence`; `S:SingleVariable`; `Parameter` or `Coefficient` only for role knowledge |
| A-REI.B.4a | Square completion derives formula | `CompletingSquare`, `QuadraticFormula`, `EquationSolving`; `B:DeductiveReasoning`, `S:DirectProof` |
| A-REI.B.4b | Appropriate quadratic method | `EquationSolving`, `QuadraticDependence`, evidenced `Root`, `CompletingSquare`, `QuadraticFormula`, or `AlgebraicFactorization`; `ComplexNumberStructure` when complex form is interpreted/constructed; `S:ComplexNumbers` where applicable |
| A-REI.C.5 | Reversible system row replacement | `SystemRewriting`, `AlgebraicEquivalence`; `SystemElimination` when a variable or term is eliminated; `B:DeductiveReasoning`, `S:DirectProof` |
| A-REI.C.6 | Exact/approximate affine system | `SystemSolving`, `AffineDependence`, evidenced `SystemSubstitution`/`SystemElimination`; graphical tasks add `S:GraphicalSolutionRepresentation`, `B:Visualization`, `NumericApproximation` where approximate |
| A-REI.C.7 | Mixed affine/quadratic system | `SystemSolving`, evidenced `SystemSubstitution`; graphical work adds `S:GraphicalSolutionRepresentation`, `B:Visualization`; dependence claims refer to their actual individual relations |
| A-REI.D.10 | Entire locus equals solution set | `SolutionSet`, `RelationSatisfaction`, `Equation`; `S:GraphicalSolutionRepresentation`, `S:CartesianCoordinateSystem`; `B:Interpretation` |
| A-REI.D.11 | Intersection inputs solve equality | `EquationSolving`, `SolutionSet`, `RelationSatisfaction`, `NumericApproximation`; `S:GraphicalSolutionRepresentation` for graphs; appropriate function/dependence Areas only when their knowledge is involved |
| A-REI.D.12 | Simultaneous half-plane conditions | `InequalitySolving`/`SystemSolving`, `SolutionSet`, `AffineDependence`; `S:GraphicalSolutionRepresentation`, `S:CartesianCoordinateSystem`; `B:Visualization` |

### High-school Functions and right-triangle crosslinks

Sources: [F-IF](https://www.thecorestandards.org/Math/Content/HSF/IF/),
[F-BF](https://www.thecorestandards.org/Math/Content/HSF/BF/),
[F-LE](https://www.thecorestandards.org/Math/Content/HSF/LE/),
[F-TF](https://www.thecorestandards.org/Math/Content/HSF/TF/), and
[G-SRT](https://www.thecorestandards.org/Math/Content/HSG/SRT/).
The 29 Functions leaves comprise 13 IF, 5 BF, 7 LE, and 4 TF leaves. G-SRT.C.6-8 adds three.
Excluded (+) Functions leaves are F-IF.C.7.d; F-BF.A.1.c, B.4.b-d, B.5;
F-TF.A.3-4, B.6-7, C.9. General-triangle G-SRT.D.9-11 is also (+).

| Core leaf | Existing eligible knowledge / composition | Result and limit |
| --- | --- | --- |
| F-IF.A.1 | `NumericFunction` + `FunctionDomain` + `FunctionRange` + `FunctionNotation`; `OrderedCoordinatePair`, `Equation`, `SolutionSet` and `S:GraphicalSolutionRepresentation` for the graph relationship | **B:** numerical mappings and their graphs covered; generic set-to-set correspondence is not. See the general-functions decision above. |
| F-IF.A.2 | `FunctionNotation`; `AlgebraicSubstitution` + `ArithmeticEvaluation`; `FunctionDomain` and the particular operation/function when learned or applied | **C:** interpreting notation and evaluating inputs remain distinct. |
| F-IF.A.3 | `Sequence` + `NumericFunction`; `RecursiveSequence` when a recurrence is involved; `FunctionDomain` | **C:** recurrence and integer indexing are explicit. |
| F-IF.B.4 | `FunctionZeros`, `FunctionMonotonicity`, `FunctionSign`, `FunctionExtrema`, `FunctionSymmetry`, `FunctionEndBehavior`, `FunctionPeriodicity`; `NumericFunction` + `AlgebraicModeling` and representation/interpretation Abilities | **C:** y-intercepts compose input-zero evaluation and coordinates; no intercept family required. |
| F-IF.B.5 | `FunctionDomain` + `NumericFunction` + `AlgebraicModeling`, with relevant numeric and coordinate Scopes | **C:** contextual input restrictions are explicit in `FunctionDomain`. |
| F-IF.B.6 | `AverageRateOfChange` + `NumericFunction`; arithmetic and `NumericApproximation` when estimated | **C:** no derivative or `InstantaneousRateOfChange` required. |
| F-IF.C.7.a | `NumericFunction` + `AffineDependence` or `QuadraticDependence`; `FunctionZeros`, `FunctionExtrema`; `B:Visualization` + `S:CartesianCoordinateSystem` | **C:** `LineGraphing` is available for straight lines; it must not label parabolas. |
| F-IF.C.7.b | `PowerFunction` with the stated real root convention; `PiecewiseFunction` + `BranchCondition`; `AbsoluteValueFunction`; function properties and `B:Visualization` | **C:** step functions use constant rules on specified pieces. A shifted root can expose `FunctionTransformation`; it is not literally an ax^p function. |
| F-IF.C.7.c | `NumericFunction` + `PolynomialDependence` + `AlgebraicFactorization` + `FunctionZeros` + `FunctionEndBehavior` + `B:Visualization` | **C:** select factoring only when actually needed, shown, or requested. |
| F-IF.C.7.e | `NumericFunction` + `ExponentialDependence`, `LogarithmicFunction`, or `Sine`/`Cosine`/`Tangent`; `FunctionZeros`, `FunctionEndBehavior`, `FunctionPeriodicity`, `OscillationParameters`; `B:Visualization` | **C:** logarithmic and trigonometric graphs are core. Undefined tangent values remain excluded. |
| F-IF.C.8.a | `NumericFunction` + `QuadraticDependence` + `AlgebraicFactorization` or `CompletingSquare`; `FunctionZeros`, `FunctionExtrema`, `FunctionSymmetry` | **C:** object type, rewriting method, and revealed property compose. |
| F-IF.C.8.b | `NumericFunction` + `ExponentialDependence` + `ExponentialRewriting` / applicable exponent laws; `FunctionMonotonicity` and percentage concepts as evidenced | **C:** rewriting a rescaled exponent can expose the per-unit factor. |
| F-IF.C.9 | The particular function properties plus their object/dependence concepts, `B:VisualReception` or `B:Interpretation`, and relevant representation Scopes | **C:** do not label the ineligible `NumericComparison` organizer; use the actual evidenced equality/order claim where needed. |
| F-BF.A.1.a | `AlgebraicModeling` + `NumericFunction` + `AlgebraicExpression`; `RecursiveSequence` for discrete recurrences; `FunctionDomain` | **C:** explicit formulas need no new ExplicitFunction class. |
| F-BF.A.1.b | `FunctionArithmetic` + `AlgebraicModeling` + relevant function/dependence concepts + `FunctionDomain` | **C:** pointwise arithmetic is already independently represented. |
| F-BF.A.2 | `ArithmeticSequence` or `GeometricSequence` + `RecursiveSequence` when applicable + `AlgebraicModeling` + `AlgebraicEquivalence` | **C:** the same sequence may have explicit and recursive descriptions. |
| F-BF.B.3 | `FunctionTransformation` + `FunctionDomain`; `EvenFunctionSymmetry` / `OddFunctionSymmetry`; `B:Visualization` and inverse/problem-solving Abilities as appropriate | **C:** input/output shifts, reflections, and scalings fit the authored definition. |
| F-BF.B.4.a | `FunctionInversion` + `OneToOneFunction` + `EquationSolving` + relevant rewriting + `FunctionDomain` / `FunctionRange` | **C:** inverse construction is core; a separate inverse type is unnecessary. |
| F-LE.A.1.a | `AffineDependence` + `ExponentialDependence` + `AverageRateOfChange` / `FunctionArithmetic` + relevant arithmetic, with `B:DeductiveReasoning` | **C:** equal differences and equal factors are distinct witnessed invariants. |
| F-LE.A.1.b | `AffineDependence` + `AverageRateOfChange` + `AlgebraicModeling` or relevant interpretation | **C:** includes a nonzero intercept; `DirectProportionalDependence` is narrower. |
| F-LE.A.1.c | `ExponentialDependence` + percentage knowledge + `AlgebraicModeling` / interpretation | **C:** use percent of the current amount; an arbitrary vertical shift does not preserve that characterization. |
| F-LE.A.2 | `AlgebraicModeling` + `NumericFunction` + `AffineDependence` / `ExponentialDependence`; `ArithmeticSequence` / `GeometricSequence` for sequences | **C:** table, graph, and input-output data contexts compose. |
| F-LE.A.3 | `ExponentialDependence` + `PolynomialDependence` + `FunctionEndBehavior`; `FunctionArithmetic` + `FunctionSign` when comparing a difference, with tables/graphs and observational or deductive Ability as actually supported | **C:** no new growth family required. Finite-window evidence needs care; see the growth probe above. |
| F-LE.A.4 | `EquationSolving` + `ExponentialDependence` + `Logarithm` + `AlgebraicEquivalence` / `ExponentialRewriting` + `NumericApproximation` | **C:** logarithmic solutions with valid domains are covered; this requirement is core despite F-BF.B.5 being (+). |
| F-LE.B.5 | `Parameter` + `AlgebraicModeling` + `AffineDependence` / `ExponentialDependence` + `B:ResultInterpretation` | **C:** this is parameter meaning in context, not incidental letters. |
| F-TF.A.1 | `AngleConcept` + `ArchConcept` + `S:RadianScale`; `RatioEquivalence` for radius/arc rescaling, `AngleCalculation` when calculation is asked; `B:ConceptDerivation` / `B:ProcedureUnderstanding` as evidenced | **C:** supported, but `S:RadianScale` alone is insufficient evidence of the arc/radius knowledge; see the radian probe above. |
| F-TF.A.2 | `Sine` / `Cosine` + `AngleConcept` + `Circle` + `OrderedCoordinatePair` + `Quadrants` + `S:RadianScale`; `Tangent` with its excluded inputs where relevant | **C:** unit-circle definitions are already authored; no missing UnitCircleFunction family. |
| F-TF.B.5 | `AlgebraicModeling` + `Sine` / `Cosine` + `FunctionTransformation` + `FunctionPeriodicity` + `OscillationParameters` | **C:** frequency, period, amplitude, and midline are covered. |
| F-TF.C.8 | `PythagoreanTrigonometricIdentity` + `Sine` / `Cosine` / `Tangent` + `Quadrants` + relevant solving/root operations and reasoning | **C:** the identity, its proof, and signed value selection can be separately evidenced. |
| G-SRT.C.6 | `SimilarityRelation` + `RightTriangle` + `Sine` / `Cosine` / `Tangent`; `RatioEquivalence` when comparing scaled triangles; `B:ConceptDerivation` / `B:DeductiveReasoning` | **C:** the definitions use unit-circle values and already illustrate the matching side ratios. |
| G-SRT.C.7 | `ComplementaryAngleIdentities` + `Sine` / `Cosine` + `ComplementaryAngles` where their geometric relation is studied | **C:** already authored and eligible. |
| G-SRT.C.8 | `Sine` / `Cosine` / `Tangent` + `RightTriangle` + `LengthCalculation` / `AngleCalculation` + `EquationSolving` as evidenced | **P:** broadly supported through triangle properties and measurement; add explicit theorem knowledge for precision. See the Pythagorean decision above. |

## Historical audit verification boundary

The audit inventories 114 distinct core leaves with no missing, duplicate, or extra IDs in
the selected inventory, checked against the local standards tree with (+) exclusions verified
from the official pages. All 183 identifiers used in mapping columns exist and are eligible
for direct labeling. Ontology assessment and documentation validation pass with no findings.
Those checks describe the documentation-only baseline audit, before the two additions.
The [implementation record](#implementation-adoption-and-preview--2026-10-11) reports the
preview source changes and their separate verification status.
Semantic coverage judgments and contrasting examples remain review evidence, not automated
proofs that the standards are implemented in learning content.
