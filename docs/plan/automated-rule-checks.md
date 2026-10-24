# Automated rule checks — remaining work

Current enforcement and its semantic limits belong in
[verification scope](../../DOCS.md#66-verification-scope). This backlog adds no authoring rules
or inference semantics; use the [reference library](../README.md) for those contracts.

## Performance evidence

Complete the deferred full-validation performance and linear-work acceptance evidence:

- Add bounded work-counter fixtures for deep, wide, multi-parent, and independently cyclic
  graphs, using representative workloads and the public assessment/gate boundary.
- Reuse parsed contexts, incoming/outgoing indexes, and structural-cycle results. Eliminate
  whole-edge rescans per cyclic component and repeated eager closures for every descriptor.
- Demonstrate work proportional to source records, dependency edges, and necessary results;
  account for deterministic sorting and diagnostic witness output. Verify deep inputs avoid
  call-stack limits and equivalent input orderings retain stable semantic diagnostics.
- Measure representative latency and document results before claiming the remaining shared
  library performance requirement complete. Functional correctness tests alone do not supply
  this evidence.

These tasks carry the outstanding validation-performance requirements from the
[library roadmap](library-roadmap.md#validation-performance).

## Incremental validation — conditional

Incremental validation and cross-snapshot result reuse remain optional. Introduce them only if
measured latency warrants the added complexity; complete validation remains the default and
the authoritative release gate.

If reuse is introduced, require full-versus-incremental equivalence after additions, removals,
and reparenting. Invalidation must cover previous and current neighborhoods, incoming child
roles and eligibility, and the graph dependencies needed for ordering and cycles. Key reused
results by source identity and validator policy. When a reliable delta is unavailable, validate
the complete selected input; do not certify unassessed external updates.
