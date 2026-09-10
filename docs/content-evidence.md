# Descriptors and content evidence

Use this reference to check whether a descriptor can be applied consistently to learning content.
It applies to human annotation and classification. An annotation is an
assertion that a descriptor describes the content; a classifier prediction is a proposed annotation.

## ONT-E1 — Ground annotations in accessible evidence

A descriptor must be defensible from the content available to the person or system interpreting it.
Evidence can include text, visual structure, spoken instructions, or a necessary consequence of
what the content shows. It need not be a literal word or symbol naming the concept.

For example, an equal-group problem can require multiplication without displaying a multiplication
sign. Conversely, writing “distributive law” above an ordinary multiplication does not demonstrate
the law.

Do not rely on hidden metadata, an author's intention, or facts the learner and classifier cannot
access. A grouping node's presence in the ontology is not evidence for applying it to content.

## ONT-E2 — Describe the performance supported by the content

For a task, identify the cognitive performance it asks the learner to demonstrate. For an
explanation or worked solution, identify the performance it actually illustrates. Read the
instructions, unknown quantities, reasoning, and available support together.

For example, `23 + 18 = □` asks for a result, while `23 + □ = 41` asks for an unknown input.
The same numerical relation can support different Ability claims when its presentation changes.
An explanation must show the relevant reasoning; an exercise title alone is insufficient.

An Ability annotation on content does not establish a particular learner's mastery. Observations
of learner performance are separate evidence. Shared Ability identifiers support comparisons
across subjects and time without assuming identical performance in every context.

## ONT-E3 — Choose defensible specificity

Choose the most specific descriptor justified by the evidence and intended description.
Specificity follows meaning and `specializes`, not tree depth.

`FractionNumbers` can itself describe a numeric context. A concrete unit such as
`SquareCentimeterScale` gives a more precise description when that unit is evident.
`MetricAreaScale` remains meaningful when only that family is established; do not invent
a particular unit to reach a leaf.

A `Tapemeter` is a constituent of `LengthMeasurement` through `partOf`. That placement
helps organize tools; it does not make the tool interchangeable with the whole context.
See [ONT-S1](structure.md#ont-s1--partof-organizes-constituents).

## ONT-E4 — Describe meaningful context, including absence carefully

Include justified context when describing content, even if a particular search did not need
that distinction. A visible measurement unit remains part of the content description when
someone is interested only in the general activity.

The definition determines which facts count. An incidental value does not establish every
competency associated with that value: the appearance of the number seven does not by itself
make a task about prime numbers.

An absence claim needs evidence for absence over the whole domain its definition covers.
`NumbersWithoutZero` is not justified merely because the initial quantities are nonzero. A calculation may produce zero, or a displayed scale
may include it. Likewise, omitting `NumbersWithNegatives` does not itself assert
`NumbersWithoutNegatives`.

When a distinction changes the interpretation of only some tasks, review it in those contexts.
Do not turn a convention for one collection of content into a universal annotation rule.

## ONT-E5 — Keep asserted claims and derived information distinguishable

Labels in one description apply together. Several Areas, Scopes, or Abilities are allowed;
there is no primary Ability and no ontology-wide minimum or fixed count in any dimension.
Applications may impose their own requirements for a complete record.

A `Square` assertion supports a broader `Rectangle` claim through specialization.
A `HalfCircle` assertion does not support a `Circle` claim: they are distinct constituents of
`CircularShapes`, not specializations of one another.
A related or prerequisite concept is not automatically an additional content annotation.

Consumers should distinguish their explicit assertions or predictions from information obtained
by traversing relations. A minimal serialization may omit a broader claim already supported by
specialization, but the ontology does not prescribe one storage format or silently rewrite an
application's label set. See [annotations and models](annotations-and-models.md).

## ONT-E6 — Identify the observable role of justification

Apply a justification Scope when the relevant method, evidence, coverage, or guarantee is
supplied or clearly required by the content. A method that could merely be used is insufficient.
Read the claim and its domain together with the argument or evidence; a name or an author's
intention is not a substitute for the structure that supports the annotation.

The same configuration can illustrate a property, establish possibility, or refute a general
claim. Its role follows from what the content shows or asks. Evidence coverage does not determine
logical force, and an omitted uncertainty statement does not establish an error guarantee.
See [Justification Scopes](justification.md) for the family distinctions and examples.

## Audit

- [ ] **ONT-E1:** Every annotation has accessible evidence beyond labels, metadata, or intention.
- [ ] **ONT-E2:** Ability evidence follows the actual task or explanation, without claiming learner mastery.
- [ ] **ONT-E3:** Specificity is justified; neither leaf status nor structural membership substitutes for evidence.
- [ ] **ONT-E4:** Meaningful context is covered and absence claims hold throughout their defined domain.
- [ ] **ONT-E5:** Conjunction, application cardinality rules, and derived information remain distinguishable.
- [ ] **ONT-E6:** Justification annotations follow a supplied or required method, evidence, coverage, or guarantee, not a merely possible approach.
