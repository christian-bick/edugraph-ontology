# Justification Scopes

This guide explains the Scope families used to describe how a claim is supported or challenged.
The definitions and structural assertions are authored in
[core-scopes-math.ttl](../core-scopes-math.ttl). The annotation rule is
[ONT-E6](content-evidence.md#ont-e6--identify-the-observable-role-of-justification).

## Four independent aspects

`JustificationScope` is the organizational root. Each family below is `partOf` that root;
its specific members `specialize` the family.

| Family | Question | Members |
| --- | --- | --- |
| `ProofMethod` | How does an argument establish or refute its claim? | `DirectProof`, `ProofByConstruction`, `ProofByContraposition`, `ProofByContradiction`, `ProofByCases`, `ProofByInduction`, `DisproofByCounterexample` |
| `EvidenceBasis` | What supplies the evidence? | `ConstructedCaseEvidence`, `ObservedDataEvidence`, `SimulationEvidence`, `ComputedEvidence` |
| `EvidenceCoverage` | Which individual instances in the identified domain are examined? | `SelectedCaseEvidence`, `ExhaustiveCaseEvidence` |
| `ErrorControl` | What limits on error are established? | `DeterministicErrorBound`, `ProbabilisticErrorBound` |

A description need not use every family. Several methods or evidence bases may occur together;
these are not mutually exclusive choices or a universal progression of difficulty.
Specialization supports a broader family claim, but it does not cross the `partOf` edge to the
organizational root. See [ONT-S2](structure.md#ont-s2--specializes-preserves-the-broader-meaning).

## Construction, illustration, and counterexample

Consider two identical rectangles: one divided into rectangular halves, the other into triangular
halves. The mathematical configuration supplies `ConstructedCaseEvidence`.

- To illustrate equal shares, it need not constitute a proof of a general claim.
- To establish that equal shares with different shapes are possible, it supplies
  `ProofByConstruction`, provided the equal measures and different shapes are justified.
- To refute the claim that equal shares of identical wholes must always have the same shape,
  it supplies `DisproofByCounterexample`.

The conclusion and the example's role must be identifiable. A title saying "proof" is insufficient.
One valid instance can establish existence or refute a universal claim; it does not establish
an unrestricted universal claim merely by illustrating it.[^proofs]

## Evidence and coverage

Evidence basis concerns what the content presents as its grounds, not hidden facts about its
production. A table presented as recorded plant measurements can supply `ObservedDataEvidence`.
A table identified as outcomes of a model can supply `SimulationEvidence`. The appearance of
a table alone establishes neither source.

`ObservedMeasurement` instead concerns obtaining a value by reading a represented object or
instrument. Reading an already supplied table of recorded measurements need not involve that
action. A calculation can process observed or simulated data, so `ComputedEvidence` can coexist
with those bases.

Coverage is relative to an identified domain. Checking three integers from a larger domain supplies
`SelectedCaseEvidence`; checking every integer from 1 through 10 supplies
`ExhaustiveCaseEvidence` for that finite domain only. If the reference domain is unknown,
the number of displayed cases does not determine coverage.

A proof covering arbitrary odd and even integers is `ProofByCases`, not an enumeration of all
individual integers. Conversely, an enumeration is evidence, but its relevance and correctness
still determine whether it proves the claim. One selected counterexample can be conclusive;
more cases do not automatically mean stronger justification.

## Error guarantees

`DeterministicErrorBound` applies when an error limit is guaranteed under the stated assumptions.
`ProbabilisticErrorBound` applies when the probability of exceeding a specified error criterion
is bounded under model or sampling assumptions.

These contexts qualify an approximation, estimate, or decision. A rounded decimal alone supplies
neither guarantee. A probability value about an ordinary event is not automatically an error
bound. A confidence-interval coverage guarantee concerns repetitions of the sampling procedure,
not an automatic probability assignment to a fixed unknown parameter after seeing the data.[^confidence]

## Dimension boundaries

These Scopes describe the justification context. They do not replace the mathematical Area or the
Ability involved in interpreting, evaluating, completing, or constructing an argument.
Knowledge of factorization, differentiation, hypothesis testing, or proof methods themselves can
remain an Area when that is the subject being learned. Apply
[ONT-D2](descriptors.md#ont-d2--choose-the-dimension-by-meaning).

Mathematical induction is a deductive proof method. It is not the empirical generalization
described by `Ability.InductiveReasoning`. No automatic Ability claim follows merely from
declaring a proof-method Scope.

## References

These references clarify mathematical usage; the family organization is an EduGraph design choice.

[^proofs]: Alexander Brandt, [Proofs, Discrete Structures for Computing](https://www.csd.uwo.ca/~abrandt5/teaching/DiscreteStructures/Chapter1/proofs.html), especially the sections on counterexamples and existence proofs.
[^confidence]: NIST/SEMATECH, [What are confidence intervals?](https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm).
