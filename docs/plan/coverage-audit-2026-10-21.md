# School curriculum coverage audit — 2026-10-21

The ontology covers most of the selected curricula through existing concepts and defensible
compositions, but **complete requirement-level coverage is not yet established**. At the audit
baseline, the largest remaining mathematical batch was elementary Euclidean geometry. Smaller advanced-school gaps
concern the cross product, arithmetic sums and sequence-limit theorems. Representation boundaries
and programming requirements need separate treatment.

At the time of this audit, the ontology checkout was on `main`, fast-forwarded to
`0af4aba97731e49cbff3ac51ca9ef519d174a945` after
[PR #81](https://github.com/christian-bick/edugraph-ontology/pull/81) merged. This is the audit
baseline: **1,374 descriptors and 7,308 authored assertions**. The audit changes documentation
only; proposed follow-ups below were not additional authored descriptors at that baseline.
The subsequent [Euclidean geometry batch](euclidean-geometry-draft.md) is merged at `5b89a92`
through [PR #82](https://github.com/christian-bick/edugraph-ontology/pull/82). The
[cross-product, arithmetic-sum and sequence-limit draft](vector-sums-sequence-limits-draft.md)
implements the next batch for review on `codex/vector-sums-sequence-limits`. The counts and
judgments here retain the original audit baseline.

## Sources and scope

| Curriculum | Audited scope | Evidence inventory |
| --- | --- | --- |
| CCSS | All K–8 and high-school content, including (+); all eight mathematical practices and the modeling cycle separately | [K–8: 287 terminal leaves](coverage-audit-ccss-k8.md); [high school: 179 terminal leaves](coverage-audit-ccss-highschool.md) |
| German advanced-school reference | Bavaria Gymnasium grade 11 and the regular elevated-level mathematics course in grades 12–13 | [78 competency bullets](coverage-audit-bavaria.md) |
| German optional enrichment | Bavaria grade-12 Vertiefungskurs; all five module options, of which a course chooses three | [Separate enrichment audit](coverage-audit-bavaria-enrichment.md) |
| French advanced-school reference, 2026–27 | Première spécialité under the 2026 programme, terminale spécialité under the 2019 programme, and terminale mathématiques expertes under the 2019 programme | [France: required, illustrative and optional rows](coverage-audit-france.md) |

The [official CCSS publication](https://www.thecorestandards.org/wp-content/uploads/Math_Standards1.pdf)
and linked domain pages control the requirements, including parent conditions, (+) status and
inherited modeling stars. The local `edugraph-content/public/coverage/ccss-tree.json` supplied an
inventory that was reconciled separately; it is not an authoritative substitute for the standard.

The [French effective-date record](https://eduscol.education.gouv.fr/5817/programmes-et-ressources-en-mathematiques-voie-gt)
places the new terminale programme in **2027–28**. Eight forward-comparison rows in the France
appendix are explicitly separate, not a full audit of that future programme. The current-year
comparison does not imply that today's terminale cohort followed the new première programme.

Bavaria is the previously selected advanced German reference, not a proxy for every Land.
Complete indexed official LehrplanPLUS text was retrieved. Canonical regular-course pages were
under maintenance or returned access errors, so current origin publication freshness could not
be independently confirmed. The official ISB overview corroborates course structure. The
[Bavaria appendix](coverage-audit-bavaria.md#source-status-and-limits) records this limitation.

The full German grades 5–10 catalogue, France's seconde and lower-school prerequisites, other
German Länder, French complementary/technological tracks and examination-specific task catalogues
are outside this selected advanced-course audit. France explicitly inherits seconde automatisms;
that requirement is marked unverified rather than silently counted as covered. CCSS K–8 provides
a separate broad elementary/middle-school check, not proof of equivalence to those prerequisites.

## Method and interpretation

Each content row identifies the required knowledge or performance, current eligible descriptor
IDs, a judgment and a reason or boundary. Lettered CCSS children count separately; their numbered
parent is not counted again, and its conditions remain applicable. The French inventory separates
content/capabilities, demonstrations, illustrative algorithms and optional extensions. Its row
counts are normalized evidence units, not directly comparable to German bullet counts.

| Judgment | Meaning |
| --- | --- |
| Direct | A specific existing Area supplies the principal knowledge; supporting contexts/Abilities may still be necessary. |
| Composition | Existing eligible concepts jointly describe the requirement at current granularity. This is a semantic mapping, not an asserted entailment or a ready-made competency target. |
| Knowledge/procedure gap | A reusable result, criterion, method or required programming concept is absent. Nearby descriptors in the row show partial coverage, not a claim that the whole requirement is satisfied. |
| Definition/representation gap | A close concept exists, but its definition or representation boundary does not cover the requirement faithfully. A definition refinement or Scope may suffice. |
| Unverified | The selected evidence does not establish a complete requirement or its current publication status. |

The governing distinction is [reusable knowledge versus context](../descriptors.md#ont-d2--choose-the-dimension-by-meaning),
with [defensible specificity](../content-evidence.md#ont-e3--choose-defensible-specificity) and
[eligible observable concepts](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
An organizer such as Algebra or Statistics cannot stand in for its missing child knowledge.
Conversely, each curriculum phrase does not require its own Area.

Routine rectangle/prism formulas can be expressed by the shape, calculation, decomposition and
appropriate Ability. A general guarantee such as a congruence criterion, Cavalieri's principle
or monotone convergence needs its own identifiable mathematical knowledge. Merely being able to
derive a theorem from broader concepts does not identify knowledge of that theorem, consistent
with the earlier decisions for the quadratic formula, binomial identities and coprime divisibility.

Descriptor lists show facets and alternatives. They are not mandatory annotation bundles:
select only the operation, method, representation and evidence actually present. Exact numerical
bounds, domains, required fluency and proof conditions remain in the competency target. This audit
does **not** certify target specs, generators, released datasets, teaching quality or learner mastery.

## Coverage judgments

| Content inventory | Direct | Composition | Knowledge/procedure gap | Definition/representation gap | Unverified |
| --- | ---: | ---: | ---: | ---: | ---: |
| CCSS K–8: 287 leaves | 4 | 280 | 2 | 1 | 0 |
| CCSS high-school core: 127 leaves | 7 | 104 | 11 | 5 | 0 |
| CCSS high-school (+): 52 leaves | 7 | 43 | 2 | 0 | 0 |
| Bavaria regular grades 11–13: 78 bullets | 18 | 57 | 1 | 2 | 0* |
| France current required expectations: 241 rows | 17 | 202 | 14 | 7 | 1 |

\* Bavaria's text-level judgments all retain the publication-freshness qualification above.
Optional German modules and French optional/illustrative/future rows are reported separately
in their appendices. Their absence is not a failure against every student's compulsory programme.

For CCSS, **445 of 466 content leaves have a supported direct or compositional mapping**;
21 rows need follow-up. Several rows share one underlying gap. These counts are an inventory
check, not an equal-weight coverage score. Modeling and practices are additional cross-cutting
requirements; digital-tool context remains a separate question for MP5.

French required gaps likewise repeat across content, proof and programming capabilities.
The 14 gap rows represent five mathematical-result rows and nine programming rows, not fourteen
new mathematical concepts. Numerical function composition remains accepted; the high-school
F-IF.A.1 boundary concerns only its unrestricted mapping between arbitrary sets.

## Remaining mathematical work

### 1. Euclidean geometry: the next coherent extension batch

| Required knowledge or method | Representative requirements | Recommended treatment |
| --- | --- | --- |
| Triangle feasibility, congruence and similarity criteria | 7.G.A.2; 8.G.A.5; G-CO.B.8; G-SRT.A.3/B.5 | Identify the criteria and their sufficiency, including ambiguous/invalid data. Decide whether one knowledge family with criterion Scopes or several reusable result concepts is the better fit. |
| Triangle, parallel-line and quadrilateral theorems | 8.G.A.5; G-CO.C.9–11 | Cover angle sums/exterior angles, transversal relationships, perpendicular-bisector loci, isosceles base angles, midsegments, median concurrency and parallelogram/rectangle implications. Existing objects and angle calculations remain reusable. |
| Exact geometric constructions | G-CO.D.12–13; G-C.A.3–4 | Separate construction knowledge/correctness from the permitted-tool context. Straightedge/compass operations are not represented by freehand drawing alone. |
| Circle-angle and triangle-center results | G-C.A.2–3 | Cover central/inscribed angles, the diameter/right-angle result, cyclic quadrilaterals, and incircle/circumcircle construction guarantees. Existing tangent-radius and chord-center relations cover only part of this. |
| Cavalieri's principle | G-GMD.A.1–2 | Add the equal-cross-sections/equal-volume guarantee without requiring calculus. CrossSectionIntegration is not a substitute for the specified informal argument. |

These are related theorem/criterion families, not a proposal for an Area per standard. The
explicit residual rows and contrasting probes are in the [high-school appendix](coverage-audit-ccss-highschool.md#residual-questions-and-representative-tasks).
The [CCSS geometry standards](https://www.thecorestandards.org/Math/Content/HSG/CO/)
make construction and proof requirements explicit; existing shape names alone do not distinguish them.

### 2. Small advanced-school mathematical additions

| Follow-up | Why current composition falls short | Candidate placement or boundary |
| --- | --- | --- |
| Real three-dimensional cross product | DotProduct produces a scalar; NormalVector/VectorOrthogonality do not specify the vector's orientation and area magnitude. Explicit in Bavaria M12.5. | VectorArithmetic; scalar triple-product volume can then compose with DotProduct. |
| Finite arithmetic-sum identity | ArithmeticSequence describes constant differences, not the reusable closed sum or its proof. Explicit in French première. | AlgebraicEquivalence, parallel to FiniteGeometricSum; retain ArithmeticSequence as separate knowledge. |
| Monotone sequence limit guarantees | SequenceConvergence, FunctionBounds and FunctionMonotonicity describe hypotheses/conclusion but do not state bounded monotone convergence or increasing-unbounded divergence. | Analysis theorem family; reuse Sequence and the existing properties, without recreating a separate generic limit-foundations family. |
| Signed-infinite limit arithmetic and comparison | LimitLaws and SqueezeTheorem explicitly cover finite limits. FunctionEndBehavior already covers signed-infinite behavior, so the missing part is the inference rule. | Review the existing theorem definitions or introduce appropriately bounded comparison knowledge; preserve indeterminate cases. |

The [French current terminale programme](https://eduscol.education.gouv.fr/sites/default/files/document/spe246annexe1158907pdf-84159.pdf#page=11)
requires these sequence-limit guarantees. This is narrower than a missing Analysis or Calculus
subject family. The existing differentiation, integration, differential-equation, complex-number,
number-theory and principal statistical concepts supply the selected required content otherwise
identified as direct or compositional in the inventories.

### 3. Representation and definition refinements

- **Nets:** add an appropriate geometry representation Scope and decide whether constructing or
  validating the net-to-solid correspondence also needs an explicit concept (6.G.A.4).
- **Dilation:** include the identity scale factor and state its center/scale behavior; the current
  wording requires a different size (G-SRT.A.1a–b).
- **Rotation/solid generation:** distinguish planar rotation from sweeping a figure about a spatial
  axis (G-GMD.B.4). Plane sections already compose through PlaneConcept and IntersectionRelation.
- **Sector geometry:** make sectors and their area relationship distinguishable where needed
  (G-C.B.5); ordinary circular area calculation itself is present.
- **Sign and variation tables:** review TabularAlgebraicRepresentation, currently defined by
  corresponding variable values, to cover interval signs and variation arrows explicitly.
- **Probability histograms:** Histogram currently concerns empirical frequencies. Review a
  theoretical probability representation without erasing the distinction between bar height and area.
- **Digital tools:** mathematics and tool-selection Abilities are present, but CAS, spreadsheet and
  dynamic-geometry contexts are not explicitly distinguished. This is a shared Scope decision,
  not one new mathematical Area per software product.
- **General functions:** retain NumericFunction + FunctionSymbol + FunctionArgument for numerical
  functions. Decide separately whether arbitrary-set functions need a broader formal concept.
- **Definition polish:** VerticalAngles should explicitly state equality as well as identify the pair.

### 4. Programming and the strongest optional courses

French algorithmic/programming expectations involve mutable variables, assignment, types,
conditionals, loops, computer functions, lists and Python syntax. Mathematical Variable,
FunctionComposition, Iteration and ProcedureExecution do not fully describe that knowledge.
Plan this as reusable computing/programming foundations if curriculum-wide coverage is desired;
keep mathematical algorithms and their code implementation distinct.

Encryption arithmetic can often reuse congruences, modular inverses and number-theory results.
Encryption/decryption, keys and protocol meaning are separate knowledge. The optional Bavarian
enrichment audit checks RSA explicitly and also checks eventual absorption in finite Markov
chains. StationaryDistribution correctly does not guarantee convergence or absorption.

The French appendix preserves optional extensions such as Euler trails, Markov convergence,
additional polynomial results and more specialized number theory. They are future choices,
not an instruction to implement every optional problem. Similarly, illustrative algorithms such
as bisection/secant methods must not be silently promoted to compulsory content.

## Source-data repairs, separate from ontology changes

The local CCSS inventory omits quadratic models from S-ID.B.6a and has formula-formatting
defects. High-school (+)
and modeling status must retain inherited heading qualifiers. The official F-TF.A.3 HTML
also has a transcription defect; the PDF supplies the intended angle transformations.
These findings are recorded in the appendices. No content data was changed by this audit.

All K–8 child descriptions are present. An initial suspicion of missing text came from a
filtered multiline display and was rejected by the independent raw-source check. Numbered-parent
summaries sometimes repeat/reorder their child text; official child IDs and wording determine the
individual mappings, with genuine parent/domain conditions retained.

A later data-maintenance pass should correct these defects against the official source while
preserving standard IDs. This is not a request to replace the dataset's ontology version or
relabel content as part of the current documentation work.

## Suggested implementation order and exit criteria

1. The [Euclidean theorem/criterion/construction batch](euclidean-geometry-draft.md) is merged through
   PR #82, with nets, sectors and transformation boundaries included. It reuses existing shapes and
   measurement concepts; the merge also places PythagoreanTheorem under TriangleRelations.
   Curriculum-level task verification remains separate from the successful ontology build.
2. Review the [cross-product, arithmetic-sum and sequence-limit draft](vector-sums-sequence-limits-draft.md),
   including finite/signed-infinite limit rules and the boundary between finite evidence and proof.
   The draft branch implements five Areas in existing families and a broader LimitLaws definition;
   curriculum-level acceptance remains separate from source and build validation.
3. Resolve sign/variation tables, theoretical probability diagrams and digital-tool Scopes.
4. Decide the computing/cryptography boundary, then cover optional Markov/enrichment requirements
   to the desired advanced-school depth.
5. Repair CCSS source data, recheck the canonical Bavarian pages once accessible, and decide whether
   to audit the explicitly excluded prerequisite catalogues and future French programme in full.

For each implementation, rerun the affected rows with a representative task and counterexample,
confirm descriptor eligibility and relation meaning, and perform the normal source/build checks.
A missing concept is not closed merely by adding a broad family heading. These decisions should
be reviewed before changing the ontology; this document implements none of them.

## Verification record

The CCSS inventories reconcile to 287 K–8 and 179 high-school leaves, including 127 high-school
core and 52 (+) leaves. All 43 K–8 domain pages and nine grade introductions were independently
reconciled, including 30 numbered parents and 88 lettered children. All 22 high-school domains
were reconciled independently. The local curriculum JSON SHA-256 is
`404c46f9aa2885828e086e21ef5dbfab67e271c448fc6648c561c8c8ab619663`.

Across the main, optional, illustrative, future and practice/modeling inventories, all **697
distinct mapped descriptor IDs** exist and are eligible in the authored baseline. No missing,
duplicate or extra CCSS terminal IDs were found. A separate semantic pass reviewed suspicious
compositions and retained the gaps described above.

Documentation verification passed for all **46 Markdown files**, checking local links, anchors,
rule references and source consistency
under [ONT-W3](../change-review.md#ont-w3--verify-and-report-the-actual-change). Ontology Turtle,
schema and generated libraries remain unchanged. A Docker rebuild is not required for this
documentation-only audit and does not establish curriculum completeness.
