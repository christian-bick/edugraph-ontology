# Model and clients — January–August 2026

Dates are UTC: PR merge dates where available, otherwise committer dates. Ranges group related changes.

- **January 11 — Numeric implications.** Added
  [implication and inverse relations](https://github.com/christian-bick/edugraph-ontology/commit/45d43b7979f16d5dd0393836fcaedcc82a220774),
  numeric-range implication chains, and
  [transitivity declarations](https://github.com/christian-bick/edugraph-ontology/commit/bfdcb3362ea83f8a06b27640a5da3bd69d69d5d0).
- **March 11–April 27 — Arithmetic, schema, and geometry.**
  [PR #1](https://github.com/christian-bick/edugraph-ontology/pull/1) separated schema declarations
  from descriptors. Subsequent refinements organized arithmetic operations, laws, and number
  domains; [PR #6](https://github.com/christian-bick/edugraph-ontology/pull/6) added geometric
  objects, relations, transformations, and calculations.
- **June 20–July 23 — Clients and logical constraints.**
  [Python enum generation](https://github.com/christian-bick/edugraph-ontology/commit/68e2ebb1669729aea6e34b2133b7ff0376a7fe17)
  joined the existing TypeScript client. Both clients gained relation traversal, definition
  lookup, and deduction helpers. July introduced
  [logical implication and contradiction](https://github.com/christian-bick/edugraph-ontology/commit/e9c5282fa20222d69627a2e3f8a6d4a9a5da16ef),
  numeric-range assertions, and
  [admitting-boundary queries](https://github.com/christian-bick/edugraph-ontology/commit/7a689877e293c8092f712dd7591ceb883c8b8ac5).
- **July 12–August 25 — Area and Scope growth.**
  [Aggregate vocabulary changes](https://github.com/christian-bick/edugraph-ontology/compare/26ac6bd161bcb23c1c92a51d1c53bb5b8887ab54...d0ca163bb905c86efcabd25c02e6ec8d4d570a34)
  expanded arithmetic strategies, fraction interpretation, collection and shape concepts, plus
  measurement, currency, representation, and complexity contexts. The Area inventory grew from
  203 to 281; Scopes grew from 117 to 331.
- **August 26–27 — Composition and specialization.** The
  [structural refactor](https://github.com/christian-bick/edugraph-ontology/compare/d0ca163bb905c86efcabd25c02e6ec8d4d570a34...32da807ff613315bb645c7e796136b614d8417cd)
  distinguished constituent membership from specialization, reclassified Area, Scope, and Ability
  parent links, and added structural superproperties, inverses, and generated client access.
