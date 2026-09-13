# edugraph-ts

TypeScript definitions and enums for the [EduGraph Ontology](https://github.com/christian-bick/edugraph-ontology).

## Installation

You can install this package directly from GitHub Releases:

```bash
npm install https://github.com/christian-bick/edugraph-ontology/releases/download/<version>/edugraph-ts.tgz
```

## Usage

### 1. Enum Mapping & Descriptions
Hovering over any enum member (such as `Area.AbsoluteNumberMagnitude`) in your IDE will display the entity's RDF definition as a JSDoc tooltip.

```typescript
import { Area, Scope, Ability } from "edugraph-ts";

// Use the enums in your code
const area = Area.IntegerMultiplication;
console.log(`Area IRI: ${area}`);  // http://edugraph.io/edu/IntegerMultiplication
```

### 2. Entity Descriptions & Definitions
You can query individual descriptions directly using the `definition` helper or the `relations` object:

```typescript
import { Area, definition, relations } from "edugraph-ts";

// 1. Using the definition() helper function
const def = definition(Area.AbsoluteNumberMagnitude);
// def is: "The nonnegative magnitude of a rational number independently of its sign..."

// 2. Accessing the definition property on the relations object
const relDef = relations(Area.AbsoluteNumberMagnitude).definition;
```

### 3. Individual Relations
You can query direct and transitive structural, specialization, and progression relationships between individuals:

```typescript
import { Area, Scope, relations, specializesTransitive, structuresTransitive, expands } from "edugraph-ts";

// Direct relations map
const squareRelations = relations(Area.Square);

// Direct expands list
const signExpands = expands(Area.SignNotation);  // [Area.AbsoluteNumberMagnitude, Area.ZeroConcept]

// Specialization inheritance does not traverse partOf
const inheritedCapabilities = specializesTransitive(Area.Square);
console.log(inheritedCapabilities.includes(Area.Polygon));  // true

// Combined structural navigation traverses both partOf and specializes
const structuralContext = structuresTransitive(Scope.MeterScale);
console.log(structuralContext.includes(Scope.DistanceAbstraction));  // true
```

### 4. Direct-label eligibility

Use `isLabelEligible` to distinguish descriptors that may directly label content from
organizational descriptors. A descriptor with constituent children is organizational. A broader
descriptor with specialization children can still be observable and eligible. Eligibility alone
does not prove that particular content supports the label.

```typescript
import { Area, isLabelEligible } from "edugraph-ts";

isLabelEligible(Area.CircularShapes); // false: it organizes constituent shape concepts
isLabelEligible(Area.Rectangle);     // true: Square specializes it
```

### 5. Ontology validation

The TypeScript library exports the ontology validation rules used by the repository and editor.
Rules operate on normalized authored statements; `parseOntologySources` converts Turtle source
text while preserving its source kind and filename.

```typescript
import { parseOntologySources, validateOntology } from "edugraph-ts";

const statements = parseOntologySources([
  { name: "core-schema.ttl", kind: "schema", text: schemaTurtle },
  { name: "core-areas-math.ttl", kind: "descriptors", text: areasTurtle },
]);
const findings = validateOntology(statements);
```

Each finding has a stable check ID, normative rule ID, code, message, and compact witness.

The package also exports `validateDocumentation`. It accepts repository-relative Markdown
sources, the available repository paths, and parsed ontology statements. This lets editors run the
same local-link, rule-reference, Audit-entry, and named-example checks as the repository gate.
External links are deliberately outside this mechanical validation.

### 6. Supplied snapshots and portable imports

Use `edugraph-ts/core` for algorithms without the released dataset, parser, filesystem, or
Markdown. `edugraph-ts/rdf` adds text parsing. `edugraph-ts/generated` opts into released enums
and convenience helpers. The root import remains a compatibility entry point and loads all
of those capabilities. Core and parser entry points can be bundled for browsers.

```typescript
import { createOntologyContext, assessOntology, RELATION_IRIS } from "edugraph-ts/core";
import { parseOntologySources } from "edugraph-ts/rdf";

const snapshot = parseOntologySources([
  { name: "schema.ttl", kind: "schema", text: schemaTurtle },
  { name: "draft.ttl", kind: "descriptors", text: draftTurtle },
]);
const context = createOntologyContext(snapshot);
const assessment = assessOntology(context);
const descriptor = context.lookupDescriptor("https://example.org/draft/Concept");
if (descriptor) {
  const eligibility = context.inspectLabel(descriptor.iri);
  const broader = context.traverse(descriptor.iri, RELATION_IRIS.specializes);
}
```

The context copies its input and exposes frozen records. Reuse it for repeated queries; create
a new context after changing source data. It neither fetches missing records nor mixes in the
bundled release. Include schema declarations for inverse/superproperty queries. Original
assertions remain available through `authoredAssertions`; `related(iri, property, "authored")`
excludes derived access. RDF graphs are retained in records; ontology queries inspect their union.

`inspectLabel` returns `unknown` for an absent descriptor. For a known descriptor it reports
eligibility and constituent children. `isLabelEligible` throws on an unknown IRI. Eligibility
requires a complete supplied snapshot, even when a consumer displays a filtered tree. No partial
snapshot detection or content-evidence judgment is provided.

`related` and `traverse` return unique full IRIs in codepoint order. Traversal terminates on
cycles and includes the start only if an actual edge/path returns to it. Equality for capability
coverage is explicit; only specialization supports that coverage, not combined structural
navigation. Constraint helpers preserve their existing documented operations.

`assessOntology` returns `valid`, `invalid`, or `incomplete`, plus each mandatory check's outcome.
Only `valid` means every check passed. A structural cycle reports O4 as failed and O5 as skipped;
independent checks continue. Findings retain IDs/codes and add full-IRI entity/property references
and structured source arrays. `assessOntologySources` from the RDF entry point additionally
returns `input-error` with a source-associated parse error when parsing cannot complete.

The RDF parser accepts Turtle (default), TriG, N-Triples, and N-Quads. It preserves term kinds,
literal language/datatype, document-scoped blank nodes, and graph names. Supply unique source
names and an optional `baseIRI`; absent a base, it uses the legacy EduGraph base. Unsupported
formats and parse failures are explicit errors. Formatting, comments, prefix choices, and
byte-identical serialization are not retained or provided.

### 7. Compatibility and matching rule documents

Existing root `parseOntologySources` still returns flat statements, now retaining original RDF
in `statement.rdf`. The RDF subpath's function returns rich statements. Existing root
`validateOntology` remains a findings-only convenience view; use `assessOntology` or
`assessOntologySources` to distinguish passed and skipped checks. Source diagnostics may use
full IRIs in messages; consumers should navigate using `references`, not parse display strings.

Released convenience functions now delegate to one bundled core context. Unknown runtime IRIs
passed to the boolean eligibility helper throw; callers accepting arbitrary input should use
`lookupDescriptor` or `inspectLabel`. Query outputs are sorted by IRI; callers must not rely on
previous traversal insertion order. The package's explicit subpaths replace undocumented deep
imports into implementation files.

Read `RULES.md` in the installed package for the original authoring documents and
intentional repository-only links. Local agents can read `references/docs/README.md` and follow
its document links. Browser help panels can explicitly bundle
`edugraph-ts/references/docs/content-evidence.md`. Algorithms never load these assets.
