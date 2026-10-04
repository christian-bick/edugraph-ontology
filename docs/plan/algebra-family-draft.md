# Algebra family — compositional editor draft

Draft branch: `codex/algebra-family-draft`. Revised 2026-10-05 after the manual simplification.
The authored sources are [Areas](../../core-areas-math.ttl) and [Scopes](../../core-scopes-math.ttl).
This document reflects the manual refinement through `0f277c5` and its definition/example review.

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
| Formal object | AlgebraicExpression, Equation, Inequality, NumericFunction | The object whose properties, relations, or treatment are relevant. |
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
    S ExponentialRewriting
      S CombiningExponentialFactors
      S CommonBaseRewriting
    S LinearRewriting
      S CollectingLinearTerms
      S DistributingLinearCombinations
    S PolynomialDivision
    S QuadraticRewriting
      S ApplyingBinomialIdentities
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
        S LogarithmicFunction
        S NumericSequence
          S ArithmeticSequence
          S GeometricSequence
        S PowerFunction
        S TrigonometricFunction
          S Cosine
          S Sine
          S Tangent
      S OneToOneFunction
      S PiecewiseFunction
      S Sequence
        S NumericSequence [also above]
        S RecursiveSequence
  P AlgebraicLaws
    P BinomialIdentities
    P ExponentLaws
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

## Rewriting families and independent laws

AlgebraicEquivalence is now the shared family for equivalent algebraic forms and their rewriting
on a stated domain. LinearRewriting, QuadraticRewriting, and ExponentialRewriting specialize it. Specific
techniques specialize their applicable family; the laws they use remain independently defined.
AlgebraicLaws contains BinomialIdentities and ExponentLaws; ExponentLaws is also part of
ArithmeticLaws. DistributiveLaw retains its existing placement and serves both linear techniques.

The word "rewriting" distinguishes these procedures from linear maps and from
FunctionTransformation, which produces a translated, reflected, or scaled function.
Rewriting a function's rule preserves its values; transforming the function can change them.

CompletingSquare and ApplyingBinomialIdentities are sibling techniques. Direct
application recognizes an available pattern, such as `u^2 + 2uv + v^2 = (u + v)^2`.
CompletingSquare constructs a suitable square and compensates for the change, as in
`x^2 + 6x + 5 = (x + 3)^2 - 4`. Both use binomial identities; neither procedure is the identity itself.

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

The following combinations illustrate mathematical claims, not mandatory complete annotations.
Choose the most specific justified technique and add only evidenced roles, Scopes, and Abilities.

| Content | Composable claims |
|---|---|
| Rewrite `3x + 2x + 4` as `5x + 4`. | AlgebraicExpression; AffineDependence in `x`; AlgebraicEquivalence; CollectingLinearTerms. |
| Solve `3x + 2x = 15` by collecting terms and dividing by five. | Equation; AffineDependence; EquationSolving; CollectingLinearTerms; SingleVariable. |
| Rewrite `x^2 + 6x + 5` as `(x + 3)^2 - 4`. | AlgebraicExpression; QuadraticDependence; AlgebraicEquivalence; CompletingSquare; SingleVariable. |
| Solve `x^2 + 6x + 5 = 0` by completing the square. | Equation; QuadraticDependence; EquationSolving; CompletingSquare; SingleVariable. |
| Find the minimum of `f(x) = x^2 + 6x + 5` over the reals by completing the square. | NumericFunction; QuadraticDependence; FunctionExtrema; CompletingSquare; SingleVariable. |
| Rewrite `4^x` as `2^(2x)`. | AlgebraicExpression; ExponentialDependence; AlgebraicEquivalence; CommonBaseRewriting. |
| Solve `4^x = 8` by expressing both sides with base two. | Equation; ExponentialDependence; EquationSolving; CommonBaseRewriting; SingleVariable. |

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

The latest manual refinement keeps the compositional approach while reducing organizational
layers. The following current changes need explicit annotation review:

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

The earlier removal of repeated object families still has these adoption consequences:

All mappings are review guidance, not aliases or unconditional automatic replacements.

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

NumericalExpression remains explicit because absence of a Variable annotation does not prove
absence of variables. PiecewiseExpression remains a whole-expression distinction rather than
an inventory of branch-role labels. AlgebraicExpression retains the adopted broad meaning,
including function applications, and excludes explicit analysis constructions.

The user's removals of FunctionApplicationExpression and OperatorArity remain in effect.
FunctionSymbol and FunctionArgument describe distinct formal roles without recreating the
removed whole-expression wrapper. OperandCardinality keeps its existing whole-expression
counting convention; local Operand roles do not redefine that Scope.

Remaining function families, including PiecewiseFunction, OneToOneFunction, Sequence,
PowerFunction, LogarithmicFunction, AbsoluteValueFunction, and TrigonometricFunction, are
retained as the next migration group for review. This draft does not mechanically factor every
function distinction into a new family.
Existing sine, cosine, and tangent meanings still include circular functions and triangle uses.

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
not a mechanical graph error. The fixed-input limit follows the usual
[definition of the derivative](https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative).

Differentiation, antiderivatives, definite integrals, and their rules would compose with the
existing function and dependence concepts without creating a descriptor for every combination.
No new progression relation is inferred from the manual regrouping.

Any adoption must review removed identifiers, changes in specialization ancestry, and narrowed
or broadened meanings. The Grade 6 plan needs reconciliation of provisional labels; Grade 5
numerical tasks remain numerical, with formula substitution reviewed selectively. This branch
does not update the content repository's pinned package, target specifications, or coverage baseline.

## Verification

The 2026-10-05 review tightened six definitions: AlgebraicEquivalence, AlgebraicFunctions,
FunctionBehavior, FunctionSlope, FunctionType, and InstantaneousRateOfChange. In particular,
equivalence now covers equality as well as rewriting, behavior includes range and zeros, and
instantaneous rate fixes the input point and requires an existing finite limit.
Five missing example fields were filled, including AlgebraicConstraints. The examples and
specialization meanings were reviewed against [ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries)
and [ONT-S2](../structure.md#ont-s2--specializes-preserves-the-broader-meaning).

Completed checks:

- The supplied ontology validator passes for all four authored Turtle files.
- All 117 descriptors under Algebra, FormalMathematics, and FunctionBehavior have definitions
  and examples. This review changes only definitions and comments in the source; every
  identifier, graph assertion, and manual removal from `0f277c5` is preserved.
- All three displayed trees match the current structural assertions.
- The supplied documentation validator passes for all 31 tracked Markdown documents and their
  repository links.

The authoritative [Docker gate](../../DOCS.md#43-compiling-via-docker) was attempted again on
2026-10-05 but could not connect to the Docker Desktop Linux engine because its named pipe was
unavailable. Generated-client tests and package builds remain unverified until that gate runs.

Authoring references: [descriptors](../descriptors.md), [structure](../structure.md),
[relations](../relations.md), [content evidence](../content-evidence.md),
[change review](../change-review.md), [annotations and models](../annotations-and-models.md).
