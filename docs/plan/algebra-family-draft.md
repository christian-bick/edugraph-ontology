# Algebra and analysis — design record and extension roadmap

The algebra and school-analysis refinements are merged into `origin/main` at
`d0d029d` ([PR #68](https://github.com/christian-bick/edugraph-ontology/pull/68)), verified on 2026-10-10.
This record distinguishes the [implemented decisions](#ccss-and-school-analysis-refinement-record)
from the [recommended next extensions](#recommended-next-ontology-extensions).
NumberTheory foundations are merged into `origin/main` at `1b9ecc3`, verified on 2026-10-11;
see its [implementation record](number-theory-basics-draft.md#implementation-and-adoption--2026-10-10).
The [remaining core coverage audit](core-ccss-coverage-audit.md) records supported compositions
and the accepted follow-ups. UnitDimensionality and PythagoreanTheorem are merged at `702714b`;
formal function coverage uses the existing concepts. Further functions and trigonometry are
merged at `f0dffbf` through [PR #72](https://github.com/christian-bick/edugraph-ontology/pull/72).
The [LinearAlgebra design record](linear-algebra-draft.md) documents stage 5A merged at
`69f60f9` through [PR #73](https://github.com/christian-bick/edugraph-ontology/pull/73), with a
separate root field alongside Algebra and Analysis. The [Calculus design and implementation record](calculus-family-draft.md)
develops roadmap step 6 using the existing Calculus root. Its school-foundation and university-entry
extension is merged into `main` at `5f52168` through
[PR #74](https://github.com/christian-bick/edugraph-ontology/pull/74).
The explicitly deferred extensions remain future work.
The Probability, Statistics, and Combinatorics extension is merged at `9750eff` through
[PR #75](https://github.com/christian-bick/edugraph-ontology/pull/75); see its
[design record](probability-statistics-combinatorics-draft.md). The
[remaining-school-foundations record](remaining-school-foundations-draft.md) documents spatial
geometry merged at `209091b` through PR #76, complex stage 3B merged at `5733989` through
PR #77, GraphTheory merged at `13328d3` through PR #78 as a top-level Area, and logical
foundations merged at `4de7612` through PR #79. Conics are merged at `6aa963e` through PR #80.
Fermat's little theorem and the coprime divisibility lemma are merged at `0af4aba` through
[PR #81](https://github.com/christian-bick/edugraph-ontology/pull/81).
The [2026-10-21 curriculum audit](coverage-audit-2026-10-21.md) now supplies the broader
requirement-level coverage assessment and next extension priorities.
The [Euclidean geometry batch](euclidean-geometry-draft.md) is merged at `5b89a92` through PR #82.
The [cross-product, arithmetic-sum and sequence-limit record](vector-sums-sequence-limits-draft.md)
documents the batch merged at `e6dba8b` through PR #83, including finite/infinite inference boundaries.
The [representation and digital-tool implementation draft](representations-digital-tools-draft.md)
adds the next audit batch for review on `codex/representations-digital-tools`: sign and variation
tables, theoretical probability histograms, and tool contexts with measurement-tool links
and separate digital-device and software families.

Original implementation branch: `codex/algebra-refinements` (merged). Updated 2026-10-21 for
the Calculus and statistics/probability merges and the remaining school-foundation proposals, following the NumberTheory and advanced extensions,
including the stage 4 and stage 5A merges.
The authored sources are [Areas](../../core-areas-math.ttl) and [Scopes](../../core-scopes-math.ttl).
This document builds on the manual refinement through `0f277c5` and the definition/example
review in `35d3482`, the formal concept definitions in `6d67042`, the law and sequence consolidation
in `3f75e4a`, the function and factorization review in `0c85673`, and the manual refinement
through `b60b42c` and the broadened equivalence family in `0f2d099`. The preceding follow-up
authored SystemRewriting for equivalent-system techniques and ConstraintSolving for solving
objectives, with their narrower specializations. The expression refinement replaces
NumericalExpression with ArithmeticExpression as a sibling of AlgebraicExpression; the
dependence family remains unchanged.

The implemented design separates formal objects and roles, shared mathematical dependence, objectives,
and reusable rewriting techniques. Expressions, equations, and functions can involve the same
algebraic knowledge without acquiring parallel polynomial, quadratic, or rational family trees.
AlgebraicFunctions organizes function types and constructions under Algebra. FunctionProperties
organizes eight subdivisions under Analysis, from values and symmetry through regularity and
critical points; the accepted slope overlap is discussed below.

## Review in the editor

In the [ontology editor](https://edugraph-editor.web.app), select Main,
the Area dimension, and Structure view. Review Algebra with descendants, then FormalMathematics
and Analysis / FunctionProperties.
Review TrigonometricRelations under Geometry to see the parallel function and identity families.
The editor reads authored Turtle from main. Consumer packages and annotations require a separate
adoption review; a source merge does not establish which ontology version a consumer uses.

## What is independent

| Aspect | Examples | Meaning |
|---|---|---|
| Formal object | ArithmeticExpression, AlgebraicExpression, Equation, Inequality, NumericFunction | Knowledge of the object's defining meaning, properties, or interpretation. |
| Structural role | Variable, Coefficient, Term, FunctionArgument, GroupingSymbol | The role being interpreted or used as mathematical knowledge. |
| Mathematical dependence | AffineDependence, QuadraticDependence, ExponentialDependence | The mathematical relationship in designated variables or quantities. |
| Objective | AlgebraicEquivalence, EquationSolving, FunctionZeros, FunctionExtrema | The mathematical result or relationship sought or explained. |
| Technique | CollectingLinearTerms, CompletingSquare, CommonBaseRewriting | The reusable mathematical procedure required or demonstrated. |
| Law or identity | DistributiveLaw, BinomialSquareIdentities, DifferenceOfSquaresIdentity, ExponentLaws | The mathematical knowledge used by a technique. |

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
    P ConstraintSolving
      S EquationSolving
      S InequalitySolving
      S SystemSolving
    P ConstraintSystem
      S SystemOfEquations
      S SystemOfInequalities
    P ConstraintTransformationLogic
    P RelationSatisfaction
    P SolutionSet
  P AlgebraicDependence
    S ExponentialDependence
    S PolynomialDependence
      S AffineDependence
        S DirectProportionalDependence
      S QuadraticDependence
    S RationalDependence
  P AlgebraicEquivalence
    S AlgebraicFactorization
    S BinomialTheorem
      S BinomialSquareIdentities
    S ExponentialRewriting
      S CombiningExponentialFactors
      S CommonBaseRewriting
    S FiniteGeometricSum
    S LinearRewriting
      S CollectingLinearTerms
      S DistributingLinearCombinations
    S PolynomialDivision
    S QuadraticFormula
    S QuadraticRewriting
      S CompletingSquare
      S DifferenceOfSquaresIdentity
    S SystemRewriting
      S SystemElimination
      S SystemSubstitution
    S TrigonometricIdentities
      S ComplementaryAngleIdentities
      S PythagoreanTrigonometricIdentity
  P AlgebraicFunctions
    P FunctionArithmetic
    P FunctionComposition
    P FunctionDomain
    P FunctionInversion
    P FunctionNotation
    P FunctionSlope
      P AverageRateOfChange
      P InstantaneousRateOfChange
    P FunctionTransformation
    P FunctionTypes
      P NumericFunction
        S AbsoluteValueFunction
        S ArithmeticSequence
        S GeometricSequence
        S LogarithmicFunction
        S PowerFunction
        S TrigonometricFunction
          S Cosine
          S Sine
          S Tangent
      P OneToOneFunction
      P PiecewiseFunction
      P Sequence
        S ArithmeticSequence [also above]
        S GeometricSequence [also above]
        S RecursiveSequence
  P AlgebraicModeling
  P AlgebraicSubstitution
  P AlgebraicTheorems
    P PolynomialFactorTheorem
    P PolynomialRemainderTheorem
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
    P RootIndex
    P Subexpression
    P Term
      S ConstantTerm
    P Variable
      S BoundVariable
      S DependentVariable
      S FreeVariable
      S GeneralizedVariable
      S IndependentVariable
      S Parameter
      S UnknownVariable
      S VaryingVariable
  P MathematicalExpression
    S AlgebraicExpression
    S ArithmeticExpression
    S PiecewiseExpression
  P MathematicalStatement
    S Equation
    S Inequality
```
<!-- END AUTHORED EXPRESSION TREE -->

The focused analysis branch records the eight function-property subdivisions, including the
school-analysis properties authored in the 2026-10-10 refinement.

<!-- BEGIN AUTHORED ANALYSIS TREE -->
```text
Analysis
  P FunctionProperties
    P FunctionCriticalPoints
      S FunctionStationaryPoints
    P FunctionLimitingBehavior
      S FunctionEndBehavior
      S FunctionLocalLimitBehavior
    P FunctionOrderProperties
      P FunctionExtrema
      P FunctionMonotonicity
    P FunctionRegularity
      P FunctionContinuity
      P FunctionDifferentiability
    P FunctionRepetitionProperties
      P FunctionPeriodicity
      P OscillationParameters
    P FunctionShapeProperties
      P FunctionConcavity
      P FunctionInflection
    P FunctionSymmetry
      S EvenFunctionSymmetry
      S OddFunctionSymmetry
    P FunctionValueProperties
      P FunctionBounds
      P FunctionRange
      P FunctionSign
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
The ontology does not assert that every polynomial presentation specializes rational dependence.

Flat descriptor sets still express co-occurring claims. They do not bind a particular family
to a particular expression, equation, or function in a compound task. Separate competency
claims where that association matters: a linear equation beside a quadratic function must not
be interpreted as a quadratic equation merely because their labels share one record.
These conventions add no object-binding schema, automatic normalizer, or matching rule.

## Equivalence, laws, and rewriting techniques

AlgebraicEquivalence is the shared family for equal expression values or equal constraint
solution sets over the same designated variables and admissible domain, including transformations
preserving that equality and original domain restrictions. LinearRewriting, QuadraticRewriting,
and ExponentialRewriting use expression-value equivalence; QuadraticFormula now specializes the
same family directly through its complete solution characterization.
BinomialSquareIdentities specializes BinomialTheorem, which directly specializes
AlgebraicEquivalence. DifferenceOfSquaresIdentity specializes QuadraticRewriting, whose meaning
includes equivalent quadratic forms as well as transformations between them. Recognizing,
explaining, and applying identities do not require separate application Areas.

AssociativeLaw, CommutativeLaw, DistributiveLaw, and ExponentLaws remain constituents of
ArithmeticLaws; the current source does not give them AlgebraicEquivalence specialization edges.
The earlier local draft's additional edges are not part of this refinement. Their mathematical meaning is shared across numerical
and symbolic work. Distributivity also covers products beyond independent-scalar linear patterns;
exponent laws also cover fixed exponents and variable bases, as in `(x^2)^3 = x^6`. Neither law
is restricted to the narrower corresponding rewriting family. OrderOfOperations remains a
notation convention under ArithmeticLaws, and RulesOfSigns concerns determining signs;
their existing placements remain.

The word "rewriting" distinguishes these procedures from linear maps and from
FunctionTransformation, which produces a translated, reflected, or scaled function.
Rewriting a function's rule preserves its values; transforming the function can change them.

CompletingSquare remains a distinct technique alongside BinomialSquareIdentities. Applying a binomial
identity directly matches a pattern such as `u^2 + 2uv + v^2 = (u + v)^2`. CompletingSquare
constructs a suitable square and compensates for the change, as in
`x^2 + 6x + 5 = (x + 3)^2 - 4`; it integrates BinomialSquareIdentities.
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
dividend-equals-divisor-times-quotient-plus-remainder decomposition. AlgebraicFactorization now
supplies the general product-form objective within a stated class of factors and coefficient
domain, preserving values and original domain restrictions. It can compose with a dependence
claim or an evidenced binomial or distributive technique without a separate quadratic
factorization family. PolynomialDependence describes the original expression's dependence;
it does not require that every requested factor be polynomial. Retain those factor and
coefficient conditions when reviewing former ExpressionFactorization or PolynomialFactorization
annotations. The integer Factorization family remains separate and unchanged.

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
| Express `x^2 + 5x + 6` as a product of integer polynomial factors. | AlgebraicFactorization; the requested factor class remains explicit in the task. |
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

EquationSolving remains the objective of determining all admissible assignments. It composes
with a specific technique such as CompletingSquare or the restored QuadraticFormula. The formal
Equation concept, the SolutionSet concept, and the demonstrated Ability are separate claims;
none is an automatic replacement for the solving objective.

## Constraint objectives and equivalent systems

AlgebraicEquivalence now covers two forms of mathematical equivalence over the same designated
variables and admissible domain: equality of expression values, and equality of constraint
solution sets. These remain different tests within one family. The expressions 2(x + 1) and
2x + 2 have equal values for every real x. The constraints x = 1 and 2x = 2 instead have the
same real solution set {1}; this does not assert that x and 2x have equal values everywhere.
Original domain restrictions remain part of either claim.

RelationEquivalence and FormulaRearrangement remain removed after the manual refinement.
The shared equivalence family now supplies solution-preserving constraint transformations
without a separate RelationEquivalence identifier. Isolating a chosen quantity can be described
through the requested goal, relevant rewriting knowledge, and retained EquationSolving where
the task determines admissible unknown values; the removed FormulaRearrangement identifier is
not restored or treated as an automatic alias.

QuadraticFormula is restored directly as a specialization of AlgebraicEquivalence. It
characterizes the complete real or complex solutions of ax^2 + bx + c = 0 when a != 0, rather
than claiming that x equals a formula for every unrestricted value of x. Its direct placement
uses constraint equivalence; it is not an expression-value identity under QuadraticRewriting.

The user retains solving as a meaningful mathematical goal. The earlier recommendation to
remove EquationSolving in favor of SolutionSet plus an Ability is superseded. SolutionSet
describes the collection of satisfying assignments, RelationSatisfaction concerns truth under
an assignment, and EquationSolving concerns determining all admissible assignments. An
Ability describes how the learner performs that work; it does not replace the mathematical goal.

| Member | Current authored decision and boundary |
|---|---|
| AlgebraicConstraints | Organizes satisfaction, solution sets, constraint systems, and the ConstraintSolving objective family. |
| ConstraintSystem / SystemOfEquations / SystemOfInequalities | Retain simultaneous constraints and the all-equation or all-inequality specializations. Mixed systems remain expressible through ConstraintSystem. |
| ConstraintSolving | Determines complete admissible assignments satisfying one constraint or a simultaneous system. |
| EquationSolving / InequalitySolving / SystemSolving | Specialize ConstraintSolving for one equation, one inequality, or all members of a simultaneous system, respectively. |
| SolutionSet | Retain the complete collection of satisfying assignments; the concept does not itself require finding that collection. |
| RelationSatisfaction | Retain truth under one assignment: checking that 3 satisfies x^2 = 9 does not determine the complete real set {-3, 3}. |
| AlgebraicEquivalence | Covers expression-value equality or equality of constraint solution sets on a shared admissible domain. |
| QuadraticFormula | Restored directly under AlgebraicEquivalence as a complete solution characterization for a quadratic equation with nonzero leading coefficient. |
| SystemRewriting | Specializes AlgebraicEquivalence for equivalent systems over the same variables and admissible domain. |
| SystemElimination | Specializes SystemRewriting; retains one equation while replacing another by its sum with a scalar multiple. |
| SystemSubstitution | Specializes SystemRewriting; retains the defining equation or an equivalent reconstruction condition and the complete solution set over the original variables and domain. |

### Authored technique and objective families

SystemRewriting specializes AlgebraicEquivalence. SystemElimination and SystemSubstitution
now specialize SystemRewriting instead of being direct constituents of AlgebraicConstraints.
Each method preserves the complete solution set over the same designated variables and
admissible domain.

SystemElimination retains one equation while replacing another; adding two equations and
discarding both originals does not establish an equivalent system. SystemSubstitution retains
the defining equation or an equivalent reconstruction condition. For example,
{y = 2x + 1, x + y = 7} becomes {y = 2x + 1, 3x + 1 = 7}. The retained condition preserves
the original pairs (x, y); 3x + 1 = 7 alone does not have the same solution set over x and y.

ConstraintSolving is a constituent of AlgebraicConstraints. EquationSolving, InequalitySolving,
and SystemSolving specialize it: the first two concern one equation or inequality, while the
third requires assignments satisfying every member of a simultaneous system, including mixed
equation-and-inequality systems. All concern complete admissible solution sets.

Rewriting an equivalent system can be an intermediate technique without completing its
solution. Conversely, solutions can be determined graphically or by another justified method
without demonstrating SystemRewriting. The goal and technique therefore compose without one
specializing the other.

Both new family parents remain eligible for direct labels because their narrower members use
specializes, not partOf. The three moved descriptors also remain eligible. Existing
EquationSolving claims now inherit ConstraintSolving; SystemElimination and SystemSubstitution
claims inherit SystemRewriting and AlgebraicEquivalence. Review existing annotations against
the complete-solution and original-system boundaries before adoption; these changes do not
migrate target specifications.

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
| `5`, `5 + 5`, `2^3`, `sqrt(4)`, `log_2(8)`, and `pi + 2` | ArithmeticExpression: numbers, including fixed numerical constants, with arithmetic operations and optional grouping. |
| `sin(1)` and `sin(x)` | Both are AlgebraicExpression because sine application is beyond the arithmetic-operation family, regardless of whether its argument is numerical. |
| `x - x` and `0` | The displayed forms are algebraic and arithmetic respectively. A merely possible equivalent rewrite does not establish a second expression claim. |
| `{ -x if x < 0; x if x >= 0 }` | PiecewiseExpression concerns the complete conditional form, including agreement and coverage of its admissible inputs. |
| `3 - x` | The signed term is `-x`; the explicit subtraction input is `x`. |
| `-x` | Its coefficient `-1` is implicit, while the unary-minus operand is explicitly `x`. |

## Migration and effects of simplification

The manual refinement and subsequent redundancy review keep the compositional approach while
reducing organizational layers and application wrappers. The following changes need explicit
annotation review:

| Previous descriptor or placement | Current treatment |
|---|---|
| NumericalExpression | Replaced by ArithmeticExpression, directly specializing MathematicalExpression alongside AlgebraicExpression. Review old claims against the arithmetic-only boundary; numerical arguments alone no longer admit arbitrary function applications. NumericalExpression references in pinned consumer tables remain pre-adoption records. |
| ExpressionReasoning / AlgebraicRewriting / ExpressionEquivalence | AlgebraicEquivalence directly under Algebra, with the rewriting families as specializations. The removed organizational field is not an alias for a direct claim. |
| Substitution | AlgebraicSubstitution directly under Algebra; the binding and admissible-value conditions remain. |
| ExpressionFactorization / PolynomialFactorization | Review the new AlgebraicFactorization claim, retaining the specified factor class, coefficient domain, and domain restrictions. No automatic polynomial-factor inference follows from PolynomialDependence. |
| FunctionsAndRelations | AlgebraicFunctions organizes function types and constructions. |
| Function / FunctionType | FunctionTypes is the current organizational identifier and remains ineligible for direct labeling. Review former direct claims against eligible constituents; generic nonnumeric correspondence remains an open coverage question. |
| BinaryRelation | Removed; arbitrary relations that are not functions have no equivalent function label. |
| FunctionRange / FunctionMonotonicity / FunctionExtrema / FunctionZeros | Remain under FunctionProperties in Analysis, now grouped by FunctionValueProperties and FunctionOrderProperties; their definitions, examples, and labeling eligibility are unchanged. |
| FunctionBehavior | Renamed FunctionProperties by the manual refinement in e4e7299. |
| AverageRateOfChange / InstantaneousRateOfChange | Remain constituents of FunctionSlope. The user accepted this shared placement; FunctionSlope is organizational because both children use partOf. |
| ApplyingBinomialIdentities / BinomialIdentities | The application wrapper was removed in the earlier draft; the published bundle is now retired in favor of an evidence-specific choice of BinomialSquareIdentities, DifferenceOfSquaresIdentity, or both. Retain an evidenced Ability to distinguish recognizing, explaining, and applying. |
| AlgebraicLaws | Absent from the current source. The former organizer is not an annotation alias for AlgebraicEquivalence; review each law's authored placement independently. |
| AssociativeLaw / CommutativeLaw / DistributiveLaw / ExponentLaws | Remain constituents of ArithmeticLaws without AlgebraicEquivalence specialization edges. Earlier local-draft claims of those extra edges are superseded by the current source; their existing arithmetic uses and incoming progression relations remain. |
| NumericSequence | Removed; review Sequence and NumericFunction together for the same studied sequence. ArithmeticSequence and GeometricSequence now specialize both directly. |
| RelationEquivalence | Removed; review solution-set equivalence against the broadened AlgebraicEquivalence definition, retaining variables and domain. |
| FormulaRearrangement | Removed; retain the requested isolation goal in the task and select evidenced solving and rewriting claims. No exact identifier alias is asserted. |
| QuadraticFormula | Restored as a direct specialization of AlgebraicEquivalence through complete quadratic solution characterization. |
| SystemOfInequalities | Added as a specialization of ConstraintSystem, parallel to SystemOfEquations. |
| EquationSolving | Replaces its direct partOf AlgebraicConstraints edge with specializes ConstraintSolving; preserves the single-equation objective and gains the broader solving claim. |
| SystemElimination / SystemSubstitution | Replace their direct partOf AlgebraicConstraints edges with specializes SystemRewriting, inheriting AlgebraicEquivalence. Review retained whole-system constraints and original variables/domain, especially for substitution. |
| ConstraintSolving / SystemRewriting | New eligible family concepts with specialization children; adding them does not make the existing moved descriptors ineligible. |

The earlier removal of repeated object families still has these adoption consequences:

All mappings are review guidance, not aliases or unconditional automatic replacements. Object
and role claims require exercised concept knowledge. In particular, Sequence plus NumericFunction
can refer to different objects in one compound task; their co-occurrence alone cannot bind them
to one numerical sequence. Review the subject of the original NumericSequence claim.

| Removed family | Replacement claims to review |
|---|---|
| VariableExpression | AlgebraicExpression and the relevant Variable role, when role knowledge is supported. Mere variable presence does not force a separate role claim. |
| GroupedExpression | MathematicalExpression, ArithmeticExpression, or AlgebraicExpression with GroupingSymbol and OrderOfOperations only when those concepts are evidenced. |
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

ArithmeticExpression describes the form and meaning of expressions containing only numbers
and arithmetic operations, with grouping as needed. The arithmetic-operation family includes
powers, roots, and logarithms; a fixed numerical constant such as pi is a number. AlgebraicExpression
instead requires variables, symbolic parameters, function applications beyond arithmetic
operations, or conditional branches, while retaining the exclusions of explicit limits,
derivatives, integrals, and infinite sums or products. Both directly specialize
MathematicalExpression and remain eligible for direct labels.

The distinction applies to the expression presented or required by the competency, rather than
to forms that could theoretically be produced. It does not turn either Area into an incidental
syntax label: its form or meaning must be exercised. A task that visibly substitutes values
and evaluates can evidence both expression kinds at different steps. No contradicts relation
is added between the Areas. PiecewiseExpression remains a separate whole-expression distinction
rather than an inventory of branch-role labels; conditional forms can also be algebraic.

ArithmeticEvaluation, ArithmeticOperations, and ArithmeticLaws already use the appropriate
arithmetic terminology. NumericFunction, NumericComparison, NumericEquality, and numeric Scopes
retain their names because they concern numerical values, not arithmetic-only expression forms.
AlgebraicDependence and all its members retain their definitions, placement, and identifiers.

The user's removals of FunctionApplicationExpression and OperatorArity remain in effect.
FunctionSymbol and FunctionArgument describe distinct formal roles without recreating the
removed whole-expression wrapper. OperandCardinality keeps its existing whole-expression
counting convention; local Operand roles do not redefine that Scope.

## Function concepts and notation decisions

FunctionTypes is the current identifier for the function-type organizer, renamed from
FunctionType in the manual refinement. NumericFunction, OneToOneFunction, PiecewiseFunction,
and Sequence are its constituents through partOf. Their definitions identify numerical correspondence, injectivity,
piecewise definition, and indexed organization as knowledge; narrower numerical and sequence
families retain their specialization relations. FunctionTypes therefore has constituent children
and is ineligible for direct labeling. General nonnumeric correspondence that is neither
one-to-one, piecewise, nor a sequence still lacks an eligible generic concept; that coverage
question remains open rather than being assigned an arbitrary child. Its manually revised
definition emphasizes algebraic structure, growth patterns, and graphical features; a wording
review remains useful because its Sequence child also admits nonnumeric terms. That definition
is preserved in this follow-up.

The retained power, logarithmic, absolute-value, and trigonometric families now describe their
input-output relationships and defining properties. Their distinction from operations is
intentional: Exponentiation concerns raising a number to a power, while PowerFunction concerns
dependence on an input with a fixed exponent. Logarithm concerns recovering an exponent, while
LogarithmicFunction concerns the corresponding functional relationship and domain. Sine,
Cosine, and Tangent retain their circular-function meanings and triangle examples.

AbsoluteValueFunction explicitly defines real absolute value by `|u| = u` for `u >= 0` and
`|u| = -u` for `u < 0`, within its translated and scaled family. Its new expands relation to
AbsoluteNumberMagnitude records the extension from magnitude knowledge. AbsoluteNumberMagnitude
remains the rational-number concept under NumberSense; the progression edge does not turn it
into a function type or automatically add a separate annotation to every function task.

IntegerNotation now specifies digits and an optional sign without a decimal separator or
fraction bar. Its examples distinguish `2`, `2.0`, and `4/2` as representations without disputing
that they can denote the same integer value. SignNotation separates sign from magnitude and
explicitly handles signed zero: either sign leaves zero unchanged. These precision questions
are resolved in the source.

OperandCardinality already counts explicit operand occurrences across all nested operations in
the expression. The former question about generalizing its terminal-operand wording is therefore
historical; `8 * (2 + 10)` still has three counted occurrences, without counting the composite
`2 + 10` again. The merged refinement leaves that definition, its children, and their counting convention
unchanged.

## Adoption and the boundary with analysis

Organizational parents with constituent children remain ineligible for direct labeling.
The dependence and rewriting families have specializing children and remain eligible at the
most specific level supported by content. Variable and the other structural roles do not
inherit MathematicalExpression merely because they occur inside an expression.

The shared family approach makes polynomial or exponential knowledge available when analysis
concepts are composed with it. The manual refinement places FunctionProperties in Analysis, but
its constituents still admit algebraic methods: finding a minimum by completing the square does
not imply differentiation. Their organizational placement does not add an Analysis annotation
or change their mathematical definitions.

The user has accepted keeping InstantaneousRateOfChange's definition and placement under
FunctionSlope in AlgebraicFunctions. This is an intentional overlap connecting geometric slope,
average secant rates, and instantaneous rates, rather than a strictly disjoint algebra/analysis
partition. The current instantaneous-rate definition still uses a finite fixed-input limit and
therefore includes calculus; AverageRateOfChange remains a finite difference quotient.
The earlier Algebra definition retains its broad allocation of limits and differentiation to
analysis, while this specific bridge remains shared in the authored organization. The accepted
placement does not remove the limit from the concept. Its fixed-input limit follows the usual
[definition of the derivative](https://openstax.org/books/calculus-volume-1/pages/3-1-defining-the-derivative).

Differentiation, antiderivatives, definite integrals, and their rules would compose with the
existing function and dependence concepts without creating a descriptor for every combination.
No new progression relation is inferred from the manual regrouping.

Any adoption must review removed identifiers, changes in specialization ancestry, and narrowed
or broadened meanings. The Grade 6 plan needs reconciliation of provisional labels; Grade 5
arithmetic-expression tasks retain their meaning under the new identifier, with formula substitution
reviewed selectively. The ontology merge does not update the content repository's pinned package,
target specifications, or coverage baseline.

## Verification

For the 2026-10-10 refinement, the three authored tree blocks were regenerated from the final
Turtle assertions. The source assessment and focused semantic-boundary review pass. Comparison
with the baseline confirms that FunctionRange, FunctionZeros, FunctionMonotonicity, and
FunctionExtrema retain their definitions and examples; only their direct organizational parents
change. All seven source-assessment checks and documentation validation pass with no findings;
the snapshot after trigonometric regrouping contains 929 descriptors and 4,974 assertions. Focused checks confirm the intended
binomial and trigonometric specialization boundaries, new-organizer eligibility, and constant-output
variable roles. Independent review found no actionable semantic issues; `git diff --check` passes.

The authoritative `docker build . --output dist` passed on 2026-10-10 for source commit
`18bd148` after Docker Desktop was restarted. The gate completed RDF generation, TypeScript
compilation and all eight client test entrypoints, ontology and documentation validation,
and npm package consumer checks. Python lint, formatting, typing, all 49 tests, wheel/sdist
builds, and packaged-consumer checks also passed. Generated artifacts were exported to `dist/`.
This resolves the earlier Docker startup blockage; downstream annotation adoption and editor
UI behavior are outside these build checks.

The subsequent trigonometric regrouping passed the same full Docker gate, including all 49
Python tests and both packaged-client checks. Independent diff review confirmed exactly three
removed constituent edges and one added constituent edge, with definitions, examples,
specialization and progression assertions, and labeling eligibility unchanged. The updated
documentation also passes validation.

The merged main commit `d0d029d` has no tracked-file differences from the validated refinement
commit `d523ed0`. The post-merge update changes documentation only; it does not modify Turtle,
generated clients, or the content repository's dependency version.

Earlier completed checks are historical evidence. The review in 35d3482 tightened six
definitions and filled five missing example fields. Revision 6d67042 updated definitions and
examples for 42 formal descriptors without changing their graph assertions. The later
3f75e4a law and sequence consolidation passed source, graph, tree, and documentation checks.
Those checks do not establish the validity or descriptor count of subsequent revisions.

The function and factorization revision in 0c85673 changed four FunctionType child edges
from specializes to partOf, added AlgebraicFactorization and the AbsoluteValueFunction
progression edge, and clarified notation. Its source, graph, tree, and documentation checks
passed; its function-family review preserved the formula, domain, and sequence boundaries.

The manual refinement through b60b42c renamed FunctionType to FunctionTypes, added
SystemOfInequalities, and removed FormulaRearrangement, QuadraticFormula, and RelationEquivalence.
Revision 0f2d099 broadened AlgebraicEquivalence to include constraint solution-set equality and
restored QuadraticFormula as its direct specialization. Its source, graph, tree, and
documentation checks passed. FormulaRearrangement and RelationEquivalence remain absent.

The previous follow-up authored ConstraintSolving, InequalitySolving, SystemSolving, and SystemRewriting;
reparented EquationSolving, SystemElimination, and SystemSubstitution through specializes; and
clarified the complete original-system boundary for substitution. The four-file source
validator passed. Exact RDF comparison against 0f2d099 confirmed precisely those four new
descriptors and three changed descriptors, with three old partOf edges removed and seven
expected structural edges added. All seven concepts remained eligible. Other Scope, Ability,
and schema sources were unchanged.

For that follow-up, all three authored tree blocks matched the Turtle, and documentation
validation passed for all 31 tracked Markdown files and repository links.

The 2026-10-06 expression refinement updates the focused expression tree, definitions guidance,
examples, and migration notes. Source validation and independent graph review pass; the seven
dependence-family definitions and their assertions are unchanged. All 31 tracked Markdown files
pass documentation validation, and all three tree blocks match the source staged for this change.
The staged RDF delta contains only the expression rename, its new parent and definitions, and the
ArithmeticEvaluation reference update; pre-existing local edits remain unstaged. No
target-specification or pinned-package change is made by this update.

The authoritative [Docker gate](../../DOCS.md#43-compiling-via-docker) was attempted again on
2026-10-06 but could not connect to the Docker Desktop Linux engine because its named pipe was
unavailable. Generated-client tests and package builds were unverified at that revision;
the 2026-10-10 gate above verifies the current refinement source.

Authoring references: [descriptors](../descriptors.md), [structure](../structure.md),
[relations](../relations.md), [content evidence](../content-evidence.md),
[change review](../change-review.md), [annotations and models](../annotations-and-models.md).

## CCSS and school-analysis refinement record

Status: implemented on `codex/algebra-refinements` and merged into main at `d0d029d` on 2026-10-10.
The pre-refinement baseline was
published preview `0.30.0-pre.10.10a40360f726`, source commit `10a40360f72686aabbf5865ee5157649ad75b06c`.
The accepted representation, theorem, equivalence, function-property, variable-role,
function-arithmetic, and transformation-logic descriptors below are now source assertions.
NumberTheory is now merged at `1b9ecc3`; the later merge statuses and outstanding proposals
are recorded in the [extension roadmap](#recommended-next-ontology-extensions).
Earlier provisional coverage questions
must be checked against the relevant source rather than treated as an inventory of missing concepts.

The implemented decisions use ScientificExponentNotation, keep the finite geometric sum and general
binomial theorem exclusively in AlgebraicEquivalence, split the old binomial-identity bundle,
and adopt the eight function-property subdivisions below. The trigonometric dual placement and
ConstraintTransformationLogic direction are accepted. AlgebraicTheorems replaces the rejected
AlgebraicResults name in the merged source.

### 2026-10-10 migration and adoption

This source change requires an ontology-version adoption review; it does not silently update
annotations, generated datasets, or a consumer's pinned package.

| Change | Review required |
| --- | --- |
| BinomialIdentities retired | Choose BinomialSquareIdentities for square-of-sum/difference knowledge and DifferenceOfSquaresIdentity for the conjugate-product identity. Select both only when both are evidenced; this is not an unconditional rename or two-label expansion. |
| BinomialSquareIdentities specializes BinomialTheorem | Square identities now inherit the general binomial expansion and AlgebraicEquivalence, without inheriting QuadraticRewriting. An independent quadratic-rewriting claim needs its own evidence. |
| DifferenceOfSquaresIdentity specializes QuadraticRewriting | The product identity preserves the quadratic-equivalence path; it does not inherit BinomialTheorem. |
| CompletingSquare integrates BinomialSquareIdentities | Only its integration target changes from the retired bundle; the technique remains a specialization of QuadraticRewriting. |
| FunctionRange and FunctionZeros reparented | Their direct organizational parent becomes FunctionValueProperties. Definitions, examples, and direct-label eligibility are preserved. |
| FunctionMonotonicity and FunctionExtrema reparented | Their direct organizational parent becomes FunctionOrderProperties. Definitions, examples, and direct-label eligibility are preserved. |
| FunctionProperties subdivided | FunctionValueProperties, FunctionOrderProperties, FunctionRepetitionProperties, FunctionRegularity, and FunctionShapeProperties are new organizational nodes with constituent children, not direct labels. FunctionSymmetry, FunctionLimitingBehavior, and FunctionCriticalPoints are eligible concepts with specializing children. |
| School-analysis property concepts added | Local limits, continuity, differentiability, concavity, inflection, critical points, and stationary points are authored now. Their presence does not assert calculus content in existing annotations or provide separate methods of differentiation or integration. |
| TrigonometricRelations broadened | Its meaning now includes circular as well as triangle trigonometry. TrigonometricIdentities has the accepted constituent placement there and specialization in AlgebraicEquivalence. Existing triangle knowledge remains within scope. |
| Trigonometric functions regrouped | TrigonometricFunction now carries the constituent placement in TrigonometricRelations. Sine, Cosine, and Tangent retain their specialization in TrigonometricFunction and lose their direct constituent edges to TrigonometricRelations. Definitions, identifiers, specialization ancestry, and labeling eligibility are unchanged; geometry navigation now passes through the shared function family. |
| Representation and transformation-context Scopes added | Apply them only when their conventions or transformations are evident. A Scope does not itself establish knowledge of the notation, a solving procedure, or the logical validity of a transformation. |

Existing domain, slope, function-type, dependence, and solving families retain their placements.
New knowledge labels must be independently supported by observable content under
[ONT-E1](../content-evidence.md#ont-e1--ground-annotations-in-accessible-evidence);
new organizers remain ineligible under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).

### When a composition deserves its own concept

The user's proposed test sharpens [ONT-D1](../descriptors.md#ont-d1--define-reusable-concepts):
a combination can warrant an Area when it introduces a new concept to understand, changes the
character of the underlying task, and supports identifiable later knowledge. A relatively unique,
reusable construction is a stronger candidate than one cell in a multiplication of object types
and operations. An imaginable future use alone is insufficient; demonstrate the new meaning
with an example and a contrasting case. Potential progression links are evidence for this
decision, not automatic `expands` or `integrates` assertions.

### Representation Scopes

These two cases are authored as Scopes; a parallel Area is not necessary at this stage.

| Scope | Meaning | Placement and composition |
| --- | --- | --- |
| `ScientificExponentNotation` | Numerical values represented as a coefficient times an integer power of ten, with `1 <= abs(a) < 10` for nonzero coefficients, including equivalent E notation. Zero may be represented by coefficient zero with a stated exponent convention. | `specializes Numerals`. Compose with existing arithmetic, comparison, approximation, identity, or notation knowledge. |
| `GraphicalAlgebraicRepresentation` | Algebraic relationships, functions, or solution sets represented by plotted points, curves, or regions on a number line or in a coordinate system. | `specializes AlgebraicRepresentation`. Compose with evidenced function, relation, solution-set or solving knowledge and the relevant Ability. |

Examples: `3.2 * 10^5`, `1.25E6`; the ray for `x > 2`; the region satisfying `x + y <= 1`.
NumberNotation is eligible in the published baseline, so `NumberNotation + ScientificExponentNotation`
can describe studying the convention itself. Its existing notation children use specialization.
The Scope alone does not assert that notation conventions are the knowledge being learned.
Likewise the graphical Scope does not by itself claim graph-based solving, solution-set interpretation,
or numerical accuracy.

The 2026-10-21 representation refinement on `codex/probability-statistics-combinatorics` renames
GraphicalSolutionRepresentation to the broader GraphicalAlgebraicRepresentation. Its new parent,
AlgebraicRepresentation, is partOf RepresentationalScope; symbolic, verbal, tabular, equality-balance,
tile and graphical forms specialize it. The [implementation and adoption record](probability-statistics-combinatorics-draft.md#adoption-effects)
documents the retired identifier, replacement meaning and consumer migration. No solution-set or
solving claim follows from a generic function graph.

Scientific notation addresses [8.EE.A.3-4](https://www.thecorestandards.org/Math/Content/8/EE/).
The graph interpretation is supported by existing solution-set meaning; review representative
[A-REI.D.10-12](https://www.thecorestandards.org/Math/Content/HSA/REI/) tasks before adding another Area.

### Number theory and number-system knowledge

Accepted direction: place complex-number foundations and rational/irrational number-system
properties in NumberTheory. Its current definition is limited to integers and must be broadened
deliberately. Proposed organizer definition: "The mathematical properties and relationships of
numbers and number systems, including their arithmetic structure and representations."

Review its boundary with existing ArithmeticSpaces, whose definition already mentions number
systems. Reuse or refine that organization rather than creating a synonymous second organizer.
Keep computation and strategies distinguishable from knowledge of number-system structure.

The next number-theory pass should address:

- Complex-number structure: `i^2 = -1`, the real and imaginary parts of `a + bi`, and the
  extension of real arithmetic. Pair this knowledge with a `ComplexNumbers` Scope for contexts
  requiring that number system; existing arithmetic operations remain reusable.
- Rational/irrational characterization, including eventually repeating decimal expansions.
- Operation and result-type properties: closure within a number system and the results of
  mixed rational/irrational operations. "Closure" alone does not name all the latter cases.

These are independently learned properties, not claims created merely by displaying a number
from a particular system. Relevant standards are
[N-CN.A.1-2 and C.7](https://www.thecorestandards.org/Math/Content/HSN/CN/),
[N-RN.B.3](https://www.thecorestandards.org/Math/Content/HSN/RN/), and
[8.NS.A.1](https://www.thecorestandards.org/Math/Content/8/NS/).
Advanced complex-number topics remain deferred below.

### Algebraic theorems and equivalence: primary placement

The authored organizer is `AlgebraicTheorems`. The user's original name is a
better fit than AlgebraicResults: the initial members are the remainder and factor theorems,
while the finite geometric sum and binomial expansion belong exclusively to equivalence.
Definition: "General relationships among algebraic expressions, their values, roots,
and factors."

The remainder theorem connects evaluation with division; the factor theorem connects a zero
with divisibility. Their placement in the new family is accepted, with no additional equivalence
parent. The finite geometric sum and BinomialTheorem directly express equal-valued
forms and specialize AlgebraicEquivalence only. Conventional use of the word "theorem" does
not require a second organizational parent. Existing QuadraticFormula also keeps its single
direct structural parent, AlgebraicEquivalence.

```text
Algebra
  P AlgebraicTheorems
    P PolynomialRemainderTheorem
    P PolynomialFactorTheorem
  P AlgebraicEquivalence                    [existing]
    S FiniteGeometricSum
    S BinomialTheorem
      S BinomialSquareIdentities
    S QuadraticFormula                      [existing edge]
    S QuadraticRewriting                    [existing]
      S DifferenceOfSquaresIdentity
      S CompletingSquare                    [existing edge]
```

This is a focused view of the authored Algebra tree. The theorem-family edges are `partOf`;
equivalence-family edges are `specializes`. No theorem collection is inserted underneath the
specialized equivalence family. This replaces the earlier proposal to give identities and
formulas additional membership in a general results collection. The separately accepted
geometry/algebra dual placement for TrigonometricIdentities remains intentional.

| Descriptor | Definition | Example |
| --- | --- | --- |
| `PolynomialRemainderTheorem` | The equality between the remainder when a polynomial `p(x)` is divided by `x-a` and the value `p(a)`, over a stated coefficient field containing `a`. | Dividing `x^2 + 1` by `x-2` leaves remainder `5 = p(2)`. |
| `PolynomialFactorTheorem` | The equivalence between `p(a)=0` and divisibility of a polynomial `p(x)` by `x-a`, over a stated coefficient field containing `a`. | `p(2)=0` for `p(x)=x^2-4`, so `x-2` is a factor. |
| `FiniteGeometricSum` | The identity equating the sum of `n` geometric terms beginning with `a`, of common ratio `r`, to `a(1-r^n)/(1-r)` for positive integer `n` and `r != 1`. For `r=1`, the sum is `na`. | `3 + 6 + 12 + 24 = 3(1-2^4)/(1-2) = 45`. |
| `BinomialTheorem` | The identity expanding `(a+b)^n` as the sum of `binom(n,k) a^(n-k) b^k` over `k=0,...,n`, for real or complex `a,b` and nonnegative integer `n`, with zero powers interpreted as constant polynomial terms. | `(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3`. |
| `BinomialSquareIdentities` | The square-of-sum and square-of-difference identities `(a+b)^2 = a^2 + 2ab + b^2` and `(a-b)^2 = a^2 - 2ab + b^2` for real or complex quantities. | `(x+3)^2 = x^2 + 6x + 9`; `(x-3)^2 = x^2 - 6x + 9`. |
| `DifferenceOfSquaresIdentity` | The identity `(a+b)(a-b) = a^2-b^2` for real or complex quantities, used in either direction. | `x^2-9 = (x+3)(x-3)`. |

The factor theorem is a consequence of the remainder theorem, not a narrower theorem that
preserves the latter's whole meaning. Keep them siblings. The finite sum is algebraic;
infinite series and convergence are separate later knowledge.

The source splits the published BinomialIdentities bundle into the power-of-binomial
identities and the difference-of-squares product. In preview `.10` the bundle is one eligible
descriptor without children, not three separately authored identities. The split uses
new names rather than silently narrowing that published identifier:

- BinomialIdentities is retired in the merged ontology. Review old annotations and choose
  BinomialSquareIdentities, DifferenceOfSquaresIdentity, or both only when both are evidenced.
- The `BinomialSquareIdentities specializes BinomialTheorem` edge captures the
  degree-two cases of the general power identity. It does not add a second QuadraticRewriting
  parent; quadratic rewriting can still be independently expressed where needed.
- The `DifferenceOfSquaresIdentity specializes QuadraticRewriting` edge preserves
  its identity as a quadratic product/factorization relationship.
- The `CompletingSquare integrates BinomialSquareIdentities` edge replaces its
  integration of the old bundle. CompletingSquare still specializes QuadraticRewriting.

This is a semantic and ancestry migration, not a spelling-only rename. Consumers must not
mechanically replace every old BinomialIdentities claim with both new claims. Earlier
verification records describe the published bundle at their stated historical baselines.

References: [polynomial results](https://openstax.org/books/precalculus-2e/pages/3-6-zeros-of-polynomial-functions),
[binomial expansion](https://openstax.org/books/algebra-and-trigonometry-2e/pages/13-6-binomial-theorem),
[CCSS finite geometric sums](https://www.thecorestandards.org/Math/Content/HSA/SSE/).

### Advanced school-level function properties

The implemented family covers real functions of one real variable through advanced school
analysis, with existing discrete-domain concepts retained where applicable. The subject is the
property being understood; deriving it by algebra, reading a graph, or using calculus does not
create three versions of the property. This is a curriculum-oriented set, not a claim to exhaust
all mathematical properties of functions.

The four existing members are preserved within the user's eight subdivisions. Five new `partOf`
organizers group value, order, repetition, regularity, and shape properties. FunctionSymmetry,
FunctionLimitingBehavior, and FunctionCriticalPoints provide the other three branches
as independently meaningful concepts with specializing children. No specialization is followed
by composition.

```text
Analysis
  P FunctionProperties
    P FunctionValueProperties               [Values]
      P FunctionRange                       [existing]
      P FunctionZeros                       [existing]
      P FunctionSign
      P FunctionBounds
    P FunctionOrderProperties               [Order and extrema]
      P FunctionMonotonicity                [existing]
      P FunctionExtrema                     [existing]
    P FunctionSymmetry                      [Symmetry]
      S EvenFunctionSymmetry
      S OddFunctionSymmetry
    P FunctionRepetitionProperties          [Repetition]
      P FunctionPeriodicity
      P OscillationParameters
    P FunctionLimitingBehavior              [Limiting behavior]
      S FunctionLocalLimitBehavior          [school analysis]
      S FunctionEndBehavior
    P FunctionRegularity                    [Regularity]
      P FunctionContinuity                  [school analysis]
      P FunctionDifferentiability           [school calculus]
    P FunctionShapeProperties               [Shape]
      P FunctionConcavity
      P FunctionInflection
    P FunctionCriticalPoints                [Distinguished points; calculus stage]
      S FunctionStationaryPoints

Reserved for later discussion: FunctionAsymptotes, FunctionIntegrability.
```

FunctionDomain stays under AlgebraicFunctions. FunctionSlope already contains AverageRateOfChange
and InstantaneousRateOfChange; neither needs duplication. OneToOneFunction and FunctionInversion
cover injectivity and inverse-function knowledge. Intercepts can use FunctionZeros or evaluation
at input zero with coordinate concepts. Phase/horizontal shift uses FunctionTransformation.

| Descriptor | Definition |
| --- | --- |
| `FunctionProperties` | The attained values, qualitative features, and local and global behavior of functions on stated domains. |
| `FunctionValueProperties` | The attained outputs, zeros, signs, and output bounds of functions on stated domains. |
| `FunctionOrderProperties` | The ordering of function outputs across inputs and the local or global extremal values attained. |
| `FunctionRepetitionProperties` | Repeated input-output patterns and the quantitative features of bounded periodic oscillations. |
| `FunctionRegularity` | Continuity and differentiability of functions at points or across stated intervals. |
| `FunctionShapeProperties` | The concavity of function graphs and changes between upward and downward bending. |
| `FunctionSign` | The positive, negative, or zero outputs of a real-valued function across a stated set of inputs, including where each sign occurs. |
| `FunctionBounds` | Numbers bounding a real-valued function's outputs from below or above on a stated set of inputs, distinguishing sharp bounds from attained extrema. |
| `FunctionSymmetry` | Reflection or half-turn symmetries of a real function's graph, expressed through corresponding input-output relationships on a domain preserved by the symmetry. |
| `EvenFunctionSymmetry` | Symmetry of a real function under negation of its input, with a domain closed under negation and `f(-x)=f(x)` throughout that domain. |
| `OddFunctionSymmetry` | Symmetry of a real function under simultaneous negation of input and output, with a domain closed under negation and `f(-x)=-f(x)` throughout that domain. |
| `FunctionPeriodicity` | Repetition of a function's values under a fixed positive input shift on a domain closed under that shift. The fundamental period is the least such shift when it exists, and its reciprocal gives frequency in cycles per input unit. |
| `OscillationParameters` | The central level and extent of a bounded repeating oscillation with attained cycle extrema, described by the midline halfway between those extrema and the amplitude equal to half their difference. |
| `FunctionLimitingBehavior` | The behavior of a real-valued function as its input approaches a specified location or extends without bound through its domain, distinguishing finite limits, unbounded behavior, and failure to approach a limit. |
| `FunctionLocalLimitBehavior` | Limiting behavior as a real input approaches a specified finite location through the function's domain, including one-sided approaches and locations where the function is undefined. |
| `FunctionEndBehavior` | Limiting behavior as a real input tends toward positive or negative infinity through the function's domain. |
| `FunctionContinuity` | Agreement between a real-valued function's limiting value and its value at a domain point, including continuity on stated intervals and one-sided continuity at included endpoints. |
| `FunctionDifferentiability` | Existence of a finite derivative of a real-valued function at a specified interior input or throughout a stated interval, with any endpoint derivative convention stated separately. |
| `FunctionConcavity` | Upward or downward bending of a real function on an interval, determined by whether its graph lies on or below, or on or above, its chords, distinguishing strict and non-strict convexity or concavity. |
| `FunctionInflection` | A change between upward and downward concavity at a point where a real function is continuous. |
| `FunctionCriticalPoints` | Interior domain points of a real-valued function where its derivative is zero or does not exist, considered as candidates rather than guarantees for local extrema. |
| `FunctionStationaryPoints` | Interior domain points where a real-valued function has a finite derivative equal to zero, whether or not an extremum or inflection occurs. |

The source retains the existing definitions of FunctionRange, FunctionZeros, FunctionMonotonicity, and
FunctionExtrema. Sign and symmetry were compositionally expressible in the earlier coverage
audit; their explicit inclusion here follows the user's broader property-family request.
Sign knowledge supports sign charts and later derivative interpretation; symmetry supports
domain restrictions, graph construction, and later integral simplification.

Boundary examples for review:

- `f(x)=x` on `(0,1)` has sharp bounds 0 and 1 but no attained extrema.
- `x^2` is even on the reals; its restriction to `[0,infinity)` lacks the required negation-invariant domain.
- `(x-2)^2` has reflection symmetry about `x=2` without being even.
- The zero function on the reals is both even and odd, and periodic without a least positive period.
- The periodicity definition admits forward-closed domains such as `[0,infinity)`; it does
  not require two-sided equality between the domain and its translation.
- `2 sin(3x)+1` has amplitude 2, midline 1, period `2pi/3`, and frequency `3/(2pi)`.
  Angular frequency 3 is a different quantity; midline need not mean a time-average in a general oscillation.
- `tan(x)` is periodic but has no finite cycle extrema; periodicity must not imply amplitude knowledge.
- `x^3` at zero is stationary and has an inflection, but is not a turning extremum.
- `abs(x)` has a turning minimum at zero without being differentiable or stationary there.
- `x^4` has second derivative zero at the origin without an inflection.
- `f(x)=x` on `[0,1]` has endpoint extrema that are not interior critical points.
- `sin(x)` as `x` tends to infinity and `sin(1/x)` as `x` tends to zero distinguish bounded
  oscillation without a limit in the end and local cases.

Turning points initially compose extrema and reversal of monotonicity. If an explicit descriptor
is useful, it may specialize FunctionExtrema, with continuity and a reversal of monotonic direction
specified. It must not specialize FunctionStationaryPoints. A hole must be discussed relative to
a stated interval or proposed extension: a function may be continuous everywhere on its actual
domain while its graph has an excluded input.

Core and precalculus work covers values, signs, bounds, monotonicity, extrema, symmetry,
periodicity, oscillation parameters, and qualitative end behavior. Limits, continuity,
differentiability, critical points, and derivative-based concavity analysis belong to the later
school-analysis curriculum. These property concepts are all authored now; their curriculum stage
is not an implementation deferral. Derivative tests, differentiation rules, optimization procedures,
and integration methods are separate method/result families, now included in the
[merged Calculus extension](calculus-family-draft.md#implementation-and-adoption--2026-10-20).

FunctionAsymptotes was subsequently implemented in the further-functions extension below.
The Calculus extension adds RiemannIntegrability to FunctionRegularity: the existence of the
specified definite integral remains distinct from having a familiar elementary antiderivative
or performing integration. Broader integrability concepts remain later work.
No claim of CCSS necessity follows from these later slots.

The five new organizers have constituent children and are ineligible as direct content labels.
Existing FunctionRange, FunctionZeros, FunctionMonotonicity, and FunctionExtrema change only their
organizational parents in this implementation; their definitions and labeling eligibility are retained.
FunctionSymmetry, FunctionLimitingBehavior, and FunctionCriticalPoints remain eligible concepts
with specialization families. "Distinguished points" names the critical/stationary-point branch
in the review table, not a competing organizer for every zero, extremum, and inflection point.
"Shape" is specifically the concavity/inflection subdivision. These choices supersede the earlier
recommendation to keep the whole property tree flat.

References: [CCSS function features](https://www.thecorestandards.org/Math/Content/HSF/IF/),
[periodic models](https://www.thecorestandards.org/Math/Content/HSF/TF/),
[school calculus scope](https://apcentral.collegeboard.org/courses/ap-calculus-ab),
[extrema](https://openstax.org/books/calculus-volume-1/pages/4-3-maxima-and-minima), and
[concavity and derivative tests](https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph).

### Trigonometric family placement

The user accepts shared placement. The alternatives considered were:

1. Algebra-first: TrigonometricIdentities specializes AlgebraicEquivalence; geometry tasks
   compose it with existing triangle/circle concepts.
2. Geometry-first: the identities belong within a broadened TrigonometricRelations family,
   with no equivalence inheritance. This emphasizes their geometric derivation but makes
   algebraic identity navigation less direct.
3. Shared placement: TrigonometricIdentities is `partOf TrigonometricRelations` and
   `specializes AlgebraicEquivalence`; its particular identities specialize it.

Implemented in the merged ontology: option 3. These are single concepts with two justified structural paths.
TrigonometricRelations now includes circular as well as triangle trigonometry.
TrigonometricIdentities has specializing children rather than constituent children, preserving
the structural path rule. PythagoreanTrigonometricIdentity and ComplementaryAngleIdentities
are authored initially.
Additional identities and triangle laws remain deferred. Their primary placement will follow
the mathematical knowledge involved; no general second theorem-family membership is proposed.

The follow-up regrouping places the existing function family alongside the identity family,
so individual functions no longer appear as peers of the entire identity collection:

```text
TrigonometricRelations
  P TrigonometricFunction
    S Cosine
    S Sine
    S Tangent
  P TrigonometricIdentities
    S ComplementaryAngleIdentities
    S PythagoreanTrigonometricIdentity
```

TrigonometricFunction retains its specialization in NumericFunction; TrigonometricIdentities
retains its specialization in AlgebraicEquivalence. Both families have only specializing
children and remain eligible for direct labels. The removed direct constituent edges from
Sine, Cosine, and Tangent are replaced by the single constituent edge from TrigonometricFunction.
This changes structural navigation without changing definitions or specialization inheritance.
The existing AngleCalculation and LengthCalculation progression links remain unchanged;
any broader reorganization as a Trigonometry field requires a separate review of those links.

| Authored descriptor | Mathematical content |
| --- | --- |
| TrigonometricIdentities | Equalities between trigonometric expressions valid throughout their common stated domain, retaining original restrictions when rewritten. |
| PythagoreanTrigonometricIdentity | `sin(theta)^2 + cos(theta)^2 = 1` for every real angle. |
| ComplementaryAngleIdentities | `sin(pi/2 - theta) = cos(theta)` and `cos(pi/2 - theta) = sin(theta)` in radians, with the equivalent 90-degree forms. |

### New variable roles and function arithmetic

These pass the concept-promotion test without multiplying dependence families.

| Area | Definition | Placement |
| --- | --- | --- |
| `IndependentVariable` | The input role of a variable whose admissible values are supplied to a stated mathematical relationship. | `specializes Variable` |
| `DependentVariable` | The output role of a variable specified by a rule from designated inputs, including a constant output rule. | `specializes Variable` |
| `FunctionArithmetic` | Constructing or interpreting a numerical function by applying arithmetic operations pointwise to the outputs of given functions at a common input. Its domain retains the participating functions' input restrictions and excludes inputs where the resulting operation is undefined. | `partOf AlgebraicFunctions` |

The variable roles describe an orientation chosen in a relationship, not an immutable property
of a symbol. In `y=f(x+1)`, `x` can be the independent variable while `x+1` is the FunctionArgument.
Specializing Variable rather than VaryingVariable accommodates constant output rules.

With `f(x)=x^2` and `g(x)=x+1`, their pointwise product is `x^2(x+1)` while their composition
`f(g(x))` is `(x+1)^2`. Their quotient excludes `x=-1`; cancellation would not restore an input
excluded by its construction. This creates a new function with meaningful domain rules.
Later calculus can build on that construction without generating separate Areas for every
combination of function type and operation.

Reference: [function arithmetic and composition](https://openstax.org/books/precalculus-2e/pages/1-4-composition-of-functions).

### Implication and equivalence of constraint transformations

The source models the logical distinction as knowledge and the kinds of supplied
transformation as contextual Scopes. Area `ConstraintTransformationLogic` is
`partOf AlgebraicConstraints`: "The logical relationship between an original constraint and
its transformed form over the same variables and admissible domain, distinguishing two-way
equivalence from one-way implication and the conditions needed for reversal."

This adds the distinction from one-way consequence rather than redefining AlgebraicEquivalence.
The general Logic families are now merged through PR #79, with their eligibility review in the
[logical-foundations record](remaining-school-foundations-draft.md#4-logical-foundations).
ConstraintTransformationLogic retains the distinct algebraic knowledge about solution sets
and admissible domains.

The authored transformation-context Scopes cover squaring both sides, multiplying or dividing
by a variable expression, and clearing denominators. They describe the actual operation and its
conditions; do not assign one logical status to an operation name in all contexts.

ConstraintTransformationScope is their eligible general parent. Its specializing children are
SquaringBothSides, MultiplyingByVariableExpression, DividingByVariableExpression, and
ClearingDenominators. This is a separate Scope family; it does not specialize the knowledge
Area or assert that a displayed transformation is reversible.

Let `S` be the original solution set and `T` the transformed one, in the same domain:

- Equivalence: `S = T`.
- Original implies transformed: `S` is contained in `T`; the transformed condition may add candidates.
- Transformed implies original: `T` is contained in `S`; the transformed condition may lose solutions.

For real inputs, `x=2` implies `x^2=4`, while the reverse needs a nonnegative-input condition.
Conversely, reducing `x(x-1)=0` to `x-1=0` by division loses zero unless its exclusion was already
part of the domain. Checking candidates composes with RelationSatisfaction; a blanket
"extraneous-solutions method" Area is unnecessary. Specific reusable techniques such as
CompletingSquare remain Areas where they contribute additional mathematical knowledge.

### Deferred stages preserved from the review

| Stage | Preserved topics | Boundary |
| --- | --- | --- |
| NumberTheory foundations | Complex-number structure, rational/irrational characterization, closure and mixed-system result types. | Merged at `1b9ecc3`; see the design record and adoption map below. |
| Advanced complex numbers | Conjugates, modulus and argument, rectangular/polar forms, complex-plane representations and operations, Fundamental Theorem of Algebra. | Stage 3A merged at `cf74a23`; FTA is a constituent of AlgebraicTheorems. University-entry stage 3B merged at `5733989` through PR #77; optional Scopes remain deferred. |
| Linear algebra | Vector operations, matrix quantities and arithmetic, zero/identity matrices, determinants, inverses, matrix systems, linear transformations. | Stage 5A merged at `69f60f9` through [PR #73](https://github.com/christian-bick/edugraph-ontology/pull/73); see the [implementation and adoption record](linear-algebra-draft.md#implementation-and-adoption--2026-10-11). LinearAlgebra is a separate root. Spatial finite-coordinate foundations from stage 5B merged through PR #76; the broader stages 5B–5C remain deferred. VectorConcept retains its geometric home with an explicit zero-vector boundary, and VectorObjects means graphics. |
| Further function/trigonometric work | Rational-function asymptotes, continuous repair, angle addition/subtraction identities, sine-area relationship, Laws of Sines and Cosines. | Stage 4 merged at `f0dffbf` through [PR #72](https://github.com/christian-bick/edugraph-ontology/pull/72); see the [implementation record](further-functions-trigonometry-draft.md#implementation-and-adoption--2026-10-11). Subtypes and other optional refinements remain deferred. |
| Calculus methods | Limit and derivative methods, derivative tests and applications, integration/accumulation, elementary differential equations, approximation, series, and curve calculus. | Merged at `5f52168` through [PR #74](https://github.com/christian-bick/edugraph-ontology/pull/74), covering stages A, B, and E under the existing Calculus root; see [implementation and adoption](calculus-family-draft.md#implementation-and-adoption--2026-10-20). Existing Analysis properties remain in place. This is independent of completing CCSS; consumer adoption and direct-Calculus-label review remain separate work. |

The accepted representation, equivalence, theorem, function-property, and transformation-logic
decisions are implemented. NumberTheory and the school-level advanced complex-number,
function/trigonometric, and linear-algebra extensions are merged. Calculus stages A, B, and E
are also merged; broader continuations remain separate work.
General BinomialTheorem is authored in the merged ontology even though its CCSS
standard is marked `(+)`; FiniteGeometricSum addresses core
[A-SSE.B.4](https://www.thecorestandards.org/Math/Content/HSA/SSE/).
Existing content annotations and consumer package pins require their
own adoption review; the ontology merge does not update them.

## Recommended next ontology extensions

These priorities concern the algebra, number-system, and function work discussed in this record.
Steps 1 and 2 are merged, with step 2's two additions at `702714b`. Step 3A is merged at
`cf74a23`. Step 4 is merged at `f0dffbf`; step 5A is merged at `69f60f9` through
[PR #73](https://github.com/christian-bick/edugraph-ontology/pull/73); see the
[LinearAlgebra design record](linear-algebra-draft.md). Step 6 is merged at `5f52168`
through PR #74; see the
[Calculus implementation record](calculus-family-draft.md#implementation-and-adoption--2026-10-20).
The [Probability, Statistics, and Combinatorics extension](probability-statistics-combinatorics-draft.md)
is merged at `9750eff` through PR #75. The
[remaining-school-foundations record](remaining-school-foundations-draft.md) records the
finite-coordinate geometry portion of stage 5B merged at `209091b` through PR #76 and complex
stage 3B merged at `5733989` through PR #77. GraphTheory is merged at `13328d3` through PR #78
as a root; logical foundations are merged at `4de7612` through PR #79. Conics are merged at
`6aa963e` through PR #80; the two targeted number-theory results are merged at `0af4aba`
through PR #81. The [individual curriculum-requirement audit](coverage-audit-2026-10-21.md)
records remaining Euclidean geometry, advanced-course and representation follow-ups.
Step 4's optional refinements and
the broader university continuation of stages 5B–5C remain deferred.
They are not a completeness claim for all CCSS geometry, statistics, or other fields. Proposed
family names in the unimplemented stages below are planning candidates, not additional authored descriptors. The sequence
separates core CCSS gaps from standards marked `(+)` and later calculus; a `(+)` item may still
be worth implementing early when it contributes useful shared knowledge, as BinomialTheorem did.

### 1. NumberTheory foundations — next implementation proposal

Status: implemented on `codex/number-theory-foundations` and merged at `1b9ecc3`.
The heading is retained as a stable link from the earlier plans. The
[NumberTheory design record](number-theory-basics-draft.md) contains definitions, examples,
placement alternatives, and an [adoption map](number-theory-basics-draft.md#implementation-and-adoption--2026-10-10).
Its [second draft](number-theory-basics-draft.md#draft-2--a-university-informed-subject-structure)
starts from introductory university subject organization, then maps the school requirements
into that broader structure. The implementation selects the broad educational NumberTheory
boundary and the shared AlgebraicStructures home for closure; the alternative boundary is
preserved for comparison.

NumberTheory is broadened for number-system knowledge. ArithmeticSpaces retains its existing
integer and rational arithmetic subtree, with its definition clarified toward computation and
representation. The implementation distinguishes structural knowledge from carrying out
arithmetic and makes the Factorization and DivisibilityRules labeling changes explicit.

The school-facing additions cover three independently learned subjects:

| Subject | Knowledge to add or clarify | Reuse and boundary |
| --- | --- | --- |
| Rational and irrational structure | RationalNumberCharacterization and NumberSystemRelations. | Reuse existing number-system Scopes and notation concepts. A displayed irrational number does not establish knowledge of the characterization. |
| Operation and result-type properties | Shared OperationClosure and NumberOperationResultTypes. | Keep closure distinct from mixed-system rules: a nonzero rational times an irrational is irrational, while zero times an irrational is zero. |
| Complex-number foundations | ComplexNumberStructure and the ComplexNumbers Scope. | Reuse operations, arithmetic laws, and quadratic-solving knowledge without adding an Area for every operation/number-system combination. |

This addresses core [8.NS.A.1](https://www.thecorestandards.org/Math/Content/8/NS/),
[N-RN.B.3](https://www.thecorestandards.org/Math/Content/HSN/RN/), and
[N-CN.A.1-2 and C.7](https://www.thecorestandards.org/Math/Content/HSN/CN/).
Complex-number foundations and quadratics with complex solutions are core requirements;
only the additional complex-number stages below are marked `(+)`.

The authored tree also includes GCD/LCM and the explicitly defined university bridge concepts.
Representative examples distinguish knowing why `0.333... = 1/3`, predicting an operation's
result type, calculating `(1 + i)(1 - i) = 2`, and solving `x^2 + 1 = 0`. Consumer adoption and
the separate decimal/fraction Scope boundary review remain outstanding.

### 2. Close the remaining core algebra/function coverage questions

Status: source audit completed on 2026-10-11 against `1b9ecc3`; the two targeted additions
were merged into `main` at `702714b`. The
[audit document](core-ccss-coverage-audit.md) inventories **114 core terminal standards** across
the selected middle-school prerequisites, Number and Quantity, Algebra, Functions, and three
right-triangle crosslinks. It records existing eligible concepts, representative tasks, and
nearby counterexamples. It does not certify dataset implementation or all CCSS fields.

The earlier candidates are supported compositionally: OperationClosure supplies polynomial
closure; ExponentLaws, Root, and ConceptDerivation identify rational-exponent justification;
existing approximation, solving, transformation-logic, and graphical-solution concepts cover
the other focused questions. The remainder/factor theorems, finite geometric sum, unit-circle
functions, and periodic-model properties are already authored.

The review's three targeted follow-ups are resolved for the requested preview scope:

- NumericFunction, FunctionSymbol, and FunctionArgument provide the accepted composition for
  numerical correspondence and formal expression roles in F-IF.A.1. The graph facet uses
  existing concepts as evidenced. FunctionTypes and all function descriptors remain unchanged.
- UnitDimensionality is authored under MeasuringWithUnits for unit composition and dimensional
  consistency, beyond the already supported conversions in 6.RP.A.3.d and N-Q.A.1.
  MeasuringWithUnits retains its original definition without an example comment.
- PythagoreanTheorem is authored under GeometricRelations, expanding RightTriangle with the
  squared-side characterization and its converse. RightTriangle and measurement concepts
  already provide broad application coverage; the theorem adds a useful reusable distinction,
  especially for proofs. Integer triples and the trigonometric identity are not replacements.

The [follow-up record](core-ccss-coverage-audit.md#targeted-follow-up-proposal) includes exact
authored definitions, contrasting examples, and
[implementation and adoption details](core-ccss-coverage-audit.md#implementation-adoption-and-preview--2026-10-11).
Measurement and FunctionNotation retain their existing placement. Their suggested relocations
and a possible FunctionDefinition extension for arbitrary-set correspondence are separately
deferred, not requirements of the accepted numerical scope or changes in this preview.

The audit's 114 mappings preserve the historical baseline; the preview separately records
967 descriptors and 5,170 assertions with no existing descriptor annotations, authored edges,
ancestry, or eligibility changed. The initial implementation passed focused source checks and
the full Docker gate, including both generated clients and all 49 Python tests. The same
validation also passed after restoring MeasuringWithUnits and removing its added example.
Further evidence work concerns mixed-system
property attribution, complete versus sampled solutions, justified error bounds, and the
separately recorded decimal/fraction Scope boundaries. No additional calculus family or
object-by-method multiplication is required to close these core questions.

### 3. Advanced complex numbers and polynomial structure — CCSS (+)

Status: stage 3A was merged into `main` at `cf74a23` through
[PR #71](https://github.com/christian-bick/edugraph-ontology/pull/71); see the
[implementation and adoption record](advanced-complex-numbers-draft.md#implementation-and-adoption--2026-10-11).
It adds seven Areas distributed across the
existing number-system, geometry, notation, and theorem families: ComplexConjugation,
ComplexModulus, ComplexArgument, ComplexPlane, ComplexPolarNotation, ComplexArithmeticGeometry,
and FundamentalTheoremOfAlgebra. Existing rectangular-number structure, arithmetic, identities,
factorization, and solving concepts are reused without redefining or reparenting them.

The implementation has six partOf edges, one specializes edge, and two progression edges.
No existing descriptors or authored relations are modified or retired. The focused source
comparison and full Docker gate passed, including both generated clients and all 49 Python
tests; the implementation document records the scope and validation details.

The design record compares a cohesive ComplexNumberSystem organizer and a smaller representation
bundle with the distributed approach. It preserves De Moivre's identity, complete root sets,
roots of unity, conjugate-root pairing, and exponential form as a university-entry continuation,
and records optional representation Scopes separately from knowledge Areas. That stage 3B
continuation is now merged at `5733989` through PR #77; see the
[stage 3B record](advanced-complex-numbers-draft.md#stage-3b-implementation--2026-10-21).
The optional Scopes remain deferred.

The relevant [N-CN.A.3, B.4-6, and C.8-9](https://www.thecorestandards.org/Math/Content/HSN/CN/)
are marked `(+)`. This stage can also review the rational-expression system and its closure
from [A-APR.D.7](https://www.thecorestandards.org/Math/Content/HSA/APR/).

### 4. Further function properties and trigonometry — CCSS (+)

Status: merged into `main` at `f0dffbf` through
[PR #72](https://github.com/christian-bick/edugraph-ontology/pull/72). The implementation branch
was `codex/functions-trigonometry`, based on `main` at `cf74a23`; see the
[implementation and adoption record](further-functions-trigonometry-draft.md#implementation-and-adoption--2026-10-11).
The design audits all 11 advanced Functions leaves and three
general-triangle leaves, including inverse-function refinements beyond the original roadmap list.
Existing composition, inversion, domain, symmetry, and periodicity concepts supply nine mappings.

The implementation adds FunctionAsymptotes, TrigonometricAngleAdditionIdentities, LawOfSines,
LawOfCosines, and TriangleSineAreaFormula for the identified knowledge gaps. It also includes
FunctionRemovableDiscontinuity for continuous repair/extension and a TriangleTrigonometricRelations
organizer alongside the existing function and identity branches: seven new Areas in total,
six eligible for labeling. It adds five partOf edges, two specializes edges, and the progression
LawOfCosines expands PythagoreanTheorem. A five-Area minimum remains a design alternative;
finer subtypes and the other optional refinements remain deferred. Existing definitions,
authored edges, and eligibility remain unchanged, with no descriptor retired. Source comparison,
ontology assessments, and the full Docker/client gate passed, including 49 Python tests; the
implementation document records the verification and adoption boundary.

The complete mapping covers F-IF.C.7.d; F-BF.A.1.c, B.4.b-d, B.5;
F-TF.A.3-4, B.6-7, C.9; and G-SRT.D.9-11, all `(+)`. The prior core audit remains the record
for F-TF.A.1-2, B.5, C.8, and G-SRT.C.7. Competency and dataset adoption remain separate work.

### 5. Linear algebra — a distinct CCSS (+) field

Status: stage 5A merged into `main` at `69f60f9` through
[PR #73](https://github.com/christian-bick/edugraph-ontology/pull/73). The implementation branch
was `codex/linear-algebra`, based on `main` at `f0dffbf`. The [design and implementation record](linear-algebra-draft.md)
places LinearAlgebra at the root, as a sibling of Algebra and Analysis.

The implementation adds 28 Areas: seven organizers and 21 eligible concepts, including formal
vector and matrix notation. VectorArithmetic and MatrixArithmetic organize techniques:
EntrywiseCombination supplies corresponding-entry sums and differences, RowColumnProduct
supplies ordered matrix products, and MatrixConformability supplies shape conditions.
ScalarMatrixMultiplication expands ScalarVectorMultiplication. Existing numerical operation
definitions remain unchanged. The only existing-definition change explicitly includes the
zero vector in VectorConcept; its geometric home and relations remain unchanged.

The source has 25 new partOf edges, three specializes edges, and ten progression links.
Its 150 new-Area assertions produce 1,009 descriptors and 5,393 assertions. Source comparison,
graph assessment, and the full Docker/client gate passed; results are recorded in the
[implementation and adoption record](linear-algebra-draft.md#implementation-and-adoption--2026-10-11).
Consumer packages and dataset targets remain separate adoption work.

The field covers vectors, matrices, their operations, determinants,
inverses, matrix systems, and linear transformations. Reuse VectorConcept and existing constraint
and function concepts where appropriate; distinguish matrix multiplication and inverse structure
from ordinary numerical arithmetic. All [N-VM standards](https://www.thecorestandards.org/Math/Content/HSN/VM/)
and matrix-system standards [A-REI.C.8-9](https://www.thecorestandards.org/Math/Content/HSA/REI/)
are marked `(+)`. The stage preserves all 17 terminal mappings. Introductory-university
stages 5B–5C remain deferred beyond the spatial batch merged through PR #76, including abstract
vector spaces, row reduction, general inner-product geometry, and spectral theory.
Matrix powers and division are outside the agreed extension.

### 6. Calculus methods — after the CCSS extensions

Status: implemented on `codex/calculus-foundations` against `main` at `c313e4a` and merged
through PR #74 at `5f52168` on 2026-10-21. The [implementation and adoption record](calculus-family-draft.md#implementation-and-adoption--2026-10-20)
records the source delta and verification. The extension reuses the existing **Calculus root**
as an independent field alongside Algebra, Analysis, and LinearAlgebra. It organizes reusable
knowledge into seven branches:
LimitMethods, DifferentialCalculus, IntegralCalculus, DifferentialEquations,
CalculusApproximation, SeriesCalculus, and CurveCalculus.

The [requested family expansion](calculus-family-draft.md#2026-10-20--requested-family-expansion)
details IntegrationMethods, DifferentiationRules, DifferentialEquations, CurveCalculus and
DerivativeApplications with constituent groups and narrower specializations, adding 25 Areas
to the original 105-Area proposal. The subsequent limit review consolidates definitional criteria
into the existing properties and retains SequentialLimitCriterion within FunctionTheorems.
The implementation includes all 130 Areas: 16 organizers and 114 eligible concepts, with
95 partOf, 36 specializes, and 23 progression assertions. The final manual refinement at
`c22f2ee` removed the draft NumericalIntegration specialization of NumericApproximation.
All five expanded subtrees have definitions, examples, and curriculum stage assignments.

Stage A covers school foundations, including limits, differentiation and its rules, derivative
applications, antiderivatives, definite accumulation, and the Fundamental Theorem of Calculus.
Stage B extends this to advanced-school and first-year methods, elementary differential equations,
approximation, series, and parametrized curves; stage E records enrichment. All three stages are
included in the merged implementation. Further real analysis and multivariable calculus remain later
work. These are curriculum staging choices rather than
additional ontology hierarchy levels, and calculus is not a missing CCSS requirement.

The already authored local limits, continuity, differentiability, concavity, and critical points
remain properties within Analysis; they do not supply all methods or theorems for establishing
and using them. Compose methods with existing function types, dependence, and properties instead
of introducing a method family for every function type. The design record supplies definitions, examples,
research sources, and the boundary between a property's meaning and the calculus used to establish it.

Adding the first partOf children makes Calculus an organizer under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
Consumer adoption must therefore review existing direct Calculus labels and replace them with
evidence-supported descendants or existing concepts; retaining the identifier does not remove
this adoption requirement. Existing Analysis labels are not moved or retired, and existing
structural ancestry is unchanged.

Package adoption is a parallel maintenance task: confirm the release that contains the merge,
then review retired identifiers and changed ancestry before updating consumer pins, annotations,
and captured Grade 5/6 target plans. It does not replace the ontology extensions above.
