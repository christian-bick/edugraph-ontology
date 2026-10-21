# High-school CCSS ontology coverage audit

[Audit conclusions and method](coverage-audit-2026-10-21.md).

Baseline: `0af4aba97731e49cbff3ac51ca9ef519d174a945`. Reviewed 2026-10-21. **179 content leaves: 127 core and 52 (+).** All 22 official domains reconcile with both local inventory representations; no missing or duplicate IDs.

Local tree and flat-map inventory independently reconciled to all 22 official domain pages; PDF checked for parent qualifiers, heading stars, and transcription differences. Mappings use current eligible descriptors and include parent requirements. Composition lists are available facets/alternatives, not mandatory label bundles.

This is ontology expressibility at its current granularity, not dataset/generator/target coverage or a proof that arbitrary teaching materials are fully classified. A definition-or-representation gap may be resolved by a definition/Scope decision instead of adding a new Area. Generic proof and object labels do not independently identify every theorem.

**Judgments:** direct means a specific existing Area supplies the principal knowledge; composition combines eligible concepts; gap means a missing independent concept/procedure; definition-or-representation gap identifies a boundary or insufficient distinction requiring review. All listed descriptors passed existence and labeling-eligibility checks. Abilities and Scopes are prefixed B: and S:.

## Summary

| Content set | Direct | Composition | Gap | Definition/representation boundary |
| --- | ---: | ---: | ---: | ---: |
| core | 7 | 104 | 11 | 5 |
| plus | 7 | 43 | 2 | 0 |

## Residual questions and representative tasks

| Standard | Classification | Reason | Probe |
| --- | --- | --- | --- |
| [G-CO.B.8](https://www.thecorestandards.org/Math/Content/HSG/CO/) | gap | Broad triangle/congruence definitions do not supply sufficient partial-data criteria; the reusable mathematical knowledge needs explicit coverage. | Explain why SAS determines a triangle up to a rigid motion, but SSA need not. |
| [G-CO.C.9](https://www.thecorestandards.org/Math/Content/HSG/CO/) | gap | Angle objects exist, but transversal correspondences and the perpendicular-bisector equidistance locus are missing reusable results; generic proof labels do not supply them. | Prove that the perpendicular bisector is exactly the locus equidistant from two endpoints; distinguish alternate interior from corresponding angles. |
| [G-CO.C.10](https://www.thecorestandards.org/Math/Content/HSG/CO/) | gap | Triangle broadly includes properties but does not state angle-sum/base-angle, midsegment, or median-concurrency results; mathematical knowledge remains unspecified. | Prove that the three medians concur, or prove the triangle midsegment theorem. |
| [G-CO.C.11](https://www.thecorestandards.org/Math/Content/HSG/CO/) | gap | General shape-property labels do not state diagonal-bisection or the rectangle converse; these reusable results need coverage, with family granularity still a design choice. | Prove diagonal bisection in a parallelogram and establish the equal-diagonals rectangle converse. |
| [G-CO.D.12](https://www.thecorestandards.org/Math/Content/HSG/CO/) | gap | Drawing and coordinates do not identify admissible compass/straightedge operations, angle/segment copying and bisection, or constructive guarantees. | Construct an angle bisector with an unmarked straightedge and compass, with a correctness argument. |
| [G-CO.D.13](https://www.thecorestandards.org/Math/Content/HSG/CO/) | gap | The objects are covered; exact inscribed construction knowledge and its permitted tools/operations are absent. | Construct a regular hexagon inscribed in a given circle without measurement. |
| [G-SRT.A.1a](https://www.thecorestandards.org/Math/Content/HSG/SRT/) | definition-or-representation gap | Dilation says a different size, excluding scale one and obscuring invariant lines; revise its fixed-center/scale-factor boundary. | Dilate a line through the center with scale one and explain why the line is unchanged. |
| [G-SRT.A.1b](https://www.thecorestandards.org/Math/Content/HSG/SRT/) | definition-or-representation gap | The same definition excludes unit scale; the experimental requirement survives splitting into this leaf. | Experiment with scale factors 1/2, 1, and 2 and compare image/original segment lengths. |
| [G-SRT.A.3](https://www.thecorestandards.org/Math/Content/HSG/SRT/) | gap | Similarity is defined, but AA sufficiency is independent mathematical knowledge beyond full corresponding-measure checks. | Show that two corresponding equal angles suffice for triangle similarity. |
| [G-SRT.B.5](https://www.thecorestandards.org/Math/Content/HSG/SRT/) | gap | The general relations do not supply sufficient criteria; this shares the ASA/SAS/SSS/AA mathematical-knowledge gap. | Choose a sufficient triangle criterion to justify a length without knowing every side and angle. |
| [G-C.A.2](https://www.thecorestandards.org/Math/Content/HSG/C/) | gap | Tangent-radius and chord-center facts exist; inscribed-angle/central-angle and diameter-right-angle theorems are missing independent knowledge. | Explain why an angle subtending a diameter is right and relate an inscribed angle to its central angle. |
| [G-C.A.3](https://www.thecorestandards.org/Math/Content/HSG/C/) | gap | Incenter/circumcenter constructions and cyclic-quadrilateral angle relations are not supplied by those object labels. | Construct a triangle incircle/circumcircle; prove that opposite angles in a cyclic quadrilateral sum to 180 degrees. |
| [G-C.A.4 (+)](https://www.thecorestandards.org/Math/Content/HSG/C/) | gap | The tangent-radius fact is present; an exact tangent-construction method and its conditions are not. | Construct both tangents from an exterior point using the circle on the center-point diameter. |
| [G-C.B.5](https://www.thecorestandards.org/Math/Content/HSG/C/) | definition-or-representation gap | The arc/radian part composes; sector geometry and its area relationship are only implicit in broad area/circle knowledge. | Derive sector area as the central-angle fraction of a full disk, distinguishing sector from segment. |
| [G-GMD.A.1](https://www.thecorestandards.org/Math/Content/HSG/GMD/) | gap | Calculation and dissection compose partially, but Cavalieri's principle and its equality-of-sections argument are absent; integration is not the requested informal method. | Explain equal volumes from equal cross-sectional areas at every height before applying cone/pyramid formulas. |
| [G-GMD.A.2 (+)](https://www.thecorestandards.org/Math/Content/HSG/GMD/) | gap | CrossSectionIntegration requires integration and does not identify the noncalculus equal-section/equal-volume principle. | Use Cavalieri to compare a hemisphere with a cylinder-minus-cone without integration. |
| [G-GMD.B.4](https://www.thecorestandards.org/Math/Content/HSG/GMD/) | definition-or-representation gap | Plane sections compose through intersection; rotational generation about an axis is not specified by the planar fixed-point Rotation definition. | Rotate a right triangle about one leg and identify the resulting solid and its dimensions. |
| [F-IF.A.1](https://www.thecorestandards.org/Math/Content/HSF/IF/) | definition-or-representation gap | The accepted composition covers numerical correspondences; arbitrary-set mappings in the unrestricted definition remain outside NumericFunction's explicit boundary. | Decide whether assigning each country to its capital defines a function, without numerical coding of either set. |

Routine formulas remain compositional: for example, G-GMD.A.3 uses VolumeCalculation with the specified solid. A missing theorem name alone is not automatically a missing concept; the theorem/criterion rows flag independently distinguishable knowledge for a deliberate granularity decision. Plane sections are covered by intersections and solids; the axis-of-rotation issue concerns solid generation. The earlier accepted numerical function composition is preserved; F-IF.A.1 flags only its unrestricted set-mapping boundary.

## Source-data findings

- **S-ID.B.6a:** Local description omits quadratic models. Audit includes linear, quadratic, and exponential models, as both official HTML and PDF page 81 require. [Official source](https://www.thecorestandards.org/wp-content/uploads/Math_Standards1.pdf#page=81).
- **F-TF.A.3:** Official HTML says x where the PDF and local text have pi-x. PDF page 71 controls this audit: pi-x, pi+x, and 2pi-x. [Official source](https://www.thecorestandards.org/wp-content/uploads/Math_Standards1.pdf#page=71).
- **S-*:** Individual pages/local flags do not consistently repeat the category modeling star. All 34 statistics/probability leaves inherit the star from PDF page 79; page 57 states heading-star inheritance. [Official source](https://www.thecorestandards.org/wp-content/uploads/Math_Standards1.pdf#page=57).
- **S-CP.B.*:** Official HTML cluster heading drops the PDF uniform-model qualifier. Preserve the uniform probability model context from PDF page 82 for S-CP.B.6–9. [Official source](https://www.thecorestandards.org/wp-content/uploads/Math_Standards1.pdf#page=82).
- **S-MD.A.1:** Official wording assigns random-variable values to events rather than outcomes. Map the intended finite outcome-to-value assignment; retain the mathematically correct existing RandomVariable definition. [Official source](https://www.thecorestandards.org/Math/Content/HSS/MD/).
- **Formula typography:** Local superscripts/radicals have several transcription defects, e.g. N-RN.A.1, A-SSE.B.3c, N-CN.B.5, G-GPE.B.4. Audit paraphrases follow official mathematical intent, not malformed local typography. [Official source](https://www.thecorestandards.org/wp-content/uploads/Math_Standards1.pdf).

## Content inventory

### N-RN

[Official domain](https://www.thecorestandards.org/Math/Content/HSN/RN/). 3 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| N-RN.A.1 | core | Justify rational exponents from exponent laws | ExponentLaws, Exponentiation, Root, S:FractionExponent, B:ConceptDerivation | **composition** — The law and root interpretation explain the extension, rather than mere calculator evaluation. |
| N-RN.A.2 | core | Rewrite radicals and rational powers | ExponentLaws, Exponentiation, Root, AlgebraicEquivalence, S:FractionExponent | **composition** — Preserve the stated real-domain and root conventions. |
| N-RN.B.3 | core | Explain rational and mixed-result number types | NumberOperationResultTypes, RationalNumberCharacterization, OperationClosure, B:DeductiveReasoning | **composition** — The rational/irrational result rules and the nonzero multiplier boundary are explicit. |

### N-Q

[Official domain](https://www.thecorestandards.org/Math/Content/HSN/Q/). 3 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| N-Q.A.1 ★ | core | Use coherent units and choose graph scales/origins | UnitDimensionality, UnitConversion, UnitScaleRelation, CoordinateAxes, Origin, B:Interpretation | **composition** — Unit algebra is explicit; graphical scale/origin choices use the coordinate concepts. |
| N-Q.A.2 ★ | core | Select useful quantities for descriptive modeling | AlgebraicModeling, StatisticalVariable, B:ConceptSpecification, B:Formalization | **composition** — Quantities and their roles are selected through existing model/variable concepts and Abilities. |
| N-Q.A.3 ★ | core | Choose accuracy appropriate to measurement limitations | NumericApproximation, DecimalPrecission, DecimalRounding, B:ProcedureApplicability, S:ProvidedMeasurement | **composition** — Representation precision and application judgment suffice when the measurement limitations are given. |

### N-CN

[Official domain](https://www.thecorestandards.org/Math/Content/HSN/CN/). 9 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| N-CN.A.1 | core | Interpret the imaginary unit and complex form | ComplexNumberStructure, S:ComplexNumbers | **direct** — The complex-number structure definition includes the imaginary unit and real/imaginary components. |
| N-CN.A.2 | core | Compute complex arithmetic using number laws | ComplexNumberStructure, Addition, Subtraction, Multiplication, AssociativeLaw, CommutativeLaw, DistributiveLaw, S:ComplexNumbers | **composition** — The arithmetic definitions concern numerical quantities and include complex-number contexts. |
| N-CN.A.3 | (+) | Use conjugates for complex moduli and quotients | ComplexConjugation, ComplexModulus, Division, ComplexNumberStructure | **composition** — Conjugation, modulus, and division are separately represented. |
| N-CN.B.4 | (+) | Relate complex rectangular and polar representations | ComplexPlane, PolarCoordinateRepresentation, ComplexModulus, ComplexArgument | **composition** — The coordinate correspondence and complex magnitude/argument are explicit; this is knowledge of representation, not merely its occurrence. |
| N-CN.B.5 | (+) | Interpret complex operations geometrically | ComplexArithmeticGeometry, ComplexConjugation, ComplexModulus, ComplexArgument, DeMoivreIdentity | **composition** — Geometric operation knowledge exists; power examples can additionally use De Moivre. |
| N-CN.B.6 | (+) | Compute complex-plane distances and midpoints | ComplexPlane, ComplexModulus, Subtraction, ArithmeticMean, MidpointCalculation | **composition** — Difference modulus and coordinate/complex averaging express the required constructions. |
| N-CN.C.7 | core | Solve real quadratics with complex solutions | EquationSolving, QuadraticDependence, QuadraticFormula, CompletingSquare, ComplexNumberStructure | **composition** — The quadratic methods explicitly allow complex outcomes. |
| N-CN.C.8 | (+) | Extend polynomial identities over complex numbers | AlgebraicEquivalence, PolynomialDependence, ComplexNumberStructure, AlgebraicFactorization, S:ComplexNumbers | **composition** — The coefficient domain is complex; no new identity family is required. |
| N-CN.C.9 | (+) | Understand fundamental algebra theorem and quadratic case | FundamentalTheoremOfAlgebra, QuadraticFormula, ComplexNumberStructure, B:DeductiveReasoning | **composition** — The theorem's degree/multiplicity statement and the quadratic demonstration are expressible. |

### N-VM

[Official domain](https://www.thecorestandards.org/Math/Content/HSN/VM/). 15 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| N-VM.A.1 | (+) | Interpret vector magnitude, direction, and notation | VectorConcept, VectorMagnitude, VectorDirection, VectorNotation, S:VectorObjects | **composition** — The vector concept correctly distinguishes the zero vector's absence of direction. |
| N-VM.A.2 | (+) | Obtain displacement components from endpoints | VectorComponents, Subtraction, S:CartesianCoordinateSystem | **direct** — VectorComponents explicitly includes endpoint coordinate differences. |
| N-VM.A.3 | (+) | Model velocity and other vector quantities | VectorConcept, VectorComponents, GeometricVectorCombination, AlgebraicModeling | **composition** — The physical context does not require a duplicate arithmetic family. |
| N-VM.B.4a | (+) | Add vectors geometrically and componentwise | GeometricVectorCombination, EntrywiseCombination, VectorMagnitude, Addition | **composition** — Head-to-tail/parallelogram constructions and nonadditivity of magnitudes are explicit. |
| N-VM.B.4b | (+) | Find the magnitude/direction of a vector sum | GeometricVectorCombination, VectorMagnitude, VectorDirection, VectorComponents, Sine, Cosine | **composition** — Conversion, addition, and Euclidean magnitude/direction compose. |
| N-VM.B.4c | (+) | Interpret and perform vector subtraction | GeometricVectorCombination, EntrywiseCombination, ScalarVectorMultiplication, Subtraction | **composition** — The geometric-combination definition includes reverse-vector addition and tip order. |
| N-VM.B.5a | (+) | Scale vectors geometrically and componentwise | ScalarVectorMultiplication, VectorComponents, VectorDirection | **direct** — The operation includes components, scaling, and reversal for negative scalars. |
| N-VM.B.5b | (+) | Relate scalar multiples to magnitude/direction | ScalarVectorMultiplication, VectorMagnitude, VectorDirection | **composition** — The scalar operation itself specifies absolute-value scaling, sign, and zero behavior for real vectors; the rational-only intuitive magnitude Area is unnecessary. |
| N-VM.C.6 | (+) | Represent data and relationships as matrices | MatrixStructure, MatrixNotation, AdjacencyMatrix | **composition** — Generic arrays handle data and incidence tables; AdjacencyMatrix handles that particular network representation when actually used. |
| N-VM.C.7 | (+) | Multiply matrices by scalars | ScalarMatrixMultiplication, MatrixStructure | **direct** — ScalarMatrixMultiplication explicitly supplies the matrix operation. |
| N-VM.C.8 | (+) | Compute conformable matrix sums, differences, products | EntrywiseCombination, RowColumnProduct, MatrixConformability | **composition** — The distinct entrywise and ordered row-column methods are explicit. |
| N-VM.C.9 | (+) | Explain matrix operation laws and noncommutativity | MatrixOperationIdentities, RowColumnProduct, B:CorrectnessEvaluation | **composition** — RowColumnProduct explicitly warns that reversing factors changes values or definedness. |
| N-VM.C.10 | (+) | Understand neutral matrices and invertibility determinants | ZeroMatrix, IdentityMatrix, MatrixDeterminant, MatrixInverse, MatrixOperationIdentities | **composition** — The determinant definition includes the exact invertibility equivalence. |
| N-VM.C.11 | (+) | Apply matrices as vector transformations | RowColumnProduct, MatrixRepresentationOfLinearMap, LinearMap, VectorComponents, MatrixConformability | **composition** — Matrix action on columns and map representation are present. |
| N-VM.C.12 | (+) | Interpret planar matrices and determinant area scaling | MatrixRepresentationOfLinearMap, DeterminantScaling, LinearMap | **composition** — DeterminantScaling explicitly includes absolute determinant and orientation/collapse boundaries. |

### A-SSE

[Official domain](https://www.thecorestandards.org/Math/Content/HSA/SSE/). 7 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| A-SSE.A.1a ★ | core | Interpret contextual expression roles | Term, Factor, Coefficient, AlgebraicModeling, B:Interpretation | **composition** — Formal roles compose with the contextual symbolic model; occurrence alone is insufficient. |
| A-SSE.A.1b ★ | core | Treat contextual subexpressions as units | Factor, Operand, GroupingSymbol, AlgebraicExpression, AlgebraicModeling, B:Interpretation | **composition** — Composite operands and factors identify the grouped unit without restoring VariableExpression. |
| A-SSE.A.2 | core | Recognize useful equivalent structure | AlgebraicEquivalence, AlgebraicFactorization, DifferenceOfSquaresIdentity, B:ProcedureIdentification | **composition** — The reusable identity and product-form objective distinguish recognition from mere evaluation. |
| A-SSE.B.3a ★ | core | Factor to expose contextual quadratic zeros | AlgebraicFactorization, QuadraticDependence, FunctionZeros, B:ResultInterpretation | **composition** — Product form and zeros are separate knowledge claims; retain the parent interpretation objective. |
| A-SSE.B.3b ★ | core | Complete squares to expose contextual extrema | CompletingSquare, QuadraticDependence, FunctionExtrema, B:ResultInterpretation | **composition** — The rewriting method and extremum interpretation are both represented. |
| A-SSE.B.3c ★ | core | Rewrite exponentials to interpret contextual rates | ExponentialRewriting, ExponentLaws, ExponentialDependence, B:ResultInterpretation | **composition** — Equivalent forms and the interpretation of their parameters compose. |
| A-SSE.B.4 ★ | core | Derive and apply finite geometric sums | FiniteGeometricSum, AlgebraicEquivalence, AlgebraicModeling, B:DeductiveReasoning | **composition** — The identity is explicit, including its ratio-one boundary; derivation needs reasoning evidence. |

### A-APR

[Official domain](https://www.thecorestandards.org/Math/Content/HSA/APR/). 7 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| A-APR.A.1 | core | Establish polynomial closure and compute | OperationClosure, PolynomialDependence, AlgebraicEquivalence, DistributiveLaw | **composition** — Closure and equivalent polynomial rewriting cover both universal and computational facets. |
| A-APR.B.2 | core | Connect remainder, evaluation, and factors | PolynomialRemainderTheorem, PolynomialFactorTheorem, AlgebraicSubstitution | **composition** — Both theorem statements already exist; division alone would be insufficient. |
| A-APR.B.3 | core | Use polynomial zeros to sketch graphs | PolynomialFactorTheorem, FunctionZeros, PolynomialDependence, FunctionSign, B:Visualization, S:GraphicalAlgebraicRepresentation | **composition** — Zeros and sign behavior support graph construction when factorization is available. |
| A-APR.C.4 | core | Prove polynomial identities and apply them | AlgebraicEquivalence, PolynomialDependence, PythagoreanTriples, B:DeductiveReasoning | **composition** — General equivalence supports identities beyond named examples; the proof Ability records the demand. |
| A-APR.C.5 | (+) | Expand binomial powers with combinatorial coefficients | BinomialTheorem, BinomialCoefficient, PascalIdentity, B:ProcedureExecution | **composition** — The general theorem and coefficient recurrence exist; the suggested proof is optional. |
| A-APR.D.6 | core | Rewrite rational expressions as quotient and remainder | PolynomialDivision, RationalDependence, AlgebraicEquivalence | **composition** — Division explicitly retains denominator restrictions and remainder structure. |
| A-APR.D.7 | (+) | Establish rational-expression closure and compute | OperationClosure, RationalDependence, AlgebraicEquivalence, PolynomialDivision | **composition** — Admissible domains and nonzero divisors remain necessary in the composition. |

### A-CED

[Official domain](https://www.thecorestandards.org/Math/Content/HSA/CED/). 4 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| A-CED.A.1 ★ | core | Model and solve one-variable constraints | AlgebraicModeling, EquationSolving, InequalitySolving, AffineDependence, QuadraticDependence, RationalDependence, ExponentialDependence, S:SingleVariable | **composition** — Function/dependence alternatives identify the required cases without object-by-method families. |
| A-CED.A.2 ★ | core | Model multivariable equations and graph them | AlgebraicModeling, Equation, CoordinateAxes, Origin, S:GraphicalAlgebraicRepresentation, B:Visualization | **composition** — Model selection, formal equality, labeled coordinates, and graphical context are distinguishable. |
| A-CED.A.3 ★ | core | Model joint constraints and interpret feasibility | AlgebraicModeling, ConstraintSystem, RelationSatisfaction, SystemSolving, B:ResultInterpretation | **composition** — Solutions must satisfy the complete system and the situation's admissibility conditions. |
| A-CED.A.4 ★ | core | Rearrange formulas for a chosen quantity | EquationSolving, AlgebraicEquivalence, Parameter, ConstraintTransformationLogic | **composition** — Parameter roles and exceptional divisions can be recorded when actually examined. |

### A-REI

[Official domain](https://www.thecorestandards.org/Math/Content/HSA/REI/). 13 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| A-REI.A.1 | core | Justify equivalent equation-solving steps | EquationSolving, AlgebraicEquivalence, ConstraintTransformationLogic, B:DeductiveReasoning | **composition** — Solving plus equivalence/implication knowledge expresses the required argument. |
| A-REI.A.2 | core | Solve radical/rational equations and reject extraneous candidates | EquationSolving, ConstraintTransformationLogic, RelationSatisfaction, RationalDependence, Root, S:SquaringBothSides, S:ClearingDenominators | **composition** — Transformation-type Scopes distinguish the source of candidates without duplicating solving Areas. |
| A-REI.B.3 | core | Solve affine equations and inequalities with parameters | EquationSolving, InequalitySolving, AffineDependence, Parameter, S:SingleVariable | **composition** — Letter coefficients and admissible parameter cases must remain explicit in the task. |
| A-REI.B.4a | core | Complete squares and derive the quadratic formula | CompletingSquare, QuadraticFormula, EquationSolving, B:DeductiveReasoning | **composition** — Both reusable methods and their derivational relationship are expressible. |
| A-REI.B.4b | core | Choose quadratic methods and express complex solutions | EquationSolving, QuadraticDependence, Root, CompletingSquare, QuadraticFormula, AlgebraicFactorization, ComplexNumberStructure | **composition** — The chosen method and number-system result are independently observable. |
| A-REI.C.5 | core | Prove equivalent equation replacement in systems | SystemRewriting, AlgebraicEquivalence, B:DeductiveReasoning | **composition** — The system keeps the other equation, preserving the complete solution set. |
| A-REI.C.6 | core | Solve affine systems exactly and approximately | SystemSolving, SystemElimination, SystemSubstitution, AffineDependence, NumericApproximation, S:GraphicalAlgebraicRepresentation | **composition** — Exact symbolic methods and approximate graphical outputs are already expressible. |
| A-REI.C.7 | core | Solve mixed affine/quadratic systems graphically and algebraically | SystemSolving, SystemSubstitution, EquationSolving, S:GraphicalAlgebraicRepresentation, B:Visualization | **composition** — Apply dependence labels to individual equations; the mixed system is not uniformly quadratic. |
| A-REI.C.8 | (+) | Represent a linear system as a matrix equation | MatrixSystemRepresentation, MatrixStructure, VectorComponents | **direct** — MatrixSystemRepresentation explicitly supplies the shared representation knowledge. |
| A-REI.C.9 | (+) | Use matrix inverses to solve linear systems | MatrixInverse, MatrixSystemRepresentation, SystemSolving, RowColumnProduct | **composition** — Invertibility and order-sensitive inverse use are defined; technology is a separate context. |
| A-REI.D.10 | core | Interpret an equation's graph as its solution set | SolutionSet, RelationSatisfaction, Equation, S:GraphicalAlgebraicRepresentation, S:CartesianCoordinateSystem | **composition** — The whole locus, not sampled satisfying points alone, is the claim. |
| A-REI.D.11 ★ | core | Explain graph intersections and approximate equality solutions | EquationSolving, SolutionSet, RelationSatisfaction, NumericApproximation, S:GraphicalAlgebraicRepresentation, FunctionArithmetic | **composition** — The equality is about common input values; the listed function types remain separate eligible alternatives. |
| A-REI.D.12 | core | Graph linear inequalities and their intersections | InequalitySolving, SystemSolving, SolutionSet, AffineDependence, S:GraphicalAlgebraicRepresentation, SetIntersection | **composition** — Strict boundaries are supplied by the inequality; the joint region is a set intersection. |

### F-IF

[Official domain](https://www.thecorestandards.org/Math/Content/HSF/IF/). 14 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| F-IF.A.1 | core | Define functions, notation, domain/range, and graphs | NumericFunction, FunctionDomain, FunctionRange, FunctionNotation, FunctionSymbol, FunctionArgument, SolutionSet, S:GraphicalAlgebraicRepresentation | **definition-or-representation gap** — The accepted composition covers numerical correspondences; arbitrary-set mappings in the unrestricted definition remain outside NumericFunction's explicit boundary. |
| F-IF.A.2 | core | Use/evaluate contextual function notation | FunctionNotation, FunctionArgument, FunctionDomain, AlgebraicSubstitution, B:ResultInterpretation | **composition** — Formal input/output roles and contextual evaluation are independently represented. |
| F-IF.A.3 | core | Recognize integer-indexed recursive sequences as functions | Sequence, RecursiveSequence, NumericFunction, FunctionDomain, S:IntegerNumbers | **composition** — Sequence already supplies the indexing knowledge; no NumericSequence duplicate is needed. |
| F-IF.B.4 ★ | core | Interpret and sketch all contextual function features | FunctionZeros, FunctionMonotonicity, FunctionSign, FunctionExtrema, FunctionSymmetry, FunctionEndBehavior, FunctionPeriodicity, AlgebraicModeling, B:Visualization | **composition** — The expanded property family covers the full named list, with graph/table/verbal representations selected per task. |
| F-IF.B.5 ★ | core | Relate contextual domains to function graphs | FunctionDomain, NumericFunction, AlgebraicModeling, S:GraphicalAlgebraicRepresentation | **composition** — Admissible inputs include both rule restrictions and modeled situations. |
| F-IF.B.6 ★ | core | Interpret average change across representations | AverageRateOfChange, NumericApproximation, S:SymbolicAlgebraicRepresentation, S:TabularAlgebraicRepresentation, S:GraphicalAlgebraicRepresentation | **direct** — The quotient over distinct inputs is explicit; graph estimates add approximation. |
| F-IF.C.7a ★ | core | Graph affine/quadratic functions with key features | AffineDependence, QuadraticDependence, FunctionZeros, FunctionExtrema, S:GraphicalAlgebraicRepresentation, B:Visualization | **composition** — Retain the parent requirement of symbolic input and hand/technology distinction. |
| F-IF.C.7b ★ | core | Graph roots, piecewise, step, and absolute-value functions | PowerFunction, PiecewiseFunction, AbsoluteValueFunction, FunctionDomain, S:GraphicalAlgebraicRepresentation, B:Visualization | **composition** — A step function is a piecewise function with constant branches; no duplicate type is forced. |
| F-IF.C.7c ★ | core | Graph polynomial zeros and end behavior | PolynomialDependence, PolynomialFactorTheorem, FunctionZeros, FunctionEndBehavior, S:GraphicalAlgebraicRepresentation, B:Visualization | **composition** — Available factorization and global end behavior are separate claims. |
| F-IF.C.7d ★ | (+) | Graph rational zeros, asymptotes, and end behavior | RationalDependence, FunctionZeros, FunctionAsymptotes, FunctionEndBehavior, FunctionDomain, S:GraphicalAlgebraicRepresentation | **composition** — Excluded inputs and removable holes remain distinct from asymptotes. |
| F-IF.C.7e ★ | core | Graph exponential/logarithmic and periodic trigonometric features | ExponentialDependence, LogarithmicFunction, TrigonometricFunction, FunctionEndBehavior, FunctionPeriodicity, OscillationParameters, S:GraphicalAlgebraicRepresentation | **composition** — Amplitude/midline/period are explicit; this leaf is core, unlike adjacent 7d. |
| F-IF.C.8a | core | Rewrite quadratics to interpret zeros, extrema, symmetry | AlgebraicFactorization, CompletingSquare, QuadraticDependence, FunctionZeros, FunctionExtrema, FunctionSymmetry, B:ResultInterpretation | **composition** — Equivalent forms retain the parent aim of revealing contextual function properties. |
| F-IF.C.8b | core | Rewrite exponentials to interpret growth/decay rates | ExponentialRewriting, ExponentLaws, ExponentialDependence, FunctionMonotonicity, B:ResultInterpretation | **composition** — The rate interpretation is about equivalent forms, not just substituting an input. |
| F-IF.C.9 | core | Compare function properties across representations | FunctionExtrema, FunctionZeros, FunctionMonotonicity, S:SymbolicAlgebraicRepresentation, S:GraphicalAlgebraicRepresentation, S:TabularAlgebraicRepresentation, S:VerbalAlgebraicRepresentation, B:Evaluation | **composition** — Property labels are selected by the actual comparison; all four representation forms exist. |

### F-BF

[Official domain](https://www.thecorestandards.org/Math/Content/HSF/BF/). 10 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| F-BF.A.1a ★ | core | Build contextual explicit or recursive function rules | AlgebraicModeling, NumericFunction, RecursiveSequence, AlgebraicExpression | **composition** — The parent relationship-between-quantities requirement survives leaf splitting. |
| F-BF.A.1b ★ | core | Build contextual arithmetic combinations of functions | FunctionArithmetic, AlgebraicModeling, ExponentialDependence | **composition** — Pointwise function operations already express the new combined function. |
| F-BF.A.1c ★ | (+) | Compose contextual functions | FunctionComposition, AlgebraicModeling, FunctionDomain | **composition** — The inner output must belong to the outer domain; this leaf is (+). |
| F-BF.A.2 ★ | core | Relate recursive/explicit arithmetic and geometric sequence models | ArithmeticSequence, GeometricSequence, RecursiveSequence, AlgebraicModeling, AlgebraicEquivalence | **composition** — Translation between forms is a performance over the same sequence, not a new sequence type. |
| F-BF.B.3 | core | Transform function graphs and identify parity | FunctionTransformation, EvenFunctionSymmetry, OddFunctionSymmetry, S:GraphicalAlgebraicRepresentation | **composition** — Translation/scaling and function parity are already explicit. |
| F-BF.B.4a | core | Solve for and express an inverse function | FunctionInversion, EquationSolving, OneToOneFunction, FunctionDomain | **composition** — The stated invertibility and original excluded inputs must be retained. |
| F-BF.B.4b | (+) | Verify inverses by composition | FunctionInversion, FunctionComposition, RelationSatisfaction | **composition** — Verification concerns both applicable domains, not a visual resemblance alone. |
| F-BF.B.4c | (+) | Read inverse values from graphs/tables | FunctionInversion, FunctionDomain, S:GraphicalAlgebraicRepresentation, S:TabularAlgebraicRepresentation, B:Interpretation | **composition** — The given invertibility condition is retained from the leaf. |
| F-BF.B.4d | (+) | Restrict a domain to obtain invertibility | FunctionInversion, OneToOneFunction, FunctionDomain | **composition** — Domain restriction and injectivity explicitly express the distinction. |
| F-BF.B.5 | (+) | Use the exponential/logarithmic inverse relationship | Logarithm, Exponentiation, FunctionInversion, EquationSolving | **composition** — Operations and function inversion supply the reusable relationship. |

### F-LE

[Official domain](https://www.thecorestandards.org/Math/Content/HSF/LE/). 7 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| F-LE.A.1a ★ | core | Prove additive versus multiplicative growth patterns | AffineDependence, ExponentialDependence, AlgebraicEquivalence, B:DeductiveReasoning | **composition** — The parent modeling distinction is retained; sampled differences alone do not establish the universal claim. |
| F-LE.A.1b ★ | core | Identify constant additive rates in models | AffineDependence, AverageRateOfChange, AlgebraicModeling | **composition** — Rate interpretation and model choice are separately represented. |
| F-LE.A.1c ★ | core | Identify constant proportional growth/decay | ExponentialDependence, AlgebraicModeling, PercentageNotation | **composition** — The model's multiplicative change per interval identifies exponential dependence; percentage notation is labeled only when interpreted. |
| F-LE.A.2 ★ | core | Construct affine/exponential rules from representations | AlgebraicModeling, AffineDependence, ExponentialDependence, ArithmeticSequence, GeometricSequence, S:TabularAlgebraicRepresentation | **composition** — Graph, verbal, and paired-value conditions can be represented compositionally. |
| F-LE.A.3 ★ | core | Compare eventual exponential and polynomial growth | ExponentialDependence, PolynomialDependence, FunctionArithmetic, FunctionSign, FunctionEndBehavior, S:GraphicalAlgebraicRepresentation, S:TabularAlgebraicRepresentation | **composition** — Comparison is supported without requiring calculus; finite observations should not be mislabeled as a universal proof. |
| F-LE.A.4 ★ | core | Solve exponential models using logarithms | EquationSolving, Logarithm, ExponentialRewriting, ExponentialDependence, AlgebraicModeling | **composition** — The logarithmic inverse handles the required bases; parameters must admit the modeled solution. |
| F-LE.B.5 ★ | core | Interpret affine/exponential model parameters | AlgebraicModeling, AffineDependence, ExponentialDependence, Parameter, Coefficient, B:ResultInterpretation | **composition** — Parameter-role claims are used when their meaning is examined. |

### F-TF

[Official domain](https://www.thecorestandards.org/Math/Content/HSF/TF/). 9 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| F-TF.A.1 | core | Interpret radians using unit-circle arcs | AngleConcept, ArchConcept, Circle, S:RadianScale | **composition** — RadianScale explicitly defines arc-length/radius meaning; no duplicate radian Area is forced. |
| F-TF.A.2 | core | Extend unit-circle trigonometry to real angles | Sine, Cosine, Tangent, TrigonometricFunction, Circle, S:RadianScale | **composition** — The trigonometric definitions use unit-circle coordinates and stated angular units. |
| F-TF.A.3 | (+) | Derive special-angle values and related-angle identities | RightTriangle, IsoscelesTriangle, EquilateralTriangle, Sine, Cosine, Tangent, TrigonometricAngleAdditionIdentities, S:RadianScale | **composition** — Use PDF wording pi-x, pi+x, 2pi-x; the HTML omits pi- in the first expression. |
| F-TF.A.4 | (+) | Explain trigonometric parity and periodicity geometrically | Sine, Cosine, Tangent, EvenFunctionSymmetry, OddFunctionSymmetry, FunctionPeriodicity, Circle | **composition** — Function properties and unit-circle relationships jointly express the explanation. |
| F-TF.B.5 ★ | core | Fit periodic models with specified oscillation parameters | TrigonometricFunction, OscillationParameters, FunctionPeriodicity, AlgebraicModeling | **composition** — Amplitude, frequency, and midline are covered by the explicit parameter concept. |
| F-TF.B.6 | (+) | Restrict monotone trigonometric branches for inversion | TrigonometricFunction, FunctionMonotonicity, FunctionDomain, OneToOneFunction, FunctionInversion | **composition** — Strict monotonicity and domain restriction support the inverse; periodicity alone does not. |
| F-TF.B.7 ★ | (+) | Solve contextual trigonometric equations using inverses | TrigonometricFunction, FunctionInversion, EquationSolving, FunctionPeriodicity, AlgebraicModeling | **composition** — Interpret all admissible branches in the contextual domain rather than only a calculator's principal value. |
| F-TF.C.8 | core | Prove/apply the Pythagorean trigonometric identity | PythagoreanTrigonometricIdentity, PythagoreanTheorem, Sine, Cosine, Tangent, Quadrants, B:DeductiveReasoning | **composition** — Identity, quadrant signs, and proof are distinguishable existing knowledge. |
| F-TF.C.9 | (+) | Prove/apply angle addition and subtraction formulas | TrigonometricAngleAdditionIdentities, Sine, Cosine, Tangent, B:DeductiveReasoning | **direct** — The identity family explicitly includes sums, differences, angular units, and definedness restrictions. |

### G-CO

[Official domain](https://www.thecorestandards.org/Math/Content/HSG/CO/). 13 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| G-CO.A.1 | core | Define foundational planar objects and relations precisely | AngleConcept, Circle, PerpendicularityRelation, ParallelismRelation, LineSegment, PointConcept, LineConcept, ArchConcept, B:AxiomFormalization | **composition** — The objects and relations exist; proof/axiom treatment is recorded through the Ability. |
| G-CO.A.2 | core | Compare planar transformations as point mappings | GeometricTransformations, Translation, LinearMap, ShapeConservation, S:CartesianCoordinateSystem | **composition** — The mapping definition includes plane points; a horizontal stretch can be represented by a linear map. |
| G-CO.A.3 | core | Describe rotational and reflective self-symmetries | SymmetryRelation, Rotation, Reflection, Rectangle, Parallelogram, Trapezoid, Polygon | **composition** — Symmetry is explicitly invariance under a transformation; choose the actual shape labels. |
| G-CO.A.4 | core | Derive planar rigid-motion definitions | Rotation, Reflection, Translation, AngleConcept, PerpendicularityRelation, ParallelismRelation, B:ConceptDerivation | **composition** — Each motion and the defining geometric relationships have eligible concepts. |
| G-CO.A.5 | core | Draw rigid-motion images and compose motions | Rotation, Reflection, Translation, GeometricTransformations, B:SpatialGeneration, ShapePlotting | **composition** — Composition is a requested performance over mappings, not a new motion family requirement. |
| G-CO.B.6 | core | Use rigid motions to determine congruence | CongruenceRelation, Rotation, Reflection, Translation, B:SpatialInterpretation | **composition** — Congruence and the exhibited motion sequence jointly identify the intended criterion. |
| G-CO.B.7 | core | Relate triangle congruence to corresponding measures | CongruenceRelation, Triangle, LengthCalculation, AngleCalculation, B:DeductiveReasoning | **composition** — A task states the corresponding sides/angles; reasoning connects this with rigid-motion congruence. |
| G-CO.B.8 | core | Derive ASA, SAS, and SSS congruence criteria | CongruenceRelation, Triangle, Rotation, Reflection, Translation, B:DeductiveReasoning | **gap** — Broad triangle/congruence definitions do not supply sufficient partial-data criteria; the reusable mathematical knowledge needs explicit coverage. |
| G-CO.C.9 | core | Prove transversal-angle and perpendicular-bisector relations | VerticalAngles, ParallelismRelation, PerpendicularityRelation, CongruenceRelation, LineSegment, B:DeductiveReasoning | **gap** — Angle objects exist, but transversal correspondences and the perpendicular-bisector equidistance locus are missing reusable results; generic proof labels do not supply them. |
| G-CO.C.10 | core | Prove triangle angle, midsegment, and median theorems | Triangle, IsoscelesTriangle, AngleCalculation, MidpointCalculation, ParallelismRelation, B:DeductiveReasoning | **gap** — Triangle broadly includes properties but does not state angle-sum/base-angle, midsegment, or median-concurrency results; mathematical knowledge remains unspecified. |
| G-CO.C.11 | core | Prove parallelogram properties and rectangle converse | Parallelogram, Rectangle, CongruenceRelation, MidpointCalculation, B:DeductiveReasoning | **gap** — General shape-property labels do not state diagonal-bisection or the rectangle converse; these reusable results need coverage, with family granularity still a design choice. |
| G-CO.D.12 | core | Perform exact line and angle constructions | LinearDrawing, LinearShapeDrawing, PerpendicularityRelation, ParallelismRelation, B:SpatialGeneration | **gap** — Drawing and coordinates do not identify admissible compass/straightedge operations, angle/segment copying and bisection, or constructive guarantees. |
| G-CO.D.13 | core | Construct regular figures inscribed in circles | CircularShapeDrawing, LinearShapeDrawing, Circle, EquilateralTriangle, Square, Hexagon, B:SpatialGeneration | **gap** — The objects are covered; exact inscribed construction knowledge and its permitted tools/operations are absent. |

### G-SRT

[Official domain](https://www.thecorestandards.org/Math/Content/HSG/SRT/). 12 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| G-SRT.A.1a | core | Experimentally verify dilation effects on lines | Dilation, LineConcept, ParallelismRelation, GeometricTransformations, B:HypothesisValidation | **definition-or-representation gap** — Dilation says a different size, excluding scale one and obscuring invariant lines; revise its fixed-center/scale-factor boundary. |
| G-SRT.A.1b | core | Experimentally verify dilation length ratios | Dilation, LineSegment, RatioEquivalence, B:HypothesisValidation | **definition-or-representation gap** — The same definition excludes unit scale; the experimental requirement survives splitting into this leaf. |
| G-SRT.A.2 | core | Characterize similarity through transformations and correspondence | SimilarityRelation, Dilation, Rotation, Reflection, Translation, RatioEquivalence | **composition** — The similarity relation and transformations express corresponding angle/side conditions; the Dilation identity-case repair remains shared. |
| G-SRT.A.3 | core | Establish AA triangle similarity | SimilarityRelation, Triangle, AngleConcept, B:DeductiveReasoning | **gap** — Similarity is defined, but AA sufficiency is independent mathematical knowledge beyond full corresponding-measure checks. |
| G-SRT.B.4 | core | Prove proportional triangle sections and Pythagoras by similarity | SimilarityRelation, Triangle, ParallelismRelation, RatioEquivalence, PythagoreanTheorem, B:DeductiveReasoning | **composition** — Similarity supplies proportional sides and the theorem is explicit; retain the required similarity argument rather than an unrelated proof. |
| G-SRT.B.5 | core | Use triangle congruence/similarity criteria in proofs | CongruenceRelation, SimilarityRelation, Triangle, B:DeductiveReasoning | **gap** — The general relations do not supply sufficient criteria; this shares the ASA/SAS/SSS/AA mathematical-knowledge gap. |
| G-SRT.C.6 | core | Derive acute trigonometric ratios through similarity | SimilarityRelation, RightTriangle, Sine, Cosine, Tangent, B:ConceptDerivation | **composition** — The angle-side ratios are covered and the similarity derivation can be evidenced separately. |
| G-SRT.C.7 | core | Explain and use complementary-angle trigonometric identities | ComplementaryAngleIdentities, Sine, Cosine, ComplementaryAngles | **direct** — The required complementary-angle identities are explicitly defined. |
| G-SRT.C.8 ★ | core | Solve applied right triangles | Sine, Cosine, Tangent, PythagoreanTheorem, RightTriangle, EquationSolving | **composition** — Trigonometric relationships and the geometric theorem cover the requested measurements. |
| G-SRT.D.9 | (+) | Derive the sine-area formula with an altitude | TriangleSineAreaFormula, PerpendicularityRelation, Sine, AreaCalculation, B:DeductiveReasoning | **composition** — The formula is explicit; the auxiliary perpendicular is part of the required proof evidence. |
| G-SRT.D.10 | (+) | Prove and apply sine and cosine laws | LawOfSines, LawOfCosines, B:DeductiveReasoning, B:ProcedureExecution | **composition** — Both reusable laws exist; proof and application are separate performances. |
| G-SRT.D.11 | (+) | Apply sine/cosine laws to general triangles | LawOfSines, LawOfCosines, Triangle, LengthCalculation, AngleCalculation | **composition** — The laws cover non-right triangles and admissible ambiguous cases. |

### G-C

[Official domain](https://www.thecorestandards.org/Math/Content/HSG/C/). 5 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| G-C.A.1 | core | Prove all circles similar | Circle, SimilarityRelation, Dilation, B:DeductiveReasoning | **composition** — Circle and similarity plus a center/radius dilation argument suffice; repair unit-scale Dilation as noted separately. |
| G-C.A.2 | core | Relate circle angles, chords, radii, and tangents | Circle, AngleConcept, ChordCenterRelation, TangentRadiusRelation, RadiusDiameterRelation | **gap** — Tangent-radius and chord-center facts exist; inscribed-angle/central-angle and diameter-right-angle theorems are missing independent knowledge. |
| G-C.A.3 | core | Construct incircles/circumcircles and prove cyclic-angle properties | Circle, Triangle, Quadrilateral, CircularShapeDrawing, AngleCalculation, B:DeductiveReasoning | **gap** — Incenter/circumcenter constructions and cyclic-quadrilateral angle relations are not supplied by those object labels. |
| G-C.A.4 | (+) | Construct an external-point circle tangent | Circle, TangentRadiusRelation, CircularShapeDrawing, LinearDrawing, B:SpatialGeneration | **gap** — The tangent-radius fact is present; an exact tangent-construction method and its conditions are not. |
| G-C.B.5 | core | Derive arc-radius and sector-area relationships | ArchConcept, Circle, SimilarityRelation, S:RadianScale, AreaCalculation, RatioEquivalence | **definition-or-representation gap** — The arc/radian part composes; sector geometry and its area relationship are only implicit in broad area/circle knowledge. |

### G-GPE

[Official domain](https://www.thecorestandards.org/Math/Content/HSG/GPE/). 7 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| G-GPE.A.1 | core | Derive circle equations and recover center/radius | Circle, CoordinateDistance, PythagoreanTheorem, CompletingSquare, AlgebraicEquivalence | **composition** — The existing geometric circle and rewriting technique provide the full derivation. |
| G-GPE.A.2 | core | Derive a parabola equation from focus/directrix | Parabola, ConicFocus, ConicDirectrix, CoordinateDistance, AlgebraicEquivalence | **composition** — The focal locus is explicit; squaring must preserve its domain conditions. |
| G-GPE.A.3 | (+) | Derive ellipse/hyperbola equations from focal loci | Ellipse, Hyperbola, ConicFocus, CoordinateDistance, AlgebraicEquivalence, ConstraintTransformationLogic | **composition** — The distance-sum/absolute-difference definitions and nondegeneracy boundaries are explicit. |
| G-GPE.B.4 | core | Prove geometric claims with coordinates | CoordinateDistance, SlopeConcept, Rectangle, Circle, AlgebraicEquivalence, B:DeductiveReasoning | **composition** — Coordinate calculations and the chosen shape's properties support affirmative proofs or counterexamples. |
| G-GPE.B.5 | core | Prove and apply parallel/perpendicular slope criteria | SlopeConcept, ParallelismRelation, PerpendicularityRelation, LinearMap, DotProduct, EquationSolving, B:DeductiveReasoning | **composition** — Coordinate direction vectors and dot product give a grounded proof; handle vertical lines separately. |
| G-GPE.B.6 | core | Partition a directed segment in a given ratio | LineParametrization, VectorComponents, ScalarVectorMultiplication, RatioEquivalence, PointPlotting | **composition** — The affine parameter identifies any internal division ratio, beyond midpoint-only knowledge. |
| G-GPE.B.7 ★ | core | Calculate coordinate polygon perimeters and areas | CoordinateDistance, PerimeterCalculation, AreaCalculation, Triangle, Rectangle, Polygon | **composition** — The measurement procedures apply to the explicitly named shapes; coordinates supply lengths. |

### G-GMD

[Official domain](https://www.thecorestandards.org/Math/Content/HSG/GMD/). 4 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| G-GMD.A.1 | core | Justify circumference, area, and solid-volume formulas informally | CircumferenceCalculation, AreaCalculation, VolumeCalculation, ShapeDecomposition, Cylinder, Pyramid, Cone, B:ProcedureDerivation | **gap** — Calculation and dissection compose partially, but Cavalieri's principle and its equality-of-sections argument are absent; integration is not the requested informal method. |
| G-GMD.A.2 | (+) | Justify sphere volumes using Cavalieri's principle | Sphere, VolumeCalculation, CrossSectionIntegration, B:ProcedureDerivation | **gap** — CrossSectionIntegration requires integration and does not identify the noncalculus equal-section/equal-volume principle. |
| G-GMD.A.3 ★ | core | Apply standard circular-solid volume formulas | VolumeCalculation, Cylinder, Pyramid, Cone, Sphere, AlgebraicSubstitution | **composition** — The existing calculation Area and specific solid Areas support formula use; this does not certify formula derivations. |
| G-GMD.B.4 | core | Identify plane sections and solids of revolution | IntersectionRelation, PlaneConcept, Cone, Cylinder, Sphere, B:SpatialImagination, GeometricTransformations | **definition-or-representation gap** — Plane sections compose through intersection; rotational generation about an axis is not specified by the planar fixed-point Rotation definition. |

### G-MG

[Official domain](https://www.thecorestandards.org/Math/Content/HSG/MG/). 3 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| G-MG.A.1 ★ | core | Choose geometric models for physical objects | Cylinder, Cone, Sphere, ShapeClassification, B:ConceptSpecification, B:Formalization | **composition** — Choosing the appropriate idealized shape is a cognitive performance over existing shape concepts. |
| G-MG.A.2 ★ | core | Model area/volume densities | Division, AreaCalculation, VolumeCalculation, UnitDimensionality, AlgebraicModeling | **composition** — A quantity per area/volume is a quotient with derived dimensions; a separate density Area is not forced. |
| G-MG.A.3 ★ | core | Design under geometric constraints | B:SpatialGeneration, ConstraintSystem, AlgebraicModeling, AreaCalculation, RatioEquivalence, B:Evaluation | **composition** — Design combines existing spatial production, relations, constraint knowledge, and evaluation; select actual geometric methods per task. |

### S-ID

[Official domain](https://www.thecorestandards.org/Math/Content/HSS/ID/). 11 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| S-ID.A.1 ★ | core | Represent numerical observations with distribution plots | FrequencyDistribution, S:LinePlot, S:Histogram, S:BoxPlot, B:Visualization | **composition** — The empirical Area and the three existing representation Scopes cover the required displays. |
| S-ID.A.2 ★ | core | Choose and compare centers/spreads by distribution shape | ArithmeticMean, Median, InterquartileRange, DataStandardDeviation, EmpiricalDistributionShape, B:ProcedureApplicability | **composition** — The measures and shape concept exist; appropriateness is an evidenced judgment, not an organizer label. |
| S-ID.A.3 ★ | core | Interpret distribution differences and outlier effects | EmpiricalDistributionShape, StatisticalOutlier, ArithmeticMean, Median, DataStandardDeviation, B:ResultInterpretation | **composition** — Shape, unusual observations, summaries, and contextual interpretation are independently expressible. |
| S-ID.A.4 ★ | core | Fit/check a normal model and estimate proportions | NormalDistribution, ArithmeticMean, DataStandardDeviation, ParameterEstimation, CumulativeDistributionFunction, B:ProcedureApplicability | **composition** — Probability laws and estimation support areas/proportions; do not substitute NormalApproximation for arbitrary fitting. |
| S-ID.B.5 ★ | core | Interpret joint, marginal, conditional two-way frequencies | RelativeFrequency, ConditionalRelativeFrequency, ContingencyAssociation, S:TwoWayTable, StatisticalVariable | **composition** — Joint/marginal fractions use the appropriate collection; conditional proportions have their own concept. |
| S-ID.B.6a ★ | core | Fit contextual linear, quadratic, and exponential models | RegressionModel, AffineDependence, QuadraticDependence, ExponentialDependence, S:ScatterPlot, ParameterEstimation | **composition** — Quadratic models are required by the official text despite their omission in the local description; retain the scatterplot parent. |
| S-ID.B.6b ★ | core | Assess fit using plotted residuals | RegressionResidual, RegressionModel, S:ScatterPlot, B:Visualization, B:Interpretation | **composition** — The residual definition supports informal diagnostics without requiring a hypothesis test. |
| S-ID.B.6c ★ | core | Fit an affine model to a scatterplot | RegressionModel, AffineDependence, LeastSquaresFit, S:ScatterPlot | **composition** — LeastSquaresFit applies when that method is used; informal fitting still uses RegressionModel. |
| S-ID.C.7 ★ | core | Interpret a regression slope and intercept contextually | RegressionModel, AffineDependence, SlopeConcept, Coefficient, B:ResultInterpretation | **composition** — Model parameters and their contextual meaning are distinct from an incidental equation. |
| S-ID.C.8 ★ | core | Calculate and interpret linear correlation | PearsonCorrelation, RegressionModel, B:Interpretation | **direct** — PearsonCorrelation supplies the coefficient knowledge; technology remains a tool-context question. |
| S-ID.C.9 ★ | core | Distinguish association from causation | AssociationAndCausation, Confounding | **direct** — The distinction is explicitly represented. |

### S-IC

[Official domain](https://www.thecorestandards.org/Math/Content/HSS/IC/). 6 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| S-IC.A.1 ★ | core | Infer population parameters from random samples | StatisticalPopulation, StatisticalSample, PopulationParameter, SampleStatistic, ParameterEstimation, SimpleRandomSampling | **composition** — Sampling design, statistic, target parameter, and inference are individually represented. |
| S-IC.A.2 ★ | core | Assess model consistency using simulated outcomes | ProbabilityModel, SamplingSimulation, B:PlausibilityEvaluation | **composition** — The model definition includes observation comparison; an informal check need not be labeled a formal HypothesisTest. |
| S-IC.B.3 ★ | core | Compare surveys, experiments, and observational studies | SamplingDesign, RandomizedExperiment, ObservationalStudy, AssociationAndCausation | **composition** — Sampling randomness and treatment randomization remain different concepts. |
| S-IC.B.4 ★ | core | Estimate population means/proportions and simulate error margins | ParameterEstimation, SamplingDistribution, SamplingSimulation, MarginOfError, ConfidenceInterval | **composition** — Simulation and uncertainty concepts cover both the point estimate and its model-dependent error margin. |
| S-IC.B.5 ★ | core | Compare randomized treatments through simulation | RandomizedExperiment, RandomizationTest, SamplingSimulation, HypothesisTest | **composition** — The design justifies reassignment; formal testing labels require the stated reference model and decision conditions. |
| S-IC.B.6 ★ | core | Evaluate statistical reports | SamplingBias, Confounding, AssociationAndCausation, ParameterEstimation, MarginOfError, B:Evaluation | **composition** — Choose evidenced weaknesses and inferential assumptions; the broad Statistics organizer is not used as a substitute. |

### S-CP

[Official domain](https://www.thecorestandards.org/Math/Content/HSS/CP/). 9 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| S-CP.A.1 ★ | core | Describe events by set operations | ProbabilityEvent, SampleSpace, SetUnion, SetIntersection, SetComplement | **composition** — Event construction and ordinary set operations are separately available. |
| S-CP.A.2 ★ | core | Characterize event independence multiplicatively | EventIndependence, MultiplicationProbabilityRule | **direct** — The independence definition states the product criterion. |
| S-CP.A.3 ★ | core | Relate conditional probability to independence | ConditionalProbability, EventIndependence | **composition** — Conditioning needs a positive conditioning-event probability; the standard's symmetric phrasing retains that restriction. |
| S-CP.A.4 ★ | core | Use two-way frequencies for conditional probability and independence | S:TwoWayTable, RelativeFrequency, ConditionalRelativeFrequency, ConditionalProbability, EventIndependence | **composition** — An empirical table supplies the model; observational association is not automatically population dependence. |
| S-CP.A.5 ★ | core | Explain conditional probability and independence in context | ConditionalProbability, EventIndependence, B:Interpretation | **composition** — The distinction between reversing a conditional and assuming independence is expressible. |
| S-CP.B.6 ★ | core | Compute conditional proportions in a uniform model | ConditionalProbability, ClassicalProbability, SampleSpace | **composition** — The uniform-model parent is retained; positive conditioning probability remains required. |
| S-CP.B.7 ★ | core | Apply the event addition rule contextually | AdditionProbabilityRule, ProbabilityModel, ClassicalProbability | **direct** — The full overlap correction is already defined; preserve the uniform-model parent context. |
| S-CP.B.8 ★ | (+) | Apply the general conditional multiplication rule | MultiplicationProbabilityRule, ConditionalProbability, ClassicalProbability | **direct** — The general conditional rule exists without assuming independence. |
| S-CP.B.9 ★ | (+) | Use permutations/combinations for compound probability | PermutationCounting, OrderedSelectionWithoutRepetition, BinomialCoefficient, ClassicalProbability | **composition** — The chosen counting model must match distinguishability, order, and replacement conditions. |

### S-MD

[Official domain](https://www.thecorestandards.org/Math/Content/HSS/MD/). 8 terminal leaves. Parent requirements remain in force; a split lettered leaf does not cancel them.

| Standard | Set | Requirement paraphrase | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- | --- |
| S-MD.A.1 ★ | (+) | Define a random variable and display its distribution | RandomVariable, ProbabilityDistribution, ProbabilityMassFunction, S:ProbabilityRepresentation, S:GraphicalAlgebraicRepresentation, B:Visualization | **composition** — The ontology correctly assigns values to outcomes; probability/function graphs cover theoretical laws without treating them as collected data under DataRepresentation. |
| S-MD.A.2 ★ | (+) | Calculate and interpret expectation | ExpectedValue, ProbabilityDistribution, B:Interpretation | **direct** — Expectation is explicitly the probability-weighted mean with its existence condition. |
| S-MD.A.3 ★ | (+) | Build theoretical distributions and expectations | ProbabilityModel, RandomVariable, ProbabilityMassFunction, ExpectedValue, BinomialDistribution | **composition** — The binomial example composes from an explicit trial model; no special guessing-game Area is needed. |
| S-MD.A.4 ★ | (+) | Build empirical distributions and expectations | RelativeFrequency, ProbabilityDistribution, ExpectedValue, StatisticalSample | **composition** — Empirical probabilities and the resulting expectation are distinct from a theoretical model. |
| S-MD.B.5a ★ | (+) | Calculate expected game payoffs | ExpectedValue, RandomVariable, ProbabilityModel | **composition** — The parent assigns probabilities to payoffs; contextual game knowledge does not require a separate Area. |
| S-MD.B.5b ★ | (+) | Compare strategies by expected payoff | ExpectedValue, ProbabilityModel, B:Evaluation | **composition** — Decision criteria and contextual assumptions are explicit; expectation alone does not claim universal optimality. |
| S-MD.B.6 ★ | (+) | Use randomization for fair decisions | DiscreteUniformDistribution, RandomExperiment, B:ProcedureApplicability | **composition** — Equiprobable selection expresses the fairness mechanism; random-number software is a context, not new probability knowledge. |
| S-MD.B.7 ★ | (+) | Analyze decisions with probability models | ProbabilityModel, ConditionalProbability, ExpectedValue, B:Evaluation | **composition** — These are alternative evidenced facets, not a mandatory bundle for every decision problem. |

## Modeling and practices, counted separately

Modeling has no numbered content leaves in the official category, and the local M node is empty. The six cycle identifiers below are audit facet labels, not invented CCSS standard IDs. The official star inherits from headings; it is independent of (+).

| Facet | Requirement | Eligible descriptors | Judgment |
| --- | --- | --- | --- |
| [HSM-cycle-1](https://www.thecorestandards.org/Math/Content/HSM/) | Select quantities and essential features | AlgebraicModeling, StatisticalVariable, B:InformationExtraction, B:ConceptSpecification | composition: Symbolic/statistical selection is covered; geometric-only modeling uses shape selection with the same Abilities. |
| [HSM-cycle-2](https://www.thecorestandards.org/Math/Content/HSM/) | Choose and formulate a suitable representation | AlgebraicModeling, ProbabilityModel, RegressionModel, B:Formalization, B:VisualArticulation | composition: The actual model kind supplies subject knowledge; representations are selected separately. |
| [HSM-cycle-3](https://www.thecorestandards.org/Math/Content/HSM/) | Analyze the chosen model | B:ProcedureExecution, B:DeductiveReasoning, B:ProcedureComposition | composition: Compose these Abilities with the mathematical method used; no blanket model label proves the analysis. |
| [HSM-cycle-4](https://www.thecorestandards.org/Math/Content/HSM/) | Interpret conclusions in context | B:ResultInterpretation, B:Interpretation | composition: The relevant subject Areas identify the quantities and relationships being interpreted. |
| [HSM-cycle-5](https://www.thecorestandards.org/Math/Content/HSM/) | Validate assumptions and refine the model | B:HypothesisValidation, B:PlausibilityEvaluation, B:ErrorResolution, B:AdaptiveCreativity | composition: Evidence comparison and adaptation express validation; formal statistical tests are used only when their conditions apply. |
| [HSM-cycle-6](https://www.thecorestandards.org/Math/Content/HSM/) | Communicate conclusions and reasoning | B:Presentation, B:Articulation, B:TextualArticulation, B:VisualArticulation | composition: Reporting is a communication performance over the model and justification actually supplied. |

| Practice | Requirement | Eligible descriptors | Judgment |
| --- | --- | --- | --- |
| [CCSS.Math.Practice.MP1](https://www.thecorestandards.org/Math/Practice/MP1/) | Plan, monitor, and persist in problem solving | B:InformationExtraction, B:ProcedureApplicability, B:ProcedureComposition, B:SelfRegulation, B:SelfMotivation, B:CorrectnessEvaluation | composition: Observable planning/checking can be labeled; a single finished answer does not establish persistence. |
| [CCSS.Math.Practice.MP2](https://www.thecorestandards.org/Math/Practice/MP2/) | Move between quantities and abstraction | AlgebraicModeling, B:ConceptualThinking, B:Formalization, B:ResultInterpretation, UnitDimensionality | composition: Subject quantities and units compose with abstraction and interpretation. |
| [CCSS.Math.Practice.MP3](https://www.thecorestandards.org/Math/Practice/MP3/) | Construct arguments and evaluate others reasoning | B:DeductiveReasoning, B:LogicalInference, B:CorrectnessEvaluation, B:Articulation, S:ProofByCases, S:DisproofByCounterexample | composition: Use the supplied proof/critique method and evidence; a correct answer alone is insufficient. |
| [CCSS.Math.Practice.MP4](https://www.thecorestandards.org/Math/Practice/MP4/) | Build and validate mathematical models | AlgebraicModeling, ProbabilityModel, RegressionModel, B:HypothesisValidation, B:ResultInterpretation | composition: The six modeling facets above cover this practice across model types. |
| [CCSS.Math.Practice.MP5](https://www.thecorestandards.org/Math/Practice/MP5/) | Select tools and judge their limitations | B:ProcedureApplicability, B:Evaluation, B:ErrorDetection | definition-or-representation gap: Selection and evaluation Abilities exist; calculator/CAS/spreadsheet/dynamic-geometry contexts and their distinct affordances are not explicitly represented. |
| [CCSS.Math.Practice.MP6](https://www.thecorestandards.org/Math/Practice/MP6/) | Communicate and calculate with appropriate precision | B:Articulation, B:CorrectnessEvaluation, B:Formalization, UnitDimensionality, DecimalPrecission, NumericApproximation | composition: Combine communication, conventions, units, and accuracy with the actual mathematical content. |
| [CCSS.Math.Practice.MP7](https://www.thecorestandards.org/Math/Practice/MP7/) | Use structural patterns and decompositions | B:ConceptualThinking, B:ConceptComposition, B:VisualDecomposition, B:ProcedureIdentification | composition: The discovered structure is labeled through the appropriate mathematical Area, not a generic structure organizer. |
| [CCSS.Math.Practice.MP8](https://www.thecorestandards.org/Math/Practice/MP8/) | Generalize repeated reasoning and monitor it | B:ConceptGeneralization, B:InductiveReasoning, B:ProcedureDerivation, B:SelfAssessment | composition: Generalization and ongoing checking are distinguishable; examples alone are not deductive proof. |

Tool context is a shared follow-up rather than a new mathematical Area per software package. Conditional technology requirements also occur in the underlying standards (e.g. complex graphing, correlation computation, or larger inverse matrices).

## Mechanical verification

- Official / tree / flat-map / mapped leaves: **179 / 179 / 179 / 179**.
- Missing, extra, duplicate IDs and invalid/ineligible descriptor references: **0**.
- Inherited modeling-star leaves: **75**.
- Existing source files match the recorded baseline; source hash: `df9f2d0f4eabed4ad552c1152590f5c0b955b435b360ebe646ad3890b4adc54b`.
- This documentation audit did not edit ontology or curriculum source.
