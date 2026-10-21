# Remaining advanced-school foundations — implementation record and extension proposals

Status: spatial batch merged at `209091b` through
[PR #76](https://github.com/christian-bick/edugraph-ontology/pull/76), 2026-10-21.
Complex-number stage 3B is merged at `5733989` through
[PR #77](https://github.com/christian-bick/edugraph-ontology/pull/77).
Graph theory is merged at `13328d3` through
[PR #78](https://github.com/christian-bick/edugraph-ontology/pull/78), with GraphTheory as a root Area.
Logical foundations are implemented for review on `codex/logical-foundations`.
Section 5 remains proposed. Original proposal baseline: `9750eff`, after
[PR #75](https://github.com/christian-bick/edugraph-ontology/pull/75); complex-batch baseline: `209091b`;
graph-batch baseline: `5733989`; logic-batch baseline: `13328d3`.

## Scope and sequence

This resumes the four gaps identified before the Probability, Statistics and Combinatorics
extension: spatial analytic geometry, advanced complex numbers, elementary graphs, and logical
foundations. Set operations, Cartesian products and finite Markov chains are now present.
They are reused here, rather than proposed again.

Recommended implementation batches:

1. Spatial analytic geometry and the finite-coordinate linear algebra that supports it.
2. Complex-number stage 3B: exponential form, power identities and complete root sets.
3. Elementary graph theory and its matrix correspondence.
4. Logical connectives and quantification.
5. Separate targeted passes for conics and the number-theory results identified below, followed
   by a competency-by-competency audit of the selected programmes.

Each batch has its own reviewable ontology change. The spatial, complex and graph batches are
merged, and logical foundations are implemented for review; the targeted follow-ups remain proposed.
This is not a claim that every listed concept is required
by every national curriculum. Existing
Arithmetic, Algebra, Analysis, Calculus and LinearAlgebra meanings remain distinct.
Follow [descriptor reuse](../descriptors.md#ont-d1--define-reusable-concepts) and
[structural ordering](../structure.md#ont-s4--composition-may-lead-into-specialization).

## Curriculum evidence and boundaries

| Source | Evidence relevant to this proposal |
| --- | --- |
| [French terminale specialty programme](https://eduscol.education.gouv.fr/sites/default/files/document/spe246annexe1158907pdf-84159.pdf), pp. 7–9 and 20–21 | Spatial vector geometry, bases, scalar products, normal vectors, projections and line/plane descriptions; logical connectives and quantified statements. |
| [French mathématiques expertes](https://eduscol.education.gouv.fr/sites/default/files/document/spe264annexe1158825pdf-84165.pdf), pp. 7–11 | Complex exponential form, Euler and De Moivre identities, roots of unity, elementary graph structure and adjacency-matrix walk counting. General complex roots are an extension problem; selected modular theorems are explicit content. |
| [Bavaria grade 13, elevated level](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/13/mathematik), M13 3 | Retrieved programme text includes parametric/normal forms, spatial positions, intersections, angles, distances and spheres. The canonical site currently returns a maintenance notice; this is retrieved text, not a confirmed fresh origin response. |
| [Official ISB overview](https://www.isb.bayern.de/fileadmin/user_upload/Gymnasium/Implementierung_LehrplanPLUS/Mathematik.pdf), pp. 9–10 | Independently confirms spatial coordinate geometry and lines/planes as elevated-level school topics; does not independently verify every detailed requirement above. |
| [CCSS G-GPE](https://www.thecorestandards.org/Math/Content/HSG/GPE/) | Parabola focus/directrix knowledge is core; ellipse and hyperbola focal descriptions are marked (+). These are a separate geometry follow-up. |

Use the currently applicable French specialty programme for the first audit. The
[replacement published in 2026](https://www.education.gouv.fr/bo/2026/Hebdo14/MENE2602919A)
starts in 2027–28; it is a subsequent comparison baseline. Germany requires a named Land and
course level rather than a claim about one universal Gymnasium curriculum.

The mathematical definitions and placements below are ontology design recommendations.
The curricula establish coverage needs, not the ontology's family structure.

## 1. Spatial analytic geometry

### Structure

Keep LinearAlgebra as its own root. Reuse VectorAlgebra and VectorArithmetic for vector
knowledge; reuse GeometricVisualization for coordinate descriptions, GeometricTransformations
for projections, and PositionalRelations for spatial relationships. GeometricVisualization's
current definition already describes coordinate geometry. A second overlapping AnalyticGeometry
family is unnecessary; a later naming review can address the existing name separately.

`P` denotes partOf; `S` denotes specializes. Existing ancestors are shown for context.

```text
LinearAlgebra
  P VectorAlgebra
    P LinearCombination
    P LinearSpan
    P LinearIndependence
    P Basis
      S OrthonormalBasis
    P VectorOrthogonality
    P VectorArithmetic
      P DotProduct
Geometry
  P GeometricConcepts
    P NormalVector
  P GeometricVisualization
    P CartesianSpace
    P AffineParametrization
      S LineParametrization
      S PlaneParametrization
    P NormalVectorEquation
  P GeometricTransformations
    S OrthogonalProjection
  P GeometricRelations
    P PositionalRelations
      P Coplanarity
      P SkewLines
```

### Implemented definitions and examples

| Area | Concise definition | Example |
| --- | --- | --- |
| LinearCombination | A finite sum of scalar multiples of specified vectors in a common vector space. | 2(1,0,0) + 3(0,1,0) = (2,3,0). |
| LinearSpan | The set of all linear combinations of a specified collection of vectors over a stated scalar field. | The span of (1,0,0) and (0,1,0) is the plane z=0. |
| LinearIndependence | The condition that a linear combination of specified vectors equals zero only when all its coefficients are zero. | (1,0,0) and (0,1,0) are independent; (1,0,0) and (2,0,0) are dependent. |
| Basis | An ordered linearly independent spanning collection giving each vector in a stated finite-dimensional space a unique coordinate representation. | Every vector (x,y,z) has unique coordinates in the standard basis of R^3. |
| OrthonormalBasis | A basis of mutually orthogonal unit vectors in a real Euclidean space. | The standard basis of R^3; (1,0) and (1,1) form a basis but not an orthonormal one. |
| DotProduct | The scalar product of real Euclidean vectors, given by the sum of component products in orthonormal coordinates and, for nonzero vectors, by the product of their magnitudes and the cosine of their angle. | (1,2,0) dot (2,-1,3) = 0. |
| VectorOrthogonality | The relationship between real Euclidean vectors whose dot product is zero, including the zero vector. | (1,2,0) is orthogonal to (2,-1,3); the zero vector is orthogonal to every vector. |
| NormalVector | The role of a nonzero vector perpendicular to every direction of a specified line or plane in Euclidean space. | (2,-1,3) is normal to the plane 2x-y+3z=5. |
| CartesianSpace | The correspondence between points in three-dimensional Euclidean space and ordered triples relative to a stated origin and perpendicular coordinate axes. | (2,-1,3) locates a point using three axes. |
| AffineParametrization | The description of an affine set by a fixed point plus linear combinations of independent direction vectors with freely varying real parameters. | p+s*u+t*v describes a plane when u and v are independent. |
| LineParametrization | An affine parametrization with one real parameter and one nonzero direction vector. | (x,y,z)=(1,0,2)+t*(2,1,-1), t real. |
| PlaneParametrization | An affine parametrization with two real parameters and two independent direction vectors. | (x,y,z)=(0,0,1)+s*(1,0,0)+t*(0,1,0) describes z=1. |
| NormalVectorEquation | The description of a Euclidean line in two dimensions or a plane in three dimensions by n dot (x-p)=0, with nonzero normal n and a point p on the set. | 2x-y+3z=5 describes a plane with normal (2,-1,3). |
| OrthogonalProjection | The assignment of a point to its unique nearest point on a specified Euclidean line or plane, with perpendicular displacement for points outside the set. | The projection of (1,2,3) onto z=1 is (1,2,1). |
| Coplanarity | The property of specified points, lines or other geometric objects being contained in a common plane. | Two intersecting lines are coplanar. |
| SkewLines | The relationship between two lines in three-dimensional space that are not contained in a common plane and therefore neither intersect nor are parallel. | The lines (t,0,0) and (0,s,1) are skew. |

The first batch develops these vector concepts in real coordinate spaces. It pulls the relevant
finite-dimensional material forward from [linear-algebra stage 5B](linear-algebra-draft.md#stages-5b-and-5c--introductory-university-continuation).
Abstract vector-space axioms, general inner products, Gram–Schmidt and spectral theory remain
separate. Existing VectorComponents already refers to a specified basis; Basis adds the
independent mathematical knowledge of spanning and unique representation.

### Existing boundaries refined

Four existing definitions restricted spatial reuse. The implementation makes these concise
changes while retaining their existing relations:

| Existing Area | Revised definition | Example |
| --- | --- | --- |
| PointConcept | A precise location in geometric space, with no extent. | The location (2,-1,3) in space or (2,-1) in a plane. |
| PointPlotting | Locating and marking a point from its coordinates in a stated Cartesian coordinate system. | Marking (2,-1) in a plane or (2,-1,3) in a spatial coordinate diagram. |
| CoordinateDistance | The calculation of the straight-line distance between points from their coordinates in an orthonormal Cartesian coordinate system. | The distance from (0,0,0) to (1,2,2) is 3. |
| GeometricTransformations | Mappings of geometric points or figures according to a specified rule. | Rotation about a point; orthogonal projection onto a plane. |

CartesianPlane, its CoordinateAxes constituent, OrderedCoordinatePair and LineGraphing keep
their intentionally planar meanings. CartesianSpace supplies the spatial correspondence;
CartesianCoordinateSystem and ThreeDimensional already supply suitable contexts. A Scope
cannot broaden a plane-only Area definition.

### Composition and important distinctions

- RowColumnProduct gives a matrix computation. DotProduct adds its geometric relationship to
  length, angle and orthogonality; it is not replaced by Multiplication plus Addition.
- PerpendicularityRelation requires intersecting geometric objects. VectorOrthogonality also
  includes zero vectors and orthogonal directions of skew lines, so these meanings stay distinct.
- A projection onto an affine line or plane need not be a linear map. Projection onto z=1
  is a concrete boundary example; do not specialize OrthogonalProjection under LinearMap.
  It does specialize GeometricTransformations, whose other children are also specializations.
  The parent-definition clarification admits dimension-reducing projections.
- For intersections, combine affine descriptions with IntersectionRelation and the existing
  constraint/system concepts. For angles, combine DotProduct with AngleCalculation. For
  point-to-line or point-to-plane distance, find the projected point and use DistanceCalculation.
- For skew-line distance, solve for two points whose joining displacement is orthogonal to
  both direction vectors. This composes the existing system methods with the new geometric
  relationships; a separate formula descriptor is not initially required.
- NormalVectorEquation avoids the ambiguous name NormalEquation, also used for least squares.
  Normalizing its normal vector and using projection covers Hesse-form work initially.
- The implementation retains LineParametrization and PlaneParametrization to distinguish one
  independent parameter from two. Composition of AffineParametrization with LineConcept or
  PlaneConcept remains the leaner alternative considered during design.

### Spatial implementation — 2026-10-21

The spatial batch, merged through PR #76 at `209091b`, implements all 16 Areas above,
with 12 partOf and four specializes edges, and
updates the four definitions and examples in the preceding table. All new Areas are intended
for direct labeling, including the general Basis and AffineParametrization concepts. No new
organizer, progression assertion, Scope, Ability or schema change is introduced.

The semantic review checked zero-vector orthogonality, the orthonormal-coordinate condition
for the component dot product and distance, independent parametrization directions, nonzero
normals, and affine projection onto z=1. Existing point plotting progression from
OrderedCoordinatePair remains a learning relationship, not a restriction to two coordinates.
The other batches below have separate review steps.

Verification passed against baseline `9750eff`: 1,330 descriptors and 7,088 assertions,
with all 16 additions eligible and no change to existing relations, structural ancestry or
labeling eligibility. The exact source delta is 80 assertions for new Areas, four replaced
definitions, one replaced example and three added examples. Definitions, examples and the
hierarchy above match the authored source; serialization round-trips byte for byte through
the editor. The ontology assessment reports no findings.

The full `docker build . --output dist --progress plain` passed, including TypeScript client
and ontology tests, documentation validation, Python lint and strict typing, all 49 Python
tests, and package-consumer verification. The final documentation pass also checks this
implementation record. These checks verify the batch, not complete curriculum coverage.

## 2. Advanced complex numbers

This batch implements the previously reserved [stage 3B](advanced-complex-numbers-draft.md#stage-3b--preserved-university-entry-continuation).
The merged baseline already supplies modulus, argument, conjugation, polar notation, geometric
arithmetic, polynomial factorization and the Fundamental Theorem of Algebra. The following
seven Areas extend those foundations, merged through PR #77 at `5733989`.

| Area | Placement | Concise definition | Example |
| --- | --- | --- | --- |
| ComplexExponentialFunction | S: NumericFunction | The nature of the complex exponential exp(x+iy)=exp(x)(cos(y)+i sin(y)) for real x and y using radian angle measures. Its values are nonzero and satisfy exp(z+w)=exp(z)exp(w) and exp(z+2pi*i)=exp(z). | exp(i*pi)=-1; exp(1+2pi*i)=exp(1). |
| ComplexExponentialNotation | S: NumberNotation | The conventions for expressing a complex number as r exp(i*theta), where r is its nonnegative modulus and theta is a radian argument when r>0, or any real radian angle when r=0. | 1+i=sqrt(2) exp(i*pi/4); r=0 represents zero without assigning an argument. |
| EulerTrigonometricIdentities | S: TrigonometricIdentities | The identities cos(theta)=(exp(i*theta)+exp(-i*theta))/2 and sin(theta)=(exp(i*theta)-exp(-i*theta))/(2i) for real radian angles theta. | Rewriting cos(theta) as the average of the two opposite-angle complex exponentials. |
| DeMoivreIdentity | S: AlgebraicEquivalence | The identity (cos(theta)+i sin(theta))^m=cos(m*theta)+i sin(m*theta) for real radian angles theta and integer m. | (cos(pi/3)+i sin(pi/3))^3=-1. |
| ComplexRootStructure | P: NumberSystems | The complete n-th-root set of a complex number for positive integer n: for nonzero r exp(i*theta), the n distinct values r^(1/n) exp(i*(theta+2k*pi)/n), k=0,...,n-1, with r>0 and theta in radians. Zero has only the root zero. | The cube roots of 8 have modulus 2 and arguments 0, 2pi/3 and 4pi/3. |
| RootsOfUnity | S: ComplexRootStructure | The n-th roots of 1 and their cyclic multiplication structure, generated by exp(2pi*i/n), for positive integer n. | The fourth roots 1,i,-1,-i are successive powers of i and multiply within the same set. |
| ComplexConjugateRootTheorem | P: AlgebraicTheorems | The conjugate pairing, with equal multiplicity, of nonreal roots of a nonzero polynomial with real coefficients. | A real-coefficient polynomial with root 2+i also has root 2-i; z-i does not meet the coefficient condition. |

The general complex exponential is developed here through its formula and algebraic identities;
differentiation and holomorphic functions are not prerequisites for its stated meaning. The minimal school option
restricts its initial examples to exp(i*theta). Existing ExponentialDependence retains its
explicit real-domain definition; ExponentialRewriting retains its stated domain restrictions.
Neither replaces the new function's meaning, and neither definition is changed.

The exp(i*theta)=cos(theta)+i sin(theta) correspondence is contained in the function
definition. Avoid also adding a separate EulerFormula descriptor with exactly that definition.
EulerTrigonometricIdentities supplies the reusable reverse identities instead. The notation
Area identifies interpretation of r exp(i*theta), independently of an occurrence-only Scope.

RootsOfUnity is included because the cyclic multiplication/regular-polygon relationship is
reusable knowledge, not solely because a root equation has right-hand side 1. Complete root
sets differ from a principal-root convention. For a nonzero w=r exp(i*theta), the roots are
r^(1/n) exp(i*(theta+2k*pi)/n), k=0,...,n-1. Zero has one distinct n-th root, with multiplicity
n in z^n=0. When applying De Moivre to r times a unit-circle number, negative powers require
r>0 and zero powers require a defined nonzero base under the usual convention.

The [OpenStax account](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-5-polar-form-of-complex-numbers)
supports the power/root-set distinction; the
[Georgia Tech complex-number appendix](https://textbooks.math.gatech.edu/ila/complex-numbers.html)
supports conjugate pairing. Complex analysis, branch-sensitive complex logarithms and contour
integration remain later work.

### Complex implementation — 2026-10-21

The batch adds seven Areas with two partOf and five specializes edges, using the placements
above. All seven are eligible concepts; no organizer, progression edge or occurrence-only
Scope is added. Existing descriptors and their relations are preserved.

The definitions make radian conventions explicit and specify the complete root formula,
including n=1 and zero. The conjugate-root theorem requires real polynomial coefficients
and preserves multiplicity. EulerTrigonometricIdentities inherits the common-domain
equality meaning of TrigonometricIdentities, while the complex exponential's nature and its
notation remain separate knowledge. Holomorphic functions and complex analysis are deferred.

Source comparison and the full Docker build passed; the
[stage 3B validation record](advanced-complex-numbers-draft.md#stage-3b-implementation--2026-10-21)
records the exact graph delta and client checks.

## 3. Elementary graph theory

GraphTheory is a top-level Area, as requested, alongside Combinatorics, Algebra and the other
mathematical fields. Its definition covers the general field; this first batch develops finite
graph foundations and their matrix correspondence. No Combinatorics parent or additional
DiscreteMathematics umbrella is introduced.

```text
GraphTheory
  P GraphFoundations
    P GraphStructure
      S CompleteGraph
    P GraphAdjacency
    P VertexDegree
    P GraphWalk
      S GraphPath
    P GraphCycle
    P GraphConnectivity
    P GraphEdgeWeight
  P GraphMatrixRelations
    P AdjacencyMatrix
    P AdjacencyMatrixPowerTheorem
```

| Area | Concise definition | Example |
| --- | --- | --- |
| GraphTheory | The study of graphs through their vertices, edges, structural relationships and traversals. | Connectivity in a transport network; walks counted using a matrix. |
| GraphFoundations | The vertices, edges, incidence relationships and traversal properties of finite graphs. | Comparing the connections and degrees of vertices in two networks. |
| GraphMatrixRelations | The correspondence between finite graph connections or traversals and matrices indexed by vertices. | Reading an adjacency matrix and interpreting its square. |
| GraphStructure | The organization of vertices and connecting edges under stated direction, loop and multiplicity conventions. | A triangle graph on vertices A,B,C; an isolated fourth vertex. |
| CompleteGraph | A simple undirected graph with an edge between every pair of distinct vertices. | The three-vertex triangle is complete. |
| GraphAdjacency | The relationship between vertices connected by an edge, respecting direction when present. | An edge A to B makes B reachable from A in one directed step. |
| VertexDegree | The number of edge incidences at a vertex, counting each undirected loop twice and distinguishing incoming and outgoing counts in a directed graph. A directed loop contributes one to each count. | Each vertex of a triangle has degree 2. |
| GraphWalk | A finite alternating sequence of vertices and incident edges, starting and ending at vertices, respecting direction when present and permitting repetition. Its length is the number of edges; a single vertex is a length-zero walk. | A-B-A is a walk of length 2 when A and B are joined by an undirected edge. |
| GraphPath | A graph walk with no repeated vertices. | A-B-C is a path when its three vertices are distinct and the consecutive edges exist. |
| GraphCycle | A positive-length closed graph walk with distinct edges and no repeated vertices except its common first and last vertex, under the stated graph conventions. | A-B-C-A is a cycle in a simple triangle graph; A-B-A on one undirected edge is not. |
| GraphConnectivity | The existence of paths joining every pair of vertices in an undirected graph, or in a directed graph either after ignoring directions (weak connectivity) or in both directions (strong connectivity). | A triangle plus an isolated vertex is disconnected; A->B is weakly but not strongly connected. |
| GraphEdgeWeight | The role of a numerical value assigned to an edge under a stated interpretation. | Edge weights recording travel times; outgoing transition probabilities in a stochastic graph. |
| AdjacencyMatrix | The square matrix recording edge counts between vertices in a fixed order, with rows as origins and columns as destinations for directed edges and a stated loop convention. | A_12=1 records one edge from vertex 1 to vertex 2. |
| AdjacencyMatrixPowerTheorem | The equality between entry (i,j) of A^k and the number of length-k walks from i to j, for nonnegative integer k and a finite graph's edge-count adjacency matrix A with each loop counted once on the diagonal. | For A=[[0,1],[1,0]], A^2=I counts the two-edge returns, although these are not simple paths. |

GraphCycle must not specialize the strict GraphPath definition: the repeated endpoint would
contradict it. It is kept as a constituent to make the traversal distinction explicit.
The adjacency convention for walk counting records each directed loop once, and each
undirected loop once on the diagonal; undirected degree still counts a loop twice. Start with
loop-free examples and specify conventions when extending them. A weighted adjacency matrix
instead gives sums of products of edge weights, not ordinary counts.

Walks retain edge identities, so parallel edges give distinct choices. At k=0, A^0=I counts
one length-zero walk at each vertex. A doubled diagonal convention used to recover undirected
degrees is outside AdjacencyMatrixPowerTheorem's stated convention. GraphCycle allows a loop
or two distinct parallel edges when the graph conventions admit them; in a simple undirected
graph its definition requires at least three edges.

Reuse FiniteSetCardinality for graph order and edge count. Reuse MatrixStructure and
RowColumnProduct for matrix knowledge. A graph-based Markov task composes graph concepts
with the existing FiniteMarkovChain, MarkovTransitionMatrix and probability concepts.
Matrices need no new generic power operation merely to state the walk-counting relationship.

AdjacencyMatrixPowerTheorem names the reusable equality between matrix powers and walk counts.
Counting walks from an adjacency matrix by another method does not itself establish this
theorem. It remains partOf GraphMatrixRelations alongside AdjacencyMatrix.

A node-edge picture is a representation context. If needed, propose GraphRepresentation
under RepresentationalScope with GraphDiagram specializing it. ProbabilityTree retains its
current probability-specific meaning; neither it nor a generic drawing establishes graph-theory
knowledge automatically. Representation Scopes are optional in this first batch.

Euler trails, coloring, shortest paths, spanning trees and planarity remain separate follow-ups.
GraphPath is not introduced as a synonym for every use of the French word chemin; the walk/path
convention must be explicit when translating curriculum text.

### Graph implementation — 2026-10-21

The graph batch, merged through PR #78 at `13328d3`, adds 14 Areas: GraphTheory as a root,
two constituent family organizers, and 11
eligible concepts. There are 11 partOf and two specializes edges. GraphTheory,
GraphFoundations and GraphMatrixRelations organize knowledge and are not direct labels;
GraphStructure and GraphWalk remain eligible alongside their specializations.

Existing descriptors, including Combinatorics and the matrix and probability concepts, retain
their definitions and relations. No representation Scope or progression assertion is added.
The root placement is the accepted alternative to the earlier Combinatorics proposal.

Semantic review checked the distinction between walks, paths and cycles; directed reachability;
weak and strong connectivity; and the different loop conventions for degree and walk counting.
Matrix examples checked A^0=I, directed asymmetry, a self-loop, and two parallel undirected
edges giving four two-step returns. See
[Stanley, Chapter 1 and Theorem 1.1](https://math.mit.edu/~rstan/algcomb/algcomb.pdf)
for edge-count adjacency and walk counting with loops and multiple edges,
[MIT's digraph lecture](https://ocw.mit.edu/courses/6-1200j-mathematics-for-computer-science-spring-2024/mit6_1200j_s24_lec14.pdf)
for zero-length walks, and the
[Wisconsin graph reading](https://cs320.cs.wisc.edu/s24/lec/07-recursion-and-graphs/reading2.html)
for directed connectivity conventions.

Verification passed against `5733989`: exactly 14 new Areas and 69 added assertions, giving
1,351 descriptors and 7,192 assertions. GraphTheory is the sole new root; no new descriptor
has Combinatorics ancestry. The three organizers and 11 eligible concepts match the hierarchy
above, and existing assertions, labeling eligibility and ancestry are unchanged. Source tables
match the design and round-trip exactly through the editor; ontology assessment has no findings.

The full `docker build . --output dist --progress plain` passed, including TypeScript/client
and ontology checks, documentation validation, Python lint and strict typing, all 49 Python
tests, and wheel/sdist consumer verification. A final documentation pass covers this record.

## 4. Logical foundations

The existing Logic root has two new constituent families. PropositionalLogic organizes
classical, two-valued truth relationships; Quantification organizes claims over specified domains.
Adding these families makes Logic an organizer. Their members carry the particular knowledge.

```text
Logic
  P PropositionalLogic
    P LogicalNegation
    P LogicalConjunction
    P LogicalDisjunction
    P LogicalImplication
    P LogicalEquivalence
      S DeMorganLaws
      S ContrapositionEquivalence
  P Quantification
    P UniversalQuantification
    P ExistentialQuantification
    P QuantifierOrder
    P QuantifiedNegation
```

| Area | Placement | Concise definition | Example |
| --- | --- | --- | --- |
| PropositionalLogic | P: Logic | Classical, two-valued truth relationships among statements formed using logical connectives and stated assumptions. | Distinguishing the implication from divisibility by 4 to evenness from its converse. |
| LogicalNegation | P: PropositionalLogic | The reversal of a statement's truth value. | The negation of x>3 is x<=3 over the real numbers. |
| LogicalConjunction | P: PropositionalLogic | A compound statement true precisely when both constituent statements are true. | For a real x, x>0 and x<1. |
| LogicalDisjunction | P: PropositionalLogic | A compound statement true precisely when at least one constituent statement is true, including when both are true. | An integer can be divisible by 2 or by 3, including both as with 6. |
| LogicalImplication | P: PropositionalLogic | A truth-functional conditional that is false exactly when its premise is true and its conclusion false, expressing sufficient and necessary conditions in their respective directions. | Divisibility by 4 implies evenness; the converse fails for 6. |
| LogicalEquivalence | P: PropositionalLogic | Bidirectional implication between statements under the same stated assumptions, with matching truth values throughout the admissible interpretations. | For an integer n, n is even if and only if n^2 is even. |
| DeMorganLaws | S: LogicalEquivalence | The equivalences exchanging negated conjunction with a disjunction of negations, and negated disjunction with a conjunction of negations. | Not (P and Q) is equivalent to (not P) or (not Q). |
| ContrapositionEquivalence | S: LogicalEquivalence | The classical equivalence of P implies Q with not Q implies not P. | For an integer n, if n^2 is even then n is even, equivalently if n is odd then n^2 is odd. |
| Quantification | P: Logic | The domains, binding and ordering of universal and existential claims. | Distinguishing a real y larger than every real x from a separate larger y for each x. |
| UniversalQuantification | P: Quantification | The assertion that a predicate holds for every element of a stated domain. | Every real x satisfies x^2>=0. |
| ExistentialQuantification | P: Quantification | The assertion that a predicate holds for at least one element of a stated domain. | There exists a real x with x^2=2. |
| QuantifierOrder | P: Quantification | The dependence of a quantified statement's meaning on the order and scope of its quantifiers. | For every real x there is a real y>x, whereas no real y exceeds every real x. |
| QuantifiedNegation | P: Quantification | The classical equivalences that negate quantified statements by exchanging universal and existential quantifiers and negating the predicate within their scopes, over unchanged domains. | Not every integer is even means that some integer is not even. |

MathematicalStatement already covers the formal object. A duplicate Proposition label is
unnecessary. BoundVariable and FreeVariable retain occurrence-level binding roles and now
explicitly cover mathematical expressions or statements. Variable already covers an identified
mathematical context and includes equation examples. Its definition and the ExpressionStructure
placement stay unchanged: the roles of symbols in expressions can depend on surrounding statement
syntax. A separate LogicalNotation Area under
FormalMathematics is optional if the conventions of quantifier/connective symbols themselves
need explicit coverage; meanings can be learned in natural language.

| Existing Area | Revised definition | Examples, including the added quantified case |
| --- | --- | --- |
| BoundVariable | The role of a variable occurrence governed by a binding construct within the mathematical expression or statement under consideration. | Identifying i as the bound summation index in sum_(i=1)^4 i*x; replacing the bound index k by j throughout product_(k=1)^3 (x + k); identifying x as bound in "for every real x, x^2>=y". |
| FreeVariable | The role of a variable occurrence not governed by a binding construct within the mathematical expression or statement under consideration. | Distinguishing the free variable x from the bound index i in sum_(i=1)^4 i*x; identifying x as free in x + 3; identifying y as free in "for every real x, x^2>=y". |

ConstraintTransformationLogic retains the additional algebraic knowledge about domains and
solution sets. General LogicalImplication or LogicalEquivalence does not replace that content.
Truth-value agreement in one chosen assignment is not a general equivalence proof.
Universal claims over an empty domain are true and existential ones false; quantifier examples
must state their domains.

Reuse DirectProof, ProofByContradiction, ProofByContraposition, ProofByCases, ProofByInduction
and DisproofByCounterexample as proof-method Scopes. ContrapositionEquivalence supplies the
logical relationship; ProofByContraposition supplies the argument's method. LogicalInference
and DeductiveReasoning remain Abilities. Do not add parallel proof-method Areas merely because
a curriculum requests a proof. A later review can identify any independent induction-principle
knowledge beyond the currently modeled argument context.

### Implementation and adoption — 2026-10-21

The `codex/logical-foundations` branch implements 13 new Areas: two organizers and 11 eligible
concepts, using 11 partOf and two specializes assertions. BoundVariable and FreeVariable have
the two definition/example refinements above; their relations remain unchanged. No Scope,
Ability, schema or progression changes are included.

Logic becomes an organizational node under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
Existing direct Logic labels therefore need the supported connective or quantification concepts.
A read-only search found no direct Logic uses in the local authored content sources (`src/`
and `docs/`, TypeScript/JSON/Markdown); this does not audit external datasets or consumers.

Semantic checks used [MIT's Mathematics for Computer Science, §§3.1, 3.3 and 3.6](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/mit6_042js15_textbook.pdf)
for connectives, equivalence and quantification,
[Stanford CS103's quantifier notes](https://web.stanford.edu/class/archive/cs/cs103/cs103.1266/lectures/05/)
for order, negation and empty ranges, and
[Trinity College's binding notes](https://www.maths.tcd.ie/~stalker/22C00/notes/4.2-free-and-bound-variables.html)
for occurrence-level, context-relative binding. These support the mathematical boundaries;
the hierarchy is an ontology design choice.

### Logical-foundations verification

Independent comparison against `13328d3` confirms 13 new Areas and 65 new-entity assertions,
giving 1,364 descriptors and 7,257 assertions. The only existing source changes are the four
definition/example replacements for BoundVariable and FreeVariable. Logic is the only existing
descriptor whose labeling eligibility changes; all existing ancestry remains unchanged.
The source, design tables and hierarchy agree, both descriptor Turtle files round-trip exactly
through the editor, and ontology assessment reports zero findings.

The full `docker build . --output dist --progress plain` passed: TypeScript/client and ontology
checks, documentation validation, npm package/browser checks, Python lint and strict typing,
all 49 Python tests, and wheel/sdist consumer verification. The final documentation check also
passes after adding this record.

## 5. Adjacent targeted follow-ups

### Conics

The current source has no Parabola, Ellipse, Hyperbola or equivalent focal-locus concepts.
QuadraticDependence does not supply that geometric knowledge. Review a conic family under
the existing geometry structure, with these distinctions:

- Parabola: points equidistant from a focus and a line not containing that focus.
- Ellipse: a constant sum of distances to two fixed foci, greater than their separation;
  include the equal-focus circle case or state a deliberate noncircular convention.
- Hyperbola: a positive constant absolute difference of distances to two distinct foci,
  smaller than their separation.

Focus/directrix roles and the geometric-to-equation correspondence deserve explicit review.
Circle equations can already compose Circle, CoordinateDistance, PythagoreanTheorem,
AlgebraicEquivalence and CompletingSquare. Avoid creating a second Circle concept solely
for its equation. This follow-up is needed before claiming complete CCSS geometry coverage.

### Number-theory results

The earlier number-theory plan deferred modular power theorems. The targeted French review
shows that at least these two results warrant a concrete follow-up:

| Candidate | Placement | Definition and boundary |
| --- | --- | --- |
| FermatsLittleTheorem | P: ModularArithmetic | For prime p and integer a, a^p is congruent to a modulo p; if p does not divide a, a^(p-1) is congruent to 1. Passing such a congruence is not a general primality certificate. |
| CoprimeDivisibilityLemma | P: IntegerDivisibility | If a nonzero integer a divides bc and is coprime to b, then a divides c. This is the general coprime form commonly called Gauss's lemma in the French school programme. |

BezoutIdentity, Coprimality, prime factorization and congruence concepts already exist.
Their composition can support deriving these statements, but the reusable conclusions are
distinct knowledge. Euler's totient theorem, Wilson's theorem and broader cryptography remain
separate optional extensions; no application family is added merely for a context.

## Review and implementation checks

The merged spatial implementation retains both affine-parametrization specializations.
The complex batch retains all seven proposed concepts with refined mathematical boundaries.
The merged graph implementation uses the requested top-level field. Logical foundations are
implemented for review. Optional notation/representation Scopes and the later conic/number-theory
batches remain separate review steps.

Before implementing each batch, review every endpoint and affected ancestry, use the editor's
ordering, check definitions against examples and counterexamples, and run the normal source
and Docker checks. Check links, source references and the implemented-versus-proposed boundary.
A candidate name in section 5 does not imply a source or dataset change.

The final curriculum audit should classify each leaf as covered directly, covered by a
defensible composition, a true concept gap, or a representation/constraint gap. Include ordinary
geometry and school arithmetic as well as these extensions. Broad family coverage alone is
not a completeness certificate.
