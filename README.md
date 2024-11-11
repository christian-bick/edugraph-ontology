# EduGraph

## Purpose

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

All releases are published here. The ontology is currently published as plain/turtle (.ttl) and xml/rdf (.rdf) files.
More file formats can be added on demand (as everything is generated from the turtle file).

## Goals

### Near Term

- Literacy: Cover basic writing & reading up to typical 4th grade level.
- Math: Cover basic math up to typical 4th grade level.

### Long Term

- Math: Cover typical curriculums up to 12th grade
- Physics: Cover typical curriculums up to 12th grade
- Biology: Cover typical curriculums up to 12th grade
- Computer Science: Cover typical curriculums up to 12th grade
- Literature: Cover typical curriculums up to 12th grade
- Second Languages: Cover full curriculum for various popular second languages

## Ontology

EduGraph in an Ontology designed with modern LLM capabilities in mind and is intended to be used in tandem with
generative AI like ChatGPT, Gemini, LLama. It is therefore divided into two layers:

- **Core Layer:** Curated for describing learning material with a set of terms organized along different dimensions.
- **Skill Layer:** Generated for identifying skills that apply specific solutions to a problem domain.

### Core Layer

The core layer allows for describing learning material with a set of terms that are mutual exclusive and collectively
exhaustive. Accurately combining terms from different dimensions, learning material can be identified with high
confidence as equivalent, complementary and related based on proper annotations alone.

The terms of each dimension are organized and defined within a taxonomy for each dimension.

The dimensions are:

- **Area:** An area within a discipline (e.g. _IntegerMultiplication_)
- **Ability:** A generally trainable ability (e.g. _ProcedureExecution_)
- **Scope:** A relevant involved setting (e.g. _NumbersLarger1000_)

Using the three terms from the example alone, we can already be relatively sure that a learning material would be
educating or training students about what is regularly referred to as _long multiplication_.

All terms are organized in a hierarchy, one hierarchy per dimension. Therefore, a learning material that is annotated
with covering _IntegerMultiplication_, implicitly also covers _IntegerArithmetic_, _Arithmetic_ and _Mathematics_.

This allows for more and less specific descriptions of learning material, e.g. less specific when describing a chapter
and more specific when describing a specific instruction or exercise.

Moreover, terms in the ontology are not only organized along classic hierarchy relations, but can also form
factual relations between each other. For example _IntegerMultiplications_ conceptually _expands_ the concept of
_IntegerAddition_ and therefore indicates a natural learning path where addition would be taught before multiplication.

Such factual relations allow to infer knowledge and lift the ontology beyond a semantic standard of identifiers.

The current data model of the core layer is fairly well explored and relatively stable. It is designed to be discipline
agnostic and has been validated against various scenarios. However, the concrete taxonomies and factual relations are
work in progress and subject to frequent change.

### Skill Layer

While the core layer focuses on a mostly generic approach of describing learning material, the skill layer uses
concrete terms for generally accepted solutions to a specific problem domain.

While it is relatively easy to find consent about terminology in the core layer, the definition of actual skills is
more likely to be influenced by purpose, culture and language.

EduGraph's solution is therefore to define skills separately, but described by terms from the core layer. This will
allow for different flavors of the skill layer, however makes it easy to map skills between the different flavors. 

This also allows for an automated approach of identifying and naming skills with different algorithmic solutions,
making it substantially more likely that such algorithms would converge to a mutually exclusive and collectively 
exhaustive set of skills.

Beyond these capabilities, defining skills in the terms of the core ontology also allows for skills to
inherit all factual relations from the core layer. Therefore, the skill layer only needs to define factual relations
that specifically apply to that skill. This drastically reduces the need for relations in the skill layer and keeps
it significantly easier to manage.

The exact data model for defining skills is currently still experimental and likely to change in the near future.
It is planned to provide generated skill layers as a reference in future releases.

## Contributions

Before contributing, please reach out to the project owner. We are happy to grow the community and want to make sure 
that you fully understand how to contribute in a meaningful way.
