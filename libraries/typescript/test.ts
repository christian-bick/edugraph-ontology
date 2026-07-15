import { Area, Scope, Ability, relations, partOfTransitive, expands } from "./index";

console.log("🧪 Running relation tests with step-by-step progress logging...");

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

console.log("🎉 All relation tests passed successfully!");
