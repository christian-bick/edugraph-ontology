# School curriculum coverage audit — 2026-10-21

The ontology covers most of the selected curricula through existing concepts and defensible
compositions, but **complete requirement-level coverage is not yet established**. At the audit
baseline, the largest remaining mathematical batch was elementary Euclidean geometry. Smaller
advanced-school gaps concerned the cross product, arithmetic sums and sequence-limit theorems.
Those batches, the representation/tool follow-ups and Markov-chain absorption/convergence are
now merged. Programming and cryptographic knowledge are deliberately excluded from the current
extension scope. The dated follow-up below distinguishes the remaining mathematical extensions
from historical gap judgments.

At the time of this audit, the ontology checkout was on `main`, fast-forwarded to
`0af4aba97731e49cbff3ac51ca9ef519d174a945` after
[PR #81](https://github.com/christian-bick/edugraph-ontology/pull/81) merged. This is the audit
baseline: **1,374 descriptors and 7,308 authored assertions**. The audit changes documentation
only; proposed follow-ups below were not additional authored descriptors at that baseline.
The subsequent [Euclidean geometry batch](euclidean-geometry-draft.md) is merged at `5b89a92`
through [PR #82](https://github.com/christian-bick/edugraph-ontology/pull/82). The
[cross-product, arithmetic-sum and sequence-limit batch](vector-sums-sequence-limits-draft.md)
is merged at `e6dba8b` through PR #83. The
[representation and tool-context batch](representations-digital-tools-draft.md) is merged at
`d04c0d3` through [PR #84](https://github.com/christian-bick/edugraph-ontology/pull/84), including
the final simplification to `DigitalTool` and `SoftwareTool` without a separate `DigitalDevice`.
The [Markov-chain absorption and convergence batch](markov-absorption-convergence-draft.md)
is merged at `53e6602c376c887131504ebadfdb6a3e47a1faab` through
[PR #85](https://github.com/christian-bick/edugraph-ontology/pull/85). Current `main` contains
**1,441 descriptors and 7,668 authored assertions**. The original counts and requirement tables
remain historical; the dated current-status section and
[implementation order](#suggested-implementation-order-and-exit-criteria) record subsequent work.

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

## Programming excluded from the current extension scope

Decision recorded on 2026-10-22: **programming is intentionally excluded from this mathematics
ontology extension**. It is not a pending implementation batch or a condition for completing
the agreed scope. This includes program variables and types, assignment, control flow, loops as
program constructs, computer functions, lists and other data structures, language syntax, and
writing or debugging code implementations of algorithms.

Mathematical variables, functions, sequences, iteration, algorithms and their correctness remain
mathematical knowledge when studied independently of code. Calculator, CAS, spreadsheet and
other software contexts remain covered by the tool Scopes where evidenced. These Scopes do not
establish programming knowledge or general proficiency in operating an application.

Historical audit rows retain their original requirements and judgments. Programming-only
requirements are deliberately excluded from the current extension; mixed requirements keep
their mathematical component in scope and exclude their code implementation component.
For example, the Euclidean algorithm remains relevant while its programmed implementation
in BAV-V12-4-01 is excluded. This decision does not turn an unmet programming requirement into
a covered one or establish unrestricted coverage of the full curricula.

The scope clarification also excludes **encryption/decryption, keys and cryptographic protocols**
as computer-science knowledge, including RSA. FR-EXP-N09, FR-EXP-N22, FR-EXP-N25 and
BAV-V12-4-04 remain historical curriculum evidence, not pending ontology work. Their underlying
number theory remains in scope independently of cryptographic applications.

**Markov-chain absorption and convergence are explicitly in scope** and are now merged through
PR #85, including eventual absorption probabilities and convergence guarantees.

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

## Original coverage judgments — 2026-10-21 baseline

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

## Current mathematics coverage — 2026-10-22

Reviewed against merged `main` at `53e6602`. **No recorded required mathematical gap remains
open in the selected courses at the agreed modeling granularity**, after the programming and
cryptography exclusions. This is a disposition of the original findings against PRs #82–85,
not a new certification of every curriculum competency. The original inventories and counts
below remain unchanged so the evidence and subsequent decisions can be distinguished.

| Inventory / finding | Current disposition |
| --- | --- |
| CCSS K–8: 6.G.A.4, 7.G.A.2, 8.G.A.5 | Nets, triangle criteria and Euclidean results are available after PR #82. |
| CCSS high school: the 17 flagged geometry rows | PR #82 supplies the theorem, criterion, construction, sector and solid-generation knowledge and repairs dilation's identity case. `VerticalAngles` also explicitly includes equality. Together with K–8, this resolves 20 of the 21 original flagged content rows. |
| CCSS F-IF.A.1 | The previously accepted `NumericFunction` + `FunctionSymbol` + `FunctionArgument` composition remains sufficient for the agreed numerical-function scope. A function between arbitrary sets remains an optional generalization, not a reopened requirement for this extension. Do not claim unrestricted set-mapping coverage. |
| Bavaria regular: BAV-G1, BAV-PR1, BAV-PR2 | `CrossProduct` is available after PR #83; `ProbabilityHistogram` and digital-tool contexts after PR #84. Tool contexts do not assert application-operation proficiency. |
| Bavaria enrichment: BAV-V-G1, BAV-V-G2, BAV-V-R1 | Monotone sequence convergence is available after PR #83, eventual absorption after PR #85, and digital contexts after PR #84. RSA and code implementation are excluded. |
| France required mathematical results and representations | PR #83 supplies arithmetic sums and sequence-limit guarantees/rules; PR #84 supplies sign/variation tables. Required programming and encryption rows are excluded. FR-P1-AUTO10 remains an unverified inherited-prerequisite requirement. |
| France optional geometry and sequence-limit follow-ups | Triangle median concurrency and exact construction knowledge are available after PR #82. Adjacent-sequence arguments and the specified positive Heron/Newton square-root convergence argument compose using PR #83. This does not assert convergence of arbitrary Newton iterations. |
| France optional finite-chain asymptotics: FR-EXP-M14 | PR #85 supplies finite-chain convergence conditions and guarantees. Arbitrary infinite-state random walks remain outside that claim. |

The [CCSS function standard](https://www.thecorestandards.org/Math/Content/HSF/IF/) does permit
arbitrary input/output sets; the numerical boundary above records the user's earlier modeling
decision. The appendix follow-ups give the affected rows and supporting descriptor mappings:
[CCSS K–8](coverage-audit-ccss-k8.md), [CCSS high school](coverage-audit-ccss-highschool.md),
[Bavaria regular](coverage-audit-bavaria.md), [Bavaria enrichment](coverage-audit-bavaria-enrichment.md)
and [France](coverage-audit-france.md).

### Remaining identifiable mathematical extensions

The following are **optional enrichment**, except where explicitly marked illustrative.
They are useful possible extensions, not missing compulsory-core batches. Requirement IDs
refer to the linked [French evidence inventory](coverage-audit-france.md), which preserves
the official source and page for each item. The optional/illustrative distinction follows
the [première programme](https://www.education.gouv.fr/sites/default/files/document/Annexe%20%E2%80%93%20Programme%20d%26%23039%3Benseignement%20de%20sp%C3%A9cialit%C3%A9%20de%20math%C3%A9matiques%20de%20la%20classe%20de%20premi%C3%A8re%20de%20la%20voie%20g%C3%A9n%C3%A9rale-515408.pdf),
[terminale spécialité programme](https://eduscol.education.gouv.fr/sites/default/files/document/spe246annexe1158907pdf-84159.pdf)
and [mathématiques expertes programme](https://eduscol.education.gouv.fr/sites/default/files/document/spe264annexe1158825pdf-84165.pdf).

| Mathematical knowledge still absent | Evidence rows | Boundary / suggested treatment |
| --- | --- | --- |
| Sums of squares and cubes | FR-P1-SEQ16 | Reusable finite-sum identities; `FiniteArithmeticSum` supplies a different result. Review within algebraic equivalence. |
| Orthocenter / altitude concurrency | FR-P1-GEO09 | The triangle-center family now covers median concurrency, but not the altitude-concurrency theorem. Small Euclidean addition. |
| Weighted barycenters and associativity | FR-TLE-SPACE07 | General weighted affine combinations and their grouping rule extend beyond triangle centroids and coordinate midpoints. |
| Geometric mean and AM–GM inequality | FR-TLE-FUN08 | Arithmetic mean and a generic inequality do not identify this mean or its comparison theorem. |
| Complex triangle inequality, including equality conditions | FR-EXP-C13 | The existing `TriangleInequality` concerns triangle side feasibility; it does not state the complex-modulus inequality and equality criterion. |
| Vieta relations and rational-root theorem | FR-EXP-P08, FR-EXP-N17 | Root–coefficient relations and integer-coefficient divisibility restrictions are reusable polynomial results beyond factorization. |
| Bisection and secant methods | FR-TLE-FUN12 (illustrative), FR-TLE-FUN13 (optional) | Newton's method exists. Bisection's interval guarantee and the secant update need their own mathematical methods; their code implementation remains excluded. |
| Binomial–Poisson limit / rare-event approximation | FR-TLE-PROB08 | The two distributions exist, but their limiting relationship is independently reusable knowledge. |
| Lorenz curves | FR-TLE-FUN06 | Cumulative population share versus cumulative quantity share has a distinct interpretation from a CDF; review its knowledge and representation facets. |
| Eulerian trails/circuits and their criterion | FR-EXP-M12 | Traversing every edge exactly once and the existence criterion are not supplied by `GraphCycle`. |
| Sieve of Eratosthenes | FR-EXP-N15 (illustrative) | A mathematical elimination method for identifying primes; distinguish it from writing a program. |
| Primality witnesses, pseudoprimes and Carmichael numbers | FR-EXP-N21 | Fermat's little theorem alone does not identify testing limitations or these number classes. |
| Cardano's cubic solution | FR-EXP-P09 | Deeper optional algebraic method for cubic equations. |
| Gaussian integers / sums of two squares; Pell–Fermat equations | FR-EXP-N27, FR-EXP-N28 | Deeper number-system and Diophantine results; generic integer equations and factorization do not supply their solution structure. |
| Discrete Fourier transform | FR-EXP-G09 | A mathematical transform, independently of its software implementation. Complex exponentials and linear maps do not identify the transform itself. Decide how much frequency interpretation and inversion to cover; the optional title does not prescribe a full transform-theory syllabus. |

### Topics needing a narrower mathematical question

The original optional titles do not specify enough depth to choose a new concept responsibly:
Hanoi (FR-P1-SEQ15), vector/scalar Leibniz functions (FR-TLE-SPACE08/SPACE17), the continuous
Cauchy functional equation (FR-TLE-FUN14), Briggs and Brouncker algorithms
(FR-TLE-FUN20 / FR-TLE-CALC23), unspecified random walks (FR-TLE-CONC07), and
Mandelbrot/Julia experimentation (FR-EXP-C14). Keep these as possible mathematical studies,
not automatically one missing Area per named problem. The finite Markov additions do not
establish unrestricted random-walk or dynamical-systems coverage.

Error-correcting codes (FR-EXP-N24) require a separate scope decision. Their mathematical
coding theory is not automatically programming or cryptography, but it has not been selected
for this extension. PageRank as a computer application remains excluded. No programming or
cryptography implementation is reopened by these mathematical follow-ups.

### Verification work still outstanding

- France's inherited seconde automatisms (FR-P1-AUTO10), Germany's full prerequisite years
  and other Länder, and the complete future French terminale programme were not audited.
  The eight future-programme comparison rows do not replace a full inventory.
- Bavaria's canonical pages were rechecked on 2026-10-22: grades 11 and 13 still return
  maintenance through 23 October, and grade 12 returns an access error. Publication freshness
  remains qualified as recorded in the [source-status appendix](coverage-audit-bavaria.md#source-status-and-limits).
- The CCSS source-data repairs below remain separate work. In particular, the local
  S-ID.B.6a text still omits quadratic models; this is not an ontology gap.
- Representative competency tasks and counterexamples still need curriculum-level acceptance
  checks. Valid source/build output does not by itself certify those target mappings.

## Original follow-up findings — 2026-10-21 baseline

The recommendations in this section are retained as the original audit record. They are not
the current work list: PRs #82–85 implement the four selected follow-up batches. In particular,
`VerticalAngles` now explicitly includes equality. The general arbitrary-set function question
remains a separate modeling boundary; numerical-function composition remains accepted.

### 1. Euclidean geometry

| Required knowledge or method | Representative requirements | Recommended treatment |
| --- | --- | --- |
| Triangle feasibility, congruence and similarity criteria | 7.G.A.2; 8.G.A.5; G-CO.B.8; G-SRT.A.3/B.5 | Identify the criteria and their sufficiency, including ambiguous/invalid data. Decide whether one knowledge family with criterion Scopes or several reusable result concepts is the better fit. |
| Triangle, parallel-line and quadrilateral theorems | 8.G.A.5; G-CO.C.9–11 | Cover angle sums/exterior angles, transversal relationships, perpendicular-bisector loci, isosceles base angles, midsegments, median concurrency and parallelogram/rectangle implications. Existing objects and angle calculations remain reusable. |
| Exact geometric constructions | G-CO.D.12–13; G-C.A.3–4 | Separate construction knowledge/correctness from the permitted-tool context. Straightedge/compass operations are not represented by freehand drawing alone. |
| Circle-angle and triangle-center results | G-C.A.2–3 | Cover central/inscribed angles, the diameter/right-angle result, cyclic quadrilaterals, and incircle/circumcircle construction guarantees. Existing tangent-radius and chord-center relations cover only part of this. |
| Cavalieri's principle | G-GMD.A.1–2 | Add the equal-cross-sections/equal-volume guarantee without requiring calculus. CrossSectionIntegration is not a substitute for the specified informal argument. |

These are related theorem/criterion families, not a proposal for an Area per standard. The
explicit residual rows and contrasting probes are in the [high-school appendix](coverage-audit-ccss-highschool.md#historical-baseline-residual-questions-and-representative-tasks).
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

### 4. Excluded programming and further mathematical extensions

French algorithmic/programming expectations involve mutable variables, assignment, types,
conditionals, loops, computer functions, lists and Python syntax. Mathematical Variable,
FunctionComposition, Iteration and ProcedureExecution do not fully describe that knowledge.
These requirements are now deliberately excluded by the
[scope decision](#programming-excluded-from-the-current-extension-scope), rather than queued
as computing/programming foundations. Keep mathematical algorithms and their code implementation distinct.

Encryption arithmetic can often reuse congruences, modular inverses and number-theory results.
Encryption/decryption, keys and protocol meaning are excluded computer-science knowledge.
The optional Bavarian enrichment audit records RSA as historical curricular content, while
eventual absorption in finite Markov chains is now implemented by the merged
[Markov batch](markov-absorption-convergence-draft.md).
StationaryDistribution correctly does not guarantee convergence or absorption.

The French appendix preserves optional extensions such as Euler trails, Markov convergence,
additional polynomial results and more specialized number theory. Markov convergence is now
merged in that batch; the others remain future choices. Illustrative algorithms such
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
2. The [cross-product, arithmetic-sum and sequence-limit batch](vector-sums-sequence-limits-draft.md)
   is merged through PR #83: five Areas in existing families and a broader LimitLaws definition,
   including finite/signed-infinite limit rules and the boundary between finite evidence and proof.
   Curriculum-level acceptance remains separate from source and build validation.
3. The [representation and tool-context batch](representations-digital-tools-draft.md) is merged
   through PR #84: thirteen new Scopes for sign/variation tables, theoretical probability
   histograms and tool contexts, including the `ToolScope` organizer, software specialization
   and measurement-tool links, plus a broader tabular definition. Existing graphical compositions
   cover density and cumulative-distribution plots. Programming is deliberately excluded.
4. The [Markov-chain absorption and convergence implementation](markov-absorption-convergence-draft.md)
   is merged through PR #85: seven Areas for eventual absorption probabilities
   (BAV-V12-3-06 / BAV-V-G2) and convergence guarantees (FR-EXP-M14, optional in the curriculum
   but explicitly included in this extension). Programming, encryption/key concepts and
   cryptographic protocols are excluded from the work list.
5. For the next optional mathematics batch, prioritize the small reusable results: sums of squares
   and cubes, geometric mean/AM–GM, complex triangle inequality, Vieta relations and the
   rational-root theorem. Review placement and reuse before adding any new family.
6. Follow with orthocenter/weighted-barycenter geometry, then select among Eulerian graph theory,
   numerical methods, probability/statistics and the deeper enrichment listed in the
   [current-status table](#remaining-identifiable-mathematical-extensions). These are proposed
   options, not approved implementation batches.
7. Repair CCSS source data, recheck the canonical Bavarian pages once accessible, and decide whether
   to audit the explicitly excluded prerequisite catalogues and future French programme in full.

For each implementation, rerun the affected rows with a representative task and counterexample,
confirm descriptor eligibility and relation meaning, and perform the normal source/build checks.
A missing concept is not closed merely by adding a broad family heading. These decisions should
be reviewed before changing the ontology; this document implements none of them.

## Verification record — original audit, 2026-10-21

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

## Verification record — merged follow-up, 2026-10-22

The checkout is on `main` at `53e6602c376c887131504ebadfdb6a3e47a1faab`, matching `origin/main`.
The [merged release workflow](https://github.com/christian-bick/edugraph-ontology/actions/runs/39706413812)
completed successfully for that commit. This follow-up changes documentation only; all four
authored Turtle files remain identical to `HEAD`.

Source assessment is valid at **1,441 descriptors / 7,668 assertions**. The seven merged
Markov Areas match the approved tables, preserve existing label eligibility, and retain the
editor's exact Area serialization. Documentation verification passes for all **49 Markdown
files**, including local links, anchors and rule references; `git diff --check` also passes.
The original requirement inventories and numerical judgments were preserved. The dated
follow-up records a review of their open findings against the merged source, rather than
claiming a full new task-level audit. No new Docker run is required for these documentation
edits under [ONT-W3](../change-review.md#ont-w3--verify-and-report-the-actual-change).
