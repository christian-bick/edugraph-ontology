# October 2026 — mathematics and consolidation

Dates below use UTC merge dates for pull requests and UTC committer dates for direct commits.

- **October 2–11 — Expression and subject foundations.** Added numeric and expression
  contexts, expanded Algebra and Analysis, and developed number theory, complex numbers,
  further functions/trigonometry, and a separate LinearAlgebra root.
  [Merged changes](https://github.com/christian-bick/edugraph-ontology/compare/5520ec4e7b8812ad9c31b6ea21cb8ae4ee319e87...69f60f9468907327b39b0d46c5e706db5258e4b1).
- **October 21 — Further mathematics families.** Added calculus methods through selected
  university-entry topics, probability/statistics/combinatorics, spatial geometry, graph
  foundations, logic, conics, further complex results, and two number-theory theorems.
  [Merged changes](https://github.com/christian-bick/edugraph-ontology/compare/69f60f9468907327b39b0d46c5e706db5258e4b1...0af4aba97731e49cbff3ac51ca9ef519d174a945).
- **October 21–22 — Curriculum reviews and follow-ups.** Recorded CCSS K–12 and selected
  advanced Bavarian/French course analyses. The accompanying additions covered Euclidean
  construction and theorems, cross products and finite sums, sequence-limit guarantees,
  representation/tool contexts, and finite Markov-chain absorption and convergence.
  [PR #82](https://github.com/christian-bick/edugraph-ontology/pull/82),
  [#83](https://github.com/christian-bick/edugraph-ontology/pull/83),
  [#84](https://github.com/christian-bick/edugraph-ontology/pull/84),
  [#85](https://github.com/christian-bick/edugraph-ontology/pull/85).
- **October 22 — Release preparation.** Consolidated the expanded mathematics vocabulary
  for v0.31.0 and documented identifier, ancestry, and labeling-eligibility adoption effects.
  [Preparation commit](https://github.com/christian-bick/edugraph-ontology/commit/1672a72975623663c5b2446d595dca9aeefd75a3),
  [release notes](../releases/v0.31.0.md).
- **October 24 — Hierarchy consolidation.** Removed ComputationalMathematics and consolidated
  notation, set, substitution, percentage, decimal, and geometry families. Simplified descriptor
  names, introduced GeometricFoundations, and connected NormalVector to Vector specialization.
  [PR #86](https://github.com/christian-bick/edugraph-ontology/pull/86),
  [#87](https://github.com/christian-bick/edugraph-ontology/pull/87).
- **October 24 — Documentation separation.** Removed completed plans and curriculum analyses,
  retained unresolved work in active backlogs, and separated brief history from general design
  and operational documentation.
  [Cleanup commit](https://github.com/christian-bick/edugraph-ontology/commit/57f19f2f7320a6002544c010bc40c8915f7c6e1c).
- **October 24 — Algebraic-structure fundamentals.** Expanded `AlgebraicStructures` to closure,
  identity, inverse, associativity, commutativity, and distributivity. The three existing arithmetic
  laws retain their definitions and arithmetic placement while specializing the generic operation
  properties. Existing identifiers and labeling eligibility are unchanged; specialization now
  supports the corresponding broader claims. See the [authored Areas](../../core-areas-math.ttl).
- **October 24 — Linear-system foundations.** Added `MatrixRowReduction`, `LinearSystemConsistency`,
  and `LinearSystemSolutionSet` under `LinearSystems`. Row reduction also belongs to `MatrixAlgebra`;
  the solution-set concept specializes `SolutionSet`. `MatrixSystemRepresentation` now explicitly
  relates `Ax = b` and `[A | b]`, with fixed unknown ordering and right-hand sides. Review
  definition-dependent uses of that retained identifier. Existing labeling eligibility is unchanged;
  `LinearSystems` remains organizational. See the [authored Areas](../../core-areas-math.ttl).
- **October 24 — Numerical divisibility.** Redefined `PerfectDivisibility` and
  `ImperfectDivisibility` as the zero and positive remainder cases of `EuclideanDivision`,
  including negative and zero dividends with positive integer divisors. Removed the inversion
  between these outcomes and `Modulo`'s nonzero-only translation; `Multiplication` now links
  to `DivisionOfCollections` for its concrete grouping perspective. Identifiers and labeling
  eligibility are unchanged; review definition- and ancestry-dependent uses of the two revised
  concepts. See the [authored Areas](../../core-areas-math.ttl).
- **October 25 — Divisibility grouping.** Grouped `PerfectDivisibility`, `ImperfectDivisibility`,
  and the former `OddAndEvenNumbers` under `DivisibilityRules` using `partOf`. Review the removed
  specialization inheritance and direct annotations of `DivisibilityRules`, which is now
  organizational and ineligible for direct labels. See the [regrouping commit](https://github.com/christian-bick/edugraph-ontology/commit/caf753f825d92243ee6d56d9a0742d5036ffa9a8).
- **October 25 — Specialization alignment.** Added eleven specialization links for triangle
  and quadrilateral inclusion, unit conversion, graph walks, coordinate distance, quadratic
  identities, and multiplicative arithmetic functions. Removed redundant direct parents while
  retaining distinct existing parents. Identifiers, definitions, progression assertions, and
  labeling eligibility are unchanged; structural ancestry and direct-parent queries change.
  Review ancestry-dependent uses against the [authored Areas](../../core-areas-math.ttl).
- **October 25 — Function interpretation and slope.** Added `FunctionInterpretation` under
  `AlgebraicFunctions` as the organizer for `AverageRateOfChange` and `InstantaneousRateOfChange`,
  moving their `partOf` edges while retaining their definitions. Both now translate `FunctionSlope`,
  redefined as secant and nonvertical tangent slopes of a function graph. `FunctionSlope` retains
  its placement under `AlgebraicFunctions` and becomes eligible; the new organizer is ineligible,
  while rate eligibility is preserved. Review definition-, ancestry-, progression-, and
  eligibility-dependent uses against the [authored Areas](../../core-areas-math.ttl).
- **October 25 — Identifier clarity.** Renamed former `DecimalPrecission` → `DecimalPrecision`,
  former `OddAndEvenNumbers` → `ParityTest`, former `MeasuringVolumes` → `MeasuringVolume`,
  former `IntervalsWithInfinity` → `UnboundedIntervals`, and former `SpatialModelling` → `SpatialModeling`.
  Updated `DecimalRounding`'s precision reference.
  Definitions, examples, and relation meanings are unchanged. Update stored descriptor IRIs and
  generated enum keys in annotations and client code to adopt the new identifiers.
- **October 25 — Interval families.** Added `BoundedIntervals` alongside `UnboundedIntervals`,
  both specializing former `NumerationWithIntervals`. Bounded intervals have finite bounds in both
  directions, allowing included or excluded endpoints. Existing labeling eligibility is unchanged.
- **October 25 — Further family alignment.** Added specialization links for fraction methods,
  first-order Taylor approximation, geometric measures, solids of revolution, inclusive trapezoids,
  Bernoulli distributions, and equal-weight means. Moved `OrderOfOperations` to `ExpressionStructure`
  and removed redundant direct ancestors. Added `SequenceTheorems` under `SequenceAndSeriesProperties`
  for both monotone-sequence theorems. Existing identifiers, definitions, progression assertions,
  and labeling eligibility are unchanged; the new sequence organizer is ineligible for direct
  labeling. Review structural ancestry and direct-parent queries.
  Retired accepted no-change findings and stale claims from the family review, separating remaining
  modeling work from open discussion in its priority groups.
- **October 25 — Polynomial and rational dependence.** Made former `PolynomialDependence` specialize
  former `RationalDependence`, retaining former `AlgebraicDependence` through inheritance. Clarified that rational
  governing expressions include nonzero constant denominators, with a polynomial example, while
  preserving original domain exclusions. Names and labeling eligibility are unchanged; polynomial,
  affine, quadratic, and direct-proportional concepts now inherit rational-dependence ancestry.
  The subsequent identifier renames are recorded below.
- **October 25 — Inverse proportional dependence.** Added the eligible
  `InverseProportionalDependence` specialization of former `RationalDependence`, with fixed $k \ne 0$
  and input $x \ne 0$, constant product, and signed examples. Existing descriptors and labeling
  eligibility are unchanged. The proposed `PowerFunction` link remains deferred with the broader
  dependence/function discussion.
- **October 25 — Expression-dependence names.** Renamed former `AlgebraicDependence` →
  `ExpressionBasedDependence`, former `PolynomialDependence` → `PolynomialExpressionDependence`,
  former `RationalDependence` → `RationalExpressionDependence`, former `AffineDependence` →
  `AffineExpressionDependence`, former `QuadraticDependence` → `QuadraticExpressionDependence`,
  and former `ExponentialDependence` → `ExponentialExpressionDependence`. Definitions, examples,
  relation meanings, and labeling eligibility are unchanged. Update stored descriptor IRIs and
  generated enum keys in annotations and client code to adopt the new identifiers. The naming
  review is resolved; proposed links involving proportional dependence, `NumericFunction`,
  `PowerFunction`, and the renamed umbrella remain deferred.
- **October 25 — Rewriting and identity families.** Added `RationalRewriting`, its
  `PolynomialRewriting` specialization, `FiniteSumIdentity`, and `BinomialCoefficientIdentity`
  under `AlgebraicEquivalence`. Grouped existing polynomial and rational rewriting, finite-sum
  formulas, and binomial-coefficient identities under those concepts; `BinomialTheorem`
  specializes both `PolynomialRewriting` and `FiniteSumIdentity`. Replaced redundant direct
  ancestor links while preserving existing definitions, other relations, and labeling eligibility.
  The four new concepts are eligible for direct labeling; review ancestry-dependent uses.
  Retained the `AlgebraicEquivalence` name and definition to cover both expression-value equality
  and constraint solution-set equivalence, resolving the top-family naming review.
- **October 25 — Discontinuity family.** Added `FunctionDiscontinuity` under `FunctionRegularity`,
  with new `FunctionJumpDiscontinuity` and `FunctionInfiniteDiscontinuity` specializations.
  Replaced the existing `FunctionRemovableDiscontinuity` constituent link with specialization
  of the new parent, preserving its definition and examples. The family includes excluded
  accumulation inputs and respects approaches available in the stated domain; its named types
  are not exhaustive. Clarified `FunctionRegularity` to include discontinuity explicitly.
  Existing labeling eligibility is unchanged, and all three new concepts are eligible.
  Review the new discontinuity ancestry and direct-parent queries; the coverage review is resolved.
- **October 25 — Function structure.** Added `FunctionStructure` under `AlgebraicFunctions`,
  grouping `FunctionDomain`, new `FunctionCodomain`, and `FunctionRange` through `partOf`.
  Replaced domain's direct algebraic-function parent and range's value-properties parent,
  preserving their definitions and examples. Clarified `FunctionInterpretation` around general
  meanings in real-world models and refined `FunctionValueProperties` around zeros, signs, and
  bounds. Existing labeling eligibility is unchanged; codomain is eligible and the new structure
  family is organizational. Review changed ancestry and the clarified interpretation boundary.
  Removed the resolved domain/range finding and renumbered the remaining family review sections.
- **October 25 — Factorial and modulo placement.** Moved `Modulo` from `BaseOperations` directly
  under `ArithmeticOperations`, alongside the existing `Factorial` placement. Preserved both
  definitions, other relations, and labeling eligibility. Added no composite-operation family
  or modular-arithmetic parent. The proposed factorial/multiplication and modulo/Euclidean-division
  integration links remain deferred, as does modulo's number-domain and remainder convention.
  Review direct-parent queries and removal of modulo's base-operation ancestry.
- **October 25 — Integer-strategy review.** Closed the `IntegerStrategies` regrouping item as
  an accepted no-change decision: its 20 methods, including four standard algorithms, remain
  direct `partOf` children. The broader strategy naming and relation audit remains deferred.
- **October 25 — Lowest common numerator.** Clarified minimality under positive-integer
  expansion of the fractions as written, using their positive integer numerators' least common
  multiple. Added the unreduced example $4/6$ and $6/9$ expanding to $12/18$ with shared numerator
  twelve. The name, relations, and labeling eligibility are unchanged; the definition review
  is resolved. Review uses that assume a minimum after simplifying the supplied fractions.
- **October 25 — Fraction-strategy coverage.** Closed the `FractionStrategies` coverage item
  without ontology changes: existing operations, fraction contexts, and supporting equivalence,
  denominator-selection, and simplification concepts cover routine addition and multiplication.
  No distinct missing method was established; the broader strategy audit remains deferred.
- **October 25 — Area-integration family.** Broadened `AreaIntegration` from slice lengths to
  nonnegative area contributions for plane regions. Clarified `PolarAreaIntegration` around
  ordered outer and inner radial distances and counting each region part once, with an annular-sector
  example. Added its specialization of `AreaIntegration` while retaining `partOf CurveCalculus`;
  the existing parametric specialization and labeling eligibility are unchanged. The review item
  is resolved; review definition-dependent uses and the new polar-area specialization ancestry.
- **October 25 — Differentiation-rule organizer.** Clarified `DifferentiationRules` as the body
  of derivative identities and their applicability conditions. Retained its name, six direct
  `partOf` children, and the elementary-identity specializations; labeling eligibility is
  unchanged. Resolved the family-role review and removed the completed calculus section.
- **October 25 — Unordered-selection counting.** Added eligible `UnorderedSelectionCounting`
  under `CombinatorialEnumeration` for determining or interpreting selection counts independently
  of selection order, with examples without and with repetition. Existing descriptors, relations,
  and labeling eligibility are unchanged. The generic coverage review is resolved; proposed
  specializations from `BinomialCoefficient` and `StarsAndBars` remain deferred.
- **October 26 — Circular-permutation placement.** Closed the review as no change: retained
  `CircularPermutationCounting partOf CombinatorialEnumeration` and its existing integration
  links to `PermutationCounting` and `DivisionCountingPrinciple`. Counting arrangements up to
  rotation does not preserve the proposed parents' linear or position-distinguishing meanings.
- **October 26 — Root-index placement.** Closed the review as no change: retained
  `RootIndex partOf ExpressionStructure`, including its implicit square-root index, and kept
  `Operand`'s explicit-input boundary. Removed the completed formal-mathematics section and
  renumbered the remaining family review sections.
- **October 26 — Midpoint calculation.** Added `MidpointCalculation partOf GeometricVisualization`
  while retaining its place in `GeometricCalculations`. Clarified the Cartesian coordinate-plane
  boundary and added an endpoint-averaging example. Resolved the placement review; labeling
  eligibility is unchanged, and structural queries now also reach the coordinate-geometry family.
- **October 26 — Circular cones and cylinders.** Defined `Cone` and `Cylinder` with circular
  bases and added `RightCircularCone`, `ObliqueCircularCone`, `RightCircularCylinder`, and
  `ObliqueCircularCylinder` as specializations. The two right forms also specialize
  `SolidOfRevolution`. Clarified the `GeometricNet` example and resolved the family review;
  existing labeling eligibility is unchanged. `Cone`'s formerly general-base wording is now
  limited to circular bases, so prior annotations using noncircular bases need review.
- **October 26 — Right-triangle trigonometric ratios.** Clarified `Sine`, `Cosine`, and
  `Tangent` with their side-length ratios for acute angles in nondegenerate right triangles,
  and made that context explicit in their examples. Retained their general definitions,
  names, relations, and labeling eligibility. Resolved the review without adding a new family.
- **October 26 — Cartesian-plane organizer.** Clarified `CartesianPlane` as the foundational
  structure and conventions of two-dimensional Cartesian coordinate systems. Retained its
  name, relations, and `CoordinateAxes`, `Origin`, and `Quadrants` constituents; it remains
  ineligible for direct labeling. Resolved the last geometry finding and removed the completed
  section, renumbering the remaining review families.
- **October 26 — Foundational graph families.** Added `DirectedGraph`, `UndirectedGraph`,
  `SimpleGraph`, `BipartiteGraph`, and `TreeGraph` with unrestricted cardinality and explicit
  direction, loop, and multiplicity boundaries. Trees specialize both simple and bipartite
  graphs; `CompleteGraph` now specializes `SimpleGraph`, retaining its ancestry under
  `GraphStructure`. Existing labeling eligibility is unchanged. Resolved the graph-family
  review, removed its completed section, and renumbered the remaining families.
- **October 26 — Iteration review deferred.** Retained `Iteration` and `IteratedOperation`
  with all definitions and relations unchanged. Recorded the unresolved boundary and the
  [conditional dataset adoption work](../plan/ontology-consolidation.md#deferred-iteration-consolidation-and-dataset-adoption),
  including the distinction between repeated operations and two equal addends. No consolidation
  or dataset migration was performed.
- **October 26 — Shape-reflection review.** Closed the item as no change: retained
  `ShapeReflection` with its existing name, definition, part-whole placement, and progression
  relations. Its mirrored-halves meaning supports the current organization; the proposed
  rename and additional symmetry specialization are not being pursued.
- **October 26 — Numeric-comparison review.** Closed the family item as no change: retained
  `NumericComparison` and its four constituents with all names, definitions, and relations
  unchanged. The proposed organizer and numeric-order wording changes are not being pursued.
- **October 26 — Vector-algebra review.** Closed the organization item as no change: retained
  the nine direct `VectorAlgebra` constituents and the existing `OrthonormalBasis`
  specialization of `Basis`. Removed the completed linear-algebra review section and
  renumbered the remaining families; ontology names, definitions, and relations are unchanged.
- **October 26 — Logical-equivalence review.** Closed the item as no change: retained
  `LogicalEquivalence` under `PropositionalLogic`, with its existing definition and
  contraposition and De Morgan specializations. Removed the completed logic review section
  and renumbered the remaining families; no ontology changes were made.
- **October 26 — Random-variable organization.** Closed the item as no change: retained
  `RandomVariable` under `ProbabilityFoundations` and `RandomVariableTheory` under `Probability`,
  with all names, definitions, and relations unchanged. The foundational concept and the field
  organizing distributions, dependence, and numerical summaries retain their distinct roles.
- **October 26 — Central-tendency measures.** Added `CentralTendencyMeasure` under
  `DescriptiveStatistics`, covering central or typical values and categories, including ties.
  `WeightedArithmeticMean`, `Median`, and `Mode` specialize the new concept, replacing the
  weighted mean's and mode's direct `partOf DescriptiveStatistics` links. Retained
  `ArithmeticMean`'s specialization of `WeightedArithmeticMean` and `Median`'s of `Quantile`.
  Existing definitions and labeling eligibility are unchanged; the new concept is eligible.
  Resolved the family review; review new specialization ancestry and direct-parent queries.
- **October 26 — Statistical-inference family.** Added `StatisticalInference` under `Statistics`
  as the shared organizer for `StatisticalEstimation`, `HypothesisTesting`,
  `SamplingDistribution`, and `StandardError`, replacing their previous direct parents.
  Existing definitions, progression links, and labeling eligibility are unchanged; the new
  organizer is ineligible for direct labeling. Review changed structural ancestry and
  direct-parent queries. Resolved the final statistics finding and removed the completed section.
- **October 26 — Modulo boundary review.** Closed the item as no change: retained `Modulo`
  as a general remainder operation with its existing definition and relations. Operand domains
  and remainder conventions come from context; no integer-only restriction is introduced.
  Removed the duplicate extension finding; the proposed Euclidean-division integration remains
  deferred independently.
- **October 26 — Collection divisibility.** Added `DivisibilityOfCollections` under
  `CollectionSense`; `EvenDivisibility` and `UnevenDivisibility` now specialize it, with
  pairing and equal-sharing definitions and examples. `DivisionOfCollections` now specializes
  `PartitionOfCollections`, retaining its partitive and quotative specializations. Existing
  progression, contradiction, and labeling eligibility are unchanged; the new concept is eligible.
  Resolved the parity and partition-link review. Parity no longer inherits division, while
  division and its specializations gain partition ancestry; recorded the
  [annotation adoption follow-up](../plan/ontology-consolidation.md#adopt-revised-definition-and-comment-text).
- **October 26 — Number intervals.** Renamed former `NumerationWithIntervals` to
  `NumberIntervals` and made it directly `partOf NumberSense`, replacing its specialization
  of `Numeration`. Clarified intervals as sets containing every intervening value in the
  specified ordered number domain, with real and integer examples. Retained the bounded and
  unbounded specializations and labeling eligibility. Resolved the family review and recorded
  the [identifier and inheritance adoption follow-up](../plan/ontology-consolidation.md#adopt-interval-family-rename).
- **October 26 — Complex-number foundations.** Added `ComplexNumberFoundations` under
  `NumberSystems` and moved `ComplexNumberStructure`, `ComplexModulus`, `ComplexArgument`,
  `ComplexConjugation`, and `ComplexRootStructure` beneath it using `partOf`. Existing
  definitions, other relations, specialization inheritance, and labeling eligibility are
  unchanged; the new organizer is ineligible. Resolved the family review and renumbered the
  remaining section. Review direct-parent queries and the additional structural ancestor when
  adopting the change.
