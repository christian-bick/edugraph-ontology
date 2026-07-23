from owlready2 import *
import os

# --- Main Configuration ---
ONTOLOGY_FILE = "core-ontology-math.rdf"
OUTPUT_DIR = "dist/python/src/edugraph"
BASE_IRI = "http://edugraph.io/edu#"

# Define all enums to be generated from the ontology
ENUM_CONFIGS = [
    {"class_name": "Area", "output_file": "area.py"},
    {"class_name": "Scope", "output_file": "scope.py"},
    {"class_name": "Ability", "output_file": "ability.py"},
]


def generate_enum_for_class(ontology, config: dict):
    """Generates a single Python enum file based on a configuration."""
    class_name = config["class_name"]
    output_filename = os.path.join(OUTPUT_DIR, config["output_file"])
    target_class_iri = f"{BASE_IRI}{class_name}"

    print(f"⚙️  Processing class: {class_name}")

    target_class = IRIS[target_class_iri]
    if not target_class:
        print(f"  ❌ Error: Class <{target_class_iri}> not found.")
        return

    individuals = list(target_class.instances())
    if not individuals:
        print(f"  ⚠️ Warning: No individuals found for class <{target_class_iri}>.")
        return

    # Build the Python StrEnum string
    enum_content = "# This file is auto-generated. Do not edit manually.\n\n"
    enum_content += "from enum import StrEnum\n\n\n"
    enum_content += f"class {class_name}(StrEnum):\n"
    enum_content += f'    """{class_name} individuals from the EduGraph ontology."""\n'

    for individual in individuals:
        enum_key = individual.name
        iri = individual.iri

        print(f"    -> Found: {enum_key} ({iri})")

        def_val = getattr(individual, "isDefinedBy", None)
        definition = def_val[0] if def_val else ""
        definition_escaped = definition.replace('"', '\\"').replace('\n', ' ')

        enum_content += f'\n    # IRI: {iri}\n'
        enum_content += f'    {enum_key} = "{iri}"\n'
        if definition_escaped:
            enum_content += f'    """{definition_escaped}"""\n'

    enum_content += "\n    @property\n"
    enum_content += "    def definition(self) -> str:\n"
    enum_content += "        return _DEFINITIONS.get(self, \"\")\n"

    enum_content += "\n\n# Private dictionary mapping each enum member to its description\n"
    enum_content += "_DEFINITIONS = {\n"
    for individual in individuals:
        enum_key = individual.name
        def_val = getattr(individual, "isDefinedBy", None)
        definition = def_val[0] if def_val else ""
        definition_escaped = definition.replace('"', '\\"').replace('\n', ' ')
        enum_content += f"    {class_name}.{enum_key}: \"{definition_escaped}\",\n"
    enum_content += "}\n"

    # Write the content to the output file
    with open(output_filename, "w", encoding="utf-8") as f:
        f.write(enum_content)

    print(f"  ✅ Successfully generated {output_filename}\n")


def generate_init_file(configs, output_dir):
    """Generates an __init__.py file that exports all generated enums and relations."""
    init_filename = os.path.join(output_dir, "__init__.py")
    print(f"⚙️  Generating __init__.py file: {init_filename}")

    # Build the content for the __init__.py file
    init_content = "# This file is auto-generated. Do not edit manually.\n\n"

    for config in configs:
        module_name = os.path.splitext(config["output_file"])[0]
        class_name = config["class_name"]
        init_content += f"from .{module_name} import {class_name}\n"

    helpers = [
        "definitions", "definition",
        "part_of", "has_part", "expands", "expanded_by", "integrates", "integrated_by", "inverts", "inverted_by", "translates", "translated_by",
        "constrains", "constrained_by", "implies", "implied_by", "contradicts", "contradicted_by",
        "part_of_transitive", "has_part_transitive", "expands_transitive", "expanded_by_transitive", "integrates_transitive", "integrated_by_transitive", "inverts_transitive", "inverted_by_transitive", "translates_transitive", "translated_by_transitive",
        "constrains_transitive", "constrained_by_transitive", "implies_transitive", "implied_by_transitive", "contradicts_transitive", "contradicted_by_transitive",
        "deduct_compatible", "deduct_admitting"
    ]

    init_content += "from .relations import (\n"
    init_content += "    CompetencyDescriptor,\n"
    init_content += "    DescriptorRelations,\n"
    init_content += "    relations,\n"
    for h in helpers:
        init_content += f"    {h},\n"
    init_content += ")\n"

    init_content += "\n__all__ = [\n"
    for config in configs:
        class_name = config["class_name"]
        init_content += f'    "{class_name}",\n'
    init_content += '    "CompetencyDescriptor",\n'
    init_content += '    "DescriptorRelations",\n'
    init_content += '    "relations",\n'
    for h in helpers:
        init_content += f'    "{h}",\n'
    init_content += "]\n"

    # Write the content to the __init__.py file
    with open(init_filename, "w", encoding="utf-8") as f:
        f.write(init_content)

    print(f"  ✅ Successfully generated {init_filename}\n")


def generate_relations_file(ontology, output_dir, individual_to_class):
    """Generates a relations.py file that defines all individual relations and helper functions."""
    relations_filename = os.path.join(output_dir, "relations.py")
    print(f"⚙️  Generating relations file: {relations_filename}")

    # Collect all individuals from all three classes
    all_individuals = []
    for cname in ["Area", "Scope", "Ability"]:
        class_iri = f"{BASE_IRI}{cname}"
        target_class = IRIS[class_iri]
        if target_class:
            all_individuals.extend(list(target_class.instances()))

    # Sort individuals by class and name for deterministic generation
    all_individuals.sort(key=lambda x: (individual_to_class.get(x.name, ""), x.name))

    relation_properties = [
        "partOf", "hasPart",
        "expands", "expandedBy",
        "integrates", "integratedBy",
        "inverts", "invertedBy",
        "translates", "translatedBy",
        "constrains", "constrainedBy",
        "implies", "impliedBy",
        "contradicts", "contradictedBy"
    ]

    entity_relations_entries = []
    entity_definitions_entries = []

    for ind in all_individuals:
        ind_cname = individual_to_class.get(ind.name)
        if not ind_cname:
            continue

        def_val = getattr(ind, "isDefinedBy", None)
        definition_str = def_val[0] if def_val else ""
        definition_escaped = definition_str.replace('"', '\\"').replace('\n', ' ')

        if definition_escaped:
            entity_definitions_entries.append(f"    {ind_cname}.{ind.name}: \"{definition_escaped}\"")

        ind_relations = {}
        for prop in relation_properties:
            val = getattr(ind, prop, None)
            if val:
                if not isinstance(val, list):
                    val = [val]
                formatted = []
                for v in val:
                    if hasattr(v, "name") and v.name in individual_to_class:
                        ref_cname = individual_to_class[v.name]
                        formatted.append(f"{ref_cname}.{v.name}")
                if formatted:
                    ind_relations[prop] = formatted

        # Propagate subproperties logically defined in the schema
        if "inverts" in ind_relations:
            ind_relations["expands"] = list(set(ind_relations.get("expands", []) + ind_relations["inverts"]))
        if "invertedBy" in ind_relations:
            ind_relations["expandedBy"] = list(set(ind_relations.get("expandedBy", []) + ind_relations["invertedBy"]))
        if "translates" in ind_relations:
            ind_relations["integrates"] = list(set(ind_relations.get("integrates", []) + ind_relations["translates"]))
        if "translatedBy" in ind_relations:
            ind_relations["integratedBy"] = list(set(ind_relations.get("integratedBy", []) + ind_relations["translatedBy"]))
        if "implies" in ind_relations:
            ind_relations["constrains"] = list(set(ind_relations.get("constrains", []) + ind_relations["implies"]))
        if "impliedBy" in ind_relations:
            ind_relations["constrainedBy"] = list(set(ind_relations.get("constrainedBy", []) + ind_relations["impliedBy"]))
        if "contradicts" in ind_relations:
            ind_relations["constrains"] = list(set(ind_relations.get("constrains", []) + ind_relations["contradicts"]))
        if "contradictedBy" in ind_relations:
            ind_relations["constrainedBy"] = list(set(ind_relations.get("constrainedBy", []) + ind_relations["contradictedBy"]))

        entry = f"    {ind_cname}.{ind.name}: {{\n"
        if definition_escaped:
            entry += f'        "definition": "{definition_escaped}",\n'
        for prop in sorted(ind_relations.keys()):
            vals_str = ", ".join(sorted(ind_relations[prop]))
            entry += f'        "{prop}": [{vals_str}],\n'
        entry += "    }"
        entity_relations_entries.append(entry)

    # Build the output file content
    content = "# This file is auto-generated. Do not edit manually.\n\n"
    content += "from typing import Union, TypedDict, List, Optional\n"
    content += "from .area import Area\n"
    content += "from .scope import Scope\n"
    content += "from .ability import Ability\n\n"
    content += "CompetencyDescriptor = Union[Area, Scope, Ability]\n\n"
    
    content += "class DescriptorRelations(TypedDict, total=False):\n"
    content += "    definition: str\n"
    for prop in relation_properties:
        content += f"    {prop}: List[CompetencyDescriptor]\n"
    content += "\n\n"

    content += "ENTITY_RELATIONS: dict[CompetencyDescriptor, DescriptorRelations] = {\n"
    content += ",\n".join(entity_relations_entries)
    content += "\n}\n\n"

    content += "def relations(descriptor: CompetencyDescriptor) -> DescriptorRelations:\n"
    content += '    """Returns all relations defined for a given descriptor, or an empty dict."""\n'
    content += "    return ENTITY_RELATIONS.get(descriptor, {})\n\n"

    content += "definitions: dict[CompetencyDescriptor, str] = {\n"
    content += ",\n".join(entity_definitions_entries)
    content += "\n}\n\n"

    content += "def definition(descriptor: CompetencyDescriptor) -> str:\n"
    content += '    """Returns the description/definition of a given descriptor, or an empty string."""\n'
    content += "    return definitions.get(descriptor, \"\")\n\n"

    # Add direct helpers
    content += "# --- Direct Helper Functions ---\n"
    for prop in relation_properties:
        snake_prop = "".join(["_" + c.lower() if c.isupper() else c for c in prop]).lstrip("_")
        content += f"def {snake_prop}(descriptor: CompetencyDescriptor) -> List[CompetencyDescriptor]:\n"
        content += f'    return ENTITY_RELATIONS.get(descriptor, {{}}).get("{prop}", [])\n\n'

    # Add transitive helper and functions
    content += "# --- Transitive Helper Functions ---\n"
    content += "def transitive_closure(\n"
    content += "    descriptor: CompetencyDescriptor,\n"
    content += "    relation: str\n"
    content += ") -> List[CompetencyDescriptor]:\n"
    content += "    visited = set()\n"
    content += "    queue = [descriptor]\n"
    content += "    while queue:\n"
    content += "        current = queue.pop(0)\n"
    content += '        related = ENTITY_RELATIONS.get(current, {}).get(relation, [])\n'
    content += "        for item in related:\n"
    content += "            if item not in visited:\n"
    content += "                visited.add(item)\n"
    content += "                queue.append(item)\n"
    content += "    return list(visited)\n\n"

    for prop in relation_properties:
        snake_prop = "".join(["_" + c.lower() if c.isupper() else c for c in prop]).lstrip("_")
        content += f"def {snake_prop}_transitive(descriptor: CompetencyDescriptor) -> List[CompetencyDescriptor]:\n"
        content += f'    return transitive_closure(descriptor, "{prop}")\n\n'

    content += "# --- Deduct Compatible Helper ---\n"
    content += "def deduct_compatible(base_constraints: List[CompetencyDescriptor]) -> List[CompetencyDescriptor]:\n"
    content += '    """\n'
    content += '    Deducts the exact compatible subset of bounds from a given list of base constraints,\n'
    content += '    applying logical implication and pruning logical contradictions.\n'
    content += '    """\n'
    content += "    implied = set()\n"
    content += "    for constraint in base_constraints:\n"
    content += "        implied.add(constraint)\n"
    content += "        transitive_collection = (\n"
    content += "            implied_by_transitive(constraint)\n"
    content += "            if ('Smaller' in constraint or 'Larger' in constraint)\n"
    content += "            else implies_transitive(constraint)\n"
    content += "        )\n"
    content += "        for imp in transitive_collection:\n"
    content += "            implied.add(imp)\n"
    content += "\n"
    content += "    contradicted_set = set()\n"
    content += "    for constraint in base_constraints:\n"
    content += "        for c in contradicts(constraint):\n"
    content += "            contradicted_set.add(c)\n"
    content += "            transitive_collection = (\n"
    content += "                implied_by_transitive(c)\n"
    content += "                if ('Smaller' in c or 'Larger' in c)\n"
    content += "                else implies_transitive(c)\n"
    content += "            )\n"
    content += "            for imp in transitive_collection:\n"
    content += "                contradicted_set.add(imp)\n"
    content += "\n"
    content += "    final_set = {item for item in implied if item not in contradicted_set}\n"
    content += "    return list(final_set)\n\n"

    content += "# --- Deduct Admitting Helper ---\n"
    content += "def deduct_admitting(boundaries: List[CompetencyDescriptor]) -> List[CompetencyDescriptor]:\n"
    content += '    """\n'
    content += '    Deducts all labels that admit content crossing any of the given boundaries.\n'
    content += '\n'
    content += '    Dual of deduct_compatible: capabilities are declared with deduct_compatible\n'
    content += '    (labels guaranteed to stay within a declared window), boundaries with\n'
    content += '    deduct_admitting (labels that permit content beyond a line). For each\n'
    content += '    boundary B the result unions B and all labels implying B (content must\n'
    content += '    cross the line) with the weakenings of B\'s contradiction partners\n'
    content += '    (bounds loose enough that content may cross the line).\n'
    content += '    """\n'
    content += "    admitting = set()\n"
    content += "    for boundary in boundaries:\n"
    content += "        admitting.add(boundary)\n"
    content += "        for tighter in implied_by_transitive(boundary):\n"
    content += "            admitting.add(tighter)\n"
    content += "        for partner in contradicts(boundary):\n"
    content += "            for weaker in implies_transitive(partner):\n"
    content += "                admitting.add(weaker)\n"
    content += "    return list(admitting)\n\n"

    with open(relations_filename, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  ✅ Successfully generated {relations_filename}\n")


def main():
    """Loads the ontology once and generates all configured enums and relations."""
    print("🚀 Starting Python enum and relations generation...")

    # Ensure the output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Load the ontology from the file
    onto = get_ontology(f"file://{os.path.abspath(ONTOLOGY_FILE)}").load()

    # Build maps of individuals to their core class names
    individual_to_class = {}
    for cname in ["Area", "Scope", "Ability"]:
        class_iri = f"{BASE_IRI}{cname}"
        target_class = IRIS[class_iri]
        if target_class:
            for ind in target_class.instances():
                individual_to_class[ind.name] = cname

    # Generate an enum for each item in the configuration list
    for config in ENUM_CONFIGS:
        generate_enum_for_class(onto, config)

    # Generate relations file
    generate_relations_file(onto, OUTPUT_DIR, individual_to_class)

    # Generate the __init__.py file
    generate_init_file(ENUM_CONFIGS, OUTPUT_DIR)

    print("✨ All Python files generated successfully.")


if __name__ == "__main__":
    main()
