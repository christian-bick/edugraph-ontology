"""Verify clean wheel/sdist installation and static consumers without repository imports."""

from __future__ import annotations

import argparse
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tarfile
import tempfile
import venv
import zipfile


def run(args: list[str], cwd: Path, env: dict[str, str]) -> subprocess.CompletedProcess[str]:
    return subprocess.run(args, cwd=cwd, env=env, text=True, capture_output=True, check=True)


def verify(distributions: Path, tests: Path) -> None:
    """Exercise artifacts as consumers, including rebuilding the sdist in isolation."""
    wheel = next(distributions.glob("*.whl")).resolve()
    sdist = next(distributions.glob("*.tar.gz")).resolve()
    env = {k: v for k, v in os.environ.items() if k not in ("PYTHONPATH", "MYPYPATH")}
    with tempfile.TemporaryDirectory(prefix="edugraph-consumer-") as tmp:
        root = Path(tmp)
        venv.EnvBuilder(with_pip=False).create(root / "env")
        python = root / "env" / ("Scripts/python.exe" if os.name == "nt" else "bin/python")
        for name in ("package_consumer.py", "typed_consumer.py", "parser_consumer.py"):
            shutil.copy2(tests / name, root / name)
        shutil.copy2(tests / "invalid_consumer.py.txt", root / "invalid_consumer.py")
        run(
            ["uv", "pip", "install", "--python", str(python), str(wheel), "mypy==1.18.2"], root, env
        )
        print(run([str(python), "package_consumer.py"], root, env).stdout.strip())
        run([str(python), "typed_consumer.py"], root, env)
        run([str(python), "-m", "mypy", "--strict", "typed_consumer.py"], root, env)
        invalid = subprocess.run(
            [str(python), "-m", "mypy", "--strict", "invalid_consumer.py"],
            cwd=root,
            env=env,
            capture_output=True,
            text=True,
        )
        assert invalid.returncode == 1 and "arg-type" in invalid.stdout, (
            invalid.stdout + invalid.stderr
        )
        missing = run(
            [
                str(python),
                "-c",
                "try:\n import edugraph.rdf\nexcept ImportError as e:\n assert 'edugraph-py[rdf]' in str(e)\nelse:\n raise AssertionError('parser unexpectedly installed')",
            ],
            root,
            env,
        )
        assert not missing.stderr
        run(
            [
                "uv",
                "pip",
                "install",
                "--python",
                str(python),
                f"edugraph-py[rdf] @ {wheel.as_uri()}",
            ],
            root,
            env,
        )
        run([str(python), "parser_consumer.py"], root, env)
        with tarfile.open(sdist) as archive:
            archive.extractall(root / "source", filter="data")
        source = next((root / "source").iterdir())
        run(["uv", "build", "--wheel", "--out-dir", str(root / "rebuilt")], source, env)
        rebuilt = next((root / "rebuilt").glob("*.whl"))
        with zipfile.ZipFile(wheel) as first, zipfile.ZipFile(rebuilt) as second:
            names = [name for name in first.namelist() if name.startswith("edugraph/")]
            assert set(names) == {
                name for name in second.namelist() if name.startswith("edugraph/")
            }
            for name in names:
                assert first.read(name) == second.read(name), name
        run(
            ["uv", "pip", "install", "--python", str(python), "--reinstall", str(rebuilt)],
            root,
            env,
        )
        print(run([str(python), "package_consumer.py"], root, env).stdout.strip())
        print("Wheel, rebuilt sdist, optional parser, and typed consumers passed.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("distributions", type=Path)
    parser.add_argument("--tests", type=Path, default=Path(__file__).parent / "tests")
    args = parser.parse_args()
    try:
        verify(args.distributions, args.tests.resolve())
    except subprocess.CalledProcessError as error:
        print(error.stdout, error.stderr, file=sys.stderr)
        raise
