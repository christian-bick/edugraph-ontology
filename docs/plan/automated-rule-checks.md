# Automated rule checks — ontology

Implementation inventory for the consolidated authoring rules. Status was checked against source
at `aa7b9b4`. This document plans checks; it neither implements them nor introduces new inference
semantics. The [reference library](../README.md) remains authoritative.

Definition changes and progression design stay in [ontology consolidation](ontology-consolidation.md).
They do not block checks for already agreed structural rules. Algorithmic validation can find an
invalid relation path; it cannot establish that a definition is educationally correct.

## Current enforcement

The [Docker build](../../Dockerfile) parses Turtle through Jena, generates both clients, compiles
TypeScript, and runs [TypeScript](../../libraries/typescript/test.ts) and
[Python](../../libraries/python/test_relations.py) relation examples. The release workflow runs that
build. These are real gates, but selected examples are not complete graph-rule validation.

Source integrity relies on the existing parsing, generation, and compilation checks; no separate
O1 validator is planned. This is an accepted baseline, not a claim that the build detects every
incomplete descriptor. There is no permanent central validator covering the additional relation
rules below. Library-provided eligibility and code-generation regression tests have separate roles.

## Check inventory

**Partial** means existing tooling covers only part of the condition. **Regression** means selected
behavioral tests, not a complete source audit. **Missing** means no permanent check was found.
Item numbers are implementation work references, not new normative rule IDs.

| Item | Algorithmic check | Current coverage and intended boundary |
| --- | --- | --- |
| O1. Source and descriptor integrity | Rely on the existing Turtle parsing, library generation, and compilation checks. Authoring expectations remain in ONT-D4 and ONT-D6. | **Existing implicit checks accepted; no additional implementation planned.** Do not add a separate descriptor-integrity validator or duplicate the build checks. Definition quality and correct dimension remain review. |
| O2. Relation schema contract | Verify declared inverse pairs and subproperty relationships, including inverse subproperties, against ONT-S3 and ONT-R1. Check schema declarations separately from generated access. | **Regression only.** Cover the full declared property family, not just `specializes`. An inverse declaration on one side suffices; do not require both statements or make directed properties symmetric. Do not introduce OWL transitivity or progression propagation. |
| O3a. Primary relations only | Reject secondary inverse properties used as predicates in authored descriptor assertions, even when no primary counterpart is authored. See ONT-S3 and ONT-R1. | **Missing permanent check; current descriptor sources comply.** Schema declarations and generated inverse access are excluded. Suggest the equivalent primary assertion with endpoints reversed; do not require both directions. |
| O3b. One relation per family and directed pair | For each authored subject/object pair, allow at most one primary property in each structural, progression, and logical constraint family defined by ONT-R1. | **Missing permanent check; current descriptor sources comply after the v0.25.1 corrections.** Count only authored assertions, not generated parent facts. Reject parent/child combinations and distinct properties in the same family, such as `expands` plus `integrates`. Different families and different endpoint pairs remain independent. Do not enforce transitive reduction or choose a replacement relation automatically. |
| O4. Structural cycles | The combined `partOf`/`specializes` graph has no cycle, including self-edges and cycles mixing the two relations. See ONT-S5. | **Missing.** Normalize inverse assertions to one direction before checking. Otherwise every legitimate forward/inverse pair would look cyclic. Report a concrete cycle, not every path through it. |
| O5. Structural ordering | In parent-to-child traversal, composition may precede specialization but never follow it. Check all branches and all parents. See ONT-S4. | **Missing.** A specialization edge followed later by a constituent edge is invalid, not merely adjacent mixed edges. Retain a short witness path. Reject invalid input cycles first rather than treating an interrupted traversal as success. |
| O6. Child-role consistency | A parent cannot have both constituent and specializing children. See ONT-S5. | **Missing.** Report the parent and one child of each role. A child with parents in different roles is allowed when every path respects O4/O5; do not invent a single-parent restriction. |
| O7. Library-provided label eligibility | Provide a consumer-facing check using the complete child-role set: no constituent children means eligible; specialization children alone do not disqualify it. See ONT-E7. | **Missing shared library capability, not an ontology-validity gate.** Derive inverse children even when only child-to-parent facts were authored. Annotation consumers enforce eligibility on their own labels. The ontology release tests the helper's correctness; organizational nodes do not fail release merely because they are ineligible for labeling. Mixed roles remain an independent O6 error. Eligibility never proves content evidence. |
| O8. Progression cycles | The combined `expands`/`inverts`/`integrates`/`translates` graph has no cycle, including self-edges and cycles mixing these relations. See ONT-R3 and ONT-W2. | **Missing complete gate.** Normalize inverse assertions to their forward direction and check all progression relations together, not only each family separately. Report a concrete cycle. Keep this graph separate from structural relations and logical constraints; do not infer progression through them. This does not resolve the meaning or completeness of progression assertions. |
| O9. Code-generation regressions | Both generated libraries build and pass focused tests for identifiers, definitions, relation direction, inverse access, subproperty expansion, and helper behavior. See ONT-R1, ONT-R4, ONT-W3. | **Existing build gates and regressions; extend with relevant cases when generators change.** The source validator checks the ontology; focused tests check its translation into library APIs. Do not add an exhaustive source-to-library or cross-library record comparison that reimplements generation. `involves` remains a schema relation, not an implicit expansion of the descriptor-client API. |
| O10. Reference integrity | Check local document links/anchors, rule-ID definitions and citations, Audit entries, and named ontology examples against source. See ONT-W3. | **No permanent repository gate.** Recent documentation work used a temporary checker. Promote the mechanical parts with tests; distinguish illustrative/hypothetical edges from examples claimed to exist. External source availability is advisory, not proof or disproof of a scholarly claim. |

For O3a, an inverse-only descriptor assertion must fail, while an inverse property definition
in the schema must pass. For O3b, test both parent/child duplication and two distinct progression
properties on the same directed pair. Separate families and separate endpoint pairs must pass.
Derived inverse and parent access must not add violations. The source check for
[v0.25.1](../releases/v0.25.1.md) covers primary-only authoring and one relation per family
after correcting the three conflicts. This release check is not a permanent validation gate.

For O7, an eligible `Rectangle` with a specializing `Square` is a necessary positive test. A
`CircularShapes` with constituent children is an organizational example, not a defective ontology
node. For O5/O6, preserve the valid case where `ErrorDetection` is part of `ErrorCorrection` and
specializes `Evaluation`; rejecting all multi-parent nodes would contradict the rules.

For O8, require a negative fixture with `A expands B` and `B integrates A`, plus a longer
mixed-relation cycle and a self-edge. A forward assertion and its inverse access must describe
one edge, not fail as a cycle. An acyclic mixed-relation chain must pass.

## Implementation design

Use one source loader and normalized graph index shared by small, independently testable rule
functions. Keep authored assertions separate from derived inverse and superproperty access. A rule
result should identify its stable rule ID, severity, source entity/property, and a compact witness.
Collect independent errors; mark dependent checks as blocked when their prerequisites are invalid.

Run source checks before artifact generation and generated-library regression tests after it.
The same mandatory source-rule functions must serve local checks and the Docker/release gate.
O7 instead supplies eligibility to consumers, with helper tests in the library test suite; it
does not require every ontology descriptor to be usable as a direct annotation. This plan does
not prescribe a new public command name, package API, or storage format before implementation.

### Linear work and incremental execution

Full validation must be `O(source records + graph edges + necessary results)`. Parse once, index
incoming and outgoing edges once, and normalize the fixed property families once. Cycle detection
can use a linear graph traversal; ordering can propagate a specialization-seen state in topological
order. Neither requires enumerating every path or constructing an all-pairs ancestor table.
Keep code-generation and traversal regression fixtures focused and bounded rather than computing
every node's full closure or comparing all generated records with a second translation engine.

Development runs should compare records by stable IRI and recheck affected rule dependencies.
Additions, removals, and reparenting affect both previous and current neighborhoods. Child-role
and eligibility results depend on incoming edges, even when the new child was not previously
used. Ordering and cycles can affect more than immediate neighbors; their invalidation must follow
the required graph closure. A complete linear pass is the safe baseline where incremental reuse
cannot yet be justified, not a claim of completed delta support.

Key reused results by source identity and validator policy. Do not silently adopt unversioned
external changes; retain known inputs and report unassessed updates when a reliable delta is
unavailable. An explicitly selected new input must be validated before it is certified. Release
validation performs a complete authoritative pass. Test work counters on wide, deep, and
multi-parent graphs, plus full-versus-incremental equivalence after edits and removals.

## Implementation order and acceptance

- [ ] **Graph core:** shared loading/indexing and O4–O6, with positive and negative fixtures.
- [ ] **Library eligibility:** O7 as a consumer-facing helper, tested with eligible and
  organizational descriptors without making the latter ontology release failures.
- [ ] **Source/schema contracts:** O2, O3a, O3b, and O8; use existing definitions of the rules and keep
  unrelated modeling questions out of the gate.
- [ ] **Code-generation regressions:** retain O9 across both supplied clients and the Docker
  build; add focused cases for changed behavior, not an exhaustive record-comparison gate.
- [ ] **Reference integration:** O10 and links from authoring workflows to the actual commands.
- [ ] **For every batch:** unit tests, stable diagnostics, linear-work tests, and affected-result
  reuse tests. Exercise the public gate with invalid fixtures, not only helper functions.
- [ ] **Completion:** local and release commands use the same mandatory checks; each reference
  identifies what is enforced and what still needs human or content-based review.

## Outside algorithmic enforcement

Keep these questions separate from a passing structural check:

- whether `specializes` truly preserves meaning, or `partOf` expresses a conceptual constituent;
- whether a descriptor belongs in Area, Scope, or Ability, and whether its definition is useful;
- whether content supports an eligible label, including absence and justification claims;
- whether numeric definitions and contradiction edges agree at exact boundaries;
- which progression assertions are correct and what future propagation rules should be.

The existing constraint helpers can be regression-tested against their documented operations now.
Automatically interpreting arbitrary definition prose as numeric predicates, or imposing new global
logical-consistency inferences, would require additional design. Do not hide that work in O8/O9.
Competency descriptions remain open: no required dimension, descriptor count, primary Ability,
or leaf-only restriction is introduced by these checks.
