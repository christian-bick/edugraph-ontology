"""Assemble a Python distribution from maintained code and shared authored data."""

from __future__ import annotations
import argparse
import re
import shutil
import sys
from pathlib import Path


def prepare(
    library: Path,
    contracts: Path,
    snapshot: Path,
    output: Path,
    references: Path | None = None,
    rules: Path | None = None,
) -> None:
    """Copy runtime modules and generate only enum data from the shared snapshot."""
    package = output / "src" / "edugraph"
    package.mkdir(parents=True, exist_ok=True)
    shutil.copytree(
        library / "src" / "edugraph",
        package,
        dirs_exist_ok=True,
        ignore=shutil.ignore_patterns("__pycache__", "*.pyc"),
    )
    shutil.copy2(contracts, package / "relation-contracts.json")
    shutil.copy2(snapshot, package / "snapshot.json")
    for name in ("pyproject.toml", "README.md"):
        shutil.copy2(library / name, output / name)
    shutil.copy2(library.parents[1] / "LICENSE", output / "LICENSE")
    if references is not None:
        shutil.copytree(references, package / "references", dirs_exist_ok=True)
    if rules is not None:
        shutil.copy2(rules, package / "RULES.md")
    # Use the same checked record decoder as installed consumers. Imports remain parser-free.
    sys.path.insert(0, str(output / "src"))
    from edugraph.core import LiteralTerm, NamedNode, snapshot_from_json

    statements = snapshot_from_json(snapshot.read_text(encoding="utf-8"))
    definitions: dict[str, str] = {}
    dimensions: dict[str, set[str]] = {
        name: set() for name in ("Area", "Ability", "Scope")
    }
    edu = "http://edugraph.io/edu#"
    for row in statements:
        if row.source_kind != "descriptors" or not isinstance(row.subject, NamedNode):
            continue
        iri, prop, obj = row.subject.value, row.predicate.value, row.object
        if prop == "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" and isinstance(
            obj, NamedNode
        ):
            for dimension in dimensions:
                if obj.value == edu + dimension:
                    dimensions[dimension].add(iri)
        if prop == "http://www.w3.org/2000/01/rdf-schema#isDefinedBy" and isinstance(
            obj, LiteralTerm
        ):
            definitions.setdefault(iri, obj.value.replace("\n", " "))
    for dimension, iris in dimensions.items():
        lines = [
            "# Generated enum data; algorithms are maintained separately.",
            "from enum import StrEnum",
            "",
            f"class {dimension}(StrEnum):",
            f'    """Released {dimension} descriptors identified by full IRIs."""',
        ]
        members: dict[str, str] = {}
        for iri in sorted(iris):
            name = re.split(r"[/#]", iri)[-1]
            if not name.isidentifier() or name in members:
                raise ValueError(f"Invalid or duplicate enum member: {name}")
            members[name] = iri
            lines.append(f"    {name} = {iri!r}")
            if text := definitions.get(iri):
                lines.append(f"    {text!r}")
        lines.extend(
            [
                "",
                "    @property",
                "    def definition(self) -> str:",
                '        """Return the definition with legacy newline flattening."""',
                '        return _DEFINITIONS.get(self, "")',
                "",
                f"_DEFINITIONS: dict[{dimension}, str] = {{",
            ]
        )
        lines.extend(
            f"    {dimension}.{name}: {definitions.get(iri, '')!r},"
            for name, iri in members.items()
        )
        lines.append("}")
        (package / f"{dimension.lower()}.py").write_text(
            "\n".join(lines) + "\n", encoding="utf-8"
        )


def main() -> None:
    """Assemble sources; packaging and ontology validation are separate build steps."""
    root = Path(__file__).resolve().parents[2]
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--library", type=Path, default=root / "libraries/python")
    parser.add_argument(
        "--contracts",
        type=Path,
        default=root / "libraries/shared/relation-contracts.json",
    )
    parser.add_argument(
        "--snapshot", type=Path, default=root / "dist/typescript/snapshot.json"
    )
    parser.add_argument("--output", type=Path, default=root / "dist/python")
    parser.add_argument("--references", type=Path)
    parser.add_argument("--rules", type=Path)
    args = parser.parse_args()
    prepare(
        args.library,
        args.contracts,
        args.snapshot,
        args.output,
        args.references,
        args.rules,
    )


if __name__ == "__main__":
    main()
