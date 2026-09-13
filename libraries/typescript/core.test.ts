import { deepStrictEqual, strictEqual, throws } from "node:assert";
import { createOntologyContext, OntologyStatement, IRI_SCHEMA_CONTRACT, RELATION_IRIS } from "./core";
const E = "http://edugraph.io/edu#";
const type = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
const fact = (subject: string, predicate: string, object: string): OntologyStatement => ({ subject, predicate, object, source: "draft", sourceKind: "descriptors" });
const schema: OntologyStatement[] = [
  ...IRI_SCHEMA_CONTRACT.inverses.map(c => ({ ...fact(c.primary, "http://www.w3.org/2002/07/owl#inverseOf", c.inverse), sourceKind: "schema" as const })),
  ...IRI_SCHEMA_CONTRACT.subproperties.map(c => ({ ...fact(c.property, "http://www.w3.org/2000/01/rdf-schema#subPropertyOf", c.parent), sourceKind: "schema" as const })),
];
const parent = "https://draft.example/Thing";
const child = "https://another.example/Thing";
const base = [...schema, fact(parent, type, E + "Area"), fact(child, type, E + "Area")];
const draft = [...base, fact(child, E + "partOf", parent)];
const before = JSON.stringify(draft);
const released = createOntologyContext(base);
const edited = createOntologyContext(draft);
strictEqual(released.isLabelEligible(parent), true);
strictEqual(edited.isLabelEligible(parent), false);
strictEqual(edited.lookupDescriptor(child)?.iri, child);
deepStrictEqual(edited.related(parent, E + "hasPart"), [child]);
deepStrictEqual(edited.related(parent, E + "hasPart", "authored"), []);
deepStrictEqual(edited.related(child, E + "structures"), [parent]);
strictEqual(edited.authoredAssertions().length, draft.length);
strictEqual(JSON.stringify(draft), before);
draft[draft.length - 1].object = "https://changed.example/";
strictEqual(edited.isLabelEligible(parent), false);
throws(() => {
  // @ts-expect-error The public view is readonly at compile time and frozen at runtime.
  edited.statements.push(fact("a", "b", "c"));
});
strictEqual(edited.inspectLabel("missing").status, "unknown");
throws(() => edited.isLabelEligible("missing"), /Unknown descriptor/);
const specialized = createOntologyContext([...base, fact(child, E + "specializes", parent)]);
strictEqual(specialized.isLabelEligible(parent), true);
const mixed = createOntologyContext([...base, fact(child, E + "specializes", parent), fact(child, E + "partOf", parent)]);
strictEqual(mixed.isLabelEligible(parent), false);
const withoutInverse = createOntologyContext([fact(parent, type, E + "Area"), fact(child, E + "partOf", parent)]);
strictEqual(withoutInverse.isLabelEligible(parent), false);
const cyclic = createOntologyContext([...base, fact(child, E + "specializes", parent), fact(parent, E + "specializes", child)]);
deepStrictEqual(cyclic.traverse(child, RELATION_IRIS.specializes), [child, parent].sort());
const constraints = createOntologyContext([...schema,
  fact("small", E + "implies", "medium"), fact("medium", E + "contradicts", "large"),
  fact("large", E + "contradicts", "medium"),
]);
strictEqual(constraints.incompatible("small", "large"), true);
deepStrictEqual(constraints.deductCompatible(["medium", "large"]), []);
deepStrictEqual(constraints.deductAdmitting(["medium"]), ["medium", "small"]);
console.log("Snapshot isolation, navigation, eligibility and deduction tests passed.");

