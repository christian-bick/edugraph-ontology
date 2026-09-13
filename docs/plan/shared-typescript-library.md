# Shared TypeScript ontology library requirements

Status: proposed requirements, reorganized by capability on 2026-09-13. This document combines
the ontology editor's stated integration requirements with dataset labelling and content
classification use cases and keeps the public boundary usable by future consumers. It is not
an implementation report or a new ontology ruleset.

The intended outcome is one implementation of agreed ontology semantics serving released-data
consumers, tools validating supplied snapshots, and editors working on unpublished drafts.
One package and tagged release may contain all modules; exact module names and implementation
choices remain open. Examples describe behavior, not prescribed API signatures.

Scope decision: the library inspects caller-supplied ontology snapshots. It does not own an
editable ontology model or the operations that produce those snapshots. This boundary narrows
the original editor integration request; accepting unpublished data does not imply implementing
editor functionality.

## Source of truth and scope

The [reference library](../README.md) owns ontology meaning. In particular, consult
[content evidence](../content-evidence.md) (ONT-E7), [structure](../structure.md), and
[relations](../relations.md) (ONT-R4 and ONT-R5). The
[automated-check inventory](automated-rule-checks.md) owns the agreed enforcement boundary.
These requirements organize access to those semantics; they do not add unresolved inference rules.

| Shared library responsibilities | Consumer responsibilities |
| --- | --- |
| Validate and query a supplied snapshot | Construct and maintain editable document state |
| Parse RDF text into terms and source information | Project parsed data into an application model and serialize/save it |
| Build read-only query indexes and return findings | Apply additions, renames, deletions, relation edits, and dimension changes |
| Expose ontology facts for inspection | Manage undo/redo, reference repair, selections, reactive state, and persistence |

Supplying a snapshot after an edit is the consumer's responsibility. The library must neither
apply that edit nor repair or persist its results. This also applies to future consumers such
as batch importers, annotation services, and command-line analysis tools.

The starting source review was at `ceeebce`. At that revision, validators accept supplied
statements, relation contracts and families are exported, and generated helpers include
`isLabelEligible`. Parsing and validation share one module, parsing flattens RDF terms, eligibility
and traversal helpers depend on generated data, and structural ordering returns no findings when
cycles prevent assessment. See [validation](../../libraries/typescript/OntologyValidation.ts),
[code generation](../../src/ontology/generate-ts.py), and
[packaging](../../libraries/typescript/package.json). This baseline must not be read as completion
of the requirements below.

## Capability map

The five capability groups list consumers only where there is a concrete use case; shared delivery
requirements follow in section 6. They do not require any particular editor, dataset pipeline, or
classifier architecture. Requirement IDs follow their parent section, such as R2.1 and R2.2.

| Capability | Requirements |
| --- | --- |
| [Parsing RDF](#1-parsing-rdf) | R1.1 |
| [Drafting and comparing snapshots](#2-drafting-and-comparing-ontology-snapshots) | R2.1, R2.2, R2.3 |
| [Navigation and traversal](#3-ontology-navigation-and-traversal) | R3.1 |
| [Ontology validation and inspection](#4-ontology-validation-and-inspection) | R4.1, R4.2, R4.3, R4.4 |
| [Annotation eligibility](#5-annotation-eligibility-for-datasets-and-classification) | R5.1 |
| [Shared delivery and verification](#6-shared-delivery-and-verification) | R6.1, R6.2, R6.3 |

Pseudocode uses illustrative operations, not prescribed API signatures or promises that these
entry points already exist. `core`, `rdf`, and `generated` denote the conceptual library modules;
`editor`, `dataset`, and `classification` denote consumer-owned functions and policies.
Any file/network loading shown as input preparation is consumer-owned.

## 1. Parsing RDF

Convert supplied RDF text into terms and source information that other capabilities can consume.
Parsing does not construct an editor model or serialize one. The reusable parsing contract is R1.1.

| Consumer | Use case and responsibility |
| --- | --- |
| Ontology editor | Parse authored source once, retain RDF term/source information, and map it into the editor-owned model. The editor owns edits, serialization, and persistence. |

**Pseudocode example:**

```text
# Conceptual module names only; filesystem/network access is consumer-owned.
parsed = rdf.parseOntologySources(sourceTexts)  # filenames, kinds, full RDF terms

# Editor: library parses; editor constructs and saves its own model.
editorModel = editor.buildModel(parsed)
editor.edit(editorModel)
editor.save(editor.serialize(editorModel))
```

### R1.1. Reusable RDF parsing with faithful source information

Retain `parseOntologySources` as a reusable parsing capability, separate from algorithms. Parse
source text once and expose terms and source information that validation and other consumers can
read. Each consumer constructs its own application model from that result; the library does not
define or build an editable model, editing commands, or synchronization with application state.
Preserve source filenames/kinds and full RDF term information, including term kinds, literal
language and datatype, blank-node identity with correct document scope, and graph terms where
supported by the selected format. A simplified validation projection may be derived from this
representation, but must not be its only retained form.

Parsing must accept supplied text without filesystem reads. Report unsupported syntax and parse
failures explicitly rather than silently dropping information. This requirement preserves RDF
meaning; it does not by itself promise original comments, whitespace, prefixes, statement order,
or byte-identical serialization, nor require the library to provide a serializer.

**Example:** a label literal carrying `@de` and a numeric literal carrying an XML Schema datatype
retain those distinctions in the parse result. An editor can map those terms into its own model;
a batch validator can inspect the same parse result without creating an editable model. A malformed
source produces a source-associated parse error rather than an apparently valid empty ontology.

**Note:** Assess compatibility strategy with the editor throuroughly before implementation. Consider its
roundtrip parse/serialize cycle and it test-suite. It might be necessary to replicate/migrate its implemetation.

## 2. Drafting and comparing ontology snapshots

Support inspection of snapshots produced by consumers, including unpublished inputs and version
comparisons. Drafting operations remain entirely consumer-owned. R2.1 and R2.2 provide independent
read-only query contexts; R2.3 provides inspectable facts for consumer comparisons and impact analysis.
A library diff, merge, rename-detection, or migration engine is not required. Comparing records by
IRI does not establish that a removal and addition constitute a semantic rename.

| Consumer | Use case and responsibility |
| --- | --- |
| Ontology editor | Apply edits in its own model, then inspect the resulting snapshot alongside a release or earlier snapshot without a library version bump. Own undo/redo, reference repair, change review, and merging. |
| Dataset labelling | Normally share one index for the pinned release. When explicitly evaluating a new release, compare definitions, relations, and eligibility dependencies to decide which annotations need review or regeneration. Own the dependency graph and adoption policy. |

**Pseudocode example:**

```text
released = core.index(releasedSnapshot)

# Editor applies the change outside the library, then supplies a new snapshot.
editor.renameEntity(editorModel, oldIri, newIri)
draft = core.index(editor.exportSnapshot(editorModel))
editor.showComparison(editor.compareRecords(released.records, draft.records))

# Dataset: a new pinned version is an explicit adoption decision.
candidate = core.index(candidateReleaseSnapshot)
changes = dataset.compareRecords(released.records, candidate.records)
affected = dataset.dependencyGraph.affectedBy(changes)
dataset.reviewForRegeneration(affected)

# All comparison/editing/adoption functions above belong to their consumers.
# Each library index answers only for its own input and cannot change the other.
```

### R2.1. Read-only algorithms over caller-supplied snapshots

Algorithms accept caller-supplied ontology snapshots using full IRIs, independently of generated
enums. A snapshot may come from released data, repository source, an importer, or an editor.
Identifiers absent from the bundled release are resolved against the supplied snapshot rather
than rejected solely because they are absent from generated enums.

The algorithms inspect that input without mutating it or owning editing operations, document
state, reference repair, or persistence. Operations use the explicitly supplied snapshot, with
no implicit fetch, upgrade, or mixing of released data into it. Released consumers may continue
to use their pinned bundled data.

**Example:** an editor renames a hypothetical entity to `https://example.org/draft/RevisedConcept`
and updates its references using its own editing operations. It then supplies the resulting
snapshot for validation. The library inspects those records without regenerating enums, performing
the rename, or repairing references. Repository-source validation uses the same input boundary.

### R2.2. Reusable indexed context and cache isolation

Allow parsed or normalized input to produce a reusable read-only context for validation and queries.
Reuse entity lookup, adjacency, relation-family, and child-role indexes across operations where
appropriate. Do not require reparsing or rebuilding the complete graph for each label query.

Caches must be bound to the snapshot and relevant algorithm policy. Contexts are read-only from
the caller's perspective; internal memoization may reuse query results without changing ontology
data. When source data changes, the caller can supply a new snapshot and build a new context.
Hidden global IRI-only caches must not leak results between snapshots. Mutable draft stores,
editing commands, reactive synchronization, and index-update APIs are outside this requirement.

**Example:** a dataset consumer uses one immutable, pinned ontology release. It can share one
release-bound index across repeated queries and replace it when the pinned version changes;
separate indexes are not needed merely because several application components query it.

An editor, however, may inspect both that release and an unpublished document using the same
library version. Suppose a known descriptor has no constituent children in the release, but the
editor adds one through its own editing operations. The editor supplies the resulting snapshot
to a separate read-only context: the descriptor is eligible in the release and ineligible in the
edited snapshot. Their cached answers must remain separate as the library validates and queries the supplied snapshots;
it neither applies the edit nor manages the editor's mutable state.

### R2.3. Inspectable facts for downstream dependency tracking

Expose the entity, definition, and relation facts needed to explain query results and establish
dependencies, including incoming constituent children and specialization ancestry. These can be
readable records or indexed queries; a dedicated dependency-tracing framework is not required.
Use full IRIs and distinguish asserted from derived facts. Do not require consumers to parse
diagnostic prose or rebuild ontology-specific relation semantics to obtain those facts.

Consumers remain responsible for their own content hashes, dependency graphs, caches, render
identities, and scheduling. The library need not implement a consumer's invalidation system.

**Example:** a dataset pipeline records that an annotation's eligibility depends on its
descriptor's constituent children. Adding an otherwise unused child changes that fact. Reparenting
the child affects both old and new parents; an unrelated definition change need not invalidate it.

## 3. Ontology navigation and traversal

Provide direct relation access, schema-derived inverse/superproperty access, and precisely
defined traversals through the shared contracts in R3.1. Navigation can use organizational nodes;
that does not make them eligible direct annotations. Reading a path is distinct from transferring
a claim through an agreed inference rule.

| Consumer | Use case and responsibility |
| --- | --- |
| Ontology editor | Build trees and relation views from the shared relation contracts, including inverse navigation. Distinguish authored assertions from derived access and own UI layout, selection, filtering, and editing controls. |
| Dataset labelling | Use specialization ancestry for capability coverage and existing constraint helpers for their documented purposes. Use structural navigation for context, without treating constituent ancestry as target satisfaction. Dataset matching remains application-owned. |
| Content classification | Inspect descriptor definitions and neighbors and, where appropriate, derive broader claims through specialization. Keep direct model predictions distinct from derived claims; structural or progression proximity must not manufacture additional predictions. |

**Pseudocode example:**

```text
index = core.index(snapshot)

# Editor can navigate a schema-derived inverse without changing authored data.
authored = index.authoredAssertions()           # hypothetical: A partOf B
children = index.related(B, hasPart)            # derived inverse access includes A
editor.showRelations(authored, children, keepOriginsDistinct = true)

# Dataset: broader target coverage uses equality or specialization only.
provided = index.lookupDescriptor(providedIri)
coverage = {provided.iri} union index.traverse(provided, specializes)
dataset.checkTargetCoverage(targetLabels, coverage)

# Classification: inferred broader claims stay separate from direct predictions.
direct = classification.predict(content)
derived = union(index.traverse(label, specializes) for label in direct.knownLabels)
classification.store(directPredictions = direct, derivedClaims = derived)
# Traversing partOf or progression relations is not this inference rule.
```

### R3.1. Shared relation contracts and precise graph operations

Export the agreed relation schema contracts and families for all consumers. Make their properties
addressable with full IRIs so consumers do not recreate a semantic registry or infer namespaces
from display names. Expose supplied-snapshot equivalents of the existing direct relation,
eligibility, and traversal helpers. Existing constraint/deduction helpers should also delegate to
snapshot-capable core operations without changing their documented semantics.

Keep authored assertions distinguishable from inverse and superproperty access derived from the
schema. Checks about authored relations must consume assertions, not count derived access as extra
authorship. Document direction, equality/self-inclusion, duplicate handling, and cycle behavior for
queries. Capability substitution uses equality or specialization; combined structural navigation
does not itself establish inheritance. Preserve the agreed deduction behavior; introduce no new
progression propagation, general inference engine, or interpretation of definition prose.

**Example:** a hypothetical source explicitly authors `A partOf B`. Querying `B hasPart A`
returns schema-derived inverse access, distinguishable from that authored assertion. The inverse
may be computed through an index; materializing a second record is not required. Separate access
APIs or origin metadata can preserve the distinction. Authorship checks must not flag the derived
inverse as an explicitly authored inverse-relation violation. A specialization path from `Square`
to `Rectangle` supports a broader capability claim; merely
following a `structures` path does not establish that claim.

## 4. Ontology validation and inspection

Assess the supplied ontology itself using agreed upstream rules, structured findings, and explicit
check outcomes. R4.1-R4.3 define the shared validation boundary; R4.4 defines performance
expectations.
This capability does not validate the truth of an annotation against content or prescribe whether
a consumer may save, publish, adopt a release, or run a model.

| Consumer | Use case and responsibility |
| --- | --- |
| Ontology editor | Run the same ontology checks as the repository gate on authored draft input, navigate findings, and show skipped checks. Own when to run checks and which outcomes block saving or publishing. |

**Pseudocode example:**

```text
# Validate authored input with its schema, not a flattened set of derived facts.
assessment = core.validateOntology(authoredSnapshot)
# assessment includes findings and per-check ran/failed/skipped/error information.

editor.showFindings(assessment.findings, assessment.checks)
editor.applySaveAndPublishPolicy(assessment)       # editor-owned decision

# Example outcome: structural cycle fails; ordering is skipped because of the cycle.
# The editor does not interpret skipped ordering or a parse error as a passed check.
```

### R4.1. One validation implementation with consumer-owned workflow policy

The ontology repository gate and consumers must use the same public validation functions and
relation contracts. Retain the existing agreed checks and their semantic boundaries. New checks
must follow approved upstream rules, not accidental behavior in a particular application.

Keep save/push blocking, user roles, release approval, and application-specific record completeness
outside the library. The ontology does not impose a required Area/Ability combination, primary
descriptor, single-parent hierarchy, or fixed descriptor count on every consumer.

**Example:** the same supplied ontology produces the same structural findings in the repository
CLI and an editor. The editor may allow saving an invalid draft while blocking publication.

### R4.2. Actionable and deterministic findings

Preserve stable check IDs, rule IDs, diagnostic codes, explanatory messages, and witnesses.
Add structured entity/property references using full IRIs, and structured references where
applicable. Source code references are not necessary. Compact names may remain display 
text, but must not be the only navigation identity. Consumers must not need to parse 
messages or a joined source string to locate an entity or file.

Equivalent authored inputs must yield equivalent semantic findings and stable witness selection
independent of input enumeration order. Document result ordering; source locations can naturally
change when a source file is edited. Preserve full RDF identity rather than normalizing distinct
namespaces into the same local name.

**Example:** a mixed-child-role finding identifies the parent, both child witnesses, and the
relevant relation properties by full IRI. Two hypothetical entities named `Thing` in different
namespaces remain distinguishable. Reordering the same statements does not change which rule failed.

### R4.3. Explicit failed, skipped, and incomplete assessment

Expose which requested checks ran, which failed, and which could not run, with reasons and
prerequisite references where applicable. Distinguish invalid input, successful assessment,
findings, and incomplete assessment. An empty findings list alone must not mean every check passed.

For structural cycles, preserve the cycle finding and mark structural ordering as unassessed or
skipped because its prerequisite failed. Independent checks must still run where possible. A
partial-assessment API is acceptable only with explicit scope; it cannot masquerade as the complete
repository gate. Consumers decide what these statuses allow in their own workflow.

**Example:** a cyclic draft reports a structural-cycle finding, an ordering check skipped due to
that cycle, and the outcomes of independent relation checks. A parser error is an input failure,
not a zero-finding validation success. No new normative rule is invented for the skipped state.

### R4.4. Efficient complete validation; optional incremental results

Efficient complete validation is the baseline and completion requirement. Share parsed/indexed
contexts and use work-counter tests on representative and adverse graph shapes. Aim for work
linear in input records, dependency edges, and necessary output; avoid blind Cartesian scans,
repeated whole-graph work per entity, recursion limits, and compulsory all-pairs closure tables.
Account explicitly for output size when callers request many closures or witnesses.

**Example:** increasing a chain or wide family from 1,000 to 10,000 edges produces proportionate
graph work without stack overflow. An editor can supply a new snapshot for complete validation
after applying its own edits.

## 5. Annotation eligibility for datasets and classification

Apply ONT-E7 equally to human-authored labels, generated dataset annotations, candidate classifier
vocabularies, and direct model predictions. R5.1 defines this shared structural eligibility contract.
Eligibility is a prerequisite for considering a descriptor as a direct label, not evidence that
it applies to particular content. See also [annotations and models](../annotations-and-models.md).

| Consumer | Use case and responsibility |
| --- | --- |
| Ontology editor | Display whether a known descriptor is eligible for direct annotation, including changes caused by edited child relations. Query the complete supplied snapshot even when the UI tree is filtered. Ineligible organizational nodes remain useful and do not alone make the ontology invalid. |
| Dataset labelling | Check authored target/module labels and actual emitted annotations against the complete pinned ontology. Report unknown identifiers and organizational labels. Separately establish that the generated exercise supports each label; application-specific cardinality stays downstream. |
| Content classification | Use eligible descriptors when defining the direct-prediction vocabulary and check predicted/imported IRIs against the matching ontology version. A known eligible prediction still requires content evidence; confidence alone does not prove it. Do not replace an organizational prediction with arbitrary children. |

**Pseudocode example:**

```text
index = core.index(completeSnapshot)

function inspectLabel(iri):
    descriptor = index.lookupDescriptor(iri)
    if descriptor is missing: return UnknownIri(iri)
    return index.isLabelEligible(descriptor)     # known descriptor, complete input

# Editor only displays the result; it owns the navigation tree and its filters.
editor.showEligibility(selectedIri, inspectLabel(selectedIri))

# Dataset checks both label eligibility and, separately, content evidence.
for label in dataset.emittedLabels(sample):
    dataset.handleEligibility(label, inspectLabel(label))
dataset.verifyContentEvidence(sample)

# Classification uses the same structural rule for vocabulary and prediction checks.
vocabulary = [d.iri for d in index.descriptors() if index.isLabelEligible(d)]
predictions = classification.predict(content, vocabulary)
for prediction in predictions:
    classification.handleEligibility(prediction.iri, inspectLabel(prediction.iri))
classification.assessPredictionEvidence(content, predictions)
# Model behavior, confidence thresholds, and rejection/review policy remain downstream.
```

### R5.1. Apply the existing eligibility rule without confusing absence with eligibility

**Intent and origin:** expose ONT-E7 consistently to consumers asking whether a known descriptor
may be considered for direct content annotation. The structural eligibility criterion comes from
the ontology. Explicit lookup and input-scope handling are API safeguards around that criterion;
they do not introduce new ontology rules or content-classification judgments.

For a known descriptor in a complete supplied snapshot, no constituent children means structurally
eligible. Specialization children alone do not disqualify it. Include incoming authored `partOf`
relations through inverse access even when no explicit `hasPart` assertion appears on the parent.
Mixed child roles make it ineligible and remain a separate structural validation finding.
Organizational descriptors are valid ontology entities; their ineligibility alone must not fail
ontology validation.

Resolve the identifier against the supplied snapshot before treating an empty child list as a
positive answer. An unknown IRI and a known descriptor with no children are different cases.
The API may enforce this through prior lookup, a validated descriptor handle, or an explicit
unknown-entity result/error; no particular result type is required. This is not a new O1
descriptor-integrity gate.

The baseline API may require a complete supplied snapshot. Consumers should query that full index
even when displaying a filtered view. A documented completeness prerequisite is sufficient;
partial-snapshot support, automatic completeness detection, fetching missing data, and a
partial-ontology management subsystem are not requirements. Only if the API explicitly supports
known partial inputs must it distinguish insufficient information from a positive eligibility
assessment. Absence of visible children in a filtered input cannot establish complete-snapshot
eligibility under ONT-E7.

Eligibility only permits a descriptor to be considered as a label. Deciding whether an exercise,
image, or other content actually supports that label remains the consumer's responsibility.

**Example:** the complete ontology index reports `Rectangle` as eligible despite its specializing
children, and `CircularShapes` as ineligible because it has constituent children. A hypothetical
misspelled IRI absent from the inventory must not receive the same positive answer as `Rectangle`
merely because both lookups return no constituent children.

An editor may hide those constituent children in its navigation tree while still asking the full
index about `CircularShapes`; the answer remains ineligible. The library does not need to manage
that filtered tree. Likewise, a dataset uses its complete pinned index for structural eligibility,
then separately checks whether its generated content supports the chosen label. It does not label
an unrelated image as `Rectangle` merely because that descriptor is eligible.

## 6. Shared delivery and verification

These requirements support all five capabilities rather than defining additional ontology semantics.

### R6.1. Independently importable algorithms, parsing, and generated data

Provide separate public entry points for algorithms/contracts, RDF parsing, and generated
enums/data. The algorithmic core must build, import, and operate without generated ontology files
or an RDF parser. Importing it must not load the released ontology dataset, parser, filesystem,
or rule Markdown. Generated convenience helpers must delegate to the core with their bundled
snapshot, rather than retaining a second implementation of the same algorithm.

Keep filesystem access and process control in CLI wrappers. Browser consumers must be able to
import the core and parsing entry points without Node filesystem dependencies. Preserve useful
released-data convenience APIs through adapters where practical; document any migration required.

**Example:** a browser validator loads the core and supplies an in-memory graph without importing
`Area`. A separate application imports generated enums and calls a convenience helper whose
answer comes from the same core algorithm. Only a caller importing the parser loads RDF parsing.

### R6.2. Ship the matching original rule documents

Include the original authoring references and relevant linked supporting documents in the package,
preserving their relative structure and the local links needed to understand the rules. Do not
maintain a rewritten consumer ruleset or duplicate normative text in generated API documentation.
Validate the intended document/link closure in the packaged artifact; external links may remain
external. Document any intentionally out-of-package repository links.

Make packaged documents discoverable by local agents and available for explicit browser bundling
through documented paths or asset access. Algorithm imports must not automatically load Markdown.
The package version and release tag identify the matching release; no additional provenance
manifest is required. Algorithm policy identity for optional caching is a separate concern.

**Example:** an agent reads the installed content-evidence document and follows its relative link
to structure guidance. A browser help panel explicitly bundles the same files. Neither depends
on live `main` Markdown to explain the installed library's rules.

### R6.3. Verify the public integration boundary

Test the distributed public entry points and packaged artifacts, not only private helpers.
Required coverage includes core builds/imports without generated data or parser installation;
browser use without Node filesystem dependencies; equivalent results through repository and
consumer APIs; supplied IRIs absent from generated enums; valid multi-parent structures; snapshot
pairs with different entities, relations, and constituent children; and snapshot-cache isolation.
Verify that validation and queries leave supplied ontology data unchanged. Exercise positive and
negative fixtures, unknown-entity handling, any explicitly supported partial-input assessment,
term-preserving parsing, actionable diagnostics,
cycle-induced skipped checks, and explicit parse failures.

Retain generated-client regressions and prove that convenience adapters use the shared algorithms.
Test relevant equivalence with focused fixtures rather than introducing a second ontology
translation engine. Verify packaged Markdown access and links as well as executable exports.

**Example:** a test consumer loads only the core in a browser bundle, supplies a hypothetical
unpublished entity, and gets the same findings as the repository gate for equivalent authored input. Another
test supplies snapshots with and without a constituent child and verifies that supplied-snapshot
and bundled-data adapters apply the same eligibility rule without editing the input. A package
inspection checks that rule files ship without being pulled into the algorithm bundle.

## Completion boundary

Completion means the shared semantics, explicit assessment contract, portable import boundaries,
documentation assets, and integration tests described above are implemented and documented.
Editable models, mutation operations, reference repair, undo/redo, reactive state, serialization,
persistence, editor UI, and consumer-specific scheduling remain outside the shared library scope.
Completion does not require incremental result reuse or new ontology inference. Changes to those
boundaries require an explicit decision rather than an inferred consumer preference.
