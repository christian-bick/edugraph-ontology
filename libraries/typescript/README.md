# edugraph-ts

TypeScript definitions and enums for the [EduGraph Ontology](https://github.com/christian-bick/edugraph-ontology).

## Installation

You can install this package directly from GitHub Releases:

```bash
npm install https://github.com/christian-bick/edugraph-ontology/releases/download/<version>/edugraph-ts.tgz
```

## Usage

### 1. Enum Mapping & Descriptions
Hovering over any enum member (such as `Area.AbsoluteValue`) in your IDE will display the entity's RDF definition as a JSDoc tooltip.

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
const def = definition(Area.AbsoluteValue);
// def is: "The magnitude of a number without regard to its sign..."

// 2. Accessing the definition property on the relations object
const relDef = relations(Area.AbsoluteValue).definition;
```

### 3. Individual Relations
You can query direct and transitive relationships (e.g., taxonomic parents/children, progression paths) between individuals:

```typescript
import { Area, relations, partOfTransitive, expands } from "edugraph-ts";

// Direct relations map
const absValRelations = relations(Area.AbsoluteValue);

// Direct expands list
const absoluteExpands = expands(Area.AbsoluteValue);  // [Area.IntegerSigns, Area.ZeroConcept]

// Transitive partOf ancestors (AbsoluteValue -> ArithmeticEvaluation -> Arithmetic)
const transitiveParents = partOfTransitive(Area.AbsoluteValue);
console.log(transitiveParents.includes(Area.Arithmetic));  // true
```
