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

Classification Model: https://github.com/christian-bick/edugraph-classify-qwen3vl

Embedding Model: https://github.com/christian-bick/edugraph-embed

## Releases

Ontology releases are published [here](https://github.com/christian-bick/edugraph-ontology/releases) on Github.

The ontology is currently published in Turtle (.ttl) and XML/RDF (.rdf) format. The source files use the turtle
format and all files for other formats are generated from these source files during release. More file formats can
be added upon demand.

## Goals

### Near Term

- Math: Cover basic math up to typical 4th grade level
- Literacy: Cover basic writing & reading up to typical 4th grade level

### Long Term

- Math: Cover typical curriculums up to 12th grade
- Physics: Cover typical curriculums up to 12th grade
- Computer Science: Cover typical curriculums up to 12th grade

## Ontology

EduGraph is an Ontology designed with modern LLM capabilities in mind and intended to be used in tandem with
open source models like Qwen, Gamma or Kimi with excellent vision-language and reasoning capabilities.

It is therefore divided into two layers:

- **Core Ontology:** Curated for describing learning content with a set of terms organized along different dimensions.
- **Skill Ontology:** Generated for identifying broad skills that apply specific solutions to a problem domain.

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
educating, training or testing students about what is regularly referred to as the skill of _long multiplication_. The goal of the
core ontology is to classify learning content with only a few terms of what is observable while skills describe significant
clusters of these observables. 

These concepts make it easy to build both classification models and embedding models, allowing AI models to reason over learning
content with high accuracy and speed. This is the necessary foundation for creating high-value recommendation systems and AI agents. 

#### Taxonomies

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
define a shared yet operationally distributed understanding of how various skills are related with each other.

#### Current State

The current data model of the core ontology is fairly well explored and relatively stable. It is designed to be
applicable to various disciplines and has been validated against a diverse set of scenarios already. However, the 
actual taxonomies and their logical relations are work in progress and likely to change frequently in the forseeable
future.

### Skill Ontology

#### Foundations

While the core ontology focuses on a mostly generic approach of describing learning material, the skill ontology uses
commonly used terms for well-known solution strategies to a specific problem domain.

#### Flavors

It is relatively easy to find consent about a mutual exclusive and collectively exhausitve terminology for describing
what is observable through the core ontology. Skills on the other hand, are typically described from an application 
perspective and therefore largely influenced by context. 

That makes skills inherently more likely to be influenced by purpose, culture and language, it that makes it way harder 
to agree on distinct skills that collectively describe all areas of learning with great detail. At the same time, 
developing practical skills is a fundamentally important part of learning.

EduGraph's solution for this issue is to define skills as abstract concepts, but always in terms from the core ontology. 
This allows for different flavors of skill ontologies and at the same time makes it easy to map skills between 
different flavors.

#### Automated Generation

Defining skills in the terms of the core ontology further allows for an automated approach of identifying and naming
skills with the help of embeddings, making it substantially more likely that such solutions successfully converge to 
a mutually exclusive and collectively exhaustive set of skills.

#### Relations Inheritance

Defining skills in the terms of the core ontology also allows for skills to inherit all logical relations from the core 
ontology. As a consequence, the skill ontology only needs to define factual relations that specifically apply to  
skills. This drastically reduces the need for relations in the skill ontology itself and keeps it significantly 
easier to manage.

#### Current State

The exact data model for defining skills is currently still experimental and likely to change in the near future.
It is planned to provide generated skill ontologies as a reference in future releases.

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
