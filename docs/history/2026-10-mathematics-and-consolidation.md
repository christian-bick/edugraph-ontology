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
  both specializing `NumerationWithIntervals`. Bounded intervals have finite bounds in both
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
- **October 25 — Polynomial and rational dependence.** Made `PolynomialDependence` specialize
  `RationalDependence`, retaining `AlgebraicDependence` through inheritance. Clarified that rational
  governing expressions include nonzero constant denominators, with a polynomial example, while
  preserving original domain exclusions. Names and labeling eligibility are unchanged; polynomial,
  affine, quadratic, and direct-proportional concepts now inherit rational-dependence ancestry.
  Coordinated family naming remains open in the review.
- **October 25 — Inverse proportional dependence.** Added the eligible
  `InverseProportionalDependence` specialization of `RationalDependence`, with fixed $k \ne 0$
  and input $x \ne 0$, constant product, and signed examples. Existing descriptors and labeling
  eligibility are unchanged. The proposed `PowerFunction` link remains deferred with the broader
  dependence/function discussion.
