# Structural relations

Use this reference when placing descriptors or changing their parents. Read both endpoint
definitions in their dimension and family context before choosing a relation.

## ONT-S1 — partOf organizes constituents

Use `A partOf B` when A is a constituent of the whole or field represented by B.
A constituent may be a component, stage, instrument, or aspect. The relation does not
make A a narrower form of B and does not transfer B's meaning to A.

Examples from the ontology:

- `Circle partOf CircularShapes`: knowledge of complete circles is one constituent of the field,
  alongside knowledge of half circles and quarter circles.
- `ErrorDetection partOf ErrorCorrection`: detecting an error is one stage of detecting,
  evaluating, and resolving it.
- `Tapemeter partOf LengthMeasurement`: the instrument belongs in that measurement context.

This relation can continue all the way to a leaf. A terminal node does not have to specialize
its parent.

These edges organize concepts, not physical objects. A semicircular piece is physically part of
a circular object, but that alone does not establish `HalfCircle partOf Circle` between Areas.
`Circle`, `HalfCircle`, and `QuarterCircle` are distinct constituents of `CircularShapes`.

## ONT-S2 — specializes preserves the broader meaning

Use `A specializes B` when A is a narrower form of the same concept and preserves B's
defining meaning. An assertion of A then supports the broader claim B. The reverse does
not follow.

For example, `Square specializes Rectangle`: a square adds equal side lengths while retaining
the rectangle's defining properties. `ProcedureInversion specializes ProcedureUnderstanding`
expresses a more specific performance within understanding a procedure.

A label can support a broader claim through a chain consisting entirely of `specializes`
edges. A `partOf` step does not carry that substitution further.
The rule is the same for Area, Scope, and Ability.

These are relations between descriptor individuals. `specializes` is not an
`rdfs:subClassOf` assertion, and its prose definition does not implement an OWL rule engine.
See [ONT-R4](relations.md#ont-r4--state-the-inference-rule-separately).

## ONT-S3 — Keep structural navigation distinct from inheritance

| Authored relation | Direction | Inverse |
| --- | --- | --- |
| `partOf` | Constituent to whole | `hasPart` |
| `specializes` | Narrower to broader concept | `specializedBy` |
| `structures` | Either kind of structural child to parent | `structuredBy` |

`partOf` and `specializes` are subproperties of `structures`.
`hasPart` and `specializedBy` are subproperties of `structuredBy`.

Author the specific relation. The shared property supports navigation across both kinds of edge;
it does not tell a consumer whether a particular path supports inheritance.
Follow [ONT-R1](relations.md#ont-r1--declare-specific-relations-and-use-their-inverses)
for inverse and superproperty handling.

## ONT-S4 — Composition may lead into specialization

Read these examples from the broader parent toward its descendants:

- **Allowed:** `TwoDimensionalObjects hasPart Polygon`, followed by
  `Polygon specializedBy Quadrilateral`. The first edge places a constituent in a field;
  the second starts a family of narrower forms.
- **Not allowed:** `Polygon specializedBy Quadrilateral`, followed by a proposed
  `Quadrilateral hasPart Side`. This would return to composition after specialization.
  The second edge is a hypothetical modeling error, not an existing assertion.

A branch may contain composition alone, specialization alone, or composition followed by
specialization. Once specialization starts, it must not return to composition.
There is no fixed depth at which the transition must occur.

When reading the authored child-to-parent edges, the direction is reversed:
a `specializes` chain may lead into a `partOf` chain; a `partOf` chain must not
lead into `specializes`.

## ONT-S5 — Review the entire affected structure

Keep the combined structural graph acyclic. Review every path through a node with multiple
parents, including the paths introduced by descendants. Do not infer a single-parent restriction
from the ordering rule.

A parent must not mix constituent children and specializing children. If it does, reconsider
whether one node conflates a field or process with a capability being specialized. Resolve its
definition or placement rather than keeping a permanent exception.

A child with parents in different roles is not the same case as a parent with mixed child roles.
For example, `ErrorDetection` is `partOf ErrorCorrection` and `specializes Evaluation`.
Each edge still needs a truthful meaning and each resulting path must respect ONT-S4.

## Audit

- [ ] **ONT-S1:** Every part is a constituent; no part-whole edge is used as inheritance.
- [ ] **ONT-S2:** Every specialization preserves the broader meaning, including along inherited paths.
- [ ] **ONT-S3:** Specific edges and combined navigation retain their different meanings.
- [ ] **ONT-S4:** Every path follows the permitted order in the stated traversal direction.
- [ ] **ONT-S5:** The affected graph is acyclic, all parent paths are reviewed, and no parent mixes child roles.
