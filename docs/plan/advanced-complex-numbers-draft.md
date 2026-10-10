# Advanced complex numbers — design and implementation record

Status: stage 3A implemented for review on `codex/advanced-complex-numbers`, 2026-10-11.
Baseline: ontology `main` at `702714b`, after UnitDimensionality and PythagoreanTheorem were
merged. The proposal and alternatives below preserve the design rationale; the
[implementation and adoption record](#implementation-and-adoption--2026-10-11) identifies the
accepted scope. Stage 3B and optional Scopes remain deferred. This develops
[extension roadmap step 3](algebra-family-draft.md#3-advanced-complex-numbers-and-polynomial-structure--ccss).

## Recommendation

Add **seven Areas** to the existing families: three number-system concepts, two geometric
concepts, one notation concept, and the Fundamental Theorem of Algebra. Retain
ComplexNumberStructure as the foundational concept and reuse ComplexNumbers as the numerical
Scope. Existing arithmetic, identities, factorization, and solving concepts already support
complex contexts; they need no parallel complex-only copies.

This is the proposed school extension, **stage 3A**. A separately identified **stage 3B**
preserves the university-entry continuation: De Moivre's identity, complete root sets,
roots of unity, conjugate-root pairing, and exponential representation. Neither stage needs
complex analysis. The recommended arrangement changes no existing definitions or parent edges.

## Research and subject boundaries

An introductory university course provides a useful organizing sequence: arithmetic and the
complex plane; modulus, argument, and transformations; powers and roots; then polynomial
structure. Oxford's short introductory course includes these topics before students undertake
a full complex-analysis course. Its syllabus also includes exponential polar form and the
statement of the Fundamental Theorem of Algebra. This supports keeping the present extension
within number systems, algebra, formal notation, and geometry.
([Oxford course synopsis](https://courses.maths.ox.ac.uk/course/view.php?id=4502))

The CCSS boundary is narrower: HSN-CN.A.3, B.4–6, and C.8–9 are the six advanced `(+)`
requirements. The foundational A.1–2 and C.7 are already covered by the merged ontology.
The mapping below distinguishes required knowledge from the optional university continuation.
([Official complex-number standards](https://www.thecorestandards.org/Math/Content/HSN/CN/))

The distribution across ontology families is our modeling recommendation, not a classification
prescribed by these curricula. In particular, the reusable correspondence between complex
multiplication and rotation/scaling deserves its own concept: ordinary Multiplication,
Rotation, and ComplexNumbers occurring together do not express that relationship.

## Proposed structure

`P` denotes a proposed constituent (`partOf`); `S` denotes a proposed specialization.
Unmarked nodes already exist. The display omits unrelated siblings.

```text
NumberTheory
└── NumberSystems
    ├── ComplexNumberStructure                         existing leaf
    ├── [P] ComplexConjugation                         new
    ├── [P] ComplexModulus                             new
    └── [P] ComplexArgument                            new

Geometry
└── GeometricVisualization
    ├── CartesianPlane                                existing organizer
    │   └── CoordinateAxes                            existing constituent
    ├── [P] ComplexPlane                               new
    └── [P] ComplexArithmeticGeometry                  new

FormalMathematics
└── NumberNotation
    └── [S] ComplexPolarNotation                       new

Algebra
└── AlgebraicTheorems
    └── [P] FundamentalTheoremOfAlgebra                 new
```

ComplexPlane is a sibling of CartesianPlane because its subject is the correspondence between
numbers and coordinates. Making it a specialization of CartesianPlane would also mix
specialization with the latter's existing constituent children. Conversely, NumberNotation
already has specialization children, so ComplexPolarNotation follows that convention.
These placements respect [ONT-S5](../structure.md#ont-s5--review-the-entire-affected-structure).

Do not put the additions beneath ComplexNumberStructure as constituents: that would turn an
existing labelable foundation into an organizer. All seven additions are intended to be
eligible Areas under [ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).

## Proposed definitions and examples

The definitions below are the proposed descriptor text. Placement and review notes remain
outside definitions; examples would become example comments.

| Proposed Area | Concise definition | Example |
| --- | --- | --- |
| ComplexConjugation | The operation replacing a complex number a + bi by a - bi, for real a and b, and its relationships with complex arithmetic. | The conjugate of 4 - 3i is 4 + 3i; (4 - 3i)(4 + 3i) = 25. |
| ComplexModulus | The nonnegative real magnitude of a complex number a + bi, given by sqrt(a^2 + b^2) and equal to its distance from zero in the complex plane. | The modulus of 5 - 12i is 13; the modulus of zero is zero. |
| ComplexArgument | The directed angle from the positive real axis to a nonzero complex number, determined modulo a full turn. A principal argument selects one value using a stated interval convention. | The arguments of -i are -pi/2 + 2k*pi for integer k; its principal argument in (-pi, pi] is -pi/2. |
| ComplexPlane | The correspondence between a complex number a + bi and the point (a, b) in a plane with perpendicular real and imaginary axes. | -2 + 5i corresponds to (-2, 5); 3 corresponds to (3, 0). |
| ComplexPolarNotation | The conventions for representing a complex number as r(cos(theta) + i sin(theta)), where r is its modulus and theta is an argument when r is positive. When r is zero, every angle represents zero without defining its argument. | 1 - i = sqrt(2)(cos(-pi/4) + i sin(-pi/4)) = sqrt(2)(cos(7pi/4) + i sin(7pi/4)). |
| ComplexArithmeticGeometry | The geometric interpretation of complex arithmetic as translations for addition and subtraction, rotation and scaling about zero for multiplication and division by nonzero numbers, and reflection in the real axis for conjugation. Multiplication by zero sends every point to zero. | Multiplication by 2i doubles distances from zero and rotates by a quarter-turn; conjugation reflects 2 + i to 2 - i. |
| FundamentalTheoremOfAlgebra | The guarantee that every nonconstant polynomial in one variable with complex coefficients has a complex root and factors completely into linear factors, with the number of roots counted with multiplicity equal to its degree. | (z - 2)^2(z + i) has three roots counting multiplicity and two distinct roots; z^4 + 1 has four complex roots counting multiplicity. |

These meanings follow the standard algebraic and geometric account; the notation label makes
the formal-convention aspect explicit. Useful mathematical references are the
[Georgia Tech complex-number appendix](https://textbooks.math.gatech.edu/ila/complex-numbers.html),
[OpenStax polar-form chapter](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-5-polar-form-of-complex-numbers),
and [MIT's argument conventions, section 11.7](https://math.mit.edu/~poonen/notes02.pdf).

Two progression links are proposed separately from the structural tree:

| Source | Relation | Target | Meaning |
| --- | --- | --- | --- |
| ComplexModulus | expands | AbsoluteNumberMagnitude | Extends distance-from-zero magnitude from rational numbers on a line to complex numbers in a plane. |
| ComplexPlane | translates | ComplexNumberStructure | Gives the existing a + bi number structure a coordinate interpretation. |

Neither link automatically adds the target as an annotation to every task involving the source.
Further dependencies are discussed as competency compositions rather than asserted as teaching
prerequisites; see [ONT-R3](../relations.md#ont-r3--state-the-conceptual-progression-precisely).

## Reuse, evidence, and boundaries

| Distinction | Proposed treatment |
| --- | --- |
| Knowing complex-number structure versus working over complex numbers | Retain the existing Area ComplexNumberStructure and Scope ComplexNumbers. An arithmetic task can have complex context without independently assessing the construction of the number system. |
| Rectangular form | Existing ComplexNumberStructure explicitly covers a + bi and real/imaginary parts. Add ComplexPlane when the number-to-point correspondence is the knowledge being used. No duplicate rectangular-notation Area is proposed. |
| Polar notation versus occurrence | Use ComplexPolarNotation for interpreting, constructing, or relating the representation to its value. A formula merely appearing in polar form does not by itself establish that knowledge. Conversion can compose it with ComplexModulus, ComplexArgument, and AlgebraicEquivalence as evidenced. |
| Complex conjugation versus geometric reflection | Conjugation is independently meaningful in symbolic arithmetic. ComplexArithmeticGeometry identifies why it acts as a reflection; Reflection supplies generic geometric knowledge when that is also demonstrated. |
| Magnitude concepts | AbsoluteNumberMagnitude explicitly concerns rational numbers; AbsoluteValueFunction explicitly concerns real functions. Preserve both definitions. ComplexModulus extends the former and does not specialize the latter. Modulus here does not mean integer modulo. |
| Geometric arithmetic versus generic operations | Reuse Addition, Subtraction, Multiplication, Division, Translation, Rotation, and Reflection. Add ComplexArithmeticGeometry when their complex-number/geometric correspondence matters. Existing Dilation requires changed size: multiplication by i alone does not demonstrate it. |
| Distance and midpoint | Compose ComplexPlane and ComplexModulus with CoordinateDistance; compose ComplexPlane with MidpointCalculation. The reusable relationships are distance = modulus of the difference and midpoint = the average. No complex-only copies are needed. |
| Polynomial rewriting and solving | Reuse DifferenceOfSquaresIdentity, BinomialTheorem, AlgebraicFactorization, PolynomialFactorTheorem, QuadraticFormula, and the relevant solving concepts with ComplexNumbers. FTA contributes a general existence/completeness guarantee, rather than another rewriting procedure. |
| Identities involving conjugates | Relationships such as z times its conjugate equaling its squared modulus can initially compose ComplexConjugation, ComplexModulus, and AlgebraicEquivalence. A later named identity should specialize AlgebraicEquivalence if a stable reusable distinction warrants it. |

Keep these mathematical boundaries explicit in implementation and competency examples:

- Zero has modulus zero and no argument. Writing a polar expression with radius zero does
  not assign it a direction. For nonzero numbers, arguments are equivalent modulo a full turn;
  a principal-value convention does not remove that underlying nonuniqueness.
- Conversion requires the correct quadrant, including points on axes. The ratio b/a alone
  cannot determine an argument, and it is unavailable when a is zero. Rectangular-to-polar
  equivalence uses a = r cos(theta) and b = r sin(theta).
- Division requires a nonzero divisor. Multiplication by a fixed nonzero number scales by
  its modulus and rotates by an argument of that number; multiplication by zero is a collapse.
  The formulas need no ordering of complex numbers.
- FTA excludes constant polynomials, including the zero polynomial. It concerns one variable
  and complex coefficients, counts multiplicity, and does not supply a formula for finding
  every root. Complete factorization includes the original leading coefficient.
- Showing the quadratic case does not prove the general FTA. For arbitrary complex quadratic
  coefficients, establish that the discriminant has a complex square root, then use
  QuadraticFormula. A zero discriminant gives a repeated root. Restricting all examples to
  real coefficients would cover a narrower claim.

The zero/angle boundary is explicit in [MIT section 11.7](https://math.mit.edu/~poonen/notes02.pdf);
the polynomial distinction is supported by the
[Georgia Tech appendix](https://textbooks.math.gatech.edu/ila/complex-numbers.html).

## CCSS coverage and contrastive examples

These are proposed knowledge mappings, with an appropriate Ability and observable Scopes
added per competency. They are not automatic label bundles or a dataset-implementation claim.
Requirement summaries paraphrase the
[six official HSN-CN (+) leaves](https://www.thecorestandards.org/Math/Content/HSN/CN/).

| Standard | Requirement | Candidate coverage | Review example and nearby boundary |
| --- | --- | --- | --- |
| HSN-CN.A.3 | Conjugation, modulus, and quotients | ComplexConjugation, ComplexModulus; existing Division and AlgebraicEquivalence | 1/(2 + i) = (2 - i)/5 via the conjugate. Merely multiplying two unrelated complex numbers does not establish conjugation. |
| HSN-CN.B.4 | Equivalent rectangular and polar representations on the plane | ComplexPlane, ComplexPolarNotation, ComplexModulus, ComplexArgument; existing plotting and trigonometry | Represent -2i by (0, -2) and radius 2 with angle -pi/2; explain the same-value correspondence. Include positive/negative real numbers and zero. Plotting an ordinary coordinate pair alone does not establish complex-number meaning. |
| HSN-CN.B.5 | Geometric arithmetic and its computational use | ComplexArithmeticGeometry plus the relevant generic operations/transformations | Multiplication by 2i gives quarter-turn rotation and scale factor 2; repeated multiplication gives (2i)^3 = -8i. An expansion using i^2 = -1 alone does not establish the geometric explanation. |
| HSN-CN.B.6 | Distance and midpoint via complex arithmetic | ComplexPlane, ComplexModulus, CoordinateDistance, MidpointCalculation as evidenced | For 1 + 2i and 4 + 6i, distance is 5 and midpoint is 5/2 + 4i. Finding only the distance does not evidence midpoint knowledge. |
| HSN-CN.C.8 | Polynomial identities over complex numbers | Existing DifferenceOfSquaresIdentity, AlgebraicFactorization, BinomialTheorem as applicable; ComplexNumbers | z^2 + 9 = (z + 3i)(z - 3i). The real factor domain has a different factorization boundary; the complex context matters. |
| HSN-CN.C.9 | FTA and its quadratic case | FundamentalTheoremOfAlgebra; existing QuadraticFormula, Root, PolynomialFactorTheorem, and proof/derivation descriptors as evidenced | Establish a complex square root of any discriminant before applying the quadratic formula; distinguish a repeated root from two distinct roots. A single solved quadratic does not establish the general quadratic case. |

The core A.1–2/C.7 mappings remain unchanged: ComplexNumberStructure, generic arithmetic and
laws, and quadratic solving over ComplexNumbers. Stage 3A addresses the identified knowledge
gaps for all six advanced leaves; final competency authoring must still check the actual evidence.
The adjacent A-APR.D.7 rational-expression audit remains separately tracked in the roadmap.

## Scopes

Start with existing ComplexNumbers, DegreeScale, RadianScale, and the applicable visual
representation Scopes. CartesianCoordinateSystem fits diagrams using real/imaginary axes;
it does not become a claim that polar symbolism itself is Cartesian notation.

No new Scope is required for the proposed knowledge mappings. Two optional context refinements
remain available if actual tasks need to distinguish presentation independently of notation
knowledge:

| Deferred candidate | Possible placement | Boundary |
| --- | --- | --- |
| RectangularComplexForm and PolarComplexForm | Specializations of NumberRepresentation | The displayed complex-number form, independently of whether its conventions are being assessed. These are contextual counterparts, not replacements for the Areas. |
| PolarCoordinateSystem | Specialization of VisualGeometry | Positions shown by radius and angle in a diagram. This would also serve non-complex geometry; symbolic polar form alone is outside its visual boundary. |

Do not silently use the new notation Area as a Scope. Context-only polar distinctions remain
unrepresented until an explicit Scope is adopted; that is a recorded granularity choice.

## Other reasonable organizations

### Cohesive complex-number subfamily

Introduce a ComplexNumberSystem organizer beneath NumberSystems, containing the existing
ComplexNumberStructure plus ComplexConjugation, ComplexModulus, and ComplexArgument.
Keep the notation, geometry, and theorem placements shown above.

This gives complex-number knowledge a visible home and leaves the foundational descriptor
eligible. It adds one organizer and changes the existing foundational parent edge and ancestry.
It is a good alternative if more number-system-specific properties are imminent. For the
present seven additions, the distributed arrangement avoids that migration and is the recommendation.

### Smaller representation bundle

Replace the three proposed Areas ComplexPlane, ComplexPolarNotation, and ComplexArithmeticGeometry
with one broad ComplexPlaneRepresentation under GeometricVisualization. Together with the three
number concepts and FTA, this would mean five additions.

It is workable but makes coordinate correspondence, notation, and operation geometry harder
to distinguish. It also puts a purely symbolic polar-notation competency in a broad geometric
concept. The seven-Area design better preserves the formalization/knowledge separation agreed
in the algebra discussion. Neither alternative should duplicate a descriptor across structural
parents merely to place it in a complete complex-number tree.

## Stage 3B — preserved university-entry continuation

These candidates extend the subject beyond the explicit CCSS requirements. They are not part
of the seven-Area implementation recommendation. Oxford includes De Moivre, roots of unity,
and exponential form in its introductory syllabus; OpenStax also develops powers and full root
sets from polar representation.
([Oxford](https://courses.maths.ox.ac.uk/course/view.php?id=4502),
[OpenStax](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-5-polar-form-of-complex-numbers))

| Candidate | Proposed direction | Distinction worth preserving |
| --- | --- | --- |
| DeMoivreIdentity | Specialization of AlgebraicEquivalence | The reusable power identity for r(cos(theta) + i sin(theta)). Begin with positive integer powers; negative powers require a nonzero base. Particular powers in B.5 can already use repeated multiplication and its geometry. |
| ComplexRootStructure | Constituent of NumberSystems, if separately adopted | The complete set of n-th roots of a nonzero complex number: n equally spaced points on a circle, for positive integer n. Root already covers finding a root under a convention; EquationSolving and SolutionSet cover solving for all of them. Add this Area only for the reusable root-set structure. |
| RootsOfUnity | Initially composition of root-set structure with the equation z^n = 1 | Separate it when the multiplicative/cyclic structure is itself knowledge being developed, rather than making a new concept solely for the fixed right-hand side. |
| ComplexConjugateRootTheorem | Constituent of AlgebraicTheorems | Nonreal roots of a nonzero real-coefficient polynomial occur in conjugate pairs with equal multiplicity. This is independent of FTA and fails for general complex coefficients, for example z - i. |
| EulerFormula and exponential polar notation | Equality under AlgebraicEquivalence; notation assessed under the formal family | Establish the meaning of the complex exponential before using r exp(i theta). Existing real exponential concepts do not silently provide its complex extension. Polar work in stage 3A needs no exponential form. |
| Complex loci and modulus inequalities | Later geometry/theorem review | Circles, lines, and distance regions can initially reuse geometric relations and modulus. A named triangle inequality would belong with reusable mathematical relationships when explicitly modeled. |

The root-pair condition follows from conjugation preserving real polynomial coefficients;
it is not an additional consequence to infer merely from FTA.
([Georgia Tech](https://textbooks.math.gatech.edu/ila/complex-numbers.html))

For root sets, zero has one distinct n-th root, zero, with multiplicity n in the equation
z^n = 0. A principal root convention and the entire solution set are different subjects.
Complex differentiability, holomorphic functions, contour integration, residues, and analytic
logarithm branches belong in a later complex-analysis design. Linear-algebra uses of complex
numbers can build on this proposal without moving their eigenvalue or matrix concepts here.

## Adoption and verification plan

The following plan records the proposed checks and adoption boundaries. Stage 3A now follows
the accepted seven-Area arrangement, as recorded in the implementation section below.

For stage 3A, author the seven Areas with their definitions, examples, structural edges,
and the two proposed progression links. Preserve all existing identifiers, definitions,
examples, and parent edges. No aliases or retirement migration are needed.

Before preview publication, check both the descriptor graph and representative tasks:

1. Verify new identifiers, structural child roles, progression acyclicity, and unchanged
   eligibility/ancestry for existing descriptors.
2. Review the contrastive knowledge boundaries above, particularly notation versus
   mere context and geometric explanation versus symbolic computation.
3. Verify zero, axis/quadrant, nonzero-divisor, root-multiplicity, and coefficient-domain cases.
4. Run ontology/documentation validation and the normal build/client checks after implementation.
   Update generated consumers only through the regular release/adoption workflow.

The accepted decisions are the seven-Area granularity and distributed placement, without a
ComplexNumberSystem organizer or any stage 3B additions. The alternatives above remain available
for later review; context Scopes and stage 3B are explicit follow-ups.

### Proposal verification — 2026-10-11

An in-memory graph simulation passed all available ontology assessments with no findings:
the seven Areas and two progression links would increase the source graph from 967 descriptors
and 5,170 assertions to 974 descriptors and 5,207 assertions. All proposed identifiers are new
and eligible; no existing eligibility, structural ancestry, or specialization ancestry changes.
At that proposal-validation stage, authored Turtle files remained unchanged. Mathematical review also checked all six CCSS (+)
mappings and the boundary cases above. This verifies the proposed graph and design; implementation
and its build/release validation are recorded separately below.

## Implementation and adoption — 2026-10-11

Stage 3A is implemented for review on `codex/advanced-complex-numbers`, based on `main` at
`702714b`. It adds seven Areas with the definitions and examples recorded above:

| New Area | Structural relation | Parent |
| --- | --- | --- |
| ComplexConjugation | partOf | NumberSystems |
| ComplexModulus | partOf | NumberSystems |
| ComplexArgument | partOf | NumberSystems |
| ComplexPlane | partOf | GeometricVisualization |
| ComplexArithmeticGeometry | partOf | GeometricVisualization |
| ComplexPolarNotation | specializes | NumberNotation |
| FundamentalTheoremOfAlgebra | partOf | AlgebraicTheorems |

The scope is **seven new Areas, six partOf edges, one specializes edge, and two progression
edges**: ComplexModulus expands AbsoluteNumberMagnitude, and ComplexPlane translates
ComplexNumberStructure. No existing descriptor identifier, definition, example, or authored
relation is modified; no descriptor is retired. The additions preserve existing labeling
eligibility and ancestry by using current organizers and the existing NumberNotation
specialization family.

Stage 3B, the optional representation Scopes, and the adjacent A-APR.D.7 audit remain deferred.
No new organizer, operation-by-number-system duplicate, or complex-analysis family is included.

Existing annotations need no identifier migration. Consumers can adopt the new distinctions
through the normal ontology release workflow and add them only where content supports the
specific knowledge. In particular, use ComplexPolarNotation for notation knowledge and
ComplexArithmeticGeometry for the arithmetic/geometric correspondence, not solely because
polar symbols or a complex number appear. No dataset, target specification, or downstream
dependency pin is changed.

Implementation validation passed against `702714b`: exactly seven new eligible Areas and
37 added assertions, giving 974 descriptors and 5,207 assertions. No assertions were removed;
existing definitions, examples, authored relations, labeling eligibility, and structural or
specialization ancestry are unchanged. Schema, Ability, and Scope sources are unchanged.
The focused graph assessment passed with no findings, and semantic review confirmed the zero,
principal-argument, divisor, coefficient-domain, and multiplicity boundaries.

The full `docker build . --output dist` gate passed: source and documentation validation,
TypeScript client and packaged-export checks, Python lint/type checks, all 49 Python tests,
and wheel/sdist consumer verification. Generated artifacts are local build outputs; a package
release and downstream adoption remain separate from this review branch.
