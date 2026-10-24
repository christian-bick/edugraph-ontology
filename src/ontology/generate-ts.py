from owlready2 import *
import argparse
import os
from pathlib import Path

# --- Main Configuration ---
ROOT_DIR = Path(__file__).resolve().parents[2]
ONTOLOGY_FILE = ROOT_DIR / "dist" / "core-ontology-math.rdf"
OUTPUT_DIR = ROOT_DIR / "dist" / "typescript"
BASE_IRI = "http://edugraph.io/edu#"

# Define all enums to be generated from the ontology
ENUM_CONFIGS = [
    {"class_name": "Area", "output_file": "Area.ts"},
    {"class_name": "Scope", "output_file": "Scope.ts"},
    {"class_name": "Ability", "output_file": "Ability.ts"},
]

def generate_enum_for_class(ontology, config: dict, output_dir):
    """Generates a single TypeScript enum file based on a configuration."""
    class_name = config["class_name"]
    output_filename = os.path.join(output_dir, config["output_file"])
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

    # Build the TypeScript enum string
    enum_content = "// This file is auto-generated. Do not edit manually.\n\n"
    enum_content += f"export enum {class_name} {{\n"

    for individual in individuals:
        # Use the RDFS label if it exists, otherwise fall back to the individual's name
        enum_key = individual.name
        iri = individual.iri

        print(f"    -> Found: {enum_key} ({iri})")

        def_val = getattr(individual, "isDefinedBy", None)
        definition = def_val[0] if def_val else ""
        definition_escaped = definition.replace('"', '\\"').replace('\n', ' ')

        enum_content += f'  /**\n'
        enum_content += f'   * IRI: {iri}\n'
        if definition_escaped:
            enum_content += f'   *\n'
            enum_content += f'   * Definition: {definition_escaped}\n'
        enum_content += f'   */\n'
        enum_content += f'  {enum_key} = "{iri}",\n'

    enum_content += "}\n"

    # Write the content to the output file
    with open(output_filename, "w", encoding="utf-8", newline="\n") as f:
        f.write(enum_content)

    print(f"  ✅ Successfully generated {output_filename}\n")

def generate_index_file(configs, output_dir):
    """Generates an index.ts file that exports from all generated enum files and the relations file."""
    index_filename = os.path.join(output_dir, "index.ts")
    print(f"⚙️  Generating index file: {index_filename}")

    # Build the content for the index file
    index_content = "// This file is auto-generated. Do not edit manually.\n\n"
    for config in configs:
        module_name = os.path.splitext(config["output_file"])[0]
        index_content += f'export * from "./{module_name}";\n'
    index_content += 'export * from "./Relations";\n'
    index_content += 'export * from "./OntologyValidation";\n'
    index_content += 'export * from "./core";\n'
    index_content += 'export * from "./DocumentationValidation";\n'

    # Write the content to the index file
    with open(index_filename, "w", encoding="utf-8", newline="\n") as f:
        f.write(index_content)

    print(f"  ✅ Successfully generated {index_filename}\n")



def main():
    """Load build-generated RDF once and generate the configured TypeScript files."""
    parser = argparse.ArgumentParser(description=__doc__ or main.__doc__)
    parser.add_argument(
        "--ontology", type=Path, default=ONTOLOGY_FILE,
        help="Generated RDF/XML input (default: repository dist/core-ontology-math.rdf).",
    )
    parser.add_argument(
        "--output", type=Path, default=OUTPUT_DIR,
        help="Generated TypeScript directory (default: repository dist/typescript).",
    )
    args = parser.parse_args()
    ontology_path = args.ontology.resolve()
    output_dir = args.output.resolve()
    if not ontology_path.is_file():
        parser.error(
            f"Generated ontology not found: {ontology_path}. "
            "Run 'docker build . --output dist' from the repository root first, "
            "or pass --ontology with a freshly generated RDF/XML file."
        )

    print("🚀 Starting TypeScript code generation...")

    # Ensure the output directory exists
    output_dir.mkdir(parents=True, exist_ok=True)

    # Load the ontology from the file
    with ontology_path.open("rb") as source:
        onto = get_ontology(ontology_path.as_uri()).load(fileobj=source)

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
        generate_enum_for_class(onto, config, output_dir)

    # Relations.ts is a maintained adapter over the shared snapshot core.

    # Generate the index file
    generate_index_file(ENUM_CONFIGS, output_dir)

    print("✨ All TypeScript files generated successfully.")


if __name__ == "__main__":
    main()
