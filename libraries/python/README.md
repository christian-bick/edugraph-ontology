# edugraph-py

Python definitions and enums for the [EduGraph Ontology](https://github.com/christian-bick/edugraph-ontology).

## Installation

You can install this package directly from GitHub Releases:

```bash
pip install "edugraph-py @ https://github.com/christian-bick/edugraph-ontology/releases/download/<version>/edugraph_py-<version>-py3-none-any.whl"
```

## Usage

### 1. Enum Mapping & Descriptions
Hovering over any enum member (such as `Area.AbsoluteValue`) in your IDE will display the entity's RDF definition as a docstring tooltip.

```python
from edugraph import Area, Scope, Ability

# Use the enums in your code
area = Area.IntegerMultiplication
print(f"Area IRI: {area.value}")  # http://edugraph.io/edu/IntegerMultiplication
```

### 2. Entity Descriptions & Definitions
You can access definitions directly using member properties, the `definition` helper, or the `relations` dict:

```python
from edugraph import Area, definition, relations

# 1. Accessing definition as a property on an enum member
print(Area.AbsoluteValue.definition)
# prints: "The magnitude of a number without regard to its sign..."

# 2. Using the definition() helper function
print(definition(Area.AbsoluteValue))

# 3. Accessing the definition key on the relations dictionary
print(relations(Area.AbsoluteValue).get("definition"))
```

### 3. Individual Relations
You can query direct and transitive structural, specialization, and progression relationships between individuals:

```python
from edugraph import Area, Scope, relations, specializes_transitive, structures_transitive, expands

# Direct relations dict
square_relations = relations(Area.Square)

# Direct expands list
absolute_expands = expands(Area.AbsoluteValue)  # [Area.IntegerSigns, Area.ZeroConcept]

# Specialization inheritance does not traverse partOf
inherited_capabilities = specializes_transitive(Area.Square)
print(Area.Polygon in inherited_capabilities)  # True

# Combined structural navigation traverses both partOf and specializes
structural_context = structures_transitive(Scope.MeterScale)
print(Scope.DistanceAbstraction in structural_context)  # True
```
