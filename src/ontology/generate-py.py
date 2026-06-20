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

        enum_content += f'\n    # IRI: {iri}\n'
        enum_content += f'    {enum_key} = "{iri}"\n'

    # Write the content to the output file
    with open(output_filename, "w", encoding="utf-8") as f:
        f.write(enum_content)

    print(f"  ✅ Successfully generated {output_filename}\n")


def generate_init_file(configs, output_dir):
    """Generates an __init__.py file that exports all generated enums."""
    init_filename = os.path.join(output_dir, "__init__.py")
    print(f"⚙️  Generating __init__.py file: {init_filename}")

    # Build the content for the __init__.py file
    init_content = "# This file is auto-generated. Do not edit manually.\n\n"

    for config in configs:
        module_name = os.path.splitext(config["output_file"])[0]
        class_name = config["class_name"]
        init_content += f"from .{module_name} import {class_name}\n"

    init_content += "\n__all__ = [\n"
    for config in configs:
        class_name = config["class_name"]
        init_content += f'    "{class_name}",\n'
    init_content += "]\n"

    # Write the content to the __init__.py file
    with open(init_filename, "w", encoding="utf-8") as f:
        f.write(init_content)

    print(f"  ✅ Successfully generated {init_filename}\n")


def main():
    """Loads the ontology once and generates all configured enums."""
    print("🚀 Starting Python enum generation...")

    # Ensure the output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Load the ontology from the file
    onto = get_ontology(f"file://{os.path.abspath(ONTOLOGY_FILE)}").load()

    # Generate an enum for each item in the configuration list
    for config in ENUM_CONFIGS:
        generate_enum_for_class(onto, config)

    # Generate the __init__.py file
    generate_init_file(ENUM_CONFIGS, OUTPUT_DIR)

    print("✨ All Python enums generated successfully.")


if __name__ == "__main__":
    main()
