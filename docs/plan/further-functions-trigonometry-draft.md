# Further functions and trigonometry — design and implementation record

Status: merged into `main` at `f0dffbf` through
[PR #72](https://github.com/christian-bick/edugraph-ontology/pull/72).
Implementation branch: `codex/functions-trigonometry` (merged); implemented and verified 2026-10-11.
Implementation baseline: `main` at `cf74a23`, after the advanced
complex-number extension was merged through [PR #71](https://github.com/christian-bick/edugraph-ontology/pull/71).
The proposal and alternatives below preserve the design rationale; the
[implementation and adoption record](#implementation-and-adoption--2026-10-11) identifies the
accepted seven-Area scope. Subtype additions and the other optional refinements remain deferred.
The next extension is [Linear algebra](linear-algebra-draft.md), a separate root field alongside
Algebra and Analysis, implemented for review on `codex/linear-algebra` and not yet merged.
This develops
[roadmap step 4](algebra-family-draft.md#4-further-function-properties-and-trigonometry--ccss).

## Recommendation

Add **six labelable Areas and one organizer**:

- FunctionAsymptotes and FunctionRemovableDiscontinuity extend the existing function properties.
- TrigonometricAngleAdditionIdentities supplies the sine, cosine, and tangent sum/difference
  identities within the established equivalence family.
- TriangleTrigonometricRelations organizes LawOfSines, LawOfCosines, and TriangleSineAreaFormula,
  alongside the existing trigonometric function and identity branches.

Five labelable concepts fill the targeted CCSS knowledge gaps. Removable discontinuity is an
additional recommendation for a reusable continuity/extension distinction; the rational-graph
requirements can also be covered compositionally without it. The organizer keeps the
trigonometric structure coherent and is not itself a content label.

Keep all existing definitions and parent edges. Reuse FunctionInversion, FunctionComposition,
FunctionDomain, OneToOneFunction, and the current symmetry and periodicity concepts. Do not
create a separate solving or differentiation family for every trigonometric function.

## Coverage boundary and research

The audit covers **14 advanced terminal standards**: 11 across Functions, plus three general-triangle
standards. The earlier roadmap named five; the other nine are reviewed explicitly below.
The sets are F-IF.C.7.d; F-BF.A.1.c, B.4.b–d, B.5; F-TF.A.3–4, B.6–7, C.9; and G-SRT.D.9–11.
F-LE has no additional `(+)` leaves.
([F-IF](https://www.thecorestandards.org/Math/Content/HSF/IF/),
[F-BF](https://www.thecorestandards.org/Math/Content/HSF/BF/),
[F-TF](https://www.thecorestandards.org/Math/Content/HSF/TF/),
[F-LE](https://www.thecorestandards.org/Math/Content/HSF/LE/),
[G-SRT](https://www.thecorestandards.org/Math/Content/HSG/SRT/))

This organization also fits the transition to university mathematics. OpenStax treats rational
graphs, inverse trigonometric functions, identities, and triangle applications separately.
Oxford's archived admissions material connects periodic equations and circular identities
with triangle laws and the sine-area relation. These support related but distinct branches;
their teaching order does not itself justify progression edges.
([OpenStax rational functions](https://openstax.org/books/precalculus-2e/pages/3-7-rational-functions),
[inverse functions](https://openstax.org/books/precalculus-2e/pages/6-3-inverse-trigonometric-functions),
[identities](https://openstax.org/books/precalculus-2e/pages/7-2-sum-and-difference-identities),
[Oxford trigonometry resource, 2025 archive](https://www.maths.ox.ac.uk/study-here/undergraduate-study/maths-admissions-test/mat-livestream/trigonometry))

This proposal adds no limit-calculation methods, derivative rules, integration methods,
linear algebra, or further complex-number concepts. Those remain the separately recorded stages.

## Proposed structure

`P` marks a proposed constituent (`partOf`); `S` marks a proposed specialization.
Unmarked nodes already exist; unrelated branches are omitted.

```text
Analysis
└── FunctionProperties
    ├── FunctionLimitingBehavior
    │   ├── FunctionEndBehavior                         existing specialization
    │   ├── FunctionLocalLimitBehavior                  existing specialization
    │   └── [S] FunctionAsymptotes                       new, eligible
    └── FunctionRegularity
        ├── FunctionContinuity                          existing constituent
        └── [P] FunctionRemovableDiscontinuity           new, eligible

Geometry
└── GeometricRelations
    └── TrigonometricRelations
        ├── TrigonometricFunction                       existing constituent
        │   └── Sine / Cosine / Tangent                  existing specializations
        ├── TrigonometricIdentities                     existing constituent
        │   ├── PythagoreanTrigonometricIdentity         existing specialization
        │   ├── ComplementaryAngleIdentities            existing specialization
        │   └── [S] TrigonometricAngleAdditionIdentities new, eligible
        └── [P] TriangleTrigonometricRelations           new organizer
            ├── [P] LawOfSines                          new, eligible
            ├── [P] LawOfCosines                         new, eligible
            └── [P] TriangleSineAreaFormula              new, eligible
```

The existing TrigonometricFunction specialization of NumericFunction and TrigonometricIdentities
specialization of AlgebraicEquivalence remain unchanged. The new angle identities inherit the
latter relationship without another authored parent.

The triangle laws belong in geometry because they relate sides, angles, and area under triangle
conditions. They are not unrestricted angle identities. Place them once in the triangle branch;
compose with AlgebraicEquivalence when rewriting a law. This follows the existing geometric
placement of PythagoreanTheorem. Do not place constituent laws under Triangle: that branch
already specializes Polygon. See
[ONT-S4](../structure.md#ont-s4--composition-may-lead-into-specialization) and
[ONT-S5](../structure.md#ont-s5--review-the-entire-affected-structure).

## Candidate definitions and examples

These definitions are proposed descriptor text. Examples remain separate from defining conditions.

| Candidate | Definition | Example |
| --- | --- | --- |
| FunctionAsymptotes | Straight lines describing a real function's limiting graph: vertical x = a where a one-sided limit is positive or negative infinity, or y = mx + b where f(x) - (mx + b) tends to zero as x tends to positive or negative infinity, with approaches through the stated domain. | f(x) = 2 + 1/(x - 3) has asymptotes x = 3 and y = 2; g(x) = x + 1/x has oblique asymptote y = x. |
| FunctionRemovableDiscontinuity | A missing or mismatched value at a finite input approached by other inputs in a real function's domain, where a finite limit exists and assigning that limit makes the function continuous there. | (x^2 - 4)/(x - 2), with x != 2, becomes continuous at 2 by assigning value 4; f(x) = x for x != 0 with f(0) = 1 becomes continuous at 0 by changing f(0) to 0. |
| TrigonometricAngleAdditionIdentities | The identities expressing sine, cosine, and tangent at a sum or difference of two real angles through values at the individual angles, using one angular unit and retaining every definedness restriction. | sin(75 degrees) = sin(45 degrees)cos(30 degrees) + cos(45 degrees)sin(30 degrees) = (sqrt(6) + sqrt(2))/4. |
| TriangleTrigonometricRelations | The trigonometric relationships linking side lengths, opposite or included angles, and area of nondegenerate Euclidean triangles. | A triangle with sides 3 and 4 enclosing 60 degrees has opposite side sqrt(13) and area 3sqrt(3). |
| LawOfSines | The equality a/sin(A) = b/sin(B) = c/sin(C) for positive side lengths a, b, c and their opposite interior angles A, B, C in a nondegenerate Euclidean triangle. | A = 30 degrees, a = 3, and B = 60 degrees give b = 3sqrt(3). |
| LawOfCosines | The relationship c^2 = a^2 + b^2 - 2ab cos(C) between two side lengths a and b, their included angle C, and the opposite side c in a nondegenerate Euclidean triangle. | Sides 3 and 4 enclosing 60 degrees give opposite side sqrt(13); enclosing 90 degrees gives opposite side 5. |
| TriangleSineAreaFormula | The relationship K = ab sin(C)/2 between the area K of a nondegenerate Euclidean triangle, two side lengths a and b, and their included angle C. | Sides 4 and 6 enclosing 30 degrees give area 6; enclosing 150 degrees also gives area 6. |

The asymptote and continuity distinctions follow the standard limiting relationships; triangle
conditions exclude degenerate configurations while including right triangles.
([OpenStax rational graphs](https://openstax.org/books/precalculus-2e/pages/3-7-rational-functions),
[continuity](https://openstax.org/books/calculus-volume-1/pages/2-4-continuity),
[sine law and area](https://openstax.org/books/precalculus-2e/pages/8-1-non-right-triangles-law-of-sines),
[cosine law](https://openstax.org/books/precalculus-2e/pages/8-2-non-right-triangles-law-of-cosines))

Propose one progression edge: LawOfCosines **expands** PythagoreanTheorem. It extends the
right-angle squared-side relationship to arbitrary interior angles; at 90 degrees the cosine
term vanishes. It is not a structural specialization, because the cosine law also applies
to triangles that are not right-angled. No teaching-order links are proposed.

## Distinctions and mathematical boundaries

### Asymptotes, holes, and continuous repair

FunctionLimitingBehavior already distinguishes finite limits, unbounded behavior, and missing
limits. FunctionAsymptotes adds the relationship to a particular limiting line. It covers
horizontal (m = 0), oblique (m != 0), and vertical cases without a rational-only descriptor.
Exponential, logarithmic, and trigonometric examples can reuse it.

A graph can cross a horizontal or oblique asymptote. For example, x/(x^2 + 1) crosses y = 0
at zero while approaching it at both ends. For a general piecewise function, a separately
assigned value at the input of a vertical asymptote does not remove its one-sided divergence.
Do not define asymptotes as lines the graph can never meet.

Preserve original denominator exclusions after cancellation. A common factor alone does not
identify a hole: (x - 1)/(x - 1)^2 still diverges at 1. In contrast, (x^2 - 4)/(x - 2) has
finite limit 4 at its excluded input 2. Its original function is continuous on its existing
domain; the missing point describes a possible continuous extension.

That extension/correction relationship motivates FunctionRemovableDiscontinuity. A finite
local limit also occurs at already-continuous points; a domain exclusion can instead hide an
infinite or oscillating limit. The new concept unifies an omitted value and an incorrectly
assigned value, supporting later continuity and extension questions. It does not duplicate
rational simplification or a procedure for computing limits.
([OpenStax continuity](https://openstax.org/books/calculus-volume-1/pages/2-4-continuity))

For a smaller first stage, omit this Area and compose FunctionDomain, FunctionLocalLimitBehavior,
FunctionContinuity, and the relevant reasoning Ability as evidenced. This still covers rational
graphs. A jump with unequal one-sided limits and unbounded behavior are counterexamples to
removability, not additional children proposed here.

### Angle identities and general-triangle relationships

The angle-addition concept covers these paired patterns, with u and v in the same unit:

| Function | Sum/difference form |
| --- | --- |
| Sine | sin(u +/- v) = sin(u)cos(v) +/- cos(u)sin(v) |
| Cosine | cos(u +/- v) = cos(u)cos(v) -/+ sin(u)sin(v) |
| Tangent | tan(u +/- v) = (tan(u) +/- tan(v))/(1 -/+ tan(u)tan(v)) |

For tangent, both individual tangent values and the resulting quotient must be defined.
A defined left side does not license an undefined right side. Preserve original restrictions
when rewriting or solving constraints.
([OpenStax angle identities](https://openstax.org/books/precalculus-2e/pages/7-2-sum-and-difference-identities))

Bundle the functions and two signs initially, following the existing BinomialSquareIdentities
approach. Compose with Sine, Cosine, or Tangent when that knowledge is evidenced. Equal-angle
substitution gives double-angle relationships; it does not initially require another family.

Triangle sides are positive, opposite-angle assignments matter, and a claimed triangle must
be nondegenerate. Side-side-angle data under the sine law may yield zero, one, or two triangles.
Check the supplementary-angle candidate and the remaining angle; one calculator inverse value
does not settle the case. Valid side-angle-side and side-side-side data lack that ambiguity
under the cosine law. The area derivation must also cover obtuse triangles, where an altitude
can fall outside the opposite side.
([OpenStax sine law](https://openstax.org/books/precalculus-2e/pages/8-1-non-right-triangles-law-of-sines),
[cosine law](https://openstax.org/books/precalculus-2e/pages/8-2-non-right-triangles-law-of-cosines))

### Inverse functions and complete trigonometric solutions

FunctionInversion already covers constructing an inverse by restricting the original domain;
FunctionComposition covers compatibility of successive inputs and outputs. For inverse
verification, check both compositions on their respective domains.

Strict increase or decrease on an interval gives a one-to-one restriction. Nonstrict monotonicity
can include flat portions and does not guarantee invertibility. Existing FunctionMonotonicity
and OneToOneFunction preserve this distinction.

Conventional principal branches in radians have these domains and output ranges:

| Inverse | Domain | Range |
| --- | --- | --- |
| arcsin | [-1, 1] | [-pi/2, pi/2] |
| arccos | [-1, 1] | [0, pi] |
| arctan | All real numbers | (-pi/2, pi/2) |

Thus arcsin(sin(5pi/6)) = pi/6, and a principal inverse value is not a full periodic solution
set. Recover other branches and periods, then enforce the model's interval. Inverse notation
is also distinct from the reciprocal of a function value. When technology is required, retain
observable evidence of its use and check that the calculator's angular mode matches the stated unit.
([OpenStax inverse trigonometric functions](https://openstax.org/books/precalculus-2e/pages/6-3-inverse-trigonometric-functions))

No new inverse-trig Area is necessary for current CCSS operations. A future
InverseTrigonometricFunction could distinguish the conventional principal functions, if needed.
It would specialize NumericFunction, not the unchanged TrigonometricFunction: the latter
describes direct circular functions from angle measures to values, not their inverses.
The inverse process and the nature of a named inverse function remain different concepts.

## Mapping all 14 advanced leaves

`New` supplies reusable knowledge absent from the current model; `Reuse` is compositional coverage.
Abilities and observable Scopes depend on the competency; these are not automatic label bundles.

| CCSS leaf | Required distinction | Coverage |
| --- | --- | --- |
| F-IF.C.7.d | Rational graphs, zeros, asymptotes, end behavior | **New:** FunctionAsymptotes. Reuse RationalDependence, FunctionZeros, FunctionEndBehavior, FunctionDomain, AlgebraicFactorization, PolynomialDivision, and relevant plotting. Removable discontinuity is an optional refinement. |
| F-BF.A.1.c | Composition in a model | **Reuse:** FunctionComposition, AlgebraicModeling, FunctionDomain. |
| F-BF.B.4.b | Inverse verification by composition | **Reuse:** FunctionInversion, FunctionComposition, AlgebraicEquivalence; both domain-sensitive identities. |
| F-BF.B.4.c | Inverse values from a graph or table | **Reuse:** FunctionInversion with the evidenced representation and interpretation. |
| F-BF.B.4.d | Invertibility through restriction | **Reuse:** FunctionInversion, FunctionDomain, OneToOneFunction. |
| F-BF.B.5 | Exponent/logarithm inverse relationships | **Reuse:** Logarithm, Exponentiation, FunctionInversion, LogarithmicFunction and relevant solving. |
| F-TF.A.3 | Geometric special-angle values and circular angle reduction | **Reuse:** Sine, Cosine, Tangent, PythagoreanTheorem, RightTriangle, IsoscelesTriangle, EquilateralTriangle, circular/symmetry concepts as evidenced. Retain the requested geometric reasoning. |
| F-TF.A.4 | Circular explanations of parity and periodicity | **Reuse:** EvenFunctionSymmetry, OddFunctionSymmetry, FunctionPeriodicity, Sine/Cosine/Tangent, Circle and coordinate concepts. |
| F-TF.B.6 | Inversion on a monotone branch | **Reuse:** FunctionInversion, FunctionMonotonicity, OneToOneFunction, FunctionDomain and the direct trigonometric function. |
| F-TF.B.7 | Trigonometric model solutions using inverses and technology | **Reuse:** FunctionInversion, EquationSolving, SolutionSet, FunctionPeriodicity, AlgebraicModeling, NumericApproximation and contextual interpretation. Preserve evidence of technology-based evaluation and the correct angular unit. |
| F-TF.C.9 | Proving and using sum/difference identities | **New:** TrigonometricAngleAdditionIdentities; relevant function and reasoning Ability. |
| G-SRT.D.9 | Deriving sine-area formula by an altitude | **New:** TriangleSineAreaFormula; reuse AreaCalculation, Sine, geometric knowledge, and ConceptDerivation. |
| G-SRT.D.10 | Proving and using sine/cosine laws | **New:** LawOfSines, LawOfCosines; compose with the evidenced proof or application Ability. |
| G-SRT.D.11 | General-triangle measurements | **New:** the same laws; reuse AngleCalculation, LengthCalculation, Triangle and contextual knowledge. |

Requirement summaries paraphrase the official
[F-IF](https://www.thecorestandards.org/Math/Content/HSF/IF/),
[F-BF](https://www.thecorestandards.org/Math/Content/HSF/BF/),
[F-TF](https://www.thecorestandards.org/Math/Content/HSF/TF/), and
[G-SRT](https://www.thecorestandards.org/Math/Content/HSG/SRT/) leaves.
The [core audit](core-ccss-coverage-audit.md)'s 114 historical mappings remain unchanged.
This is knowledge-coverage planning, not certification that all dataset targets exist.

## Review probes

| Probe | Expected distinction | Nearby counterexample |
| --- | --- | --- |
| Compare (x^2 - 4)/(x - 2) and 1/(x - 2) near 2 | Finite repairable hole versus vertical asymptote | Both exclude 2; exclusion alone cannot decide. |
| Compare x + 1/x with x + 1 | The first approaches y = x; the second does not | Similar growth is insufficient: the difference must tend to zero. |
| Repair f(x) = x for x != 0, f(0) = 1 | Removability also concerns incorrect values | An already-continuous f(x) = x needs no repair. |
| Explain sin(75 degrees) exactly | Angle-addition knowledge | A calculator result alone does not evidence the identity or its proof. |
| Solve sin(t) = 1/2 for 0 <= t < 2pi | Both pi/6 and 5pi/6 | Returning only arcsin(1/2) misses one solution. |
| Given A = 30 degrees, a = 5, b = 8 | Two triangles: sin(B) = 0.8 and both angle sums are valid | Raising b to 12 gives sin(B) = 1.2 and no triangle. |
| Derive K = ab sin(C)/2 when C is obtuse | Exterior altitude and included-angle meaning | Assuming every altitude lies inside the triangle is incomplete. |

## Alternatives and later refinements

| Option | Consequence |
| --- | --- |
| **Recommended: seven Areas, six eligible** | Five essential knowledge distinctions, a removable-discontinuity concept, and one triangle organizer. No existing descriptor changes. |
| **Minimum: five Areas** | Omit FunctionRemovableDiscontinuity and the organizer; put the three triangle relations directly under TrigonometricRelations. Covers the identified CCSS gaps with less specific continuity labeling. |
| **More granular asymptotes** | FunctionVerticalAsymptotes, FunctionHorizontalAsymptotes, and FunctionObliqueAsymptotes could specialize FunctionAsymptotes. Add only when independent labels are useful. |
| **More granular identities** | Add sine/cosine/tangent angle-addition specializations if composition is too coarse. Do not make TrigonometricIdentities a constituent organizer. |
| **Named inverse functions** | A NumericFunction specialization family could identify conventional inverse trig functions and principal-branch knowledge. Existing inversion tasks do not require it. |

No new Scope is required initially. Reuse DegreeScale/RadianScale, coordinate and table
representations, and existing justification Scopes. A drawn asymptote or displayed formula
alone does not establish knowledge of its limiting relationship or identity.

Preserve later work on double/half-angle and product-to-sum identities, named reciprocal
functions, extended sine/circumradius relationships, and classification of nonremovable
discontinuities if competencies need those distinctions. These remain separate from calculus
methods and from deferred complex-number and linear-algebra work.

## Adoption and verification

The accepted implementation includes the seven candidates with their definitions, examples,
structural edges, and the cosine-law progression edge. No existing descriptor is renamed,
redefined, reparented, or retired; no downstream identifier migration is required.
New labels still require evidence-based competency annotations after package adoption.

The proposal's in-memory graph simulation at `cf74a23` passed the available ontology assessments.
The simulated graph had 981 descriptors and 5,243 assertions, compared with 974 and 5,207 at that baseline.
Six additions are eligible; TriangleTrigonometricRelations is an organizer. Existing labeling
eligibility and structural/specialization ancestry were unchanged in that simulation. At the
proposal stage, no Turtle file was edited.
This verifies proposed structure, not implemented source or dataset coverage.

Before publication, review the probes above, confirm domain and triangle conditions, and run
the normal ontology/documentation and Docker/client checks. The accepted seven-Area arrangement
includes the organizer and removable-discontinuity concept. The five-Area alternative remains
part of the design comparison; finer asymptote, identity, and inverse-function additions remain
deferred.

## Implementation and adoption — 2026-10-11

Roadmap step 4 was implemented on `codex/functions-trigonometry`, based on `main`
at `cf74a23`, and merged at `f0dffbf` through
[PR #72](https://github.com/christian-bick/edugraph-ontology/pull/72).
It uses the approved definitions and examples above, including the requirement
that the input in FunctionRemovableDiscontinuity is approached by other domain inputs.

| New Area | Structural relation | Parent | Labeling role |
| --- | --- | --- | --- |
| FunctionAsymptotes | specializes | FunctionLimitingBehavior | Eligible |
| FunctionRemovableDiscontinuity | partOf | FunctionRegularity | Eligible |
| TrigonometricAngleAdditionIdentities | specializes | TrigonometricIdentities | Eligible |
| TriangleTrigonometricRelations | partOf | TrigonometricRelations | Organizer |
| LawOfSines | partOf | TriangleTrigonometricRelations | Eligible |
| LawOfCosines | partOf | TriangleTrigonometricRelations | Eligible |
| TriangleSineAreaFormula | partOf | TriangleTrigonometricRelations | Eligible |

The scope is **seven new Areas: six eligible concepts and the TriangleTrigonometricRelations
organizer**. It adds **five partOf edges, two specializes edges, and one progression edge**:
LawOfCosines expands PythagoreanTheorem. No existing descriptor identifier, definition, example,
or authored relation is modified or retired. Existing labeling eligibility and structural or
specialization ancestry remain unchanged.

No new Scope or subtype family is included. More granular asymptotes and angle identities,
named inverse or reciprocal functions, further identities, circumradius relationships, and
nonremovable-discontinuity classifications remain optional later refinements. Calculus methods,
linear algebra, and the complex-number stage 3B continuation remain separate work.

Consumers need no identifier migration. After adopting an ontology release containing the
additions, apply the six eligible concepts only where the content supports their mathematical
meaning; TriangleTrigonometricRelations is not a direct annotation. Existing compositions for
inversion, function composition, domain restriction, symmetry, and periodicity remain available.
No dataset or competency-target implementation is included in this source change.

Implementation verification passed on 2026-10-11:

- Source comparison against `cf74a23` confirms exactly seven new Areas and 36 added assertions:
  974 to 981 descriptors and 5,207 to 5,243 assertions, with no removed or changed old assertions.
- All seven definitions and examples match the approved proposal. Existing labeling eligibility
  and structural/specialization ancestry are unchanged; the six concepts are eligible and the
  new triangle organizer is ineligible.
- Baseline and current ontology assessments pass without findings. Semantic review covered
  limiting behavior, continuous repair, identity restrictions, triangle conditions, numerical
  examples, and the cosine-law progression.
- `docker build . --output dist --progress=plain` passes: RDF/client generation, TypeScript
  tests, ontology and documentation checks, package checks, Python lint and typing checks,
  49 Python tests, and wheel/sdist consumer verification.

These checks validate the authored extension and generated clients; downstream dataset
adoption and competency evidence review remain separate work.

Review the merged source on Main in the ontology editor: FunctionAsymptotes and
FunctionRemovableDiscontinuity appear within Analysis, and the angle identities and triangle
relations appear within Geometry / GeometricRelations / TrigonometricRelations. The next
[LinearAlgebra extension](linear-algebra-draft.md) is implemented separately for review on
`codex/linear-algebra`; its root field and descendants were not part of this functions-and-trigonometry merge.
