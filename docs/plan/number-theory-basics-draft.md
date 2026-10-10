# NumberTheory basics — family proposal

Status: review draft, 2026-10-10. Based on ontology `origin/main` at `d0d029d`
after the Algebra refinements. The descriptors and edits proposed here are not yet
authored in Turtle. No content labels, generated packages, or consumer versions change
with this document.

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
