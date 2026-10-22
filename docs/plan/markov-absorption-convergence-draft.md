# Markov-chain absorption and convergence

Status: **implementation for review**, 2026-10-22, on `codex/markov-absorption-convergence`.
Baseline: `main` at `d04c0d3524351b305e6dc6307c17c6771fc04b18`, after PR #84;
1,434 descriptors and 7,626 authored assertions.

This develops the next batch of the [school curriculum audit](coverage-audit-2026-10-21.md#suggested-implementation-order-and-exit-criteria).
The approved implementation adds **seven new Areas**, using the existing `StochasticProcesses`
family. No existing descriptor is renamed, reparented or redefined. No new Scope, Ability or
organizational family is added.

The batch covers eventual absorption, its probability equations, and convergence of finite-chain
state distributions. Programming, encryption/key concepts and cryptographic protocols remain
[excluded](coverage-audit-2026-10-21.md#programming-excluded-from-the-current-extension-scope).
PageRank and other computer-science applications are not part of this batch.

## Approved structure

`P` means the child is `partOf` its parent; `S` means the child `specializes` its parent.

```text
Probability
└─ P StochasticProcesses [existing organizer]
   ├─ P FiniteMarkovChain [existing; remains eligible]
   │  └─ S AbsorbingMarkovChain [new]
   ├─ P MarkovTransitionMatrix [existing]
   ├─ P MarkovStateDistribution [existing]
   ├─ P StationaryDistribution [existing; unchanged]
   ├─ P AbsorptionProbability [new]
   ├─ P AbsorptionProbabilityEquations [new]
   ├─ P FiniteMarkovAbsorptionTheorem [new]
   ├─ P MarkovChainIrreducibility [new]
   ├─ P MarkovChainPeriodicity [new]
   └─ P FiniteMarkovConvergenceTheorem [new]
```

The chain type, its properties, a probability, a calculation principle and two guarantees are
different kinds of knowledge within the same field. Only `AbsorbingMarkovChain` is a narrower
chain type. The other additions do not specialize `FiniteMarkovChain` or `StationaryDistribution`.
Keeping their single structural home in `StochasticProcesses` also avoids duplicate placement
under `ProbabilityLimitTheorems` or generic Analysis families.

This follows [ONT-S1–S5](../structure.md). The existing `FiniteMarkovChain` receives only a
specialization child, so its labeling eligibility is preserved. All seven additions are eligible;
`StochasticProcesses` remains an organizer under [ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).

## Approved definitions and examples

Definitions below are authored in `rdfs:isDefinedBy`; examples are authored in `rdfs:comment`.
They follow [ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries).

| New Area | Relation | Definition | Example |
| --- | --- | --- | --- |
| `AbsorbingMarkovChain` | `specializes FiniteMarkovChain` | A finite, time-homogeneous Markov chain in which every state can reach an absorbing state through transitions of positive probability. An absorbing state cannot be left once entered. | States A and B are absorbing; from C, the next state is A, B or C with probabilities 0.2, 0.3 and 0.5. |
| `AbsorptionProbability` | `partOf StochasticProcesses` | The probability that a finite, time-homogeneous Markov chain eventually enters a specified absorbing state or set of absorbing states, given its initial state or distribution. | With A and B absorbing and C moving to A, B or C with probabilities 0.2, 0.3 and 0.5, eventual absorption in A from C has probability 0.4. |
| `AbsorptionProbabilityEquations` | `partOf StochasticProcesses` | First-step equations for eventual absorption probabilities in a finite, time-homogeneous Markov chain, with value one on the target absorbing states and the least nonnegative solution selected elsewhere. | With A and B absorbing and C moving to A, B or C with probabilities 0.2, 0.3 and 0.5, the probability of absorption in A satisfies h(A)=1, h(B)=0 and h(C)=0.2+0.5h(C), giving h(C)=0.4. |
| `FiniteMarkovAbsorptionTheorem` | `partOf StochasticProcesses` | The guarantee that a finite, time-homogeneous Markov chain in which every state can reach an absorbing state eventually enters some absorbing state with probability one. | With A and B absorbing and C moving to A, B or C with probabilities 0.2, 0.3 and 0.5, the probability of remaining in C after n steps is 0.5^n and tends to zero. |
| `MarkovChainIrreducibility` | `partOf StochasticProcesses` | Mutual reachability of every pair of states through transitions of positive probability in a finite, time-homogeneous Markov chain. | The chain with P=[[0,1],[1,0]] is irreducible; the chain with P=[[1,0],[0,1]] is not. |
| `MarkovChainPeriodicity` | `partOf StochasticProcesses` | The greatest common divisor of the possible positive return times to a state of a finite, time-homogeneous Markov chain, when such returns exist. Period one defines an aperiodic state. | In P=[[0,1],[1,0]], each state has period two; in P=[[0.8,0.2],[0.3,0.7]], each state has period one. |
| `FiniteMarkovConvergenceTheorem` | `partOf StochasticProcesses` | The guarantee that a finite, time-homogeneous, irreducible and aperiodic Markov chain has a unique stationary distribution and that its state distribution converges to it from every initial distribution. | For P=[[0.8,0.2],[0.3,0.7]], every initial distribution converges to the stationary distribution [0.6,0.4]. |

The absorption condition and guarantee follow the distinction in
[Grinstead–Snell, section 11.2, especially Theorem 11.3](https://math.dartmouth.edu/~prob/prob/prob.pdf#page=425).
The equation principle is the absorbing-target case of the hitting-probability result in
[Cambridge's Markov Chains notes, Theorem 3.4](https://www.statslab.cam.ac.uk/~rrw1/markov/M.pdf#page=15).
The convergence conditions and result are treated in
[Levin–Peres–Wilmer, sections 1.3 and 4.3](https://www.stat.berkeley.edu/~aldous/260-FMIE/Levin-Peres-Wilmer.pdf).
The placement and descriptor split are ontology design decisions, not classifications
prescribed by those sources.

### Approved progression relations

These are the only additional progression assertions in this batch. Each names a specific component
of the new knowledge; none asserts a universal teaching order or automatically labels every
prerequisite in a task. See [ONT-R3–R5](../relations.md).

| New Area | Relation targets | Reason |
| --- | --- | --- |
| `AbsorptionProbabilityEquations` | `integrates AbsorptionProbability, TotalProbabilityTheorem` | The equations express the target probability by conditioning on the first transition. |
| `FiniteMarkovAbsorptionTheorem` | `integrates AbsorbingMarkovChain` | The reachability condition defines the class to which the probability-one result applies. |
| `MarkovChainPeriodicity` | `integrates GreatestCommonDivisor` | The period is defined by the gcd of positive return times. |
| `FiniteMarkovConvergenceTheorem` | `integrates MarkovChainIrreducibility, MarkovChainPeriodicity, StationaryDistribution` | The result combines the two chain conditions with the invariant-distribution conclusion. |

No `implies` relation is added between these knowledge descriptors. Knowing a stationary
distribution does not itself establish a convergence theorem or its hypotheses.

## Absorption: finite approximation and eventual probability

Use the existing row convention: `P(i,j)` is the probability of going from i to j, and a state
distribution evolves as `mu_(n+1)=mu_n P`. Order the example states C, A, B:

\[
P=\begin{pmatrix}
1/2&1/5&3/10\\
0&1&0\\
0&0&1
\end{pmatrix},\qquad \mu_0=(1,0,0).
\]

For target A, the first-step calculation gives

\[
h_C=\tfrac15+\tfrac12h_C,\qquad h_C=\tfrac25.
\]

At step n the full distribution is

\[
\mu_n=\left(2^{-n},\;\tfrac25(1-2^{-n}),\;\tfrac35(1-2^{-n})\right).
\]

This example distinguishes three claims:

- `MarkovStateDistribution` describes the finite-step values.
- `AbsorptionProbability` identifies the eventual target event; its probability is 2/5.
- `AbsorptionProbabilityEquations` supplies the reusable calculation principle. `SystemSolving`
  supplies the separate knowledge of solving the resulting simultaneous constraints when needed.

Here the exact error in the A probability after n steps is `(2/5)2^(-n)`. A task may use that
bound, but a visually stable sequence of decimal outputs alone supplies no such guarantee.
Absorption somewhere has probability one; absorption in the selected state A does not.

For a simultaneous-equation example, keep A and B absorbing. Let C move to C, D and A
with probabilities 1/2, 1/4 and 1/4; let D move to C, D and B with probabilities 1/4, 1/4
and 1/2. Absorption in A satisfies `h_C=(1/2)h_C+(1/4)h_D+1/4` and
`h_D=(1/4)h_C+(1/4)h_D`, giving `h_C=3/5` and `h_D=1/5`.

### Boundary values and the relevant solution

For a target set A of absorbing states, write

\[
h_i=1\quad(i\in A),\qquad
h_i=\sum_jP_{ij}h_j\quad(i\notin A).
\]

Select the componentwise least nonnegative solution. In a finite chain one can instead set
`h=0` on states from which A is unreachable and solve for the remaining unknowns. In particular,
every other absorbing state has boundary value zero. These conditions identify the intended
probabilities; merely requiring solutions between zero and one need not do so.

For a counterexample, let A be absorbing and let U and V alternate deterministically in a
separate closed class. For target A, `h_U=h_V` and `h_V=h_U` permit any shared nonnegative value.
The true values are both zero. The chain has an absorbing state but is not an
`AbsorbingMarkovChain`, because that state is unreachable from U and V.

The target restriction is intentional. Entering an arbitrary state and later leaving it is a
general hitting event, not absorption as defined here. A closed two-state cycle is not an
absorbing state, and this batch does not silently treat every closed class as one. A later
general hitting-probability family could make absorption a specialization if that broader
knowledge is needed.

## Convergence: hypotheses, conclusion and counterexamples

The existing `FiniteMarkovChain` definition allows transition probabilities to vary with time.
All seven additions explicitly use **finite, time-homogeneous** chains. This agrees with the
existing fixed-matrix definitions of `MarkovTransitionMatrix` and `MarkovStateDistribution`
without narrowing `FiniteMarkovChain` globally.

Irreducibility concerns positive-probability reachability. In a transition graph it corresponds
to strong connectivity; reuse `GraphConnectivity` and `GraphWalk` when that representation is
actually involved. Periodicity concerns possible return lengths, not the magnitude of a
transition probability or visual repetition in a few simulated observations.
In an irreducible chain all states have the same period; the chain is aperiodic when that
period is one.

The convergence theorem concerns the distribution at time n. It does not claim that
an individual random path settles at one state or that empirical occupation frequencies and
state distributions have the same convergence conditions. This distinction is explicit in
[Kennedy's course notes, section 7.1 and Theorems 15–16](https://math.arizona.edu/~tgk/mc/book.pdf#page=85).

For finite chains, the equivalent positive-power criterion gives a school-facing route:
some power of P has every entry strictly positive. A positive P is sufficient, but zeros in P
alone do not refute convergence. The relationship with irreducibility and aperiodicity is
recorded in [Cambridge's notes, section 9.2](https://www.statslab.cam.ac.uk/~rrw1/markov/M.pdf#page=38).
Use the same theorem Area for that formulation; no parallel RegularMarkovChain Area is needed.

| Case | What it establishes |
| --- | --- |
| P=[[0.8,0.2],[0.3,0.7]] | Positive transitions give the theorem's conditions. From [1,0], the first-state probability is 0.6+0.4(0.5^n), converging to 0.6. |
| P=[[0,1],[1,0]] | The unique stationary distribution is [0.5,0.5], but [1,0] alternates with [0,1]. Irreducibility and uniqueness alone do not establish convergence. |
| P=[[0.5,0.5],[0,1]] | This reducible absorbing chain converges to [0,1] from every initial distribution. The irreducible/aperiodic theorem is sufficient, not a necessary criterion for every chain that converges. |
| P=I on two states | Every initial distribution remains unchanged. Convergence need not give a unique limit independent of the initial distribution. |
| A chain with positive return paths of lengths two and three | Their gcd is one. A self-loop is sufficient for aperiodicity in an irreducible chain but is not necessary. |
| A connected undirected bipartite graph, with at least one edge and a random walk that moves at every step | All returns have even length. Connectivity alone does not remove periodicity. |

Keep `StationaryDistribution` unchanged: it already warns that invariance does not guarantee
convergence. Keep `SequenceConvergence` numerical; apply it to each state-probability sequence
when componentwise convergence is studied. No generic vector-limit revision is needed.

## Curriculum mappings and acceptance cases

These are proposed resolutions of historical audit findings, not claims that the draft has
already passed a curriculum implementation audit.

| Requirement or task | Proposed coverage and boundary |
| --- | --- |
| Bavaria `BAV-V12-3-06` / `BAV-V-G2`: approximate absorption by repeated transitions and calculate it from equations | `MarkovStateDistribution` + `AbsorptionProbability` + `AbsorptionProbabilityEquations`; reuse `RowColumnProduct`, `SystemSolving`, `MatrixSystemRepresentation` and appropriate Abilities when evidenced. The C/A/B example checks finite approximation against the exact answer. |
| Explain why absorption eventually occurs with probability one | `AbsorbingMarkovChain` + `FiniteMarkovAbsorptionTheorem`. Require reachability from every state under the finite homogeneous model; the disconnected cycle is a counterexample to dropping that condition. |
| France `FR-EXP-M14`: random walk and asymptotic study | `FiniteMarkovConvergenceTheorem`, its hypothesis concepts, existing `StationaryDistribution`, and componentwise `SequenceConvergence`. The periodic two-state example rejects the false inference from stationarity alone. |
| France core invariant-distribution and finite-transition content | Existing `MarkovTransitionMatrix`, `MarkovStateDistribution` and `StationaryDistribution` remain sufficient. Do not add the convergence theorem merely because an invariant vector is calculated. |
| Read repeated matrix output from a spreadsheet | Existing `Spreadsheet` or `SoftwareTool`, plus the evidenced mathematics. Numerical observation alone does not establish infinite-time convergence or exact absorption. |

The [official Bavarian matrix module](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/mathematik/vertieft)
explicitly combines transition-based approximation and exact equation solving for absorption.
The [official French maths expertes programme, pages 10–11](https://eduscol.education.gouv.fr/sites/default/files/document/spe264annexe1158825pdf-84165.pdf#page=10)
includes invariant distributions in the main content and random walks/asymptotic study among
optional problems. The general theorem and supporting concepts are our chosen reusable treatment;
the French wording does not prescribe this exact theorem package. Curricular optionality does
not change the user's explicit inclusion of this topic in the ontology scope.

## Alternatives and boundaries

1. **Merge probability and equations.** This would reduce the batch to six Areas, but would
   collapse the eventual-event concept and the first-step calculation principle. Keeping them
   separate supports tasks about interpreting a supplied absorption probability without
   implying knowledge of its derivation.
2. **Omit the absorption theorem descriptor.** The chain definition would still identify the
   reachability condition. It would not independently name the probability-one guarantee;
   the separate result follows the treatment of sequence-convergence guarantees in the prior batch.
3. **Add a Markov-state classification family.** Absorbing states, communicating classes,
   transience and recurrence could support a larger university extension. For this batch,
   absorbing-state meaning is explicit in the chain definition and general class theory is
   unnecessary. Irreducibility and periodicity remain explicit because the convergence result
   uses them as independently interpretable hypotheses.

Expected absorption times, the fundamental matrix and visit counts, general hitting/stopping
times, recurrence theory, occupation-frequency theorems, convergence rates, infinite-state
chains and continuous-time chains are deferred. They are not needed to close these two audited
gaps. This batch makes no claim that these broader subjects are covered by the seven Areas.

## Implementation and adoption — 2026-10-22

The branch adds the seven Areas above to [the authored Areas](../../core-areas-math.ttl),
with their definitions, examples, six `partOf` edges, one `specializes` edge and seven `integrates`
assertions. Together these add **42 authored assertions**, bringing the ontology to
**1,441 descriptors and 7,668 authored assertions**.

The implementation changes no existing identifiers, definitions or outgoing relations.
Existing labels retain eligibility, including `FiniteMarkovChain`, whose new child is a
specialization. No automatic migration of existing annotations is needed. This branch does
not upgrade consumer packages or datasets.

The Area source uses the editor's actual parser and serializer. Entities are ordered by IRI;
relation names and their target IRIs are sorted alphabetically. In this batch, `integrates`
therefore precedes `partOf`; the definition and example remain ahead of the relations.

Verification passed on 2026-10-22 under [ONT-W1–W3](../change-review.md):

- The authored graph agrees exactly with the approved definitions, examples and relations.
  The source delta is 42 added assertions and none removed; all existing label eligibility
  is preserved, and the seven new Areas are eligible.
- The Area Turtle round-trips byte for byte through the editor's parser and serializer,
  including entity order, relation order and sorted targets. All 49 repository Markdown
  files pass documentation validation.
- Independent source review found no actionable issues with the implementation or its
  absorption, stationarity and convergence boundaries.
- The full `docker build . --output dist --progress plain` passed: TypeScript compilation,
  tests, source/documentation validation, npm package and browser checks; Python lint and
  strict typing, all 49 Python tests, and wheel, rebuilt sdist, optional-parser and
  typed-consumer verification.

These checks validate the implementation; curriculum-level acceptance remains separate.

## Draft verification — 2026-10-22

- Before source implementation, the seven proposed descriptors and seven progression assertions
  were assessed in memory together with the merged source. The proposed graph passed all source checks, with
  1,441 descriptors and 7,668 assertions. All existing eligibility is preserved and all
  seven proposed Areas are eligible.
- All 49 repository Markdown files passed documentation validation, including local links.
  The working diff passed whitespace checks.
- Independent mathematical and ontology/curriculum reviews checked the definitions, relation
  roles, theorem conditions, boundary equations, counterexamples and primary-source references.
  Direct calculations checked the displayed finite-step formulas, equation solutions and
  stationary/periodic examples; these finite checks are not proofs of the cited theorems.
- At the draft stage, authored ontology files remained byte-identical to merged `main`.
  No generated package or dataset was changed. The full build was reserved for source implementation.

These checks do not change the historical audit judgments or certify all advanced-school
probability coverage.
