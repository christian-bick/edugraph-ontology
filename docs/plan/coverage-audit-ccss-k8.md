# CCSS K–8 coverage inventory

[Audit conclusions and method](coverage-audit-2026-10-21.md). Reviewed 2026-10-21 against ontology main `0af4aba97731e49cbff3ac51ca9ef519d174a945`.

Every terminal content standard in the selected K–8 inventory has its own row: **287 leaves**. Numbered parents with lettered children are not counted again. A child retains its parent and domain conditions. The official domain linked above each table controls the complete requirement; short row titles are navigation aids, not replacements for the standard.

Mappings identify mathematical knowledge, cognitive performances and contexts at the current ontology granularity. B: marks an Ability, S: a Scope; other IDs are Areas. Lists can include alternatives or facets for separate competencies and must not be copied blindly as one annotation. Select only observable evidence under [ONT-E1](../content-evidence.md#ont-e1--ground-annotations-in-accessible-evidence) and eligible descriptors under [ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).

Direct means that a specific Area supplies the principal knowledge. Composition means that existing concepts jointly express it; it does not assert automatic logical entailment. Knowledge/procedure gaps concern independently learned results or methods. Definition/representation gaps concern contexts or an existing descriptor's boundary. Exact numerical ranges, allowed denominators, required fluency, instruments and evidence requirements remain in the competency target even when omitted from this compact mapping. No additional Area is proposed merely for a numerical bound.

## Results

| Grade | Leaves | Direct | Composition | Knowledge/procedure gap | Definition/representation gap |
| --- | ---: | ---: | ---: | ---: | ---: |
| K | 24 | 0 | 24 | 0 | 0 |
| 1 | 23 | 0 | 23 | 0 | 0 |
| 2 | 27 | 0 | 27 | 0 | 0 |
| 3 | 33 | 0 | 33 | 0 | 0 |
| 4 | 34 | 0 | 34 | 0 | 0 |
| 5 | 34 | 1 | 33 | 0 | 0 |
| 6 | 42 | 3 | 38 | 0 | 1 |
| 7 | 37 | 0 | 36 | 1 | 0 |
| 8 | 33 | 0 | 32 | 1 | 0 |

## Boundaries that require follow-up

- **6.G.A.4:** nets need a representation decision. Foldable describes a physical object's flexibility, not a flat face arrangement and its correspondence with a solid. Existing surface-area calculation remains useful.
- **7.G.A.2:** feasibility and uniqueness of triangles from prescribed side/angle data need explicit criteria; drawing a triangle is not the same knowledge.
- **8.G.A.5:** angle-sum/exterior-angle/transversal results and AA similarity are independently reusable implications. Triangle and AngleCalculation do not specify them. These overlap the high-school Euclidean geometry follow-up.
- Routine area/volume procedures can compose the relevant shape, calculation, decomposition and Ability. This does not cover every theorem used to justify those procedures: Cavalieri's principle is separately missing in the high-school audit.
- Dilation's current definition excludes an unchanged size. The high-school rows explicitly expose the scale-one boundary; it should also be repaired for the lower-grade transformation family. VerticalAngles identifies the angle pair but leaves their equality implicit; include that relation in definition polish.

## Source-text precautions

All 43 official K–8 domain inventories reconcile with the 287 local terminal IDs, and all nine official grade domain lists were checked. The local `public/coverage/ccss-tree.json` has nonempty descriptions for every child. An initial apparent omission was caused by filtering a multiline display and is not a source-data defect. Numbered-parent summaries sometimes embed duplicated/reordered child text (for example 5.NF.B.5 and 6.SP.B.5); use official child IDs and wording while retaining genuine parent/domain conditions. The mappings were checked against those official requirements. This audit does not edit the content repository source.

The mathematical-practice audit applies across grades and is included [with the high-school inventory](coverage-audit-ccss-highschool.md#modeling-and-practices-counted-separately). It is not part of the 287 content-leaf count.

## Kindergarten

### K.CC

[Official domain](https://www.thecorestandards.org/Math/Content/K/CC/). 9 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| K.CC.A.1 | Count by ones and tens to 100 | `NumerationWithIntegers`, S:`StepsOf1`, S:`StepsOf10` | **Composition** — Counting concept with step-size contexts. |
| K.CC.A.2 | Continue counting from a given number | `NumerationWithIntegers`, `Increment`, B:`ProcedureExecution` | **Composition** — Successor steps applied from a supplied starting value. |
| K.CC.A.3 | Write 0–20 numerals and represent a collection count | `IntegerNotation`, S:`QuantityMeasurement`, `ZeroConcept` | **Composition** — Notation, counting and the empty collection. |
| K.CC.B.4a | Match one number word to each object | S:`QuantityMeasurement`, `NumerationWithIntegers`, B:`ProcedureUnderstanding` | **Composition** — Count procedure coordinates objects and successive values. |
| K.CC.B.4b | Last count gives cardinality regardless of arrangement | S:`QuantityMeasurement`, `NumericIdentity`, B:`ProcedureUnderstanding` | **Composition** — Count and value conservation; object movement does not change membership. |
| K.CC.B.4c | Successive counts differ by one | `NumerationWithIntegers`, `Increment` | **Composition** — Successor relation and integer sequence. |
| K.CC.B.5 | Count arrangements and produce a requested collection | S:`QuantityMeasurement`, `Numeration`, S:`LinearArrangement`, S:`CircularArrangement`, S:`ScatteredArrangement` | **Composition** — Arrangement contexts retain the same counting knowledge; size bounds stay in the target. |
| K.CC.C.6 | Compare groups by matching or counting | `SetComparison`, S:`QuantityMeasurement` | **Composition** — Qualitative comparison plus cardinality evidence. |
| K.CC.C.7 | Compare written numbers 1–10 | `NumericOrder`, `IntegerNotation` | **Composition** — Order interpreted through integer notation. |

### K.OA

[Official domain](https://www.thecorestandards.org/Math/Content/K/OA/). 5 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| K.OA.A.1 | Represent joining and separating | `Addition`, `Subtraction`, `UnionOfCollections`, `PartitionOfCollections`, B:`Formalization` | **Composition** — Operations composed with collection models. |
| K.OA.A.2 | Solve addition/subtraction stories within ten | `Addition`, `Subtraction`, B:`Formalization`, B:`ProcedureExecution` | **Composition** — Contextual modeling and operation execution. |
| K.OA.A.3 | Decompose a number into pairs | `PartitionOfCollections`, `Addition`, `Equation` | **Composition** — Part–whole structure expressed as sums/equations. |
| K.OA.A.4 | Find a complement to ten | `AdditionMakeTen`, `UnknownVariable`, `Equation` | **Composition** — Named strategy and missing-value representation. |
| K.OA.A.5 | Add/subtract fluently within five | `Addition`, `Subtraction`, B:`ProcedureMemorization`, B:`ProcedureExecution` | **Composition** — Fluency is a performance requirement, not a separate mathematical Area. |

### K.NBT

[Official domain](https://www.thecorestandards.org/Math/Content/K/NBT/). 1 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| K.NBT.A.1 | Compose/decompose teen numbers as ten and ones | `PlaceValue`, `IntegerRegrouping`, `Addition`, S:`BaseTenBlocks` | **Composition** — Grouping and positional value with models. |

### K.MD

[Official domain](https://www.thecorestandards.org/Math/Content/K/MD/). 3 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| K.MD.A.1 | Describe measurable object attributes | `MeasuringObjects`, `MeasuringLength`, `MeasuringWeight` | **Composition** — Attribute selection and measurement meaning. |
| K.MD.A.2 | Compare two objects by a common attribute | `MeasuringObjects`, `MeasuringLength`, `MeasuringWeight` | **Composition** — Direct qualitative measurement; target names the chosen attribute. |
| K.MD.B.3 | Classify, count and sort categories | `ObjectSorting`, S:`QuantityMeasurement`, `NumericOrder` | **Composition** — Category grouping followed by count and order. |

### K.G

[Official domain](https://www.thecorestandards.org/Math/Content/K/G/). 6 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| K.G.A.1 | Name shapes and describe positions | `ShapeNaming`, `SpatialPosition`, `Circle`, `Square`, `Triangle`, `Rectangle`, `Hexagon`, `Cube`, `Cone`, `Cylinder`, `Sphere` | **Composition** — Names and spatial language compose with the specified shapes. |
| K.G.A.2 | Identify shapes across sizes/orientations | `ShapeRecognition`, `ShapeRotationConservation`, `ShapeResizingConservation` | **Composition** — Identity under the explicitly represented variations. |
| K.G.A.3 | Distinguish plane and solid shapes | `ShapeClassification`, S:`TwoDimensional`, S:`ThreeDimensional` | **Composition** — Classification with dimension contexts. |
| K.G.B.4 | Compare shape attributes and parts | `ShapeClassification`, `ShapeDecomposition`, S:`FaceCount`, S:`EdgeCount`, S:`VertexCount` | **Composition** — Observable structural attributes and comparison. |
| K.G.B.5 | Build and draw shapes | `LinearShapeDrawing`, `CircularShapeDrawing`, S:`PhysicalGeometry` | **Composition** — Drawing/modeling with physical geometry context. |
| K.G.B.6 | Compose larger shapes | `ShapeSynthesis`, `Triangle`, `Rectangle`, `Square` | **Composition** — Composition of supplied shapes. |

## Grade 1

### 1.OA

[Official domain](https://www.thecorestandards.org/Math/Content/1/OA/). 8 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 1.OA.A.1 | Addition/subtraction stories with varied unknown positions | `Addition`, `Subtraction`, `Equation`, `UnknownVariable`, B:`Formalization` | **Composition** — Operation, formal object and unknown role. |
| 1.OA.A.2 | Stories requiring three addends | `Addition`, `Equation`, S:`ThreeOperands`, B:`Formalization` | **Composition** — Operation with operand-count context. |
| 1.OA.B.3 | Use commutative and associative addition | `Addition`, `CommutativeLaw`, `AssociativeLaw` | **Composition** — Laws compose with their operation. |
| 1.OA.B.4 | Subtraction as an unknown-addend problem | `SubtractionThinkAddition`, `Equation`, `UnknownVariable` | **Composition** — Named inverse-operation strategy. |
| 1.OA.C.5 | Connect counting with addition/subtraction | `AdditionCountingOn`, `SubtractionCountingBack`, `NumerationWithIntegers` | **Composition** — Named count-based strategies. |
| 1.OA.C.6 | Use strategies and develop fluency within twenty | `Addition`, `Subtraction`, `AdditionMakeTen`, `AdditionNearDoubles`, `SubtractionThinkAddition`, B:`ProcedureExecution` | **Composition** — Strategies are available separately; the target retains fluency and range. |
| 1.OA.D.7 | Meaning of equals and equation truth | `NumericEquality`, `Equation`, B:`CorrectnessEvaluation` | **Composition** — Equality semantics and truth checking. |
| 1.OA.D.8 | Find an unknown in addition/subtraction equations | `EquationSolving`, `Addition`, `Subtraction`, `UnknownVariable` | **Composition** — Solving objective composed with operations. |

### 1.NBT

[Official domain](https://www.thecorestandards.org/Math/Content/1/NBT/). 8 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 1.NBT.A.1 | Count/read/write numbers to 120 | `NumerationWithIntegers`, `IntegerNotation`, S:`QuantityMeasurement` | **Composition** — Number sequence, notation and collection size. |
| 1.NBT.B.2a | Ten ones form one ten | `PlaceValue`, `IntegerRegrouping` | **Composition** — Unit bundling and place values. |
| 1.NBT.B.2b | Teen numbers as ten and ones | `PlaceValue`, `IntegerRegrouping` | **Composition** — Same grouping relation in teen-number context. |
| 1.NBT.B.2c | Multiples of ten as tens and zero ones | `PlaceValue`, `ZeroConcept`, S:`MultiplesOf10` | **Composition** — Positional zero and grouped tens. |
| 1.NBT.B.3 | Compare two-digit numbers using place value | `NumericOrder`, `PlaceValue`, `IntegerNotation` | **Composition** — Positional comparison. |
| 1.NBT.C.4 | Add within 100 with models and regrouping | `AdditionPlaceValuePartitioning`, `IntegerRegrouping`, S:`BaseTenBlocks`, B:`ProcedureUnderstanding` | **Composition** — Place-value strategy and justification. |
| 1.NBT.C.5 | Mentally find ten more/less | `Addition`, `Subtraction`, `PlaceValue`, S:`StepsOf10` | **Composition** — Place-value change with a fixed step. |
| 1.NBT.C.6 | Subtract multiples of ten with explanation | `SubtractionPlaceValuePartitioning`, S:`MultiplesOf10`, B:`ProcedureUnderstanding` | **Composition** — Named subtraction strategy in tens. |

### 1.MD

[Official domain](https://www.thecorestandards.org/Math/Content/1/MD/). 4 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 1.MD.A.1 | Order lengths and compare indirectly | `MeasuringLength`, `NumericOrder`, B:`LogicalInference` | **Composition** — Length comparisons composed transitively. |
| 1.MD.A.2 | Measure by equal unit iteration | `MeasuringLength`, B:`ProcedureUnderstanding`, `LengthCalculation` | **Composition** — Measurement procedure must preserve equal units without overlaps/gaps in the target. |
| 1.MD.B.3 | Read/write hour and half-hour times | `MeasuringTime`, S:`AnalogClock`, S:`DigitalClock`, S:`HourIntervals`, S:`HalfHourIntervals` | **Composition** — Time knowledge with clock representations and interval precision. |
| 1.MD.C.4 | Organize categories and compare counts | `ObjectSorting`, S:`QuantityMeasurement`, S:`DataTable`, `NumericOrder` | **Composition** — Category organization and count comparison. |

### 1.G

[Official domain](https://www.thecorestandards.org/Math/Content/1/G/). 3 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 1.G.A.1 | Distinguish defining from incidental shape attributes | `ShapeClassification`, `ShapeRecognition`, S:`ShapeOrientationVariation`, S:`ShapeSizeVariation` | **Composition** — Shape identity under irrelevant variation. |
| 1.G.A.2 | Compose and decompose plane/solid shapes | `ShapeSynthesis`, `ShapeDecomposition`, S:`TwoDimensional`, S:`ThreeDimensional` | **Composition** — Composition knowledge across dimensions. |
| 1.G.A.3 | Equal halves/quarters and share-size relationships | `FractionDenominatorInterpretation`, `FractionNumeratorInterpretation`, S:`EqualShares`, S:`HalfFractions`, S:`QuarterFractions` | **Composition** — Whole/part meanings and equal-share contexts. |

## Grade 2

### 2.OA

[Official domain](https://www.thecorestandards.org/Math/Content/2/OA/). 4 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 2.OA.A.1 | One/two-step addition/subtraction stories | `Addition`, `Subtraction`, `Equation`, B:`Formalization`, B:`ProcedureComposition` | **Composition** — Sequential operations with an equation representation. |
| 2.OA.B.2 | Fluent sums/differences and memorized facts | `Addition`, `Subtraction`, B:`ProcedureMemorization`, B:`ProcedureExecution` | **Composition** — Knowledge and performance distinguished. |
| 2.OA.C.3 | Evenness by pairing and equal addends | `IntegerParity`, `Addition`, S:`EqualShares` | **Composition** — Parity interpreted through pairing/sums. |
| 2.OA.C.4 | Count arrays as equal-addend sums | `Multiplication`, `Addition`, S:`NumberArray`, S:`QuantityMeasurement` | **Composition** — Array representation connects repeated addition and group count. |

### 2.NBT

[Official domain](https://www.thecorestandards.org/Math/Content/2/NBT/). 10 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 2.NBT.A.1a | Ten tens form one hundred | `PlaceValue`, `IntegerRegrouping` | **Composition** — Base-ten bundling relation. |
| 2.NBT.A.1b | Whole hundreds as hundreds and zero lower places | `PlaceValue`, `ZeroConcept`, S:`MultiplesOf100` | **Composition** — Positional representation of hundreds. |
| 2.NBT.A.2 | Count to 1000; skip by 5/10/100 | `NumerationWithIntegers`, S:`StepsOf5`, S:`StepsOf10`, S:`StepsOf100` | **Composition** — Counting with explicit step contexts. |
| 2.NBT.A.3 | Read/write expanded and named integers | `IntegerNotation`, `NumberNameNotation`, `PlaceValue`, `Addition` | **Composition** — Expanded notation composes place values and a sum. |
| 2.NBT.A.4 | Compare three-digit numbers | `NumericOrder`, `PlaceValue`, `IntegerNotation` | **Composition** — Positional comparison with target bounds. |
| 2.NBT.B.5 | Fluent add/subtract within 100 | `AdditionPlaceValuePartitioning`, `SubtractionPlaceValuePartitioning`, B:`ProcedureExecution` | **Composition** — Place-value strategies support execution. |
| 2.NBT.B.6 | Add four two-digit numbers | `Addition`, S:`FourOperands`, S:`TwoDigitLargestOperand` | **Composition** — Operation plus arity and size contexts. |
| 2.NBT.B.7 | Add/subtract within 1000 with regrouping | `AdditionPlaceValuePartitioning`, `SubtractionPlaceValuePartitioning`, `IntegerRegrouping`, S:`BaseTenBlocks` | **Composition** — Strategy and model explain regrouping. |
| 2.NBT.B.8 | Mental changes of 10 or 100 | `Addition`, `Subtraction`, `PlaceValue`, S:`StepsOf10`, S:`StepsOf100` | **Composition** — Fixed-step place-value changes. |
| 2.NBT.B.9 | Explain why arithmetic strategies work | `Addition`, `Subtraction`, `PlaceValue`, `CommutativeLaw`, `AssociativeLaw`, B:`ProcedureUnderstanding` | **Composition** — Laws justify the selected strategies. |

### 2.MD

[Official domain](https://www.thecorestandards.org/Math/Content/2/MD/). 10 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 2.MD.A.1 | Measure lengths with suitable tools | `MeasuringLength`, S:`PhysicalRuler`, S:`Tapemeter`, B:`ProcedureApplicability` | **Composition** — Measurement knowledge plus tool choice. |
| 2.MD.A.2 | Compare results in different unit sizes | `MeasuringLength`, `UnitScaleRelation`, `UnitConversion` | **Composition** — Inverse relation between unit size and numerical measure. |
| 2.MD.A.3 | Estimate lengths in metric/imperial units | `MeasuringLength`, `NumericApproximation`, S:`CentimeterScale`, S:`MeterScale`, S:`InchScale`, S:`FootScale` | **Composition** — Approximation with named unit contexts. |
| 2.MD.A.4 | Measure a length difference | `MeasuringLength`, `Subtraction`, `LengthCalculation` | **Composition** — Measurement followed by subtraction. |
| 2.MD.B.5 | Addition/subtraction length problems | `MeasuringLength`, `Addition`, `Subtraction`, `Equation` | **Composition** — Operations on same-unit measurements. |
| 2.MD.B.6 | Use a number line for integer sums/differences | `Addition`, `Subtraction`, `NumerationWithIntegers`, S:`Numberline` | **Composition** — Length/displacement model of arithmetic. |
| 2.MD.C.7 | Read five-minute times and a.m./p.m. | `MeasuringTime`, S:`AnalogClock`, S:`DigitalClock`, S:`MinuteIntervals` | **Composition** — Clock/time convention; five-minute precision remains in the target. |
| 2.MD.C.8 | Calculate with dollars and coins | `Addition`, `Subtraction`, `UnitConversion`, S:`Dollar`, S:`Coins`, S:`Banknotes` | **Composition** — Currency denominations and arithmetic; symbols are target notation details. |
| 2.MD.D.9 | Collect lengths and make line plots | `MeasuringLength`, S:`QuantityMeasurement`, S:`LinePlot` | **Composition** — Measurement data with a frequency representation. |
| 2.MD.D.10 | Construct/read categorical graphs | S:`QuantityMeasurement`, `Addition`, `Subtraction`, S:`PictureGraph`, S:`BarGraph` | **Composition** — Categorical counts and graphical interpretation. |

### 2.G

[Official domain](https://www.thecorestandards.org/Math/Content/2/G/). 3 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 2.G.A.1 | Recognize/draw specified shapes | `ShapeClassification`, `LinearShapeDrawing`, `Triangle`, `Quadrilateral`, `Pentagon`, `Hexagon`, `Cube` | **Composition** — Attribute-based construction of named shapes. |
| 2.G.A.2 | Partition rectangles into square arrays | `ShapeDecomposition`, `Rectangle`, `Square`, S:`NumberArray`, S:`QuantityMeasurement` | **Composition** — Partition structure and count. |
| 2.G.A.3 | Equal halves/thirds/quarters with differing shapes | `FractionDenominatorInterpretation`, S:`EqualShares`, `ShapeDecomposition`, `Circle`, `Rectangle` | **Composition** — Equal quantity does not require congruent part shapes. |

## Grade 3

### 3.OA

[Official domain](https://www.thecorestandards.org/Math/Content/3/OA/). 9 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 3.OA.A.1 | Products as equal groups | `Multiplication`, S:`QuantityMeasurement`, S:`EqualShares` | **Composition** — Operation interpreted through group count. |
| 3.OA.A.2 | Quotients as sharing or grouping | `PartitiveDivision`, `QuotativeDivision` | **Composition** — Both meanings are distinct existing concepts. |
| 3.OA.A.3 | Multiplication/division stories | `Multiplication`, `PartitiveDivision`, `QuotativeDivision`, `Equation`, B:`Formalization` | **Composition** — Operations plus context-to-equation translation. |
| 3.OA.A.4 | Unknown numbers in product/quotient equations | `EquationSolving`, `Multiplication`, `Division`, `UnknownVariable` | **Composition** — Solving with multiplicative operations. |
| 3.OA.B.5 | Apply multiplicative operation properties | `Multiplication`, `CommutativeLaw`, `AssociativeLaw`, `DistributiveLaw` | **Composition** — Laws composed with the operation. |
| 3.OA.B.6 | Division as an unknown factor | `DivisionKnownFactDerivation`, `Multiplication`, `Equation`, `UnknownVariable` | **Composition** — Inverse multiplicative reasoning. |
| 3.OA.C.7 | Fluent multiplication/division facts | `Multiplication`, `Division`, B:`ProcedureMemorization`, B:`ProcedureExecution` | **Composition** — Facts, relationships and performance. |
| 3.OA.D.8 | Two-step arithmetic models and reasonable answers | `Addition`, `Subtraction`, `Multiplication`, `Division`, `Equation`, `OrderOfOperations`, `NumericApproximation`, B:`PlausibilityEvaluation` | **Composition** — Operation composition and assessment; number bounds remain target constraints. |
| 3.OA.D.9 | Explain arithmetic patterns | `PatternRecognition`, `GenerativeRuleRecognition`, `Addition`, `Multiplication`, `CommutativeLaw`, `DistributiveLaw` | **Composition** — Pattern explanation grounded in operation laws. |

### 3.NBT

[Official domain](https://www.thecorestandards.org/Math/Content/3/NBT/). 3 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 3.NBT.A.1 | Round integers to ten/hundred | `IntegerRounding`, `PlaceValue` | **Composition** — Rounding supported by positional value. |
| 3.NBT.A.2 | Add/subtract within 1000 | `Addition`, `Subtraction`, `AdditionPlaceValuePartitioning`, `SubtractionPlaceValuePartitioning` | **Composition** — Existing strategy choices; no new concept for the numerical bound. |
| 3.NBT.A.3 | Multiply one digit by multiples of ten | `Multiplication`, `PlaceValue`, S:`MultiplesOf10` | **Composition** — Base-ten scaling and multiplication. |

### 3.MD

[Official domain](https://www.thecorestandards.org/Math/Content/3/MD/). 12 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 3.MD.A.1 | Read time and calculate minute intervals | `MeasuringTime`, `Addition`, `Subtraction`, S:`MinuteIntervals`, S:`Numberline` | **Composition** — Time representation and elapsed-duration arithmetic. |
| 3.MD.A.2 | Liquid volume/mass measurement and arithmetic | `MeasuringVolumes`, `MeasuringWeight`, `Addition`, `Subtraction`, `Multiplication`, `Division`, S:`LiterScale`, S:`GramScale`, S:`KilogramScale` | **Composition** — Operations with the stated measurement contexts. |
| 3.MD.B.3 | Scaled picture/bar graphs and comparisons | S:`QuantityMeasurement`, `Multiplication`, `Division`, S:`PictureGraph`, S:`BarGraph` | **Composition** — Graph symbol/bar scaling interpreted arithmetically. |
| 3.MD.B.4 | Fractional ruler measurements and line plots | `MeasuringLength`, S:`FractionNumbers`, S:`PhysicalRuler`, S:`LinePlot` | **Composition** — Fractional measurement with data representation. |
| 3.MD.C.5a | Unit square as area unit | `AreaCalculation`, `Square`, `UnitDimensionality`, S:`TileScale`, B:`ProcedureUnderstanding` | **Composition** — Area measurement with two-dimensional units; target states unit-square convention. |
| 3.MD.C.5b | Area as count of nonoverlapping unit squares | `AreaCalculation`, S:`QuantityMeasurement`, S:`TileScale`, B:`ProcedureUnderstanding` | **Composition** — Unit-count interpretation of area. |
| 3.MD.C.6 | Measure area by counting squares | `AreaCalculation`, S:`QuantityMeasurement`, S:`TileScale` | **Composition** — Count and area measurement. |
| 3.MD.C.7a | Rectangle area from tiling and side product | `AreaCalculation`, `Rectangle`, `Multiplication`, S:`NumberArray`, B:`ProcedureDerivation` | **Composition** — Tiling gives the rectangle multiplication procedure. |
| 3.MD.C.7b | Apply rectangular area formulas | `AreaCalculation`, `Rectangle`, `Multiplication` | **Composition** — Calculation composed with the relevant shape. |
| 3.MD.C.7c | Distributive law through rectangular areas | `AreaCalculation`, `Rectangle`, `DistributiveLaw`, `ShapeDecomposition` | **Composition** — Area model of an existing law. |
| 3.MD.C.7d | Add areas of disjoint rectangles | `AreaCalculation`, `ShapeDecomposition`, `Rectangle`, `Addition` | **Composition** — Calculation on a disjoint decomposition. |
| 3.MD.D.8 | Perimeters and area/perimeter contrasts | `PerimeterCalculation`, `AreaCalculation`, `Polygon`, `Rectangle`, `EquationSolving` | **Composition** — Different measures of the same shape, including missing lengths. |

### 3.G

[Official domain](https://www.thecorestandards.org/Math/Content/3/G/). 2 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 3.G.A.1 | Quadrilateral categories and hierarchy | `ShapeClassification`, `ShapeSubsumption`, `Quadrilateral`, `Rhombus`, `Rectangle`, `Square` | **Composition** — Category inclusion, not a new shape family. |
| 3.G.A.2 | Equal-area partitions as unit fractions | `AreaCalculation`, `FractionDenominatorInterpretation`, S:`EqualShares`, `ShapeDecomposition` | **Composition** — Area-based whole/part interpretation. |

### 3.NF

[Official domain](https://www.thecorestandards.org/Math/Content/3/NF/). 7 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 3.NF.A.1 | Fractions built from equal unit parts | `FractionNumeratorInterpretation`, `FractionDenominatorInterpretation`, S:`EqualShares` | **Composition** — Two existing numerator/denominator concepts jointly establish the fraction. |
| 3.NF.A.2a | Unit fraction on a partitioned unit interval | `FractionDenominatorInterpretation`, `NumerationWithFractions`, S:`Numberline` | **Composition** — Unit-fraction meaning composed with number-line placement. |
| 3.NF.A.2b | Locate fractions by repeated unit lengths | `FractionNumeratorInterpretation`, `NumerationWithFractions`, S:`Numberline` | **Composition** — Numerator counts repeated unit lengths from zero. |
| 3.NF.A.3a | Equivalent fractions occupy the same point | `FractionEquivalence`, `NumerationWithFractions`, S:`Numberline` | **Composition** — Value equivalence linked to location. |
| 3.NF.A.3b | Generate and justify fraction equivalents | `FractionEquivalence`, `Multiplication`, `Division`, B:`ProcedureUnderstanding` | **Composition** — Value-preserving change of parts. |
| 3.NF.A.3c | Integers represented as fractions | `FractionEquivalence`, S:`IntegerNumbers`, S:`FractionNumbers`, S:`Numberline` | **Composition** — Same value in two representations. |
| 3.NF.A.3d | Compare like-denominator or like-numerator fractions | `FractionCommonDenominatorComparison`, `FractionCommonNumeratorComparison`, `NumericInequality` | **Composition** — Methods explicitly preserve the shared reference whole. |

## Grade 4

### 4.OA

[Official domain](https://www.thecorestandards.org/Math/Content/4/OA/). 5 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 4.OA.A.1 | Multiplicative comparison equations | `Multiplication`, `ProportionalScaling`, `Equation`, B:`Interpretation` | **Composition** — Factor interpreted as a comparison multiplier. |
| 4.OA.A.2 | Distinguish additive/multiplicative comparisons | `Addition`, `Multiplication`, `ProportionalScaling`, B:`Formalization` | **Composition** — Operation choice reflects the relationship. |
| 4.OA.A.3 | Multistep arithmetic including remainders | `Addition`, `Subtraction`, `Multiplication`, `Division`, `EuclideanDivision`, `Equation`, `NumericApproximation`, B:`ResultInterpretation` | **Composition** — Remainder meaning and plausibility are explicit outcomes. |
| 4.OA.B.4 | Factor pairs, multiples, prime/composite numbers | `FactorsAndMultiples`, `PrimeNumbers`, `CompositeNumbers` | **Composition** — Divisibility concepts composed within the prescribed range. |
| 4.OA.C.5 | Generate patterns and identify emergent features | `PatternGeneration`, `GenerativeRuleRecognition`, `EmergentFeatureRecognition` | **Composition** — Generation and emergent-property interpretation. |

### 4.NBT

[Official domain](https://www.thecorestandards.org/Math/Content/4/NBT/). 6 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 4.NBT.A.1 | Adjacent place values differ by factor ten | `PlaceValue`, `Multiplication`, S:`PowersOf10` | **Composition** — Positional scaling relation. |
| 4.NBT.A.2 | Read/write/compare multidigit integers | `IntegerNotation`, `NumberNameNotation`, `PlaceValue`, `NumericOrder` | **Composition** — Representations and positional comparison. |
| 4.NBT.A.3 | Round to any integer place | `IntegerRounding`, `PlaceValue` | **Composition** — Rounding with a stated place target. |
| 4.NBT.B.4 | Standard addition/subtraction algorithms | `AdditionStandardAlgorithm`, `SubtractionStandardAlgorithm`, B:`ProcedureExecution` | **Composition** — Explicit algorithms, not generic arithmetic alone. |
| 4.NBT.B.5 | Multidigit multiplication with models/explanation | `MultiplicationPartialProducts`, `PlaceValue`, S:`NumberArray`, `DistributiveLaw`, B:`ProcedureUnderstanding` | **Composition** — Partial-product reasoning and area/array models. |
| 4.NBT.B.6 | Multidigit division with remainders and models | `DivisionPartialQuotients`, `DivisionDividendPartitioning`, `EuclideanDivision`, `PlaceValue`, B:`ProcedureUnderstanding` | **Composition** — Division strategies and remainder interpretation. |

### 4.MD

[Official domain](https://www.thecorestandards.org/Math/Content/4/MD/). 8 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 4.MD.A.1 | Unit conversion and equivalent-value tables | `UnitConversion`, `UnitScaleRelation`, S:`DataTable` | **Composition** — Unit relationship plus a table representation. |
| 4.MD.A.2 | Mixed measurement/money arithmetic | `Addition`, `Subtraction`, `Multiplication`, `Division`, `UnitConversion`, S:`Numberline`, S:`FractionNumbers`, S:`DecimalNumbers` | **Composition** — Arithmetic and unit knowledge; target specifies quantities and units. |
| 4.MD.A.3 | Rectangle formulas and missing lengths | `Rectangle`, `AreaCalculation`, `PerimeterCalculation`, `EquationSolving` | **Composition** — Formula use composed with solving. |
| 4.MD.B.4 | Fractional line-plot data and arithmetic | S:`LinePlot`, S:`FractionNumbers`, `Addition`, `Subtraction` | **Composition** — Data representation and operations. |
| 4.MD.C.5a | Degree as a fraction of a turn | `AngleConcept`, `Circle`, S:`DegreeScale`, `FractionDenominatorInterpretation` | **Composition** — Angle, circle and unit convention compose. |
| 4.MD.C.5b | Angle magnitude counts unit degrees | `AngleConcept`, S:`DegreeScale`, S:`QuantityMeasurement` | **Composition** — Measurement as iteration of an angular unit. |
| 4.MD.C.6 | Measure/draw angles with protractors | `AngleConcept`, `AngleCalculation`, S:`Protractor`, S:`DegreeScale`, B:`Visualization` | **Composition** — Measurement and construction with a specified tool. |
| 4.MD.C.7 | Angle addition and missing angles | `AdjacentAngles`, `AngleCalculation`, `Addition`, `Subtraction`, `EquationSolving` | **Composition** — Disjoint adjacent angles and additive measurement. |

### 4.G

[Official domain](https://www.thecorestandards.org/Math/Content/4/G/). 3 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 4.G.A.1 | Draw/classify elementary geometric objects | `PointConcept`, `LineConcept`, `RayConcept`, `LineSegment`, `AngleConcept`, `ParallelismRelation`, `PerpendicularityRelation`, `LinearDrawing` | **Composition** — Existing object and relation concepts. |
| 4.G.A.2 | Classify figures by lines and angles | `ShapeClassification`, `ParallelismRelation`, `PerpendicularityRelation`, `RightTriangle`, `AngleConcept` | **Composition** — Relation-based shape classification. |
| 4.G.A.3 | Identify/draw lines of symmetry | `SymmetryRelation`, `Reflection`, `LinearDrawing` | **Composition** — Symmetry and its reflecting axis. |

### 4.NF

[Official domain](https://www.thecorestandards.org/Math/Content/4/NF/). 12 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 4.NF.A.1 | Explain fraction equivalence through partitioning | `FractionEquivalence`, `FractionNumeratorInterpretation`, `FractionDenominatorInterpretation`, B:`ProcedureUnderstanding` | **Composition** — Equivalent numbers of differently sized parts. |
| 4.NF.A.2 | Compare unlike fractions using several methods | `FractionCommonDenominatorComparison`, `FractionCommonNumeratorComparison`, `FractionReferenceComparison`, `FractionEquivalence`, `NumericInequality` | **Composition** — Existing methods compose after equivalence conversion. |
| 4.NF.B.3a | Fraction sums/differences as joining/separating | `Addition`, `Subtraction`, S:`FractionNumbers`, S:`EqualShares` | **Composition** — Operation meanings under a common reference whole. |
| 4.NF.B.3b | Decompose fractions into same-denominator sums | `Addition`, `FractionNumeratorInterpretation`, S:`CommonDenominator`, `Equation` | **Composition** — Numerator counts and decompositions. |
| 4.NF.B.3c | Add/subtract mixed numbers | `Addition`, `Subtraction`, `FractionEquivalence`, S:`MixedNumbers`, S:`CommonDenominator` | **Composition** — Representation conversion followed by operation. |
| 4.NF.B.3d | Same-denominator fraction word problems | `Addition`, `Subtraction`, S:`FractionNumbers`, S:`CommonDenominator`, B:`Formalization` | **Composition** — Contextual use of the same operations. |
| 4.NF.B.4a | Fraction as multiple of a unit fraction | `Multiplication`, `FractionNumeratorInterpretation`, S:`UnitFractions`, `Equation` | **Composition** — Numerator gives the multiplicity. |
| 4.NF.B.4b | Multiply whole numbers and fractions | `Multiplication`, `FractionNumeratorInterpretation`, `AssociativeLaw` | **Composition** — Unit-fraction grouping justifies the product. |
| 4.NF.B.4c | Fraction-times-whole word problems | `Multiplication`, S:`FractionNumbers`, B:`Formalization`, `NumericApproximation` | **Composition** — Operation, representation and result interpretation. |
| 4.NF.C.5 | Equivalent tenths/hundredths and their sums | `FractionEquivalence`, `Addition`, S:`TenthFractions`, S:`FractionNumbers` | **Composition** — Target preserves denominator restrictions. |
| 4.NF.C.6 | Decimal notation for hundredth/tenth fractions | `DecimalNotation`, `FractionNotation`, `DecimalEquivalence`, S:`Numberline` | **Composition** — Equivalent symbolic and spatial representations. |
| 4.NF.C.7 | Compare decimals to hundredths | `NumericOrder`, `NumerationWithDecimals`, `DecimalNotation` | **Composition** — Comparison relative to the same unit. |

## Grade 5

### 5.OA

[Official domain](https://www.thecorestandards.org/Math/Content/5/OA/). 3 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 5.OA.A.1 | Evaluate expressions with grouping symbols | `ArithmeticEvaluation`, `GroupingSymbol`, `OrderOfOperations`, `ArithmeticExpression` | **Composition** — Structural grouping affects execution order. |
| 5.OA.A.2 | Write/interpret numerical expressions | `ArithmeticExpression`, `Operator`, `Operand`, B:`Formalization`, B:`Interpretation` | **Composition** — Expression meaning independently of evaluation. |
| 5.OA.B.3 | Relate two numerical patterns and plot pairs | `PatternCorrespondence`, `PatternGeneration`, `OrderedCoordinatePair`, `PointPlotting` | **Composition** — Paired sequences represented as coordinates. |

### 5.NBT

[Official domain](https://www.thecorestandards.org/Math/Content/5/NBT/). 8 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 5.NBT.A.1 | Place values scale by ten and one tenth | `PlaceValue`, `Multiplication`, `Division`, S:`PowersOf10` | **Composition** — Both directions of positional scaling. |
| 5.NBT.A.2 | Power-of-ten multiplication/division patterns | `PlaceValue`, `Exponentiation`, S:`IntegerExponent`, S:`PowersOf10`, `Multiplication`, `Division` | **Composition** — Exponent notation and decimal-position effects. |
| 5.NBT.A.3a | Read/write expanded decimals | `DecimalNotation`, `NumberNameNotation`, `PlaceValue`, `Addition` | **Composition** — Decimal place values and representations. |
| 5.NBT.A.3b | Compare decimals to thousandths | `NumericOrder`, `NumerationWithDecimals`, `DecimalNotation` | **Composition** — Positional order with target precision. |
| 5.NBT.A.4 | Round decimals | `DecimalRounding`, `PlaceValue` | **Composition** — Named rounding concept with place context. |
| 5.NBT.B.5 | Standard multidigit multiplication | `MultiplicationStandardAlgorithm`, B:`ProcedureExecution` | **Composition** — Explicit algorithm plus fluent execution. |
| 5.NBT.B.6 | Multidigit division with two-digit divisors | `DivisionPartialQuotients`, `DivisionDividendPartitioning`, `PlaceValue`, B:`ProcedureUnderstanding` | **Composition** — Strategies plus explanation; digit limits stay in the target. |
| 5.NBT.B.7 | Decimal arithmetic with models and explanation | `Addition`, `Subtraction`, `Multiplication`, `Division`, `DecimalPointAlignment`, `DecimalPadding`, `DecimalDivisorShift`, `PlaceValue` | **Composition** — Operations and decimal-specific techniques. |

### 5.MD

[Official domain](https://www.thecorestandards.org/Math/Content/5/MD/). 8 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 5.MD.A.1 | Convert units in multistep problems | `UnitConversion`, `UnitScaleRelation`, B:`ProcedureComposition` | **Composition** — Sequential calculations with unit relationships. |
| 5.MD.B.2 | Fractional line plots and equal redistribution | S:`LinePlot`, S:`FractionNumbers`, `Addition`, `Division`, `ArithmeticMean` | **Composition** — Data calculations and equal-share mean interpretation. |
| 5.MD.C.3a | Unit cube as volume unit | `VolumeCalculation`, `Cube`, S:`CubeScale`, `UnitDimensionality`, B:`ProcedureUnderstanding` | **Composition** — Volume measurement with cubic units. |
| 5.MD.C.3b | Volume as count of packed unit cubes | `VolumeCalculation`, `Cube`, S:`QuantityMeasurement`, B:`ProcedureUnderstanding` | **Composition** — Unit-count interpretation with no gaps/overlaps specified in target. |
| 5.MD.C.4 | Count cubes to measure volume | `VolumeCalculation`, S:`QuantityMeasurement`, S:`CubeScale` | **Composition** — Measurement by counting units. |
| 5.MD.C.5a | Derive prism volume from packing | `VolumeCalculation`, `RectangularPrism`, `Multiplication`, `AssociativeLaw`, B:`ProcedureDerivation` | **Composition** — Layer/array product derives the formula. |
| 5.MD.C.5b | Use rectangular prism volume formulas | `VolumeCalculation`, `RectangularPrism`, `Multiplication` | **Composition** — Shape and calculation composition. |
| 5.MD.C.5c | Add volumes of disjoint prisms | `VolumeCalculation`, `RectangularPrism`, `ShapeDecomposition`, `Addition` | **Composition** — Volume on disjoint pieces. |

### 5.G

[Official domain](https://www.thecorestandards.org/Math/Content/5/G/). 4 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 5.G.A.1 | Coordinate axes, origin and ordered pairs | `CoordinateAxes`, `Origin`, `OrderedCoordinatePair` | **Composition** — Explicit conventions of coordinate representation. |
| 5.G.A.2 | Plot/interpret first-quadrant points | `PointPlotting`, `OrderedCoordinatePair`, B:`ResultInterpretation` | **Composition** — Coordinate representation of quantities. |
| 5.G.B.3 | Understand inheritance of shape attributes | `ShapeSubsumption` | **Direct** — Definition explicitly covers containment of shape categories. |
| 5.G.B.4 | Classify figures in a hierarchy | `ShapeClassification`, `ShapeSubsumption` | **Composition** — Classification and category inclusion. |

### 5.NF

[Official domain](https://www.thecorestandards.org/Math/Content/5/NF/). 11 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 5.NF.A.1 | Add/subtract unlike fractions | `Addition`, `Subtraction`, `FractionEquivalence`, `LowestCommonDenominator`, S:`UnlikeDenominators`, S:`MixedNumbers` | **Composition** — Equivalent-denominator method and operations. |
| 5.NF.A.2 | Fraction word problems and benchmark checks | `Addition`, `Subtraction`, `FractionReferenceComparison`, `FractionEquivalence`, `NumericApproximation`, B:`PlausibilityEvaluation` | **Composition** — Arithmetic, estimates and reasonableness. |
| 5.NF.B.3 | Interpret a fraction as division | `Division`, `FractionNotation`, S:`FractionQuotient`, `PartitiveDivision` | **Composition** — Division relationship and fractional output. |
| 5.NF.B.4a | Multiply fractions via partitioning | `Multiplication`, `Division`, `FractionNumeratorInterpretation`, `FractionDenominatorInterpretation` | **Composition** — Whole/part composition explains fraction products. |
| 5.NF.B.4b | Fractional rectangle areas via tiling | `AreaCalculation`, `Rectangle`, `Multiplication`, S:`FractionNumbers`, B:`ProcedureDerivation` | **Composition** — Fractional side lengths and a tiling justification. |
| 5.NF.B.5a | Compare product size without computing | `ProportionalScaling`, `Multiplication`, `NumericOrder` | **Composition** — Scale factor determines relative magnitude. |
| 5.NF.B.5b | Explain enlargement/reduction and multiplication by one | `ProportionalScaling`, `FractionEquivalence`, `Multiplication`, `NumericOrder` | **Composition** — Scaling relative to one and value-preserving rescaling. |
| 5.NF.B.6 | Fraction/mixed-number product problems | `Multiplication`, S:`FractionNumbers`, S:`MixedNumbers`, B:`Formalization` | **Composition** — Existing operation in the specified number contexts. |
| 5.NF.B.7a | Divide unit fractions by integers | `Division`, S:`UnitFractions`, S:`FractionDividend`, S:`IntegerNumbers`, B:`ProcedureUnderstanding` | **Composition** — Operation and operand contexts; inverse-product reasoning explains it. |
| 5.NF.B.7b | Divide integers by unit fractions | `Division`, S:`UnitFractions`, S:`FractionDivisor`, `QuotativeDivision`, B:`ProcedureUnderstanding` | **Composition** — Grouping interpretation with a unit-fraction divisor. |
| 5.NF.B.7c | Model both unit-fraction division cases | `Division`, S:`UnitFractions`, S:`FractionDividend`, S:`FractionDivisor`, B:`Formalization` | **Composition** — Alternatives require separate targets, not both scopes on every instance. |

## Grade 6

### 6.EE

[Official domain](https://www.thecorestandards.org/Math/Content/6/EE/). 11 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 6.EE.A.1 | Write/evaluate arithmetic expressions with powers | `ArithmeticExpression`, `ArithmeticEvaluation`, `Exponentiation`, S:`IntegerExponent`, S:`PositiveExponent` | **Composition** — Zero exponent is retained when required; do not use PositiveExponent alone for it. |
| 6.EE.A.2a | Write variable expressions | `AlgebraicExpression`, `Variable`, B:`Formalization` | **Composition** — Object and variable role compose. |
| 6.EE.A.2b | Identify expression parts, including composite operands | `Term`, `Sum`, `Factor`, `Coefficient`, `Operand`, `Operator`, `AlgebraicExpression`, `Addition`, `Multiplication`, `Division` | **Composition** — Structural roles combine with operation meanings for sum, product and quotient; operands may be composite. |
| 6.EE.A.2c | Substitute and evaluate formulas in order | `AlgebraicSubstitution`, `ArithmeticEvaluation`, `OrderOfOperations`, `Exponentiation` | **Composition** — Substitution followed by ordered evaluation. |
| 6.EE.A.3 | Generate equivalent expressions | `AlgebraicEquivalence`, `DistributiveLaw`, `CollectingLinearTerms` | **Composition** — Equivalence knowledge with specified rewriting methods. |
| 6.EE.A.4 | Recognize expression equivalence for all assignments | `AlgebraicEquivalence` | **Direct** — Definition covers equality of values on the admissible domain. |
| 6.EE.B.5 | Solutions as values satisfying a constraint | `SolutionSet`, `Equation`, `Inequality`, `AlgebraicSubstitution`, B:`CorrectnessEvaluation` | **Composition** — Constraint truth under substitution identifies solutions. |
| 6.EE.B.6 | Variables as unknowns or general numbers | `Variable`, `UnknownVariable`, `GeneralizedVariable`, `AlgebraicModeling` | **Composition** — Roles differ by the intended problem. |
| 6.EE.B.7 | Model/solve one-step rational equations | `EquationSolving`, `AlgebraicModeling`, `Addition`, `Multiplication`, S:`RationalNumbers` | **Composition** — Solving goal and operation context. |
| 6.EE.B.8 | Inequalities and their number-line solution sets | `Inequality`, `SolutionSet`, `NumerationWithIntervals`, S:`Numberline`, `AlgebraicModeling` | **Composition** — Interval and constraint composition expresses infinitely many solutions. |
| 6.EE.C.9 | Model related quantities across equations/tables/graphs | `IndependentVariable`, `DependentVariable`, `NumericFunction`, `Equation`, S:`TabularAlgebraicRepresentation`, S:`GraphicalAlgebraicRepresentation` | **Composition** — Roles, input-output relationship and representations. |

### 6.G

[Official domain](https://www.thecorestandards.org/Math/Content/6/G/). 4 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 6.G.A.1 | Polygon areas by decomposition | `AreaCalculation`, `ShapeDecomposition`, `Triangle`, `Rectangle`, `Polygon` | **Composition** — Existing decomposition knowledge supports shape-specific area procedures. |
| 6.G.A.2 | Prism volumes with fractional edges | `VolumeCalculation`, `RectangularPrism`, S:`FractionNumbers`, `Multiplication`, B:`ProcedureDerivation` | **Composition** — Fractional packing and products explain the formula. |
| 6.G.A.3 | Coordinate polygons and axis-aligned distances | `ShapePlotting`, `OrderedCoordinatePair`, `CoordinateDistance`, `Polygon` | **Composition** — Coordinate construction and distance. |
| 6.G.A.4 | Nets of solids and surface areas | `SurfaceAreaCalculation`, `ShapeDecomposition`, `Prism`, `Pyramid`, `Triangle`, `Rectangle` | **Definition/representation gap** — K8-R1: no net representation or explicit folding correspondence; Foldable alone describes a material property. |

### 6.RP

[Official domain](https://www.thecorestandards.org/Math/Content/6/RP/). 6 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 6.RP.A.1 | Interpret ratios and ratio language | `RatioNotation`, `RatioAntecedentInterpretation`, `RatioConsequentInterpretation` | **Composition** — Ordered quantities and their multiplicative relationship. |
| 6.RP.A.2 | Unit rates from ordered ratios | `RatioNotation`, `Division`, `ProportionalScaling`, `UnitDimensionality` | **Composition** — Normalization to one unit plus quantity dimensions; no separate rate node necessary. |
| 6.RP.A.3a | Ratio tables, missing values and plotted pairs | `RatioEquivalence`, `ProportionManipulation`, S:`DataTable`, `OrderedCoordinatePair`, `PointPlotting` | **Composition** — Equivalent relationships across tabular and coordinate forms. |
| 6.RP.A.3b | Unit pricing and constant-rate problems | `ProportionalScaling`, `RatioEquivalence`, `Division`, `UnitDimensionality` | **Composition** — Scaling a normalized ratio preserves units. |
| 6.RP.A.3c | Percent, part and whole problems | `PercentageNotation`, `PercentageEquivalence`, `ProportionalScaling`, `EquationSolving` | **Composition** — Percent representation and inverse scaling. |
| 6.RP.A.3d | Ratio-based unit conversions | `UnitConversion`, `UnitDimensionality`, `ProportionalScaling` | **Composition** — Conversion factors and dimensional meaning. |

### 6.NS

[Official domain](https://www.thecorestandards.org/Math/Content/6/NS/). 13 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 6.NS.A.1 | Interpret/compute fraction division | `Division`, S:`FractionNumbers`, `QuotativeDivision`, `PartitiveDivision`, B:`ProcedureUnderstanding` | **Composition** — Both meanings and reciprocal-product derivation can be targeted compositionally. |
| 6.NS.B.2 | Standard multidigit division | `DivisionStandardAlgorithm`, B:`ProcedureExecution` | **Composition** — Named algorithm with fluency requirement. |
| 6.NS.B.3 | Standard algorithms for decimal arithmetic | `AdditionStandardAlgorithm`, `SubtractionStandardAlgorithm`, `MultiplicationStandardAlgorithm`, `DivisionStandardAlgorithm`, `DecimalPointAlignment`, `DecimalDivisorShift` | **Composition** — Algorithms compose with decimal handling. |
| 6.NS.B.4 | GCD/LCM and distributive integer factoring | `GreatestCommonDivisor`, `LeastCommonMultiple`, `DistributiveLaw`, `FactorsAndMultiples` | **Composition** — Named number-theoretic operations plus factor extraction. |
| 6.NS.C.5 | Signed quantities and contextual zero | `SignNotation`, `ZeroConcept`, S:`NumbersWithNegatives`, B:`Interpretation` | **Composition** — Meaning of signs and reference zero. |
| 6.NS.C.6a | Opposite numbers around zero | `SignNotation`, `NumerationWithIntegers`, S:`Numberline`, `ZeroConcept` | **Composition** — Sign interpretation and reflected positions. |
| 6.NS.C.6b | Coordinate signs and axis reflections | `Quadrants`, `OrderedCoordinatePair`, `Reflection`, `SignNotation` | **Composition** — Sign changes interpreted geometrically. |
| 6.NS.C.6c | Locate rational numbers and coordinate pairs | `NumerationWithFractions`, `NumerationWithIntegers`, `PointPlotting`, S:`Numberline`, S:`RationalNumbers` | **Composition** — Spatial placement of the number representations. |
| 6.NS.C.7a | Inequality and number-line order | `NumericOrder`, `NumericInequality`, S:`Numberline` | **Composition** — Symbolic order tied to position. |
| 6.NS.C.7b | Interpret signed-number order in context | `NumericOrder`, `SignNotation`, S:`RationalNumbers`, B:`Interpretation` | **Composition** — Order and contextual meaning. |
| 6.NS.C.7c | Absolute value as distance from zero | `AbsoluteNumberMagnitude` | **Direct** — Definition explicitly covers rational magnitude and number-line distance. |
| 6.NS.C.7d | Distinguish magnitude from signed order | `AbsoluteNumberMagnitude`, `NumericOrder`, `SignNotation` | **Composition** — Independent magnitude and order concepts. |
| 6.NS.C.8 | All-quadrant graphs and axis-aligned distances | `PointPlotting`, `Quadrants`, `CoordinateDistance`, `AbsoluteNumberMagnitude` | **Composition** — Coordinate and magnitude composition. |

### 6.SP

[Official domain](https://www.thecorestandards.org/Math/Content/6/SP/). 8 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 6.SP.A.1 | Statistical questions anticipate variation | `StatisticalQuestion` | **Direct** — Direct definition match. |
| 6.SP.A.2 | Distributions have center, spread and shape | `ArithmeticMean`, `Median`, `DataRange`, `StatisticalVariability`, `EmpiricalDistributionShape` | **Composition** — Existing properties jointly describe a distribution. |
| 6.SP.A.3 | Distinguish center from variation summaries | `ArithmeticMean`, `Median`, `MeanAbsoluteDeviation`, `InterquartileRange` | **Composition** — Different statistic meanings, not just calculation. |
| 6.SP.B.4 | Plot numerical distributions | `FrequencyDistribution`, S:`LinePlot`, S:`Histogram`, S:`BoxPlot` | **Composition** — Distribution knowledge with three specified representations. |
| 6.SP.B.5a | Report the observation count | `StatisticalSample`, S:`QuantityMeasurement` | **Composition** — Count the observations in the statistical context. |
| 6.SP.B.5b | Describe the measured attribute and units | `StatisticalVariable`, `MeasurementScale`, `UnitDimensionality` | **Composition** — Variable meaning, measurement scale type and units. |
| 6.SP.B.5c | Summarize center/spread/shape/outliers | `ArithmeticMean`, `Median`, `InterquartileRange`, `MeanAbsoluteDeviation`, `EmpiricalDistributionShape`, `StatisticalOutlier` | **Composition** — Required summary components are explicit concepts. |
| 6.SP.B.5d | Choose summaries for shape and context | `EmpiricalDistributionShape`, `ArithmeticMean`, `Median`, `InterquartileRange`, `MeanAbsoluteDeviation`, B:`ProcedureApplicability` | **Composition** — Applicability connects the summaries to the distribution. |

## Grade 7

### 7.EE

[Official domain](https://www.thecorestandards.org/Math/Content/7/EE/). 5 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 7.EE.A.1 | Operate on and factor linear expressions | `LinearRewriting`, `CollectingLinearTerms`, `DistributiveLaw`, `AlgebraicFactorization`, S:`RationalNumbers` | **Composition** — Existing equivalence methods preserve linear meaning. |
| 7.EE.A.2 | Interpret equivalent forms in context | `AlgebraicEquivalence`, `AlgebraicModeling`, B:`ResultInterpretation` | **Composition** — Rewriting exposes contextual relationships. |
| 7.EE.B.3 | Multistep rational arithmetic with estimates | `Addition`, `Subtraction`, `Multiplication`, `Division`, `FractionEquivalence`, `DecimalEquivalence`, `NumericApproximation`, B:`PlausibilityEvaluation` | **Composition** — Representations, operation laws and result checks compose. |
| 7.EE.B.4a | Solve two-step linear equation problems | `EquationSolving`, `LinearRewriting`, `AlgebraicModeling`, `AffineDependence`, B:`ProcedureUnderstanding` | **Composition** — Solving and comparison with arithmetic reasoning. |
| 7.EE.B.4b | Model/solve/graph linear inequalities | `InequalitySolving`, `AffineDependence`, `SolutionSet`, S:`Numberline`, `AlgebraicModeling` | **Composition** — Constraint solving with graphical interval output. |

### 7.G

[Official domain](https://www.thecorestandards.org/Math/Content/7/G/). 6 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 7.G.A.1 | Scale drawings and lengths/areas | `Dilation`, `ProportionalScaling`, `AreaCalculation`, `LengthCalculation` | **Composition** — Geometric scaling and measurements. |
| 7.G.A.2 | Triangle constructions: none, one or multiple solutions | `Triangle`, `LinearShapeDrawing`, `AngleCalculation`, `LengthCalculation`, S:`Protractor` | **Knowledge/procedure gap** — K8-G1: existing shape/drawing concepts do not identify feasibility and uniqueness criteria for prescribed sides/angles. |
| 7.G.A.3 | Plane sections of prisms/pyramids | `PlaneConcept`, `IntersectionRelation`, `Prism`, `Pyramid`, `ShapeRecognition`, B:`SpatialInterpretation` | **Composition** — Section is the intersection with a plane; does not require integral calculus. |
| 7.G.B.4 | Circle circumference/area and informal derivation | `Circle`, `Pi`, `CircumferenceCalculation`, `AreaCalculation`, B:`ProcedureDerivation` | **Composition** — Shape-specific measurement procedures and the constant can be composed. |
| 7.G.B.5 | Equations using elementary angle relations | `SupplementaryAngles`, `ComplementaryAngles`, `VerticalAngles`, `AdjacentAngles`, `AngleCalculation`, `EquationSolving` | **Composition** — Definitions/angle relationships plus solving; VerticalAngles equality should be explicit in future definition polish. |
| 7.G.B.6 | Measures of composite plane/solid figures | `AreaCalculation`, `VolumeCalculation`, `SurfaceAreaCalculation`, `ShapeDecomposition`, `Polygon`, `Prism` | **Composition** — Decomposition composed with the relevant measure. |

### 7.RP

[Official domain](https://www.thecorestandards.org/Math/Content/7/RP/). 6 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 7.RP.A.1 | Unit rates involving fractional quantities | `Division`, `RatioNotation`, S:`FractionNumbers`, `UnitDimensionality` | **Composition** — Ratio normalization and dimensional quantities. |
| 7.RP.A.2a | Recognize proportional dependence in tables/graphs | `DirectProportionalDependence`, `ProportionIdentification`, S:`DataTable`, `LineGraphing`, `Origin` | **Composition** — The shared dependence characteristic supplies the proportional form. |
| 7.RP.A.2b | Identify the constant of proportionality | `DirectProportionalDependence`, `ProportionalScaling`, `Coefficient` | **Composition** — Coefficient of the proportional relationship. |
| 7.RP.A.2c | Write proportional equations | `ProportionExpression`, `DirectProportionalDependence`, `Equation` | **Composition** — Formalization of a proportional dependence. |
| 7.RP.A.2d | Interpret points on a proportional graph | `DirectProportionalDependence`, `OrderedCoordinatePair`, `Origin`, B:`ResultInterpretation` | **Composition** — Coordinate meaning and unit output. |
| 7.RP.A.3 | Multistep ratio/percent applications | `ProportionalScaling`, `PercentageNotation`, `PercentageEquivalence`, B:`ProcedureComposition` | **Composition** — Financial examples are contexts of proportional reasoning. |

### 7.NS

[Official domain](https://www.thecorestandards.org/Math/Content/7/NS/). 9 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 7.NS.A.1a | Opposite quantities combine to zero | `Addition`, `RulesOfSigns`, `ZeroConcept`, `SignNotation` | **Composition** — Signed addition and additive cancellation. |
| 7.NS.A.1b | Signed addition as directed movement | `Addition`, `RulesOfSigns`, `AbsoluteNumberMagnitude`, S:`Numberline` | **Composition** — Sign sets direction and magnitude sets displacement. |
| 7.NS.A.1c | Subtract by adding the opposite; distance | `Subtraction`, `Addition`, `RulesOfSigns`, `AbsoluteNumberMagnitude`, S:`Numberline` | **Composition** — Inverse-sign reasoning and magnitude of difference. |
| 7.NS.A.1d | Use laws for signed sums/differences | `Addition`, `Subtraction`, `CommutativeLaw`, `AssociativeLaw`, `RulesOfSigns` | **Composition** — Operation laws in signed contexts. |
| 7.NS.A.2a | Explain signs of products using distributivity | `Multiplication`, `RulesOfSigns`, `DistributiveLaw`, B:`ProcedureDerivation` | **Composition** — Existing law supplies justification. |
| 7.NS.A.2b | Signed division and rational quotients | `Division`, `RulesOfSigns`, `RationalNumberCharacterization` | **Composition** — Nonzero divisor and number-system membership are part of the target. |
| 7.NS.A.2c | Apply properties to rational products/quotients | `Multiplication`, `Division`, `CommutativeLaw`, `AssociativeLaw`, `DistributiveLaw`, S:`RationalNumbers` | **Composition** — Operation laws with rational operands. |
| 7.NS.A.2d | Rationals as terminating/repeating decimals | `RationalNumberCharacterization`, `DivisionStandardAlgorithm`, `DecimalNotation` | **Composition** — Characterization plus conversion algorithm. |
| 7.NS.A.3 | Four-operation rational problems | `Addition`, `Subtraction`, `Multiplication`, `Division`, S:`RationalNumbers`, B:`Formalization` | **Composition** — Operations and modeling under signed rational contexts. |

### 7.SP

[Official domain](https://www.thecorestandards.org/Math/Content/7/SP/). 11 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 7.SP.A.1 | Representative/random samples and populations | `StatisticalPopulation`, `StatisticalSample`, `SimpleRandomSampling`, `SamplingBias` | **Composition** — Sample design and generalization limitations. |
| 7.SP.A.2 | Estimate population properties and sampling variation | `ParameterEstimation`, `SamplingSimulation`, `SamplingDistribution`, `SimpleRandomSampling` | **Composition** — Repeated-sample inference is already explicit. |
| 7.SP.B.3 | Compare distribution overlap relative to spread | `EmpiricalDistributionShape`, `ArithmeticMean`, `Median`, `MeanAbsoluteDeviation`, `Division`, `RatioNotation` | **Composition** — Difference in centers expressed as a multiple of variation. |
| 7.SP.B.4 | Compare populations using samples | `ParameterEstimation`, `ArithmeticMean`, `Median`, `InterquartileRange`, `MeanAbsoluteDeviation`, `StatisticalPopulation` | **Composition** — Inference based on sample summary differences. |
| 7.SP.C.5 | Probability expresses likelihood on zero to one | `ProbabilityAxioms`, `ProbabilityModel`, `NumericOrder`, B:`Interpretation` | **Composition** — Axioms bound the probability; model interpretation connects larger values with greater likelihood. |
| 7.SP.C.6 | Probability and long-run relative frequency | `RelativeFrequency`, `LawOfLargeNumbers`, `ProbabilityModel` | **Composition** — Stochastic limiting relationship, not guaranteed finite frequencies. |
| 7.SP.C.7a | Uniform models and observed-frequency checks | `ClassicalProbability`, `ProbabilityModel`, `RelativeFrequency`, B:`CorrectnessEvaluation` | **Composition** — Equally likely model plus comparison with evidence. |
| 7.SP.C.7b | Empirical probability models | `ProbabilityModel`, `RelativeFrequency`, `ParameterEstimation` | **Composition** — Estimate probabilities from repeated observations. |
| 7.SP.C.8a | Compound events as subsets of outcomes | `ProbabilityEvent`, `SampleSpace`, `ClassicalProbability` | **Composition** — Finite sample-space event counting. |
| 7.SP.C.8b | Represent compound sample spaces | `SampleSpace`, `ProbabilityEvent`, `ExhaustiveEnumeration`, S:`DataTable`, S:`ProbabilityTree` | **Composition** — Enumeration and available representations. |
| 7.SP.C.8c | Simulate compound-event frequencies | `SamplingSimulation`, `ProbabilityModel`, `RelativeFrequency` | **Composition** — Simulation and frequency estimation. |

## Grade 8

### 8.EE

[Official domain](https://www.thecorestandards.org/Math/Content/8/EE/). 11 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 8.EE.A.1 | Equivalent powers with integer exponents | `ExponentLaws`, `Exponentiation`, S:`IntegerExponent` | **Composition** — Operation laws in the integer-exponent context. |
| 8.EE.A.2 | Roots, power equations and irrational square roots | `Root`, `EquationSolving`, `Exponentiation`, `RationalNumberCharacterization`, S:`IrrationalNumbers` | **Composition** — Operations, solving and number characterization. |
| 8.EE.A.3 | Estimate/compare scientific-scale quantities | S:`ScientificExponentNotation`, `Exponentiation`, `NumericApproximation`, `ProportionalScaling` | **Composition** — Notation Scope composed with arithmetic and approximation knowledge. |
| 8.EE.A.4 | Scientific notation arithmetic and units | S:`ScientificExponentNotation`, `ExponentLaws`, `ArithmeticEvaluation`, `UnitConversion`, `UnitDimensionality` | **Composition** — Existing notation context includes interpretation; unit choice is applicability. |
| 8.EE.B.5 | Proportional graphs, slopes and rates | `DirectProportionalDependence`, `SlopeConcept`, `LineGraphing`, `AverageRateOfChange` | **Composition** — Same dependence across graph and quantity interpretations. |
| 8.EE.B.6 | Derive constant slope and affine line equation | `SimilarityRelation`, `Triangle`, `SlopeConcept`, `AffineDependence`, `Equation`, B:`ProcedureDerivation` | **Composition** — Similar-triangle proportionality supports the derivation; no separate theorem target here. |
| 8.EE.C.7a | Linear equations with zero/one/infinitely many solutions | `EquationSolving`, `SolutionSet`, `LinearRewriting`, `AlgebraicEquivalence` | **Composition** — Rewriting to tautology, contradiction or assignment. |
| 8.EE.C.7b | Solve rational linear equations with expansion | `EquationSolving`, `LinearRewriting`, `DistributiveLaw`, `CollectingLinearTerms`, S:`RationalNumbers` | **Composition** — Methods composed with the solving objective. |
| 8.EE.C.8a | System solutions as graph intersections | `SystemOfEquations`, `SolutionSet`, `IntersectionRelation`, S:`GraphicalAlgebraicRepresentation` | **Composition** — Simultaneous constraint satisfaction and graphical representation. |
| 8.EE.C.8b | Solve/estimate linear systems | `SystemSolving`, `SystemSubstitution`, `SystemElimination`, S:`GraphicalAlgebraicRepresentation` | **Composition** — Alternative methods selected per target. |
| 8.EE.C.8c | Model situations with linear systems | `AlgebraicModeling`, `SystemOfEquations`, `SystemSolving`, `AffineDependence` | **Composition** — Modeling and solving compose. |

### 8.G

[Official domain](https://www.thecorestandards.org/Math/Content/8/G/). 11 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 8.G.A.1a | Rigid motions preserve lines and segment lengths | `Translation`, `Reflection`, `Rotation`, `LineConcept`, `LineSegment`, `LengthCalculation`, S:`ConstructedCaseEvidence` | **Composition** — Transform properties composed with experimental evidence. |
| 8.G.A.1b | Rigid motions preserve angle measure | `Translation`, `Reflection`, `Rotation`, `AngleConcept`, S:`ConstructedCaseEvidence` | **Composition** — Geometric transformation and angular invariance. |
| 8.G.A.1c | Rigid motions preserve parallelism | `Translation`, `Reflection`, `Rotation`, `ParallelismRelation`, S:`ConstructedCaseEvidence` | **Composition** — Relation preserved under the specified motions. |
| 8.G.A.2 | Congruence through sequences of rigid motions | `CongruenceRelation`, `Translation`, `Reflection`, `Rotation`, B:`ProcedureComposition` | **Composition** — Composed transformations witness congruence. |
| 8.G.A.3 | Coordinate effects of transformations | `Translation`, `Reflection`, `Rotation`, `Dilation`, `OrderedCoordinatePair`, `PointPlotting` | **Composition** — Geometric operations applied to coordinate representations. |
| 8.G.A.4 | Similarity through motions and dilation | `SimilarityRelation`, `Translation`, `Reflection`, `Rotation`, `Dilation` | **Composition** — Existing relation and transformation concepts. |
| 8.G.A.5 | Triangle angle sum/exterior angles/transversals/AA | `Triangle`, `AngleCalculation`, `ParallelismRelation`, `SimilarityRelation`, B:`LogicalInference` | **Knowledge/procedure gap** — K8-G2: no explicit theorem/criterion identifies these required implications; broad shape properties are not sufficient evidence. |
| 8.G.B.6 | Prove Pythagoras and its converse | `PythagoreanTheorem`, B:`LogicalInference`, S:`DirectProof` | **Composition** — The theorem definition includes both directions. |
| 8.G.B.7 | Use Pythagoras in plane/space | `PythagoreanTheorem`, `LengthCalculation`, `RightTriangle`, S:`ThreeDimensional` | **Composition** — Theorem applied within geometric contexts. |
| 8.G.B.8 | Coordinate distances using Pythagoras | `PythagoreanTheorem`, `CoordinateDistance`, `OrderedCoordinatePair` | **Composition** — Distance is derived from coordinate differences. |
| 8.G.C.9 | Cone/cylinder/sphere volume formulas | `Cone`, `Cylinder`, `Sphere`, `VolumeCalculation`, B:`ProcedureMemorization`, B:`ProcedureExecution` | **Composition** — Existing shape and measurement procedures; no separate theorem descriptor required for each formula. |

### 8.NS

[Official domain](https://www.thecorestandards.org/Math/Content/8/NS/). 2 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 8.NS.A.1 | Rationality and repeating-decimal conversion | `RationalNumberCharacterization`, `DecimalNotation`, `FractionNotation`, `AlgebraicEquivalence` | **Composition** — Characterization and equivalent-form conversion. |
| 8.NS.A.2 | Approximate irrational numbers and expressions | `NumericApproximation`, `NumericOrder`, S:`IrrationalNumbers`, S:`Numberline`, `ArithmeticEvaluation` | **Composition** — Approximation, comparison and evaluation. |

### 8.SP

[Official domain](https://www.thecorestandards.org/Math/Content/8/SP/). 4 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 8.SP.A.1 | Bivariate scatter patterns and outliers | `StatisticalVariable`, `StatisticalOutlier`, `AssociationAndCausation`, S:`ScatterPlot` | **Composition** — Association patterns and representation; causation is not inferred. |
| 8.SP.A.2 | Informal straight-line fit and closeness | `RegressionModel`, `RegressionResidual`, `AffineDependence`, S:`ScatterPlot` | **Composition** — Model family and residual interpretation; least squares is not imposed. |
| 8.SP.A.3 | Interpret slope/intercept in a linear model | `RegressionModel`, `AffineDependence`, `SlopeConcept`, B:`ResultInterpretation` | **Composition** — Model parameters interpreted in context. |
| 8.SP.A.4 | Categorical association in two-way tables | `ContingencyAssociation`, `ConditionalRelativeFrequency`, S:`TwoWayTable` | **Composition** — Conditional frequencies identify categorical association. |

### 8.F

[Official domain](https://www.thecorestandards.org/Math/Content/8/F/). 5 terminal leaves.

| Standard | Requirement | Eligible descriptors | Judgment and reason |
| --- | --- | --- | --- |
| 8.F.A.1 | Unique-output rule and graph of input/output pairs | `NumericFunction`, `FunctionArgument`, `OrderedCoordinatePair`, S:`GraphicalAlgebraicRepresentation` | **Composition** — Function meaning is already explicit without renaming FunctionTypes. |
| 8.F.A.2 | Compare functions across representations | `NumericFunction`, `AverageRateOfChange`, S:`SymbolicAlgebraicRepresentation`, S:`TabularAlgebraicRepresentation`, S:`GraphicalAlgebraicRepresentation`, S:`VerbalAlgebraicRepresentation` | **Composition** — Shared properties and alternate representations. |
| 8.F.A.3 | Affine versus nonlinear functions | `NumericFunction`, `AffineDependence`, `QuadraticDependence`, `LineGraphing` | **Composition** — Shared dependence descriptors identify the contrast. |
| 8.F.B.4 | Build and interpret affine models | `AlgebraicModeling`, `NumericFunction`, `AffineDependence`, `SlopeConcept`, `AverageRateOfChange` | **Composition** — Initial value and constant rate determine the model. |
| 8.F.B.5 | Describe/sketch qualitative function behavior | `FunctionMonotonicity`, `NumericFunction`, `AffineDependence`, S:`GraphicalAlgebraicRepresentation`, B:`Visualization` | **Composition** — Property knowledge composed with graphical production/interpretation. |
