"""Resolve one ontology-based version for the release and all client artifacts."""

import re
import subprocess
import sys
from pathlib import Path

STABLE_TAG = re.compile(r"v(\d+)\.(\d+)\.(\d+)")


def git(root: Path, *args: str) -> str:
    """Read Git metadata without a shell or changes to the checkout."""
    return subprocess.check_output(["git", *args], cwd=root, text=True).strip()


def release_version(root: Path, ref: str) -> dict[str, str]:
    """Use exact official tags; previews inherit the latest reachable stable tag.

    A numeric distance orders previews within that release base; SHA identifies the
    precise snapshot. Missing history is an error rather than a 0.0.0 publication.
    """
    if ref.startswith("refs/tags/"):
        tag = ref.removeprefix("refs/tags/")
        if not STABLE_TAG.fullmatch(tag):
            raise ValueError(f"Expected a stable ontology tag, got {tag}")
        return {
            "package_version": tag[1:],
            "release_tag": tag,
            "release_name": f"Release {tag}",
        }
    if not ref.startswith("refs/heads/"):
        raise ValueError(f"Unsupported release ref: {ref}")
    candidates = [
        tag
        for tag in git(root, "tag", "--merged", "HEAD").splitlines()
        if STABLE_TAG.fullmatch(tag)
    ]
    if not candidates:
        raise ValueError(
            "No reachable stable ontology tag; fetch the complete tag history"
        )
    tag = max(candidates, key=lambda value: tuple(int(n) for n in value[1:].split(".")))
    distance = int(git(root, "rev-list", "--count", f"{tag}..HEAD"))
    sha = git(root, "rev-parse", "--short=12", "HEAD")
    version = f"{tag[1:]}-pre.{distance}.{sha}"
    return {
        "package_version": version,
        "release_tag": f"preview-{version}",
        "release_name": f"Preview {version}",
    }


if __name__ == "__main__":
    for key, value in release_version(Path.cwd(), sys.argv[1]).items():
        print(f"{key}={value}")
