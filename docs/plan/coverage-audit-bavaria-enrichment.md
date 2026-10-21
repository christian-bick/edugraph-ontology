# Bavaria optional advanced-course appendix

[Audit conclusions and method](coverage-audit-2026-10-21.md).

Baseline: `0af4aba97731e49cbff3ac51ca9ef519d174a945`; checked 2026-10-21. Separate from the regular-course 78-row inventory in [regular Bavaria inventory](coverage-audit-bavaria.md).

The [official Vertiefungskurs programme](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/mathematik/vertieft) offers five modules; the teacher chooses three. All five are inventoried here: 26 competency bullets. These elective offerings are not additional requirements for every Bavarian mathematics student.

The web tool returned the full official-domain indexed page at the canonical URL (246 lines, crawl label today). This establishes reviewable programme text, not independent live-origin freshness. Regular grade 12 still returned 403; grade 13 still displayed maintenance through 23 October 2026. Other German Länder, the full lower-secondary catalogue and W-Seminar remain outside scope. Cultural/historical/security-awareness clauses are acknowledged but not certified by this mathematical-content audit.

Counts: **1 direct, 17 compositional, 3 mathematical gaps, 5 representation/tool-context gaps**. The five tool-context rows have mathematical coverage. All **108 mapped identifiers** exist in the correct dimension and have no constituent children. Generic roots are not coverage evidence.

D = direct; C = compositional; G = mathematical gap; R = definition/representation/tool gap. Candidate names below are proposals, not existing coverage IDs.

| Row | Curriculum reference | Requirement cue | Existing Areas / Abilities / Scopes | Judgment and boundary |
|---|---|---|---|---|
| BAV-V12-1-01 | M12 Vertiefungskurs 1, bullet 1 (source line 53) | Motivate complex-number extension | A: `ComplexNumberStructure`, `NumberSystemRelations`, `EquationSolving`<br>B: `ConceptDerivation`, `Interpretation`<br>S: `ComplexNumbers` | **C** — The mathematical extension is explicit. Course-wide cultural/history awareness is outside the mathematical-descriptor audit. |
| BAV-V12-1-02 | M12 Vertiefungskurs 1, bullet 2 (source line 60) | Complex Cartesian arithmetic and geometry | A: `ComplexNumberStructure`, `ComplexPlane`, `Addition`, `Subtraction`, `Multiplication`, `Division`, `ComplexConjugation`, `ComplexArithmeticGeometry`, `GeometricVectorCombination`<br>B: `ProcedureExecution`, `Interpretation` | **C** — Real/imaginary-part form is explicit in ComplexNumberStructure. Numerical operations admit complex-number contexts; geometric addition is independently covered. |
| BAV-V12-1-03 | M12 Vertiefungskurs 1, bullet 3 (source line 65) | Polar conversion and geometric arithmetic | A: `ComplexPolarNotation`, `ComplexModulus`, `ComplexArgument`, `ComplexPlane`, `ComplexArithmeticGeometry`<br>B: `ProcedureExecution`, `ProcedureApplicability`, `Interpretation` | **C** — Zero has no argument; conversion targets must preserve that boundary. |
| BAV-V12-1-04 | M12 Vertiefungskurs 1, bullet 4 (source line 70) | Solve complex quadratics; establish solvability | A: `QuadraticFormula`, `EquationSolving`, `FundamentalTheoremOfAlgebra`<br>B: `ProcedureExecution`, `LogicalInference`<br>S: `ComplexNumbers` | **C** — The formula and algebraic closure theorem already include complex solutions and multiplicities. |
| BAV-V12-1-05 | M12 Vertiefungskurs 1, bullet 5 (source line 76) | Compute and visualize unity roots | A: `ComplexRootStructure`, `ComplexPlane`, `ComplexPolarNotation`, `Circle`<br>B: `ProcedureExecution`, `Visualization` | **C** — Root-of-unity case sets the modulus to one; no new root family is needed. |
| BAV-V12-1-06 | M12 Vertiefungskurs 1, bullet 6 (source line 81) | Mandelbrot iteration, boundedness, software visualization | A: `RecursiveSequence`, `ComplexModulus`, `FunctionBounds`, `ComplexPlane`, `SetMembership`<br>B: `ProcedureExecution`, `Visualization`<br>S: `ComplexNumbers` | **R** — Mathematics composes by applying real FunctionBounds to n -> |z_n|, with the orbit and parameter-membership condition specified in the target. Do not impose order bounds directly on complex values. Finite iteration alone cannot prove boundedness. No explicit software/algorithm implementation context is modeled. |
| BAV-V12-2-01 | M12 Vertiefungskurs 2, bullet 1 (source line 94) | Prove by mathematical induction | B: `DeductiveReasoning`, `LogicalInference`<br>S: `ProofByInduction` | **D** — ProofByInduction explicitly specifies base cases plus inductive step; select the mathematical subject Area in the eventual competency. InductiveReasoning is not a substitute. |
| BAV-V12-2-02 | M12 Vertiefungskurs 2, bullet 2 (source line 99) | Explicit and recursive sequence rules | A: `Sequence`, `RecursiveSequence`, `ArithmeticSequence`, `GeometricSequence`, `NewtonMethod`, `GenerativeRuleRecognition`<br>B: `ProcedureExecution`, `ConceptDerivation` | **C** — Sequence permits arbitrary terms and explicit indexing; only apply optional example-specific descriptors when that example occurs. |
| BAV-V12-2-03 | M12 Vertiefungskurs 2, bullet 3 (source line 104) | Infer convergence from monotone boundedness | A: `Sequence`, `FunctionMonotonicity`, `FunctionBounds`, `SequenceConvergence`<br>B: `LogicalInference`, `ProcedureExecution` | **G** — The separate predicates exist, but none states that every bounded monotone real sequence converges. A deductive Ability does not supply the missing real-completeness theorem. Consider MonotoneSequenceConvergence under SequenceAndSeriesProperties. |
| BAV-V12-2-04 | M12 Vertiefungskurs 2, bullet 4 (source line 109) | Partial sums; harmonic/geometric convergence applications | A: `SeriesConvergence`, `ComparisonSeriesTest`, `GeometricSeriesSummation`, `RecursiveSequence`, `FractionNotation`, `DecimalNotation`<br>B: `LogicalInference`, `ProcedureExecution` | **C** — Grouping harmonic terms and comparison supplies divergence; geometric-series results are explicit. Named fractals/finance are optional applications, not additional mandatory Areas. |
| BAV-V12-2-05 | M12 Vertiefungskurs 2, bullet 5 (source line 115) | Taylor approximation, convergence and exponential series | A: `TaylorPolynomialApproximation`, `TaylorSeriesRepresentation`, `TaylorRemainderBound`, `SequenceConvergence`<br>B: `ProcedureExecution`, `Visualization`, `LogicalInference`<br>S: `GraphicalAlgebraicRepresentation` | **R** — The mathematical Taylor and remainder knowledge is explicit; e follows by evaluation at one. No dedicated dynamic-geometry/software context exists. |
| BAV-V12-3-01 | M12 Vertiefungskurs 3, bullet 1 (source line 128) | Represent and interpret transition processes | A: `MatrixRepresentationOfLinearMap`, `MatrixSystemRepresentation`, `MatrixNotation`, `GraphStructure`, `GraphEdgeWeight`, `MarkovTransitionMatrix`<br>B: `Interpretation`, `Formalization`, `Visualization`<br>S: `TabularAlgebraicRepresentation` | **C** — General population transition matrices need not be stochastic: use linear-map representation for those. MarkovTransitionMatrix applies only to probability transitions with its row convention; transpose consistently for column-state models. |
| BAV-V12-3-02 | M12 Vertiefungskurs 3, bullet 2 (source line 135) | Matrix systems and Gaussian elimination | A: `MatrixSystemRepresentation`, `MatrixNotation`, `SystemElimination`, `SystemRewriting`, `SystemSolving`<br>B: `ProcedureComposition`, `ProcedureExecution` | **C** — Successive solution-preserving elimination plus back-substitution expresses Gaussian elimination. This does not certify an echelon-form classifier or a particular software implementation. |
| BAV-V12-3-03 | M12 Vertiefungskurs 3, bullet 3 (source line 140) | Matrix arithmetic and multistage interpretation | A: `EntrywiseCombination`, `ScalarMatrixMultiplication`, `RowColumnProduct`, `MatrixConformability`, `MatrixRepresentationOfLinearMap`<br>B: `ProcedureExecution`, `Interpretation` | **C** — The actual matrix operations and shape restrictions are explicit; ordinary numeric Multiplication is not being used as the matrix-product descriptor. |
| BAV-V12-3-04 | M12 Vertiefungskurs 3, bullet 4 (source line 145) | Matrix laws, inverses and interpretation | A: `MatrixOperationIdentities`, `RowColumnProduct`, `MatrixInverse`, `IdentityMatrix`<br>B: `LogicalInference`, `ProcedureExecution`, `Interpretation` | **C** — MatrixOperationIdentities supplies associativity/distributivity; RowColumnProduct explicitly warns that reversing factors may change the result or be undefined. |
| BAV-V12-3-05 | M12 Vertiefungskurs 3, bullet 5 (source line 150) | Matrix powers, fixed vectors, software | A: `RowColumnProduct`, `IdentityMatrix`, `MatrixSystemRepresentation`, `SystemSolving`, `StationaryDistribution`<br>B: `ProcedureComposition`, `ProcedureExecution`, `Interpretation` | **R** — Positive powers are repeated ordered products, with identity for exponent zero; this respects the prior decision not to add MatrixPowers. Fixed vectors solve Av=v, using StationaryDistribution only for normalized stochastic states. Software context remains unmodeled. |
| BAV-V12-3-06 | M12 Vertiefungskurs 3, bullet 6 (source line 154) | Approximate and solve absorption probabilities | A: `FiniteMarkovChain`, `MarkovTransitionMatrix`, `MarkovStateDistribution`, `SequenceConvergence`, `SystemSolving`, `TotalProbabilityTheorem`<br>B: `ProcedureDerivation`, `ProcedureExecution` | **G** — Finite-step state distributions are covered. Eventual absorption and the hitting-probability boundary equations are not explicitly identified; generic system solving does not specify the boundary conditions or the relevant solution when absorption is not certain. Consider AbsorptionProbability under StochasticProcesses. |
| BAV-V12-4-01 | M12 Vertiefungskurs 4, bullet 1 (source line 165) | Euclidean algorithms, including programmed implementation | A: `EuclideanAlgorithm`, `BezoutIdentity`, `AlgebraicEquivalence`, `SystemSubstitution`<br>B: `ProcedureComposition`, `ProcedureExecution`, `ProcedureUnderstanding` | **R** — The extended procedure can be expressed as back-substitution through Euclidean divisions to construct Bezout coefficients. No separate mathematical gap is inferred solely from the absent ExtendedEuclideanAlgorithm name. Explicit programming/spreadsheet implementation is not represented by the mapped descriptors. |
| BAV-V12-4-02 | M12 Vertiefungskurs 4, bullet 2 (source line 172) | Efficient modular powers; simultaneous congruences | A: `ResidueClassArithmetic`, `IntegerCongruence`, `ExponentLaws`, `Exponentiation`, `ChineseRemainderTheorem`<br>B: `ProcedureComposition`, `ProcedureExecution` | **C** — Repeated squaring with reduction is composed from power identities and residue arithmetic; specify the efficient procedure in the target. ChineseRemainderTheorem requires pairwise coprime moduli, matching the standard school theorem. |
| BAV-V12-4-03 | M12 Vertiefungskurs 4, bullet 3 (source line 178) | Prove Fermat's little theorem | A: `FermatsLittleTheorem`<br>B: `DeductiveReasoning`, `LogicalInference`<br>S: `DirectProof` | **C** — The named theorem is already present; Euler's theorem is not an additional stated requirement of this bullet. |
| BAV-V12-4-04 | M12 Vertiefungskurs 4, bullet 4 (source line 182) | Explain RSA encryption and decryption | A: `PrimeNumbers`, `EulersTotient`, `ModularInverse`, `FermatsLittleTheorem`, `ChineseRemainderTheorem`, `ResidueClassArithmetic`<br>B: `ProcedureExecution`, `LogicalInference` | **G** — The arithmetic foundation exists, but public/private key roles, key construction and the RSA encoding/decoding protocol are absent. Do not claim protocol understanding from arithmetic labels alone. RSA correctness for prime-product moduli can use Fermat plus Chinese remainders without requiring a new Euler theorem. |
| BAV-V12-4-05 | M12 Vertiefungskurs 4, bullet 5 (source line 189) | Explain primality testing or factorization | A: `PrimeNumbers`, `FactorsAndMultiples`, `EuclideanDivision`, `PrimeFactorization`<br>B: `ProcedureUnderstanding`, `ProcedureDerivation` | **C** — At the literal curriculum minimum a trial-division primality test or factorization procedure is expressible. Named Miller-Rabin and quadratic-sieve examples would need additional technique knowledge; they are examples, not both mandatory. Confirm intended advanced method before extending. |
| BAV-V12-5-01 | M12 Vertiefungskurs 5, bullet 1 (source line 200) | Scales and bivariate statistical hypotheses | A: `MeasurementScale`, `StatisticalVariable`, `StatisticalHypotheses`, `ContingencyAssociation`, `RandomVariableIndependence`<br>B: `HypothesisGeneration`, `Formalization` | **C** — Use the independence descriptor appropriate to the object; claims about differences in means may instead compose StatisticalHypotheses with mean descriptors. |
| BAV-V12-5-02 | M12 Vertiefungskurs 5, bullet 2 (source line 206) | Regression, correlation and misleading associations | A: `RegressionModel`, `LeastSquaresFit`, `PearsonCorrelation`, `Confounding`, `ConditionalRelativeFrequency`, `ContingencyAssociation`<br>B: `ProcedureExecution`, `Interpretation`, `CorrectnessEvaluation`<br>S: `ScatterPlot` | **C** — A Simpson-type reversal can be demonstrated by comparing pooled and subgroup associations; no special paradox label is necessary to express that target. |
| BAV-V12-5-03 | M12 Vertiefungskurs 5, bullet 3 (source line 212) | Chi-square/t tests and software p-values | A: `ChiSquaredIndependenceTest`, `MeanTTest`, `PValue`, `StatisticalHypotheses`<br>B: `ProcedureExecution`, `ResultInterpretation` | **R** — Either test satisfies the curricular choice. Mathematics is explicit, but statistical-software use has no dedicated context; keep the tests' model and expected-count assumptions. |
| BAV-V12-5-04 | M12 Vertiefungskurs 5, bullet 4 (source line 219) | Critique misleading data displays | A: `FrequencyDistribution`, `RelativeFrequency`, `StatisticalVariable`<br>B: `CorrectnessEvaluation`, `Interpretation`<br>S: `DataRepresentation` | **C** — Select concrete graph Scopes and relevant scale/frequency Areas for each target. DataRepresentation is an eligible parent with specialization children, not a claim that every visual convention is automatically covered. |

## Residual decisions

### BAV-V-G1 — MonotoneSequenceConvergence

Bounded monotone real sequences are not connected to convergence by any existing theorem descriptor.

Possible definition: “Every monotone real sequence with the appropriate finite bound converges to a finite limit: an increasing sequence bounded above tends to its supremum, and a decreasing sequence bounded below tends to its infimum.” Placement to review: partOf SequenceAndSeriesProperties.

Affected rows: `BAV-V12-2-03`.

### BAV-V-G2 — AbsorptionProbability

Finite-step Markov propagation does not explicitly encode eventual hitting/absorption probabilities and their boundary equations.

Possible definition: “The probability that a finite Markov chain eventually reaches a specified absorbing state or set, obtained from its hitting-probability equations and boundary values or from limits of finite-step probabilities.” Placement to review: partOf StochasticProcesses.

State reachability and absorption assumptions must identify the relevant solution; a formal linear system need not have unique absorption probabilities without suitable boundary conditions.

Affected rows: `BAV-V12-3-06`.

### BAV-V-G3 — RSAEncryption

No eligible descriptor identifies RSA key construction, public/private roles and encryption/decryption.

Possible definition: “A public-key construction using a product of distinct primes and mutually inverse exponent classes, with modular exponentiation for encoding and decoding within a specified message representation.” Placement to review: A cryptography family; review ComputationalMathematics or a wider information-security parent rather than a pure theorem family..

A school arithmetic model does not certify a secure modern implementation. Fermat plus Chinese remainders already supplies the core correctness arithmetic.

Affected rows: `BAV-V12-4-04`.

### BAV-V-R1 — Shared digital context

Software-use and programming contexts are not explicitly represented. Underlying mathematics in these five rows is covered compositionally.

Review a shared digital-mathematics/algorithm-implementation context in the wider ontology, avoiding one tool Scope per topic.

Affected rows: `BAV-V12-1-06`, `BAV-V12-2-05`, `BAV-V12-3-05`, `BAV-V12-4-01`, `BAV-V12-5-03`.

## Composition decisions retained

- Complex boundedness applies `FunctionBounds` to the real sequence of moduli. No order on complex numbers is implied. Targets must state the recurrence and bounded-orbit membership condition; finite plotting does not prove infinite boundedness.
- Matrix powers use repeated `RowColumnProduct` and `IdentityMatrix`, preserving the earlier decision not to add a separate power concept. General fixed vectors use `MatrixSystemRepresentation` and `SystemSolving`; `StationaryDistribution` is only the normalized stochastic case.
- Extended Euclidean computation uses back-substitution through `EuclideanAlgorithm` divisions to construct `BezoutIdentity` coefficients. An absent algorithm name alone is not an independent knowledge gap.
- Modular repeated squaring combines `ExponentLaws`, `ResidueClassArithmetic` and a target-specified procedure. `FermatsLittleTheorem` already exists; adding Euler's theorem would not supply RSA's protocol.
- A concrete trial-division or factorization procedure meets the open testing requirement. Miller–Rabin or the quadratic sieve would need additional technique content if selected; the programme does not mandate both examples.
- `Confounding`, subgroup/pooled relative frequencies and association descriptors can express a Simpson reversal without a standalone paradox node.

Source cues are brief paraphrases. Consult the official programme for full wording; the JSON companion preserves identifiers, source lines and judgments.
