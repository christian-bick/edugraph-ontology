# EduGraph

EduGraph is an open education ontology to describe learning content in a simple and interoperable format. It is an
independent open source project to foster collaboration and data exchange across education organizations, both
non-profit and pro-profit.

### Example Usecases

Annotating learning content in the terms of the ontology allows for programmatically:

- identifying equivalent, complementary and related learning content
- describing learning journeys of students across distributed learning content
- reasoning about potential root causes of student performance issues

## Annotated Content and Models

EduGraph provides shared terms for annotating learning content. Classification models can help
identify those terms in content; embedding models can represent descriptors and their relationships
for comparison and search. Neither use depends on a particular model or application architecture.

See [Annotations and models](docs/annotations-and-models.md) for guidance on evidence, relation
meaning, and interpreting annotations across ontology versions.

## Releases

Ontology releases are published [here](https://github.com/christian-bick/edugraph-ontology/releases) on Github.

The ontology is currently published in Turtle (.ttl) and XML/RDF (.rdf) format. The source files use the turtle
format and all files for other formats are generated from these source files during release. More file formats can
be added upon demand.

## Ontology

**Authoring rules:** [Ontology development references](docs/README.md)

**Design rationale:** [Design Decisions with pedagogical & technological reasoning](DESIGN.md)

**Build and APIs:** [Developer Documentation](DOCS.md)

**Ontology Browser:** [A dedicated visualization tool for the ontology](https://edugraph-editor.web.app)

EduGraph is designed to support both human annotation and interpretation by language and
vision-language models.

It is therefore divided into two layers:

- **Core Ontology:** Curated for describing learning content with a set of terms organized along different dimensions.
- **Competency Ontology:** Generated for identifying broad competencies that apply specific solutions to a problem domain.

### Core Ontology

#### Foundations

The core ontology describes learning content by combining reusable claims across three dimensions.
Multiple terms in a dimension can apply together. Each annotation must be supported by observable
content; those claims allow applications to compare competencies and investigate related content.

The terms of each dimension are organized and defined within a taxonomy for each dimension.

The dimensions are:

- **Area:** The task, concept, or independently learned knowledge involved (e.g. _Multiplication_).
- **Ability:** The cognitive performance demanded (e.g. _ProcedureExecution_).
- **Scope:** The context or challenge within that task (e.g. _IntegerNumbers_ or _NumbersLarger1000_).

A competency description combines whichever descriptors express its meaning. The ontology imposes
no required dimension or descriptor count; applications define their own completeness requirements.
For example, _Multiplication_, _ProcedureExecution_, _IntegerNumbers_, and _NumbersLarger1000_
describe multiplication in a numeric context; they do not by themselves identify a particular
written algorithm. The core ontology describes observables, while named competencies group
meaningful combinations of those claims.

These concepts make it easy to build both classification models and embedding models, allowing AI models to reason over learning
content with high accuracy and speed. This is the necessary foundation for creating high-value recommendation systems and AI agents. 

#### Structure

Each dimension is organized through two explicit structural relations. `partOf` places a constituent
inside a broader field without implying that the constituent covers the whole. `specializes` identifies
a narrower form of the same observable concept and therefore supports inheritance to the more general
concept. For example, _Square_ specializes _Rectangle_, whereas a measurement instrument is only part
of its broader measurement context.

Both relations are subproperties of `structures`. Their inverses are `hasPart` and
`specializedBy`, under `structuredBy`. Moving from a broad field toward descendants,
composition may lead into specialization, but specialization must not lead back into composition.
See [the structural rules](docs/structure.md) for examples and path review.

This distinction allows precise and generic descriptions without treating every structural member as
a substitute for its containing field. Leaf status alone does not determine whether a concept is
an appropriate observable claim.

#### Logical Relations

However, terms in the ontology are not only organized along classic hierarchical relations, but are further described
through logical relations between each other. For example _IntegerMultiplications_ conceptually _expands_ the concept of
_IntegerAddition_. Such relations can be used as indicators for identifying natural learning paths (e.g. suggesting to 
teach addition before multiplication) or for adaptive testing (e.g. exploring if a student's weakness in executing long 
multiplication is rooted in multiplying small numbers or in executing long addition).

Such logical releations elevate ontologies to be more than a semantic standard of identifiers. They allow us to 
define a shared yet operationally distributed understanding of how various competencies are related with each other.

### Competency Ontology

#### Foundations

While the core ontology focuses on a mostly generic approach to describing learning material, the competency ontology uses
commonly used terms for well-known solution strategies to a specific problem domain.

#### Flavors

The core ontology seeks shared, distinguishable terms for observable claims, which can overlap through specialization or apply together. Competencies on the other hand, are typically described from an application
perspective and therefore largely influenced by context. 

That makes competencies inherently more likely to be influenced by purpose, culture and language, and that makes it way harder 
to agree on distinct competencies that collectively describe all areas of learning with great detail. At the same time, 
developing practical competencies is a fundamentally important part of learning.

EduGraph's solution for this issue is to define competencies as abstract concepts, but always in terms from the core ontology. 
This allows for different flavors of competency ontologies and at the same time makes it easy to map competencies between 
different flavors.

#### Automated Generation

Defining competencies in the terms of the core ontology further allows for an automated approach of identifying and naming
competencies with the help of embeddings, making it substantially more likely that such solutions successfully converge to 
a mutually exclusive and collectively exhaustive set of competencies.

#### Relations Inheritance

Defining competencies through core descriptors makes their shared claims and specialization
relationships available for comparison. Deriving progression between whole competencies requires
an explicit inference rule; `involves` does not copy every descriptor relation automatically.
Progression coverage and propagation through structural or specialization paths remain a separate
refinement task. Existing relations are evidence to review, not the specification of that rule.

## Contributions

We are happy to develop this project as a community and want to make sure that every potential 
contributor fully understands how to contribute in a meaningful way. Before contributing, **please create
a Github issue** to spark the discussion.

The ontology is defined in the web ontology language (OWL). To ensure easy adoption with any tools, databases
and libraries that support OWL and RDF, we provide various file formats in the releases.

When editing the ontology, only edit the source files (.ttl) in the repository. All other file formats will be 
automatically generated upon release. It is recommended to use [Protege](https://protege.stanford.edu/) for editing
and to use one of the shipped reasoners for validation purposes.

Pull requests can be submitted via the usual Github workflow using reasonably small iterative changesets. Pull requests
will only be merged when changes were previously approved on a ticket.

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.
