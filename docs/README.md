# Ontology development references

Instructions for people and agents defining and reviewing the EduGraph ontology.
Start here when changing a descriptor, relation, or competency description.

| Work | Read |
| --- | --- |
| Add, rename, or redefine a descriptor | [Descriptors](descriptors.md), [content evidence](content-evidence.md), and [structure](structure.md) |
| Change family placement or inheritance | [Structural relations](structure.md) and the affected definitions |
| Change a constraint, progression, or competency composition | [Other relations](relations.md) and [content evidence](content-evidence.md) |
| Review or implement any ontology change | [Change review](change-review.md), plus the relevant references above |
| Use descriptors with annotated content or models | [Content evidence](content-evidence.md), especially [labeling eligibility](content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes), and [annotations and models](annotations-and-models.md) |
| Review proof, evidence, or error-guarantee context | [Justification Scopes](justification.md) and [content evidence](content-evidence.md) |
| Find pending consolidation decisions | [Consolidation record](plan/ontology-consolidation.md) |
| Review the merged Algebra and school-analysis design, annotation migration, and next extension priorities | [Algebra and analysis design record](plan/algebra-family-draft.md), including [migration and adoption](plan/algebra-family-draft.md#2026-10-10-migration-and-adoption) and the [extension roadmap](plan/algebra-family-draft.md#recommended-next-ontology-extensions) |
| Review NumberTheory implementation, compare the researched alternatives, and track number-system Scope decisions | [NumberTheory design record](plan/number-theory-basics-draft.md), including the [second draft](plan/number-theory-basics-draft.md#draft-2--a-university-informed-subject-structure) and [implementation and adoption](plan/number-theory-basics-draft.md#implementation-and-adoption--2026-10-10) |
| Check remaining core CCSS algebra, function, and number-system coverage against the merged ontology | [Core coverage audit](plan/core-ccss-coverage-audit.md), including supported compositions, evidence boundaries, and targeted extension recommendations |
| Review the merged advanced complex-number stages 3A and 3B | [Advanced complex numbers design record](plan/advanced-complex-numbers-draft.md), including [stage 3A implementation](plan/advanced-complex-numbers-draft.md#implementation-and-adoption--2026-10-11), [stage 3B implementation](plan/advanced-complex-numbers-draft.md#stage-3b-implementation--2026-10-21) merged at `5733989` through PR #77, CCSS (+) mappings, alternative structures, and deferred Scopes |
| Review the merged further functions and trigonometry implementation and its advanced CCSS coverage | [Further functions and trigonometry design record](plan/further-functions-trigonometry-draft.md), including [implementation and adoption](plan/further-functions-trigonometry-draft.md#implementation-and-adoption--2026-10-11), merged at `f0dffbf` through [PR #72](https://github.com/christian-bick/edugraph-ontology/pull/72), 14 terminal standards, and deferred subtype refinements |
| Review the merged LinearAlgebra stage 5A implementation and its university continuation | [Linear algebra design record](plan/linear-algebra-draft.md), including [implementation and adoption](plan/linear-algebra-draft.md#implementation-and-adoption--2026-10-11); merged at `69f60f9` through [PR #73](https://github.com/christian-bick/edugraph-ontology/pull/73) as a separate root field alongside Algebra and Analysis |
| Review the merged Calculus implementation from school foundations through university entry | [Calculus design and implementation record](plan/calculus-family-draft.md), including [implementation and adoption](plan/calculus-family-draft.md#implementation-and-adoption--2026-10-20), merged at `5f52168` through [PR #74](https://github.com/christian-bick/edugraph-ontology/pull/74), the [five expanded method/application families](plan/calculus-family-draft.md#2026-10-20--requested-family-expansion), consolidated limit properties and the sequential-limit theorem, and the direct-Calculus-label migration |
| Review the merged Probability, Statistics, and Combinatorics extension | [Subject-family record](plan/probability-statistics-combinatorics-draft.md), merged at `9750eff` through PR #75, including school and introductory-university coverage, shared set foundations, probability and algebra representation Scopes, and prior adoption decisions |
| Review the remaining advanced-school extensions | [Remaining school foundations](plan/remaining-school-foundations-draft.md): spatial geometry and complex stage 3B merged through PRs #76–77, GraphTheory implemented for review as a root Area, and proposals for logical foundations and targeted conic/number-theory follow-ups |
| Implement or review automated rule coverage | [Algorithmic check inventory](plan/automated-rule-checks.md) |
| Plan shared library capabilities for the editor, dataset labelling, and content classification | [Shared library capabilities and requirements](plan/shared-typescript-library.md) |
| Implement the shared library requirements | [Coverage and implementation sequence](plan/shared-typescript-library-implementation.md) |
| Implement Python parity without ontology validation | [Typed Python library implementation plan](plan/shared-python-library-implementation.md) |

## How to use these references

The five rule documents define the authoring contract. Each ends with an Audit checklist.
Authors use the rules and examples; reviewers use the checklist and cite the relevant rule ID.

| Prefix | Subject |
| --- | --- |
| `ONT-Dn` | Descriptor meaning, dimensions, definitions, and identifiers |
| `ONT-En` | Evidence, specificity, and interpretation of content |
| `ONT-Sn` | Structural placement and specialization |
| `ONT-Rn` | Logical constraints, progression, inference, and composition |
| `ONT-Wn` | Change review and verification |

IDs are stable. Add new IDs rather than renumbering existing rules; retire an ID without reusing it.
For example, link a structural finding to
[ONT-S4](structure.md#ont-s4--composition-may-lead-into-specialization).
An agent instruction or application guide should link the rule rather than copy its wording.

Read an entity's definition with its dimension and neighboring concepts. Existing assertions,
old documents, and current application behavior are evidence to inspect, not exceptions to the
rules. If they disagree, record the discrepancy and resolve its meaning explicitly.

## Where information belongs

- [README.md](../README.md) introduces the ontology and its uses.
- [DESIGN.md](../DESIGN.md) explains design choices and relates them to academic literature.
- [DOCS.md](../DOCS.md) covers builds, generated libraries, APIs, and release workflows.
- This library defines ontology authoring and review rules.
- [The consolidation record](plan/ontology-consolidation.md) tracks findings and unfinished work.
- [The check inventory](plan/automated-rule-checks.md) separates existing automated coverage,
  missing checks, and semantic review; it plans implementation rather than redefining rules.
- Application repositories own their implementation, labeling format, and validation requirements.

The Turtle files are the authored machine-readable model. The references explain how to develop
that model; they do not imply that every rule is enforced automatically. Generated code and a
passing build are not substitutes for the semantic review in
[change review](change-review.md).

The ontology leaves descriptor composition open. Any completeness requirements for a particular
use belong to that application, not to the shared ontology.
