# Reviewing ontology changes

Use this workflow for a proposed descriptor, definition, relation, or schema change.
It applies equally to a person editing Turtle and an agent using the ontology editor.

## ONT-W1 — Establish the meaning before editing

Read [README.md](../README.md), the relevant references in [this index](README.md), and the
affected source definitions. Check the working diff so existing edits remain intact.

Start with a concrete example and a nearby counterexample. State what the proposed distinction
adds, why the existing descriptors cannot express it, and what evidence would identify it.
Then choose the dimension and family placement using ONT-D1 through ONT-D5.

Applying descriptors to content can reveal a missing distinction. Describe that distinction in
educational terms before changing the ontology. A convenient software grouping is not a reason
to redefine a knowledge Area as a Scope.

## ONT-W2 — Review definitions, relations, and effects together

Review in this order:

1. **Meaning:** Read the concept with its neighbors. Check the defining boundary and examples.
2. **Structure:** Classify each affected edge and check all resulting paths under ONT-S1 through
   ONT-S5. Inspect incoming references as well as outgoing ones.
3. **Other relations:** Check logical constraints and direct progression assertions separately
   under ONT-R1 through ONT-R5. Retain the acyclicity requirement for progression chains.
4. **Content evidence:** Check labeling eligibility and apply the descriptor to contrasting
   content examples under ONT-E1 through ONT-E7. A definition must work beyond the single example
   that motivated it.
5. **Effects on annotations and models:** Identify changes to identifiers, definitions, dimensions,
   structural ancestry, specialization ancestry, and constraints. Review their implications using
   [annotations and models](annotations-and-models.md).

When a content example does not support its annotation, locate the cause. The definition,
annotation, interpretation of the content, or classifier can each be wrong. Changing a definition
merely to agree with a model prediction is not sufficient justification.

Record unresolved choices in a scoped tracking document, with evidence and the decision still
needed. A documented limitation is not permission to introduce an exception into new work.

Adding a descriptor's first constituent child is a change to labeling eligibility under
[ONT-E7](content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes),
not just a navigation change. Review existing direct uses. If the descriptor still represents an
observable concept, consider a separate organizational parent or a corrected relationship according
to meaning; do not change `partOf` to `specializes` merely to preserve labeling eligibility.

## ONT-W3 — Verify and report the actual change

Edit authored sources and instructions. RDF exports and client packages are generated artifacts;
use the workflow in [DOCS.md](../DOCS.md#43-compiling-via-docker) rather than editing them by hand.

| Change | Appropriate verification |
| --- | --- |
| Documentation only | Review wording, local links, rule IDs, example names, and consistency with the source. |
| Descriptor or relation source | Review the affected graph and examples; run the supplied Docker build and client tests. |
| Schema or code generation | Inspect the resulting RDF and both generated clients; run the Docker build and relevant client tests. |
| Annotation or model update | Compare affected annotations, predictions, or learned relationships under the stated evaluation method. |

Existing client tests verify selected behavior. They do not prove that every ontology edge satisfies
the authoring rules. The centralized semantic validator remains a separate task; report which
checks were automated and which were reviewed.

For a behavior change, report the identifiers and relations changed, the reason, the evidence,
the validation performed, and any annotation or model review still required. Link to the exact rules
rather than copying them into reviews or agent instructions.

## Audit

- [ ] **ONT-W1:** The proposal has an example, counterexample, and justified distinction; existing edits are preserved.
- [ ] **ONT-W2:** Definitions, incoming and outgoing edges, complete paths, and effects on annotations and models were reviewed.
- [ ] **ONT-W3:** Verification matches the changed artifact, and the report distinguishes checks from remaining work.
