# EduGraph

EduGraph is an open competency ontology to describe learning content in a simple and interoperable format. It is an
independent open source project to foster collaboration and data exchange across education organizations, both
non-profit and for-profit.

### Focus Areas

**Primary & Secondary Education**: EduGraph focuses on primary and secondary education up to the typical university
entry level, but is in no way limited to it.

**STEM & Language**: EduGraph's current focus is **Mathematics** with plans for other STEM subjects and language for
native speakers and second-language learners alike.

### Example Usecases

Annotating learning content in the terms of the ontology allows for programmatically:

- identifying equivalent, complementary and related learning content
- describing learning journeys of students across distributed learning content
- reasoning about potential root causes of student performance issues

## Annotated Content and Classification Models

EduGraph provides shared terms for annotating learning content. Classification models can help
identify those terms in content; embedding models can represent descriptors and their relationships
for comparison and search. In all of this, EduGraph stays agnostic to a particular base model or
application architecture.

See [Annotations and models](docs/annotations-and-models.md) for guidance on evidence, relation
meaning, and interpreting annotations across ontology versions.

## Releases

Each [GitHub release](https://github.com/christian-bick/edugraph-ontology/releases) provides
ontology files and client libraries for the same snapshot. Choose the artifact that fits your
workflow; [release notes](docs/releases/) describe changes and adoption considerations.

| Artifact | Useful for | Documentation |
| --- | --- | --- |
| **Turtle sources** — four `.ttl` files | Reading or editing the authored ontology, or loading its schema and descriptor collections into RDF tools | [Source files](DOCS.md#2-directory-structure) |
| **Combined RDF/XML** — `core-ontology-math.rdf` | Importing the complete generated ontology into tools such as Protégé or a triple store | [Build and formats](DOCS.md#3-build--generation-pipeline) |
| **TypeScript library** — `edugraph-ts.tgz` | JavaScript/TypeScript applications, including Node.js services and browser bundles | [Installation and API guide](libraries/typescript/README.md) |
| **Python wheel** — `edugraph_py-<version>-py3-none-any.whl` | Installing the typed Python library for notebooks, data pipelines, annotation, and model workflows | [Installation and API guide](libraries/python/README.md) |
| **Python source distribution** — `edugraph_py-<version>.tar.gz` | Building the Python library from source, with the generated ontology data already included | [Packaging details](libraries/python/README.md#6-compatibility-references-and-development) |

Programming libraries provide typed terms and definitions, relation traversal, specialization queries,
labeling-eligibility checks, and algorithms for constraint expansion and incompatibility checks
based on recorded implications and contradictions. They work with the released ontology or a
supplied snapshot. TypeScript additionally provides ontology and documentation validation.

See the [API overview](DOCS.md#6-client-libraries-api--relations-usage) and [constraint algorithms](DOCS.md#64-deduction-helpers-constraint-expansion) for examples and semantics.

## Ontology

**Authoring rules:** [Ontology development references](docs/README.md)

**Design rationale:** [Design Decisions with pedagogical & technological reasoning](DESIGN.md)

**Build and APIs:** [Developer Documentation](DOCS.md)

**Ontology Browser:** [A dedicated visualization tool for the ontology](https://edugraph-editor.web.app)

### Elements and Competency Compounds

Think of EduGraph terms as **elements** and competencies as **molecules**. EduGraph defines
reusable elements, their properties, and their relationships. Curriculum authors and applications
combine these elements into competency compounds that express what their learners should know
or be able to do.

The elements describe three dimensions:

| Dimension | What it describes | Example |
| --- | --- | --- |
| **Area** | The knowledge, concept, or activity involved | `Multiplication` |
| **Ability** | The cognitive performance involved | `ProcedureExecution` |
| **Scope** | The context or conditions in which it applies | `IntegerNumbers` |

Together, these example terms describe carrying out multiplication with integers. A compound
can include several terms from any dimension. Because the terms apply together, adding terms
that introduce new requirements makes a compound more specific; keeping only a subset can
express a more general competency. Our current descriptions are simple, flat sets: each selected
term occurs once, without ordering or repeated occurrences. More sophisticated compositions
can be introduced later.

### Describing Existing Curricula and Standards

We already use these compounds to describe competencies from the
[Common Core State Standards in the dataset project](https://github.com/christian-bick/edugraph-dataset/tree/main/src/spec/ccss).
The same approach can be applied to any curriculum, educational standard, or proprietary
competency ontology: map its competencies to combinations of EduGraph terms while retaining
its identifiers, names, and existing relations. Shared term subsets describe broader competencies,
while more specific children add requirements, naturally supporting tree-like structures. A Common
Core mapping can, for example, refine a general multiplication competency by number context or
cognitive demand. These shared meanings also support comparison across different systems.

Each element retains its identity, meaning, properties, and relations wherever it appears.
Consumers can therefore reuse the facts already expressed at element level and the conclusions
supported by the [applicable inference rules](docs/relations.md#ont-r4--state-the-inference-rule-separately).
Those relationships provide a foundation for comparing compounds; they do not need to be
redeclared for every competency. Consumers add relationships specific to the combinations,
especially statistical relationships such as how performance on one competency predicts
performance on another.

Adoption can proceed incrementally. Start with the term mappings and preserve the existing
competency relations. Later, remove redundant assertions where a relation can already be
derived, or retain the original links as hypotheses for statistical validation. This preserves
the source system's knowledge while allowing its assumptions to be examined through a shared
vocabulary and evidence.

### Related Projects

The dataset and classification models put this approach into practice:

| Project | Purpose | GitHub | Hugging Face |
| --- | --- | --- | --- |
| **EduGraph Dataset** | Labeled exercise images, generation tools, and mappings from standards to term combinations | [Repository](https://github.com/christian-bick/edugraph-dataset) | [Dataset](https://huggingface.co/datasets/christian-bick/edugraph-exercises) |
| **EduGraph Classification Models** | Training and evaluation tools for models that identify Areas, Abilities, and Scopes in educational task images | [Repository](https://github.com/christian-bick/edugraph-classify) | [Published classifier](https://huggingface.co/christian-bick/EduGraph-Classifier-Qwen3.8-27B-GGUF) |

The dataset provides concrete examples of competency compounds and labeled content. Classifiers
can propose the same terms for existing learning materials, helping connect those materials to
a curriculum's mapped competencies. This supports adoption from both directions: translate the
competencies already defined by a system, and annotate the content already used within it.
Mappings and predictions can then be reviewed against the shared
[content-evidence guidance](docs/content-evidence.md).

## Contributions

We are happy to develop this project as a community and want to make sure that every potential 
contributor fully understands how to contribute in a meaningful way. Before contributing, **please create
a Github issue** to spark the discussion.

The ontology is defined in the web ontology language (OWL). To ensure easy adoption with any tools, databases
and libraries that support OWL and RDF, we generate various file formats in the releases as well as ontology types
for the supported programming languages.

We recommend the [EduGraph Editor](https://edugraph-editor.web.app) for authoring and reviewing
ontology changes. Built specifically for EduGraph, it combines visual editing, project-specific
validation, AI assistance, and GitHub issue tracking in one workflow. This keeps changes connected
to the ontology's rules and the issues they address.

[Protégé](https://protege.stanford.edu/) is also compatible and can be used to work directly with
the OWL/RDF ontology files. See the [editing workflows](DOCS.md#11-mapped-editing-workflows)
for details.

Pull requests can be submitted via the usual Github workflow using reasonably small iterative changesets. Pull requests
will only be merged when changes were previously approved on a ticket.

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.
