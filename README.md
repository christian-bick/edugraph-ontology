# EduGraph

EduGraph is an open education ontology to describe learning content in a simple and interoperable format. It is an
independent open source project to foster collaboration and data exchange across education organizations, both
non-profit and pro-profit.

### Example Usecases

Annotating leaning content in the terms of the ontology allows for programmatically:

- identifying equivalent, complementary and related learning content
- describing learning journeys of students across distributed learning content
- reasoning about potential root causes of student performance issues

## Related Projects

EduGraph is more than an ontology. It is also an ecosystem of tools to foster adoption in real world scenarios.
We have trained two model for EduGraph, one that labels learning material in the terms of the ontology and
another one that generates emebeddings for the those labels that take relationships into account to determine
similarity/distance between different sets of labels.

**Classification Model:** https://github.com/christian-bick/edugraph-classify-qwen3vl

**Embedding Model:** https://github.com/christian-bick/edugraph-embed

## Releases

Ontology releases are published [here](https://github.com/christian-bick/edugraph-ontology/releases) on Github.

The ontology is currently published in Turtle (.ttl) and XML/RDF (.rdf) format. The source files use the turtle
format and all files for other formats are generated from these source files during release. More file formats can
be added upon demand.

## Ontology

**Full breakdown:**  [Design Decisions with pedagocial & technological reasoning](DESIGN.md)

**Ontology Browser:** [A dedicated visualization tool for the ontology](https://edugraph-editor.web.app)

EduGraph is an Ontology designed with modern LLM capabilities in mind and intended to be used in tandem with
open source models like Qwen, Gamma or Kimi with excellent vision-language and reasoning capabilities.

It is therefore divided into two layers:

- **Core Ontology:** Curated for describing learning content with a set of terms organized along different dimensions.
- **Competency Ontology:** Generated for identifying broad competencies that apply specific solutions to a problem domain.

### Core Ontology

#### Foundations

The core ontology allows for describing learning content with a set of terms that are mutual exclusive and collectively
exhaustive. Accurately combining terms from different dimensions, learning content can be identified with high
confidence as equivalent, complementary or related, based on proper annotations alone.

The terms of each dimension are organized and defined within a taxonomy for each dimension.

The dimensions are:

- **Area:** An area within a discipline (e.g. _IntegerMultiplication_)
- **Ability:** A generally trainable ability (e.g. _ProcedureExecution_)
- **Scope:** A relevant involved setting (e.g. _NumbersLarger1000_)

Using the three example terms from above, we can already be relatively sure that the corresponding learning content would be
educating, training or testing students about what is regularly referred to as the competency of _long multiplication_. The goal of the
core ontology is to classify learning content with only a few terms of what is observable while competencies describe significant
clusters of these observables. 

These concepts make it easy to build both classification models and embedding models, allowing AI models to reason over learning
content with high accuracy and speed. This is the necessary foundation for creating high-value recommendation systems and AI agents. 

#### Structure

Each dimension is organized as it's own taxonomy in a hierarchical structure. For example, learning material that covers
_IntegerMultiplication_, implicitly also covers _IntegerArithmetic_, _Arithmetic_ and _Mathematics_.

This allows for more and less specific descriptions of learning material, e.g. explicitly describing specific instructions 
and exercises with precise terms while describing chapters or lectures with automatically derived generic terms.

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

It is relatively easy to find consent about a mutual exclusive and collectively exhausitve terminology for describing
what is observable through the core ontology. Competencies on the other hand, are typically described from an application 
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

Defining competencies in the terms of the core ontology also allows for competencies to inherit all logical relations from the core 
ontology. As a consequence, the competency ontology only needs to define factual relations that specifically apply to  
competencies. This drastically reduces the need for relations in the competency ontology itself and keeps it significantly 
easier to manage.

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
