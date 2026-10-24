# Euclidean geometry — theorem, criterion and construction draft

Status: **merged**, verified 2026-10-22, through
[PR #82](https://github.com/christian-bick/edugraph-ontology/pull/82) at `5b89a92`.
Original branch: `codex/euclidean-geometry-foundations`; original proposal: 2026-10-21.
Baseline: `main` at `0af4aba97731e49cbff3ac51ca9ef519d174a945`, following PR #81;
1,374 descriptors and 7,308 authored assertions.

This develops the first follow-up in the [curriculum coverage audit](coverage-audit-2026-10-21.md).
It adds reusable Euclidean results and exact construction knowledge, together with nets,
sectors and transformation boundary repairs. Existing shapes, calculations and spatial Abilities
remain the building blocks. The proposal addresses the **20 geometry follow-up rows** in that
audit; their historical statuses are not closed merely by adding these descriptors.

The separate F-IF.A.1 function-foundations question and the advanced-school sequence, probability,
computing and cross-product follow-ups remain outside this batch. This is a targeted response to
the audited CCSS requirements, not a new audit of every German or French prerequisite course.

## Recommended modeling decisions

1. Put triangle and quadrilateral results in new constituent families under `GeometricRelations`.
   Reuse `AngleRelations` and `CircleRelations`. Keep the shape hierarchy intact.
2. Make the congruence and similarity criteria eligible Areas, with specific criteria as
   specializations. The knowledge that given conditions are sufficient is different from merely
   encountering those conditions in a diagram.
3. Add an eligible `GeometricConstructionTechnique` Area with specializations for independently learned
   construction techniques. Their operation rules, feasibility and justification are knowledge;
   actual instruments are separate Scopes. Compose the techniques with the relevant objects and
   results instead of introducing an Area for every object-plus-construction goal.
4. Add `GeometricNet` as a representation Scope. Existing spatial knowledge and Abilities already
   support the corresponding tasks. Add a sector object and its arc/area relationship explicitly.
5. Include identity dilations, distinguish plane and spatial rotations, and describe
   `SolidOfRevolution` independently of a single transformation map.

These choices follow [ONT-D1/D2](../descriptors.md), [ONT-S4/S5](../structure.md) and
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
The curricula establish knowledge requirements; the family structure below is an ontology
design recommendation.

## Proposed structure

`P` means the indented child is `partOf` its parent; `S` means it `specializes` its parent.
`[existing]` marks a descriptor already in the baseline. Only relevant branches are shown.

```text
Geometry [existing]
├─ P GeometricRelations [existing]
│  ├─ P AngleRelations [existing]
│  │  ├─ P VerticalAngles [existing; definition repair]
│  │  └─ P ParallelTransversalAngleTheorem
│  ├─ P PerpendicularBisectorTheorem
│  ├─ P TriangleRelations
│  │  ├─ P PythagoreanTheorem [existing; moved here during review]
│  │  ├─ P TriangleInequality
│  │  ├─ P TriangleAngleSum
│  │  ├─ P TriangleExteriorAngleTheorem
│  │  ├─ P IsoscelesTriangleTheorem
│  │  ├─ P TriangleProportionalityTheorem
│  │  │  └─ S TriangleMidsegmentTheorem
│  │  ├─ P TriangleCongruenceCriterion
│  │  │  ├─ S SSSTriangleCongruence
│  │  │  ├─ S SASTriangleCongruence
│  │  │  └─ S ASATriangleCongruence
│  │  ├─ P TriangleSimilarityCriterion
│  │  │  ├─ S AATriangleSimilarity
│  │  │  ├─ S SASTriangleSimilarity
│  │  │  └─ S SSSTriangleSimilarity
│  │  └─ P TriangleCenterRelations
│  │     ├─ P TriangleCentroidTheorem
│  │     ├─ P TriangleIncenterTheorem
│  │     └─ P TriangleCircumcenterTheorem
│  ├─ P QuadrilateralRelations
│  │  ├─ P ParallelogramOppositeSidesAndAngles
│  │  ├─ P ParallelogramDiagonalCriterion
│  │  └─ P RectangleDiagonalCriterion
│  ├─ P CircleRelations [existing]
│  │  ├─ P TangentRadiusRelation [existing; definition repair]
│  │  ├─ P InscribedAngleTheorem
│  │  │  └─ S DiameterAngleTheorem
│  │  ├─ P CircumscribedAngleTheorem
│  │  ├─ P CyclicQuadrilateralAngleTheorem
│  │  └─ P ArcSectorProportionality
│  └─ P CavalieriPrinciple
├─ P GeometricConstructionTechnique
│  ├─ S StraightedgeAndCompassConstruction
│  ├─ S FoldingConstruction
│  └─ S LocusIntersectionConstruction
├─ P GeometricObjects [existing]
│  ├─ P TwoDimensionalObjects [existing]
│  │  └─ P CircularShapes [existing]
│  │     └─ P CircularSector
│  │        ├─ S HalfCircle [existing; replace former direct P edge]
│  │        └─ S QuarterCircle [existing; replace former direct P edge]
│  └─ P ThreeDimensionalObjects [existing]
│     └─ P SolidOfRevolution
└─ P GeometricTransformations [existing; remains eligible]
   ├─ S Dilation [existing; definition repair]
   └─ S Rotation [existing; definition repair]

RepresentationalScope [existing Scope root]
└─ P GeometryRepresentation [existing; remains eligible]
   └─ S GeometricNet

ConstructionScope [new Scope root; organizer]
└─ P GeometricConstruction [new Scope organizer]
   ├─ P Compass
   └─ P Straightedge
```

The new organizers are the Areas `TriangleRelations`, `TriangleCenterRelations` and
`QuadrilateralRelations`, and the Scopes `ConstructionScope` and `GeometricConstruction`; their `partOf` children make
them ineligible for direct labeling.
The two criterion parents, `TriangleProportionalityTheorem`, `InscribedAngleTheorem`,
`CircularSector` and `GeometricConstructionTechnique` have only specialization children and remain
eligible concepts. No existing eligible descriptor gains its first constituent child.

The proposal contains **37 new Areas and five new Scopes**. It revises four existing definitions
and replaces the two direct `partOf CircularShapes` edges of `HalfCircle` and `QuarterCircle`
with `specializes CircularSector`. No existing identifier is renamed or deleted.

## Triangle, line and quadrilateral knowledge

Definitions below are proposed `rdfs:isDefinedBy` values. The example column supplies candidate
`rdfs:comment` examples; design explanations outside the tables are not ontology comments.

| Organizer | Proposed definition |
| --- | --- |
| `TriangleRelations` | Metric, angle and incidence relationships involving Euclidean triangles. |
| `TriangleCenterRelations` | Concurrency and equidistance relationships determining distinguished centers of a triangle. |
| `QuadrilateralRelations` | Metric, angle and incidence relationships involving nondegenerate simple Euclidean quadrilaterals. |

### Criteria and feasibility

| Area | Proposed definition | Example |
| --- | --- | --- |
| `TriangleCongruenceCriterion` | Sufficient side-length or angle conditions for congruence of nondegenerate Euclidean triangles. | Equal corresponding sides of lengths 4, 5 and 6 establish congruence. |
| `SSSTriangleCongruence` | The sufficiency of three equal corresponding side lengths for triangle congruence. | Triangles with corresponding sides 4, 5 and 6 are congruent. |
| `SASTriangleCongruence` | The sufficiency of two equal corresponding side lengths and equal included angles for triangle congruence. | Sides 4 and 6 with included angle 50° determine congruent triangles. |
| `ASATriangleCongruence` | The sufficiency of two equal corresponding angles and equal included side lengths for triangle congruence. | Angles 40° and 60° at the endpoints of a side of length 5 determine congruent triangles. |
| `TriangleSimilarityCriterion` | Sufficient angle or side-ratio conditions for similarity of nondegenerate Euclidean triangles. | Equal corresponding angles of 40° and 70° establish similarity. |
| `AATriangleSimilarity` | The sufficiency of two equal corresponding angles for triangle similarity. | Triangles with angles 40° and 70° are similar despite different sizes. |
| `SASTriangleSimilarity` | The sufficiency of proportional corresponding pairs of sides and equal included angles for triangle similarity. | Sides 3 and 5 correspond to 6 and 10, with equal included angles. |
| `SSSTriangleSimilarity` | The sufficiency of proportional corresponding side lengths for triangle similarity. | Triangles with sides 3, 4, 5 and 6, 8, 10 are similar. |
| `TriangleInequality` | The condition that positive lengths form a nondegenerate Euclidean triangle exactly when each is less than the sum of the other two. | Lengths 2, 3 and 4 form a triangle; lengths 2, 3 and 5 do not. |

ASA/SAS/SSS congruence and AA similarity are explicit requirements in
[G-CO.B.8](https://www.thecorestandards.org/Math/Content/HSG/CO/) and
[G-SRT.A.3/B.5](https://www.thecorestandards.org/Math/Content/HSG/SRT/).
SAS/SSS similarity complete the small criterion family; they are not claimed as separately named
CCSS requirements. The classical results appear in
[Euclid I.4](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/propI4.html),
[I.8](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/propI8.html),
[I.26](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/propI26.html),
[VI.5](https://mathcs.clarku.edu/~djoyce/java/elements/bookVI/propVI5.html) and
[VI.6](https://mathcs.clarku.edu/~djoyce/java/elements/bookVI/propVI6.html).

The alternative is one criterion Area plus Scopes describing the supplied measurements.
That would express the configuration, but would not independently identify the result whose
sufficiency is being explained or applied. The specialization approach is recommended here.
Do not infer a criterion label from three numbers merely appearing in a diagram.

[7.G.A.2](https://www.thecorestandards.org/Math/Content/7/G/) also requires existence and
nonuniqueness, not just recognition of the positive criteria. Compose `GeometricConstructionTechnique`,
`Triangle`, `TriangleInequality`, `TriangleAngleSum`, the relevant criterion, `IntersectionRelation` and appropriate
Abilities according to the task. Use these acceptance cases:

- SSS lengths 2, 3, 5: no nondegenerate triangle.
- SSS lengths 4, 5, 6: one triangle up to congruence; mirror images are not a second congruence class.
- AAA angles 50°, 60°, 70°: infinitely many sizes, one similarity class.
- AAA angles 80°, 70°, 40°: no triangle because their sum exceeds 180°.
- SSA with A = 30°, opposite side a = 5 and side b = 8: two noncongruent triangles.
- SAS with positive side lengths and included angle strictly between 0° and 180°: one congruence class.

In the SSA case, a circle of radius 5 intersects the specified 30° ray in two admissible points
when the other fixed side has length 8. This makes the ambiguity observable through construction;
no positive “SSA criterion” is introduced. The triangle inequality's sufficiency is justified by
the construction in [Euclid I.22](https://mathcs.clarku.edu/~djoyce/java/elements/bookI/propI22.html).

### Relationships and triangle centers

| Area | Proposed definition | Example |
| --- | --- | --- |
| `TriangleAngleSum` | The equality of a Euclidean triangle's interior-angle sum to 180°. | Angles 50° and 60° leave a third angle of 70°. |
| `TriangleExteriorAngleTheorem` | The equality of a triangle's exterior angle supplementary to one interior angle to the sum of the other two interior angles. | Remote interior angles 50° and 60° give an exterior angle of 110°. |
| `IsoscelesTriangleTheorem` | The equivalence between equality of two triangle sides and equality of their opposite angles. | AB = AC exactly when ∠ABC = ∠BCA. |
| `TriangleProportionalityTheorem` | The equivalence, for interior points on two sides of a triangle, between parallelism of their joining segment to the third side and equal fractional distances from the shared vertex, with the joining segment in the same length ratio to the third side. | For D inside AB and E inside AC, DE ∥ BC iff AD/AB = AE/AC; then DE/BC has that same ratio. |
| `TriangleMidsegmentTheorem` | The parallelism of a triangle's midpoint-joining segment to the third side and equality of its length to half that side. | If D and E are side midpoints and the third side is 10, then DE is parallel to it and has length 5. |
| `TriangleCentroidTheorem` | The concurrency of a triangle's vertex-to-opposite-midpoint segments at a point dividing each in a 2:1 ratio from the vertex. | Vertices (0,0), (6,0), (0,3) give centroid (2,1). |
| `TriangleIncenterTheorem` | The concurrency of a triangle's internal angle bisectors at its unique interior point equidistant from the sides, the center of its incircle. | The perpendicular distances from the incenter to all three sides equal the inradius. |
| `TriangleCircumcenterTheorem` | The concurrency of a triangle's side perpendicular bisectors at its unique coplanar point equidistant from the vertices, the center of its circumcircle. | A right triangle's circumcenter is its hypotenuse midpoint. |
| `ParallelTransversalAngleTheorem` | The equivalence of parallelism with equal corresponding or alternate interior angles, or supplementary same-side interior angles, for distinct coplanar lines cut by a transversal. | Equal corresponding angles of 65° establish parallelism; same-side interior angles are then 65° and 115°. |
| `PerpendicularBisectorTheorem` | The characterization, in a plane, of points equidistant from a nonzero segment's endpoints as exactly the points on its perpendicular bisector. | PA = PB places P on the perpendicular bisector of AB. |
| `ParallelogramOppositeSidesAndAngles` | The equality of opposite side lengths and opposite angle measures in a parallelogram. | A parallelogram angle of 70° has an opposite angle of 70°. |
| `ParallelogramDiagonalCriterion` | The equivalence between a simple quadrilateral being a parallelogram and its diagonals bisecting one another. | Diagonals AC and BD intersect at O with AO = OC and BO = OD. |
| `RectangleDiagonalCriterion` | The equivalence between a parallelogram being a rectangle and its diagonals having equal lengths. | A parallelogram with equal diagonals is a rectangle. |

These distinguish the guarantees required by
[8.G.A.5](https://www.thecorestandards.org/Math/Content/8/G/) and
[G-CO.C.9–11](https://www.thecorestandards.org/Math/Content/HSG/CO/) from the existing shapes,
angle calculations and positional relations. The centroid's 2:1 ratio is a small natural
completion beyond the expressly named concurrency requirement.

**Audit precision improvement:** [G-SRT.B.4](https://www.thecorestandards.org/Math/Content/HSG/SRT/)
explicitly requires proportional division by a parallel triangle cut and its converse. The audit
classified that row compositionally. On rereading, identifying this reusable guarantee explicitly
is more consistent with the treatment of other Euclidean results. Add
`TriangleProportionalityTheorem` without rewriting the historical audit counts; its midpoint case
is a truthful specialization. [Euclid VI.2](https://mathcs.clarku.edu/~djoyce/java/elements/bookVI/propVI2.html)
supports both directions. The existing `PythagoreanTheorem` continues to cover the row's other result.

Boundaries for implementation and examples:

- The perpendicular-bisector locus is a line in a plane; in three-dimensional space the full
  equidistant locus is a plane. The proposed statement deliberately fixes the planar setting.
- Equal diagonals alone do not establish a rectangle: an isosceles trapezoid is a counterexample.
- Internal angle bisectors determine the incenter. External bisectors can give excenters.
- A circumcenter may be inside, on or outside its triangle. Do not require an interior center.
- Existing `Median` denotes a statistical median. Do not use it for a triangle's vertex-to-midpoint
  segment; the centroid definition supplies that meaning without a duplicate primitive.
- The transversal conditions concern correctly corresponding positions at distinct crossings;
  unrelated equal angles do not imply parallel lines.

AAS and hypotenuse–leg congruence, orthocenter concurrency, Euler-line relationships and additional
quadrilateral criteria are possible later refinements. They are not needed merely to satisfy the
selected named CCSS requirements.

## Circles and Cavalieri's principle

| Area | Proposed definition | Example |
| --- | --- | --- |
| `InscribedAngleTheorem` | The equality of an inscribed angle to half the central-angle measure of its intercepted arc. | An intercepted arc with central-angle measure 120° gives an inscribed angle of 60°. |
| `DiameterAngleTheorem` | The right angle subtended by a diameter at any other point of its circle. | If AB is a diameter and C lies elsewhere on the circle, ∠ACB = 90°. |
| `CircumscribedAngleTheorem` | The equality of the angle between two tangent rays from an exterior point to 180° minus the minor central angle between their contact-point radii. | A minor central angle of 110° gives a tangent-ray angle of 70°. |
| `CyclicQuadrilateralAngleTheorem` | The supplementary opposite interior angles of a convex quadrilateral inscribed in a circle. | An interior angle of 75° gives an opposite angle of 105°. |
| `CavalieriPrinciple` | The equality of volumes of solids of equal height whose cross-sectional areas are equal at every corresponding height in parallel planes. | Right and oblique prisms with equal base areas and equal heights have equal volumes. |

Use the arc not containing the inscribed angle's vertex; its central-angle measure can exceed
180°. The diameter result is the semicircle case and therefore specializes the inscribed-angle
result. Its name avoids the regional ambiguity of “Thales' theorem.” The two-tangent result is
needed because [G-C.A.2](https://www.thecorestandards.org/Math/Content/HSG/C/) explicitly includes
circumscribed angles. G-C.A.3 also requires the cyclic-quadrilateral result and the center-based
constructions. Classical sources include
[Euclid III.20](https://mathcs.clarku.edu/~djoyce/java/elements/bookIII/propIII20.html),
[III.22](https://mathcs.clarku.edu/~djoyce/java/elements/bookIII/propIII22.html),
[IV.4](https://mathcs.clarku.edu/~djoyce/java/elements/bookIV/propIV4.html) and
[IV.5](https://mathcs.clarku.edu/~djoyce/java/elements/bookIV/propIV5.html).

Cavalieri compares section **areas**, not necessarily congruent section shapes. Equal base area
and equal height alone are insufficient for arbitrary solids. A useful sphere example compares
a hemisphere of radius R with a cylinder of radius and height R after removing a cone whose
vertex is at the cylinder's base center: horizontal section areas are π(R² − h²) in both solids.
This supplies an elementary volume argument for
[G-GMD.A.1/2](https://www.thecorestandards.org/Math/Content/HSG/GMD/), independent of integration;
see the [University of Washington treatment](https://sites.math.washington.edu/nwmi/materials/Cavalieri.pptx.pdf)
and [Aitken's university notes](https://public.csusm.edu/aitken_html/m330/CavPrinciple.pdf).

The proposed `CavalieriPrinciple` belongs to `GeometricRelations` through `partOf`. It does not specialize
`CrossSectionIntegration` or `VolumeCalculation`: it is the comparison guarantee that may justify
a volume calculation. Existing `ShapeDecomposition`, `ShapeSynthesis`, calculation Areas and
appropriate justification Scopes cover dissection-based arguments without another generic Area.

## Geometric construction techniques and instruments

The construction technique is mathematical knowledge, including the operations that define it
and why they produce the required configuration. A compass or ruler used to carry it out is an
instrument context. The same technique can be studied on paper, explained without performing it,
or implemented in software; those settings do not change its Area.

### Initial technique family

| New descriptor | Dimension and placement | Proposed definition | Example |
| --- | --- | --- | --- |
| `GeometricConstructionTechnique` | Area; `partOf Geometry` | Exact constructive procedures for geometric configurations from given data, including their feasibility and correctness under specified permitted operations. | Construct a segment's perpendicular bisector using equal-radius arcs and justify the resulting equidistance. |
| `StraightedgeAndCompassConstruction` | Area; `specializes GeometricConstructionTechnique` | Constructive procedures using lines through known points, circles with given or constructed centers and radii, and their intersections, without reading measurement scales. | Construct a perpendicular bisector using two equal-radius circles and the line through their intersections. |
| `FoldingConstruction` | Area; `specializes GeometricConstructionTechnique` | Constructive procedures using folds whose creases satisfy specified point or line coincidence conditions. | Fold A onto B to produce their perpendicular bisector; intersect two such creases to locate a triangle's circumcenter. |
| `LocusIntersectionConstruction` | Area; `specializes GeometricConstructionTechnique` | Constructing solutions by expressing geometric conditions as sets of points and finding their common points. | Intersect circles centered at A and B to locate points at prescribed distances from both, distinguishing zero, one or two intersections for distinct centers. |

All three are narrower forms of constructive knowledge, so they **specialize** the parent.
`GeometricConstructionTechnique` remains eligible for tasks whose construction knowledge is evident but
whose particular technique is not established. The children need not be mutually exclusive:
straightedge-and-compass operations or folding can implement a locus-intersection strategy.
Recognizing a target condition as a locus and using common points to satisfy simultaneous
conditions adds procedural knowledge beyond merely recognizing `IntersectionRelation`.

The classical operation system is illustrated by
[Berkeley Math Circle's construction material](https://mathcircle.berkeley.edu/sites/default/files/BMC3/construct/node7.html).
Folding also has its own mathematical operation rules; see
[Berkeley's folding construction notes](https://mathcircle.berkeley.edu/sites/default/files/BMC4/Handouts/construction/construction.html).
The curriculum-aligned [Placing a Fire Hydrant task](https://tasks.illustrativemathematics.org/content-standards/HSG/CO/D/tasks/508)
uses two folds to locate an equidistant point and asks why the construction works.

The Areas describe procedural knowledge. `ProcedureExecution`, `ProcedureUnderstanding`,
`ProcedureDerivation`, `ProcedureComposition`, `CorrectnessEvaluation` and `DeductiveReasoning`
distinguish what the learner does with it. A proof obligation is not imposed on every execution
task merely because correctness is part of the subject matter.

“Exact” concerns the mathematical procedure and its guarantee. Physical pencil marks, folds and
screens approximate ideal geometric objects; that does not make the underlying procedure an
approximation method. Conversely, a measured or visually plausible result alone does not
establish the validity of an exact construction.

### Instrument Scopes

| New descriptor | Dimension and placement | Proposed definition | Example |
| --- | --- | --- | --- |
| `ConstructionScope` | Scope root | The tools and material conditions used in constructing objects or configurations. | Instruments and materials supplied for constructing a model or diagram. |
| `GeometricConstruction` | Scope; `partOf ConstructionScope` | The instruments and material conditions used in constructing geometric figures. | A drawing compass and straightedge supplied for constructing a geometric diagram. |
| `Compass` | Scope; `partOf GeometricConstruction` | A drawing compass used to trace circles or arcs or to transfer distances between points. | Using a physical compass to draw two arcs with the same radius. |
| `Straightedge` | Scope; `partOf GeometricConstruction` | A straight-edged guide used to draw or align straight lines without relying on a graduated scale. | Using the edge of a ruler to join two constructed points without reading its markings. |

The Scope hierarchy is `ConstructionScope` → `GeometricConstruction` → individual instruments,
using `partOf` edges. Both family nodes organize construction context; they do not describe
construction techniques or abstract operation systems. The knowledge Area is named
`GeometricConstructionTechnique` to keep its identifier distinct in the shared namespace.
Existing `PhysicalRuler`, `TriangleRuler` and `Protractor` remain available in their current
measurement families; this proposal does not move or redefine them. In particular,
`PhysicalRuler` identifies graduated length measurement, while `Straightedge` describes using
an edge as a line guide. The same physical ruler can support either or both roles according to
what the task actually uses.

An instrument Scope requires evidence of using or working with that instrument. A compass in a
decorative illustration, or circles alone, do not establish its use. Conversely, an explanation
of a valid line-and-circle procedure can establish `StraightedgeAndCompassConstruction` without
a physical `Compass` or `Straightedge` Scope. A digital implementation can establish the same
technique; software is not automatically a separate construction method.

[G-CO.D.12](https://www.thecorestandards.org/Math/Content/HSG/CO/) permits varied methods and tools,
including folding, reflective devices and dynamic software. Select the Area for the technique
and Scope for the evidenced instrument independently. Do not translate its list of tools into
one knowledge Area per device or require both physical tools for every classical construction task.

Existing `LinearDrawing`, `LinearShapeDrawing` and `CircularShapeDrawing` concern spatial
production, and the latter already has a compass example. Mere instrument use is not the new
distinction. Exact construction requires a procedure meeting specified geometric conditions;
measurement or a visually plausible sketch alone does not establish that guarantee.

### Contrasting evidence

| Observable task or explanation | Supported distinction |
| --- | --- |
| Construct a perpendicular bisector by equal-radius circles, then join their crossings. | `StraightedgeAndCompassConstruction`; add instrument Scopes only when their use is established. |
| Explain why folding A onto B gives the perpendicular bisector. | `FoldingConstruction` + `PerpendicularBisectorTheorem`, with the relevant reasoning Ability. |
| Translate two prescribed distances into circles, find their common points and justify which candidates satisfy both conditions. | `LocusIntersectionConstruction`; also the classical technique when that procedure uses its operation system. |
| Read 3 cm on a ruler and 60° on a protractor to draw a triangle. | Measurement and instrument knowledge; this alone does not establish `StraightedgeAndCompassConstruction`. |
| Fold an already supplied cube net into a cube. | Existing net/spatial composition; this alone does not establish the point/line alignment technique in `FoldingConstruction`. |
| Click an intersection already marked as the answer, without connecting it to the constraints. | This alone does not establish the locus-intersection strategy. |

### Required procedures expressed through composition

These are competency examples, **not additional proposed descriptor IDs**. The generic
`GeometricConstructionTechnique` references below can be replaced by the most specific evidenced
technique. The described line-and-circle implementations support
`StraightedgeAndCompassConstruction`; constructions that explicitly formulate simultaneous
point conditions and solve them by intersecting loci also support `LocusIntersectionConstruction`.
An alternative folding procedure should receive its own appropriate technique label.

| Construction | Reuse and observable procedure |
| --- | --- |
| Copy a segment | `GeometricConstructionTechnique` + `LineSegment` + `CongruenceRelation`; transfer the given length by a circle intersection on a specified ray. |
| Copy an angle | `GeometricConstructionTechnique` + `Angle` + `CongruenceRelation`; reproduce equal-radius arc intersections and the connecting chord. |
| Bisect a segment | `GeometricConstructionTechnique` + `PerpendicularBisectorTheorem` + `LineSegment`; intersect equal-radius circles about the endpoints and join their two crossings. |
| Bisect an angle | `GeometricConstructionTechnique` + `Angle` + `CongruenceRelation`; equal distances along the rays and equal-radius arcs produce two congruent subtriangles. |
| Construct a perpendicular through a point on or off a line | `GeometricConstructionTechnique` + `PerpendicularityRelation` + `PerpendicularBisectorTheorem`; choose equal-distance intersections on the line and construct their perpendicular bisector. |
| Construct a parallel through a point off a line | `GeometricConstructionTechnique` + `ParallelTransversalAngleTheorem` + `ParallelismRelation`; copy a corresponding angle, or construct successive perpendiculars. |
| Construct an incircle | `GeometricConstructionTechnique` + `TriangleIncenterTheorem` + `Circle`; intersect internal angle bisectors and use the perpendicular distance to a side as radius. |
| Construct a circumcircle | `GeometricConstructionTechnique` + `TriangleCircumcenterTheorem` + `Circle`; intersect side perpendicular bisectors and use the distance to a vertex as radius. |
| Construct a tangent from an exterior point P | `GeometricConstructionTechnique` + `DiameterAngleTheorem` + `TangentRadiusRelation`; intersect the original circle with the auxiliary circle of diameter OP, where O is the original center. |
| Inscribe a square | `GeometricConstructionTechnique` + `Square` + `Circle` + the relevant angle and congruence results; construct perpendicular diameters and join their endpoints. |
| Inscribe a regular hexagon or equilateral triangle | `GeometricConstructionTechnique` + `Hexagon` or `EquilateralTriangle` + `Circle`; step the radius around the circle, then use all six vertices or alternating vertices. |

For the regular hexagon, the target must state equal sides **and** equal angles: existing
`Hexagon` only means six sides. This requirement belongs in the concrete competency rather than
being hidden in a `RegularHexagonConstruction` identifier. For arc-based procedures, the task
must supply admissible radii and select the intended intersections; tangencies and zero-length
givens are not silently treated as generic two-crossing cases.

`ProofByConstruction` and `ConstructedCaseEvidence` describe the evidential role only when the
construction actually establishes the relevant existence or validity claim. A drawing is not
automatically a proof, and constructing one example does not prove a universal theorem.

### Further techniques to consider

The following are **optional extensions**, not part of the proposed descriptor count or initial
structure. Both would specialize `GeometricConstructionTechnique` if their method knowledge needs to be
identified independently.

| Candidate Area | Proposed meaning | Example and distinction |
| --- | --- | --- |
| `TransformationConstruction` | Constructive procedures that transform a geometric problem into a simpler configuration and transfer the constructed result back. | Construct an equilateral triangle with one fixed vertex and the other vertices on two given lines by rotating one line through 60°, intersecting it with the other, and rotating the intersection back; retain only nondegenerate configurations. Merely drawing a specified reflected image already composes `Reflection` with an appropriate Ability. |
| `CoordinateConstruction` | Constructive procedures that express geometric conditions in coordinates, solve the resulting relations and recover the required configuration. | Solve x² + y² = 25 and (x − 6)² + y² = 25 to obtain candidate vertices (3, ±4). Merely plotting supplied coordinates does not demonstrate the geometry-to-algebra-to-geometry method. |

Compass-only, straightedge-only and marked-ruler methods could be later operation-system
specializations when their distinct constructive knowledge becomes a target. Their permitted
givens and operations would need explicit definitions. A software-specific Area is not warranted
merely because an existing technique is performed digitally.

Children such as segment copying, angle bisection and incircle construction would offer finer
direct indexing, but mostly reproduce combinations of goal, object and result. The technique
family above captures reusable methods while those targets remain compositions with shapes and
theorems. No additional standalone locus primitive is needed for this initial procedural concept;
its definition already states the relevant sets-of-points meaning.

## Nets, sectors and transformation boundaries

| New descriptor | Dimension and placement | Proposed definition | Example |
| --- | --- | --- | --- |
| `GeometricNet` | Scope; `specializes GeometryRepresentation` | Planar layouts of surface pieces used to represent a solid by folding or rolling them together without stretching. | Six square faces of a cube; a cylinder's rectangle and circular bases. |
| `CircularSector` | Area; `partOf CircularShapes` | A circular region bounded by two radii and their included arc, with central angle strictly between zero and one full turn. | A filled circular sector with central angle 120°. |
| `ArcSectorProportionality` | Area; `partOf CircleRelations` | The relationships s = rθ and A = r²θ/2 between radius r > 0, central angle 0 < θ < 2π in radians, arc length s and circular-sector area A. | Radius 3 and angle π/2 give arc length 3π/2 and sector area 9π/4. |
| `SolidOfRevolution` | Area; `partOf ThreeDimensionalObjects` | The nature of solids formed by rotating a bounded plane region through a full turn about a line in its plane. | A rectangular region rotated about one side generates a right circular cylinder. |

### Nets

Use `GeometricNet` with existing `Polyhedron` for the polygonal-face cases in
[6.G.A.4](https://www.thecorestandards.org/Math/Content/6/G/). The broader Scope also permits
cylinder and cone developments, avoiding a separate representation descriptor per solid.
Its representation mode can be under investigation, including a candidate layout whose folding
validity is being tested; the Scope alone does not certify that candidate's correctness.
An exact unstretched planar net of a sphere is excluded.

No new net-folding Area is proposed. `SpatialImagination` already has an example of imagining a
folded net; `SpatialGeneration`, `SpatialInterpretation`, `ShapeDecomposition`, `ShapeSynthesis`
and `SurfaceAreaCalculation` supply the other dimensions. A future concept about edge/vertex
identification or folding-validity criteria would need an independent knowledge distinction.

The narrower alternative `PolyhedronNet` is sound if developments of curved solids are deliberately
excluded. Do not add both Scopes without a demonstrated need for that subtype distinction.

### Sectors and existing circular figures

The former direct constituent relationships from `HalfCircle` and `QuarterCircle` to
`CircularShapes` are replaced by specializations of `CircularSector`. Both describe filled
regions, so they are genuine sector subtypes;
their ancestry still reaches `CircularShapes` through the new sector. Preserve their definitions.
Complete `Circle` is excluded from that specialization because this sector definition excludes
a full turn. Minor, semicircular and major sectors are included.

Reuse **`Arc` under its existing identifier**, together with `RadianScale`,
`LengthCalculation` and `AreaCalculation`. Do not create a duplicate arc primitive or rename
`Arc` incidentally. `ArcSectorProportionality` supplies the reusable proportionality
knowledge and derivation target in [G-C.B.5](https://www.thecorestandards.org/Math/Content/HSG/C/).
`ArcLengthIntegration` is not needed for circular arcs in this elementary setting.

### Existing definition changes

The initial draft retained existing placements except the two sector-parent replacements above.
The merged review also moves `PythagoreanTheorem` from `GeometricRelations` into `TriangleRelations`.

| Existing descriptor | Proposed replacement definition | Example |
| --- | --- | --- |
| `VerticalAngles` | Opposite angles formed by two intersecting lines and the equality of their measures. | An angle of 65° has a vertical opposite angle of 65°. |
| `TangentRadiusRelation` | The equivalence, for a line in a circle's plane through a point of the circle, between tangency and perpendicularity to the radius at that point. | A line in the circle's plane through T perpendicular to radius OT is tangent at T. |
| `Dilation` | Uniform scaling about a fixed center O, mapping each point P to O + k(P − O) for a nonzero real factor k. | Center (1,1) and factor 2 send (3,2) to (5,3). |
| `Rotation` | A Euclidean transformation turning points through a specified oriented angle about a fixed center in the plane or a fixed axis in three-dimensional space. | A positive 90° rotation about the oriented z-axis sends (1,0,2) to (0,1,2). |

`VerticalAngles` currently identifies the pair but omits equality. `TangentRadiusRelation`
currently gives only the forward implication; the converse justifies the external-tangent
construction. The plane restriction excludes lines perpendicular to the radius but leaving
the circle's plane. Neither revision turns an occurrence of an angle or radius into evidence that
the learner is using the theorem.

The recommended dilation convention includes **nonzero signed factors**. At k = 1 the map is
the identity; k = 0 is excluded because it collapses figures. Lengths scale by |k|. For k < 0,
displacement directions reverse; k = −1 is central inversion, a half-turn in the plane but not
an ordinary axial rotation in three-dimensional space. This convention is broader than the
usual positive-factor school restriction and must be explicit in examples and consuming tasks.
It is supported by the [University of Illinois geometry notes](https://new.math.uiuc.edu/public403/dilatations/index.html).

A positive-only definition would also satisfy the selected CCSS requirements. The signed version
is recommended to avoid an unnecessary restriction in the shared ontology; individual school
competencies can specify positive factors. For
[G-SRT.A.1a/b](https://www.thecorestandards.org/Math/Content/HSG/SRT/), verify the center-line
invariance, preservation of direction of noncentral lines as parallel lines, and length scaling.
At k = 1 the image line coincides with the original; do not require two distinct parallel lines.

Rotation includes the identity angle. A **single** rotation sends a plane region to another
plane region; the union of its positions over a full turn can generate a solid. Therefore
`SolidOfRevolution` does not specialize `Rotation` or `GeometricTransformations`. Rotating a
boundary curve generally generates a surface, whereas rotating the filled region generates the
solid. This directly addresses [G-GMD.B.4](https://www.thecorestandards.org/Math/Content/HSG/GMD/);
the distinction also underlies [OpenStax's volume treatment](https://openstax.org/books/calculus-volume-2/pages/2-2-determining-volumes-by-slicing).

Do not reparent all existing `Cylinder` or `Cone` instances beneath `SolidOfRevolution`: their
current concepts permit broader cases. A general `RotationalSweep` including partial turns and
generated surfaces is a possible later extension. Existing `Reflection` remains planar in this
batch; spatial plane reflection is not needed to resolve the identified rotation gap.

## Requirement-level verification plan

The following are the **20 existing geometry follow-up rows**, plus the separately marked
G-SRT.B.4 precision improvement. These map to the draft implementation, not completed coverage claims.
An implementation must include a representative task and a nearby failure case for each row.

| CCSS leaf | Proposed resolution and evidence to verify |
| --- | --- |
| 6.G.A.4 | `GeometricNet` + the solid + `SurfaceAreaCalculation` and spatial Abilities; identify which faces correspond and sum their areas without counting overlaps as additional surface. |
| 7.G.A.2 | `GeometricConstructionTechnique` + triangle criteria/inequality and the specified data; distinguish impossible, unique-up-to-congruence and ambiguous cases. |
| 8.G.A.5 | Angle sum, exterior-angle and transversal results plus AA similarity; support the actual argument rather than only the final numerical angle. |
| G-CO.B.8 | ASA/SAS/SSS congruence criteria + existing rigid motions and `CongruenceRelation`; explain why the criteria follow from the motion-based definition. |
| G-CO.C.9 | Repaired `VerticalAngles`, transversal theorem and perpendicular-bisector characterization; prove the stated implications in the plane. |
| G-CO.C.10 | Triangle angle sum, isosceles theorem, midsegment theorem and centroid concurrency; avoid treating a drawing as proof. |
| G-CO.C.11 | Parallelogram side/angle results, diagonal bisection criterion and rectangle diagonal criterion; retain the parallelogram hypothesis for equal diagonals. |
| G-CO.D.12 | The evidenced construction technique + relevant results for copying, bisection, perpendicular and parallel procedures; distinguish mathematical method knowledge from any instrument Scopes. Include both a classical construction and a folding-based alternative. |
| G-CO.D.13 | Construct the inscribed equilateral triangle, square and regular hexagon using existing shape Areas and explicit regularity conditions. |
| G-SRT.A.1a | Repaired `Dilation`; verify center-line invariance and the parallel/coincident image distinction, including k = 1. |
| G-SRT.A.1b | Repaired `Dilation`; verify length scaling by a positive factor for the standard's school setting and |k| for signed extensions. |
| G-SRT.A.3 | `AATriangleSimilarity` + dilation-based similarity; justify the sufficiency of angle equality. |
| G-SRT.B.5 | Congruence/similarity criteria + the actual objects and relations; prove relationships and solve for measurements. |
| G-C.A.2 | Inscribed, diameter and circumscribed angle results plus existing/repaired tangent-radius relationships; include the intercepted-arc distinction. |
| G-C.A.3 | Incenter/circumcenter results + `GeometricConstructionTechnique`; cyclic-quadrilateral angle theorem for the separate proof requirement. |
| G-C.A.4 (+) | External tangent construction using the diameter circle and tangent-radius converse; distinguish exterior from interior starting points. |
| G-C.B.5 | `CircularSector`, `Arc`, `ArcSectorProportionality`, `RadianScale` and calculation Areas; derive the relationships and use the correct angle unit. |
| G-GMD.A.1 | `CavalieriPrinciple` + existing dissection, circle/solid and calculation knowledge; distinguish an informal justification from substitution into a volume formula. |
| G-GMD.A.2 (+) | `CavalieriPrinciple` + cylinder, pyramid, cone and sphere calculations; verify the hemisphere comparison without requiring integration. |
| G-GMD.B.4 | `SolidOfRevolution` + `Rotation` and existing shapes; distinguish a generating region from its boundary. Existing plane/solid intersection composition retains the cross-section part. |
| G-SRT.B.4 — additional precision improvement | `TriangleProportionalityTheorem`, including its converse, plus existing `PythagoreanTheorem` and similarity for the alternative proof. |

Primary curriculum sources: [grade 6](https://www.thecorestandards.org/Math/Content/6/G/),
[grade 7](https://www.thecorestandards.org/Math/Content/7/G/),
[grade 8](https://www.thecorestandards.org/Math/Content/8/G/),
[congruence](https://www.thecorestandards.org/Math/Content/HSG/CO/),
[similarity](https://www.thecorestandards.org/Math/Content/HSG/SRT/),
[circles](https://www.thecorestandards.org/Math/Content/HSG/C/) and
[measurement/dimension](https://www.thecorestandards.org/Math/Content/HSG/GMD/).
The mappings paraphrase requirements; the linked standards retain their full conditions.

## Implementation and review boundaries

1. Review the proposed meanings, especially the technique/instrument distinction, the signed dilation
   convention and the broad net Scope against the draft implementation.
2. Write concise definitions and examples in the authored Area/Scope files. Follow editor ordering:
   types, definition, example, then alphabetically ordered relation predicates and target IRIs;
   `partOf` precedes `specializes` wherever both appear. Do not add progression edges merely
   because one proof happens to use another theorem.
3. Validate every structural path and descriptor's eligibility. Shapes remain eligible; the new
   organizers do not. Criterion parents remain usable at an appropriate level of specificity.
4. Review affected annotations for the four definition changes and the two circular-shape
   specialization changes. Existing IDs remain stable; the new ancestry is intentional.
5. Run source validation, the required Docker build and generated-client checks for the eventual
   ontology implementation. Rerun the table's tasks and counterexamples before changing audit
   statuses. Recount any remaining rows; do not infer full curriculum coverage from a successful build.

## Implementation and adoption — 2026-10-22

The merged batch implements the 37 Areas and five Scopes shown above. The Scope hierarchy is
`ConstructionScope` → `GeometricConstruction` → `Compass` / `Straightedge`, with constituent
relations throughout. Mathematical methods belong to the distinct
`GeometricConstructionTechnique` Area and its specializing children under `Geometry`.
The optional coordinate and transformation construction methods remain proposals only.

All new descriptors have definitions and examples. Four existing definitions and their examples
are refined: `VerticalAngles`, `TangentRadiusRelation`, `Dilation` and `Rotation`.
The `HalfCircle` and `QuarterCircle` relations now specialize `CircularSector`; their previous
direct constituent edges to `CircularShapes` are replaced. No existing identifier is renamed,
deleted or moved between dimensions.

Five new family organizers are ineligible for direct labels; the other 37 new descriptors are
eligible. No existing descriptor changes labeling eligibility. Review the four refined meanings
and the new circular-shape specialization ancestry when adopting this branch in annotations or
models. Dataset packages, target specs and existing annotations are not changed by this draft.

The original proposal passed documentation and candidate-graph checks. Independent semantic
review confirmed the 20-row mapping and proportionality refinement, then found and repaired the
planar restriction needed for the tangent-radius converse. This review does not constitute an
end-to-end execution of every curriculum competency. The implementation is validated under
[ONT-W3](../change-review.md#ont-w3--verify-and-report-the-actual-change).

Validation of the submitted draft passed on 2026-10-22:

- Authored source: **1,416 descriptors and 7,521 assertions**, with no ontology assessment findings.
  All 42 additions match the approved definitions and structural plan; only the six intended
  existing descriptors change. Their labeling eligibility is preserved.
- Area and Scope Turtle both round-trip byte for byte through the editor's actual parser and
  serializer. Definitions, examples and relation ordering match the editor convention.
- Documentation checks pass across all 47 Markdown files. The historical audit's 697 distinct
  mapped descriptors still exist and remain eligible; this checks compatibility, not new coverage.
- The full `docker build . --output dist --progress plain` passes, including TypeScript client,
  ontology, documentation and package checks, Python lint/typing and tests, and wheel/sdist
  consumer verification. The circular-shape regression tests in both clients now distinguish
  specialization inheritance from structural navigation through the sector family.

The merge adds the review refinement `PythagoreanTheorem partOf TriangleRelations`, preserving
its ancestry under `GeometricRelations`. This is the seventh existing descriptor changed relative
to the pre-batch baseline. Post-merge source validation passed, and the
[merged release build](https://github.com/christian-bick/edugraph-ontology/actions/runs/39688911391)
succeeded. No dataset package or target specifications were updated by this batch.

The next [cross-product, arithmetic-sum and sequence-limit proposal](vector-sums-sequence-limits-draft.md)
continues the audit roadmap; its descriptors are not part of this merged implementation.
