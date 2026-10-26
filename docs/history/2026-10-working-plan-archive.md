# Working-plan archive — October 2026

On 2026-10-26 all seven files in `docs/plan` were removed at the end of the hierarchy
consolidation. This records their disposition, not completion of every proposal they contained.
The final pre-cleanup sources remain available at
[commit 337e1ec](https://github.com/christian-bick/edugraph-ontology/tree/337e1ec8b3fc06094a8ace4deb356ca2d793fa01/docs/plan).

The [tree-organized design history](2026-10-hierarchy-design-decisions.md) preserves the
consolidation decisions. The [v0.32.0 dataset handover](../releases/v0.32.0-dataset-adoption.md)
replaces the scattered adoption notes. Current rules and workflows remain in
[the reference library](../README.md) and [DOCS.md](../../DOCS.md).

## Ontology boundaries still unresolved at archival

| Recorded issue | Status at archival |
| --- | --- |
| `UnitFractions` versus `ProperFractions` | The former definition includes 1/1; its specialized parent excludes it. Restricting the denominator or changing ancestry was undecided. Existing annotations were not migrated. |
| `DecimalNumbers` versus `RationalNumbers` | The decimal definition describes real base-ten values while its parent restricts them to rational numbers. Restricting the definition or changing ancestry was undecided; finite-place and approximation consequences were not reviewed. |
| `FractionNumbers` versus `RationalNumbers` | The fraction definition does not restrict numerator and denominator to integers. No boundary correction or corresponding review of the `FractionDividend`, `FractionDivisor`, `FractionExponent`, and `FractionQuotient` implications was completed. |
| Progression inference | Propagation through broad fields, source/destination structural paths, and `involves` remained undecided. Traversal helpers did not establish inference semantics, and `integrates` was not made a subproperty of `expands`. |
| Arithmetic strategies | A joint singular-method versus plural-organizer audit of `DecimalStrategies`, `FractionStrategies`, and `IntegerStrategies` remained deferred. Existing names and the agreed constituent memberships were retained. |
| Example-only comments | Existing mixed explanatory/example comments, including `IntegerNumbers`, had not received a complete audit. Essential boundaries were not to be deleted mechanically or silently lost from definitions. |

The first three are recorded definition/ancestry conflicts under
[ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries),
[ONT-S2](../structure.md#ont-s2--specializes-preserves-the-broader-meaning), and
[ONT-W2](../change-review.md#ont-w2--review-definitions-relations-and-effects-together).
Progression questions remain governed by ONT-R1, ONT-R3, ONT-R4 and ONT-R5.
Source: [former consolidation record](https://github.com/christian-bick/edugraph-ontology/blob/337e1ec8b3fc06094a8ace4deb356ca2d793fa01/docs/plan/ontology-consolidation.md)
and [former mathematics plan](https://github.com/christian-bick/edugraph-ontology/blob/337e1ec8b3fc06094a8ace4deb356ca2d793fa01/docs/plan/mathematics-extensions.md).

## Optional mathematical coverage

The extension plan contained optional choices, not approved additions or proof of missing
compulsory coverage. Their exact inventory is preserved in the
[pinned extension record](https://github.com/christian-bick/edugraph-ontology/blob/337e1ec8b3fc06094a8ace4deb356ca2d793fa01/docs/plan/mathematics-extensions.md#optional-knowledge-extensions).

These included deeper set theory; additional algebraic identities and means; asymptote and
trigonometric refinements; complex analysis; advanced number theory; further geometry and
construction methods; abstract linear algebra; multivariable calculus; broader probability,
statistics and graph theory; and Markov hitting-time, recurrence and infinite-state theory.
General arbitrary-set functions and nonfunction relations were left as separate scope choices;
`NumericFunction` was not silently broadened. Further notation/display Scopes, mathematical
coding theory, and named advanced algorithms also remained optional.

Some older broad proposals overlapped concepts subsequently added, such as discontinuity
specializations and graph families. The pinned inventory is historical evidence, not a current
missing-concept checklist. New proposals require reusable meaning and distinct content evidence
under ONT-D1, ONT-D2, ONT-D5 and ONT-E1.

## Curriculum review limits and source issues

The selected-course reviews did not certify curriculum implementation, dataset coverage,
annotation quality or learner mastery. Representative task and counterexample checks remained
necessary under ONT-E1 and ONT-W2. The Bavarian grade 11–13 review on 2026-10-22 could inspect
indexed official text but could not independently confirm live-origin freshness during access
and maintenance failures. Full prerequisite years, other German Länder, inherited French
seconde automatisms, and the complete 2027–28 French terminale programme were outside the
selected review; eight future-programme comparisons did not establish full coverage.

Two local CCSS source issues remained unimplemented in the owning repository: missing
quadratic models and formula-format defects in S-ID.B.6a, and the F-TF.A.3 HTML/PDF discrepancy.
The review favored the PDF angle transformations pi-x, pi+x and 2pi-x, preserving standard IDs
and inherited modeling and (+) qualifiers. This archive does not claim a fresh source check.

Programming and cryptographic protocols, including RSA, were excluded from the selected
mathematics extension. Mathematical algorithms and correctness remained in scope independently
of code; digital-tool context did not establish programming proficiency. Mathematical coding
theory was a separate, undecided scope question.
Source: [former curriculum record](https://github.com/christian-bick/edugraph-ontology/blob/337e1ec8b3fc06094a8ace4deb356ca2d793fa01/docs/plan/curriculum-follow-ups.md).

## Validation and consumer work

Full TypeScript validation remained the authoritative default. The deferred performance
requirement had not been demonstrated by passing correctness tests: bounded work counters,
deep/wide/multiple-parent/cyclic workloads, representative latency, index reuse, avoidance of
repeated whole-graph work, and explicit sorting/output accounting remained unverified.
Incremental validation was conditional on measured need. Any later reuse would require
full/incremental equivalence, previous and current dependency invalidation, source/policy
identity, and complete validation when a reliable delta is unavailable.
Source: [former validation plan](https://github.com/christian-bick/edugraph-ontology/blob/337e1ec8b3fc06094a8ace4deb356ca2d793fa01/docs/plan/automated-rule-checks.md).

Consumer integration was not completed here. The editor still needed evidence for its adapter
from immutable RDF records (not N3 Quad instances, with IRI-string datatypes), intentional
projection policies and parse/serialize roundtrips. Mutable-map and insertion-order assumptions
also required consumer review. Annotation, example-rendering and model-input adoption belongs
to the consumers; the release handover specifies the dataset work. No editor, dataset or model
migration is implied by package publication.
Source: [former library roadmap](https://github.com/christian-bick/edugraph-ontology/blob/337e1ec8b3fc06094a8ace4deb356ca2d793fa01/docs/plan/library-roadmap.md).
