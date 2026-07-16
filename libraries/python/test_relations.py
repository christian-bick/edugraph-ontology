import unittest
from edugraph import (
    Area, Scope, Ability, relations,
    part_of, expands, part_of_transitive, definition
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

if __name__ == "__main__":
    unittest.main()
