import unittest
from edugraph import (
    Area, Scope, Ability, relations,
    part_of, expands, part_of_transitive, definition,
    implies, implies_transitive, contradicts, deduct_compatible, deduct_admitting, incompatible
)

class TestRelations(unittest.TestCase):
    def test_basic_types(self):
        self.assertIsInstance(Area.AbsoluteValue, str)

    def test_definitions(self):
        expected_definition = "The magnitude of a number without regard to its sign, representing its distance from zero on the number line."
        # Property access on enum member
        self.assertEqual(Area.AbsoluteValue.definition, expected_definition)
        # Helper function access
        self.assertEqual(definition(Area.AbsoluteValue), expected_definition)
        # Property on relations dict
        self.assertEqual(relations(Area.AbsoluteValue).get("definition"), expected_definition)

    def test_direct_relation(self):
        abs_val_relations = relations(Area.AbsoluteValue)
        self.assertIn("partOf", abs_val_relations)
        self.assertIn(Area.ArithmeticEvaluation, abs_val_relations["partOf"])

    def test_subproperty_relation(self):
        # Subtraction inverts Addition, so expands should also include Addition
        sub_expands = expands(Area.Subtraction)
        self.assertIn(Area.Addition, sub_expands)

    def test_transitive_relation(self):
        # AbsoluteValue -> ArithmeticEvaluation -> Arithmetic
        transitive_parents = part_of_transitive(Area.AbsoluteValue)
        self.assertIn(Area.Arithmetic, transitive_parents)

    def test_implies_contradicts(self):
        smaller_10_implies_direct = implies(Scope.NumbersSmaller10)
        self.assertIn(Scope.NumbersSmaller20, smaller_10_implies_direct)

        smaller_10_implies_transitive = implies_transitive(Scope.NumbersSmaller10)
        self.assertIn(Scope.NumbersSmaller100, smaller_10_implies_transitive)

        smaller_10_contradicts = contradicts(Scope.NumbersSmaller10)
        self.assertIn(Scope.NumbersLarger10, smaller_10_contradicts)

    def test_deduct_compatible(self):
        compatible_empty = deduct_compatible([Scope.NumbersSmaller10, Scope.NumbersLarger10])
        self.assertEqual(len(compatible_empty), 0)

        compatible_smaller_1000 = deduct_compatible([Scope.NumbersSmaller1000])
        self.assertIn(Scope.NumbersSmaller1000, compatible_smaller_1000)
        self.assertIn(Scope.NumbersSmaller100, compatible_smaller_1000)
        self.assertIn(Scope.NumbersSmaller20, compatible_smaller_1000)
        self.assertIn(Scope.NumbersSmaller10, compatible_smaller_1000)
        self.assertNotIn(Scope.NumbersSmaller10000, compatible_smaller_1000)

        compatible_larger_100 = deduct_compatible([Scope.NumbersLarger100])
        self.assertIn(Scope.NumbersLarger100, compatible_larger_100)
        self.assertIn(Scope.NumbersLarger1000, compatible_larger_100)
        self.assertIn(Scope.NumbersLarger10000, compatible_larger_100)
        self.assertNotIn(Scope.NumbersLarger20, compatible_larger_100)

    def test_deduct_admitting(self):
        # Boundary declaration (dual of deduct_compatible)
        admitting_beyond_10 = deduct_admitting([Scope.NumbersLarger10])
        self.assertIn(Scope.NumbersLarger10, admitting_beyond_10)
        self.assertIn(Scope.NumbersLarger20, admitting_beyond_10)
        self.assertIn(Scope.NumbersLarger1000000, admitting_beyond_10)
        self.assertIn(Scope.NumbersSmaller20, admitting_beyond_10)
        self.assertIn(Scope.NumbersSmaller1000000, admitting_beyond_10)
        self.assertNotIn(Scope.NumbersSmaller10, admitting_beyond_10)
        self.assertNotIn(Scope.NumbersLargerZero, admitting_beyond_10)

        # Symmetric case: boundary below
        admitting_below_10 = deduct_admitting([Scope.NumbersSmaller10])
        self.assertIn(Scope.NumbersSmaller10, admitting_below_10)
        self.assertIn(Scope.NumbersLargerZero, admitting_below_10)
        self.assertNotIn(Scope.NumbersLarger10, admitting_below_10)
        self.assertNotIn(Scope.NumbersSmaller20, admitting_below_10)

        # Multiple boundaries are disjunctive
        admitting_outside_band = deduct_admitting([Scope.NumbersLarger100, Scope.NumbersSmaller10])
        self.assertIn(Scope.NumbersLarger1000, admitting_outside_band)
        self.assertIn(Scope.NumbersSmaller1000, admitting_outside_band)
        self.assertIn(Scope.NumbersSmaller10, admitting_outside_band)
        self.assertIn(Scope.NumbersLargerZero, admitting_outside_band)
        self.assertNotIn(Scope.NumbersSmaller100, admitting_outside_band)

    def test_incompatible(self):
        # Satisfiability via implies ∘ contradicts composition
        self.assertTrue(incompatible(Scope.NumbersSmaller10, Scope.NumbersLarger10))
        self.assertTrue(incompatible(Scope.NumbersSmaller10, Scope.NumbersLarger100))
        self.assertTrue(incompatible(Scope.NumbersLarger100, Scope.NumbersSmaller10))
        self.assertFalse(incompatible(Scope.NumbersSmaller1000, Scope.NumbersLarger100))
        self.assertFalse(incompatible(Scope.NumbersSmaller10, Scope.NumbersLargerZero))
        self.assertFalse(incompatible(Scope.NumbersSmaller10, Scope.ArabicNumerals))

if __name__ == "__main__":
    unittest.main()

