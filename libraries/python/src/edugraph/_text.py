"""English presentation of descriptor text, without inference or case changes."""

import re


def normalized_text(value: str) -> str:
    """Collapse presentation whitespace, retaining mathematical symbols and case."""
    return re.sub(r"\s+", " ", value).strip()


def _sentence(value: str) -> str:
    return value if re.search(r"[.!?][\"'’”)]*$", value) else value + "."


def _display_name(iri: str) -> str:
    name = re.split(r"[/#:]", iri)[-1] or iri
    name = re.sub(r"[_-]+", " ", name)
    name = re.sub(r"([A-Z]+)([A-Z][a-z])", r"\1 \2", name)
    name = re.sub(r"([a-z0-9])([A-Z])", r"\1 \2", name)
    return normalized_text(re.sub(r"([A-Za-z])([0-9])", r"\1 \2", name))


def format_involvement_statement(
    iri: str,
    definition: str,
    comment: str,
    authored_label: str,
    *,
    label: str | None,
    include_comment: bool,
    comment_prefix: str,
) -> str:
    title = authored_label or _display_name(iri) if label is None else normalized_text(label)
    if not title:
        raise ValueError("Statement label must not be empty")
    result = f"Involves {title}: {_sentence(definition)}"
    if not include_comment or not comment:
        return result
    prefix = normalized_text(comment_prefix)
    introduction = prefix + " " if prefix else ""
    return f"{result} {introduction}{_sentence(comment)}"
