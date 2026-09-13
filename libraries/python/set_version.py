"""Map the shared release identifier to an explicit PEP 440 package version."""

import re
import sys
from pathlib import Path


def python_version(version: str) -> str:
    """Stable tags stay unchanged; Git previews are development releases with local SHAs."""
    if re.fullmatch(r"\d+\.\d+\.\d+", version):
        return version
    match = re.fullmatch(r"(\d+\.\d+\.\d+)-pre\.([0-9a-f]+)", version)
    if match:
        return f"{match[1]}.dev0+g{match[2]}"
    raise ValueError(f"Unsupported release identifier: {version}")


if __name__ == "__main__":
    path = Path(sys.argv[1])
    path.write_text(
        path.read_text(encoding="utf-8").replace(
            'version = "0.0.0"', f'version = "{python_version(sys.argv[2])}"'
        ),
        encoding="utf-8",
    )
