import {
  Area, Scope, Ability, relations,
  structures, structuredBy, partOfTransitive, specializes, specializedBy,
  structuresTransitive, specializesTransitive,
  expands, definition, implies, impliesTransitive, contradicts,
  deductCompatible, deductAdmitting, incompatible
} from "./index";

console.log("🧪 Running relation and definition tests with step-by-step progress logging...");

const magnitudeRelations = relations((Area as any).AbsoluteNumberMagnitude);
const magnitudePartOf = magnitudeRelations.partOf || [];

function assertOk(value: any, message?: string) {
  if (!value) {
    throw new Error(`Assertion failed: expected truthy value, got ${value}${message ? ' - ' + message : ''}`);
  }
}

function assertEqual(actual: any, expected: any, message?: string) {
  if (actual !== expected) {
    throw new Error(`Assertion failed: expected ${expected}, got ${actual}${message ? ' - ' + message : ''}`);
  }
}

// Test basic types
assertEqual(typeof (Area as any).AbsoluteNumberMagnitude, "string");

// Test definition property and helper
console.log("Asserting definition helper and property...");
const expectedDefinition = "The nonnegative magnitude of a rational number independently of its sign, represented as its distance from zero on the number line.";
assertEqual(relations((Area as any).AbsoluteNumberMagnitude).definition, expectedDefinition);
assertEqual(definition((Area as any).AbsoluteNumberMagnitude), expectedDefinition);
console.log("✅ Definition check passed.");

// Test direct relation
console.log("Asserting direct relation of AbsoluteNumberMagnitude...");
console.log("magnitudePartOf:", magnitudePartOf);
console.log("Target:", (Area as any).NumberSense);
console.log("Direct match check:", magnitudePartOf.includes((Area as any).NumberSense));
assertOk(magnitudePartOf.includes((Area as any).NumberSense));
console.log("✅ Direct relation check passed.");

// Test structural and specialization relations
console.log("Asserting structural and specialization relations...");
assertOk(specializes(Area.Square).includes(Area.Rectangle), "Square should specialize Rectangle");
assertOk(specializedBy(Area.Rectangle).includes(Area.Square), "Rectangle should be specialized by Square");
assertOk(structures(Area.Square).includes(Area.Rectangle), "specializes should contribute to structures");
assertOk(structuredBy(Area.Rectangle).includes(Area.Square), "specializedBy should contribute to structuredBy");
assertOk(structures((Scope as any).PhysicalRuler).includes((Scope as any).LengthMeasurement), "partOf should contribute to structures");
assertOk(structuredBy((Scope as any).LengthMeasurement).includes((Scope as any).PhysicalRuler), "hasPart should contribute to structuredBy");
assertOk(specializesTransitive(Ability.AxiomFormalization).includes(Ability.LogicalReasoning), "Axiom formalization should inherit logical reasoning through the axiomatic branch");
assertOk(specializesTransitive(Ability.ReadingFluency).includes(Ability.Reception), "Reading fluency should inherit the reception capability through its linguistic modalities");
assertOk(specializesTransitive(Ability.WritingFluency).includes(Ability.Articulation), "Writing fluency should inherit articulation through its linguistic modalities");
assertOk(specializes(Ability.VisualArticulation).includes(Ability.Articulation), "Visual articulation should directly specialize articulation");
assertOk(specializes(Ability.Visualization).includes(Ability.Expression), "Visualization should directly specialize expression");
assertOk(specializes(Ability.ActiveVocabulary).includes(Ability.TextualArticulation), "Active vocabulary should directly specialize textual articulation");
assertOk(specializes(Ability.ActiveVocabulary).includes(Ability.VocalArticulation), "Active vocabulary should directly specialize vocal articulation");
assertOk(specializes(Ability.GrammaticalPrecision).includes(Ability.TextualArticulation), "Grammatical precision should directly specialize textual articulation");
assertOk(specializes(Ability.GrammaticalPrecision).includes(Ability.VocalArticulation), "Grammatical precision should directly specialize vocal articulation");
assertOk(specializesTransitive(Ability.ActiveVocabulary).includes(Ability.LinguisticArticulation), "Active vocabulary should inherit linguistic articulation through both modalities");
assertOk(specializesTransitive(Ability.GrammaticalPrecision).includes(Ability.LinguisticArticulation), "Grammatical precision should inherit linguistic articulation through both modalities");
assertOk(structures(Area.DecimalDivisorShift).includes(Area.DecimalStrategies), "Decimal divisor shift should belong to decimal strategies");
assertOk(!specializes(Area.DecimalDivisorShift).includes(Area.DecimalEquivalence), "Decimal divisor shift should not specialize decimal equivalence");
assertOk(structures(Area.Subitizing).includes(Area.NumberSense), "Subitizing should belong directly to number sense");
assertOk(expands(Area.SignNotation).includes((Area as any).AbsoluteNumberMagnitude), "Sign notation should expand absolute number magnitude");
assertOk(structures(Ability.ErrorDetection).includes(Ability.ErrorCorrection), "Error detection should be part of error correction");
assertOk(specializes(Ability.ErrorDetection).includes(Ability.Evaluation), "Error detection should specialize evaluation");
assertOk(structures(Ability.ErrorEvaluation).includes(Ability.ErrorCorrection), "Error evaluation should be part of error correction");
assertOk(specializes(Ability.ErrorEvaluation).includes(Ability.Evaluation), "Error evaluation should specialize evaluation");
assertOk(structures(Ability.ErrorResolution).includes(Ability.ErrorCorrection), "Error resolution should be part of error correction");
assertOk(!specializes(Ability.ErrorResolution).includes(Ability.Evaluation), "Error resolution should not specialize evaluation");
assertOk(structuredBy(Ability.ErrorCorrection).includes(Ability.ErrorDetection), "Error correction should contain error detection");
assertOk(structuredBy(Ability.ErrorCorrection).includes(Ability.ErrorEvaluation), "Error correction should contain error evaluation");
assertOk(structuredBy(Ability.ErrorCorrection).includes(Ability.ErrorResolution), "Error correction should contain error resolution");
console.log("✅ Structural and specialization relation checks passed.");

// Test subproperty relation (inverts is subproperty of expands)
// Subtraction inverts Addition, so expands should also include Addition
console.log("Asserting subproperty expands relation for Subtraction...");
const subExpands = expands(Area.Subtraction);
console.log("subExpands:", subExpands);
console.log("Target:", Area.Addition);
console.log("Subproperty match check:", subExpands.includes(Area.Addition));
assertOk(subExpands.includes(Area.Addition));
console.log("✅ Subproperty relation check passed.");

// Test transitive helper (AbsoluteNumberMagnitude -> NumberSense -> IntuitiveMathematics)
console.log("Asserting transitive relation (partOf) for AbsoluteNumberMagnitude...");
const transitiveParents = partOfTransitive((Area as any).AbsoluteNumberMagnitude);
console.log("transitiveParents:", transitiveParents);
console.log("Target:", Area.IntuitiveMathematics);
console.log("Transitive match check:", transitiveParents.includes(Area.IntuitiveMathematics));
assertOk(transitiveParents.includes(Area.IntuitiveMathematics));
console.log("✅ Transitive relation check passed.");

console.log("Asserting specialization and combined structural closures...");
const squareSpecializations = specializesTransitive(Area.Square);
assertOk(squareSpecializations.includes(Area.Polygon), "Square should transitively specialize Polygon");
assertOk(!squareSpecializations.includes(Area.Geometry), "Specialization closure should not traverse partOf");
const meterStructure = structuresTransitive(Scope.MeterScale);
assertOk(meterStructure.includes(Scope.MetricDistanceScale), "Meter should structurally reach the metric distance family");
assertOk(meterStructure.includes(Scope.DistanceAbstraction), "Combined structural closure should cross specializes and partOf");
console.log("✅ Specialization and combined structural closure checks passed.");

// Test implies and contradicts relations
console.log("Asserting implies and contradicts relations for Scope...");
const smaller10ImpliesDirect = implies(Scope.NumbersSmaller10);
assertOk(smaller10ImpliesDirect.includes(Scope.NumbersSmaller20), "NumbersSmaller10 should directly imply NumbersSmaller20");

const smaller10ImpliesTransitive = impliesTransitive(Scope.NumbersSmaller10);
assertOk(smaller10ImpliesTransitive.includes(Scope.NumbersSmaller100), "NumbersSmaller10 should transitively imply NumbersSmaller100");

const smaller10Contradicts = contradicts(Scope.NumbersSmaller10);
assertOk(smaller10Contradicts.includes(Scope.NumbersLarger10), "NumbersSmaller10 should contradict NumbersLarger10");
console.log("✅ Implies and contradicts checks passed.");

// Test deductCompatible helper
console.log("Asserting deductCompatible helper...");
const compatibleEmpty = deductCompatible([Scope.NumbersSmaller10, Scope.NumbersLarger10]);
assertEqual(compatibleEmpty.length, 0, "Contradictory constraints should result in empty deduction");

const compatibleSmaller1000 = deductCompatible([Scope.NumbersSmaller1000]);
assertOk(compatibleSmaller1000.includes(Scope.NumbersSmaller1000), "Should include itself");
assertOk(compatibleSmaller1000.includes(Scope.NumbersSmaller100), "Should include smaller bounds (downward)");
assertOk(compatibleSmaller1000.includes(Scope.NumbersSmaller20), "Should include smaller bounds (downward)");
assertOk(compatibleSmaller1000.includes(Scope.NumbersSmaller10), "Should include smaller bounds (downward)");
assertOk(!compatibleSmaller1000.includes(Scope.NumbersSmaller10000), "Should NOT include larger bounds");

const compatibleLarger100 = deductCompatible([Scope.NumbersLarger100]);
assertOk(compatibleLarger100.includes(Scope.NumbersLarger100), "Should include itself");
assertOk(compatibleLarger100.includes(Scope.NumbersLarger1000), "Should include larger bounds (upward)");
assertOk(compatibleLarger100.includes(Scope.NumbersLarger10000), "Should include larger bounds (upward)");
assertOk(!compatibleLarger100.includes(Scope.NumbersLarger20), "Should NOT include smaller bounds");
console.log("✅ deductCompatible checks passed.");

// Test deductAdmitting helper (dual of deductCompatible: boundary declaration)
console.log("Asserting deductAdmitting helper...");
const admittingBeyond10 = deductAdmitting([Scope.NumbersLarger10]);
assertOk(admittingBeyond10.includes(Scope.NumbersLarger10), "Should include the boundary itself");
assertOk(admittingBeyond10.includes(Scope.NumbersLarger20), "Should include tighter bounds requiring crossing");
assertOk(admittingBeyond10.includes(Scope.NumbersLarger1000000), "Should include the tightest bound requiring crossing");
assertOk(admittingBeyond10.includes(Scope.NumbersSmaller20), "Should include loose upper bounds that permit crossing");
assertOk(admittingBeyond10.includes(Scope.NumbersSmaller1000000), "Should include the loosest upper bound");
assertOk(!admittingBeyond10.includes(Scope.NumbersSmaller10), "Should NOT include the boundary's complement (guarantees safety)");
assertOk(!admittingBeyond10.includes(Scope.NumbersLargerZero), "Should NOT include pure weakenings of the boundary");

const admittingBelow10 = deductAdmitting([Scope.NumbersSmaller10]);
assertOk(admittingBelow10.includes(Scope.NumbersSmaller10), "Should include the boundary itself (symmetric case)");
assertOk(admittingBelow10.includes(Scope.NumbersLargerZero), "Should include loose lower bounds that permit crossing");
assertOk(!admittingBelow10.includes(Scope.NumbersLarger10), "Should NOT include the boundary's complement (symmetric case)");
assertOk(!admittingBelow10.includes(Scope.NumbersSmaller20), "Should NOT include pure weakenings (symmetric case)");

// Multiple boundaries are disjunctive: reject anything crossing either line
const admittingOutsideBand = deductAdmitting([Scope.NumbersLarger100, Scope.NumbersSmaller10]);
assertOk(admittingOutsideBand.includes(Scope.NumbersLarger1000), "Band: should include bounds beyond the upper line");
assertOk(admittingOutsideBand.includes(Scope.NumbersSmaller1000), "Band: should include loose upper bounds permitting crossing");
assertOk(admittingOutsideBand.includes(Scope.NumbersSmaller10), "Band: should include the lower boundary");
assertOk(admittingOutsideBand.includes(Scope.NumbersLargerZero), "Band: should include loose lower bounds permitting crossing");
assertOk(!admittingOutsideBand.includes(Scope.NumbersSmaller100), "Band: should NOT include the upper boundary's complement");
console.log("✅ deductAdmitting checks passed.");

// Test incompatible helper (satisfiability via implies ∘ contradicts composition)
console.log("Asserting incompatible helper...");
assertOk(incompatible(Scope.NumbersSmaller10, Scope.NumbersLarger10), "Adjacent contradiction pair should be incompatible");
assertOk(incompatible(Scope.NumbersSmaller10, Scope.NumbersLarger100), "Far-apart unsatisfiable pair should be incompatible (via implies closure)");
assertOk(incompatible(Scope.NumbersLarger100, Scope.NumbersSmaller10), "Incompatibility should be symmetric");
assertOk(!incompatible(Scope.NumbersSmaller1000, Scope.NumbersLarger100), "Overlapping ranges should be compatible");
assertOk(!incompatible(Scope.NumbersSmaller10, Scope.NumbersLargerZero), "Satisfiable pair should be compatible");
assertOk(!incompatible(Scope.NumbersSmaller10, Scope.ArabicNumerals), "Unrelated labels should be compatible");
console.log("✅ incompatible checks passed.");

console.log("🎉 All relation tests passed successfully!");
