import unittest
from edugraph import (
    Area, Scope, Ability, relations,
    structures, structured_by, specializes, specialized_by,
    part_of, expands, part_of_transitive, structures_transitive, specializes_transitive, definition,
    implies, implies_transitive, contradicts, deduct_compatible, deduct_admitting, incompatible
)

class TestRelations(unittest.TestCase):
    def test_basic_types(self):
        self.assertIsInstance(Area.AbsoluteNumberMagnitude, str)

    def test_definitions(self):
        expected_definition = "The nonnegative magnitude of a rational number independently of its sign, represented as its distance from zero on the number line."
        # Property access on enum member
        self.assertEqual(Area.AbsoluteNumberMagnitude.definition, expected_definition)
        # Helper function access
        self.assertEqual(definition(Area.AbsoluteNumberMagnitude), expected_definition)
        # Property on relations dict
        self.assertEqual(relations(Area.AbsoluteNumberMagnitude).get("definition"), expected_definition)

    def test_direct_relation(self):
        magnitude_relations = relations(Area.AbsoluteNumberMagnitude)
        self.assertIn("partOf", magnitude_relations)
        self.assertIn(Area.NumberSense, magnitude_relations["partOf"])

    def test_structural_and_specialization_relations(self):
        self.assertIn(Area.Rectangle, specializes(Area.Square))
        self.assertIn(Area.Square, specialized_by(Area.Rectangle))
        self.assertIn(Area.Rectangle, structures(Area.Square))
        self.assertIn(Area.Square, structured_by(Area.Rectangle))
        self.assertIn(Scope.LengthMeasurement, structures(Scope.PhysicalRuler))
        self.assertIn(Scope.PhysicalRuler, structured_by(Scope.LengthMeasurement))
        self.assertIn(Ability.LogicalReasoning, specializes_transitive(Ability.AxiomFormalization))
        self.assertIn(Ability.Reception, specializes_transitive(Ability.ReadingFluency))
        self.assertIn(Ability.Articulation, specializes_transitive(Ability.WritingFluency))
        self.assertIn(Ability.Articulation, specializes(Ability.VisualArticulation))
        self.assertIn(Ability.Expression, specializes(Ability.Visualization))
        self.assertIn(Ability.TextualArticulation, specializes(Ability.ActiveVocabulary))
        self.assertIn(Ability.VocalArticulation, specializes(Ability.ActiveVocabulary))
        self.assertIn(Ability.TextualArticulation, specializes(Ability.GrammaticalPrecision))
        self.assertIn(Ability.VocalArticulation, specializes(Ability.GrammaticalPrecision))
        self.assertIn(Ability.LinguisticArticulation, specializes_transitive(Ability.ActiveVocabulary))
        self.assertIn(Ability.LinguisticArticulation, specializes_transitive(Ability.GrammaticalPrecision))
        self.assertIn(Area.DecimalStrategies, structures(Area.DecimalDivisorShift))
        self.assertNotIn(Area.DecimalEquivalence, specializes(Area.DecimalDivisorShift))
        self.assertIn(Area.NumberSense, structures(Area.Subitizing))
        self.assertIn(Area.AbsoluteNumberMagnitude, expands(Area.SignNotation))
        self.assertIn(Ability.ErrorCorrection, structures(Ability.ErrorDetection))
        self.assertIn(Ability.Evaluation, specializes(Ability.ErrorDetection))
        self.assertIn(Ability.ErrorCorrection, structures(Ability.ErrorEvaluation))
        self.assertIn(Ability.Evaluation, specializes(Ability.ErrorEvaluation))
        self.assertIn(Ability.ErrorCorrection, structures(Ability.ErrorResolution))
        self.assertNotIn(Ability.Evaluation, specializes(Ability.ErrorResolution))
        self.assertIn(Ability.ErrorDetection, structured_by(Ability.ErrorCorrection))
        self.assertIn(Ability.ErrorEvaluation, structured_by(Ability.ErrorCorrection))
        self.assertIn(Ability.ErrorResolution, structured_by(Ability.ErrorCorrection))

    def test_subproperty_relation(self):
        # Subtraction inverts Addition, so expands should also include Addition
        sub_expands = expands(Area.Subtraction)
        self.assertIn(Area.Addition, sub_expands)

    def test_transitive_relation(self):
        # AbsoluteNumberMagnitude -> NumberSense -> IntuitiveMathematics
        transitive_parents = part_of_transitive(Area.AbsoluteNumberMagnitude)
        self.assertIn(Area.IntuitiveMathematics, transitive_parents)

    def test_specialization_and_structural_closures(self):
        square_specializations = specializes_transitive(Area.Square)
        self.assertIn(Area.Polygon, square_specializations)
        self.assertNotIn(Area.Geometry, square_specializations)

        meter_structure = structures_transitive(Scope.MeterScale)
        self.assertIn(Scope.MetricDistanceScale, meter_structure)
        self.assertIn(Scope.DistanceAbstraction, meter_structure)

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
