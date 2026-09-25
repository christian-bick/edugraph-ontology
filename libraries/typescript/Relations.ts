import { Area } from "./Area";
import { Scope } from "./Scope";
import { Ability } from "./Ability";
import { createOntologyContext, InvolvementStatementOptions } from "./core";
import { bundledStatements } from "./BundledSnapshot";

/** Released descriptor IRIs. Supplied snapshots can contain additional IRIs. */
export type CompetencyDescriptor = Area | Scope | Ability;
/** One release-bound context used by all bundled-data convenience helpers. */
export const bundledContext = createOntologyContext(bundledStatements);
const allDescriptors: readonly CompetencyDescriptor[] = [...Object.values(Area), ...Object.values(Scope), ...Object.values(Ability)];
const known = new Set<string>(allDescriptors);
function descriptors(iris: readonly string[]): CompetencyDescriptor[] {
  return iris.filter((iri): iri is CompetencyDescriptor => known.has(iri));
}
/** Direct relation view, including declared inverse and superproperty access. */
export interface DescriptorRelations {
  definition?: string;
  structures?: CompetencyDescriptor[];
  structuredBy?: CompetencyDescriptor[];
  partOf?: CompetencyDescriptor[];
  hasPart?: CompetencyDescriptor[];
  specializes?: CompetencyDescriptor[];
  specializedBy?: CompetencyDescriptor[];
  expands?: CompetencyDescriptor[];
  expandedBy?: CompetencyDescriptor[];
  integrates?: CompetencyDescriptor[];
  integratedBy?: CompetencyDescriptor[];
  inverts?: CompetencyDescriptor[];
  invertedBy?: CompetencyDescriptor[];
  translates?: CompetencyDescriptor[];
  translatedBy?: CompetencyDescriptor[];
  constrains?: CompetencyDescriptor[];
  constrainedBy?: CompetencyDescriptor[];
  implies?: CompetencyDescriptor[];
  impliedBy?: CompetencyDescriptor[];
  contradicts?: CompetencyDescriptor[];
  contradictedBy?: CompetencyDescriptor[];
}
/** Lexically first released definition, or empty text when unavailable. */
export function definition(descriptor: CompetencyDescriptor): string {
  return bundledContext.lookupDescriptor(descriptor)?.definitions[0] ?? "";
}
/** Combine a released descriptor's label, definition, and optional comment for display. */
export function involvementStatement(descriptor: CompetencyDescriptor, options: InvolvementStatementOptions = {}): string {
  return bundledContext.involvementStatement(descriptor, options);
}
/** Fresh relation view. Mutating it cannot modify the bundled ontology context. */
export function relations(descriptor: CompetencyDescriptor): DescriptorRelations {
  const result: DescriptorRelations = {};
  const text = definition(descriptor);
  if (text) result.definition = text;
  const structuresValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#structures"));
  if (structuresValues.length) result.structures = structuresValues;
  const structuredByValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#structuredBy"));
  if (structuredByValues.length) result.structuredBy = structuredByValues;
  const partOfValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#partOf"));
  if (partOfValues.length) result.partOf = partOfValues;
  const hasPartValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#hasPart"));
  if (hasPartValues.length) result.hasPart = hasPartValues;
  const specializesValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#specializes"));
  if (specializesValues.length) result.specializes = specializesValues;
  const specializedByValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#specializedBy"));
  if (specializedByValues.length) result.specializedBy = specializedByValues;
  const expandsValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#expands"));
  if (expandsValues.length) result.expands = expandsValues;
  const expandedByValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#expandedBy"));
  if (expandedByValues.length) result.expandedBy = expandedByValues;
  const integratesValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#integrates"));
  if (integratesValues.length) result.integrates = integratesValues;
  const integratedByValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#integratedBy"));
  if (integratedByValues.length) result.integratedBy = integratedByValues;
  const invertsValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#inverts"));
  if (invertsValues.length) result.inverts = invertsValues;
  const invertedByValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#invertedBy"));
  if (invertedByValues.length) result.invertedBy = invertedByValues;
  const translatesValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#translates"));
  if (translatesValues.length) result.translates = translatesValues;
  const translatedByValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#translatedBy"));
  if (translatedByValues.length) result.translatedBy = translatedByValues;
  const constrainsValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#constrains"));
  if (constrainsValues.length) result.constrains = constrainsValues;
  const constrainedByValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#constrainedBy"));
  if (constrainedByValues.length) result.constrainedBy = constrainedByValues;
  const impliesValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#implies"));
  if (impliesValues.length) result.implies = impliesValues;
  const impliedByValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#impliedBy"));
  if (impliedByValues.length) result.impliedBy = impliedByValues;
  const contradictsValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#contradicts"));
  if (contradictsValues.length) result.contradicts = contradictsValues;
  const contradictedByValues = descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#contradictedBy"));
  if (contradictedByValues.length) result.contradictedBy = contradictedByValues;
  return result;
}
// Every enum value is included, so these compatibility records cover the descriptor union.
/** Released relation views; helper queries always use the isolated core context. */
export const ENTITY_RELATIONS = Object.fromEntries(allDescriptors.map(iri => [iri, relations(iri)])) as Record<CompetencyDescriptor, DescriptorRelations>;
/** Released definition text by descriptor IRI. */
export const definitions = Object.fromEntries(allDescriptors.map(iri => [iri, definition(iri)])) as Record<CompetencyDescriptor, string>;
/** Relation names accepted by the released-data traversal adapter. */
export type RelationKeys = Exclude<keyof DescriptorRelations, "definition">;
/** Reachable unique IRIs, sorted by IRI; self appears only when a cycle reaches it. */
export function transitiveClosure(descriptor: CompetencyDescriptor, relation: RelationKeys): CompetencyDescriptor[] {
  return descriptors(bundledContext.traverse(descriptor, "http://edugraph.io/edu#" + relation));
}
/** Structural eligibility only; unknown runtime IRIs throw instead of receiving a positive answer. */
export function isLabelEligible(descriptor: CompetencyDescriptor): boolean { return bundledContext.isLabelEligible(descriptor); }
/** Recorded implication/contradiction incompatibility; shared range endpoints do not override exclusions. */
export function incompatible(a: CompetencyDescriptor, b: CompetencyDescriptor): boolean { return bundledContext.incompatible(a, b); }
/** Existing conjunctive compatible-label deduction via the shared core. */
export function deductCompatible(constraints: CompetencyDescriptor[]): CompetencyDescriptor[] { return descriptors(bundledContext.deductCompatible(constraints)); }
/** Existing disjunctive boundary-admission deduction via the shared core. */
export function deductAdmitting(boundaries: CompetencyDescriptor[]): CompetencyDescriptor[] { return descriptors(bundledContext.deductAdmitting(boundaries)); }
/** Direct structures targets in the bundled snapshot. */
export function structures(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#structures")); }
/** Reachable structures targets; traversal introduces no additional inference. */
export function structuresTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "structures"); }
/** Direct structuredBy targets in the bundled snapshot. */
export function structuredBy(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#structuredBy")); }
/** Reachable structuredBy targets; traversal introduces no additional inference. */
export function structuredByTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "structuredBy"); }
/** Direct partOf targets in the bundled snapshot. */
export function partOf(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#partOf")); }
/** Reachable partOf targets; traversal introduces no additional inference. */
export function partOfTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "partOf"); }
/** Direct hasPart targets in the bundled snapshot. */
export function hasPart(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#hasPart")); }
/** Reachable hasPart targets; traversal introduces no additional inference. */
export function hasPartTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "hasPart"); }
/** Direct specializes targets in the bundled snapshot. */
export function specializes(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#specializes")); }
/** Reachable specializes targets; traversal introduces no additional inference. */
export function specializesTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "specializes"); }
/** Direct specializedBy targets in the bundled snapshot. */
export function specializedBy(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#specializedBy")); }
/** Reachable specializedBy targets; traversal introduces no additional inference. */
export function specializedByTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "specializedBy"); }
/** Direct expands targets in the bundled snapshot. */
export function expands(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#expands")); }
/** Reachable expands targets; traversal introduces no additional inference. */
export function expandsTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "expands"); }
/** Direct expandedBy targets in the bundled snapshot. */
export function expandedBy(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#expandedBy")); }
/** Reachable expandedBy targets; traversal introduces no additional inference. */
export function expandedByTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "expandedBy"); }
/** Direct integrates targets in the bundled snapshot. */
export function integrates(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#integrates")); }
/** Reachable integrates targets; traversal introduces no additional inference. */
export function integratesTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "integrates"); }
/** Direct integratedBy targets in the bundled snapshot. */
export function integratedBy(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#integratedBy")); }
/** Reachable integratedBy targets; traversal introduces no additional inference. */
export function integratedByTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "integratedBy"); }
/** Direct inverts targets in the bundled snapshot. */
export function inverts(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#inverts")); }
/** Reachable inverts targets; traversal introduces no additional inference. */
export function invertsTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "inverts"); }
/** Direct invertedBy targets in the bundled snapshot. */
export function invertedBy(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#invertedBy")); }
/** Reachable invertedBy targets; traversal introduces no additional inference. */
export function invertedByTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "invertedBy"); }
/** Direct translates targets in the bundled snapshot. */
export function translates(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#translates")); }
/** Reachable translates targets; traversal introduces no additional inference. */
export function translatesTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "translates"); }
/** Direct translatedBy targets in the bundled snapshot. */
export function translatedBy(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#translatedBy")); }
/** Reachable translatedBy targets; traversal introduces no additional inference. */
export function translatedByTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "translatedBy"); }
/** Direct constrains targets in the bundled snapshot. */
export function constrains(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#constrains")); }
/** Reachable constrains targets; traversal introduces no additional inference. */
export function constrainsTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "constrains"); }
/** Direct constrainedBy targets in the bundled snapshot. */
export function constrainedBy(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#constrainedBy")); }
/** Reachable constrainedBy targets; traversal introduces no additional inference. */
export function constrainedByTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "constrainedBy"); }
/** Direct implies targets in the bundled snapshot. */
export function implies(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#implies")); }
/** Reachable implies targets; traversal introduces no additional inference. */
export function impliesTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "implies"); }
/** Direct impliedBy targets in the bundled snapshot. */
export function impliedBy(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#impliedBy")); }
/** Reachable impliedBy targets; traversal introduces no additional inference. */
export function impliedByTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "impliedBy"); }
/** Direct contradicts targets in the bundled snapshot. */
export function contradicts(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#contradicts")); }
/** Reachable contradicts targets; traversal introduces no additional inference. */
export function contradictsTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "contradicts"); }
/** Direct contradictedBy targets in the bundled snapshot. */
export function contradictedBy(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return descriptors(bundledContext.related(descriptor, "http://edugraph.io/edu#contradictedBy")); }
/** Reachable contradictedBy targets; traversal introduces no additional inference. */
export function contradictedByTransitive(descriptor: CompetencyDescriptor): CompetencyDescriptor[] { return transitiveClosure(descriptor, "contradictedBy"); }
