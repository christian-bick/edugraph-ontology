# Cross product, finite arithmetic sums and sequence-limit guarantees

Status: **implemented draft for review**, 2026-10-22, on `codex/vector-sums-sequence-limits`.
Baseline: `main` at `5b89a920682700a18e722fad6d4cb690c589a3d0`, after
[PR #82](https://github.com/christian-bick/edugraph-ontology/pull/82);
1,416 descriptors and 7,521 authored assertions.

This develops batch 2 of the [school curriculum audit](coverage-audit-2026-10-21.md).
The implementation adds **five new Areas and one existing definition revision**, using existing
families throughout. No new Scope, Ability or organizational family is needed.
The curriculum mappings below are proposed resolutions, not changes to the historical audit judgments.

## Implemented structure

`P` means that the child is `partOf` its parent; `S` means that the child `specializes` its parent.
Only the named new leaves and the revision to `LimitLaws` belong to this batch.

```text
LinearAlgebra
└─ P VectorAlgebra
   └─ P VectorArithmetic
      ├─ P DotProduct [existing]
      └─ P CrossProduct [new]

Algebra
└─ P AlgebraicEquivalence
   ├─ S FiniteGeometricSum [existing]
   └─ S FiniteArithmeticSum [new]

Analysis
├─ P FunctionTheorems
│  ├─ P SequentialLimitCriterion [existing; unchanged]
│  ├─ P MonotoneSequenceConvergenceTheorem [new]
│  └─ P MonotoneSequenceDivergenceTheorem [new]
└─ P SequenceAndSeriesProperties
   ├─ P SequenceConvergence [existing; unchanged]
   └─ P SeriesConvergence [existing; unchanged]

Calculus
└─ P LimitMethods
   ├─ P LimitLaws [existing; broaden definition]
   ├─ P SqueezeTheorem [existing; retain finite-limit meaning]
   └─ P InfiniteLimitComparison [new]
```

The cross product adds an operation whose magnitude and orientation are not specified by
`NormalVector` or `DotProduct`. The arithmetic-sum formula contributes an equality, matching the
accepted placement of `FiniteGeometricSum`. The two monotone results supply sufficient conditions
for a limit; the existing convergence, bound and monotonicity concepts describe the hypotheses
and conclusion but do not supply those implications.

A real sequence is a real-valued function on an integer domain. The existing definition of
`FunctionTheorems` already admits these results, alongside `SequentialLimitCriterion`.
`SequenceAndSeriesProperties` continues to describe properties, and `LimitMethods` continues to
hold calculation and comparison principles. This preserves the
[earlier limit consolidation](calculus-family-draft.md#limit-properties-and-characterizations--2026-10-21)
without recreating `LimitFoundations` or a parallel generic sequence-limit family.

## Approved definitions and examples

Definitions are authored in `rdfs:isDefinedBy`; examples are authored in `rdfs:comment`.
The definitions follow [ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries).

| New Area | Relation | Definition | Example |
| --- | --- | --- | --- |
| `CrossProduct` | `partOf VectorArithmetic` | The vector-valued product of two vectors in oriented real Euclidean three-space, with magnitude equal to their parallelogram's area and, for independent inputs, perpendicular direction set by the right-hand rule for their order. Linearly dependent inputs give the zero vector. | In right-handed orthonormal coordinates, (2,0,0) × (0,3,0) = (0,0,6); reversing the inputs gives (0,0,-6). |
| `FiniteArithmeticSum` | `specializes AlgebraicEquivalence` | The identity equating the sum of n arithmetic terms beginning with a, of common difference d, to n(2a + (n - 1)d)/2 for positive integer n, equivalently n times the mean of the first and last terms. | 3 + 7 + 11 + 15 = 4(3 + 15)/2 = 36; 1 + 2 + ... + 100 = 100(101)/2 = 5050. |
| `MonotoneSequenceConvergenceTheorem` | `partOf FunctionTheorems` | The guarantee that an infinite real sequence that is nondecreasing and bounded above, or nonincreasing and bounded below, converges to a finite real limit. The limit is respectively the supremum or infimum of its terms. | The nondecreasing sequence a_n = 1 - 1/n for n >= 1 is bounded above by 1 and converges to its supremum 1. |
| `MonotoneSequenceDivergenceTheorem` | `partOf FunctionTheorems` | The guarantee that an infinite nondecreasing real sequence unbounded above tends to positive infinity, and an infinite nonincreasing real sequence unbounded below tends to negative infinity. | The nondecreasing sequence a_n = n^2 for n >= 1 is unbounded above, so it tends to positive infinity. |
| `InfiniteLimitComparison` | `partOf LimitMethods` | The guarantee that a real-valued function bounded below by a function tending to positive infinity also tends to positive infinity, and the corresponding upper-bound result for negative infinity, when the inequality holds sufficiently near the same approached point or domain end. Real sequences are included. | n - 1 <= n + sin(n) for every positive integer n, so n + sin(n) tends to positive infinity. |

Only `LimitLaws` receives a substantive revision to an existing definition:

| Existing Area | Replacement definition | Example |
| --- | --- | --- |
| `LimitLaws` | Rules for combining finite or infinite limits through arithmetic operations and continuous functions, including when these rules apply and when a form is indeterminate. | From u_n -> 2 and v_n -> positive infinity, infer u_n + v_n -> positive infinity and u_n/v_n -> 0; from w_n -> 0 through positive values, infer 1/w_n -> positive infinity. |

The existing `FunctionTheorems` and `LimitMethods` definitions already concern real functions;
their meanings do not require a continuum domain. No definition change is needed merely to
include real sequences. `SequenceConvergence` keeps its finite-limit definition. Signed-infinite
sequence behavior continues to compose `Sequence` with `FunctionEndBehavior`.

## Cross product: operation, geometry and reuse

Use the conventional real three-dimensional operation. In right-handed orthonormal coordinates,

\[
u\times v=(u_2v_3-u_3v_2,\;u_3v_1-u_1v_3,\;u_1v_2-u_2v_1).
\]

Its geometric and coordinate meanings belong to the same Area, as they do for `DotProduct`.
The basis qualification matters: the displayed component formula cannot be transferred unchanged
to an arbitrary nonorthonormal or oppositely oriented basis. Standard references include
[OpenStax's cross-product section](https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product)
and [MIT's vectors, determinants and planes course](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/1.-vectors-and-matrices/part-a-vectors-determinants-and-planes/session-7-cross-products/).

| Competency | Reusable composition and boundary |
| --- | --- |
| Find a plane normal from two directions | `CrossProduct` + `NormalVector` when the directions are independent. Dependent inputs produce zero, which is not a valid `NormalVector` under its existing definition. |
| Calculate a parallelogram or triangle area | `CrossProduct` + `VectorMagnitude` + `AreaCalculation` and the relevant shape. The areas are respectively the magnitude of the product and half that magnitude. |
| Calculate a parallelepiped volume | `CrossProduct` + `DotProduct` + `VolumeCalculation`; V = abs((u × v) · w). The cross product supplies oriented base area and its dot product with w supplies signed height scaling. Taking absolute value gives ordinary volume. |
| Investigate dependence | `CrossProduct` + `LinearIndependence` when the zero-product criterion itself is at issue. This additional knowledge is not automatically evidenced by every coordinate calculation. |

No separate cross-product application Areas or scalar-triple-product Area are needed initially.
The volume relation is justified by the base-area and perpendicular-height interpretations above.
`MatrixDeterminant` can describe a determinant derivation when that is actually shown, but the
cross product is not a scalar determinant or an entrywise vector product.

Acceptance cases include order reversal, zero inputs, parallel inputs, and the distinction between
a normal and the specifically scaled cross product. For u = (2,0,0), v = (0,3,0), w = (1,1,4),
the product is (0,0,6), the triangle area is 3, and the volume is 24. Replacing w's last component
by -4 reverses the signed triple product but keeps volume 24. Normalizing (0,0,6) gives a unit
normal, not the original cross product. Associativity fails: (e₁ × e₁) × e₂ = 0, while
e₁ × (e₁ × e₂) = -e₂.

Exterior algebra, generalized products in other dimensions, torque and other physics concepts
remain outside this batch.

## Finite arithmetic sums: an identity, not a convergence claim

For n consecutive arithmetic terms starting at a with difference d,

\[
S_n=\sum_{k=0}^{n-1}(a+kd)
=\frac{n}{2}\bigl(2a+(n-1)d\bigr)
=\frac{n(a_1+a_n)}2.
\]

The final notation assumes a₁ = a and aₙ = a + (n - 1)d. An arbitrary block aₚ through a_q
has **q - p + 1** terms, so its sum is (q - p + 1)(aₚ + a_q)/2. Include n = 1, odd n,
negative d and d = 0. An empty sum can be defined separately; it is not needed for this
positive-term-count identity. The standard derivation reverses one copy of the sum and adds
the copies, avoiding an assumption that n must be even.
[OpenStax gives this finite pairing argument](https://openstax.org/books/algebra-and-trigonometry-2e/pages/13-4-series-and-their-notations).

`ArithmeticSequence` identifies the constant-difference relationship. `FiniteArithmeticSum`
identifies the reusable equality. `Sum` and an appropriate Ability can describe direct
addition without asserting knowledge of the identity. A proof can use `DeductiveReasoning`
with `DirectProof` or `ProofByInduction` when its actual argument supports that Scope.
No separate first-integers-sum Area is proposed: choose a = d = 1.

Nearby failures: the endpoint-mean formula does not apply to arbitrary nonarithmetic lists;
index q is not necessarily the number of terms; and substituting an infinity symbol for n
is not evaluation of a finite identity. Every finite partial sum exists even when the infinite
series diverges. Square/cube power-sum identities remain a separate optional extension.

## Sequence guarantees: establish hypotheses before taking limits

The two monotone theorems concern **infinite real sequences**. Non-strict monotonicity includes
constant sequences. A nondecreasing sequence needs an upper bound; a lower bound alone is
insufficient. A nonincreasing sequence needs a lower bound. A convenient bound is not
necessarily the limit: 1 - 1/n is bounded above by 2 but converges to 1.

The finite-limit result relies on completeness of the real numbers. A rational-valued monotone
sequence may converge to an irrational real limit; it need not have a rational limit. This does
not require a new completeness Area to use the theorem at school level. A future treatment of
ordered fields and completeness should identify that knowledge separately.

The divergence result requires both monotonicity and unboundedness in the corresponding direction.
Unboundedness alone does not mean eventual escape: n(-1)^n is unbounded in both directions
but tends to neither signed infinity. Boundedness alone does not give convergence either:
(-1)^n is bounded and oscillates. Conversely, (-1)^n/n converges without being monotone, so
the monotone theorem supplies sufficient conditions, not a characterization of all convergence.

Eventual monotonicity is handled by applying the theorem to a tail. The limit is unchanged by
finitely many initial terms. The supremum/infimum characterization then concerns that tail;
an early outlier can prevent it from being the supremum/infimum of the original entire sequence.
The two monotone guarantees and the role of real completeness are treated in
[UC Davis's introduction to analysis, §3.5](https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf);
[OpenStax's sequence treatment](https://openstax.org/books/calculus-volume-2/pages/5-1-sequences)
also states the eventual-monotonicity version.

For a recurrence a_(n+1) = f(a_n), separate three steps:

1. Establish that all terms exist and remain in a suitable domain, often by induction.
2. Establish monotonicity and the required bound to guarantee finite convergence.
3. If f is continuous at the resulting limit L, infer L = f(L) and use the admissible domain
   to select the limit from the equation's candidates.

For a₀ = 0 and a_(n+1) = sqrt(2 + a_n), induction gives 0 <= a_n < 2 and monotonicity.
The new convergence theorem gives a finite L in [0,2]. Continuity then gives L = sqrt(2 + L),
so L = 2. Solving only the fixed-point equation would not establish convergence: the recurrence
a_(n+1) = 1 - a_n with a₀ = 0 alternates between 0 and 1 despite having fixed point 1/2.

These hypotheses and distinctions match the current terminale treatment of sequences and
continuous recurrences. The programme requires bounded-monotone convergence, increasing-unbounded
divergence, and comparison/arithmetic for finite and infinite limits.
[French terminale programme, pp. 11–13](https://eduscol.education.gouv.fr/sites/default/files/document/spe246annexe1158907pdf-84159.pdf#page=11).

## Finite and signed-infinite limits: the inference boundary

This is the audit's principal definition gap. The direction in which the **input** approaches
and the behavior of the **output** are separate. At a finite domain boundary or at infinity,
outputs can approach a finite value, escape to a signed infinity, or approach neither.
Sequences use the domain end n -> positive infinity. An infinite output limit is not a finite
convergence value, and an oscillating sequence is not automatically an infinite limit.

Broaden `LimitLaws` rather than duplicating finite and infinite versions of each arithmetic rule.
All functions must be considered along the same approach on their common admissible domain;
quotients must be defined sufficiently near that approach. Required signs concern actual values
eventually, not the symbols +0 or -0 as distinct real numbers.

| Permitted inference | Required conditions / contrasting failure |
| --- | --- |
| Finite A and B transfer through addition, subtraction and multiplication | For division, B must be nonzero. A/0 is not an ordinary quotient of limits. |
| A finite limit plus a signed-infinite limit has that signed-infinite limit | Two infinities of opposite sign do not determine their sum. |
| Two limits both +infinity have sum +infinity; both -infinity have sum -infinity | Infinity minus infinity is indeterminate. |
| A nonzero finite limit times a signed-infinite limit, or two signed-infinite limits, gives the corresponding signed infinity | A zero limit times an infinite limit is indeterminate. |
| A finite numerator limit divided by a denominator tending to either signed infinity gives zero | An infinite numerator and infinite denominator give an indeterminate form. |
| The reciprocal of a function tending to zero through strictly positive values tends to +infinity, and through strictly negative values to -infinity | For v_n = (-1)^n/n, 1/v_n has neither signed-infinite limit. Eventual nonzero values alone do not fix the sign. |
| Continuous outer f transfers a finite inner limit L to f(L) | f must be defined and continuous at L. Continuity at finite inputs alone supplies no rule for an inner limit of infinity. |

The forms 0/0, infinity/infinity, 0 × infinity and infinity - infinity are **inconclusive**,
not proofs of divergence. For example, n/n -> 1, n/n² -> 0 and n²/n -> positive infinity all
have the infinity/infinity form. Rewriting can expose a valid inference; treating infinity as
an ordinary cancellable real value cannot. Power-type indeterminate forms can be reduced using
logarithms where their domain permits; no new blanket exponent limit rule is proposed.
[UBC's limit laws, Theorem 1.5.9](https://personal.math.ubc.ca/~CLP/CLP1/clp_1_dc/sec_1_5.html)
provide the signed-infinite arithmetic and indeterminacy distinctions.

Keep `SqueezeTheorem`'s finite-limit definition. For infinite comparison only one appropriately
directed bound is needed: if g <= f eventually and g -> +infinity, then f -> +infinity; if
f <= h eventually and h -> -infinity, then f -> -infinity. An upper bound tending to +infinity
gives no such conclusion. For example, 0 <= n does not imply that the constant sequence 0
tends to infinity. Two finite bounds with different limits also do not force a single limit.

`InfiniteLimitComparison` is a sibling of `SqueezeTheorem`, not its specialization: the present
squeeze definition requires two bounds and a common finite limit. Neither is made a child of
`SequenceConvergence`, because a sufficient-condition theorem is not a subtype of the property
it guarantees. `SequentialLimitCriterion` remains explicitly finite in this batch; extending
that equivalence to other approaches would be a separate theorem refinement.

## Finite evidence, proof and infinite sums

The second boundary concerns what the content can justify. Reuse the existing
[justification Scopes](../justification.md) and logical concepts rather than adding a generic
infinity Scope or a new proof Ability.

| Evidence or claim | Appropriate distinction |
| --- | --- |
| Inspecting the first 100 terms of an infinite sequence | `ComputedEvidence` + `SelectedCaseEvidence` when computation is the stated evidence basis; a conjecture may involve `InductiveReasoning` or `HypothesisGeneration`. It does not establish every later term's behavior. |
| Checking every index in a specified finite list | `ExhaustiveCaseEvidence` for that finite domain only. A theorem for all positive integers is a different claim. |
| Proving an initial case and an arbitrary successor step | `ProofByInduction` with `DeductiveReasoning`; finitely written reasoning can prove a statement for infinitely many indices. It is not exhaustive enumeration or empirical induction. |
| Establishing a finite limit | For each epsilon > 0, choose an index N that works for **every** n >= N. `SequenceConvergence` already includes this quantifier structure. |
| Establishing divergence to +infinity | For every real threshold M, choose N so every n >= N satisfies a_n > M. Finding one large term for each threshold is weaker. |
| Establishing convergence of an infinite sum | Apply `SeriesConvergence` to the sequence of finite partial sums. A term limit of zero alone is insufficient; reuse `NthTermDivergenceTest`. |
| Claiming an approximation error bound | Use `DeterministicErrorBound` only when a valid bound is supplied or established. The monotone convergence theorem alone supplies no numerical convergence rate. |

For any finite observed prefix, different unprescribed tails can converge, diverge or oscillate.
That does not prevent a finite proof from settling the infinite claim when a general formula,
recurrence and justified invariant, or quantified estimate is available. Logical implications
are mathematical statements in the task; they are not unconditional descriptor-level `implies`
edges between monotonicity, boundedness and convergence labels.

For adjacent sequences, use the new bounded-monotone guarantee on both sequences, then `LimitLaws`
on their difference: if a_n is nondecreasing, b_n is nonincreasing, a_n <= b_n, and
b_n - a_n -> 0, they have a common finite limit L with a_n <= L <= b_n.
The bracket gives a midpoint error at most (b_n - a_n)/2 when that bound is actually used.
This supports the optional adjacent-sequence topic compositionally; no separately named theorem
is needed in the initial batch. Likewise, specific Heron/Newton convergence proofs can use the
new theorem with `NewtonMethod`, while retaining the iteration's domain and starting-value conditions.

## Curriculum mapping and acceptance tasks

The original [French](coverage-audit-france.md) and [Bavarian](coverage-audit-bavaria.md) row IDs
are retained. These are proposed semantic resolutions, not automatic coverage-score changes.

| Audit rows | Proposed resolution and acceptance task |
| --- | --- |
| BAV-12-5-04 | `CrossProduct` and the geometric compositions above. Compute a normal, triangle area and volume; reject a zero normal from dependent directions and check the orientation/absolute-value distinctions. |
| FR-P1-SEQ04 and FR-P1-SEQ10 | `FiniteArithmeticSum`; derive the endpoint formula and 1 + ... + n, then apply it to a block whose first index is not 1. Check d = 0 and a nonarithmetic counterexample. |
| FR-TLE-LIM02 and FR-TLE-LIM09 | `MonotoneSequenceDivergenceTheorem`; justify eventual escape from monotonicity plus unboundedness. Contrast n(-1)^n. |
| FR-TLE-LIM07 | `MonotoneSequenceConvergenceTheorem`; establish hypotheses for the square-root recurrence and only then determine its limit. Contrast bounded oscillation. |
| FR-TLE-LIM04 and FR-TLE-LIM11 | `InfiniteLimitComparison`; justify n + sin(n) -> +infinity from a lower bound, and reject the reversed inference from an upper bound. |
| FR-TLE-LIM05 and FR-TLE-LIM18 | Broadened `LimitLaws`, finite `SqueezeTheorem` and new infinite comparison. Compare valid quotients with infinity/infinity cases; include a sign-changing denominator approaching zero. |
| FR-P1-SEQ06 and FR-TLE-LIM08 — existing support to preserve | Keep conjecture and deductive induction distinct. No new descriptor is required for these rows. |
| FR-TLE-LIM14 and FR-TLE-CALC19 — optional | Adjacent-sequence argument above; for integral approximation also reuse `RiemannSum` and `AreaIntegration`. Establish bracketing and a vanishing gap before asserting a common limit. |
| FR-TLE-LIM16 — optional | Use `NewtonMethod` with the new monotone theorem for a justified positive square-root iteration. Do not infer convergence of every Newton iteration. |
| FR-TLE-SPACE23 — optional | Cross product becomes an additional method for a vector perpendicular to two independent vectors; the programme does not require this method specifically. |
| FR-FUT-LIMIT01 and FR-FUT-LIMIT02 — forward comparison only | The same proposed results address the recorded future-programme limit gaps. They do not change the audit's current/future scope distinction. |

The [official première programme, p. 6][fr-premiere] specifies consecutive arithmetic sums and
the proof of 1 + ... + n. These additions are broader than that special-case identity but reuse
one formula rather than introduce multiple overlapping descriptors. CCSS already covers arithmetic
sequence construction through [F-BF.A.2](https://www.thecorestandards.org/Math/Content/HSF/BF/);
this batch is not claimed to resolve a newly missing CCSS requirement.

Bavaria M12.5 explicitly includes cross-product normals, areas and volume with the dot product
in the [indexed official route](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/12/mathematik/regulaer).
The [canonical route](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/mathematik)
still returned maintenance during this research. Preserve the audit's source-availability limit;
the alternate official text does not establish that every canonical page has been freshly verified.

[fr-premiere]: https://www.education.gouv.fr/sites/default/files/document/Annexe%20%E2%80%93%20Programme%20d%26%23039%3Benseignement%20de%20sp%C3%A9cialit%C3%A9%20de%20math%C3%A9matiques%20de%20la%20classe%20de%20premi%C3%A8re%20de%20la%20voie%20g%C3%A9n%C3%A9rale-515408.pdf#page=6

## Alternatives and implementation boundaries

An independent `SequenceLimitTheorems` organizer would be reasonable if a larger sequence-specific
theory is later added. For two results, the existing `FunctionTheorems` avoids an unnecessary
parallel family. Moving the results into `SequenceAndSeriesProperties` would blur the current
property/result distinction. A single monotone-limit theorem with finite/infinite specialization
children is also possible, but adds a parent without an identified additional labeling need.

Separate finite/infinite arithmetic-law Areas would allow narrower direct indexing. The preferred
broadened `LimitLaws` preserves one reusable concept, with the actual result and hypotheses supplied
by the task. An `AdjacentSequenceTheorem` could become worthwhile if its paired-bracket guarantee
needs independent indexing across approximation topics; the explicit composition above is sufficient
for this batch. No measure-theoretic monotone convergence theorem is implied by either sequence Area.

The implementation adds five leaves and revises only the definition/example of `LimitLaws`.
Existing identifiers, structural relations and labeling eligibility remain unchanged. The five new
Areas are eligible under [ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
No progression or constraint edges are added merely because a theorem uses another concept.
The four constituent edges and one specialization respect
[ONT-S4](../structure.md#ont-s4--composition-may-lead-into-specialization).

Review the mathematical acceptance cases alongside the authored graph and concise definitions.
The implementation follows editor ordering and requires the full Docker/client gate under
[ONT-W3](../change-review.md#ont-w3--verify-and-report-the-actual-change).
Review broadened `LimitLaws` annotations against their actual hypotheses; valid existing finite-limit
uses retain their meaning. No dataset package or target spec changes belong to this batch;
client libraries are generated by the normal build. Optional power sums, standalone completeness theory, general fixed-point
theorems, computing, representations and Markov convergence remain outside this batch.

## Proposal verification — 2026-10-22

Independent semantic review checked the operation and sum examples, monotone hypotheses and tail
qualification, recurrence argument, comparison directions, and adjacent-sequence composition.
The simplified `LimitLaws` definition identifies applicability conditions and indeterminate forms;
the detailed domain, sign and continuity conditions are explained above.

A temporary candidate graph built from the five definition rows and the LimitLaws revision passed
the shared ontology assessment with no findings: **1,421 descriptors and 7,546 assertions**.
All five additions were eligible, with no existing eligibility changes. At that proposal stage,
the authored Turtle files remained byte-identical to the baseline. These checks validated the
candidate graph, not source implementation or full curriculum coverage.

Documentation validation passed for all **48 Markdown files**, including local links and anchors.

## Implementation and adoption — 2026-10-22

The draft branch adds `CrossProduct`, `FiniteArithmeticSum`,
`MonotoneSequenceConvergenceTheorem`, `MonotoneSequenceDivergenceTheorem` and
`InfiniteLimitComparison` to [the authored Areas](../../core-areas-math.ttl). Four additions use
`partOf`; `FiniteArithmeticSum` specializes `AlgebraicEquivalence`. Each has a definition and example.

`LimitLaws` retains its identifier and parent while adopting the approved concise definition and
examples covering finite and infinite limits. This broadens its scope without weakening the
conditions for applying an individual rule. Existing finite-limit annotations retain their meaning;
new infinite-limit annotations must be supported by the actual task and its hypotheses.

The resulting source contains **1,421 descriptors and 7,546 authored assertions**. All five new
Areas are eligible, and existing identifiers, relations and eligibility are preserved. No new Scope,
Ability or organizer is introduced. Historical curriculum-audit judgments remain unchanged until
the affected requirements receive their separate acceptance review.

Implementation validation passed on 2026-10-22:

- The five new Areas match the approved definitions, examples and relations. Only the definition
  and example of `LimitLaws` change among existing descriptors; ontology assessment has no findings.
- The Area Turtle round-trips byte for byte through the editor's parser and serializer, including
  entity and relation ordering. All 48 Markdown files pass documentation validation.
- Independent semantic review confirms the family placements and mathematical boundaries,
  including the concise `LimitLaws` definition and its conditional meaning.
- The full `docker build . --output dist --progress plain` passes: TypeScript tests, source and
  documentation validation, package checks, Python lint and typing, all 49 Python tests, and
  wheel, rebuilt sdist, optional-parser and typed-consumer verification.

These checks verify the implementation and generated clients. They do not constitute an
end-to-end curriculum competency audit or change the historical coverage judgments.
