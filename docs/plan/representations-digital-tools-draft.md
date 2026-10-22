# Sign and variation tables, probability diagrams and digital tools

Status: **merged**, verified 2026-10-22, through
[PR #84](https://github.com/christian-bick/edugraph-ontology/pull/84) at
`d04c0d3524351b305e6dc6307c17c6771fc04b18`. Implementation branch:
`codex/representations-digital-tools` (merged).
Baseline: `main` at `e6dba8b06e03bef49e62a91c80053e3ababe4cca`, after
[PR #83](https://github.com/christian-bick/edugraph-ontology/pull/83);
1,421 descriptors and 7,546 authored assertions.

This develops batch 3 of the [school curriculum audit](coverage-audit-2026-10-21.md).
The implementation adds **thirteen Scopes**, including the `ToolScope` organizer, broadens
`TabularAlgebraicRepresentation`, and connects existing measurement tools to the new families.
The digital-tool family retains a software specialization alongside general digital-tool contexts;
existing mathematical Areas and Abilities remain in use.
It distinguishes a representation's encoding from the mathematical knowledge being exercised
and from the tool supplied or used in the task.

## Implemented structure

`P` means that the child is `partOf` its parent; `S` means that the child `specializes` its parent.

```text
RepresentationalScope [existing organizer]
├─ P AlgebraicRepresentation [existing]
│  ├─ S GraphicalAlgebraicRepresentation [existing; unchanged]
│  └─ S TabularAlgebraicRepresentation [broaden]
│     ├─ S SignTable [new]
│     └─ S VariationTable [new]
├─ P ProbabilityRepresentation [existing; unchanged]
│  ├─ S ProbabilityTree [existing; unchanged]
│  └─ S ProbabilityHistogram [new]
└─ P DataRepresentation [existing; unchanged]
   └─ S Histogram [existing; empirical data]

ToolScope [new organizer]
├─ P MeasurementTool [new; selectable]
│  └─ S Existing measurement instruments [listed below]
└─ P DigitalTool [new; selectable]
   ├─ S SoftwareTool [new; selectable]
   │  ├─ S DigitalAlgebraTool [new]
   │  ├─ S DigitalGeometryTool [new]
   │  ├─ S DigitalGraphingTool [new]
   │  ├─ S Spreadsheet [new]
   │  └─ S StatisticalTool [new]
   ├─ S NumericalCalculator [new; hardware or software]
   ├─ S DigitalScale [existing; also S MeasurementTool]
   └─ S DigitalClock [existing; also S MeasurementTool]
```

`ToolScope` organizes measurement and digital tools. `DigitalTool`, `SoftwareTool` and
`MeasurementTool` remain selectable because their children specialize them;
only the root has constituent children and is ineligible under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
Generic software requirements can therefore use `SoftwareTool`, while unspecified digital-tool
context can use `DigitalTool`. Existing measurement instruments retain their subject-specific
`partOf` homes alongside the new tool specializations. Construction tools retain their homes.

## Definitions and examples

Definitions below are authored in `rdfs:isDefinedBy`; examples belong in `rdfs:comment`.
The detailed boundaries in later sections guide annotation without lengthening these definitions.

### Existing definition revision

| Descriptor | Definition | Example |
| --- | --- | --- |
| `TabularAlgebraicRepresentation` | Algebraic relationships or function properties represented in tables of corresponding values, interval signs, or variation. | A value table for y = 2x + 1, a sign table, or a table of a function's variation. |

The previous definition only mentioned corresponding variable values. The broader wording
includes interval summaries while preserving ordinary value-table content and the existing parent.

### New representation Scopes

| Descriptor | Relation | Definition | Example |
| --- | --- | --- | --- |
| `SignTable` | `specializes TabularAlgebraicRepresentation` | Tables showing the signs of expressions or functions across ordered input intervals, with zeros and excluded inputs marked where applicable. | For (x - 1)/(x + 2), intervals separated by -2 and 1 have signs +, -, +; -2 is excluded and 1 is a zero. |
| `VariationTable` | `specializes TabularAlgebraicRepresentation` | Tables showing where a function increases, decreases, or is constant, with boundary values or limits included when specified. | For f(x) = x^2, a decreasing arrow toward the minimum 0 is followed by an increasing arrow, with +infinity at both unbounded ends. |
| `ProbabilityHistogram` | `specializes ProbabilityRepresentation` | Probability distributions represented by adjacent bars whose areas equal interval or outcome probabilities, with heights adjusted for bar widths. | A binomial distribution with probabilities 1/4, 1/2 and 1/4 displayed by bars of width 1; intervals of widths 1 and 2 with probabilities 0.2 and 0.8 displayed with heights 0.2 and 0.4. |

### New tool Scopes

| Descriptor | Relation | Definition | Example |
| --- | --- | --- | --- |
| `ToolScope` | root | Physical or digital instruments, devices, and software tools supplied or required to perform a task. | A ruler used to measure a segment, a balance scale comparing masses, or graphing software used to inspect a function. |
| `MeasurementTool` | `partOf ToolScope` | An instrument, device, or representation of one used to determine or compare measurable quantities. | A ruler aligned with a segment, a protractor measuring an angle, a balance scale comparing masses, or a clock showing a time of day. |
| `DigitalTool` | `partOf ToolScope` | Digital devices or software applications, including explicit representations of them, supplied or used as tools in a task. | Software used to investigate successive matrix products, a graphing utility plotting functions, or a calculator evaluating a trigonometric expression. |
| `SoftwareTool` | `specializes DigitalTool` | Software applications or environments, including explicit representations of them, supplied or used to carry out a task. | A spreadsheet application used to compute successive iterates; a supplied screenshot of an algebra system's factorization output. |
| `NumericalCalculator` | `specializes DigitalTool` | A digital tool that evaluates numerical expressions and functions. | A calculator used to approximate sin(35 degrees). |
| `DigitalGraphingTool` | `specializes SoftwareTool` | Software for plotting and exploring mathematical relationships in a coordinate system. | Plotting two functions and adjusting the viewing window to investigate their intersections. |
| `DigitalAlgebraTool` | `specializes SoftwareTool` | Software for manipulating symbolic mathematical expressions and relations. | Factoring x^2 + 5x + 6 symbolically. |
| `Spreadsheet` | `specializes SoftwareTool` | Software with a grid of cells whose formulas reference values and recalculate dependent results. | Successive rows computing Newton iterates from the preceding row. |
| `DigitalGeometryTool` | `specializes SoftwareTool` | Interactive software for constructing and exploring geometric objects and their dependencies as objects or parameters change. | Moving a triangle vertex while its constructed perpendicular bisectors update. |
| `StatisticalTool` | `specializes SoftwareTool` | Software for computing statistical summaries, fitting models, or performing statistical inference from data. | Selecting a t-test for a dataset and interpreting the reported p-value. |

These tool types may overlap in a task. A handheld graphing calculator can support
`DigitalTool` for its general tool context and `DigitalGraphingTool` for its software functionality.
A multifunction application can support several software specializations, according to the
modes evidenced in the task rather than every advertised product feature.

`NumericalCalculator` remains directly under `DigitalTool`: both a handheld calculator and a
calculator application qualify. Compose it with `SoftwareTool` when an application is evident.
`DigitalClock` similarly identifies the display convention without forcing a software application.
The final merge refinement removed the separate `DigitalDevice` descriptor; general device
contexts remain covered by `DigitalTool`.

### Existing measurement-tool relations

The following existing descriptors gain `specializes MeasurementTool` while retaining their
measurement-family placement and existing integrations:

| Existing descriptors | Retained `partOf` parent |
| --- | --- |
| `AnalogClock`, `Calendar`, `DigitalClock`, `SandClock`, `Stopwatch`, `Sundial` | `TimeMeasurement` |
| `BalanceScale`, `DigitalScale` | `WeightMeasurement` |
| `LaserRuler`, `PhysicalRuler`, `Tapemeter` | `LengthMeasurement` |
| `Protractor`, `TriangleRuler` | `AngleMeasurement` |
| `Thermometer` | `TemperatureMeasurement` |

`DigitalClock` also specializes `DigitalTool`. `DigitalScale` specializes `DigitalTool` as
well as `MeasurementTool`; its definition explicitly covers a digital weighing device or a
representation of one. Both actual instruments and depicted instruments/readouts can establish
the applicable context. A bare supplied measurement does not establish which tool produced it.
The `MeasurementTool` definition therefore includes representations of instruments without
requiring graduation marks.

## Sign and variation tables

The new Scopes identify interval-based tabular conventions. Existing knowledge remains sufficient:

| Task | Existing knowledge to compose with the representation |
| --- | --- |
| Read or complete signs of a function | `FunctionSign` and relevant domain/zero knowledge |
| Describe increase, decrease or constancy | `FunctionMonotonicity` |
| Interpret extrema or endpoint behavior | `FunctionExtrema` and the applicable limit concepts |
| Derive variation from derivative signs | `DerivativeSignAnalysis`, with `DerivativeFunction` or `HigherOrderDerivative` as relevant |
| Justify a stationary extremum | `DerivativeExtremumTest`, with its required hypotheses |

The Ability distinguishes interpreting, constructing, completing or correcting the representation.
No new sign-analysis or variation-analysis Area is proposed.

A sign row for f' is about the signs of f'; its implications for f require derivative knowledge.
A variation table may include a derivative sign row, but that row is not mandatory. Combined
tables can carry both new Scopes when both encodings are relevant; they are not disjoint types.

Acceptance cases and boundaries:

- A finite table of sampled values remains `TabularAlgebraicRepresentation`. Increasing sample
  values alone do not establish monotonicity between the samples and do not make a variation table.
- In the rational-expression example, -2 is an excluded input, not a zero. A boundary limit
  need not be an attained value.
- A zero derivative alone does not establish an extremum: f(x) = x^3 at zero is a counterexample.
- Variation arrows summarize increase or decrease; they are not literal graph segments or slopes.
- A sign chart drawn on a number line without tabular organization remains graphical representation.
- Sign and variation tables concern algebraic properties, so they do not specialize the empirical
  `DataTable` Scope.

## Theoretical probability diagrams

Only the probability-histogram encoding needs a new Scope in this batch. Existing Areas and
graphical representation cover the other audited displays.

| Display | What encodes probability | Recommended composition |
| --- | --- | --- |
| Probability histogram | Bar area; height is probability divided by width | `ProbabilityHistogram` with the relevant distribution knowledge |
| Discrete mass graph | Point, stem or column height at an outcome | `ProbabilityMassFunction` + `GraphicalAlgebraicRepresentation`; add `ProbabilityRepresentation` when that broader context is useful |
| Probability density graph | Area under the curve over the event interval | `ProbabilityDensityFunction` + `GraphicalAlgebraicRepresentation` |
| Cumulative distribution graph | Ordinate F(x) = P(X <= x) | `CumulativeDistributionFunction` + `GraphicalAlgebraicRepresentation` |
| Empirical histogram | Observed frequency or relative frequency in each interval | Existing `Histogram` with `FrequencyDistribution` or `RelativeFrequency` |

The existing empirical `Histogram` and `DataRepresentation` definitions remain unchanged.
Normalizing observed frequencies does not by itself turn an empirical display into a theoretical law.
An empirical histogram overlaid with a model density should be interpreted layer by layer.

For a discrete probability histogram with unit-width cells, both height and area numerically
equal the outcome probability. The cell around a discrete outcome does **not** imply a uniform
continuous distribution within that cell. Selecting half such a cell does not yield half the
discrete outcome probability. Conversely, arbitrary-width columns whose heights encode masses
are not necessarily probability histograms.

For intervals [0,1) and [1,3) assigned probabilities 0.2 and 0.8, area-coded heights must be
0.2 and 0.4. Heights 0.2 and 0.8 would instead produce total area 1.8. Histogram and density
heights can exceed 1; probabilities cannot. A CDF's area is not the probability supplied by its
ordinate, and a density's height is not a point probability. Nor does every continuous distribution
necessarily have a density; the new Scope does not change the existing distribution definitions.

No `BinomialHistogram`, density-graph or cumulative-graph subtype is needed. Distribution type
and representation compose independently. A bell-shaped image alone does not establish a
normal probability model.

## Digital-tool context and evidence

The tool families describe context independently of mathematical knowledge. `DigitalTool`
includes digital equipment, software and their explicit representations. `SoftwareTool` identifies
the narrower application or environment context, including an explicit representation of it.
Software functionality can be embedded in a handheld device; its presence must be evidenced
before selecting a software-specific claim.

| Observable situation | Scope decision and remaining knowledge |
| --- | --- |
| A supplied calculator evaluates a trigonometric expression | `NumericalCalculator`; add `SoftwareTool` for an evidenced calculator application |
| A graphing environment is used to investigate intersections | `DigitalGraphingTool` and the relevant graphical Scope; approximate intersections are not automatically exact solutions |
| A printed graph without attributed tool use | Graphical representation only; hidden rendering software supplies no tool evidence |
| A spreadsheet contains formulas for Newton iteration | `Spreadsheet` plus existing iteration knowledge; a static table of the same values alone is insufficient evidence of a spreadsheet |
| A linked geometry construction updates when a vertex moves | `DigitalGeometryTool`; retain the actual geometric knowledge or construction technique |
| A task explicitly requests suitable software without naming its kind | The eligible general `SoftwareTool`; do not infer a narrower application type |
| A task specifies a digital tool without identifying hardware or software | The eligible general `DigitalTool` |
| A pictured digital scale supplies a reading | `DigitalScale`, supporting `DigitalTool` and `MeasurementTool`; interpreting the picture does not imply operating a physical scale |
| A numerical clock display appears without identifying its medium | `DigitalClock`; do not infer hardware or software from the numerals alone |
| A software output is explicitly supplied for interpretation | The evidenced tool Scope can apply; this does not prove the learner can operate that tool |

Use existing `ProcedureApplicability`, `Evaluation` and `ErrorDetection` where the actual
performance is choosing a method, evaluating output or identifying an error. Availability of a
tool does not by itself demonstrate these performances. A CAS factorization does not alone
demonstrate a learner's factorization reasoning; a statistical command does not demonstrate
knowledge of model assumptions.

Digital geometry may support linked graph and parameter exploration as well as constructions.
A curriculum's explicit dynamic-geometry environment can therefore coexist with `DigitalGraphingTool`
when both descriptions are evidenced. A three-dimensional environment composes with existing
`ThreeDimensional`; it does not need a separate 3D-software child.

Tool outputs retain their evidence limits. `ComputedEvidence` and `SimulationEvidence` can identify
the basis of a claim where appropriate. Finite numerical experiments, plotted samples and simulated
frequencies do not by themselves justify untested cases or an infinite-process guarantee. This carries forward the
[previous batch's inference boundary](vector-sums-sequence-limits-draft.md).

Programming knowledge is deliberately excluded from the current extension scope: assignment,
types, control flow, lists, computer functions and code implementation are not pending ontology
work. Mathematical algorithms and digital-tool contexts remain in scope. A tool Scope does not
establish programming knowledge or general software-operation proficiency; see the
[programming scope decision](coverage-audit-2026-10-21.md#programming-excluded-from-the-current-extension-scope).

## Curriculum mappings and source limits

These are proposed resolutions of the representation/tool-context findings, not changes to the
historical audit statuses and not a claim of complete curriculum coverage.

| Audited requirement | Proposed resolution and boundary |
| --- | --- |
| France `FR-P1-AUTO05` | Use a function's graph to determine its sign or construct its variation table. Graphical sign reading is already covered; the broader tabular parent and `VariationTable` supply the missing table convention. This line does not explicitly mandate a sign table. The audit paraphrase is corrected accordingly. |
| France `FR-TLE-FUN04` | `VariationTable` with the existing function/derivative knowledge supports sketching f from variation tables of f, f' or f''. |
| CCSS F-IF.B.4 and F-IF.B.6 | More specific table contexts remain available alongside ordinary value tables. CCSS does not mandate the French variation-table convention. |
| Bavaria `BAV-PR1`, `BAV-12-2-02`, `BAV-12-2-05`, `BAV-13-2-01` | `ProbabilityHistogram` supplies the missing area-coded theoretical display. Density and CDF plots retain existing compositions. |
| Bavaria `BAV-13-2-02` and `BAV-13-2-03` | Retain empirical `Histogram` for measured bell-shaped distributions and existing density/CDF graph composition for the model. |
| CCSS S-MD.A.1 | Existing PMF/graph composition already covers theoretical distribution graphs; the new Scope identifies a particular encoding. |
| CCSS MP5 | The calculator and five software-function Scopes reflect explicitly named tool kinds. Strategic choice and recognition of tool limitations still need the appropriate knowledge and Abilities. |
| Bavaria `BAV-PR2`, `BAV-11-4_2-05` | General digital tools and the specific spreadsheet, graphing and dynamic-geometry modes fill the context distinction, including Newton iteration in a spreadsheet. |
| Bavaria enrichment `BAV-V-R1`, `BAV-V12-1-06`, `BAV-V12-3-05` | Generic software requirements can use `SoftwareTool` without inventing a specific application type. |
| Bavaria enrichment `BAV-V12-2-05`, `BAV-V12-5-03` | Dynamic-geometry and statistical-software contexts have explicit Scopes. |
| France `FR-P1-GENERAL01`, `FR-TLE-GENERAL01`, `FR-EXP-GENERAL01` | Software-based experimentation and visualization gain tool context. Teacher demonstrations do not imply learner operation proficiency; programming requirements are deliberately excluded from this extension scope, not claimed as covered. |

Primary sources checked for this proposal:

- [French première programme, pp. 1–2 and 5](https://www.education.gouv.fr/sites/default/files/document/Annexe%20%E2%80%93%20Programme%20d%26%23039%3Benseignement%20de%20sp%C3%A9cialit%C3%A9%20de%20math%C3%A9matiques%20de%20la%20classe%20de%20premi%C3%A8re%20de%20la%20voie%20g%C3%A9n%C3%A9rale-515408.pdf): software use and the graphical-sign/variation-table requirement.
- [French terminale programme, pp. 2–3 and 12](https://eduscol.education.gouv.fr/sites/default/files/document/spe246annexe1158907pdf-84159.pdf): digital activity and variation tables for functions and derivatives.
- Official Bavarian [grade 11](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/11/mathematik), [grade 12](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/12/mathematik/regulaer), [grade 13](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium%20/13/mathematik), and [grade 12 enrichment](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/mathematik/vertieft): probability diagrams and specified or generic software use.
- Official CCSS [interpreting functions](https://www.thecorestandards.org/Math/Content/HSF/IF/), [using probability to make decisions](https://www.thecorestandards.org/Math/Content/HSS/MD/), and [MP5](https://www.thecorestandards.org/Math/Practice/MP5/): graphical/tabular distributions and strategic tool use.
- [Berkeley Stat20 probability histograms](https://stat20.berkeley.edu/spring-2026/3-generalization/03-probability-dsns/notes.html#probability-histograms) and [NIST histogram guidance](https://www.itl.nist.gov/div898/handbook/eda/section3/histogra.htm): theoretical versus empirical displays and probability/relative-frequency area encoding.

The Bavarian canonical routes have been affected by maintenance; the official alternate routes
above provide accessible/indexed programme text. This does not establish freshness of every
canonical page. The canonical-source recheck remains a separate audit task. French course-year
and future-programme boundaries remain those recorded in the [French audit](coverage-audit-france.md).

## Alternatives and deferred work

1. **Broaden the tabular parent only.** This is valid but cannot distinguish sampled value tables
   from interval sign or variation conventions as precisely. The two specializations are recommended.
2. **Add more probability display subtypes.** A probability-mass diagram would provide specificity,
   but the audited tasks already compose from PMF and graphical representation. Density/CDF-specific
   Scopes and distribution-specific diagrams are deferred unless a concrete labeling need emerges.
3. **Separate hardware into its own family.** The reviewed draft introduced `DigitalDevice`,
   but the final merge removed it. `DigitalTool` remains the common selectable parent, with
   `SoftwareTool` supplying the narrower software context. Functional calculator and clock contexts
   remain under the common parent. Graphing, algebra, geometry, spreadsheet and statistics contexts
   specialize `SoftwareTool`.
4. **Add simulation or narrower device categories.** Digital simulation can compose
   `SoftwareTool` or `DigitalTool`, as evidenced, with `SamplingSimulation` and, where relevant,
   `SimulationEvidence`. Programming, including the code-implementation portion of `BAV-V12-4-01`,
   is deliberately excluded under the [scope decision](coverage-audit-2026-10-21.md#programming-excluded-from-the-current-extension-scope).
   General software-operation proficiency is not supplied by a tool Scope. Product brands,
   narrower hardware types, restricted-tool modes and additional construction-tool organization
   remain outside this batch.

## Adoption and review checks

Twelve of the thirteen additions are eligible; `ToolScope` is an organizational node.
Existing labels retain eligibility. Existing measurement descriptors gain the tool-family
specializations recorded above, so their broader inferred tool claims change even though their
measurement-family homes remain intact. Ordinary tabular content keeps its meaning.
The revised tabular definition broadens the accepted representation rather than requiring
existing value tables to be relabeled. No automatic migration from empirical `Histogram` to
`ProbabilityHistogram` or from arbitrary digital content to a tool Scope is appropriate.

Implementation checks cover the editor's entity and relation order, the existing source
layout, the authored graph and documentation, and the repository's full build. Before
closing the audited gaps, exercise the representative tasks and counterexamples above.
Programming and encryption/key concepts are deliberately excluded. Markov-chain absorption
and convergence are the next planned mathematics batch; source-data repairs remain separate.

## Proposal verification record — 2026-10-22

Before the tool-family refinements, a temporary candidate graph built from the original proposal passed the shared ontology assessment
with no findings: **1,431 descriptors and 7,595 authored assertions**. All ten additions were eligible;
no existing descriptor changed eligibility. All 19 explicitly checked knowledge/Ability/Scope IDs
used in the compositions existed and were eligible in the baseline.

All **49 Markdown files** passed documentation validation, including local links and anchors.
Independent semantic reviews checked the three proposed families, probability encodings,
curriculum wording and evidence boundaries. The French row correction preserves its gap status.

At the proposal stage, the four authored Turtle files remained byte-identical to `main` at
`e6dba8b`, and source validation passed on that baseline. These checks validated the proposal,
not source implementation or full curriculum acceptance.

## Implementation and adoption — 2026-10-22

The merged implementation adds thirteen Scopes to [the authored Scopes](../../core-scopes-math.ttl):
three representation Scopes and ten tool descriptors, including the `ToolScope` organizer.
The current definition tables and hierarchy incorporate the final review refinement: `SoftwareTool`
remains a specialization of `DigitalTool`, and the separate `DigitalDevice` descriptor is removed.
No new Area or Ability is added.

`SignTable` and `VariationTable` specialize `TabularAlgebraicRepresentation`;
`ProbabilityHistogram` specializes `ProbabilityRepresentation`. `ToolScope` organizes the
selectable `MeasurementTool` and `DigitalTool` families. `SoftwareTool` specializes `DigitalTool`;
the five software-function Scopes specialize `SoftwareTool`. `NumericalCalculator`, `DigitalClock`
and `DigitalScale` are directly under `DigitalTool`.

Among descriptors already on main, the definition and example of `TabularAlgebraicRepresentation`
broaden to include interval signs and variation. Fourteen measurement descriptors gain
`MeasurementTool` specialization, with `DigitalClock` also specializing `DigitalTool` and
`DigitalScale` specializing `DigitalTool`. The scale definition makes its digital-device
meaning explicit. Existing measurement `partOf` placements and integrations are preserved.
Existing empirical `Histogram`, density/CDF knowledge and construction-tool families remain unchanged.

The resulting ontology contains **1,434 descriptors and 7,626 authored assertions**. Twelve
new Scopes are eligible, `ToolScope` is organizational, and every descriptor already on main
retains its labeling eligibility. The implementation does not require an automatic relabeling
of value tables, empirical histograms or arbitrary digital content. Represented tool context
does not establish learner proficiency in operating the device or software.

### Pre-merge verification

The reviewed device/software draft at `5b2c8e8`, before the final simplification, passed the
following checks on 2026-10-22:

- All fourteen then-proposed new-descriptor rows agreed with the source definitions, examples and
  parents. Ontology assessment had no findings, and existing label eligibility was preserved.
- The Scope Turtle round-tripped byte for byte through the editor's parser and serializer,
  including entity order, relation order and sorted relation targets.
- All 48 repository Markdown files passed documentation validation. Independent review confirmed
  the software placements, device/measurement composition and represented-tool boundaries.
- The full `docker build . --output dist --progress plain` passed: TypeScript tests and package
  checks, source/documentation validation, Python lint and typing, all 49 Python tests, and
  wheel, rebuilt sdist, optional-parser and typed-consumer verification.

The final refinement at `444e62f` removed `DigitalDevice` and made `DigitalScale` specialize
`DigitalTool` directly, retaining its `MeasurementTool` specialization. PR #84 merged that
refinement at `d04c0d3`; the current tables and counts above describe the merged result.

### Merged-source and release verification

Verification at `d04c0d3` confirmed the current totals of 1,434 descriptors and 7,626 authored
assertions. Source validation passed, and the Scope Turtle round-tripped byte for byte through
the editor's parser and serializer. The [release workflow for the merged commit](https://github.com/christian-bick/edugraph-ontology/actions/runs/39702258647)
completed successfully.

Curriculum-level acceptance remains separate: the historical audit judgments are not changed
by source validation. Programming is deliberately excluded from the current mathematics
extension scope rather than scheduled as a follow-up; tool Scopes do not establish general
software-operation proficiency.
