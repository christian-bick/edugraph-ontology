from owlready2 import *

# --- Main Configuration ---
ONTOLOGY_FILE = "core-ontology.rdf"
OUTPUT_DIR = "libraries/typescript"
BASE_IRI = "http://edugraph.io/edu#"

# Define all enums to be generated from the ontology
ENUM_CONFIGS = [
    {"class_name": "Area", "output_file": "Area.ts"},
    {"class_name": "Scope", "output_file": "Scope.ts"},
    {"class_name": "Ability", "output_file": "Ability.ts"},
]

def generate_enum_for_class(ontology, config: dict):
    """Generates a single TypeScript enum file based on a configuration."""
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

    # Build the TypeScript enum string
    enum_content = "// This file is auto-generated. Do not edit manually.\n\n"
    enum_content += f"export enum {class_name} {{\n"

    for individual in individuals:
        # Use the RDFS label if it exists, otherwise fall back to the individual's name
        enum_key = individual.name
        iri = individual.iri

        print(f"    -> Found: {label} ({iri})")

        enum_content += f'  /** IRI: {iri} */\n'
        enum_content += f'  {enum_key} = "{iri}",\n'

    enum_content += "}\n"

    # Write the content to the output file
    with open(output_filename, "w") as f:
        f.write(enum_content)

    print(f"  ✅ Successfully generated {output_filename}\n")


def main():
    """Loads the ontology once and generates all configured enums."""
    print("🚀 Starting enum generation...")

    # Ensure the output directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Load the ontology from the file
    onto = get_ontology(f"file://{os.path.abspath(ONTOLOGY_FILE)}").load()

    # Generate an enum for each item in the configuration list
    for config in ENUM_CONFIGS:
        generate_enum_for_class(onto, config)

    print("✨ All enums generated successfully.")


if __name__ == "__main__":
    main()