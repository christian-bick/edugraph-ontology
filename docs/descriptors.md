# Authoring descriptors

Use this reference when adding, naming, defining, or reclassifying an Area, Scope, or Ability.
Pair it with [content evidence](content-evidence.md) and [structural relations](structure.md).
The design rationale is in [DESIGN.md](../DESIGN.md).

## ONT-D1 — Define reusable concepts

Before adding a descriptor, check whether existing descriptors already express the intended
meaning together. Add a concept when it contributes a useful distinction that is still missing.

For example, addition with integers and a request to carry out the calculation can be described
with `Addition`, `IntegerNumbers`, and `ProcedureExecution`. It does not need a new descriptor
named `IntegerAdditionExecution`.

A name containing several words is not evidence of a compound competency. `AbsoluteNumberMagnitude`
names one concept. Judge its meaning, not its word count.

## ONT-D2 — Choose the dimension by meaning

| Dimension | Authoring question | Meaning |
| --- | --- | --- |
| Area | What knowledge, concept, relation, or procedure is involved? | The subject matter or activity being learned or applied. |
| Scope | In what context is that knowledge applied? | Conditions that shape the challenge and available solution approaches within the same general task. |
| Ability | What cognitive performance is involved? | A trainable mental capability that can be used across subjects. |

An Area can describe a concept as well as an activity. `Circle` concerns knowledge of circles;
`MeasuringLength` concerns determining or comparing length.

Use the nature of the knowledge as the distinction between Area and Scope. Measuring length and
measuring weight involve independently learned activities. Meters and centimeters describe
different contexts for expressing length. Changing from circles to rectangles can require
different geometric knowledge even when the learner is asked to perform a similar action.

A Scope can affect difficulty, representation, constraints, or available solution approaches.
It need not make a task harder, and it does not define a universal difficulty ranking.
A contextual change can matter greatly for one competency and little for another.

Do not move an Area into Scope simply because a broader Area plus a new Scope could encode it.
Do not assign a dimension to make a particular application easier to implement.

## ONT-D3 — Keep Abilities usable across subjects

Define an Ability through its cognitive performance, without making a particular subject part of
its identity. Subject examples belong in the explanation.

For example, `ProcedureInversion` concerns working backward through a procedure from an outcome
to an unknown input or intermediate state. Reconstructing a number and reconstructing a step in
an experimental procedure can illustrate the same Ability.

Review both purposes: can the term connect observations across topics and time, and can its
meaning be recognized in learning content? A broad Ability is not defective merely because it
is common. Add narrower terms when they describe useful, distinguishable performances.
See [ONT-E2](content-evidence.md#ont-e2--describe-the-performance-supported-by-the-content).

## ONT-D4 — Define the educational meaning and its boundaries

Write an educational definition of one or two sentences in `rdfs:isDefinedBy`. Begin with a
self-contained noun phrase or gerund phrase describing the concept, context, or performance.
The definition must read naturally after both `Involves {definition}` and
`Involves {label}: {definition}`. The surrounding statement supplies the relation and label:
do not begin the definition with "Involves", repeat the descriptor name, or use an opening
such as "Represents" that depends on an unstated subject.

State what the concept covers and the distinction needed to separate it from its closest
neighbors. Keep defining conditions, exclusions, and exact boundaries in the definition.
Do not meet the sentence limit by joining unrelated explanations into a long sentence.
Read the definition with its dimension, parents, children, and relevant siblings.

Put all illustrative examples in `rdfs:comment`, including parenthetical examples and lists
introduced by "such as". An exhaustive list of defining alternatives or an exact mathematical
relationship can remain in the definition when it establishes the meaning rather than
illustrating it. Use comments for supporting explanation as well; omit generic claims about
a concept's importance or benefits.

Write example content directly in the comment, without a "For example:" prefix. A comment may
be an example list, supporting explanation, or examples followed by explanation. Keep its
content understandable on its own. Start prose comments with a capital letter; preserve the
case of leading formulas and mathematical symbols. Comments are optional; omit the comment portion of a
constructed statement when none is supplied. For Abilities, use concrete examples from
different subjects where practical. Examples illustrate the definition; they do not replace
it or change its boundaries.

For example, `IntegerNumbers` can be defined as "Numbers with no fractional part, whether
negative, zero, or positive." Its comment can read "-3, 0, 1, 10, and 1345."
A renderer adding an example marker can produce "Involves Integer Numbers: Numbers with no fractional part, whether
negative, zero, or positive. For example: -3, 0, 1, 10, and 1345."
Presentation markers belong to the renderer. Since comments can also contain supporting
explanation, consumers must not assume every comment is an example list.

This composition convention applies to descriptor individuals in all three dimensions.
Schema classes and relations also keep concise definitions separate from examples, but
describe their schema role rather than being phrased as objects of `involves`. Formatting
does not change [labeling eligibility](content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).

For a numeric boundary, specify inclusivity, whether magnitude or signed value is meant, and
which quantities the condition covers. For a family, describe what its members have in common
without defining the family as just one child.

Prefer clear, established terms when they convey the intended meaning. Define concepts in
educational language that remains understandable independently of any software or annotation
workflow.

## ONT-D5 — Distinguish learning about notation from using notation

An Area such as `FractionNotation` describes knowledge of the notation itself. Interpreting the
roles of numerator and denominator or constructing a fraction expression can establish that claim.

Comparing quantities written as fractions does not establish a separate notation-learning claim
merely because a fraction bar is visible. Describe the comparison and the relevant fraction
Scopes. Apply the same test to decimal, digit, and number-name notation.

This distinction follows the knowledge being exercised. A representation can be the subject of
learning in one task and a contextual feature in another.

## ONT-D6 — Preserve identifier meaning

Descriptor individuals use CamelCase local names, such as `ProcedureExecution`, and belong to
the appropriate descriptor class. In the current source, descriptor IRIs use
`http://edugraph.io/edu/`; schema classes and properties use `http://edugraph.io/edu#`.
Copy the correct source prefix rather than constructing an IRI from memory.

Search for an existing concept before creating or renaming an individual. A rename or definition
change can affect annotations even when the concept stays in the same family. Record the change
and its intended replacement through [change review](change-review.md).

## Audit

- [ ] **ONT-D1:** The proposed concept adds a distinction that an existing combination cannot express.
- [ ] **ONT-D2:** Its dimension follows the knowledge, context, or cognitive performance involved.
- [ ] **ONT-D3:** An Ability remains usable across subjects and has identifiable content evidence.
- [ ] **ONT-D4:** The definition has at most two sentences, composes with the generic prefix, and retains exact boundaries; examples appear only in comments without an introductory marker and agree with the concept and its neighbors. Prose comments start with a capital letter; formulas and mathematical symbols retain their case.
- [ ] **ONT-D5:** A notation Area describes knowledge of notation, not its incidental presence.
- [ ] **ONT-D6:** The identifier is valid, unambiguous, and reviewed for effects on existing usage.
