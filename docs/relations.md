# Logical, progression, and composition relations

Use [structural relations](structure.md) for `partOf`, `specializes`, and their shared
parent. This reference covers the other relation families and what can be inferred from them.

## ONT-R1 — Declare specific relations and use their inverses

Assert the most specific relation that expresses the intended meaning. The schema declares
inverse properties and shared parent properties:

| Relation | Inverse | Parent property |
| --- | --- | --- |
| `implies` | `impliedBy` | `constrains` |
| `contradicts` | `contradictedBy` | `constrains` |
| `constrains` | `constrainedBy` | — |
| `expands` | `expandedBy` | — |
| `inverts` | `invertedBy` | `expands` |
| `integrates` | `integratedBy` | — |
| `translates` | `translatedBy` | `integrates` |
| `involves` | `involvedBy` | — |

Inverse subproperties follow the inverse parent: for example, `invertedBy` is a subproperty
of `expandedBy`. The structural family is listed in
[ONT-S3](structure.md#ont-s3--keep-structural-navigation-distinct-from-inheritance).

Apply two authoring rules to relation assertions in the descriptor Turtle files:

1. **Use only the primary relation.** Use the properties in the Relation column above and the
   Authored relation column of ONT-S3, never their secondary inverse properties. Write
   `Square specializes Rectangle`, not `Rectangle specializedBy Square`, even if the latter
   would be the only assertion. Inverse property definitions remain in the schema; reverse
   access is derived rather than authored.
2. **Use at most one relation per family for the same directed pair.** For `A` to `B`, choose
   at most one structural relation, one progression relation, and one logical constraint relation.
   Choose the most specific applicable property, without also asserting its parent or another
   property in that family.

| Family | Primary properties counted together |
| --- | --- |
| Structural | `structures`, `partOf`, `specializes` |
| Progression | `expands`, `inverts`, `integrates`, `translates` |
| Logical constraints | `constrains`, `implies`, `contradicts` |

For example, the hypothetical pair `A inverts B` and `A expands B` repeats a parent property.
The pair `A expands B` and `A integrates B` is also disallowed, although neither assertion
is derived from the other. It requires choosing the intended progression relationship.
Relations in different families remain independent; this is not a one-relation-total rule or
a restriction on how many different entities a descriptor may relate to. `involves` is separate
composition, not a member of these three families.

These rules check authored assertions, not schema definitions or generated inverse and parent
facts. An inverse property provides reverse access; it does not make a directed relation symmetric.
Progression is a family name here, not a declared `progresses` property; the constraint parent
property is named `constrains`.

## ONT-R2 — Logical constraints concern truth

Use `A implies B` when A logically guarantees B, and `A contradicts B` when the two
claims cannot both be true. `constrains` groups these logical relations.

A tighter upper bound can imply a looser upper bound. Whether two numeric bounds contradict
depends on their exact definitions, including the endpoints. Test a value on each boundary
before asserting exclusion.

These relations do not express teaching order or frequent co-occurrence.
Missing relations do not prove that two claims are incompatible.

When checking compatibility, consider implication before contradiction: a consequence of A can
contradict B even when A has no direct contradiction edge to B. Use the documented client
helpers in [DOCS.md](../DOCS.md#64-deduction-helpers-constraint-expansion) for their implemented behavior.

## ONT-R3 — State the conceptual progression precisely

Use the existing progression relations for objective conceptual relationships:

| Relation | Authoring question | Example from the ontology |
| --- | --- | --- |
| `expands` | How does understanding A extend or build on understanding B? | `Multiplication expands Addition` |
| `inverts` | Does that expansion reverse the underlying operation or concept? | `Subtraction inverts Addition` |
| `integrates` | Is B used as a component in constructing or applying A? | `Multiplication integrates Iteration` |
| `translates` | Does that integration express a different representation or perspective? | `BaseTenBlocks translates Base10` |

Explain the particular relationship before adding the edge. For `inverts` and `translates`,
record the intended direction; do not add both forward directions merely because the conceptual
connection can be understood either way.

The combined progression graph of `expands`, `inverts`, `integrates`, and `translates` must
be acyclic. This includes self-edges and cycles mixing different progression relations, not
just cycles within one relation. For example, the hypothetical pair `A expands B` and
`B integrates A` is invalid even though neither relation alone forms a cycle.

Normalize inverse assertions to their forward direction before checking: `B expandedBy A`
represents the same edge as `A expands B`, not a second edge back to A. Check progression
separately from structural relations and logical constraints; this rule does not introduce
progression inheritance or other inference across those families.

A progression edge does not prove that every task concerning A independently demonstrates B,
that a learner has mastered B, or that there is one correct teaching sequence.
Existing edges are subject to review, especially where a whole field is an endpoint.

## ONT-R4 — State the inference rule separately

Keep three operations distinguishable:

1. Reading recorded relations.
2. Deriving the inverses and superproperties declared by the schema.
3. Applying a rule that transfers a particular claim across a path.

For a broader concept claim, equality or a chain of `specializes` supports substitution.
A path through `partOf` or `structures` does not. Logical implications have their own
truth semantics and must not be silently treated as the same operation.

Progression inference across structural or specialization paths remains a separate design task.
A part-whole relation may support a justified progression inference without becoming inheritance.
The broad wording of `specializes` does not decide which progression relations transfer,
in which direction, or under what conditions.

The generated clients provide relation lookups and traversal helpers, not a general inference
engine. A helper's name ending in `Transitive` describes traversal; it does not prove that every
reachable concept can be added as a content annotation.

## ONT-R5 — Compose competency descriptions with involves

Use `involves` to connect a competency entity with its descriptors. `involvedBy` is its
inverse. This composition is separate from placing a descriptor in a structural family.

The ontology leaves the composition open. It imposes no requirement to include an Area, a Scope,
or an Ability, and no minimum or maximum count. Applications define any completeness requirements
for their own records. Multiple descriptors in a description apply together.

For example, a description of calculating the perimeter of a rectangle using integers may involve
`Rectangle`, `PerimeterCalculation`, `IntegerNumbers`, and `ProcedureExecution`.
This is an illustrative combination, not a required shape for every description.

Do not create a new core descriptor merely to name that combination. Nor does `involves`
automatically copy every relation of its descriptors onto the composed competency.
The current generated descriptor clients do not expose `involves` helpers; a consumer using
competency descriptions must handle those schema relations explicitly.

## Audit

- [ ] **ONT-R1:** Authored assertions use only primary properties, with at most one relation per family for each directed pair; every choice has a justified meaning and direction.
- [ ] **ONT-R2:** Implication and contradiction follow the definitions, including boundary cases.
- [ ] **ONT-R3:** Progression expresses a specific conceptual relationship rather than an assumed teaching sequence; the combined progression graph has no self-edge or cycle, including mixed-relation cycles, after inverse normalization.
- [ ] **ONT-R4:** Any inference names its rule and does not confuse traversal with entailment.
- [ ] **ONT-R5:** Competency composition remains open, conjunctive, and separate from structural organization.
