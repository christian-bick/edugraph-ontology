# edugraph-py

Python definitions and enums for the [EduGraph Ontology](https://github.com/christian-bick/edugraph-ontology).

## Installation

You can install this package directly from GitHub Releases:

```bash
pip install "edugraph-py @ https://github.com/christian-bick/edugraph-ontology/releases/download/<version>/edugraph_py-<version>-py3-none-any.whl"
```

## Usage

```python
from edugraph import Area, Scope, Ability

# Use the enums in your code
area = Area.IntegerMultiplication
print(f"Area IRI: {area.value}")  # http://edugraph.io/edu#IntegerMultiplication
```
