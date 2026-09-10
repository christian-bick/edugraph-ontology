# Annotated content and models

This guide explains how ontology meanings can be used in content annotations, classification,
and embedding models. It does not prescribe a particular application architecture.
Use [the authoring references](README.md) for the definitions and rules it relies on.

## Shared meanings, open annotation formats

The ontology defines descriptors, dimensions, and relations. An annotation applies those
descriptors to learning content, regardless of how that content was created or presented.
A classification model proposes such annotations; an embedding model represents descriptors,
their combinations, or their relationships as vectors.

Annotations should follow [the content-evidence rules](content-evidence.md).
The ontology does not prescribe a storage format, an input modality, or a minimum descriptor
count. Any requirements for a particular collection or use belong in its own documentation.

## Classification from content evidence

A classifier should use the content available to it, including necessary consequences of what
is shown or stated. It should not infer a descriptor merely because that descriptor often
appears with another one in its training examples.

Use the eligible descriptors defined by
[ONT-E7](content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes)
as the vocabulary for direct predictions. Organizational nodes may support navigation or model
representations, but are not additional direct labels.

Evaluate whether a model can distinguish neighboring concepts and recognize valid combinations
across different contexts. For Abilities, include examples across subjects: the shared label
describes a cognitive demand, not evidence that a particular learner has mastered it.
See [ONT-D3](descriptors.md#ont-d3--keep-abilities-usable-across-subjects) and
[ONT-E2](content-evidence.md#ont-e2--describe-the-performance-supported-by-the-content).

Repeated disagreement between annotations and predictions calls for review of the definition,
the content evidence, the annotation, and the model. Neither human agreement nor a model's
confidence alone proves that a definition is sound.

## Direct claims and derived information

Keep direct annotations and predictions distinguishable from information derived through
relations. For example, a `Square` annotation supports a broader `Rectangle` claim through
`specializes`; a `HalfCircle` annotation does not establish `Circle`. Sharing the
`CircularShapes` field does not make those concepts interchangeable.
See [ONT-E5](content-evidence.md#ont-e5--keep-asserted-claims-and-derived-information-distinguishable).

State what a classification evaluation measures. Recognizing a descriptor directly and deriving
a broader claim from a recognized specialization are different results. Neither should be confused
with retrieving a related concept through a part-whole or progression relation.

## Embeddings and relation meaning

An embedding can support comparisons between descriptors or annotated content. It should retain
the distinction between `partOf`, `specializes`, and progression relations rather than treating
every graph connection as the same kind of similarity.

Vector proximity does not establish that two descriptors are interchangeable, that one logically
follows from the other, or that a learner should study them in a particular order. Test the
relationships an embedding is intended to preserve against contrasting examples.
The relevant meanings are defined in [structural relations](structure.md) and
[other relations](relations.md).

## Interpreting annotations across ontology versions

Record which ontology version an annotation or model uses. Identifiers, definitions, dimensions,
and relations must be interpreted together from that version.

A definition change may require reviewing an annotation even when the identifier and content
are unchanged. A relation change may affect derived claims, embedding relationships, or eligibility
for direct labeling. In particular, adding a descriptor's first constituent child changes its
eligibility under ONT-E7 and requires reviewing existing direct annotations and model vocabularies.

Preserve original annotations and model predictions when translating them to a newer version.
Document the translation and its reasons instead of silently applying new meanings to old records.
Use [change review](change-review.md) to assess the semantic effects of an ontology change.
