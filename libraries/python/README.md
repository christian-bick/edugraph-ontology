# edugraph-py

Python definitions and enums for the [EduGraph Ontology](https://github.com/christian-bick/edugraph-ontology).

## Installation

You can install this package directly from GitHub Releases:

```bash
pip install "edugraph-py @ https://github.com/christian-bick/edugraph-ontology/releases/download/<version>/edugraph_py-<version>-py3-none-any.whl"
```

## Usage

### 1. Enum Mapping
```python
from edugraph import Area, Scope, Ability

# Use the enums in your code
area = Area.IntegerMultiplication
print(f"Area IRI: {area.value}")  # http://edugraph.io/edu/IntegerMultiplication
```

### 2. Individual Relations
You can query direct and transitive relationships (e.g., taxonomic parents/children, progression paths) between individuals:

```python
from edugraph import Area, relations, part_of_transitive, expands

# Direct relations dict
abs_val_relations = relations(Area.AbsoluteValue)

# Direct expands list
absolute_expands = expands(Area.AbsoluteValue)  # [Area.IntegerSigns, Area.ZeroConcept]

# Transitive partOf ancestors (AbsoluteValue -> ArithmeticEvaluation -> Arithmetic)
transitive_parents = part_of_transitive(Area.AbsoluteValue)
print(Area.Arithmetic in transitive_parents)  # True
```
