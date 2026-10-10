# NumberTheory — design proposals and implementation record

Status: the second draft's option 2A and concrete family tree were implemented on
`codex/number-theory-foundations`, 2026-10-10, and merged into `origin/main` at `1b9ecc3`,
verified on 2026-10-11. The implementation was based on `d0d029d` after the Algebra refinements. See the
[implementation and adoption record](#implementation-and-adoption--2026-10-10) for the
authored changes and remaining work. Consumer adoption remains separate.

The original school-gap proposal is preserved below. A separately researched
[second draft](#draft-2--a-university-informed-subject-structure) follows it, comparing
a broader subject structure with introductory university curricula and locating the
school requirements within that structure. These two proposal sections retain their
pre-implementation wording and baseline observations for comparison; the implementation
record states which choices were adopted.

This develops [step 1 of the Algebra extension roadmap](algebra-family-draft.md#1-numbertheory-foundations--next-implementation-proposal).
The immediate target is school-level knowledge of number systems, rationality, and
complex-number foundations. Existing integer topics remain in place. Advanced complex
numbers and further elementary number theory remain separate later stages.

## Recommended boundary

Broaden **NumberTheory** to include the structure and properties of number systems.
Keep **ArithmeticSpaces** under Arithmetic, organizing methods of numerical representation
and computation. Knowing why a sum must be irrational is different from calculating it;
both can contribute to the same competency.

| Existing organizer | Proposed concise definition | Example |
| --- | --- | --- |
| NumberTheory | The properties and relationships of numbers and number systems, including divisibility, rationality, and their behavior under operations. | Prime factorization; characterizing rational decimals; extending real numbers with an imaginary unit. |
| ArithmeticSpaces | Methods and relationships used to represent numerical values and carry out arithmetic within number systems. | Regrouping integers; adding fractions; aligning decimal place values. |

This is a deliberate educational use of NumberTheory broader than its present
integer-only definition. It does not move fraction strategies, decimal rounding, place
value, or intuitive number sense into a new field. FormalMathematics continues to own
notation and expression roles; Algebra owns the existing rewriting and solving knowledge.

## Proposed family tree

Every `P` below denotes a proposed or retained child-to-parent **partOf** relation;
`S` denotes **specializes**. Square brackets describe status, not descriptor names.

```text
Areas
NumberTheory [existing; broaden definition]
  P Factorization [existing subtree retained]
      P CompositeNumbers
      P DivisibilityRules
          P OddAndEvenNumbers
      P FactorsAndMultiples
      P PrimeNumbers
  P NumberSystems [new organizer]
      P NumberSystemRelations [new]
      P RationalNumberCharacterization [new]
      P NumberOperationResultTypes [new]
      P ComplexNumberStructure [new]

SetTheory [existing; becomes organizational]
  P OperationClosure [new shared knowledge]

Arithmetic [unchanged]
  P ArithmeticSpaces [existing; clarify definition]
      P IntegerArithmetic [existing subtree retained]
      P RationalArithmetic [existing subtree retained]

Scopes
NumericSpace [existing]
  S RealNumbers [existing subtree retained except the decimal option below]
  S ComplexNumbers [new]
```

NumberSystems groups related knowledge; it is not an extra competency claim. The four
leaves are constituent subjects, not progressively narrower kinds of one another. There
is no need to force a specialization level into this family. More specific concepts can
be added later only when they preserve the meaning of the parent they specialize.

The recommended draft adds **five eligible Areas**, **one Area organizer**, and **one
Scope**. The shared closure Area belongs to SetTheory because it also applies to
polynomials and other mathematical sets. It has one structural parent. Its placement
and the eligibility change for SetTheory require explicit review below.

## Proposed definitions and evidence

These are candidate definitions, not current source assertions. Each Area names
knowledge that can be understood, explained, applied, or justified through an appropriate
Ability; the definition does not prescribe that Ability.

| Proposed Area | Concise definition | Positive evidence | Boundary |
| --- | --- | --- | --- |
| NumberSystems | The structure, relationships, and operation-dependent properties of systems of numbers. | Organizes rational, real, and complex-number knowledge. | Organizational only; do not use as a direct label. |
| NumberSystemRelations | The membership and inclusion relationships among number systems, including their overlaps and exclusions. | Explaining why every integer is rational, or why a real number cannot be both rational and irrational. | A calculation containing an integer does not establish knowledge of inclusion. |
| RationalNumberCharacterization | The characterization of rational real numbers as quotients of integers with nonzero denominators and as values with terminating or eventually repeating decimal expansions. Irrational real numbers satisfy neither characterization. | Explaining why `0.125 = 1/8` is rational and why an eventually repeating decimal represents a rational number. | Converting one decimal to a fraction can use existing DecimalEquivalence without addressing the general characterization. |
| NumberOperationResultTypes | The necessary or possible number-system membership of an operation's result, given the operand types and stated restrictions. | Explaining why rational plus irrational is irrational, and why a nonzero rational times irrational is irrational. | A correct sum alone does not establish knowledge of its result type. |
| ComplexNumberStructure | The extension of real numbers by an imaginary unit satisfying `i^2 = -1`, with each complex number uniquely expressed as `a + bi` for real `a` and `b`. | Identifying `3` and `-2` as the real and imaginary parts of `3 - 2i`; interpreting `5 = 5 + 0i`. | Conjugation, modulus, complex-plane geometry, and polar form are reserved for a later stage. |
| OperationClosure | The property that applying a stated operation to elements of a set always produces an element of that set, with permitted inputs and domain restrictions made explicit. | Establishing closure of integers under subtraction or of real-coefficient polynomials under multiplication. | One successful calculation does not establish closure. Excluded inputs and results outside the set are different issues. |

NumberSystemRelations is worth retaining even in this small family: classification and
inclusion are learned relationships that support rationality, number-system extension,
and result-type reasoning. RationalNumberCharacterization supplies specific membership
criteria; it does not replace reasoning about relations among whole systems. If evidence
does not warrant that distinction, the smaller alternative omits NumberSystemRelations
and starts with the remaining four eligible Areas.

ComplexNumberStructure initially bundles the imaginary unit and component form because
they jointly describe the extension. Do not add ComplexAddition or ComplexMultiplication:
existing operations and laws compose with this knowledge and the complex context. Split
ImaginaryUnit and ComplexNumberForm only if representative tasks justify separate concepts.
Such a split would need an explicit decision about the eligibility of their organizer.

## Distinctions the examples must preserve

| Context | Interpretation |
| --- | --- |
| `0.333... = 1/3` | The dots must denote an exact continuing pattern. The general rationality criterion and the conversion procedure are distinguishable knowledge. |
| `0.125 = 0.125000...` and `0.999... = 1` | Terminating decimals count as eventually repeating zeros; nonunique decimal representations do not invalidate the characterization. |
| A calculator displays `1.41421356` | This finite rational approximation does not prove that the underlying number is irrational. A displayed prefix does not determine the rest of an expansion. |
| `q + r`, with rational `q` and irrational `r` | The result must be irrational. The claim concerns operand roles and a universal relationship, not just the presence of both Scopes. |
| `q r`, with rational `q != 0` and irrational `r` | The result must be irrational. The restriction applies to the rational factor; `0 * sqrt(2) = 0` shows why it matters. |
| Two irrational operands | Their sum or product can be rational or irrational: `sqrt(2) + (-sqrt(2)) = 0`, `sqrt(2) + sqrt(2) = 2sqrt(2)`, `sqrt(2) * sqrt(2) = 2`, and `sqrt(2) * sqrt(3) = sqrt(6)`. |
| Integers under division | `1 / 2` is defined but is not an integer, disproving closure. Division by zero is undefined; it is not a defined result outside the set. |
| Rationals under division | State closure for nonzero divisors. Do not present unrestricted division as a total binary operation on the rationals. |
| `3 - 2i` | The imaginary part is the real coefficient `-2`, not the term `-2i`. The complex result can have a zero real or imaginary part. |
| `x^2 + 1 = 0` | There are no real solutions and there are two complex solutions, `i` and `-i`. Choosing `i` does not make it the only root of `x^2 = -1`. |
| `(1 + i)(1 - i) = 2` | Existing multiplication, distributivity, and `i^2 = -1` suffice for this calculation. It need not assert knowledge of conjugation. |
| `(x + 1)(x - 1) = x^2 - 1` | One polynomial product illustrates closure; explaining that every product remains polynomial addresses the general property. Fix the coefficient system and variables. |

OperationClosure and NumberOperationResultTypes overlap on statements such as closure of
rationals under addition, but answer different questions. Closure fixes one set and asks
whether every permitted operation stays inside it. Result-type knowledge also handles
different input types, mandatory results, and cases where the types alone do not determine
the result. Do not require both labels merely because both descriptions could apply.

The restrictions in these examples belong to the actual mathematical claim. In particular,
NumbersWithoutZero would exclude zero everywhere in a context; it must not stand in for
the local condition that one designated rational factor is nonzero.

The symbol `i` denotes a fixed number in these examples. Its presence alone does not make
an expression variable-bearing: `3 + 2i` remains compatible with the existing
ArithmeticExpression definition. Constant covers its formal role when that role is itself
being addressed; ComplexNumberStructure supplies its particular mathematical meaning.

## Scope proposal and existing boundaries

Proposed **ComplexNumbers** definition:

> A numerical context using the complex number system, admitting values `a + bi` with
> real `a` and `b` and `i^2 = -1`.

Example: solving `x^2 + 1 = 0` over the complex numbers, or calculating
`(1 + i)(1 - i) = 2`. The real result does not erase the complex context.

Proposed placement is a specialization of NumericSpace alongside RealNumbers. These
siblings are not asserted to be disjoint. Mathematical inclusion of the reals in the
complex numbers belongs in the knowledge family; ordinary real arithmetic should not
automatically acquire a complex-context label. Reparenting RealNumbers below ComplexNumbers
is an alternative only if that inherited labeling is intended.

Two existing Scope definitions need decisions before this proposal is implemented:

| Scope | Current issue | Recommended draft treatment | Alternative |
| --- | --- | --- | --- |
| DecimalNumbers | Its definition covers real decimal representations, but its parent RationalNumbers excludes infinite nonperiodic expansions. | Preserve the broad representation meaning and change the parent to RealNumbers. Clarify that exact terminating, eventually repeating, and nonperiodic expansions are included; a finite approximation is a separate represented value. | Retain RationalNumbers as parent and explicitly restrict the definition to rational values in terminating or eventually repeating decimal form. Smaller migration, narrower coverage. |
| FractionNumbers | The definition permits any real numerator/nonzero denominator, while RationalNumbers requires an integer quotient. | Retain the parent and define it as rational numbers written as quotients of integers with nonzero denominators, or as mixed numbers. | A general fraction-form Scope could cover `sqrt(2)/3`, but would need a separate representation-family review. Do not broaden the existing rational Scope silently. |

The decimal recommendation changes inherited labels, including those of the finite-place
descendants TenthDecimals, HundredthDecimals, and ThousandthDecimals. Audit their annotations
and recover warranted rational context explicitly; do not assume it still follows from the
reparented Scope. DecimalArithmetic remains about rational arithmetic in decimal form.
DecimalNotation already describes the notation more generally.

FractionNumbers must continue to admit MixedNumbers. Also audit FractionDividend,
FractionDivisor, FractionExponent, and FractionQuotient: their current wording says fraction
form and their implications assert rational context. Align those definitions with the intended
integer-quotient or mixed-number boundary before retaining those implications. Formal
Numerator, Denominator, and Quotient already support general expressions such as `sqrt(2)/3`.

IntegerNumbers currently specializes RealNumbers directly. Adding rational ancestry is
mathematically compatible with its definition, but changes inherited labels independently
of this proposal. Preserve that decision for a dedicated Scope review. NumberSystemRelations
can represent knowledge that integers are rational without requiring a hierarchy change.

## Placement alternatives

| Decision | Recommended approach | Other reasonable approach and tradeoff |
| --- | --- | --- |
| ArithmeticSpaces | Retain its identifier and entire computational subtree under Arithmetic; clarify organizer wording. | Retaining the broad wording avoids a definition edit but leaves ownership of number-system properties less clear. Moving the whole subtree into NumberTheory also moves strategies and place-value methods and offers little benefit here. |
| Closure | One OperationClosure Area in SetTheory, reusable with numerical and polynomial contexts. | NumberSystemClosure under NumberSystems keeps this pass local and avoids changing SetTheory eligibility, but a later polynomial concept would repeat much of the same knowledge. A future AlgebraicStructures organizer is a further option once it has a substantive family. |
| Complex foundations | One ComplexNumberStructure Area. | Independent ImaginaryUnit and ComplexNumberForm Areas give finer labels if tasks repeatedly isolate them, at the cost of a larger initial family. |
| System relationships | Include NumberSystemRelations for membership and inclusion reasoning. | Omit it from the initial pass if characterization and complex extension are the only intended learning targets. |

Do not resolve the closure-placement choice by giving the same concept parallel structural
parents in NumberTheory and Algebra. Its generic meaning should have one shared home;
competencies supply the mathematical domain.

## CCSS coverage and reuse

The table maps knowledge, not complete authored competency specifications. Select an Ability
and only the observable eligible descriptors required by each actual task. Names of existing
organizers below indicate navigation, not valid direct labels.

| Requirement | Proposed knowledge and existing reuse | Status after implementation |
| --- | --- | --- |
| [8.NS.A.1](https://www.thecorestandards.org/Math/Content/8/NS/) | RationalNumberCharacterization and, where classification is the target, NumberSystemRelations; reuse DecimalEquivalence for repeating-decimal conversion. | Addresses the missing characterization. The conversion procedure remains existing knowledge. |
| [8.NS.A.2](https://www.thecorestandards.org/Math/Content/8/NS/) | Existing NumericApproximation, applicable comparison descendants such as NumericOrder, IrrationalNumbers, and Numberline context. | Expected composition; verify approximation, comparison, and placement examples. No dedicated irrational-approximation Area proposed. |
| [N-RN.A.1-2](https://www.thecorestandards.org/Math/Content/HSN/RN/) | Existing Exponentiation, Root, and ExponentLaws, with observed exponent form and number-system context. | Still audit whether justifying the rational-exponent extension is covered, beyond performing a rewrite. FractionExponent describes fraction form, not every rational exponent representation. |
| [N-RN.B.3](https://www.thecorestandards.org/Math/Content/HSN/RN/) | OperationClosure for rational sums/products; NumberOperationResultTypes for mixed rational/irrational cases and necessary conditions. | Adds the missing general properties. A calculation is not enough evidence for a proof competency. |
| [N-CN.A.1-2](https://www.thecorestandards.org/Math/Content/HSN/CN/) | ComplexNumberStructure and ComplexNumbers; reuse Addition, Subtraction, Multiplication, and appropriate arithmetic laws. | Covers the proposed foundational meaning and supports composition for arithmetic. No operation-by-number-system Areas. |
| [N-CN.C.7](https://www.thecorestandards.org/Math/Content/HSN/CN/) | Existing EquationSolving and QuadraticFormula or another applicable method, with complex structure/context as required. | Existing methods admit complex solutions; the new family provides their number-system foundations. |
| [A-APR.A.1](https://www.thecorestandards.org/Math/Content/HSA/APR/) | Shared OperationClosure with PolynomialDependence and the relevant operations, over a stated coefficient system. | Resolves the identified closure-concept gap if the shared placement is accepted; validate general reasoning as well as calculations. |

These are core standards. The general BinomialTheorem is already authored even though its
standard is marked `(+)`. This draft does not establish complete coverage of all remaining
CCSS; the [residual core audit](algebra-family-draft.md#2-close-the-remaining-core-algebrafunction-coverage-questions)
still includes exponent-extension justification and the other algebra/function cases.

## Adoption and review before authoring

1. Review the proposed definitions, the shared placement of closure, and the two Scope
   boundary choices. Confirm that the four NumberSystems leaves warrant separate labels.
2. Keep existing NumberTheory and ArithmeticSpaces identifiers and structural edges.
   Currently only Factorization is directly part of NumberTheory; IntegerArithmetic and
   RationalArithmetic are directly part of ArithmeticSpaces. The definition changes need
   a meaning review but do not themselves alter inherited paths or labeling eligibility.
3. Adding OperationClosure as SetTheory's first constituent makes SetTheory organizational
   and ineligible as a direct label under [ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
   A read-only search found no SetTheory references in the local content repository's
   tracked authored files or current temporary standard plans. This is not a complete
   downstream usage audit. Any external SetTheory labels need semantic review; they cannot
   all be replaced by OperationClosure. This eligibility change is part of the proposal,
   not an incidental implementation detail.
4. Inventory all changed Scope descendants and incoming implications, compare inferred
   annotations before and after, and retain only supported labels. The decimal option can
   remove rational ancestry; tightening fraction wording can expose unsupported existing
   implications or content assignments. No blanket replacement is appropriate.
5. Preserve existing Factorization and DivisibilityRules as organizers for now. Both have
   constituent children and are therefore ineligible labels, despite their procedure-like
   definitions. Record a separate integer-family review rather than silently using them
   as methods or changing their children to specialization.
6. Check the proposed graph against [ONT-S1–S5](../structure.md), assess labeling eligibility,
   and validate the examples above against [content evidence](../content-evidence.md).
   All new Area edges here are constituents; no new progression edges are assumed from
   teaching order. Any later expands/integrates proposal needs its own meaning review.
7. After approval, author Turtle, run ontology validation and the normal build, then compare
   generated descriptor and annotation changes. Publication and consumer package adoption
   remain separate tasks; this document does not update the dataset.

## Preserved later work

- **Elementary integer theory:** review whether greatest common divisors, least common
  multiples, prime factorization uniqueness, and modular arithmetic need distinct concepts
  beyond the current integer family. Also resolve the Factorization/DivisibilityRules
  organizer-versus-method boundary. This is a separate coverage audit, not a claim that
  all these concepts are missing or already covered.
- **Advanced complex numbers, CCSS (+):** conjugation, modulus/argument, complex-plane
  and polar representations, and the Fundamental Theorem of Algebra. The latter should
  be reviewed for placement in AlgebraicTheorems; do not duplicate it across fields.
  See [N-CN.A.3, B.4-6, C.8-9](https://www.thecorestandards.org/Math/Content/HSN/CN/).
- **Algebraic closure extension, CCSS (+):** rational-expression closure under the permitted
  operations in [A-APR.D.7](https://www.thecorestandards.org/Math/Content/HSA/APR/), preserving
  denominator restrictions. This is a further reuse test for OperationClosure.
- **Linear algebra, further trigonometry, and calculus:** retain their independent stages in
  the [Algebra and analysis roadmap](algebra-family-draft.md#recommended-next-ontology-extensions).
  These are not prerequisites for the number-system basics proposed here.

## Draft 2 — a university-informed subject structure

Status: researched 2026-10-10 against the same `d0d029d` ontology baseline; subsequently
selected for implementation using option 2A. This proposal starts from the mathematical subjects that recur in
introductory university study, then identifies the school-level concepts within them.
It does not make the university material a prerequisite for a school competency.

### Research basis and limits

The research compares official syllabi, module catalogues, and instructor-published
course material across eight institutions. It includes genuine first-year foundations,
introductory number-theory courses taught later in a degree, and teacher-education
courses. Those levels are distinguished below: an introductory title does not imply
first-semester content. Historical versions are evidence of organization, not assertions
about a university's current offering.

| Primary source | Context | Organization relevant to this proposal |
| --- | --- | --- |
| [Cambridge Mathematical Tripos, 2026–27](https://www.maths.cam.ac.uk/undergrad/files/schedules.pdf), printed pp. 9 and 26 | First-year Numbers and Sets; separate third-year Number Theory | The first-year course distinguishes number systems, elementary integer theory, and real-number foundations. Later number theory extends modular methods into reciprocity, prime distribution, and approximation. |
| [MIT 18.781, spring 2012](https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/pages/syllabus/) | Undergraduate introduction; no formal prerequisites, proof experience helpful | Divisibility, unique factorization, GCD, Euclidean algorithm, congruences, residues, arithmetic functions, Diophantine equations, and continued fractions form a broad elementary course. |
| [Oxford ASO Number Theory, 2025–26](https://courses.maths.ox.ac.uk/course/view.php?id=6038) | Eight-lecture Part A course, after the first year | A concentrated modular route: residue rings, classical power theorems, primitive roots, quadratic reciprocity, and a cryptographic application. |
| [Warwick MA257, 2023–24](https://courses.warwick.ac.uk/modules/2023/MA257-10) | Undergraduate Level 2; indicative syllabus | Integer factorization, congruences, and Diophantine problems anchor the course; other rings and computational or geometric applications extend it. |
| [Trinity College Dublin MAU23101, 2021](https://www.maths.tcd.ie/~mascotn/teaching/2021/MAU23101/index.html) | Introductory course with published chapter material | Divisibility leads to modular arithmetic, power residues, sums of squares, and continued fractions. Gaussian integers support integer problems; binary quadratic forms were optional for available teaching time. |
| [FAU teacher-education handbook, 31 March 2026](https://www.math-datascience.nat.fau.de/files/2026/04/MHB_strukturiert_mehrfach_4_Mathematik_1.-Staatspruefung-fuer-das-Lehramt-an-Realschulen_Hauptfach_PO-Version-20261.pdf), module 65580, p. 16 | Elementary number theory recommended in semester 4 | Integer theory includes decimal expansions and algebraic/transcendental numbers. The same handbook places completeness and complex foundations in analysis courses, rather than assigning all number-system knowledge to number theory. |
| [Bonn Zahlentheorie I/II, WS 2003–04](https://www.math.uni-bonn.de/people/wynands/ZahlenthIIWS03-04.html) | Historical teacher-education course for secondary-school mathematical background | A deliberately broad treatment connects divisibility in several rings, equations, arithmetic functions, positional representations, continued fractions, and kinds of numbers. |
| [UT Austin M 328K](https://math.utexas.edu/academics/undergraduate-courses) | Introduction to number theory within the transition to proof writing; prior coursework required | Divisibility and congruences are central; additional integer-equation topics vary. Proof development is a teaching objective across these subjects, rather than another number-theory object family. |
| [Oxford Complex Numbers](https://courses.maths.ox.ac.uk/course/view.php?id=6022) and [Analysis I](https://courses.maths.ox.ac.uk/course/view.php?id=6020), 2025–26 | First-year boundary comparison | Complex arithmetic has a separate introductory course. Completeness, sequences, and series belong to analysis; using real or complex numbers alone does not make a task analytic. |
| [Warwick MA136, 2022–23](https://courses.warwick.ac.uk/modules/2022/MA136-6) | First-year abstract algebra, historical catalogue | Groups, rings, and fields use number systems, modular systems, polynomials, and matrices as examples. General operation structure has a shared algebraic home. |

The recurring center is **divisibility and primes, congruences, and integer equations**.
Arithmetic functions and rational approximation are recurring extensions, with different
depth in different courses. Number-system foundations connect these subjects to school
mathematics, but are not uniformly classified as elementary number theory. This is a
synthesis of the sources, not a universal university taxonomy.

Three consequences guide the ontology design:

1. Organize by mathematical subject. A theorem, method, and structural concept may belong
   together; separate top-level bins for all theorems, all algorithms, and all applications
   would obscure their connections. Ability still distinguishes proving, applying, and
   executing. A named theorem can contribute knowledge beyond its statement's formal kind.
2. Do not copy the lecture sequence into ontology relations. The Euclidean algorithm
   connects GCD, integer equations, and continued fractions; those connections do not
   require three structural parents or an invented prerequisite chain.
3. Keep the boundaries with arithmetic, algebra, and analysis explicit. Curricular
   co-location is evidence for coverage, not proof of a partOf or specializes relation.

### Two coherent choices for the upper boundary

**2A. Broad educational NumberTheory — recommended for continuity with our agreed scope.**
Keep the number-system foundations and complex basics inside NumberTheory, but give the
traditional integer subjects their own substantial branches. NumberTheory would mean:

> The properties and relationships of integers and number systems, including divisibility,
> prime structure, congruences, integer equations, rationality, and numerical extensions.

This retains the earlier decision about complex foundations while making the broader
educational meaning explicit. The teacher-education sources provide useful precedents;
they do not establish that this is the standard disciplinary boundary everywhere.

**2B. Conventional disciplinary split — the stronger match to the common university boundary.**
Use the same integer, modular, Diophantine, arithmetic-function, and rational-approximation
branches under NumberTheory, but place NumberSystems alongside it as a separate field.
Its contents would be identical to 2A. NumberTheory could then be defined as:

> The arithmetic properties of integers and related questions about divisibility,
> congruence, equations, and rational approximation.

This is a genuine alternative, not an extra parent: choose one home for NumberSystems.
It revisits the earlier ownership decision, so it should not be implemented silently.
Both choices preserve all school mappings below; the distinction concerns navigation
and field meaning rather than the existence of the school concepts.

### Proposed subject tree for 2A

`P` and `S` retain their meanings from the first draft. `E` marks an existing descriptor,
possibly moved; `N` marks a new school-facing candidate; `U` marks a university bridge
candidate; `O` marks an organizer. The tags are planning metadata, not new ontology
dimensions or a complete list of concepts required by every course.

This is the **target design**, not a request to author every branch immediately.
Future-only organizers should wait until their constituent concepts are implemented.

```text
NumberTheory [E; broaden under option 2A]
  P IntegerDivisibility [O]
      P FactorsAndMultiples [E]
      P IntegerParity [N]
      P DivisibilityRules [E; becomes eligible]
          S OddAndEvenNumbers [E; existing numeral-based test]
      P GreatestCommonDivisor [N; school synonym: greatest common factor]
      P LeastCommonMultiple [N]
      P Coprimality [U]
      P EuclideanDivision [U]
      P EuclideanAlgorithm [U]
      P BezoutIdentity [U]
  P PrimesAndFactorization [O]
      P PrimeNumbers [E]
      P CompositeNumbers [E]
      P Factorization [E; becomes eligible]
          S PrimeFactorization [U]
      P FundamentalTheoremOfArithmetic [U]
      P InfinitudeOfPrimes [U]
  P ModularArithmetic [O]
      P IntegerCongruence [U]
      P ResidueClassArithmetic [U]
      P ModularInverse [U]
      P LinearCongruenceSolvability [U]
      P ChineseRemainderTheorem [U]
  P DiophantineProblems [O]
      P LinearDiophantineSolvability [U]
      P PythagoreanTriples [U]
  P ArithmeticFunctions [O]
      P DivisorCount [U]
      P DivisorSum [U]
      P EulersTotient [U]
      P MultiplicativeArithmeticFunction [U]
  P RationalityAndApproximation [O]
      P RationalNumberCharacterization [N; retained from draft 1]
      P ContinuedFractions [U]
  P NumberSystems [O; separate root under option 2B]
      P NumberSystemRelations [N; retained from draft 1]
      P NumberOperationResultTypes [N; retained from draft 1]
      P ComplexNumberStructure [N; retained from draft 1]

Algebra [E]
  P AlgebraicStructures [O; shared across mathematical domains]
      P OperationClosure [N; placement differs from draft 1]
```

The first draft's RationalNumberCharacterization now has one home in
RationalityAndApproximation, where integer quotients, recurring remainders, and exact
decimal patterns connect naturally. NumberSystemRelations concerns membership and
inclusion; NumberOperationResultTypes concerns consequences of operations. Neither is
a replacement for the decimal characterization.

The Scopes remain a separate tree: retain the existing numeric contexts and propose
ComplexNumbers as in draft 1. Do not reproduce every Area branch as a parallel Scope
branch. Modular context may eventually need its own Scope, but the occurrence of a
remainder alone is not evidence of modular-structure knowledge.

### Meanings of the branches

These candidate organizer definitions establish the intended boundaries; the leaf
definitions below identify the knowledge available for actual competencies.

| Organizer | Proposed concise definition |
| --- | --- |
| IntegerDivisibility | Divisibility relations among integers, their common divisors and multiples, and methods for establishing these relationships. |
| PrimesAndFactorization | Prime and composite integer structure, integer product decompositions, and the existence and uniqueness properties of prime factors. |
| ModularArithmetic | Congruence classes of integers and the arithmetic, equations, and power relationships defined modulo an integer. |
| DiophantineProblems | The existence, structure, and determination of integer or rational solutions to polynomial equations with integer coefficients. |
| ArithmeticFunctions | Functions on positive integers that encode divisibility and prime structure, including their multiplicative relationships. |
| RationalityAndApproximation | Exact rational representations, rationality criteria, and the structure and accuracy of approximation by rational numbers. |
| NumberSystems | The membership relationships, extensions, and operation-dependent properties of systems of numbers. |
| AlgebraicStructures | Sets equipped with operations and the properties and axioms governing those operations. |

RationalityAndApproximation does not take over ordinary numerical rounding: use existing
NumericApproximation when that is the entire knowledge involved. Continued-fraction
structure and constrained best approximation introduce further mathematics. Similarly,
an equation whose displayed coefficients happen to be integers does not by itself
involve DiophantineProblems; integer or rational solvability must be the subject.

### Candidate knowledge and examples

The school concepts carried over from draft 1 retain its proposed definitions and
boundary examples. The additions below make the broader branches concrete; `U` concepts
can be deferred without preventing the school implementation.

| Candidate | Concise definition | Example or boundary |
| --- | --- | --- |
| IntegerParity | The even or odd character of integers, represented by the forms `2k` and `2k + 1`, and its behavior under integer operations. | Explaining why adding 3 reverses parity, rather than merely reading a last digit. |
| GreatestCommonDivisor | The greatest positive integer dividing every member of a given finite collection of integers that are not all zero. | `gcd(36, 8) = 4`; `gcd(0, -8) = 8`. The all-zero convention remains outside this definition. |
| LeastCommonMultiple | The least positive integer divisible by every member of a given finite collection of nonzero integers, extended to zero when any member is zero. | `lcm(8, 12) = 24`; `lcm(0, 8) = 0`. |
| Coprimality | The relationship between integers whose greatest common divisor is one. | 8 and 15 are coprime although neither is prime. |
| EuclideanDivision | The unique representation of an integer `a` as `bq + r` for a positive integer `b`, with integers `q` and `r` satisfying `0 <= r < b`. | `-7 = 3(-3) + 2`. This is the quotient-remainder relationship and its uniqueness, not a prescribed written algorithm. |
| EuclideanAlgorithm | Determining the greatest common divisor by repeated division with remainder, using the invariance of the common divisors at each reduction. | Reducing `(48, 18)` to `(18, 12)`, then `(12, 6)`, and obtaining 6. |
| BezoutIdentity | The representation of the greatest common divisor of two integers, not both zero, as an integer linear combination of them. | `gcd(30, 18) = 6 = 2(18) - 30`. The existence of such coefficients adds knowledge beyond an arbitrary displayed equality. |
| PrimeFactorization | Decomposing an integer greater than one into a product of prime integers. | `60 = 2^2 * 3 * 5`; this specializes existing integer Factorization. |
| FundamentalTheoremOfArithmetic | The existence of a prime factorization for every integer greater than one and its uniqueness up to the order of the factors. | Explaining why any complete prime factorization of 60 has two factors 2, one 3, and one 5. A single factor tree does not establish the theorem. |
| InfinitudeOfPrimes | The fact that no finite collection contains every prime number. | Reasoning that a prime divisor of one plus a product of listed primes cannot belong to that list. The constructed number need not itself be prime. |
| IntegerCongruence | The relation that two integers differ by a multiple of a specified positive integer modulus. | `17` and `5` are congruent modulo 12. Geometric CongruenceRelation has a different meaning. |
| ResidueClassArithmetic | The addition and multiplication of integer congruence classes, independent of the representatives chosen within each class. | Modulo 5, replacing 7 by 2 leaves the class of its product with 3 unchanged. |
| ModularInverse | A residue class whose product with a specified class is the multiplicative identity modulo an integer greater than one, existing exactly when the representative is coprime to the modulus. | The inverse of 3 modulo 7 is 5; 2 has no inverse modulo 6. |
| LinearCongruenceSolvability | The condition that `ax` is congruent to `b` modulo a positive integer `m` precisely for some integer `x` when `gcd(a, m)` divides `b`. | `6x` congruent to 9 modulo 15 is solvable, but `6x` congruent to 4 is not. |
| ChineseRemainderTheorem | The existence of a unique residue class modulo the product satisfying any prescribed residues for pairwise coprime positive moduli. | Residues 2 modulo 3 and 3 modulo 5 determine residue 8 modulo 15. Noncoprime moduli need additional compatibility conditions. |
| LinearDiophantineSolvability | The condition that `ax + by = c`, for integers `a`, `b`, and `c` with `a` and `b` not both zero, has integer solutions exactly when `gcd(a, b)` divides `c`. | `6x + 10y = 7` has real solutions but no integer solutions. Generic EquationSolving supplies the objective, not this criterion. |
| PythagoreanTriples | Positive integer solutions of `a^2 + b^2 = c^2`, including the conditions for their primitive parametrization. | `(3, 4, 5)` is primitive; `(6, 8, 10)` is not. Applying the geometric Pythagorean theorem alone does not establish this knowledge. |
| DivisorCount | The number of positive divisors of a positive integer and its relationship to the exponents in a prime factorization. | `12 = 2^2 * 3` has `(2 + 1)(1 + 1) = 6` positive divisors. |
| DivisorSum | The sum of the positive divisors of a positive integer and its relationship to prime factorization. | The positive divisors of 12 sum to 28. |
| EulersTotient | The number of integers from 1 through a positive integer `n` that are coprime to `n`, and its dependence on the prime factors of `n`. | `phi(12) = 4`, from 1, 5, 7, and 11. |
| MultiplicativeArithmeticFunction | A function on positive integers with value one at 1 whose value on a product of coprime inputs equals the product of their values. | Divisor counts multiply for 4 and 3, but that rule cannot be assumed for 2 and 2. |
| ContinuedFractions | Representation by nested integer parts and reciprocals, together with the rational convergents obtained by finite truncation. | `13/8 = [1; 1, 1, 1, 2]`; continued fractions also describe irrational values through infinite expansions. |

The two solvability criteria are closely connected, but have different objects and
general solutions: the linear congruence has one residue-class variable, whereas a linear
Diophantine equation has a pair of integer unknowns. Their equivalence through an
auxiliary integer variable is a useful connection to review before implementing both.
They are not specializations of generic EquationSolving: they supply a solvability
criterion that can be understood even when no solving task is requested.

DivisorCount, DivisorSum, and EulersTotient describe particular mathematical functions
and their properties. They do not authorize a new Area for every function merely having
integer inputs. Their repeated use in factorization, multiplicativity, and modular theory
provides the additional knowledge and future reuse that justify considering them.

### University extensions accommodated by the structure

These are reserved topic directions, not empty authored descriptors or immediate school
requirements. Their placement follows the subject branches above; detailed definitions
would be a subsequent draft.

| Branch | Further introductory-university topics | Beyond this draft |
| --- | --- | --- |
| PrimesAndFactorization | Sieve methods, primality tests, elementary factorization algorithms. | Quantitative prime distribution using analysis. |
| ModularArithmetic | Fermat/Euler/Wilson theorems, multiplicative order, primitive roots, power residues, Legendre symbol, quadratic reciprocity. | General finite-field theory belongs to shared algebra; specific numerical applications can build on it. |
| DiophantineProblems | Sums of squares, Pell equations, selected binary quadratic forms. | Elliptic curves and general arithmetic geometry. |
| ArithmeticFunctions | Multiplicativity of the named functions, divisor identities, later inversion formulas. | Average orders and analytic methods. |
| RationalityAndApproximation | Denominator criteria for terminating base expansions, irrationality proofs, convergents and best-approximation properties. | General Diophantine approximation; analytic convergence arguments retain their analysis knowledge. |
| NumberSystems | Algebraic/transcendental classification; complex conjugation and geometric forms; later Gaussian integers and other specific numerical extensions. | General constructions of fields and number fields need an algebra review. Rational numbers are algebraic too; algebraic numbers need not be real. |

The first several rows occur in introductory number-theory curricula, but their depth
varies. The advanced directions are not a promise of full university-course coverage.
Likewise, the school `(+)` marker is not a university difficulty classification: some
complex-number topics reserved from our core CCSS work appear in Oxford's first-week
course. See the primary-source comparison above.

### Revisions to the first draft's boundaries

**Shared closure belongs with operation structure.** This draft proposes
OperationClosure under a substantive AlgebraicStructures family in Algebra, instead of
using SetTheory merely as its first available shared home. Its definition and numeric
versus polynomial examples remain those from draft 1. This placement is our design
inference from the algebra curricula; it is not a quotation of a syllabus hierarchy.
Future identity, inverse, group, ring, and field concepts can develop that family.
They should not be introduced as prerequisites for a school closure claim. SetTheory
would retain its current labeling eligibility under this option.

**Arithmetic retains computation.** Keep Modulo, DivisionStandardAlgorithm, the fraction
strategies, and the ArithmeticSpaces subtree in their existing fields. Modulo calculates
a remainder; EuclideanDivision explains the quotient-remainder structure;
IntegerCongruence explains equality modulo a modulus. None substitutes for both others.
The current Modulo definition leaves negative-input conventions unspecified, so review
that boundary before relying on it in examples with negative integers.

**Analysis begins with additional analytic knowledge.** Comparing irrational values or
interpreting a complex number does not require an analysis label. Completeness, limits,
and convergence provide distinct knowledge when the task actually calls for them.
The number-theoretic subject of a future application does not remove its analytic method.
Keep the existing analysis boundary; do not move all real-number knowledge into Analysis
because a university happens to introduce it in that course.

**Formal mathematics retains expression and notation roles.** Fraction and decimal
notation, variables, numerical constants, and formal equation structure stay reusable.
Prime factorization of an integer remains distinct from AlgebraicFactorization of an
expression. The decimal/fraction Scope issues and ComplexNumbers proposal from draft 1
remain open in both 2A and 2B; the broader organization does not resolve them automatically.

### Finding the school requirements within the structure

This is a targeted coverage map, not a complete CCSS certification. It locates the
number-theoretic school requirements, identifies reuses, and distinguishes the proposed
university extensions from knowledge actually required in school tasks.

| School requirement | Place in this structure | Existing knowledge, gap, and limits |
| --- | --- | --- |
| [2.OA.C.3](https://www.thecorestandards.org/Math/Content/2/OA/): parity through pairing and equal addends | Preparatory intuitive knowledge connecting to IntegerDivisibility | Reuse EvenDivisibility, UnevenDivisibility, and collection reasoning. Do not label early pairing as formal congruence theory. |
| [4.OA.B.4](https://www.thecorestandards.org/Math/Content/4/OA/): factor pairs, multiples, primes and composites | IntegerDivisibility; PrimesAndFactorization | Existing FactorsAndMultiples, PrimeNumbers, and CompositeNumbers already address these concepts. The standard does not demand the uniqueness theorem for prime factorization. |
| [4.OA.C.5](https://www.thecorestandards.org/Math/Content/4/OA/): explain parity patterns | IntegerDivisibility | IntegerParity is a candidate for reasoning about even/odd behavior; existing OddAndEvenNumbers only tests divisibility by two from numerical representation. Validate the new concept against representative pattern explanations. |
| [4.NBT.B.6](https://www.thecorestandards.org/Math/Content/4/NBT/) and [4.OA.A.3](https://www.thecorestandards.org/Math/Content/4/OA/): remainders | Arithmetic, with a connection to IntegerDivisibility | Reuse Modulo and relevant division knowledge. Computing a remainder does not automatically involve the existence/uniqueness part of EuclideanDivision. |
| [6.NS.B.4](https://www.thecorestandards.org/Math/Content/6/NS/): GCF/LCM and complete common-factor extraction | IntegerDivisibility | GreatestCommonDivisor and LeastCommonMultiple are genuine general gaps. Compose GCD with DistributiveLaw for `36 + 8 = 4(9 + 2)`. The current fraction-specific concepts are insufficient outside their fraction roles. |
| [4.NF.A.1–2](https://www.thecorestandards.org/Math/Content/4/NF/) and [5.NF.A.1](https://www.thecorestandards.org/Math/Content/5/NF/): fraction equivalence and denominator methods | Existing rational arithmetic, supported by divisibility | Reuse FractionEquivalence and relevant strategies. A shared denominator need not be least, and every fraction calculation need not separately claim GCD or LCM knowledge. |
| [7.NS.A.2b,d](https://www.thecorestandards.org/Math/Content/7/NS/) and [8.NS.A.1](https://www.thecorestandards.org/Math/Content/8/NS/): rational quotients and decimal characterization | RationalityAndApproximation | RationalNumberCharacterization supplies the general connection; existing DecimalEquivalence and division methods supply conversion procedures. Full continued-fraction theory is unnecessary. |
| [8.NS.A.2](https://www.thecorestandards.org/Math/Content/8/NS/): approximate and compare irrational values | Existing numerical reasoning, connected to rationality | Reuse NumericApproximation, eligible comparison concepts, and number-line context. Neither formal completeness nor best-approximation theorems are required merely by the number type. |
| [N-RN.B.3](https://www.thecorestandards.org/Math/Content/HSN/RN/): closure and mixed rational/irrational results | NumberSystems; shared AlgebraicStructures | Retain OperationClosure and NumberOperationResultTypes as distinguishable knowledge, with operand restrictions stated. |
| [N-CN.A.1–2, C.7](https://www.thecorestandards.org/Math/Content/HSN/CN/): complex foundations, arithmetic, quadratic solutions | NumberSystems and existing arithmetic/algebra | Retain ComplexNumberStructure and the proposed context Scope; reuse operations, laws, and solving methods. Gaussian-integer theory is not necessary for these standards. |
| [A-APR.A.1](https://www.thecorestandards.org/Math/Content/HSA/APR/): polynomial closure | Shared AlgebraicStructures with polynomial knowledge | OperationClosure composes with PolynomialDependence and operations over a stated coefficient system. Its shared placement avoids putting polynomials in an integer-only field. |

N-RN.A.1–2 still needs the first draft's review of rational-exponent justification;
neither adding integer-theory branches nor naming NumberSystems proves it covered.
The existing core algebra/function audit and separate CCSS `(+)` roadmap remain active.

### Migration and staged implementation

The second draft proposes more reorganization than the first, but largely preserves
the meanings of currently used leaves. The important changes are explicit:

| Existing item | Proposed treatment | Adoption consequence |
| --- | --- | --- |
| FactorsAndMultiples | Move to IntegerDivisibility without changing meaning. | Preserve incoming progression references from arithmetic strategies and fraction methods; a new navigation parent is not new inherited knowledge. |
| PrimeNumbers and CompositeNumbers | Move to PrimesAndFactorization. | Existing content labels remain meaningful. Their relation to FactorsAndMultiples remains independently useful. |
| Factorization | Move to PrimesAndFactorization; relocate its current constituent children; allow PrimeFactorization as a specialization. | Becomes eligible under ONT-E7. Existing factor-pair content must not acquire it automatically; some content tests explicitly exclude this label. Review those tests semantically if adoption changes. |
| DivisibilityRules and OddAndEvenNumbers | Move the method family to IntegerDivisibility; replace the current constituent edge with a specialization for the existing numeral-based test. | DivisibilityRules becomes eligible. This is justified by the two definitions, not merely by a wish to enable the label. Do not later add constituent children beneath that specialized family. |
| OddAndEvenNumbers name | Retain its existing narrow meaning in this draft. | Its name is broader than its definition. A later rename to a parity-test name is optional and would need explicit migration; IntegerParity must not silently overwrite it. |
| Grade-06 GCF TODO | Use GreatestCommonDivisor as the canonical identifier and record greatest common factor as its school synonym. | Reconcile the proposed GreatestCommonFactor name in the content plan; do not create two Areas for the same concept. |
| Numeric Scopes | Preserve the separate draft-1 review. | Grade-06 bounds apply to the source operands, not necessarily the GCD/LCM result. An LCM of inputs at most 12 can exceed 12. |
| OperationClosure | Use AlgebraicStructures in this alternative. | No SetTheory eligibility change; no additional NumberTheory or polynomial-specific structural parent. |

Recommended implementation sequence after choosing a draft:

1. **School-facing structure and gaps:** establish IntegerDivisibility and
   PrimesAndFactorization, review the two eligibility changes, and add GCD/LCM. Assess
   IntegerParity against school pattern tasks. Add the rational/irrational, result-type,
   closure, and complex foundations from draft 1 in their selected homes. Do not author
   empty university-only branches just to complete the visual tree.
2. **First university connections:** add coprimality, Euclidean division/algorithm,
   Bézout, prime factorization and uniqueness, integer congruence, and basic solvability
   criteria. Each gets concise definitions, contrasting tasks, and a progression review;
   course order alone supplies no progression edges.
3. **Broader introductory course coverage:** develop modular power results and residues,
   arithmetic functions, continued fractions, and selected Diophantine families. Keep
   applications such as cryptography compositional unless they add independent knowledge.
4. **Later specialization:** revisit specific numerical extensions, algebraic structures,
   and analytic methods with their own evidence. Preserve the previously deferred complex,
   linear-algebra, and calculus stages rather than treating this tree as their implementation.

The recommended next review is therefore the **subject structure plus its small school
implementation subset**, not approval to populate the full university tree at once.
The decisive choices are 2A versus 2B for the field boundary, moving shared closure into
AlgebraicStructures, and repairing the two existing method/organizer mismatches.

## Implementation and adoption — 2026-10-10

The user selected the second draft for implementation on a new ontology branch.
`codex/number-theory-foundations` implements **option 2A** and **every explicitly defined
concept in its target tree**, including the university bridge concepts. The staged
sequence above remains the design history; the later topic directions without descriptor
definitions remain future work.

### Authored coverage

The source adds 35 Areas and one Scope, retaining all existing identifiers:

- Seven NumberTheory organizers: IntegerDivisibility, PrimesAndFactorization,
  ModularArithmetic, DiophantineProblems, ArithmeticFunctions, RationalityAndApproximation,
  and NumberSystems.
- AlgebraicStructures under Algebra, with OperationClosure as shared knowledge for
  numerical and polynomial contexts.
- All 27 new eligible Areas defined in the second draft and its carried-over school
  foundations, from IntegerParity and GreatestCommonDivisor to ContinuedFractions and
  ComplexNumberStructure.
- ComplexNumbers as a specialization of NumericSpace alongside RealNumbers. A real
  result can occur in an explicitly complex context; real-number tasks do not acquire
  complex context through ancestry.

The broad NumberTheory definition makes the educational field boundary explicit.
ArithmeticSpaces is clarified toward numerical representation and computation, with its
existing subtree retained. Every added descriptor and the changed Area definitions have
concrete examples. Small wording refinements make input domains, nonzero conditions,
solvability equivalences, and continued-fraction conventions explicit.

### Changes to existing labels and relations

| Descriptor | Source change | Consequence for adoption |
| --- | --- | --- |
| FactorsAndMultiples | Constituent of IntegerDivisibility. | Meaning, eligibility, and existing progression links are retained. |
| PrimeNumbers and CompositeNumbers | Constituents of PrimesAndFactorization. | Existing classification labels remain valid; navigation changes. |
| Factorization | Constituent of PrimesAndFactorization; former constituent children relocated; PrimeFactorization specializes it. | Becomes eligible while retaining integer product-decomposition meaning. PrimeFactorization supports the broader claim; listing factor pairs alone does not automatically do so. |
| DivisibilityRules | Constituent of IntegerDivisibility; OddAndEvenNumbers specializes it. | Becomes eligible. Existing OddAndEvenNumbers labels now support the general divisibility-test claim. |
| OddAndEvenNumbers | Its numeral-based test explicitly excludes performing division, matching its new parent. | IntegerParity is separate knowledge of even/odd structure and behavior; there is no blanket replacement. |
| NumberTheory and ArithmeticSpaces | Definitions clarified at the field level. | Both remain organizational and ineligible for direct content labeling. |
| SetTheory | Unchanged. | Remains eligible; the first draft's proposed eligibility change was not adopted. |

Existing progression and logical-constraint edges are preserved. No new progression
edges are inferred from the university teaching order. The new constituent and
specialization edges express the reviewed subject organization and narrower methods.

The content repository still uses its existing ontology package. Its factor/multiple
generator deliberately excludes Factorization from factor-pair and classification tasks;
making the descriptor eligible is not a reason to remove that safeguard. Dataset
regeneration, label migration, and package updates require a separate adoption pass.

### Verification

The implementation has 965 descriptors and 5,159 authored assertions. The source assessment
and documentation checks pass, along with 131 targeted checks of the approved tree, eligibility,
metadata, unchanged identifiers, and retained progression and constraint assertions.
An independent definition review tightened the OddAndEvenNumbers boundary before validation.

`docker build . --output dist` passed on 2026-10-10: RDF generation, TypeScript generation and
tests, ontology and documentation gates, packed TypeScript consumers, Python lint and typing,
all 49 Python tests, and wheel/source-distribution consumer checks. These validate the ontology
and generated libraries; they do not substitute for the separate content adoption pass.

### Remaining decisions

- DecimalNumbers and FractionNumbers keep their current definitions and ancestry in
  this implementation. The scope-boundary alternatives, finite-decimal consequences,
  and fraction-role implications identified above remain a separate explicit review.
- GreatestCommonDivisor is the implemented canonical name; greatest common factor is
  its school synonym. The grade-06 plan's proposed GreatestCommonFactor name must be
  reconciled when that plan adopts this ontology. Its input-only bounds also remain
  separate Scope work; no limit on the LCM result is implied.
- Negative-input remainder conventions for the existing Modulo concept remain open.
  EuclideanDivision states its own positive-divisor and nonnegative-remainder convention.
- Modular power theorems, quadratic residues/reciprocity, further approximation theory,
  advanced numerical extensions, and the other topics in the reserved university table
  are not authored by this change. The previously deferred complex, linear-algebra, and
  calculus stages remain separate.
- This implementation addresses the identified concept gaps; it does not certify every
  CCSS target. The [remaining core audit](core-ccss-coverage-audit.md) now confirms the
  rational-exponent and other supported compositions and records targeted follow-ups.
  Actual competency examples and consumer adoption still need their own checks.
