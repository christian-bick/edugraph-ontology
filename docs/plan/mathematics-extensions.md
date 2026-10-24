# Mathematics extensions

Current source checked on 2026-10-24. This plan retains unresolved decisions and optional
continuations from the completed mathematics drafts. Implementation history is summarized in
[October mathematics history](../history/2026-10-mathematics.md). Curriculum verification belongs
in [curriculum follow-ups](curriculum-follow-ups.md); shared hierarchy work belongs in
[ontology consolidation](ontology-consolidation.md).

## Boundary decisions

- **Decimal representation.** `DecimalNumbers` describes real numbers in base-ten notation but
  specializes `RationalNumbers`. Decide whether to restrict its meaning to rational values or
  change its ancestry. Check the consequences for finite-place decimal Scopes and approximation
  claims; a displayed approximation does not change the represented value's number system.
- **Fraction representation.** `FractionNumbers` does not restrict its numerator and denominator
  to integers but specializes `RationalNumbers`. Align definition and ancestry, then review the
  `implies FractionNumbers` assertions from `FractionDividend`, `FractionDivisor`,
  `FractionExponent`, and `FractionQuotient`.
- **Remainder convention.** `Modulo` leaves negative-input behavior unspecified. Define that
  boundary before using negative examples, distinguishing the computational convention from
  the existing positive-divisor `EuclideanDivision` concept.
- **General functions and relations.** Decide whether arbitrary-set correspondence needs an
  eligible generic concept beyond the accepted numerical-correspondence coverage using
  `NumericFunction` and the reusable `FunctionSymbol` / `FunctionArgument` roles. Do not silently
  broaden `NumericFunction`. Consider separately whether arbitrary nonfunction relations need
  coverage following retirement of the former binary-relation concept.

Use [ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries),
[ONT-D6](../descriptors.md#ont-d6--preserve-identifier-meaning), and the
[structure audit](../structure.md#audit) when resolving these decisions.

## Optional knowledge extensions

These are candidates for explicit concepts or finer labels, not approved additions or a claim
that every corresponding task is unrepresentable. Existing composition should be checked before
drafting a family; each proposal needs a bounded definition and contrasting evidence.

- **Arithmetic and algebra:** square/cube power-sum identities, geometric mean and AM–GM,
  Vieta's formulas, the rational-root theorem, and Cardano's formula.
- **Functions and trigonometry:** separate vertical/horizontal/oblique asymptotes; inverse
  trigonometric functions and principal branches; reciprocal functions; finer angle-addition,
  double/half-angle and product-to-sum identities; extended sine/circumradius relationships;
  classifications of nonremovable discontinuities. Add distinctions only when independent
  annotation is useful.
- **Complex numbers:** the modulus triangle inequality and its equality condition; later
  complex differentiability, holomorphic functions, contour integration, residues, and analytic
  logarithm branches. Complex exponential form, roots of unity, De Moivre's identity, and
  conjugate-root structure are already authored.
- **Number theory:** sieve methods, primality witnesses/tests, pseudoprimes and Carmichael
  numbers, factorization algorithms; Euler/Wilson theorems, multiplicative order, primitive
  roots, residues and reciprocity; Pell equations, sums of two squares and Gaussian integers;
  inversion formulas and continued-fraction/best-approximation refinements. Fermat's little
  theorem and the coprime divisibility lemma are already authored.
- **Geometry:** orthocenter/altitude concurrency; weighted barycenters and associativity;
  coordinate and transformation construction techniques, or restricted-instrument methods;
  net edge/vertex identification and folding-validity criteria; general quadratic classification,
  degenerate/projective conics, optical/tangent theorems; broader rotational sweeps and spatial
  reflection. Instrument, object, construction method, and representation remain distinct.
- **Linear algebra:** abstract vector spaces, subspaces and dimension; matrix reduction, rank
  and transpose; linear-map kernel/image, rank-nullity and change of basis; general inner products,
  norms, Gram–Schmidt, least squares, spectral theory and factorizations. Generic matrix reduction
  cannot specialize `SystemElimination`. The existing finite-coordinate combination, span,
  independence, basis, projection, and cross-product concepts need no duplicates.
- **Calculus and analysis:** multivariable/vector calculus, including partial/directional
  derivatives, gradient/Jacobian/Hessian, multiple/line/surface integrals and Green/Gauss/Stokes;
  broader differential equations, integrability, ordered-field completeness and real analysis.
  An explicit turning-point concept would need to include nondifferentiable extrema rather than
  specialize `FunctionStationaryPoints`. Any extension of the finite `SequentialLimitCriterion`
  to infinite limits or approaches needs a separate theorem review.
- **Probability, statistics and graphs:** binomial–Poisson approximation, Lorenz curves,
  Bayesian inference beyond `BayesTheorem`, ANOVA, multiple-regression inference,
  bootstrap/nonparametric methods; Eulerian trails/circuits and their criterion, graph coloring,
  shortest paths, spanning trees and planarity; broader measure and stochastic-process theory.
- **Markov chains:** expected absorption times, fundamental matrices and visit counts,
  hitting/stopping times, communicating classes, recurrence, occupation frequencies and
  convergence rates; infinite-state and continuous-time chains. The finite absorption and
  convergence results are already authored.

## Context and scope choices

If concrete content needs the distinction, consider rectangular/polar complex-form Scopes,
a visual polar-coordinate Scope, density/CDF or distribution-specific display Scopes, and
notation knowledge for logical symbols. Apply
[ONT-D2](../descriptors.md#ont-d2--choose-the-dimension-by-meaning) and
[ONT-D5](../descriptors.md#ont-d5--distinguish-learning-about-notation-from-using-notation):
context and knowledge of its conventions are separate claims.

Choose the intended depth before proposing concepts for Hanoi, vector/scalar Leibniz functions,
the continuous Cauchy functional equation, Briggs/Brouncker algorithms, general random walks,
Mandelbrot/Julia experimentation, or the discrete Fourier transform. Mathematical error-correcting
coding theory still needs an explicit scope decision. These options are not committed work.

## Adoption verification

Verify which releases consumers actually use before treating historical adoption notes as
current status. Review retired identifiers and old expression/function bundles against their
evidence; mappings are not unconditional aliases. Check direct `Calculus` labels now that it is
an organizer, along with other changed ancestry and eligibility. Separate graphical context
from solution-set knowledge when reviewing former graphical-solution labels. Track actual
package and annotation updates in the owning repositories, following
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes)
and [version interpretation guidance](../annotations-and-models.md#interpreting-annotations-across-ontology-versions).
