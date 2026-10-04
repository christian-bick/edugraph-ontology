# Algebra family — compositional editor draft

Draft branch: `codex/algebra-family-draft`. Revised 2026-10-05 after the redundancy review.
The authored sources are [Areas](../../core-areas-math.ttl) and [Scopes](../../core-scopes-math.ttl).
This document builds on the manual refinement through `0f277c5` and the definition/example
review in `35d3482`, the formal concept definitions in `6d67042`, and the approved consolidation
of laws and numerical sequences.

This draft separates formal objects and roles, shared mathematical dependence, objectives,
and reusable rewriting techniques. Expressions, equations, and functions can involve the same
algebraic knowledge without acquiring parallel polynomial, quadratic, or rational family trees.
AlgebraicFunctions organizes function types and constructions under Algebra. FunctionBehavior
organizes range, monotonicity, extrema, and zeros under Analysis; the slope boundary is discussed below.

## Review in the editor

In the [ontology editor](https://edugraph-editor.web.app), select `codex/algebra-family-draft`,
the Area dimension, and Structure view. Review Algebra with descendants, then FormalMathematics
and Analysis / FunctionBehavior.
Use the visual diff against Main to inspect the complete proposal. The editor reads authored
Turtle from the branch; no package release is needed for this review.

## What is independent

| Aspect | Examples | Meaning |
|---|---|---|
| Formal object | AlgebraicExpression, Equation, Inequality, NumericFunction | Knowledge of the object's defining meaning, properties, or interpretation. |
| Structural role | Variable, Coefficient, Term, FunctionArgument, GroupingSymbol | The role being interpreted or used as mathematical knowledge. |
| Mathematical dependence | AffineDependence, QuadraticDependence, ExponentialDependence | The mathematical relationship in designated variables or quantities. |
| Objective | AlgebraicEquivalence, EquationSolving, FunctionZeros, FunctionExtrema | The mathematical result or relationship sought or explained. |
| Technique | CollectingLinearTerms, CompletingSquare, CommonBaseRewriting | The reusable mathematical procedure required or demonstrated. |
| Law or identity | DistributiveLaw, BinomialIdentities, ExponentLaws | The mathematical knowledge used by a technique. |

These are distinctions among composable Areas, not additional schema dimensions. Ability
continues to describe cognitive performance. Scopes express contextual conditions such as
number systems and the number of designated variables. No fixed annotation template is imposed.

Mathematical dependence and rewriting are deliberately distinct. Recognizing a quadratic
relationship does not require rewriting it. Conversely, rewriting a quadratic pattern inside
a larger expression does not classify the whole expression as quadratic in its original variable.

## Formal concepts and involvement wording

FormalMathematics Areas describe knowledge of mathematical forms and roles. Their definitions
must read naturally after `Involves`, while making clear what the learner interprets or applies.
The role of a coefficient is a concept; a visible coefficient alone is not evidence that this
concept is involved. The same test applies to object kinds, variables, grouping, and notation.
This follows [ONT-D2](../descriptors.md#ont-d2--choose-the-dimension-by-meaning),
[ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries), and
[ONT-D5](../descriptors.md#ont-d5--distinguish-learning-about-notation-from-using-notation).

Definitions therefore identify the meaning, role, or convention being learned instead of merely
describing a symbol present in an exercise. They do not prescribe one cognitive performance:
recognizing, explaining, and applying that concept can involve different Abilities. A definition
also need not repeat a generic "understanding" prefix to establish that its Area denotes knowledge.

| Content evidence | Formal concept claim |
|---|---|
| Explain what the 3 represents in `3x`, including its implied counterpart in `x`. | Coefficient. |
| Calculate `3x + 2` at a supplied value of `x`, without examining the role of 3. | Coefficient is not justified merely by its presence. |
| Explain why `3x + 2` denotes a value while `3x + 2 = 11` asserts equality. | AlgebraicExpression and Equation. |
| Solve an equation using a supplied procedure. | EquationSolving may be evidenced without a separate claim about the formal concept of Equation. |

Scopes continue to state contextual conditions. SingleVariable can describe a task's variable
count; Variable concerns the meaning and role of a variable. Keeping these claims distinct avoids
both turning formal Areas into syntax filters and duplicating them as Scopes.

## Authored structure

`P` means the child is `partOf` its parent; `S` means it `specializes` its parent. Repeated
nodes indicate multiple parents of the same identifier. The trees below are generated from
current source assertions; progression relations are discussed separately.

<!-- BEGIN AUTHORED ALGEBRA TREE -->
```text
Algebra
  P AlgebraicConstraints
    P ConstraintSystem
      S SystemOfEquations
    P EquationSolving
    P FormulaRearrangement
    P QuadraticFormula
    P RelationEquivalence
    P RelationSatisfaction
    P SolutionSet
    P SystemElimination
    P SystemSubstitution
  P AlgebraicDependence
    S ExponentialDependence
    S PolynomialDependence
      S AffineDependence
        S DirectProportionalDependence
      S QuadraticDependence
    S RationalDependence
  P AlgebraicEquivalence
    S AssociativeLaw
    S CommutativeLaw
    S DistributiveLaw
    S ExponentialRewriting
      S CombiningExponentialFactors
      S CommonBaseRewriting
    S ExponentLaws
    S LinearRewriting
      S CollectingLinearTerms
      S DistributingLinearCombinations
    S PolynomialDivision
    S QuadraticRewriting
      S BinomialIdentities
      S CompletingSquare
  P AlgebraicFunctions
    P FunctionComposition
    P FunctionDomain
    P FunctionInversion
    P FunctionNotation
    P FunctionSlope
      P AverageRateOfChange
      P InstantaneousRateOfChange
    P FunctionTransformation
    P FunctionType
      S NumericFunction
        S AbsoluteValueFunction
        S ArithmeticSequence
        S GeometricSequence
        S LogarithmicFunction
        S PowerFunction
        S TrigonometricFunction
          S Cosine
          S Sine
          S Tangent
      S OneToOneFunction
      S PiecewiseFunction
      S Sequence
        S ArithmeticSequence [also above]
        S GeometricSequence [also above]
        S RecursiveSequence
  P AlgebraicModeling
  P AlgebraicSubstitution
```
<!-- END AUTHORED ALGEBRA TREE -->

The focused formal branch omits unrelated constituents of FormalMathematics.

<!-- BEGIN AUTHORED EXPRESSION TREE -->
```text
FormalMathematics
  P ExpressionStructure
    P BranchCondition
    P ConditionalBranch
    P Constant
    P ExpressionIndex
    P Factor
      S Coefficient
    P GroupingSymbol
    P Operand
      S Dividend
        S Numerator
      S Divisor
        S Denominator
      S Exponent
      S FunctionArgument
      S Minuend
      S PowerBase
      S Radicand
      S Subtrahend
    P Operator
      S BinaryOperator
      S FunctionSymbol
      S UnaryOperator
    P OrderOfOperations
    P RootIndex
    P Subexpression
    P Term
      S ConstantTerm
    P Variable
      S BoundVariable
      S FreeVariable
      S GeneralizedVariable
      S Parameter
      S UnknownVariable
      S VaryingVariable
  P MathematicalExpression
    S AlgebraicExpression
      S NumericalExpression
    S PiecewiseExpression
  P MathematicalStatement
    S Equation
    S Inequality
```
<!-- END AUTHORED EXPRESSION TREE -->

The focused analysis branch records the function properties moved by the manual refinement.

<!-- BEGIN AUTHORED ANALYSIS TREE -->
```text
Analysis
  P FunctionBehavior
    P FunctionExtrema
    P FunctionMonotonicity
    P FunctionRange
    P FunctionZeros
```
<!-- END AUTHORED ANALYSIS TREE -->

## Dependence across object kinds

AlgebraicDependence organizes its narrower meanings by specialization. PolynomialDependence
includes constant and zero dependence. AffineDependence permits total degree at most one;
QuadraticDependence requires total degree exactly two after collecting terms in the designated
variables. DirectProportionalDependence is the zero-offset affine case, including zero scale.
The mathematical conditions belong in each definition rather than in an expression/function name.

Apply a dependence claim to an identifiable subject:

| Subject | Interpretation |
|---|---|
| Expression | Its dependence on the designated variables, after the simplification permitted by the family definition. |
| Equation or inequality studied as a constraint | The dependence of the simplified difference between its two sides, retaining the original relation and admissible domain. |
| Function or explicit input-output rule | Its stated output expression in the designated inputs, on its stated domain. |
| Simultaneous system | Every member constraint must qualify through its residual in the same designated variables. |

For inequalities, the residual does not erase the comparison direction: `L < R` corresponds
to `L - R < 0`. Merely multiplying by an expression of unknown sign is not an equivalent step.
For systems, one affine member does not establish that every member is affine.
DirectProportionalDependence concerns designated input-output roles. In `y = kx`, choosing
`x` as input and `y` as output supports that claim; the residual `y - kx` is affine but does
not by itself identify those roles. The same distinction lets an explicit rule `y = 2^x`
describe exponential dependence in its input without treating its output as a fixed parameter.

A displayed coefficient symbol may be a fixed parameter rather than a designated variable.
Thus `ax + b` is affine in `x` with fixed `a, b`, whereas `ax` has total degree two when both
`a` and `x` vary. The SingleVariable Scope counts designated variables; it does not count all
letters or require that fixed parameters disappear from the notation. A constant function
`f(x) = 5` still has the designated input `x`; its variable count does not become zero.
VariableCardinality
sits under ExpressionComplexity; SingleVariable specializes that shared Scope.

Rational dependence preserves exclusions from original denominators through cancellation.
A polynomial-looking simplified rule does not restore a previously excluded input. Function
classification follows the stated rule and domain, not a fitted formula guessed from a few points.
The draft does not assert that every polynomial presentation specializes rational dependence.

Flat descriptor sets still express co-occurring claims. They do not bind a particular family
to a particular expression, equation, or function in a compound task. Separate competency
claims where that association matters: a linear equation beside a quadratic function must not
be interpreted as a quadratic equation merely because their labels share one record.
These conventions add no object-binding schema, automatic normalizer, or matching rule.

## Equivalence, laws, and rewriting techniques

AlgebraicEquivalence is the shared family for equivalent algebraic forms and their rewriting
on a stated domain. LinearRewriting, QuadraticRewriting, and ExponentialRewriting specialize it.
BinomialIdentities specializes QuadraticRewriting, whose meaning includes equivalent quadratic
forms as well as transformations between them. The same three binomial identities can be
recognized, explained, or applied; those performances do not require a separate application Area.

AssociativeLaw, CommutativeLaw, DistributiveLaw, and ExponentLaws specialize AlgebraicEquivalence
and remain constituents of ArithmeticLaws. Their mathematical meaning is shared across numerical
and symbolic work. Distributivity also covers products beyond independent-scalar linear patterns;
exponent laws also cover fixed exponents and variable bases, as in `(x^2)^3 = x^6`. Neither law
is restricted to the narrower corresponding rewriting family. OrderOfOperations remains a
notation convention, and RulesOfSigns concerns determining signs; their existing placements remain.

The word "rewriting" distinguishes these procedures from linear maps and from
FunctionTransformation, which produces a translated, reflected, or scaled function.
Rewriting a function's rule preserves its values; transforming the function can change them.

CompletingSquare remains a distinct technique alongside BinomialIdentities. Applying a binomial
identity directly matches a pattern such as `u^2 + 2uv + v^2 = (u + v)^2`. CompletingSquare
constructs a suitable square and compensates for the change, as in
`x^2 + 6x + 5 = (x + 3)^2 - 4`; it retains its integration of BinomialIdentities.
CollectingLinearTerms, DistributingLinearCombinations, CommonBaseRewriting, and
CombiningExponentialFactors also remain distinct techniques because their steps or applicability
add meaning beyond generic application of a law.

Quadratic patterns may occur in composite quantities: `(x^3 + 2)^2` can be expanded using the
square-of-a-sum identity. It is quadratic in the selected quantity `x^3`, not in `x`.
Similarly, combining `3 sin(x) + 2 sin(x)` is linear rewriting in the repeated quantity `sin(x)`.
A task can therefore support a rewriting claim without the corresponding dependence claim
about the complete expression in its original variables.

CommonBaseRewriting converts to a common base; CombiningExponentialFactors combines or
separates exponential factors under the stated exponent laws. These laws also apply outside exponential
dependence. In particular, a variable base raised to a constant power is not automatically
exponential dependence in that variable.
Static ExponentialDependence uses one designated variable: `2^(x^2)` is not exponential in
`x` under its definition, even though its exponent can participate in exponential rewriting.

PolynomialDivision specializes AlgebraicEquivalence through its
dividend-equals-divisor-times-quotient-plus-remainder decomposition. ExpressionFactorization and
PolynomialFactorization have been removed. Factoring a matching binomial identity or extracting
a common factor from a linear combination can still use the corresponding specific technique.
General product-form rewriting has no exact replacement: AlgebraicEquivalence does not itself
require a product, and PolynomialDependence does not require polynomial factors over a specified
coefficient domain. Review those learning claims separately before migrating factorization labels.

An `integrates` edge records the law used in constructing or applying the technique. It does
not make every task involving the technique an independently evidenced law-understanding task,
and it does not establish a universal teaching sequence (ONT-R3, ONT-R4).

## Worked compositions

The following combinations illustrate supported knowledge and procedures, not mandatory complete
annotations. Formal object and dependence claims require evidence that their meaning is being
interpreted or applied; the mere presence of an equation, function rule, or quadratic-looking
expression does not supply that evidence. Add only justified Scopes and Abilities, and use
specialization to derive broader claims rather than requiring their repeated serialization.

| Content | Composable claims |
|---|---|
| Explain why `3x + 2` denotes a value and `3x + 2 = 11` asserts equality. | AlgebraicExpression; Equation. |
| Explain why `x^2 + 6x + 5` has quadratic dependence on `x`. | QuadraticDependence. |
| Rewrite `3x + 2x + 4` as `5x + 4` by combining like terms. | CollectingLinearTerms. |
| Solve `3x + 2x = 15` by collecting terms and dividing by five. | EquationSolving; CollectingLinearTerms; SingleVariable. |
| Rewrite `x^2 + 6x + 5` as `(x + 3)^2 - 4` by completing the square. | CompletingSquare; SingleVariable. |
| Solve `x^2 + 6x + 5 = 0` by completing the square. | EquationSolving; CompletingSquare; SingleVariable. |
| Find the minimum of `f(x) = x^2 + 6x + 5` over the reals by completing the square. | FunctionExtrema; CompletingSquare; SingleVariable. |
| Rewrite `4^x` as `2^(2x)` by changing to base two. | CommonBaseRewriting. |
| Solve `4^x = 8` by expressing both sides with base two. | EquationSolving; CommonBaseRewriting; SingleVariable. |

These examples do not exclude additional supported claims. A worked solution explaining the
function's quadratic dependence can establish that knowledge as well as CompletingSquare.
Conversely, a rewriting pattern in a selected subexpression does not automatically classify the
entire expression's dependence on its original variables.

EquationSolving describes determining admissible assignments. FormulaRearrangement preserves
its narrower objective of isolating a chosen quantity in a relation among quantities. A worked
solution may combine both, but a formula rearrangement is not a replacement for solution-set
reasoning, candidate checks, or an explanation that there are no solutions.

## Boundaries to review

| Evidence | Required distinction |
|---|---|
| `(x + 1)(x - 1)` | Quadratic dependence does not require a displayed exponent two. |
| `x^2 - x^2 + x` | Its simplified dependence in `x` is affine. Displayed notation alone does not establish quadratic dependence. |
| `x^3 + x^2 = x^3 + 1` | The equation's residual is quadratic even though its displayed sides are cubic. |
| `x^2 + x = x^2 + 1` | The residual is affine; cancellation is treated consistently across degree families. |
| `2x + 1 = 2x + 1` and `2x + 1 = 2x + 3` | Constant and zero residuals are included in AffineDependence; solutions may be all admissible values or none. |
| `(x^2 - 1)/(x - 1)` | Cancellation leaves the original restriction `x != 1`. |
| `2^x` and `x^2` | Variable exponent with fixed suitable base and fixed exponent with variable base express different dependence. |
| `sin(1)` and `sin(x)` | Both are AlgebraicExpression in the adopted broad sense; only the first is NumericalExpression. |
| `{ -x if x < 0; x if x >= 0 }` | PiecewiseExpression concerns the complete conditional form, including agreement and coverage of its admissible inputs. |
| `3 - x` | The signed term is `-x`; the explicit subtraction input is `x`. |
| `-x` | Its coefficient `-1` is implicit, while the unary-minus operand is explicitly `x`. |

## Migration and effects of simplification

The manual refinement and subsequent redundancy review keep the compositional approach while
reducing organizational layers and application wrappers. The following changes need explicit
annotation review:

| Previous descriptor or placement | Current treatment |
|---|---|
| ExpressionReasoning / AlgebraicRewriting / ExpressionEquivalence | AlgebraicEquivalence directly under Algebra, with the rewriting families as specializations. The removed organizational field is not an alias for a direct claim. |
| Substitution | AlgebraicSubstitution directly under Algebra; the binding and admissible-value conditions remain. |
| ExpressionFactorization / PolynomialFactorization | Removed without an exact generic replacement; use an evidenced retained technique where available and retain the product-form requirement in the task description. |
| FunctionsAndRelations | AlgebraicFunctions organizes function types and constructions. |
| Function | FunctionType retains the unique-output correspondence meaning, independently of representation; its specializing families remain. |
| BinaryRelation | Removed; arbitrary relations that are not functions have no equivalent function label. |
| FunctionRange / FunctionMonotonicity / FunctionExtrema / FunctionZeros | Moved under FunctionBehavior in Analysis; their own meanings remain independent of the method used. |
| AverageRateOfChange | Moved under FunctionSlope alongside the new InstantaneousRateOfChange. FunctionSlope is organizational because both children use partOf. |
| ApplyingBinomialIdentities | Removed in favor of BinomialIdentities under QuadraticRewriting; retain an evidenced Ability to distinguish recognizing, explaining, and applying the identities. |
| AlgebraicLaws | Removed after its laws moved into the AlgebraicEquivalence specialization family. The former organizer is not an annotation alias for that broader concept. |
| AssociativeLaw / CommutativeLaw / DistributiveLaw / ExponentLaws | Now specialize AlgebraicEquivalence while retaining their constituent placement under ArithmeticLaws. Their existing arithmetic uses and incoming progression relations remain. |
| NumericSequence | Removed; review Sequence and NumericFunction together for the same studied sequence. ArithmeticSequence and GeometricSequence now specialize both directly. |

The earlier removal of repeated object families still has these adoption consequences:

All mappings are review guidance, not aliases or unconditional automatic replacements. Object
and role claims require exercised concept knowledge. In particular, Sequence plus NumericFunction
can refer to different objects in one compound task; their co-occurrence alone cannot bind them
to one numerical sequence. Review the subject of the original NumericSequence claim.

| Removed family | Replacement claims to review |
|---|---|
| VariableExpression | AlgebraicExpression and the relevant Variable role, when role knowledge is supported. Mere variable presence does not force a separate role claim. |
| GroupedExpression | MathematicalExpression or AlgebraicExpression with GroupingSymbol and OrderOfOperations only when those concepts are evidenced. |
| PolynomialExpression / AffineExpression / QuadraticExpression | AlgebraicExpression with PolynomialDependence / AffineDependence / QuadraticDependence in the designated variables. |
| RationalExpression | AlgebraicExpression with RationalDependence and preserved denominator restrictions. |
| PolynomialEquation / LinearEquation / QuadraticEquation / RationalEquation | Equation with the applicable dependence of its residual; review the previous one-variable restriction on quadratic equations. |
| LinearInequality | Inequality with AffineDependence, preserving comparison direction and domain. |
| LinearEquationSystem | SystemOfEquations with AffineDependence supported for the system's member constraints. |
| PolynomialFunction / AffineFunction / QuadraticFunction / RationalFunction | NumericFunction with the applicable dependence, stated rule and domain, and SingleVariable where preserving the previous input restriction. |
| DirectProportionalFunction | NumericFunction with DirectProportionalDependence and the stated input/domain conditions. |
| ExponentialFunction | NumericFunction with ExponentialDependence and its defining base, coefficient, variable, and domain conditions. |

These mappings change some classification boundaries. Polynomial and affine constraint claims
use simplified residuals consistently, so cancellation can admit nonpolynomial or nonlinear
displayed sides without erasing their original domains. The former RationalEquation required
a variable-dependent displayed denominator; Equation with RationalDependence does not carry
that extra restriction automatically. A system-wide family claim requires every member to
qualify; the same unbound labels can otherwise describe knowledge about one member of a mixed
system. Preserve those distinctions through contextual review rather than automatic aliases.

NumericalExpression describes knowledge of variable-free expression forms and their meaning.
The absence of variables is its defining boundary, not sufficient evidence for applying the
Area; omission of a Variable annotation cannot establish that absence either.
PiecewiseExpression remains a whole-expression distinction rather than
an inventory of branch-role labels. AlgebraicExpression retains the adopted broad meaning,
including function applications, and excludes explicit analysis constructions.

The user's removals of FunctionApplicationExpression and OperatorArity remain in effect.
FunctionSymbol and FunctionArgument describe distinct formal roles without recreating the
removed whole-expression wrapper. OperandCardinality keeps its existing whole-expression
counting convention; local Operand roles do not redefine that Scope.

Remaining function families, including PiecewiseFunction, OneToOneFunction, Sequence,
PowerFunction, LogarithmicFunction, AbsoluteValueFunction, and TrigonometricFunction, are
retained for discussion. Shared power, logarithmic, or absolute-value dependence might extend
the compositional approach, but there is no approved replacement for these function concepts.
Existing sine, cosine, and tangent meanings still include circular functions and triangle uses.

Operations and function types also need an explicit comparison before consolidation.
Exponentiation concerns raising a number to a power; PowerFunction concerns dependence on a
variable input with a fixed exponent. Logarithm concerns recovering an exponent, whereas a
LogarithmicFunction describes a function's rule and domain. AbsoluteNumberMagnitude belongs to
NumberSense and currently concerns rational numbers; AbsoluteValueFunction has a real domain
and permits translated and scaled rules. These differences preclude direct identifier aliases.

The specific precision findings concerning OperandCardinality, IntegerNotation, and SignNotation
are reserved for the final review. This consolidation does not resolve those definitions or
change their boundaries.

## Adoption and the boundary with analysis

Organizational parents with constituent children remain ineligible for direct labeling.
The dependence and rewriting families have specializing children and remain eligible at the
most specific level supported by content. Variable and the other structural roles do not
inherit MathematicalExpression merely because they occur inside an expression.

The shared family approach makes polynomial or exponential knowledge available when analysis
concepts are composed with it. The manual refinement moves FunctionBehavior to Analysis, but
its constituents still admit algebraic methods: finding a minimum by completing the square does
not imply differentiation. Their organizational placement does not add an Analysis annotation
or change their mathematical definitions.

InstantaneousRateOfChange introduces an explicit limit concept under FunctionSlope, which is
currently under AlgebraicFunctions. This conflicts with the earlier strict cut in the Algebra
definition, which assigns limits and differentiation to analysis. The review preserves the
manual structure; the placement or stated boundary needs an explicit decision rather than
quietly treating instantaneous rate as a non-calculus concept. AverageRateOfChange remains a
finite difference quotient and does not require a limiting argument.
This is a meaning and placement decision under [ONT-W2](../change-review.md#ont-w2--review-definitions-relations-and-effects-together),
not a mechanical graph error. The user has retained this question for separate review; this
consolidation leaves it unchanged. The fixed-input limit follows the usual
[definition of the derivative](https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative).

Differentiation, antiderivatives, definite integrals, and their rules would compose with the
existing function and dependence concepts without creating a descriptor for every combination.
No new progression relation is inferred from the manual regrouping.

Any adoption must review removed identifiers, changes in specialization ancestry, and narrowed
or broadened meanings. The Grade 6 plan needs reconciliation of provisional labels; Grade 5
numerical tasks remain numerical, with formula substitution reviewed selectively. This branch
does not update the content repository's pinned package, target specifications, or coverage baseline.

## Verification

The earlier 2026-10-05 review in `35d3482` tightened six definitions: AlgebraicEquivalence, AlgebraicFunctions,
FunctionBehavior, FunctionSlope, FunctionType, and InstantaneousRateOfChange. In particular,
equivalence now covers equality as well as rewriting, behavior includes range and zeros, and
instantaneous rate fixes the input point and requires an existing finite limit.
Five missing example fields were filled, including AlgebraicConstraints. The examples and
specialization meanings were reviewed against [ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries)
and [ONT-S2](../structure.md#ont-s2--specializes-preserves-the-broader-meaning).

The current revision first updated definitions and examples for 42 formal descriptors in
`6d67042`, preserving their graph assertions. It then consolidated laws within equivalence,
broadened QuadraticRewriting to include equivalent forms, and removed AlgebraicLaws,
ApplyingBinomialIdentities, and NumericSequence with the migration guidance above.

Completed checks for this revision:

- The supplied ontology validator passes for all four authored Turtle files.
- The graph difference from `35d3482` matches exactly the approved law and sequence changes;
  no other identifiers or graph assertions changed.
- The 117 descriptors under Algebra, FormalMathematics, and FunctionBehavior all have
  definitions and examples. The affected definitions, examples, and specialization meanings
  were reviewed against ONT-D4 and ONT-S2.
- All three displayed trees match the current structural assertions, and the supplied
  documentation validator passes for all 31 tracked Markdown documents and their repository links.
- PowerFunction, LogarithmicFunction, AbsoluteValueFunction, InstantaneousRateOfChange,
  IntegerNotation, and SignNotation remain unchanged. The Scope, Ability, and schema sources
  are unchanged as well.

The authoritative [Docker gate](../../DOCS.md#43-compiling-via-docker) was attempted again on
2026-10-05 but could not connect to the Docker Desktop Linux engine because its named pipe was
unavailable. Generated-client tests and package builds remain unverified until that gate runs.

Authoring references: [descriptors](../descriptors.md), [structure](../structure.md),
[relations](../relations.md), [content evidence](../content-evidence.md),
[change review](../change-review.md), [annotations and models](../annotations-and-models.md).
