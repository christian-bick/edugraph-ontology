# edugraph-ts

TypeScript definitions and enums for the [EduGraph Ontology](https://github.com/christian-bick/edugraph-ontology).

## Installation

You can install this package directly from GitHub Releases:

```bash
npm install https://github.com/christian-bick/edugraph-ontology/releases/download/<version>/edugraph-ts.tgz
```

## Usage

### 1. Enum Mapping
```typescript
import { Area, Scope, Ability } from "edugraph-ts";

// Use the enums in your code
const area = Area.IntegerMultiplication;
console.log(`Area IRI: ${area}`);  // http://edugraph.io/edu/IntegerMultiplication
```

### 2. Individual Relations
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
