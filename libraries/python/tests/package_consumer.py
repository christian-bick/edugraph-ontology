"""Run from outside the checkout against an installed wheel, without parser extras."""

import importlib.abc
import importlib.resources
import json
import sys


class CoreBoundary(importlib.abc.MetaPathFinder):
    def find_spec(self, fullname, path, target=None):
        if fullname in ("edugraph.generated", "edugraph.relations", "edugraph.area",
                        "edugraph.scope", "edugraph.ability", "pyoxigraph"):
            raise AssertionError(f"Core imported {fullname}")


guard = CoreBoundary()
sys.meta_path.insert(0, guard)
from edugraph.core import OntologyContext, snapshot_from_json
assert OntologyContext(()).descriptors() == ()
sys.meta_path.remove(guard)

from edugraph import Area, Scope, definition, relations, specializes, is_label_eligible, involvement_statement
from edugraph.generated import bundled_context
import edugraph
assert callable(edugraph.relations)
assert set(edugraph.__all__) == set(__import__("edugraph.generated", fromlist=["__all__"]).__all__)
assert Area.Rectangle in specializes(Area.Square)
assert is_label_eligible(Area.Square)
assert not is_label_eligible(Scope.JustificationScope)
assert definition(Area.Square) == Area.Square.definition
assert involvement_statement(Scope.IntegerNumbers).startswith("Involves Integer Numbers:")
assert " For example: -3, 0, 1, 10, and 1345." in involvement_statement(Scope.IntegerNumbers)
data = relations(Area.Square)
data["specializes"].clear()
assert Area.Rectangle in specializes(Area.Square)

package = importlib.resources.files("edugraph")
assert package.joinpath("py.typed").is_file()
assert package.joinpath("RULES.md").is_file()
assert package.joinpath("references/docs/content-evidence.md").is_file()
fresh = OntologyContext(snapshot_from_json(package.joinpath("snapshot.json").read_text(encoding="utf-8")))
assert fresh.descriptors() == bundled_context().descriptors()
for iri in (str(Area.Square), str(Scope.NumbersSmaller10)):
    assert fresh.inspect_label(iri) == bundled_context().inspect_label(iri)
    assert fresh.deduct_compatible([iri]) == bundled_context().deduct_compatible([iri])
print(json.dumps({"python": sys.version.split()[0], "descriptors": len(fresh.descriptors())}))
