import { deepStrictEqual, strictEqual } from "node:assert";
import { assessOntology, IRI_SCHEMA_CONTRACT, OntologyStatement, createOntologyContext } from "./core";
import { assessOntologySources } from "./rdf";
const E = 'http://edugraph.io/edu#';
const fact = (subject: string, predicate: string, object: string, source = 'a.ttl'): OntologyStatement => ({ subject, predicate, object, source, sourceKind: 'descriptors' });
const schema: OntologyStatement[] = [
  ...IRI_SCHEMA_CONTRACT.inverses.map(c => ({ ...fact(c.primary, 'http://www.w3.org/2002/07/owl#inverseOf', c.inverse), sourceKind: 'schema' as const })),
  ...IRI_SCHEMA_CONTRACT.subproperties.map(c => ({ ...fact(c.property, 'http://www.w3.org/2000/01/rdf-schema#subPropertyOf', c.parent), sourceKind: 'schema' as const })),
];
strictEqual(assessOntology(schema).status, 'valid');
const a = 'https://one.example/Thing', b = 'https://two.example/Thing';
const input = [...schema, fact(a, E+'partOf', b), fact(b, E+'specializes', a), fact(a, E+'partOf', b, 'b.ttl'), fact('x', E+'expandedBy', 'y')];
const assessment = assessOntology(input);
strictEqual(assessment.status, 'invalid');
strictEqual(assessment.checks.find(c => c.checkId === 'O5')?.status, 'skipped');
strictEqual(assessment.checks.find(c => c.checkId === 'O3a')?.status, 'failed');
const cycle = assessment.findings.find(f => f.checkId === 'O4')!;
deepStrictEqual(cycle.references.entities, [a,b]);
deepStrictEqual(cycle.references.sources, [{name:'a.ttl',kind:'descriptors'}, {name:'b.ttl',kind:'descriptors'}]);
deepStrictEqual(assessOntology([...input].reverse()), assessment);
const paths = [...schema, fact('https://e/z', E+'partOf', 'https://e/b'), fact('https://e/a', E+'partOf', 'https://e/b'), fact('https://e/b', E+'specializes', 'https://e/c')];
deepStrictEqual(assessOntology(paths), assessOntology([...paths].reverse()));
const context = createOntologyContext(paths);
deepStrictEqual(assessOntology(context), assessOntology(context));
const literal = [...schema, {...fact(a, E+'partOf', b), objectKind:'Literal' as const}, fact(b, E+'specializes', a)];
strictEqual(assessOntology(literal).status, 'valid');
const invalidInput = assessOntologySources([{name:'broken.ttl',kind:'schema',text:'@prefix broken'}]);
strictEqual(invalidInput.status, 'input-error');
strictEqual(invalidInput.checks.length, 0);
console.log('Explicit assessment and full-IRI deterministic diagnostics tests passed.');
