# Foundations — 2024–2025

These milestones reconstruct mainline source changes. Dates are UTC committer dates; they do
not establish when release artifacts were published or adopted.

- **2024-11-04:** The repository gained its first authored ontology and a Docker build using
  Apache Jena to convert Turtle into RDF/XML
  ([commit](https://github.com/christian-bick/edugraph-ontology/commit/cdfa0ce328d97491cc6d515e5ada6a8061bcfbf8)).
- **2025-08-10–12:** Docker gained TypeScript enum generation for Areas, Scopes and Abilities.
  The release workflow added a TypeScript package alongside the ontology files; compilation
  to JavaScript and declaration files followed
  ([generation](https://github.com/christian-bick/edugraph-ontology/commit/ab429eb07edd9cc3f46d676f6217fb2276295460),
  [packaging](https://github.com/christian-bick/edugraph-ontology/commit/4cf7231879b34fbf7c423a0be56adcd520d88b98),
  [compilation](https://github.com/christian-bick/edugraph-ontology/commit/1ad32b71354839dd908aa16e83af8cc4e5fb9010)).
- **2025-08-18:** Scope refinements added ten-frame representations and time intervals,
  including seconds, minutes, hours, days, weeks and months
  ([ten frames](https://github.com/christian-bick/edugraph-ontology/commit/0ff6b6c6cf3ac7b271bc34c1f972503a619cbd5c),
  [time intervals](https://github.com/christian-bick/edugraph-ontology/commit/e32428da436322b4929cd5ddafaeafac7ed7a6dc)).
- **2025-08-20:** Examples were moved from definition text into separate `rdfs:comment`
  annotations
  ([commit](https://github.com/christian-bick/edugraph-ontology/commit/a00ce0730380153e5b5cf12db530c558f5d5c98e)).
- **2025-12-17:** The repository license changed from GPL version 3 to Apache License 2.0
  ([commit](https://github.com/christian-bick/edugraph-ontology/commit/76d332d25f4ffc5620a7ec8fb5cbb0ee065a8fbf)).
