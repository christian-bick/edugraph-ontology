# Algebra family — editor review draft

Draft branch: `codex/algebra-family-draft`. Prepared 2026-10-04 from `main` at `1119ac6`.
The authored changes are in [core-areas-math.ttl](../../core-areas-math.ttl).

This draft adopts a combination of reusable mathematical concepts and selected object
specializations. **Functions and relations are constituents of Algebra.** Analysis remains
a separate field: limits, continuity, differentiation, integration, and convergence are not
added to this tree. Function properties that can be studied through algebra, finite values,
or graphs remain available without requiring calculus.

## Review in the editor

In the [ontology editor](https://edugraph-editor.web.app), refresh the branch list and select
`codex/algebra-family-draft`. Select the Area dimension, Structure view, and Algebra; include
descendants to see the complete family. Visual diff against Main shows the proposed changes.
The editor reads the branch's authored Turtle files; a package release is not required.
For the shared expression family, select FormalMathematics and then MathematicalExpression.
ExpressionStructure is a sibling constituent of FormalMathematics; select it to review the
formal roles of constants, variables, operators, and expression components.

## Shape of the draft

The draft adds 98 Areas, revises Algebra's definition to cover the adopted function/relationship
scope, and adds function-specialization links to the existing Sine, Cosine, and Tangent Areas.
Their definitions now cover circular functions; acute-triangle ratios remain concrete examples.
No Scope or Ability identifiers are changed.

In the following tree, `P` means the child is `partOf` its parent, and `S` means the child
`specializes` its parent. Repeated nodes mark multiple inheritance, not duplicate identifiers.
The expression family is shared under FormalMathematics rather than repeated as an Algebra
constituent. PolynomialEquation and RationalEquation still specialize Equation;
LinearInequality specializes Inequality. These additional parents are visible in the editor's
relation details.

<!-- BEGIN AUTHORED ALGEBRA TREE -->
```text
Algebra
  P AlgebraicConstraints
    P ConstraintSystem
      S SystemOfEquations
        S LinearEquationSystem
    P FormulaRearrangement
    P LinearInequality
    P PolynomialEquation
      S LinearEquation
      S QuadraticEquation
    P QuadraticFormula
    P RationalEquation
    P RelationEquivalence
    P RelationSatisfaction
    P SolutionSet
    P SystemElimination
    P SystemSubstitution
  P AlgebraicModeling
  P ExpressionReasoning
    P CompletingSquare
    P ExpressionEquivalence
    P ExpressionFactorization
      S PolynomialFactorization
    P PolynomialDivision
    P Substitution
  P FunctionsAndRelations
    P AverageRateOfChange
    P BinaryRelation
      S Function
        S NumericFunction
          S AbsoluteValueFunction
          S ExponentialFunction
          S LogarithmicFunction
          S NumericSequence
            S ArithmeticSequence
            S GeometricSequence
          S PolynomialFunction
            S AffineFunction
              S DirectProportionalFunction
            S QuadraticFunction
          S PowerFunction
          S RationalFunction
          S TrigonometricFunction
            S Cosine
            S Sine
            S Tangent
        S OneToOneFunction
        S PiecewiseFunction
        S Sequence
          S NumericSequence [also above]
          S RecursiveSequence
    P FunctionComposition
    P FunctionDomain
    P FunctionExtrema
    P FunctionInversion
    P FunctionMonotonicity
    P FunctionNotation
    P FunctionRange
    P FunctionTransformation
    P FunctionZeros
```
<!-- END AUTHORED ALGEBRA TREE -->

The focused FormalMathematics branch below omits its unrelated existing constituents.

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
    P OperatorArity
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
      S FunctionApplicationExpression
      S NumericalExpression
      S PolynomialExpression
        S AffineExpression
        S QuadraticExpression
      S RationalExpression
      S VariableExpression
    S GroupedExpression
    S PiecewiseExpression
```
<!-- END AUTHORED EXPRESSION TREE -->

VariablesAndExpressions has been removed. Its expression forms already specialized
MathematicalExpression; their redundant constituent edges are removed. The manual refinement
places Variable as a constituent of ExpressionStructure. Unknown, generalized, varying, and
parameter roles retain their specializations beneath Variable. NumericalExpression,
VariableExpression, FunctionApplicationExpression, PolynomialExpression, and RationalExpression
specialize AlgebraicExpression. GroupedExpression and PiecewiseExpression retain their general
placement directly under MathematicalExpression; their construction can also contain analysis
expressions. Their algebraic instances can support both classifications.

ExpressionStructure is the exception: knowledge of terms, factors, coefficients, and nesting
is not itself a value-denoting expression. It is a sibling constituent under FormalMathematics.
Adding it as a constituent of MathematicalExpression would mix child roles and make that
existing expression-family label ineligible (ONT-S5, ONT-E7).

AlgebraicExpression uses the adopted broad curricular meaning, including numerical calculations,
variable powers, trigonometric and other function applications, and conditional branches.
It does not retain the earlier restriction to arithmetic operations and fixed rational powers.
Explicit limits, derivatives, integrals, and infinite sums or products remain outside this
family. MathematicalExpression remains the general parent available to those later forms.
The expression definitions also distinguish outer assertions from embedded conditions, require
unambiguous piecewise values, and preserve denominator exclusions. All 65 Areas in the complete
FormalMathematics subtree have illustrative comments.

The specialization families overlap: `sin(1)` is both NumericalExpression and
FunctionApplicationExpression; `sin(x)` is both VariableExpression and
FunctionApplicationExpression. Each supports AlgebraicExpression through inheritance.
FunctionApplicationExpression describes an expression applying a function; Function describes
the mapping itself, and FunctionNotation concerns the conventions for writing it. Neither
function application nor numerical calculation alone establishes a variable-reasoning claim.

The main organizers use only constituent children. Observable object families use only
specializing children. Methods and features sit beside those object families, preserving
every path's composition-before-specialization order (ONT-S4, ONT-S5).

## Formal roles in ExpressionStructure

This extension adds 29 Areas for the primitives and component roles used in school algebra.
ExpressionStructure organizes them through `partOf`; narrower roles use `specializes`.
All role descriptors remain eligible for direct labels. None becomes a constituent of an
expression-form specialization, and no role inherits a computational Area merely because
its notation is used in a calculation (ONT-D2, ONT-D5, ONT-S2, ONT-S4, ONT-E7).

| Family | Included roles | Boundary |
|---|---|---|
| Fixed and variable values | Constant; existing Variable roles plus FreeVariable and BoundVariable | A constant is a literal or designated name fixed in the stated context. Free/bound concerns an occurrence within a selected expression; a fixed parameter and a constant role can overlap without making every Variable a Constant. |
| Additive and multiplicative components | Term, ConstantTerm, Factor, Coefficient | Terms include their additive signs and respect the selected grouping level. Factors and coefficients may be implicit. A constant term may be compound, so it does not specialize the atomic Constant role. |
| Explicit components and inputs | Subexpression, Operand; FunctionArgument, Minuend, Subtrahend, Dividend, Divisor, PowerBase, Exponent, Radicand | Operand refers to an explicit local input, which may itself be a compound expression. Subexpression remains a separate complete-component role. |
| Fraction and radical positions | Numerator specializes Dividend; Denominator specializes Divisor; RootIndex is separate | Numerator and denominator are formal positions, distinct from interpreting fractions as parts of a whole. RootIndex includes the implicit two in a square root, so it does not specialize explicit Operand. |
| Operations and applied functions | Operator; UnaryOperator, BinaryOperator, FunctionSymbol; OperatorArity | Operators include conventional implicit multiplication and named function heads. Arity belongs to a specified application and notation; it does not count all leaves in a nested expression. |
| Grouping, indexing, and cases | GroupingSymbol, ExpressionIndex, ConditionalBranch, BranchCondition; shared OrderOfOperations | Grouping identifies extent, an index selects a family member, and a branch condition selects when a value expression applies. These roles do not by themselves establish numerical evaluation. |

Operator describes the formal role of an operation or function head. FunctionSymbol specializes
it because `f` in `f(x)` occupies that role; it does not specialize Function, which describes
the mapping. FunctionArgument identifies the input component, while FunctionApplicationExpression
describes the whole applied expression. Existing FunctionNotation remains the knowledge of the
notation's conventions and retains its current eligibility and placement.

Existing OrderOfOperations is shared with ExpressionStructure while retaining its ArithmeticLaws
placement. Its definition now states precedence and prescribed grouping directly, without
requiring numerical evaluation. This is different from AssociativeLaw: parsing `a - b - c`
as `(a - b) - c` does not assert that subtraction is associative. GroupedExpression now admits
grouping that reinforces the default precedence as well as grouping that overrides it.

The primitive set does not duplicate Addition, Multiplication, Factorization, or other
mathematical activities as operator-specific wrappers. Existing exponent Scopes still describe
the exponent's number context; Exponent identifies its structural position. NumberNotation,
SignNotation, and FractionNotation retain their own notation-learning meanings.

### Contrastive checks

| Written context | Supported structural distinction |
|---|---|
| `3x + 5` | `3` is a Constant, Factor, Coefficient, and explicit Operand; `5` is a ConstantTerm. These claims describe different roles. |
| `3 - x` | The signed terms are `3` and `-x`; the subtraction inputs are `3` and `x`. Term therefore does not specialize Operand or Subexpression. |
| `-x` | The coefficient `-1` is implicit; the explicit operand of the unary minus is `x`. Factor and Coefficient do not inherit explicit-operand claims. |
| `f(x + 1)` | `f` is FunctionSymbol; `x + 1` is FunctionArgument and Operand. The outer application has arity one; the inner addition has two inputs. |
| `(a + b)/(c - d)` | The numerator and denominator are the two local division operands; each is also a compound subexpression. |
| `sqrt(x)` | `x` is Radicand; the RootIndex is implicitly two. An implicit index is not an additional explicit operand. |
| `x + sum_(x=1)^4 x` | The first occurrence of `x` is free and the summation occurrences are bound within the complete expression. Binding roles concern occurrences, not a permanent property of a letter. |
| `a_n` and `a^n` | The first `n` is ExpressionIndex; the second is Exponent. Their written positions carry different roles. |

Scope.OperandCardinality keeps its existing convention of counting explicit operand occurrences
across the complete expression. In `(a + b)/(c - d)`, its four leaf occurrences are distinct from
the two local division operands and the arity of that division. This extension does not change
that Scope or infer its count from the number of Operand annotations.

The role boundaries cover the expression-part reasoning in
[CCSS 6.EE.A.2b](https://www.thecorestandards.org/Math/Content/EE/) and the later
[structure-of-expressions standards](https://www.thecorestandards.org/Math/Content/HSA/SSE/).
The distinction between application heads, arguments, and local arity is also consistent with
the [MathML content application model](https://www.w3.org/TR/MathML3/chapter4.html#contm.apply).
These references motivate the educational and formal distinctions; the ontology's role
definitions and relations remain its own authoring decisions.

## Definitions worth reviewing

| Decision | Meaning in this draft | Contrasting evidence |
|---|---|---|
| Variable roles | Unknown, generalized, varying, and parameter roles specialize Variable; they need not be mutually exclusive. | A fixed parameter in one function can be an unknown when fitting that function. A unit abbreviation does not establish a variable. |
| Shared expression family | Variable and its roles describe structural components; their labels do not inherit expression labels. Numerical, variable, function-application, polynomial, and rational expressions specialize AlgebraicExpression. | A numerically specified constant polynomial need not contain a variable. ExpressionStructure describes organization, not a value-denoting expression. |
| VariableExpression | An algebraic expression containing a variable, including exponential and trigonometric expressions. | A numerical calculation has no variable; an equation is a statement rather than an expression. |
| NumericalExpression | An algebraic expression containing numerical values and operations or function applications, without variables or relational operators. | `5`, `5 + 5`, and `sin(1)` qualify; `sin(x)` has a variable. |
| AlgebraicExpression | The broad family of expressions used in algebra, including constants, arithmetic, function applications, and conditional branches, with explicit analysis constructions excluded. | `2^x` and `sin(x)` qualify; an explicit derivative or integral does not. |
| FunctionApplicationExpression | An algebraic expression written as a function applied to arguments. | `sin(x)`, `sin(1)`, and `f(x + 1)` qualify; a bare function name denotes the function rather than its application. |
| PiecewiseExpression | Conditional branches give one defined value at each admissible assignment; applicable branches agree on overlaps. | Embedded `x < 0` conditions are allowed. Branches giving different values at the same admitted input do not define an unambiguous expression. |
| Polynomial forms | Constants and zero are included; degree is relative to designated variables. | `p(x) = a` is constant in x while containing a parameter. A quadratic template with zero leading coefficient is no longer quadratic. |
| Rational forms | A written quotient and its original denominator exclusions remain part of the meaning. | Canceling x - 1 does not restore the excluded input in `(x^2 - 1)/(x - 1)`. Polynomial-to-rational specialization is not asserted. |
| Equivalence and solutions | ExpressionEquivalence concerns values over a shared domain; RelationEquivalence concerns solution sets. | One successful substitution establishes satisfaction, not a complete solution set or universal identity. |
| Linear equations | Both sides are affine in the designated variables; identities and contradictions remain included. | `2x + 1 = 2x + 1` has all real solutions; `2x + 1 = 2x + 3` has none. Arbitrary canceled nonlinear sides are not classified as linear. |
| Systems | Constraints must hold for the same assignment. A system specializes a system concept, not a single Equation. | Two unrelated equations on one worksheet are not a simultaneous system. |
| Methods | SystemSubstitution, SystemElimination, CompletingSquare, QuadraticFormula, and FormulaRearrangement describe distinct mathematics. | Substituting a candidate into one equation is different from eliminating a variable through system substitution. |
| Factorization | ExpressionFactorization and PolynomialFactorization describe product structure beyond integer factorization. | Factoring a quadratic across a coefficient field is not covered by the existing integer Factorization family. Simple reverse distribution may still use DistributiveLaw. |
| Modeling | AlgebraicModeling requires selecting quantities and representing their relationship and admissible values. | Evaluating a supplied formula in a story does not itself elicit constructing a model. |
| Functionhood | Function specializes BinaryRelation through unique output for each input. Nonnumeric mappings are included. | A circle relation is not a function of the horizontal coordinate. A finite mapping need not have a symbolic formula. |
| Affine and proportional | AffineFunction includes constant functions and the zero-intercept case. DirectProportionalFunction includes zero scale. | CCSS uses “linear” for the affine family; a specific ratio task may still require a nonzero factor. |
| Function constructions | Composition, inversion, and transformation retain domains; domain/range and features are separate concepts. | An inverse function requires a one-to-one correspondence or a suitable domain restriction. |
| Sequences | A sequence is a function on consecutive integer indices with a first index. NumericSequence has both numeric-function and sequence ancestry. | A geometric sequence may have negative or zero ratio, so it does not automatically specialize ExponentialFunction. |
| Trigonometric bridge | Existing Sine, Cosine, and Tangent retain their geometric placement, gain circular-function definitions, and additionally specialize TrigonometricFunction. | Acute-triangle ratios remain valid; negative values and angles beyond a right triangle are now expressly supported. Tangent excludes zero cosine. |

## Scope of this adoption

The core covers Grade 6 variable/expression and solution concepts, Grade 7 transformations
and linear constraints, Grade 8 systems and functions, and representative high-school
polynomial/rational/function extensions. Numerical expression, operation, exponent, ratio,
proportion, coordinate, and geometric concepts remain reusable.

There is deliberately no wrapper for every action/object combination. Generic Equation and
Inequality remain available with Variable; narrower forms add their actual mathematical
conditions. Number domains, coefficient restrictions, variable counts, and representation
choices can be reviewed separately as Scopes. This draft adds no such Scopes and no subject-specific
Abilities.

Existing SlopeConcept, LineGraphing, PointPlotting, ProportionExpression, arithmetic operations,
and operation laws are not duplicated. More detailed polynomial theorems, exponent laws,
complex-number knowledge, matrices, or specialized constraint methods can be added in later
reviewed changes. Statistical fitting is not implied by AlgebraicModeling or an exact function
rule. Analysis and abstract algebraic structures are outside this draft.

No new progression or logical-constraint edges are inferred merely from curriculum order or
frequent co-occurrence. Those relations require a separate meaning review under ONT-R2/ONT-R3.

## Eligibility and adoption effects

Algebra gains constituent children and therefore becomes **ineligible for direct labels**
(ONT-E7, ONT-W2). Downstream broad Algebra claims must be replaced with their evidenced
constituents before adopting a release containing this change. Membership through `partOf`
never satisfies an Algebra target through specialization.

Function, BinaryRelation, Variable, PolynomialExpression, and the other specialization roots
remain label-eligible. The three existing trigonometric descriptors gain broader function
ancestry and circular-function definitions without changing their eligibility. The definition
broadening and new ancestry can affect annotations and specialization-based matching, so both
belong in consumer adoption review. Existing triangle uses remain within the meanings.

The regrouping preserves MathematicalExpression's label eligibility and removes the draft-only
VariablesAndExpressions identifier. In the manual refinement, Variable becomes a constituent
of ExpressionStructure, making ExpressionStructure organizational and ineligible for direct
labels (ONT-E7). Variable and its roles remain eligible but no longer satisfy VariableExpression
or MathematicalExpression targets through specialization. A single value-denoting variable
still meets those expression definitions when the content independently supports that claim.
Numerical, variable, function-application, polynomial, and rational expression labels support
AlgebraicExpression through specialization. NumericalExpression and VariableExpression now
inherit the explicit analysis boundary; neither is a universal classification of every future
analysis expression by variable presence. AlgebraicExpression no longer marks the narrow
algebraic-versus-transcendental distinction and cannot alone separate numerical calculation
from reasoning with variables. Use the evidenced NumericalExpression, VariableExpression,
variable roles, or reasoning concepts for that distinction. These changes require
reconciliation of any provisional draft labels.

The new expression-role Areas provide direct labels for component knowledge previously grouped
under the organizational ExpressionStructure. Choose the evidenced role rather than replacing
that organizer with every child. In particular, Grade 6 expression-part targets can use Term,
Factor, Coefficient, Subexpression, or the relevant operator/input roles when those are required.
OrderOfOperations gains structural navigation under FormalMathematics but no new specialization
ancestry; its existing arithmetic uses remain valid. No existing descriptor becomes ineligible
as a result of this role-family extension.

The Grade 6 content plan needs a later reconciliation of its provisional algebra labels and
dispositions. Grade 5 numerical-expression targets remain numerical; formula substitution and
earlier letter-equation targets merit selective review. This branch does not update the content
repository's pinned ontology or target specs.

## Validation record

- Authored Turtle parsing and complete source validation pass against all four ontology files.
- Structural child roles, cycles, multiparent paths, and the absence of Analysis below Algebra
  are checked; definitions and examples have also received semantic review.
- Documentation references and draft-tree/source agreement are checked separately.
- The authoritative Docker build was attempted but could not connect to the stopped Docker
  Desktop Linux engine. Generated-client, package, and Docker build checks remain unverified.

The source checks use the installed `edugraph-ts` validator from the content workspace.
They do not substitute for the full [Docker gate](../../DOCS.md#43-compiling-via-docker).
Before merging or releasing, run that gate and review the remaining meaning/consumer questions.

References: [descriptors](../descriptors.md), [structure](../structure.md),
[content evidence](../content-evidence.md), [change review](../change-review.md).
