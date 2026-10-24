# Linear Algebra — design and implementation record

Status: stage 5A merged into `main` at `69f60f9` through
[PR #73](https://github.com/christian-bick/edugraph-ontology/pull/73), 2026-10-11.
Implementation branch: `codex/linear-algebra` (merged).
Implementation baseline: ontology `main` at `f0dffbf`, after the functions and trigonometry extension merged
through [PR #72](https://github.com/christian-bick/edugraph-ontology/pull/72).
This develops [roadmap step 5](algebra-family-draft.md#5-linear-algebra--a-distinct-ccss--field).
The [Calculus extension](calculus-family-draft.md) is merged through PR #74. The
[spatial-geometry batch](remaining-school-foundations-draft.md#1-spatial-analytic-geometry),
merged through PR #76, adds finite-coordinate foundations from stage 5B.
The broader university continuation of stages 5B–5C remains deferred.

## Recommendation and field boundary

The implementation adds **LinearAlgebra as a root Area alongside Algebra, Analysis, Geometry, and NumberTheory**.
It has no `partOf Algebra` or `specializes Algebra` assertion. The root describes vectors,
vector spaces, matrices, linear maps, and linear systems as a coherent field.

This is an organizational distinction, not a claim that the fields are disjoint. Keep elementary
equation solving, symbolic rewriting, functions, and shared algebraic structures in their existing
homes. A matrix method can participate in a competency with SystemSolving without moving or
duplicating SystemSolving. Leave the existing Algebra definition and root unchanged.

Use a university-informed structure, with **stage 5A for the remaining school requirements**
and stages 5B–5C for a broader introductory course. Stage 5A adds **28 new Areas**:
seven organizers and 21 eligible concepts, including two notation Areas in FormalMathematics.
VectorArithmetic and MatrixArithmetic organize reusable techniques instead of repeating the
numerical operation names for each object kind.
It also applies one explicit definition repair to the existing geometric Vector for
the zero vector. No existing identifier is renamed, moved, or retired.

## Research basis

The sources below support the subject organization; the hierarchy is our design synthesis,
not a reproduction of any institution's teaching sequence. Archived syllabi establish examples
of introductory coverage, not current admissions or course requirements.

| Primary source | Context | Design consequence |
| --- | --- | --- |
| [Oxford Linear Algebra I, 2022–23](https://courses.maths.ox.ac.uk/course/view.php?id=609) | First-year foundations, moving from concrete coordinates to abstract spaces | Distinguish spaces, bases, maps, and their matrix representations; include row operations, rank-nullity, and inner products in the university stage. |
| [MIT 18.06, spring 2010](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/syllabus/) | Introductory undergraduate matrix course, with a listed multivariable-calculus prerequisite | Connect systems, subspaces, determinants, projections, eigenstructure, and matrix factorizations. Its prerequisites do not become ontology edges. |
| [Harvard Math 21b, spring 2017](https://legacy-www.math.harvard.edu/archive/21b_spring_17/syllabus.html) | Combined linear algebra and differential equations | Keep linear-algebra knowledge reusable in differential equations, dynamics, and data fitting; the applications do not all become children of LinearAlgebra. |

The school audit covers 17 advanced terminal requirements: 15 in
[HSN-VM](https://www.thecorestandards.org/Math/Content/HSN/VM/) and two in
[HSA-REI.C](https://www.thecorestandards.org/Math/Content/HSA/REI/).
The parent `(+)` markers for VM.B.4 and VM.B.5 also apply to their lettered leaves.
The mapping below concerns knowledge coverage, not implemented dataset targets or a complete
audit of all remaining CCSS fields.

## Complete family direction

All displayed containment edges represent `partOf` placement. `[A]` marks a family populated
in the implemented school stage; `[B]` and `[C]` are document-only future families or extensions.
Do not author empty organizers to reserve future names.

```text
Algebra                                  existing independent root
Analysis                                 existing independent root
LinearAlgebra                            new independent root [A]
├── VectorAlgebra                        [A] coordinate vectors and geometric operations
├── MatrixAlgebra                        [A] arrays, operations, identities, determinants, inverses
├── LinearSystems                        [A] matrix representation; [B] reduction and solution structure
├── LinearMaps                           [A] linearity and matrix representations; [B] kernel and image
├── VectorSpaces                         [B] spaces, subspaces, span, independence, bases, dimension
├── InnerProductGeometry                 [B] inner products, norms, orthogonality, projections
└── SpectralTheory                       [C] eigenstructure and diagonalization

FormalMathematics                        existing root
├── VectorNotation                       [A] notation knowledge
└── MatrixNotation                       [A] notation knowledge

Geometry / GeometricConcepts
└── Vector                        existing geometric concept, retained here
```

VectorAlgebra initially concerns coordinate vectors. VectorSpaces later adds the abstract
structure, including polynomial and matrix spaces; a vector space need not come with a length
or angle. MatrixAlgebra concerns matrices as objects and their arithmetic; LinearMaps concerns
maps independently of a chosen representation. LinearSystems concerns the additional matrix
and solution-space knowledge, while general solving and rewriting remain shared.

## Stage 5A — school coverage

Numerical examples and review probes use real scalars unless another field is explicitly stated.

### Proposed source structure

`P` means `partOf`, `S` means `specializes`. The root has no structural parent.

```text
LinearAlgebra
├── [P] VectorAlgebra
│   ├── [P] VectorComponents
│   ├── [P] VectorMagnitude
│   ├── [P] VectorDirection
│   └── [P] VectorArithmetic
│       ├── [P] GeometricVectorCombination
│       └── [P] ScalarVectorMultiplication
├── [P] MatrixAlgebra
│   ├── [P] MatrixStructure
│   │   ├── [S] ZeroMatrix
│   │   └── [S] IdentityMatrix
│   ├── [P] MatrixArithmetic
│   │   ├── [P] EntrywiseCombination
│   │   ├── [P] ScalarMatrixMultiplication
│   │   ├── [P] MatrixConformability
│   │   ├── [P] RowColumnProduct
│   │   └── [P] MatrixOperationIdentities  also [S] AlgebraicEquivalence
│   ├── [P] MatrixDeterminant
│   └── [P] MatrixInverse
├── [P] LinearSystems
│   └── [P] MatrixSystemRepresentation
└── [P] LinearMaps
    ├── [P] LinearMap
    ├── [P] MatrixRepresentationOfLinearMap
    └── [P] DeterminantScaling

FormalMathematics
├── [P] VectorNotation
└── [P] MatrixNotation
```

MatrixOperationIdentities uses the established trigonometric-identity pattern: one subject
home and a truthful specialization of shared equivalence knowledge. Keep equalities within
this context, rather than adding isolated copies of numerical laws. RowColumnProduct
itself states the order-sensitive product; failure of commutativity is not an identity.

No separate matrix-vector product concept is needed: a column vector is the one-column case
of RowColumnProduct. Matrix powers and matrix division are excluded from the implemented extension
and its staged continuation. Excluding division does not remove MatrixInverse: inverse knowledge
is a distinct CCSS requirement, and the equation order determines which side an inverse multiplies.

### Organizer definitions

| New Area | Proposed definition | Example |
| --- | --- | --- |
| LinearAlgebra | The study of vectors, vector spaces, linear maps, matrices, and linear systems through their algebraic and geometric relationships. | Expressing a system as Ax = b; relating a plane transformation to its matrix. |
| VectorAlgebra | The components, geometric properties, and operations of coordinate vectors over stated scalar fields. | Adding displacement vectors; multiplying a coordinate vector by a scalar. |
| VectorArithmetic | The techniques and relationships for combining and scaling coordinate vectors, including their geometric interpretations. | Constructing a displacement sum head to tail; relating a negative scalar factor to direction reversal. |
| MatrixAlgebra | The structure and algebraic relationships of matrices, including their operations, identities, determinants, and inverses. | Comparing AB with BA; interpreting the inverse of a square matrix. |
| MatrixArithmetic | The techniques, admissibility conditions, and identities for additive combinations, scalar actions, and ordered products of matrices. | Adding corresponding entries; determining whether AB is defined; forming an output entry from a row and a column. |
| LinearSystems | The matrix representations, transformations, and solution structure of finite systems of linear equations over stated scalar fields. | Expressing two simultaneous equations as Ax = b; distinguishing a consistent singular system from an inconsistent one. |
| LinearMaps | Maps preserving vector addition and scalar multiplication, their representations, and their structural and geometric properties. | Representing a shear by a matrix; identifying the kernel of a projection. |

LinearSystems has one constituent in stage 5A. Its organizing purpose is explicit: stage 5B adds
matrix reduction and solution structure. It does not duplicate the eligible SystemSolving Area.

### Coordinate-vector knowledge

| New Area | Proposed definition | Example |
| --- | --- | --- |
| VectorComponents | The ordered scalars expressing a finite-dimensional vector relative to a specified ordered basis, including coordinate differences between endpoints of a geometric displacement. | From P = (1, 4) to Q = (5, 1), the displacement components are (4, -3); 3e1 - 2e2 has components (3, -2) in basis (e1, e2). |
| VectorMagnitude | The Euclidean length of a real coordinate vector in orthonormal coordinates, given by the square root of the sum of its squared components. | The magnitude of (3, 4) is 5; the magnitude of (0, 0) is 0. |
| VectorDirection | The direction of a nonzero real Euclidean vector, described by a unit vector or appropriate angles relative to a specified coordinate system. | The direction of (3, 4) is represented by (3/5, 4/5); (0, 0) has no direction. |
| GeometricVectorCombination | The head-to-tail and parallelogram constructions of sums of real geometric vectors, with differences formed by adding the reversed second vector. For vectors u and v with a common tail, u - v runs from the tip of v to the tip of u. | (1, 0) + (0, 1) = (1, 1) has magnitude sqrt(2), not 2; for u = (3, 1) and v = (1, 4), the difference runs from (1, 4) to (3, 1). |
| ScalarVectorMultiplication | The action of a scalar on a coordinate vector over the same field by multiplying every component by that scalar. For real geometric vectors, magnitude scales by the scalar's absolute value; positive and negative scalars respectively preserve and reverse direction when the vector is nonzero. | -2(3, 4) = (-6, -8), with magnitude 10; 0(3, 4) = (0, 0), with no direction. |

### Matrix knowledge

| New Area | Proposed definition | Example |
| --- | --- | --- |
| MatrixStructure | Rectangular arrays of scalars over a stated field, with fixed row and column counts and equality determined entry by entry at matching positions. | [[2, 3, 5], [7, 11, 13]] has two rows and three columns; its entry in row 2, column 1 is 7. |
| ScalarMatrixMultiplication | The action of a scalar on a matrix over the same field by multiplying every entry by that scalar, extending componentwise vector scaling to all rows or columns while preserving the matrix's shape. | 2[[1, 3], [2, 4]] = [[2, 6], [4, 8]]; 0[[1, 3], [2, 4]] = [[0, 0], [0, 0]]. |
| EntrywiseCombination | Addition or subtraction of coordinate vectors or matrices over a common field by applying the corresponding scalar operation at each matching entry. Operands have the same shape, and coordinate-vector interpretations use a common ordered basis. | (3, 1) - (1, 4) = (2, -3); [[1, 2], [3, 4]] + [[5, 6], [7, 8]] = [[6, 8], [10, 12]]. |
| MatrixConformability | The shape conditions for matrix operations over a common field: addition and subtraction require equal row and column counts, while an m-by-n matrix followed by an n-by-p matrix has a defined product of shape m-by-p. | A 2-by-3 matrix can multiply a 3-by-1 matrix to give a 2-by-1 matrix; two 2-by-3 matrices can be added but cannot be multiplied in that order. |
| RowColumnProduct | The ordered product of an m-by-n matrix A and an n-by-p matrix B over a common field, whose output entry (i, j) is the sum of A_(i,k) B_(k,j) for k from 1 to n. Reversing factors can change the result or make the product undefined. | For A = [[1, 1], [0, 1]] and B = [[1, 0], [1, 1]], AB = [[2, 1], [1, 1]] while BA = [[1, 1], [1, 2]]. |
| MatrixOperationIdentities | Value-preserving equalities for conformable matrix addition, scalar multiplication, and ordered matrix products, including associativity, distributivity, additive commutativity, and neutral-element rules. | A(B + C) = AB + AC; (AB)C = A(BC); I_m A = A = A I_n for an m-by-n matrix A. |
| ZeroMatrix | A matrix whose entries are all zero, acting as the additive identity among matrices of the same shape and as an absorbing factor in defined matrix products. | [[0, 0, 0], [0, 0, 0]] is the additive identity for 2-by-3 matrices; A0 = 0 for a conformable zero matrix. |
| IdentityMatrix | A square matrix with ones on the main diagonal and zeros elsewhere, acting as a multiplicative identity when its size matches the relevant side of a matrix product. | [[1, 0], [0, 1]] leaves every two-component column vector unchanged. |
| MatrixDeterminant | The scalar computed from a square matrix by a signed sum of products selecting one entry from each row and column, with signs determined by permutation parity. It is nonzero exactly when the matrix is invertible over the stated field. | det([[a, b], [c, d]]) = ad - bc; det([[2, 0], [0, -3]]) = -6. |
| MatrixInverse | The two-sided multiplicative inverse of a square matrix over a stated field, satisfying AA^-1 = A^-1 A = I, including its existence and order-sensitive use in reversing matrix multiplication. | [[2, 0], [0, 3]] has inverse [[1/2, 0], [0, 1/3]]; [[1, 2], [2, 4]] has no inverse. |

The determinant definition identifies the mathematical quantity without prescribing one
calculation method. Cofactor expansion, elimination-based computation, and later factorization
methods can be reviewed separately. The signed-product characterization is not a claim that
every school task must establish the general permutation formula.

EntrywiseCombination has one structural home in MatrixArithmetic and also applies to coordinate
vectors. This constituent placement organizes reusable knowledge without imposing an inherited
object type or context; it needs no duplicate or second structural parent.
ScalarVectorMultiplication belongs to VectorArithmetic, while ScalarMatrixMultiplication belongs
to MatrixArithmetic and `expands ScalarVectorMultiplication`. The progression extends scaling
one coordinate vector to scaling every row or column of a rectangular array. It does not make
matrix scaling a specialization of geometric vector knowledge or automatically evidence vector
magnitude and direction in a matrix task.
EntrywiseCombination is preferable to a name such as PlaceWiseSums: it refers to corresponding
entries, avoids confusion with positional-number places, and includes differences. Its definition
covers only addition and subtraction, not entrywise multiplication or division.

MatrixConformability concerns knowing why operations are admissible and what output shape follows;
it is not a matrix-size Scope. VectorArithmetic and MatrixArithmetic are organizers and cannot
be direct competency labels. Use the eligible techniques with the relevant scalar operations,
structure, or basis knowledge only where each is evidenced. GeometricVectorCombination preserves
the distinct head-to-tail, parallelogram, and reversal knowledge required by CCSS VM.B.4.

RowColumnProduct constructs the entire ordered output matrix, including the column-vector
case; its entry formula is not a separate dot-product-only concept. Its scalar products use
ordinary multiplication without complex conjugation. A later complex inner-product concept
has different conjugation conventions. For real geometric vectors, ScalarVectorMultiplication
preserves the relationship `||cv|| = |c| ||v||`; a zero scalar or zero input vector produces
the zero vector, which has no direction.

### Systems, maps, and representation

| New Area | Proposed definition | Example |
| --- | --- | --- |
| MatrixSystemRepresentation | The correspondence between a finite system of linear equations and Ax = b, matching each row to an equation and each column to one consistently ordered unknown. | x + y = 7 and x - y = 1 correspond to [[1, 1], [1, -1]][x, y]^T = [7, 1]^T. |
| LinearMap | A map between vector spaces over the same field that preserves vector addition and scalar multiplication. | T(x, y) = (x + y, y) is linear; S(x, y) = (x + 1, y) is not. |
| MatrixRepresentationOfLinearMap | The representation of a linear map between finite-dimensional vector spaces by a matrix relative to chosen ordered input and output bases, whose columns are the output coordinates of the input basis images. | In standard bases, T(x, y) = (x + y, y) has matrix [[1, 1], [0, 1]]. |
| DeterminantScaling | The multiplication of Euclidean n-dimensional volume by abs(det(A)) under a real square matrix transformation in fixed oriented orthonormal coordinates, with a negative determinant reversing orientation and a zero determinant collapsing volume. | diag(2, -3) multiplies plane area by 6 and reverses orientation; diag(1, 0) collapses plane area to zero. |
| VectorNotation | The conventions for vector symbols, ordered component lists, directed-segment symbols, and magnitude symbols. | Interpreting an arrow over PQ as displacement from P to Q and double bars around v as its magnitude. |
| MatrixNotation | The conventions for displaying matrix entries in rows and columns and writing entry indices, matrix sizes, determinants, and inverse symbols. | Reading A_(2,1) as the row-2, column-1 entry, det(A) as its determinant, and A^-1 as a matrix inverse. |

VectorNotation and MatrixNotation are direct constituents of FormalMathematics, not of
NumberNotation: the represented objects are not simply numbers. Existing ExpressionIndex,
Variable, Coefficient, Factor, Operator, and FunctionArgument remain reusable formal roles.
Do not introduce MatrixEntryIndex or VectorVariable merely because those roles occur here.

MatrixStructure concerns the array and its mathematical organization; MatrixNotation concerns
the symbols used to communicate it. A visible array alone does not establish a notation-learning
claim. Likewise, merely writing Ax = b does not establish knowledge of the equation-to-row
correspondence or the map represented by A.

### CCSS coverage map

Each row identifies the knowledge needed alongside an appropriate Ability and evidenced context.
The short requirement column paraphrases the official pages linked above; the proposed mapping
is our ontology analysis. `VM` means `CCSS.Math.Content.HSN.VM`; `REI` means
`CCSS.Math.Content.HSA.REI`.

| Terminal standard | Requirement | Proposed or reused knowledge |
| --- | --- | --- |
| VM.A.1 | Vector quantities and representations | Vector; VectorMagnitude, VectorDirection, VectorNotation |
| VM.A.2 | Endpoint differences | VectorComponents; existing Subtraction for scalar entries |
| VM.A.3 | Vector applications | Vector; GeometricVectorCombination, EntrywiseCombination, or ScalarVectorMultiplication as evidenced; existing AlgebraicModeling and quantity context |
| VM.B.4.a | Addition constructions and resultant length | GeometricVectorCombination, EntrywiseCombination, VectorComponents, VectorMagnitude; Addition for the scalar entry calculations |
| VM.B.4.b | Resultant magnitude and direction | GeometricVectorCombination, VectorMagnitude, VectorDirection; EntrywiseCombination and trigonometry where evidenced |
| VM.B.4.c | Subtraction and additive inverse | GeometricVectorCombination, EntrywiseCombination, VectorComponents; Subtraction for the scalar entry calculations |
| VM.B.5.a | Scalar multiplication representations | ScalarVectorMultiplication, VectorComponents; Multiplication for the scalar entry calculations |
| VM.B.5.b | Magnitude scaling and direction reversal | ScalarVectorMultiplication, VectorMagnitude, VectorDirection |
| VM.C.6 | Matrices as structured data | MatrixStructure; modeling and notation only where evidenced |
| VM.C.7 | Matrix scalar multiplication | ScalarMatrixMultiplication, MatrixStructure; Multiplication for the scalar entry calculations |
| VM.C.8 | Conformable matrix arithmetic | EntrywiseCombination, MatrixConformability, RowColumnProduct, MatrixStructure; Addition, Subtraction, or Multiplication for the scalar steps evidenced |
| VM.C.9 | Matrix operation properties | MatrixOperationIdentities; RowColumnProduct and counterexample reasoning for noncommutativity |
| VM.C.10 | Neutral matrices and invertibility | ZeroMatrix, IdentityMatrix, MatrixInverse, MatrixDeterminant |
| VM.C.11 | Matrix action on vectors | RowColumnProduct, LinearMap, MatrixRepresentationOfLinearMap |
| VM.C.12 | Plane maps and area scaling | MatrixRepresentationOfLinearMap, DeterminantScaling; geometric transformations where applicable |
| REI.C.8 | Matrix system form | MatrixSystemRepresentation; existing SystemOfEquations and formal roles where evidenced |
| REI.C.9 | Inverse-based system solutions | MatrixInverse, RowColumnProduct, MatrixSystemRepresentation, existing SystemSolving |

REI.C.9 additionally calls for technology for matrices of size 3-by-3 or larger. That is a
competency implementation requirement, not another mathematical Area. Preserve it in targets
and evidence review; do not claim that an inverse formula alone covers that requirement.
No named row-reduction technique is required by this particular standard.

## Reuse, boundaries, and one existing-definition repair

| Existing concept | Decision and reason |
| --- | --- |
| Vector | Retain its geometric home and Line progression. Clarify the zero case using the proposed definition below; do not broaden it into the definition of an abstract vector-space element. |
| VectorObjects | Retain as the existing vector-graphics Scope. It is not a context for mathematical vector quantities. |
| Addition, Subtraction, Multiplication | Retain numeric meanings. They label evidenced scalar steps within EntrywiseCombination, RowColumnProduct, ScalarVectorMultiplication, and ScalarMatrixMultiplication; a vector or matrix context does not broaden them into operations on those objects. MatrixConformability supplies independently observable admissibility knowledge. |
| AssociativeLaw, CommutativeLaw, DistributiveLaw | Retain numeric meanings. MatrixOperationIdentities adds domain-specific equivalence knowledge; matrix multiplication is not generally commutative. |
| Sum | Its broad definition already admits vectors. It does not by itself identify coordinate or geometric vector-addition relationships. No reparenting is proposed. |
| OperationClosure | Reuse its genuinely general meaning; no second closure concept under LinearAlgebra. |
| Zero | Keep its integer meaning. Matrix and vector additive identities are not integer zero. |
| SystemSolving, SystemRewriting, SystemElimination | Keep their homes and meanings. Matrix tasks compose with them when the complete constraints and required performance are evidenced. |
| EquationSolving / SystemSolving | Existing system descriptors require at least two constraints. A one-row matrix equation uses the single-equation concept where appropriate. |
| FunctionComposition, FunctionInversion | Their general definitions remain reusable with maps. NumericFunction is not a universal parent for maps between abstract vector spaces. |
| AffineDependence | Retain its polynomial-degree meaning, which allows constant terms. It is not equivalent to preservation of vector addition and scalar multiplication. |
| ExpressionIndex and other formal roles | Reuse existing roles; ExpressionIndex already illustrates matrix row and column indices. |
| TwoDimensional, ThreeDimensional, FourDimensional | Existing spatial/spacetime Scopes do not encode matrix shape or abstract vector-space dimension. In particular, FourDimensional explicitly includes time. |

**Proposed replacement definition for Vector:**

> Directed quantities represented by geometric displacements, with magnitude and direction for
> nonzero vectors and a zero vector of magnitude zero with no direction.

Keep the existing displacement example. This explicitly includes the additive zero needed for
vector operations while retaining the meaning of existing nonzero geometric-vector annotations.
This is the implementation's sole change to an existing definition and is recorded explicitly
in the adoption map below.

Further boundaries:

- Vectors are not points. Translating both endpoints leaves their displacement unchanged.
- A linear map fixes zero, but that condition is not sufficient: x -> x^2 fixes zero and is
  not linear. An affine map x -> Ax + b with b != 0 is not a linear map of the original spaces.
  Rotations about the origin and reflections through the origin can be linear; arbitrary
  translations and off-origin rotations are not. Homogeneous coordinates are a later topic.
- Matrices describe maps relative to bases. Do not infer a basis-independent geometric
  area factor from an arbitrary mixed-basis matrix. DeterminantScaling states its real,
  orthonormal-coordinate conditions explicitly.
- Matrix products can commute in particular cases. The distinction is failure of a general
  commutative law, not a universal assertion that AB differs from BA.
- Singular coefficient matrices can accompany inconsistent or nonunique systems. An absent
  inverse is not proof that the system has no solution.
- Real Euclidean magnitude does not generalize to complex vectors by summing bare squares.
  Complex inner products and conjugation require their own later treatment.

The map distinctions are supported by [Georgia Tech's linear-transformations chapter](https://textbooks.math.gatech.edu/ila/linear-transformations.html);
the geometric determinant interpretation is supported by its
[determinants and volumes chapter](https://textbooks.math.gatech.edu/ila/determinants-volumes.html).

## Progression and eligibility

The initial stage authors these ten progression links:

| New source | Relation | Target | Specific meaning |
| --- | --- | --- | --- |
| MatrixRepresentationOfLinearMap | translates | LinearMap | Expresses the map in chosen coordinate bases. |
| MatrixSystemRepresentation | integrates | RowColumnProduct | Uses the row-column product to encode the simultaneous equations. |
| DeterminantScaling | integrates | MatrixDeterminant | Uses determinant magnitude and sign for geometric scaling and orientation. |
| EntrywiseCombination | integrates | Addition | Applies scalar addition at corresponding entries for an additive combination. |
| EntrywiseCombination | integrates | Subtraction | Applies scalar subtraction at corresponding entries for a difference. |
| RowColumnProduct | integrates | Addition | Sums scalar products to form an output entry. |
| RowColumnProduct | integrates | Multiplication | Multiplies paired scalar entries from a row and a column. |
| ScalarVectorMultiplication | integrates | Multiplication | Multiplies each vector component by the scalar. |
| ScalarMatrixMultiplication | integrates | Multiplication | Multiplies each matrix entry by the scalar. |
| ScalarMatrixMultiplication | expands | ScalarVectorMultiplication | Extends componentwise vector scaling to all rows or columns of a matrix while preserving its shape. |

No field-to-field progression or constraint asserts that LinearAlgebra implies, contradicts,
or specializes Algebra. The root placement is an organization choice. Do not add prerequisites
from a syllabus's teaching order.

The stage 5A structure contains **25 partOf edges and three specializes edges**, with seven
organizers and 21 eligible new concepts. All organizers
have constituent children; the authored specialization does not introduce a constituent after
a specialization or mix child roles. MatrixOperationIdentities remains eligible as an
AlgebraicEquivalence specialization. ZeroMatrix and IdentityMatrix specialize MatrixStructure,
which remains eligible because it has no constituent children. Existing organizers remain organizers, and all existing
direct-label eligibility is intended to remain unchanged; the source comparison verifies that boundary.

## Stages 5B and 5C — introductory university continuation

The [spatial-geometry implementation](remaining-school-foundations-draft.md#1-spatial-analytic-geometry)
pulls finite-coordinate combinations, span, independence, bases and Euclidean dot-product
knowledge forward for advanced secondary coverage, merged at `209091b` through
[PR #76](https://github.com/christian-bick/edugraph-ontology/pull/76).
Abstract structures and the broader continuation below remain deferred; existing concepts
from the spatial batch should be reused when developing those later families.

These are preserved family directions, not stage 5A implementation promises. Their exact
definitions, specialization choices, and annotation effects need a subsequent proposal.

| Home | Stage | Concepts and distinctions to develop |
| --- | --- | --- |
| VectorSpaces | 5B | VectorSpaceStructure, LinearCombination, Subspace, Span, LinearIndependence, Basis, VectorSpaceDimension; abstract polynomial and matrix examples alongside coordinate spaces. |
| LinearSystems | 5B | MatrixRowReduction, LinearSystemSolutionStructure, MatrixRank; consistency, free variables, and the affine form of an inhomogeneous solution set. |
| MatrixAlgebra | 5B | MatrixTranspose; row/column spaces; determinant methods; structured matrices where their properties merit concepts. |
| LinearMaps | 5B | Kernel, Image, RankNullityTheorem, ChangeOfBasis; coordinate representation versus the same underlying map. |
| InnerProductGeometry | 5B | InnerProduct, VectorNorm, Orthogonality, OrthogonalProjection, OrthonormalBasis, GramSchmidtOrthogonalization, LeastSquares. Specify real/complex conventions. |
| SpectralTheory | 5C | EigenvalueEigenvectorRelation, Eigenspace, CharacteristicPolynomial, Diagonalization, and a real-symmetric/complex-Hermitian spectral theorem. |
| MatrixAlgebra and the relevant map/metric families | 5C | Structured factorization knowledge: LU, QR, and SingularValueDecomposition; positive-definite forms where independently needed. |

Use genuine specializations at lower levels when they preserve meaning. Gaussian elimination
and Gauss–Jordan reduction can specialize a matrix-reduction method; a standard real dot product
can specialize InnerProduct. Neither should be hidden in a Scope when its mathematical structure
is the knowledge being learned. Conversely, do not manufacture one method per matrix size or
one operation per scalar number system.

Generic matrix row reduction also applies without a system of equations. It must not specialize
SystemElimination, whose definition is specifically one retained-equation replacement. Row swaps
and nonzero row scaling also extend beyond that descriptor. Compose matrix reduction with
SystemRewriting when an augmented-system interpretation and solution preservation are evidenced.

Cross products, affine coordinates, bilinear/quadratic forms, dual spaces, tensors, numerical
conditioning, and infinite-dimensional/functional analysis remain later decisions. Differential
equations, statistics, and optimization retain their own subject homes and can use linear-algebra
knowledge. This roadmap is broad introductory coverage, not a completeness claim for the field.

## Alternative simplifications

| Option | Benefit | Tradeoff |
| --- | --- | --- |
| **Recommended: techniques in vector and matrix arithmetic families** | Reuses EntrywiseCombination across both object kinds and connects ScalarMatrixMultiplication to ScalarVectorMultiplication through expansion; distinguishes geometric combination, product construction, conformability, identities, and representations without changing numerical operations. | 28 new Areas: seven organizers and 21 eligible concepts, including two formal notation Areas. EntrywiseCombination's single structural home must not be mistaken for an object-type restriction. |
| Earlier alternative: separate vector and matrix addition and subtraction concepts | Makes each object's additive operations directly visible by name. | Repeats the corresponding-entry technique; rejected in favor of shared EntrywiseCombination. Scalar multiplication has the separately accepted vector-to-matrix expansion above. |
| Combine VectorMagnitude and VectorDirection; combine ZeroMatrix and IdentityMatrix | Two fewer eligible concepts while retaining the shared techniques. | Less precision for independently observable magnitude, direction, and neutral-element knowledge. Definitions must still retain all distinctions. |
| Introduce shared abstract LinearCombination knowledge early | Unifies scalar-weighted sums across vector and matrix spaces and prepares span/basis reasoning. | Does not automatically demonstrate geometric vector rules, matrix shape knowledge, or order-sensitive products; abstract-space understanding must not be inferred from ordinary entry calculations. |
| Create generic operation-law concepts in AlgebraicStructures | Could share associativity, distributivity, and identity-element knowledge across many algebraic objects. | Requires an explicit migration design for existing numeric law definitions and annotations; it is larger than this first extension. |

The separate root and the technique-based arithmetic families are the accepted design choices.
The remaining alternatives concern optional granularity and staging. Matrix powers and division
are outside this extension; none of these alternatives schedules them for implementation.

## Review probes and adoption

| Probe | Expected distinction |
| --- | --- |
| Add (1, 0) and (0, 1), using both a diagram and coordinates | GeometricVectorCombination gives the resultant diagonal; EntrywiseCombination gives (1, 1), whose magnitude is sqrt(2), not 2. |
| Find u - v geometrically and by components for u = (3, 1), v = (1, 4) | The arrow runs from the tip of v to the tip of u; EntrywiseCombination applies scalar Subtraction to give (2, -3). |
| Add two 2-by-3 matrices, then compare with an attempted 2-by-2 plus 2-by-3 sum | EntrywiseCombination requires matching entries; MatrixConformability explains why only the first addition is defined. |
| Multiply (3, 4) by -2, then by 0; scale a matrix by -2 | ScalarVectorMultiplication includes the vector magnitude and direction consequences; ScalarMatrixMultiplication extends entry scaling to the matrix while preserving its shape. The progression does not automatically label matrix work with vector geometry. |
| Decide whether a 2-by-3 matrix can multiply a 3-by-1 matrix without calculating entries | MatrixConformability gives a 2-by-1 output; RowColumnProduct computation is not established merely by stating that shape. |
| Compute an entry of that 2-by-1 product | RowColumnProduct multiplies paired row/column entries and adds the results; EntrywiseCombination does not describe this product. |
| Compare the two products in the RowColumnProduct example | Both are defined but unequal; an identity matrix supplies a commuting counterexample to a universal inequality. |
| Compare T(x, y) = (x + y, y) with S(x, y) = (x + 1, y) | The first is linear; the second is affine with nonzero translation. |
| Use A = [[1, 2], [2, 4]] with b = [3, 6]^T and b = [3, 7]^T | The same singular matrix yields infinitely many solutions in the first case and none in the second. |
| Apply diag(2, -3) to a unit square | Area becomes 6 and orientation reverses. |
| Swap unknown order in Ax = b | Coefficient columns must swap with it; rewriting symbols alone changes the represented constraints. |
| Consider a polynomial as a vector-space element | Abstract vector-space knowledge does not require a geometric direction or canonical magnitude. |

Review focuses on the accepted granularity, the zero-vector clarification, and the explicit
bridge from matrix identities to AlgebraicEquivalence. The implementation has no identifier
migration or reparenting; the Vector text change extends its explicit boundary.
The current dataset package pin and targets remain unchanged.

Compare the authored graph with the implementation baseline, verify existing eligibility and
ancestry, and run the repository's normal Docker/client gate under
[ONT-W3](../change-review.md#ont-w3--verify-and-report-the-actual-change).
Apply new labels only when the mathematical knowledge is evidenced, using
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
Definition, path, and progression reviews follow [ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries),
[ONT-S4–S5](../structure.md#ont-s4--composition-may-lead-into-specialization), and
[ONT-R3](../relations.md#ont-r3--state-the-conceptual-progression-precisely).

## Proposal verification — 2026-10-11

The revised technique-based proposal was simulated against the unchanged `f0dffbf` source
baseline. Both graphs pass the ontology assessment with no findings. The proposal adds
28 Areas (seven organizers and 21 eligible concepts), 25 partOf edges, three specializes
edges, and ten progression links. Its 150 new-Area assertions produce a simulated total
of 1,009 descriptors and 5,393 assertions. Existing eligibility and ancestry are unchanged;
the only proposed change to an existing assertion is the Vector definition repair.

Review retained all 17 CCSS leaf mappings and checked shared-technique boundaries and
numerical examples. This pre-implementation simulation left all four authored Turtle files
unchanged. It is historical proposal evidence, separate from the implementation checks below,
and does not establish dataset coverage.

## Implementation and adoption — 2026-10-11

Stage 5A is authored in [core-areas-math.ttl](../../core-areas-math.ttl) and merged into `main`
at `69f60f9` through [PR #73](https://github.com/christian-bick/edugraph-ontology/pull/73).
The implementation branch was `codex/linear-algebra`, based on `main` at `f0dffbf`.
The implementation preserves the researched structure, the 17 CCSS leaf
mappings, and the accepted technique-based arithmetic design recorded above.
Stages 5B–5C and their candidate names remain document-only future work.

The source adds **28 Areas**, of which **seven are organizers and 21 are eligible concepts**.
It authors **25 partOf edges, three specializes edges, and ten progression links**, including
`ScalarMatrixMultiplication expands ScalarVectorMultiplication`. The 150 new-Area assertions
take the authored graph from 981 descriptors and 5,243 assertions to **1,009 descriptors and
5,393 assertions**. The Vector definition is replaced separately, without changing
the assertion count. No existing identifier is renamed or retired, and no existing authored
relation is changed.

| Adoption surface | Change and required interpretation |
| --- | --- |
| New LinearAlgebra field | LinearAlgebra is a separate root, with VectorAlgebra, MatrixAlgebra, LinearSystems, and LinearMaps as constituents. Together with VectorArithmetic and MatrixArithmetic, these are the seven new organizers and must not become direct content labels. |
| New eligible concepts | The 21 eligible additions supply vector, matrix, map, system, and notation knowledge. Select them from the content evidence; a vector or matrix appearing in a task does not establish every related concept. |
| Scalar multiplication | ScalarVectorMultiplication and ScalarMatrixMultiplication have separate arithmetic homes. The expansion records how matrix scaling extends vector scaling; it does not automatically assign vector geometry labels to matrix tasks. |
| Shared entrywise technique | EntrywiseCombination serves coordinate-vector and matrix addition/subtraction despite its single MatrixArithmetic home. Existing numerical operation Areas retain their definitions and identify evidenced scalar steps. |
| Vector | The replacement definition explicitly includes the zero vector while retaining geometric displacement meaning, its existing example, and all relations. Review definition-dependent classification or representations when adopting the release; existing nonzero geometric-vector uses retain their meaning. |
| Existing structure and labels | Comparison with `f0dffbf` confirms unchanged existing ancestry, specialization inheritance, and direct-label eligibility. MatrixStructure remains eligible with specializing ZeroMatrix and IdentityMatrix children. |
| Consumer packages and datasets | No package pin, competency target, or dataset annotation is updated by this ontology merge. Adopt a release containing the merge separately and apply the new eligible concepts only where supported. |

### Implementation verification

Implementation verification passed on 2026-10-11:

- Authored-source comparison with `f0dffbf`: exactly 28 added Areas, 150 new-Area assertions,
  and the approved Vector definition replacement. No existing relations, ancestry,
  identifiers, or labeling eligibility changed; the other three Turtle sources are unchanged.
- All 28 authored definitions and examples match the design tables, including the concrete
  zero-matrix example for ScalarMatrixMultiplication. All 38 new relations match the approved graph.
- Complete ontology assessment: valid, no findings; 1,009 descriptors and 5,393 assertions.
- `docker build . --output dist`: passed RDF generation, TypeScript build and tests,
  ontology/documentation validation, npm package exports and browser checks, Python lint and
  typing checks, all 49 Python tests, and wheel/sdist/optional-parser/typed-consumer verification.
- Final documentation references and whitespace checks passed.

These checks validate the authored extension and generated clients. Downstream package adoption,
competency implementation, and dataset coverage remain separate work.
