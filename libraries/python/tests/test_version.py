"""The shared Git identifier has deliberate Python development-release semantics."""

import importlib.util
from pathlib import Path

import pytest


def test_versions():
    spec = importlib.util.spec_from_file_location("set_version", Path(__file__).parents[1] / "set_version.py")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    assert module.python_version("0.26.0") == "0.26.0"
    assert module.python_version("0.26.0-pre.2.ab12cd34ef56") == "0.26.0.dev2+gab12cd34ef56"
    assert module.python_version("0.0.0-pre.14b9676e2980") == "0.0.0.dev0+g14b9676e2980"
    with pytest.raises(ValueError):
        module.python_version("arbitrary version")
