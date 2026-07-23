import { Area, Scope, Ability, relations, partOfTransitive, expands, definition, implies, impliesTransitive, contradicts, deductCompatible, deductAdmitting } from "./index";

console.log("🧪 Running relation and definition tests with step-by-step progress logging...");

const absValRelations = relations((Area as any).AbsoluteValue);
const absValPartOf = absValRelations.partOf || [];

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
assertEqual(typeof (Area as any).AbsoluteValue, "string");

// Test definition property and helper
console.log("Asserting definition helper and property...");
const expectedDefinition = "The magnitude of a number without regard to its sign, representing its distance from zero on the number line.";
assertEqual(relations((Area as any).AbsoluteValue).definition, expectedDefinition);
assertEqual(definition((Area as any).AbsoluteValue), expectedDefinition);
console.log("✅ Definition check passed.");

// Test direct relation
console.log("Asserting direct relation of AbsoluteValue...");
console.log("absValPartOf:", absValPartOf);
console.log("Target:", (Area as any).ArithmeticEvaluation);
console.log("Direct match check:", absValPartOf.includes((Area as any).ArithmeticEvaluation));
assertOk(absValPartOf.includes((Area as any).ArithmeticEvaluation));
console.log("✅ Direct relation check passed.");

// Test subproperty relation (inverts is subproperty of expands)
// Subtraction inverts Addition, so expands should also include Addition
console.log("Asserting subproperty expands relation for Subtraction...");
const subExpands = expands(Area.Subtraction);
console.log("subExpands:", subExpands);
console.log("Target:", Area.Addition);
console.log("Subproperty match check:", subExpands.includes(Area.Addition));
assertOk(subExpands.includes(Area.Addition));
console.log("✅ Subproperty relation check passed.");

// Test transitive helper (AbsoluteValue -> ArithmeticEvaluation -> Arithmetic)
console.log("Asserting transitive relation (partOf) for AbsoluteValue...");
const transitiveParents = partOfTransitive((Area as any).AbsoluteValue);
console.log("transitiveParents:", transitiveParents);
console.log("Target:", Area.Arithmetic);
console.log("Transitive match check:", transitiveParents.includes(Area.Arithmetic));
assertOk(transitiveParents.includes(Area.Arithmetic));
console.log("✅ Transitive relation check passed.");

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

console.log("🎉 All relation tests passed successfully!");

