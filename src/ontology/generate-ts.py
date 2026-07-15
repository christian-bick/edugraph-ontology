from owlready2 import *
import os

# --- Main Configuration ---
ONTOLOGY_FILE = "core-ontology-math.rdf"
OUTPUT_DIR = "dist/typescript"
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

        print(f"    -> Found: {enum_key} ({iri})")

        enum_content += f'  /** IRI: {iri} */\n'
        enum_content += f'  {enum_key} = "{iri}",\n'

    enum_content += "}\n"

    # Write the content to the output file
    with open(output_filename, "w") as f:
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

    # Write the content to the index file
    with open(index_filename, "w") as f:
        f.write(index_content)

    print(f"  ✅ Successfully generated {index_filename}\n")


def generate_relations_file(ontology, output_dir, individual_to_class):
    """Generates a relations.ts file that defines all individual relations and helper functions."""
    relations_filename = os.path.join(output_dir, "Relations.ts")
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
        "translates", "translatedBy"
    ]

    entity_relations_entries = []

    for ind in all_individuals:
        ind_cname = individual_to_class.get(ind.name)
        if not ind_cname:
            continue

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

        entry = f"  [{ind_cname}.{ind.name}]: {{\n"
        for prop in sorted(ind_relations.keys()):
            vals_str = ", ".join(sorted(ind_relations[prop]))
            entry += f"    {prop}: [{vals_str}],\n"
        entry += "  }"
        entity_relations_entries.append(entry)

    # Build the output file content
    content = "// This file is auto-generated. Do not edit manually.\n\n"
    content += 'import { Area } from "./Area";\n'
    content += 'import { Scope } from "./Scope";\n'
    content += 'import { Ability } from "./Ability";\n\n'
    content += 'export type CompetencyDescriptor = Area | Scope | Ability;\n\n'
    content += 'export interface DescriptorRelations {\n'
    for prop in relation_properties:
        content += f'  {prop}?: CompetencyDescriptor[];\n'
    content += '}\n\n'
    content += 'export const ENTITY_RELATIONS = {\n'
    content += ",\n".join(entity_relations_entries)
    content += '\n} satisfies Record<CompetencyDescriptor, DescriptorRelations>;\n\n'

    content += 'const lookup = ENTITY_RELATIONS as Record<CompetencyDescriptor, DescriptorRelations>;\n\n'

    content += '/**\n * Returns all relations defined for a given descriptor, or an empty object.\n */\n'
    content += 'export function relations(descriptor: CompetencyDescriptor): DescriptorRelations {\n'
    content += '  return lookup[descriptor] || {};\n'
    content += '}\n\n'

    # Add direct helpers
    content += '// --- Direct Helper Functions ---\n'
    for prop in relation_properties:
        content += f'export function {prop}(descriptor: CompetencyDescriptor): CompetencyDescriptor[] {{\n'
        content += f'  return lookup[descriptor]?.{prop} || [];\n'
        content += '}\n'

    # Add transitive helper and functions
    content += '\n// --- Transitive Helper Functions ---\n'
    content += 'export function transitiveClosure(\n'
    content += '  descriptor: CompetencyDescriptor,\n'
    content += '  relation: keyof DescriptorRelations\n'
    content += '): CompetencyDescriptor[] {\n'
    content += '  const visited = new Set<CompetencyDescriptor>();\n'
    content += '  const queue: CompetencyDescriptor[] = [descriptor];\n'
    content += '  while (queue.length > 0) {\n'
    content += '    const current = queue.shift()!;\n'
    content += '    const related = lookup[current]?.[relation] || [];\n'
    content += '    for (const item of related) {\n'
    content += '      if (!visited.has(item)) {\n'
    content += '        visited.add(item);\n'
    content += '        queue.push(item);\n'
    content += '      }\n'
    content += '    }\n'
    content += '  }\n'
    content += '  return Array.from(visited);\n'
    content += '}\n\n'

    for prop in relation_properties:
        content += f'export function {prop}Transitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] {{\n'
        content += f'  return transitiveClosure(descriptor, "{prop}");\n'
        content += '}\n'

    with open(relations_filename, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  ✅ Successfully generated {relations_filename}\n")


def main():
    """Loads the ontology once and generates all configured enums and relations."""
    print("🚀 Starting TypeScript code generation...")

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

    # Generate the index file
    generate_index_file(ENUM_CONFIGS, OUTPUT_DIR)

    print("✨ All TypeScript files generated successfully.")


if __name__ == "__main__":
    main()