# Bavaria upper-secondary mathematics: evidence inventory

[Audit conclusions and method](coverage-audit-2026-10-21.md).

Audit date: 2026-10-21. Ontology baseline: `0af4aba97731e49cbff3ac51ca9ef519d174a945`.

**Scope:** Bavaria Gymnasium Mathematik 11 and regular elevated-level Mathematik 12–13; not Germany nationally, not all Länder. Grades 12–13 are the regular course on elevated level. The optional Vertiefungskurs is audited in the [separate enrichment appendix](coverage-audit-bavaria-enrichment.md) and is excluded from this regular-course denominator. This is an ontology coverage audit, not a statement about generated curriculum content or learner mastery.

## Source status and limits

- **BAV-S11:** [LehrplanPLUS Gymnasium Mathematik 11](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/11/mathematik). Complete 262-line indexed official text returned; tool crawl label: last week. Canonical route returns security maintenance through 23 October 2026. [Canonical route](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/11/mathematik).
- **BAV-S12:** [LehrplanPLUS Gymnasium Mathematik 12 (erhöhtes Anforderungsniveau)](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/12/mathematik/regulaer). Complete 317-line indexed official text returned; tool crawl label: 2 days ago. Canonical /regulaer returned 403; shorter /12/mathematik route returned maintenance. [Canonical route](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/mathematik/regulaer).
- **BAV-S13:** [LehrplanPLUS Gymnasium Mathematik 13 (erhöhtes Anforderungsniveau)](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/13/mathematik). Complete 231-line indexed official text returned; tool crawl label: today. Canonical route returns security maintenance through 23 October 2026. [Canonical route](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/13/mathematik).
- **BAV-SOV:** [ISB upper-secondary mathematics implementation overview](https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/Implementierung_LehrplanPLUS/Mathematik.pdf). Official 32-page PDF opened successfully. Pages 8–9 (zero-based PDF pages) corroborate course sections; page 3 establishes the regular course as elevated level; page 13 distinguishes the optional Vertiefungskurs. The PDF does not verify every bullet's current wording.

The alternate routes yielded full curriculum text, not only search snippets. They remain indexed official evidence: the tool's crawl label is not proof of a fresh response from the origin. Current publication freshness is therefore **unverifiable** until canonical access returns. The official PDF corroborates the selected course structure, not all wording.

The rows cover every content/competency bullet in the retrieved selected courses: **78 rows (26 + 30 + 22)**. Row suffixes are audit-assigned bullet ordinals within the cited curriculum section; they are not official standard IDs. Requirement paraphrases are deliberately short; source links supply full wording. Common process expectations are represented by appropriate Abilities, not by claiming the whole broad Ability family.

Out of scope: the full grade5–10 prerequisite catalogue, optional Vertiefungskurs, W-Seminar, school-specific software packages and general career/cultural/interdisciplinary awareness. A broad application bullet does not certify every earlier-school theorem. No claim of German national completeness is made.

## Judgments

- **Direct:** existing eligible substantive descriptor(s) state the required mathematical knowledge.
- **Compositional:** existing eligible descriptors jointly capture it; any formula or procedure relation needed for the composition is explained in caveats.
- **Gap:** independently required mathematical knowledge is missing.
- **Definition/representation gap:** the mathematics is available but exact wording/context is not faithfully identified.
- **Unverifiable:** source currency or unavailable requirement evidence prevents a firm claim; source freshness affects all rows as recorded above.

Provisional text-level totals: **18 direct, 57 compositional, 2 definition/representation gaps, 1 mathematical gap**. These are bullet counts, not equal-weight mastery or completeness percentages. The two representation-gap bullets have their mathematical content covered. PR2 is a cross-cutting context issue rather than 78 duplicated failures.

## Concrete residuals

### BAV-G1: The real three-dimensional cross product is absent.

**gap; priority high.** DotProduct returns a scalar. VectorOrthogonality only establishes perpendicularity; NormalVector does not fix orientation or magnitude. MatrixDeterminant/DeterminantScaling supply related scalar volume knowledge but not the specified vector-valued operation.

Consider CrossProduct under VectorArithmetic, defined in oriented Euclidean 3-space, including zero for parallel vectors, magnitude equal to parallelogram area, and its orientation convention. Scalar triple-product volume can then compose CrossProduct, DotProduct and existing volume knowledge; a separate theorem should be added only if useful independent evidence requires it.

### BAV-PR1: Model-probability histograms lack an exact current representation descriptor.

**definition_or_representation_gap; priority medium.** Histogram specializes DataRepresentation and is defined through frequencies/relative frequencies in numerical data. ProbabilityRepresentation is eligible and describes the wider setting, and GraphicalAlgebraicRepresentation covers density/CDF functions, but neither identifies the requested histogram encoding itself. This is not a probability-theory gap.

Review broadening Histogram and its ancestry to include probability masses/densities, or add a ProbabilityHistogram specialization of ProbabilityRepresentation. Preserve the distinction between heights and areas.

### BAV-PR2: Required dynamic mathematics, 3D geometry and spreadsheet environments are not explicitly scoped.

**definition_or_representation_gap; priority low.** Current descriptors identify the mathematics, visual representation and cognitive performance but do not discriminate manual execution from the specified digital tool context.

Treat tool use as contextual evidence and decide whether technology Scopes are needed; do not add a mathematical Area solely for software occurrence.

### BAV-U1: Current origin publication state cannot be freshly verified during maintenance.

**unverifiable; priority source.** Full official-domain curriculum text is available through indexed alternate routes, so the text-level mapping is reviewable; canonical maintenance/403 prevents confirmation that it is the latest live revision.

Reopen canonical sources after maintenance before publishing an unconditional current-curriculum completeness claim.

## Grade 11

Source: [BAV-S11](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/11/mathematik).

| Row / curriculum reference | Requirement | Eligible Areas | Abilities | Scopes | Judgment / caveat |
| --- | --- | --- | --- | --- | --- |
| BAV-11-1-01<br>M11 1, bullet 1 | Recognize and sketch function types | `NumericFunction`, `PowerFunction`, `PolynomialDependence`, `RationalDependence`, `ExponentialDependence`, `LogarithmicFunction`, `Sine`, `Cosine`, `FunctionDomain`, `FunctionRange` | `ConceptClassification`, `Visualization` | `GraphicalAlgebraicRepresentation` | **compositional.** Select only types actually present; FunctionTypes is an organizer, not a label. Prior-grade type catalogue itself is outside this audit. |
| BAV-11-1-02<br>M11 1, bullet 2 | End limits and notation | `FunctionEndBehavior`, `FunctionBounds`, `LimitNotation` | `Interpretation`, `Visualization` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-11-1-03<br>M11 1, bullet 3 | Even and odd symmetry | `EvenFunctionSymmetry`, `OddFunctionSymmetry` | `ProcedureExecution` | — | **direct.**  |
| BAV-11-1-04<br>M11 1, bullet 4 | Ordered function transformations | `FunctionTransformation`, `FunctionComposition` | `Interpretation`, `ProcedureComposition` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-11-1-05<br>M11 1, bullet 5 | Continuity of piecewise functions | `FunctionContinuity`, `PiecewiseFunction` | `ConceptClassification` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-11-2-01<br>M11 2, bullet 1 | Rational domains, zeros, factorization | `NumericFunction`, `RationalDependence`, `FunctionDomain`, `FunctionZeros`, `AlgebraicFactorization` | `ProcedureExecution` | — | **compositional.** Degree and original domain restrictions remain task-level conditions; cancellation cannot erase exclusions. |
| BAV-11-2-02<br>M11 2, bullet 2 | Horizontal and oblique asymptotes | `FunctionEndBehavior`, `FunctionAsymptotes`, `RationalDependence`, `AlgebraicEquivalence` | `ProcedureExecution` | — | **compositional.**  |
| BAV-11-2-03<br>M11 2, bullet 3 | One-sided limits at poles | `FunctionLocalLimitBehavior`, `FunctionAsymptotes`, `LimitNotation`, `RationalDependence` | `ProcedureExecution`, `Interpretation` | — | **compositional.**  |
| BAV-11-2-04<br>M11 2, bullet 4 | Analyze and reconstruct rational functions | `NumericFunction`, `RationalDependence`, `FunctionDomain`, `FunctionZeros`, `FunctionAsymptotes`, `Parameter`, `AlgebraicModeling` | `ProcedureComposition`, `ProcedureInversion`, `CorrectnessEvaluation` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-11-2-05<br>M11 2, bullet 5 | Intersections of rational graphs | `SystemOfEquations`, `SystemSolving`, `EquationSolving`, `RationalDependence`, `ConstraintTransformationLogic` | `ProcedureExecution`, `CorrectnessEvaluation` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-11-3-01<br>M11 3, bullet 1 | Conditional probabilities, trees, tables | `ConditionalProbability` | `ProcedureExecution` | `ProbabilityTree`, `TwoWayTable` | **direct.** TwoWayTable fits count/proportion tables; theoretical probability tables retain the representational caveat PR1. |
| BAV-11-3-02<br>M11 3, bullet 2 | Reverse conditioning and joint probabilities | `ConditionalProbability`, `BayesTheorem`, `MultiplicationProbabilityRule`, `ConditionalRelativeFrequency` | `Interpretation`, `ProcedureExecution` | `ProbabilityTree`, `TwoWayTable` | **compositional.**  |
| BAV-11-3-03<br>M11 3, bullet 3 | Test event independence | `EventIndependence`, `ConditionalProbability` | `ConceptClassification`, `ProcedureExecution` | `ProbabilityTree`, `TwoWayTable` | **compositional.**  |
| BAV-11-3-04<br>M11 3, bullet 4 | Critique statistical causal claims | `SamplingBias`, `StatisticalSample`, `ConditionalRelativeFrequency`, `ObservationalStudy`, `RandomizedExperiment`, `AssociationAndCausation` | `CorrectnessEvaluation`, `ResultInterpretation` | — | **compositional.** StudyDesign itself has constituent children; specific study and bias concepts identify the knowledge. |
| BAV-11-4_1-01<br>M11 4.1, bullet 1 | Secants and average rates | `AverageRateOfChange` | `Interpretation`, `ProcedureExecution` | `GraphicalAlgebraicRepresentation` | **direct.**  |
| BAV-11-4_1-02<br>M11 4.1, bullet 2 | Derivative from difference quotients | `FirstPrinciplesDifferentiation`, `InstantaneousRateOfChange` | `ConceptDerivation`, `ProcedureExecution` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-11-4_1-03<br>M11 4.1, bullet 3 | Local differentiability and corners | `FunctionDifferentiability`, `AbsoluteValueFunction` | `ConceptClassification`, `Visualization` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-11-4_1-04<br>M11 4.1, bullet 4 | Graphical derivative correspondence | `DerivativeFunction` | `ConceptDerivation`, `Visualization` | `GraphicalAlgebraicRepresentation` | **direct.**  |
| BAV-11-4_1-05<br>M11 4.1, bullet 5 | Differentiate polynomial linear combinations | `PolynomialDependence`, `PowerDerivativeIdentity`, `DerivativeLinearity` | `ProcedureExecution` | — | **compositional.**  |
| BAV-11-4_1-06<br>M11 4.1, bullet 6 | Interpret instantaneous rates | `InstantaneousRateOfChange`, `DerivativeFunction` | `ResultInterpretation` | — | **direct.**  |
| BAV-11-4_1-07<br>M11 4.1, bullet 7 | Tangent equations and inclination | `LinearApproximation`, `InstantaneousRateOfChange`, `LineGraphing`, `Tangent` | `ProcedureExecution` | `GraphicalAlgebraicRepresentation` | **compositional.** LinearApproximation contains the tangent affine expression; inverse use of Tangent is ProcedureInversion when asked for the angle. |
| BAV-11-4_2-01<br>M11 4.2, bullet 1 | Monotonicity and extrema | `FunctionMonotonicity`, `FirstDerivativeMonotonicityTest`, `FirstDerivativeExtremumTest`, `PolynomialDependence` | `ConceptDerivation`, `ProcedureExecution` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-11-4_2-02<br>M11 4.2, bullet 2 | Concavity and inflection | `FunctionConcavity`, `FunctionInflection`, `SecondDerivativeConcavityTest`, `SecondDerivativeInflectionTest` | `Interpretation`, `ProcedureExecution` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-11-4_2-03<br>M11 4.2, bullet 3 | Necessary versus sufficient conditions | `LogicalImplication`, `FunctionStationaryPoints`, `FunctionExtrema`, `FunctionInflection`, `SecondDerivativeExtremumTest`, `SecondDerivativeInflectionTest` | `DeductiveReasoning`, `CorrectnessEvaluation` | `DisproofByCounterexample` | **compositional.** A stationary point need not be an extremum; distinguish derivative tests from the properties they establish. |
| BAV-11-4_2-04<br>M11 4.2, bullet 4 | Integrated polynomial analysis | `PolynomialDependence`, `FunctionDomain`, `FunctionZeros`, `FunctionExtrema`, `FunctionInflection`, `FunctionEndBehavior`, `Differentiation` | `ProcedureComposition`, `CorrectnessEvaluation` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-11-4_2-05<br>M11 4.2, bullet 5 | Newton iteration | `NewtonMethod` | `ProcedureExecution`, `ProcedureDerivation` | — | **direct.** Tool/spreadsheet context is separately flagged by PR2. |

## Grade 12 — erhöhtes Anforderungsniveau

Source: [BAV-S12](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/12/mathematik/regulaer).

| Row / curriculum reference | Requirement | Eligible Areas | Abilities | Scopes | Judgment / caveat |
| --- | --- | --- | --- | --- | --- |
| BAV-12-1_1-01<br>M12 1.1, bullet 1 | Parameterized polynomial analysis | `PolynomialDependence`, `NumericFunction`, `Parameter`, `Differentiation`, `FunctionZeros`, `FunctionExtrema`, `FunctionInflection` | `ProcedureComposition` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-12-1_1-02<br>M12 1.1, bullet 2 | Antiderivative graphs and formulas | `Antidifferentiation`, `DerivativeFunction`, `PolynomialDependence`, `PowerDerivativeIdentity`, `DerivativeLinearity` | `ProcedureInversion`, `ConceptDerivation` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-12-1_2-01<br>M12 1.2, bullet 1 | Exponential, product, chain derivatives | `ExponentialDerivativeIdentity`, `ProductRule`, `ChainRule`, `FunctionArithmetic`, `FunctionComposition` | `ProcedureExecution`, `ConceptDerivation` | — | **direct.**  |
| BAV-12-1_2-02<br>M12 1.2, bullet 2 | Exponential versus power growth | `FunctionEndBehavior`, `ExponentialDependence`, `PowerFunction` | `PlausibilityEvaluation` | `GraphicalAlgebraicRepresentation` | **compositional.** The task's specific limit is observable through the function and limiting behavior; no general growth-hierarchy theorem is implied. |
| BAV-12-1_2-03<br>M12 1.2, bullet 3 | Exponential combinations and equations | `ExponentialDependence`, `PolynomialDependence`, `FunctionArithmetic`, `Differentiation`, `EquationSolving`, `Logarithm`, `Parameter` | `ProcedureComposition` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-12-1_2-04<br>M12 1.2, bullet 4 | Growth models and base conversion | `AlgebraicModeling`, `ExponentialDependence`, `CommonBaseRewriting`, `Logarithm` | `ProcedureComposition`, `ResultInterpretation` | — | **compositional.**  |
| BAV-12-1_3-01<br>M12 1.3, bullet 1 | Graphical sine/cosine derivatives | `Sine`, `Cosine`, `TrigonometricDerivativeIdentities`, `DerivativeFunction` | `ConceptDerivation` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-12-1_3-02<br>M12 1.3, bullet 2 | Differentiate trigonometric combinations | `Sine`, `Cosine`, `FunctionArithmetic`, `ProductRule`, `ChainRule`, `DerivativeLinearity` | `ProcedureExecution` | — | **compositional.**  |
| BAV-12-2-01<br>M12 2, bullet 1 | Axioms versus probability interpretations | `ProbabilityAxioms`, `ClassicalProbability`, `ProbabilityModel`, `RelativeFrequency`, `LawOfLargeNumbers` | `AxiomFormalization`, `DeductiveReasoning`, `ConceptClassification` | — | **compositional.** Classical and frequency-based comparison is representable. Subjective probability is an optional example in the source, not claimed as explicitly covered. |
| BAV-12-2-02<br>M12 2, bullet 2 | Distributions, moments, probability histograms | `RandomVariable`, `ProbabilityDistribution`, `CumulativeDistributionFunction`, `ExpectedValue`, `RandomVariableVariance`, `RandomVariableStandardDeviation` | `Interpretation`, `ProcedureExecution`, `Visualization` | `ProbabilityRepresentation`, `GraphicalAlgebraicRepresentation` | **definition or representation gap.** PR1: mathematical knowledge is compositional; Histogram requires observed frequencies and cannot precisely name a histogram of model probabilities. |
| BAV-12-2-03<br>M12 2, bullet 3 | Urn counting and probabilities | `OrderedSelectionWithRepetition`, `OrderedSelectionWithoutRepetition`, `BinomialCoefficient`, `ClassicalProbability` | `AnalogicalReasoning`, `ProcedureExecution` | — | **compositional.**  |
| BAV-12-2-04<br>M12 2, bullet 4 | Bernoulli chains and sigma notation | `RepeatedIndependentTrials`, `BernoulliDistribution`, `BinomialDistribution`, `SummationNotation` | `ConceptComposition`, `ProcedureExecution` | — | **compositional.**  |
| BAV-12-2-05<br>M12 2, bullet 5 | Binomial parameters and moments | `BinomialDistribution`, `ExpectedValue`, `RandomVariableStandardDeviation` | `Interpretation`, `ProcedureExecution` | `ProbabilityRepresentation` | **compositional.** Distribution nature plus moments supports parameter relations; precise probability-histogram context still has PR1. |
| BAV-12-3-01<br>M12 3, bullet 1 | One-sided tests and hypotheses | `BinomialTest`, `StatisticalHypotheses` | `ProcedureDerivation`, `Interpretation` | — | **direct.**  |
| BAV-12-3-02<br>M12 3, bullet 2 | Type I/II error probabilities | `BinomialTest`, `TypeOneError`, `TypeTwoError`, `BinomialDistribution` | `ProcedureExecution` | — | **compositional.**  |
| BAV-12-3-03<br>M12 3, bullet 3 | Construct rejection region | `BinomialTest`, `SignificanceLevel`, `TestStatistic`, `BinomialDistribution` | `ProcedureInversion`, `ProcedureExecution` | — | **compositional.** BinomialTest includes the decision rule; constructing its threshold uses the model tail and false-rejection bound. |
| BAV-12-3-04<br>M12 3, bullet 4 | Interpret significance correctly | `BinomialTest`, `StatisticalHypotheses`, `SignificanceLevel`, `PValue` | `ResultInterpretation`, `CorrectnessEvaluation` | — | **compositional.**  |
| BAV-12-4_1-01<br>M12 4.1, bullet 1 | Rational quotient differentiation | `RationalDependence`, `QuotientRule` | `ProcedureExecution` | — | **direct.**  |
| BAV-12-4_1-02<br>M12 4.1, bullet 2 | Differential rational-function analysis | `RationalDependence`, `QuotientRule`, `FunctionStationaryPoints`, `FunctionExtrema`, `FunctionInflection`, `NewtonMethod` | `ProcedureComposition` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-12-4_1-03<br>M12 4.1, bullet 3 | Differentiate function quotients | `FunctionArithmetic`, `QuotientRule` | `ProcedureExecution` | — | **direct.**  |
| BAV-12-4_2-01<br>M12 4.2, bullet 1 | Monotonicity, inverses, square roots | `FunctionMonotonicity`, `OneToOneFunction`, `FunctionInversion`, `PowerFunction`, `FunctionDomain` | `ConceptDerivation`, `ProcedureExecution` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-12-4_2-02<br>M12 4.2, bullet 2 | Rational powers and derivative rules | `PowerFunction`, `PowerDerivativeIdentity`, `ProductRule`, `QuotientRule`, `ChainRule` | `ProcedureExecution` | — | **compositional.**  |
| BAV-12-4_2-03<br>M12 4.2, bullet 3 | Analyze radical combinations | `PowerFunction`, `FunctionArithmetic`, `FunctionComposition`, `FunctionDomain`, `Differentiation`, `FunctionExtrema` | `ProcedureComposition` | — | **compositional.**  |
| BAV-12-4_3-01<br>M12 4.3, bullet 1 | Inverse logarithm and derivative | `FunctionInversion`, `LogarithmicFunction`, `ExponentialDerivativeIdentity`, `InverseFunctionDerivativeRule`, `LogarithmicDerivativeIdentity` | `ConceptDerivation` | — | **compositional.**  |
| BAV-12-4_3-02<br>M12 4.3, bullet 2 | Logarithmic laws, combinations, limits | `LogarithmicFunction`, `FunctionArithmetic`, `LogarithmicDerivativeIdentity`, `FunctionEndBehavior`, `FunctionLocalLimitBehavior`, `Logarithm`, `ExponentLaws`, `AlgebraicEquivalence` | `ProcedureComposition` | — | **compositional.** Log identities can be derived through inverse exponentiation and ExponentLaws; do not mistake generic AlgebraicEquivalence alone for the rule. |
| BAV-12-5-01<br>M12 5, bullet 1 | Spatial coordinates and symmetries | `CartesianSpace`, `PointPlotting`, `ShapePlotting`, `GeometricTransformations`, `CoordinateDistance`, `OrthogonalProjection` | `SpatialInterpretation`, `Visualization` | `CartesianCoordinateSystem`, `ThreeDimensional` | **compositional.** GeometricTransformations is eligible; spatial symmetries use coordinate sign changes or P-prime=2*projection(P)-P. Existing Reflection is line-only and is not widened to plane reflection by a Scope. |
| BAV-12-5-02<br>M12 5, bullet 2 | Vector sums, differences, scaling | `EntrywiseCombination`, `GeometricVectorCombination`, `ScalarVectorMultiplication`, `Addition`, `Subtraction`, `CommutativeLaw`, `AssociativeLaw`, `DistributiveLaw` | `ProcedureExecution` | `ThreeDimensional` | **compositional.** Arithmetic laws currently concern numbers. Apply them to scalar coordinates through EntrywiseCombination; this composition does not assert that the existing law descriptors independently describe abstract vector-space axioms. |
| BAV-12-5-03<br>M12 5, bullet 3 | Dot-product lengths and angles | `DotProduct`, `VectorMagnitude`, `VectorOrthogonality` | `ProcedureExecution`, `DeductiveReasoning` | `ThreeDimensional` | **direct.**  |
| BAV-12-5-04<br>M12 5, bullet 4 | Cross-product normals, areas, volumes | `VectorOrthogonality`, `NormalVector`, `DotProduct`, `MatrixDeterminant`, `DeterminantScaling` | `ProcedureExecution` | `ThreeDimensional` | **gap.** G1: these neighboring concepts do not state the oriented cross product, its magnitude, or its vector-valued construction. Determinants can recover volume but do not identify the mandated operation. |
| BAV-12-5-05<br>M12 5, bullet 5 | Combined spatial problem solving | `CartesianSpace`, `CoordinateDistance`, `DotProduct`, `VectorMagnitude`, `AlgebraicModeling` | `ProcedureComposition`, `ProcedureApplicability`, `CorrectnessEvaluation` | `ThreeDimensional` | **compositional.** Specific earlier-school shape theorems remain prerequisites, not audited wholesale by this open-ended application bullet. |

## Grade 13 — erhöhtes Anforderungsniveau

Source: [BAV-S13](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/13/mathematik).

| Row / curriculum reference | Requirement | Eligible Areas | Abilities | Scopes | Judgment / caveat |
| --- | --- | --- | --- | --- | --- |
| BAV-13-1-01<br>M13 1, bullet 1 | Integral as signed area | `DefiniteIntegral` | `Interpretation` | `GraphicalAlgebraicRepresentation` | **direct.**  |
| BAV-13-1-02<br>M13 1, bullet 2 | Accumulation function and graphs | `AccumulationFunction`, `DefiniteIntegral` | `Interpretation`, `Visualization` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-13-1-03<br>M13 1, bullet 3 | Fundamental theorem and antiderivatives | `FundamentalTheoremOfCalculus`, `Antidifferentiation`, `AccumulationFunction` | `ConceptDerivation`, `ProcedureExecution` | — | **direct.**  |
| BAV-13-1-04<br>M13 1, bullet 4 | Recover integrand/accumulation graphs | `FundamentalTheoremOfCalculus`, `AccumulationFunction`, `DerivativeFunction` | `ProcedureInversion`, `Visualization` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-13-1-05<br>M13 1, bullet 5 | Composite antiderivative patterns | `Antidifferentiation`, `SubstitutionIntegration`, `LogarithmicDerivativeIdentity`, `ExponentialDerivativeIdentity`, `ChainRule` | `ProcedureExecution` | — | **compositional.**  |
| BAV-13-1-06<br>M13 1, bullet 6 | Areas and improper integrals | `AreaIntegration`, `ImproperIntegral` | `ProcedureExecution`, `ResultInterpretation` | — | **direct.**  |
| BAV-13-1-07<br>M13 1, bullet 7 | Integrated rates and displacement | `DefiniteIntegral`, `FundamentalTheoremOfCalculus`, `AccumulationFunction`, `InstantaneousRateOfChange`, `AbsoluteValueFunction` | `ResultInterpretation`, `ProcedureComposition` | — | **compositional.** Signed displacement and traveled distance differ; integrate absolute speed for distance, rather than equating both. |
| BAV-13-1-08<br>M13 1, bullet 8 | Volumes of revolution | `DiskWasherIntegration` | `ProcedureExecution` | — | **direct.**  |
| BAV-13-2-01<br>M13 2, bullet 1 | Discrete/continuous distributions and displays | `DiscreteProbabilityDistribution`, `ContinuousProbabilityDistribution`, `ProbabilityDensityFunction`, `CumulativeDistributionFunction` | `ConceptClassification`, `Visualization` | `ProbabilityRepresentation`, `GraphicalAlgebraicRepresentation` | **definition or representation gap.** PR1 concerns probability histograms; density/CDF graph contexts are covered. ContinuousProbabilityDistribution permits continuous laws without densities, but this standard uses density examples, not an assertion all continuous laws have densities. |
| BAV-13-2-02<br>M13 2, bullet 2 | Motivate normal models | `NormalDistribution`, `EmpiricalDistributionShape`, `ProbabilityModel` | `PlausibilityEvaluation` | `Histogram` | **compositional.** This histogram is empirical measurement data and satisfies Histogram's current definition. |
| BAV-13-2-03<br>M13 2, bullet 3 | Normal density/CDF and parameters | `NormalDistribution`, `ProbabilityDensityFunction`, `CumulativeDistributionFunction`, `ExpectedValue`, `RandomVariableStandardDeviation` | `Interpretation` | `GraphicalAlgebraicRepresentation` | **direct.**  |
| BAV-13-2-04<br>M13 2, bullet 4 | Normal intervals and sigma rules | `NormalDistribution`, `CumulativeDistributionFunction`, `ProbabilityDensityFunction`, `ExpectedValue`, `RandomVariableStandardDeviation` | `ProcedureExecution`, `ProcedureInversion` | — | **compositional.** Symmetric intervals and familiar sigma percentages follow from the normal distribution; no independent gap follows from lacking a named SigmaRule. |
| BAV-13-3-01<br>M13 3, bullet 1 | Line/plane parameters and dependence | `LineParametrization`, `PlaneParametrization`, `LinearIndependence`, `LinearCombination` | `ProcedureExecution`, `SpatialInterpretation` | `ThreeDimensional` | **compositional.**  |
| BAV-13-3-02<br>M13 3, bullet 2 | Normal and coordinate plane equations | `NormalVectorEquation`, `NormalVector`, `CartesianSpace` | `ProcedureExecution`, `SpatialInterpretation` | `ThreeDimensional` | **direct.**  |
| BAV-13-3-03<br>M13 3, bullet 3 | Positions, intersections, spatial angles | `LineParametrization`, `PlaneParametrization`, `NormalVectorEquation`, `IntersectionRelation`, `ParallelismRelation`, `SkewLines`, `DotProduct`, `SystemSolving` | `ProcedureComposition` | `ThreeDimensional`, `CartesianCoordinateSystem` | **compositional.** Solve common coordinate constraints; derive acute intersection-angle conventions from direction/normal vectors. No broad Geometry label is used. |
| BAV-13-3-04<br>M13 3, bullet 4 | Spatial distances and Hesse form | `CoordinateDistance`, `OrthogonalProjection`, `NormalVectorEquation`, `NormalVector`, `VectorMagnitude`, `DotProduct`, `SystemSolving`, `LineParametrization`, `PlaneParametrization` | `ProcedureComposition` | `ThreeDimensional` | **compositional.** Point/set distances reduce to projected feet. Skew-line distance uses the connecting vector perpendicular to both directions; normalized plane normals recover Hesse form. |
| BAV-13-3-05<br>M13 3, bullet 5 | Sphere equations and positions | `Sphere`, `CoordinateDistance`, `EquationSolving`, `RelationSatisfaction`, `IntersectionRelation`, `OrthogonalProjection`, `LineParametrization`, `NormalVectorEquation` | `ProcedureComposition`, `SpatialInterpretation` | `ThreeDimensional` | **compositional.** Sphere explicitly includes its equidistant boundary; applying equality to that boundary is supported. Do not replace the solid by its interior when solving the boundary equation. |
| BAV-13-3-06<br>M13 3, bullet 6 | Model and communicate spatial solutions | `AlgebraicModeling`, `CartesianSpace`, `CoordinateDistance`, `DotProduct` | `ProcedureComposition`, `CorrectnessEvaluation`, `TextualArticulation`, `SpatialInterpretation` | `ThreeDimensional` | **compositional.** Open-ended prerequisite reuse does not certify all earlier-school geometry. |
| BAV-13-4-01<br>M13 4, bullet 1 | Parameterized differential/integral analysis | `Parameter`, `FunctionArithmetic`, `FunctionComposition`, `Differentiation`, `Antidifferentiation`, `FunctionDomain`, `FunctionExtrema`, `FunctionInflection`, `DefiniteIntegral` | `ProcedureComposition` | `GraphicalAlgebraicRepresentation` | **compositional.**  |
| BAV-13-4-02<br>M13 4, bullet 2 | Recover function parameters | `Parameter`, `AlgebraicModeling`, `EquationSolving`, `SystemSolving`, `RelationSatisfaction` | `ProcedureInversion` | — | **compositional.**  |
| BAV-13-4-03<br>M13 4, bullet 3 | Constrained extremum problems | `DerivativeOptimization` | `ProcedureComposition` | — | **direct.**  |
| BAV-13-4-04<br>M13 4, bullet 4 | Model, validate calculus applications | `AlgebraicModeling`, `DerivativeOptimization`, `DefiniteIntegral`, `InstantaneousRateOfChange` | `ProcedureApplicability`, `ProcedureComposition`, `ResultInterpretation`, `CorrectnessEvaluation` | — | **compositional.** Application-specific labels depend on the task; profession/career awareness is not claimed as mathematical concept coverage. |

## Review notes

The mapping follows ONT-D1/D2, ONT-E1/E3/E7 and ONT-S1/S2/S5. Organizers such as `Calculus`, `FunctionTypes`, `FunctionProperties`, `VectorArithmetic`, `Probability`, `HypothesisTesting` and `StudyDesign` are not used as coverage labels. Mechanical validation passed for all 172 unique mapped descriptor IDs: all exist in the stated dimension and none has constituent children. The check read all three authored descriptor Turtle files and all partOf edges; no authored hasPart assertions were omitted. This checks existence and eligibility, not semantic adequacy by itself.

The curriculum's common process tags are not treated as extra subject roots. Reasoning maps to appropriate `DeductiveReasoning`, `ConceptDerivation` or `PlausibilityEvaluation`; solving to `ProcedureComposition` and `ProcedureExecution`; modeling to concrete model Areas and `ResultInterpretation`; representation to `Visualization`, `SpatialInterpretation` and the evidenced Scopes; communication to `Interpretation` and `TextualArticulation`. Symbolic manipulation uses the relevant formal/algebraic Areas and procedural Ability. Tool-context specificity retains PR2. These are candidate compositions selected by the actual task, not automatic translations of every process tag.

A nonzero `Sphere` boundary is supported by its existing equidistance definition; spatial distances are composed from projected feet, normal/direction vectors, coordinate distance and constraint solving. Logarithmic identities compose inverse exponentiation with `ExponentLaws`; the generic `AlgebraicEquivalence` descriptor alone would be insufficient. Normal sigma intervals are special evaluations/inversions of `NormalDistribution`, not a separate obligatory theorem family. Optional subjective-probability comparison is not claimed as a named covered concept.
