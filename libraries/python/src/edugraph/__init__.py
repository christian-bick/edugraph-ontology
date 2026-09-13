"""EduGraph's typed bundled helpers; core imports do not load released data."""

from importlib import import_module

__all__ = [
    "Area",
    "Ability",
    "Scope",
    "CompetencyDescriptor",
    "DescriptorRelations",
    "relations",
    "definitions",
    "definition",
    "bundled_context",
    "is_label_eligible",
    "incompatible",
    "deduct_compatible",
    "deduct_admitting",
    "structures",
    "structures_transitive",
    "structured_by",
    "structured_by_transitive",
    "part_of",
    "part_of_transitive",
    "has_part",
    "has_part_transitive",
    "specializes",
    "specializes_transitive",
    "specialized_by",
    "specialized_by_transitive",
    "constrains",
    "constrains_transitive",
    "constrained_by",
    "constrained_by_transitive",
    "implies",
    "implies_transitive",
    "implied_by",
    "implied_by_transitive",
    "contradicts",
    "contradicts_transitive",
    "contradicted_by",
    "contradicted_by_transitive",
    "expands",
    "expands_transitive",
    "expanded_by",
    "expanded_by_transitive",
    "inverts",
    "inverts_transitive",
    "inverted_by",
    "inverted_by_transitive",
    "integrates",
    "integrates_transitive",
    "integrated_by",
    "integrated_by_transitive",
    "translates",
    "translates_transitive",
    "translated_by",
    "translated_by_transitive",
]


def __getattr__(name: str) -> object:
    # The adjacent stub declares the exact public exports for static consumers.
    if name.startswith("_"):
        raise AttributeError(name)
    generated = import_module(".generated", __name__)
    exports: list[str] = generated.__all__
    if name not in exports:
        raise AttributeError(name)
    globals().update({key: getattr(generated, key) for key in exports})
    value: object = globals()[name]
    return value
