"""Exercise release version resolution against real Git history, including tag filtering."""

import importlib.util
from pathlib import Path
import subprocess
import tempfile
import unittest

spec = importlib.util.spec_from_file_location(
    "release_version", Path(__file__).with_name("release-version.py")
)
assert spec is not None and spec.loader is not None
version_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(version_module)


class ReleaseVersionTests(unittest.TestCase):
    def test_tag_and_preview_versions(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)

            def git(*args: str) -> str:
                return subprocess.check_output(
                    ["git", *args], cwd=root, text=True, stderr=subprocess.PIPE
                ).strip()

            git("init", "-b", "main")
            git("config", "user.name", "Version test")
            git("config", "user.email", "version@example.invalid")
            git(
                "-c", "commit.gpgsign=false", "commit", "--allow-empty", "-m", "initial"
            )
            with self.assertRaisesRegex(ValueError, "No reachable stable"):
                version_module.release_version(root, "refs/heads/main")
            git("tag", "v0.9.0")
            git("tag", "v0.26.0")
            git("tag", "v99.0.0-rc.1")
            git("tag", "preview-anything")
            git("-c", "commit.gpgsign=false", "commit", "--allow-empty", "-m", "change")
            sha = git("rev-parse", "--short=12", "HEAD")
            result = version_module.release_version(root, "refs/heads/main")
            self.assertEqual(result["package_version"], f"0.26.0-pre.1.{sha}")
            self.assertEqual(
                result["release_tag"], f"preview-{result['package_version']}"
            )
            self.assertEqual(
                result["release_name"], f"Preview {result['package_version']}"
            )
            git("tag", "v0.27.0")
            self.assertEqual(
                version_module.release_version(root, "refs/tags/v0.27.0"),
                {
                    "package_version": "0.27.0",
                    "release_tag": "v0.27.0",
                    "release_name": "Release v0.27.0",
                },
            )
            with self.assertRaises(ValueError):
                version_module.release_version(root, "refs/tags/v0.27.0-rc.1")


if __name__ == "__main__":
    unittest.main()
