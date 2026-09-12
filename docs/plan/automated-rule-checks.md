# Automated rule checks — ontology

Implementation inventory for the consolidated authoring rules. Status was checked against source
at `079d1ef`. This document tracks checks; it does not introduce new inference
semantics. The [reference library](../README.md) remains authoritative.

Definition changes and progression design stay in [ontology consolidation](ontology-consolidation.md).
They do not block checks for already agreed structural rules. Algorithmic validation can find an
invalid relation path; it cannot establish that a definition is educationally correct.

## Current enforcement

The [Docker build](../../Dockerfile) parses Turtle through Jena, runs the centralized TypeScript
source validator, generates both clients, compiles TypeScript, checks documentation, and runs
[TypeScript](../../libraries/typescript/test.ts) and
[Python](../../libraries/python/test_relations.py) relation examples. The release workflow runs the
same build. The source validator covers O2–O6 and O8; generated examples cover O7 and O9; O10 checks
mechanical reference integrity.

Source integrity relies on the existing parsing, generation, and compilation checks; no separate
O1 validator is planned. This is an accepted baseline, not a claim that the build detects every
incomplete descriptor. Library-provided eligibility and code-generation regression tests retain
their separate roles from ontology-validity findings.

## Check inventory

**Partial** means existing tooling covers only part of the condition. **Regression** means selected
behavioral tests, not a complete source audit. **Missing** means no permanent check was found.
Item numbers are implementation work references, not new normative rule IDs.

| Item | Algorithmic check | Current coverage and intended boundary |
| --- | --- | --- |
| O1. Source and descriptor integrity | Rely on the existing Turtle parsing, library generation, and compilation checks. Authoring expectations remain in ONT-D4 and ONT-D6. | **Existing implicit checks accepted; no additional implementation planned.** Do not add a separate descriptor-integrity validator or duplicate the build checks. Definition quality and correct dimension remain review. |
| O2. Relation schema contract | Verify declared inverse pairs and subproperty relationships, including inverse subproperties, against ONT-S3 and ONT-R1. Check schema declarations separately from generated access. | **Implemented in the TypeScript library and mandatory Docker gate.** The full declared property family is checked, not just `specializes`. An inverse declaration on one side suffices; both statements are not required and directed properties are not made symmetric. No OWL transitivity or progression propagation is introduced. |
| O3a. Primary relations only | Reject secondary inverse properties used as predicates in authored descriptor assertions, even when no primary counterpart is authored. See ONT-S3 and ONT-R1. | **Implemented in the TypeScript library and mandatory Docker gate.** Schema declarations and generated inverse access are excluded. The diagnostic suggests the equivalent primary assertion with endpoints reversed; both directions are never required. |
| O3b. One relation per family and directed pair | For each authored subject/object pair, allow at most one primary property in each structural, progression, and logical constraint family defined by ONT-R1. | **Implemented in the TypeScript library and mandatory Docker gate.** Only authored assertions are counted, not generated parent facts. Parent/child combinations and distinct properties in the same family are rejected. Different families and different endpoint pairs remain independent. The validator neither enforces transitive reduction nor chooses a replacement relation automatically. |
| O4. Structural cycles | The combined `partOf`/`specializes` graph has no cycle, including self-edges and cycles mixing the two relations. See ONT-S5. | **Implemented in the TypeScript library and mandatory Docker gate.** Inverse assertions are normalized to one direction, so a repeated forward/inverse pair is one edge rather than a false cycle. One concrete cycle is reported per cyclic component. The iterative linear traversal handles deep graphs without relying on the JavaScript call stack. |
| O5. Structural ordering | In parent-to-child traversal, composition may precede specialization but never follow it. Check all branches and all parents. See ONT-S4. | **Implemented in the TypeScript library and mandatory Docker gate.** The linear traversal checks complete paths and reports a concrete witness for each invalid transition. Separate parent paths are not combined. Cyclic structural input is left to O4 instead of being mistaken for a successful ordering check. |
| O6. Child-role consistency | A parent cannot have both constituent and specializing children. See ONT-S5. | **Implemented in the TypeScript library and mandatory Docker gate.** A finding names the parent and one child of each role. Inverse assertions are normalized. A child may still have different parents through different roles; the check does not impose a single-parent restriction. |
| O7. Library-provided label eligibility | Provide a consumer-facing check using the complete child-role set: no constituent children means eligible; specialization children alone do not disqualify it. See ONT-E7. | **Implemented in the generated TypeScript library, with release tests; not an ontology-validity gate.** `isLabelEligible` uses generated `hasPart` relations, including inverse children derived from authored `partOf`. Annotation consumers enforce eligibility on their own labels. Organizational nodes do not fail ontology release merely because they are ineligible. Mixed roles remain an independent O6 error. Eligibility never proves content evidence. |
| O8. Progression cycles | The combined `expands`/`inverts`/`integrates`/`translates` graph has no cycle, including self-edges and cycles mixing these relations. See ONT-R3 and ONT-W2. | **Implemented in the TypeScript library and mandatory Docker gate.** Primary and inverse assertions are normalized into one forward graph and one concrete cycle is reported per cyclic component. Structural and logical constraint edges remain outside the graph. The check introduces no progression inference and does not judge the meaning or completeness of individual assertions. |
| O9. Code-generation regressions | Both generated libraries build and pass focused tests for identifiers, definitions, relation direction, inverse access, subproperty expansion, and helper behavior. See ONT-R1, ONT-R4, ONT-W3. | **Existing build gates and regressions; extend with relevant cases when generators change.** The source validator checks the ontology; focused tests check its translation into library APIs. Do not add an exhaustive source-to-library or cross-library record comparison that reimplements generation. `involves` remains a schema relation, not an implicit expansion of the descriptor-client API. |
| O10. Reference integrity | Check local document links/anchors, rule-ID definitions and citations, Audit entries, and named ontology examples against source. See ONT-W3. | **Implemented in the TypeScript library and mandatory Docker gate.** The reusable validator checks repository-local link targets and Markdown anchors, unique and defined rule IDs, an Audit entry for every rule definition, and inline named ontology-relation examples against authored plus schema-derived direct relations. Generic, explicitly hypothetical or negated examples and historical release notes are not treated as current source claims. External links and scholarly claims remain outside mechanical validation. |

For O3a, an inverse-only descriptor assertion must fail, while an inverse property definition
in the schema must pass. For O3b, test both parent/child duplication and two distinct progression
properties on the same directed pair. Separate families and separate endpoint pairs must pass.
Derived inverse and parent access must not add violations. The findings behind
[v0.25.1](../releases/v0.25.1.md) are now protected by the permanent O3a and O3b gates.

For O7, an eligible `Rectangle` with a specializing `Square` is a necessary positive test. A
`CircularShapes` with constituent children is an organizational example, not a defective ontology
node. For O5/O6, preserve the valid case where `ErrorDetection` is part of `ErrorCorrection` and
specializes `Evaluation`; rejecting all multi-parent nodes would contradict the rules.

For O8, require a negative fixture with `A expands B` and `B integrates A`, plus a longer
mixed-relation cycle and a self-edge. A forward assertion and its inverse access must describe
one edge, not fail as a cycle. An acyclic mixed-relation chain must pass.

## Implementation design

Implement every ontology validation rule in the TypeScript library so the editor and repository
can call the same functions. Python remains a generated client library and does not duplicate
validation semantics. Use one source loader and normalized graph index shared by small, independently testable rule
functions. Keep authored assertions separate from derived inverse and superproperty access. A rule
result should identify its stable rule ID, severity, source entity/property, and a compact witness.
Collect independent errors; mark dependent checks as blocked when their prerequisites are invalid.

Source checks do not depend on generated artifacts and must pass before the Docker build can export
them; generated-library regression tests run on the generated clients. The same mandatory
source-rule functions serve local checks, editor integration, and the Docker/release gate.
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

Use complete validation by default in development and release runs. Test representative workloads
and adverse graph shapes, including work counters on wide, deep, multi-parent, and independently
cyclic graphs. Introduce incremental result reuse only when measured latency warrants it;
implementing reuse is not a completion requirement.

If incremental reuse is introduced, compare records by stable IRI and recheck affected rule
dependencies. Additions, removals, and reparenting affect both previous and current neighborhoods.
Child-role and eligibility results depend on incoming edges, even when the new child was not
previously used. Ordering and cycles can affect more than immediate neighbors; their invalidation
must follow the required graph closure. Require equivalence with full validation after additions,
removals, and reparenting, and key reused results by source identity and validator policy.

Do not silently adopt unversioned external changes; retain known inputs and report unassessed
updates. An explicitly selected new input must be validated before it is certified. If reuse is
implemented but a reliable delta is unavailable, perform complete validation. Release validation
always performs a complete authoritative pass.

## Implementation order and acceptance

- [x] **Graph core:** O4–O6 use shared loading/indexing and have positive and negative fixtures.
- [x] **Library eligibility:** O7 as a consumer-facing helper, tested with eligible and
  organizational descriptors without making the latter ontology release failures.
- [x] **Source/schema contracts:** O8 uses existing definitions of the rules and keeps
  unrelated modeling questions out of the gate.
- [x] **Code-generation regressions:** retain O9 across both supplied clients and the Docker
  build; add focused cases for changed behavior, not an exhaustive record-comparison gate.
- [x] **Reference integration:** O10 is part of the Docker gate and the TypeScript library API;
  authoring workflows point to the Docker command that runs it.
- [ ] **For every batch:** unit tests, stable diagnostics, and full-validation performance and
  linear-work tests on representative workloads and adverse graph shapes. Exercise the public
  gate with invalid fixtures, not only helper functions. Require affected-result reuse and
  full-versus-incremental equivalence tests only if incremental reuse is introduced.
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
