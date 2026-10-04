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

## Shape of the draft

The draft adds 67 Areas, revises Algebra's definition to cover the adopted function/relationship
scope, and adds function-specialization links to the existing Sine, Cosine, and Tangent Areas.
Their definitions now cover circular functions; acute-triangle ratios remain concrete examples.
No Scope or Ability identifiers are changed.

In the following tree, `P` means the child is `partOf` its parent, and `S` means the child
`specializes` its parent. Repeated nodes mark multiple inheritance, not duplicate identifiers.
Existing specialization parents outside the Algebra tree remain in place: VariableExpression,
PolynomialExpression, and RationalExpression specialize MathematicalExpression;
PolynomialEquation and RationalEquation specialize Equation; LinearInequality specializes
Inequality. These links are visible in the editor's relation details.

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
  P VariablesAndExpressions
    P ExpressionStructure
    P PolynomialExpression
      S AffineExpression
      S QuadraticExpression
    P RationalExpression
    P Variable
      S GeneralizedVariable
      S Parameter
      S UnknownVariable
      S VaryingVariable
    P VariableExpression
```
<!-- END AUTHORED ALGEBRA TREE -->

The main organizers use only constituent children. Observable object families use only
specializing children. Methods and features sit beside those object families, preserving
every path's composition-before-specialization order (ONT-S4, ONT-S5).

## Definitions worth reviewing

| Decision | Meaning in this draft | Contrasting evidence |
|---|---|---|
| Variable roles | Unknown, generalized, varying, and parameter roles specialize Variable; they need not be mutually exclusive. | A fixed parameter in one function can be an unknown when fitting that function. A unit abbreviation does not establish a variable. |
| VariableExpression | A variable-bearing expression, including later exponential and trigonometric expressions. | A numerical calculation has no variable; an equation is a statement rather than an expression. |
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
