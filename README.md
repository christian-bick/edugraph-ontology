# EduGraph

EduGraph is an Open Education Ontology to describe learning content in a simple and interoperable format. It is an
independent open source project to foster collaboration and data exchange across education organizations, both
non-profit and pro-profit.

### Example Usecases

Annotating leaning content in the terms of the ontology allows for programmatically:

- identifying equivalent, complementary and related learning content
- describing learning journeys of students across distributed learning content
- reasoning about potential root causes of student performance issues

You can explore the ontology here: http://www.edugraph.io

## Related Projects

EduGraph is more than an ontology. It is also an ecosystem of tools to foster adoption in real world scenarios.

See: https://github.com/christian-bick/edugraph-tools

## Releases

Ontology releases are published [here](https://github.com/christian-bick/edugraph-ontology/releases) on Github.

The ontology is currently published in Turtle (.ttl) and XML/RDF (.rdf) format. The source files use the turtle
format and all files in different formats are generated from these source files during release. More file formats can
be added upon demand.

## Goals

### Near Term

- Literacy: Cover basic writing & reading up to typical 4th grade level.
- Math: Cover basic math up to typical 4th grade level.

### Long Term

- Math: Cover typical curriculums up to 12th grade
- Physics: Cover typical curriculums up to 12th grade
- Biology: Cover typical curriculums up to 12th grade
- Computer Science: Cover typical curriculums up to 12th grade
- Second Languages: Cover full curriculum for various popular second languages

## Ontology

EduGraph is an Ontology designed with modern LLM capabilities in mind and intended to be used in tandem with
generative AI like ChatGPT, Gemini, LLama.

It is therefore divided into two layers:

- **Core Ontology:** Curated for describing learning material with a set of terms organized along different dimensions.
- **Skill Ontology:** Generated for identifying skills that apply specific solutions to a problem domain.

### Core Ontology

#### Foundations

The core ontology allows for describing learning material with a set of terms that are mutual exclusive and collectively
exhaustive. Accurately combining terms from different dimensions, learning material can be identified with high
confidence as equivalent, complementary or related, based on proper annotations alone.

The terms of each dimension are organized and defined within a taxonomy for each dimension.

The dimensions are:

- **Area:** An area within a discipline (e.g. _IntegerMultiplication_)
- **Ability:** A generally trainable ability (e.g. _ProcedureExecution_)
- **Scope:** A relevant involved setting (e.g. _NumbersLarger1000_)

Using the three example terms, we can already be relatively sure that a corresponding learning material would be
educating, training or testing students about what is regularly referred to as _long multiplication_. The goal of the
core ontology is to classify learning materials with only a few terms while leaning into the capabilities of 
vector databases and embeddings.

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

Such logical elevate the taxonomies of each dimension beyond a semantic standard of identifiers. They allow to infer 
knowledge independently and define a conceptually shared yet independently operated understanding of how differet areas
and aspects of learning are connected with each other.

#### Current State

The current data model of the core ontology is fairly well explored and relatively stable. It is designed to be
applicable to various disciplines and has been validated against a diverse set of scenarios already. However, the 
concrete taxonomies and teir logical relations are work in progress and likely to change frequently in the forseeable
future.

### Skill Ontology

#### Foundations

While the core ontology focuses on a mostly generic approach of describing learning material, the skill ontology uses
concrete terms for generally accepted solutions to a specific problem domain.

#### Flavors

It is relatively easy to find consent about a mutual exclusive and collectively exhausitve terminology for the core 
ontology when compared to defining actual skills. Skills typically refer to observable and practically useful
applications of knowledge and abilities. 

Being inherently more likely to be influenced by purpose, culture and language, it is way harder to agree on distinct
skills that collectively describe areas of learning. Ath the same time, developing concrete skills is a fundamentally  
important part of learning.

EduGraph's solution is for this issue is to define skills as separate entities and in the terms from the core ontology. 
This allows for different flavors of skill ontologies, but at the same time makes it easy to map skills between the 
different flavors.

#### Automated Generation

Defining skills in the terms of the core ontology further allows for an automated approach of identifying and naming
skills with the help of generative AI, making it substantially more likely that such solutions successfully converge to 
a mutually exclusive and collectively exhaustive set of skills.

#### Relations Inheritance

Defining skills in the terms of the core ontology also allows for skills to inherit all factual relations from the core 
ontology. As a consequence, the skill ontology only needs to define factual relations that specifically apply to that 
skill. This drastically reduces the need for relations in the skill ontology and keeps it significantly easier to 
manage.

#### Current State

The exact data model for defining skills is currently still experimental and likely to change in the near future.
It is planned to provide generated skill ontologies as a reference in future releases.

## Contributions

**Important:** We are happy to develop this project as a community and want to make sure that every potential 
contributor fully understands how to contribute in a meaningful way. Before contributing, please create
a Github issue to start the discussion.

### Development

The ontology is defined in the web ontology language (OWL). To ensure easy adoption with any tools, databases
and libraries that support OWL and RDF, we provide various file formats in the releases.

When editing the ontology, only edit the source files (.ttl) in the repository. All other file formats will be 
automatically generated upon release. It is recommended to use [Protege](https://protege.stanford.edu/) for editing
and to use one of the shipped reasoners for validation purposes.

Pull requests can be submitted via the usual Github workflow using reasonably small iterative changesets. Pull requests
will only be merged when changes were previously approved on a ticket.
