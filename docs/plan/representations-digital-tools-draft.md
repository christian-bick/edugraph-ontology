# Sign and variation tables, probability diagrams and digital tools

Status: **implemented draft for review**, 2026-10-22, on `codex/representations-digital-tools`.
Baseline: `main` at `e6dba8b06e03bef49e62a91c80053e3ababe4cca`, after
[PR #83](https://github.com/christian-bick/edugraph-ontology/pull/83);
1,421 descriptors and 7,546 authored assertions.

This develops batch 3 of the [school curriculum audit](coverage-audit-2026-10-21.md).
The implementation adds **ten Scopes**, broadens the existing
`TabularAlgebraicRepresentation`, and reuses existing mathematical Areas and Abilities.
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

DigitalMathematicsTool [new Scope root; selectable]
├─ S NumericalCalculator [new]
├─ S GraphingTool [new]
├─ S ComputerAlgebraSystem [new]
├─ S Spreadsheet [new]
├─ S DynamicGeometrySoftware [new]
└─ S StatisticalSoftware [new]
```

The general digital-tool Scope remains selectable because some requirements specify suitable
software without prescribing its type. Specialization children preserve this eligibility under
[ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
No additional organizational layer is needed. Existing physical measurement and construction
tools retain their homes.

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

### New digital-tool Scopes

| Descriptor | Relation | Definition | Example |
| --- | --- | --- | --- |
| `DigitalMathematicsTool` | root | A digital tool supplied or explicitly used for mathematical calculation, representation, or investigation. | Suitable mathematics software used to investigate successive matrix products. |
| `NumericalCalculator` | `specializes DigitalMathematicsTool` | A digital tool that evaluates numerical expressions and functions. | A calculator used to approximate sin(35 degrees). |
| `GraphingTool` | `specializes DigitalMathematicsTool` | A digital tool that plots and explores mathematical relationships in a coordinate system. | Plotting two functions and adjusting the viewing window to investigate their intersections. |
| `ComputerAlgebraSystem` | `specializes DigitalMathematicsTool` | A digital tool that manipulates symbolic mathematical expressions and relations. | Factoring x^2 + 5x + 6 symbolically. |
| `Spreadsheet` | `specializes DigitalMathematicsTool` | A digital grid of cells whose formulas reference values and recalculate dependent results. | Successive rows computing Newton iterates from the preceding row. |
| `DynamicGeometrySoftware` | `specializes DigitalMathematicsTool` | Interactive software for constructing and exploring geometric objects and their dependencies as objects or parameters change. | Moving a triangle vertex while its constructed perpendicular bisectors update. |
| `StatisticalSoftware` | `specializes DigitalMathematicsTool` | A digital tool that computes statistical summaries, fits models, or performs statistical inference from data. | Selecting a t-test for a dataset and interpreting the reported p-value. |

These tool types may overlap. A multifunction application can supply a graphing, symbolic,
spreadsheet, statistical or geometry environment; label the modes evidenced in the task,
not every capability advertised for the product. A graphing calculator need not automatically
receive a numerical-calculator label when only its graphing mode matters.

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
necessarily have a density; the proposed Scope does not change the existing distribution definitions.

No `BinomialHistogram`, density-graph or cumulative-graph subtype is needed. Distribution type
and representation compose independently. A bell-shaped image alone does not establish a
normal probability model.

## Digital-tool context and evidence

The new root describes the tool context, independently of representation and mathematical knowledge.
Its children describe useful tool kinds or modes, not manufacturers, device form factors or topics.

| Observable situation | Scope decision and remaining knowledge |
| --- | --- |
| A supplied calculator evaluates a trigonometric expression | `NumericalCalculator`; the relevant operation/function knowledge remains separate |
| A graphing environment is used to investigate intersections | `GraphingTool` and the relevant graphical Scope; approximate intersections are not automatically exact solutions |
| A printed graph without attributed tool use | Graphical representation only; hidden rendering software supplies no tool evidence |
| A spreadsheet contains formulas for Newton iteration | `Spreadsheet` plus existing iteration knowledge; a static table of the same values alone is insufficient evidence of a spreadsheet |
| A linked geometry construction updates when a vertex moves | `DynamicGeometrySoftware`; retain the actual geometric knowledge or construction technique |
| A task explicitly requests suitable software without naming its kind | The eligible general `DigitalMathematicsTool`; do not infer a narrower tool |
| A software output is explicitly supplied for interpretation | The evidenced tool Scope can apply; this does not prove the learner can operate that tool |

Use existing `ProcedureApplicability`, `Evaluation` and `ErrorDetection` where the actual
performance is choosing a method, evaluating output or identifying an error. Availability of a
tool does not by itself demonstrate these performances. A CAS factorization does not alone
demonstrate a learner's factorization reasoning; a statistical command does not demonstrate
knowledge of model assumptions.

Digital geometry may support linked graph and parameter exploration as well as constructions.
A curriculum's explicit dynamic-geometry environment can therefore coexist with `GraphingTool`
when both descriptions are evidenced. A three-dimensional environment composes with existing
`ThreeDimensional`; it does not need a separate 3D-software child.

Tool outputs retain their evidence limits. `ComputedEvidence` and `SimulationEvidence` can identify
the basis of a claim where appropriate. Finite numerical experiments, plotted samples and simulated
frequencies do not by themselves justify untested cases or an infinite-process guarantee. This carries forward the
[previous batch's inference boundary](vector-sums-sequence-limits-draft.md).

Programming knowledge remains open: assignment, types, control flow, lists, functions and implementing
an algorithm are not supplied by a digital-tool Scope. Nor does this proposal settle general software
operation proficiency. Those belong in the later computing-foundations discussion.

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
| CCSS MP5 | The six tool modes reflect explicitly named tool kinds. Strategic choice and recognition of tool limitations still need the appropriate knowledge and Abilities. |
| Bavaria `BAV-PR2`, `BAV-11-4_2-05` | General digital tools and the specific spreadsheet, graphing and dynamic-geometry modes fill the context distinction, including Newton iteration in a spreadsheet. |
| Bavaria enrichment `BAV-V-R1`, `BAV-V12-1-06`, `BAV-V12-3-05` | Generic software requirements can use `DigitalMathematicsTool` without inventing a specific application type. |
| Bavaria enrichment `BAV-V12-2-05`, `BAV-V12-5-03` | Dynamic-geometry and statistical-software contexts have explicit Scopes. |
| France `FR-P1-GENERAL01`, `FR-TLE-GENERAL01`, `FR-EXP-GENERAL01` | Software-based experimentation and visualization gain tool context. Teacher demonstrations do not imply learner operation proficiency; programming remains a separate gap. |

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
3. **Introduce an organizational ToolScope.** `ToolScope > partOf DigitalMathematicsTool` with the same
   specializing children would be valid, but currently adds a single-child layer. A root named
   `DigitalToolScope` with specializing children is also a valid naming alternative. Making all tool
   kinds constituent children of the general digital descriptor would make it ineligible and lose the
   supported generic software context, so that structure is not recommended.
4. **Add simulation, programming or hardware categories.** Digital simulation can compose the general
   tool Scope with `SamplingSimulation` and, where relevant, `SimulationEvidence`. Programming and
   software-operation knowledge need separate treatment, including `BAV-V12-4-01`; brands, devices,
   restricted-tool modes and a reorganization of physical instruments are outside this batch.

## Adoption and review checks

All ten additions are eligible. Every new edge is `specializes`, and no existing
relation changes. Existing labels retain eligibility; ordinary tabular content keeps its meaning.
The revised tabular definition broadens the accepted representation rather than requiring
existing value tables to be relabeled. No automatic migration from empirical `Histogram` to
`ProbabilityHistogram` or from arbitrary digital content to a tool Scope is appropriate.

Implementation checks cover the editor's entity and relation order, the existing source
layout, the authored graph and documentation, and the repository's full build. Before
closing the audited gaps, exercise the representative tasks and counterexamples above. Programming,
cryptography, optional Markov/enrichment decisions and source-data repairs remain on the roadmap.

## Proposal verification record — 2026-10-22

A temporary candidate graph built from the definition tables passed the shared ontology assessment
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

The draft branch adds the ten Scopes defined above to [the authored Scopes](../../core-scopes-math.ttl).
`SignTable` and `VariationTable` specialize `TabularAlgebraicRepresentation`;
`ProbabilityHistogram` specializes `ProbabilityRepresentation`. `DigitalMathematicsTool` is a
selectable root with six specializing children. No new Area, Ability or organizational node is added.

Among existing descriptors, only the definition and example of `TabularAlgebraicRepresentation`
change. Its identifier, parent and eligibility are preserved. The new wording includes interval
signs and variation alongside corresponding-value tables. Existing empirical `Histogram`, density
and cumulative-distribution knowledge, and physical tool families remain unchanged.

The resulting ontology contains **1,431 descriptors and 7,595 authored assertions**. All ten new
Scopes are eligible, and no existing descriptor changes labeling eligibility. The implementation
does not require an automatic relabeling of value tables, empirical histograms or digital content.
The task's actual representation and supplied or evidenced tool use determine the applicable claims.

Implementation validation passed on 2026-10-22:

- All ten Scopes match the approved definitions, examples and relations. Only the definition and
  example of `TabularAlgebraicRepresentation` change among existing descriptors; ontology
  assessment has no findings, and existing eligibility is preserved.
- The Scope Turtle was serialized by the editor and round-trips byte for byte through its parser
  and serializer, including entity, relation and target ordering.
- Documentation validation passes for all 48 repository Markdown files. Independent semantic review
  found no issues with the family placements, examples or representation boundaries.
- The full `docker build . --output dist --progress plain` passes: TypeScript tests, source and
  documentation validation, package checks, Python lint and typing, all 49 Python tests, and
  wheel, rebuilt sdist, optional-parser and typed-consumer verification.

Curriculum-level acceptance remains separate: the historical audit judgments are not changed
by source validation, and programming and software-operation knowledge remain follow-up work.
