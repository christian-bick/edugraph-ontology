# Definition and comment normalization — unreleased

Definitions describe reusable concepts independently of the relation prefix used in a
competency statement. All 764 descriptor definitions have at most two sentences and can
follow `Involves {label}:`; examples and supporting explanation are separate comments.
The convention is defined in [ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries).

## Authored text

- Normalize 561 descriptors across Ability, Area, and Scope; retain already suitable definitions.
- Replace repeated relation prefixes, descriptor-name introductions, and generic benefit claims
  with descriptions of the concept, context, or performance.
- Move embedded examples into comments and revise Ability examples to describe concrete
  performances across subjects where practical.
- Store example content directly in comments, without a "For example:" prefix.
- Supply explanatory text for tools and representations that previously repeated only their names.
- Provide definitions and separate comments for all 28 schema classes and object properties.
  Schema text describes schema roles, rather than objects of a competency's `involves` statement.

Comments are optional and may contain explanation as well as examples. Consumers own
presentation markers and must not treat every comment as an example list. See
[constructing statements](../annotations-and-models.md#constructing-statements-from-descriptor-text).

## Meaning and adoption

The changes preserve all descriptor identifiers, dimensions, and structural, progression, and
constraint assertions. They do not change labeling eligibility or add inference rules.
Review definition-dependent uses under [ONT-W2](../change-review.md#ont-w2--review-definitions-relations-and-effects-together),
especially these clarifications:

- `MetricDistanceScale` retains the corrected metric-unit family meaning from `main`, with
  the relation prefix removed and unit examples supplied in its comment.
- `RadianScale` uses the arc-length-to-radius definition; a full turn is 2π radians.
  `LiterScale` defines volume independently of a substance's mass.
- `IntegerNumbers` and related number descriptions distinguish numerical value from notation.
- `PerimeterCalculation` and `CircumferenceCalculation` concern boundary length.
  `UnitConversion` preserves a quantity when changing units and does not require approximation.
- Arithmetic family descriptions cover understanding and operating on the corresponding values;
  notation and interpretation remain separately named Areas.
- Ability definitions describe performances without generic claims about their educational
  benefits. Procedure selection, execution, understanding, and inversion remain distinct.
- `OperandCardinality` counts explicit operand occurrences, including repeated values.
- The schema description of `specializes` states preservation of the broader meaning; propagation
  of other relations remains subject to a separately justified inference rule.

Numeric bounds deliberately retain inclusive endpoints and existing contradiction assertions.
The constraint definitions, including their inverses, preserve the descriptor-level partial
conflict semantics in [ONT-R2](../relations.md#ont-r2--interpret-constraints-at-the-descriptor-level).
The pre-existing unit-fraction endpoint conflict and adoption of comments in client consumers
remain in [consolidation tracking](../plan/ontology-consolidation.md). The shared snapshot APIs
already expose comment assertions, although definition lookup does not include them.
No client API or application-specific dataset format changes in this update.

## Verification

- The full `docker build . --output dist` gate passes: Jena Turtle parsing, generation and
  compilation of both clients, TypeScript relation and validator suites, Python typing and
  relation tests, shared snapshot conformance, packaged-client checks, ontology validation,
  and documentation-reference validation.
- A focused N3-parsed source comparison confirms that all 2,890 non-annotation assertions are
  identical to the updated `main` baseline. Only `rdfs:isDefinedBy` and `rdfs:comment` differ.
- A source text audit checks all 764 descriptors and all 28 schema definitions. Every definition
  has at most two sentences; descriptor definitions have no relation-style opening, embedded
  example marker, or paragraph break. Comments contain no introductory "For example:" prefix.
- There are 400 descriptor comments: 129 for Abilities, 99 for Areas, and 172 for Scopes.
  The other descriptors retain optional comments as absent.
- Semantic review covers the rewritten definitions and examples in their families, including
  presence versus absence, numeric value versus notation, procedure distinctions, and the
  independent justification aspects. The unit-fraction endpoint decision remains open.
- The format audit is a check of this change, not new permanent validation in the release gate.
  Mathematical and educational meaning still require the review in ONT-W2 and ONT-W3.
