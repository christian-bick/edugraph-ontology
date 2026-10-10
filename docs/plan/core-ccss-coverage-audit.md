# Remaining core CCSS coverage audit

Reviewed 2026-10-11 against ontology `main` at `1b9ecc3`, after the NumberTheory merge.
This completes the evidence review in [roadmap step 2](algebra-family-draft.md#2-close-the-remaining-core-algebrafunction-coverage-questions).
It assesses what the ontology can describe, not whether target specifications, generators,
released packages, or datasets already supply that content. No ontology assertions are changed
by this audit.

## Findings and recommended next work

The earlier algebra gaps are closed by existing eligible concepts and composition. In
particular, polynomial closure, rational-exponent justification, rational/radical solving,
graphical solution sets, the remainder/factor theorems, finite geometric sums, and periodic
models no longer justify additional object-by-method families.

Two coverage boundaries and one precision refinement remain:

| Finding | Evidence and boundary | Recommended next step |
| --- | --- | --- |
| General function correspondence | NumericFunction explicitly requires numerical inputs and outputs. The general-set definition in F-IF.A.1 is broader; a many-to-one map from people to named categories is neither numerical nor one-to-one. | Add a general function-correspondence concept, with NumericFunction specializing it; review the other function-type relationships together. Numeric classroom cases already work. |
| Dimensional analysis | N-Q.A.1 includes coherent use of units in formulas. UnitConversion preserves one quantity while changing units; it does not state how dimensions combine in products/quotients or why incompatible quantities cannot be added. | Model the reusable knowledge of dimensional composition and consistency. This also supports later science and compound-rate work. Keep simple conversions on the existing concepts. |
| Pythagorean theorem specificity | G-SRT.C.8 applications have broad coverage through RightTriangle and length concepts, but PythagoreanTriples and PythagoreanTrigonometricIdentity do not identify the general geometric theorem and its converse. | Add the theorem in Geometry for this reusable knowledge distinction, especially proof and justification. This refines broadly supported tasks; it is not evidence that every right-triangle task is unrepresentable. |

The first is a breadth decision exposed by the standard's exact wording, the second a
specific knowledge gap, and the third a useful theorem-specific refinement of broad coverage.
Proposed names and placements below are recommendations,
not authored descriptors. No new calculus family is needed for these core requirements.

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

## Decisions still needed

### General functions

F-IF.A.1 describes assignments between sets, and the official functions introduction includes
a mapping from a state to its capital city. NumericFunction remains appropriate for numerical
school examples; its definition should not be silently stretched to all sets.
FunctionDomain, FunctionNotation, and SetTheory do not by themselves state the exactly-one-output
condition, while OneToOneFunction imposes a stronger condition than an arbitrary function.
See [F-IF](https://www.thecorestandards.org/Math/Content/HSF/IF/) and the
[functions introduction](https://www.thecorestandards.org/Math/Content/HSF/).

Recommended candidate: a general function-correspondence Area defined as the assignment of
exactly one output to each admissible input in a stated domain. NumericFunction can specialize
it; OneToOneFunction and Sequence should be reviewed against the same general parent. Retain
the numerical restriction on NumericFunction. A many-to-one map from pupils to birth-month
names is a useful positive example; a relation giving one pupil two different outputs is the
counterexample. This extension improves the general concept without creating separate Areas
for every input/output category.

### Dimensional analysis

For [N-Q.A.1](https://www.thecorestandards.org/Math/Content/HSN/Q/), compare explaining why
(meters/second)*seconds has length dimension with explaining why a speed and a time cannot
be added. No numerical evaluation or change of unit is required. UnitConversion and
UnitScaleRelation cover different knowledge, and ordinary numerical operations do not supply
the dimensional rule. DimensionalAbstraction is a Scope for spatial dimensions, not this concept.

Recommended candidate: DimensionalAnalysis, covering composition of dimensions in products,
quotients, and powers, and compatibility of dimensions in sums and equalities. Review its
home in the measurement/unit family. Keep concrete unit contexts as Scopes. Consistent dimensions
are necessary but do not establish that a proposed physical formula is correct.
N-Q.A.2's selection of relevant quantities is already explicit in AlgebraicModeling; N-Q.A.3
can combine approximation, rounding knowledge, and an evidenced choice of appropriate precision.
A displayed number of decimal places alone does not establish measurement accuracy.

### Pythagorean theorem

[G-SRT.C.8](https://www.thecorestandards.org/Math/Content/HSG/SRT/) explicitly includes this
theorem. Its proof/converse and applications also occur in
[8.G.B.6-8](https://www.thecorestandards.org/Math/Content/8/G/), outside the main inventory below.
G-SRT.B.4 also explicitly requires its proof using triangle similarity. Existing RightTriangle
and Triangle knowledge provides broad coverage of applications; the proposed theorem identifies
the reusable result itself more precisely.
Recommended candidate: PythagoreanTheorem, expressing the relation a^2+b^2=c^2 for right
triangles and the converse for a triangle with positive side lengths and longest side c.
Place it in Geometry; a theorem/triangle-relations grouping should be reviewed with existing
geometric families, rather than inserting a constituent under RightTriangle's specialization chain.

Use a right triangle with legs 1 and sqrt(2), hence hypotenuse sqrt(3), as a boundary example:
it is not an integer Pythagorean triple. Conversely, merely checking 3^2+4^2=5^2 does not
prove the general theorem. CoordinateDistance and LengthCalculation describe objectives;
they do not identify every theorem used to achieve them. The trigonometric identity can be
related to the geometric theorem without being an alias or replacement.

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

The domain tables below provide explicit terminal IDs and eligible vocabulary. Boundary
rows are marked in their evidence column; detailed reasoning is above. All other rows have
a supported composition, subject to actual task evidence.


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

## Verification boundary

The audit inventories 114 distinct core leaves with no missing, duplicate, or extra IDs in
the selected inventory, checked against the local standards tree with (+) exclusions verified
from the official pages. All 183 identifiers used in mapping columns exist and are eligible
for direct labeling. Ontology assessment and documentation validation pass with no findings.
The ontology Turtle and generated clients are unchanged; this
documentation-only review does not require rebuilding the previously validated libraries.
Semantic coverage judgments and contrasting examples remain review evidence, not automated
proofs that the standards are implemented in learning content.
