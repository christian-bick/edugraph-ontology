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
| Implement or review automated rule coverage | [Algorithmic check inventory](plan/automated-rule-checks.md) |

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
