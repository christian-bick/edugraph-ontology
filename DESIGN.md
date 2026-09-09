# EduGraph Design Overview

This document explains the design rationale. [DOCS_ONTOLOGY.md](DOCS_ONTOLOGY.md) is the
authoring reference for dimension boundaries, observable claims, and relation semantics.
[DOCS.md](DOCS.md) describes the implemented APIs and build workflow. Research analogies below
motivate the design; they are not additional inference rules or guarantees of learner mastery.

**[A. Ontology Design](#a-ontology-design)**

[1. Entities](#1-entities)

[1.1 Entity Types](#11-entity-types)

[1.1.1 Area](#111-area)

[1.1.2 Scope](#112-scope)

[1.1.3 Ability](#113-ability)

[2. Structural Relations](#2-structural-relations)

[2.1 PartOf](#21-partof)

[2.2 Specializes](#22-specializes)

[3. Progression Relations](#3-progression-relations)

[3.1 Expands](#31-expands)

[3.1.1 Inverts](#311-inverts)

[3.2 Integrates](#32-integrates)

[3.2.1 Translates](#321-translates)

[4. Composition Relations](#4-composition-relations)

[4.1 Involves](#41-involves)

**[B. Pedagogic Reasoning](#b-pedagogic-reasoning)**

[1. General Structure](#1-general-structure)

[1.1 Competency Components](#11-competency-components-paquette)

[1.2 Semantic Prerequisite Networks](#12-semantic-prerequisite-networks-sicilia--sampson)

[1.3 Context-Awareness in Learning Analytics](#13-context-awareness-in-learning-analytics-cass--inloc)

[1.4 Summary](#14-summary-the-intersectional-and-reusable-nature-of-competency-descriptors)

[2. Abilities as Independent Dimension](#2-abilities-as-independent-dimension)

[2.1 Transfer of Learning](#21-transfer-of-learning-salomon--perkins)

[2.2 Fluid vs. Crystallized Intelligence](#22-fluid-vs-crystallized-intelligence-cattell-horn-carroll-theory)

[2.3 Self-Regulated Learning and Executive Function](#23-self-regulated-learning-and-executive-function-zimmerman--diamond)

[2.4 Summary](#24-summary-the-structural-benefit-for-cross-subject-curriculums)

[3. Probabilistic vs Logical Relations](#3-probabilistic-vs-logical-relations)

[3.1 Knowledge Space Theory (KST) and Probabilistic Prerequisites](#31-knowledge-space-theory-kst-and-probabilistic-prerequisites)

[3.2 Probabilistic Graphical Models (PGMs) and Explanatory Skeletons](#32-probabilistic-graphical-models-pgms-and-explanatory-skeletons)

[3.3 Educational Data Mining (EDM) and Hypothesis-Driven Curriculum](#33-educational-data-mining-edm-and-hypothesis-driven-curriculum)

[3.4 Summary](#34-summary-logical-and-statistical-relations-inform-each-other)

**[C. Technological Reasoning](#c-technological-reasoning)**

[1. Classification, Data Efficiency, and LLM Synergy](#1-classification-data-efficiency-and-llm-synergy)

[1.1 Avoiding Data Starvation through Reusable Descriptors](#11-avoiding-data-starvation-through-reusable-descriptors)

[1.2 Leveraging Pre-Trained Knowledge in LLMs](#12-leveraging-pre-trained-knowledge-in-llms)

[1.3 Multi-Dimensional Tagging](#13-multi-dimensional-tagging)

[2. Embeddings and Knowledge Graph Extraction (KGE)](#2-embeddings-and-knowledge-graph-extraction-kge)

[1.1 Ontology Structure and KGEs](#11-ontology-structure-and-kges)

[1.2 Search and Cluster Detection](#12-search-and-cluster-detection)

[3. Graph Databases and Deterministic Logic](#3-graph-databases-and-deterministic-logic)

[3.1 Deterministic Operations via Graph Databases](#31-deterministic-operations-via-graph-databases)

[3.2 Pairing with Statistical Methods](#32-pairing-with-statistical-methods)

[3.3 The Role of OWL](#33-the-role-of-owl)

[4. Mixed Usage: Hybrid AI and Student Knowledge Graphs](#4-mixed-usage-hybrid-ai-and-student-knowledge-graphs)

[4.1 Combining Deterministic Querying with ML](#41-combining-deterministic-querying-with-ml)

[4.2 Individual Student Graphs](#42-individual-student-graphs)

[5. The Foundation for Content and AI](#5-the-foundation-for-content-and-ai)

[5.1 The Technological Bedrock](#51-the-technological-bedrock)

[5.2 The Consequences of Lacking this Foundation](#52-the-consequences-of-lacking-this-foundation)

**[D. Resulting Design Decisions](#d-resulting-design-decisions)**

[1. Core Concepts](#1-core-concepts)

[1.1 Dimensional Atomicity](#11-dimensional-atomicity)

[1.2 Relational Determinism](#12-relational-determinism)

[1.3 Cognitive Portability](#13-cognitive-portability)

[1.4 Semantic Clarity](#14-semantic-clarity)

[2. Pragmatic Development](#2-pragmatic-development)

[2.1 Implicit Validation](#21-implicit-validation)

[2.2 Direct Applicability](#22-direct-applicability)

[2.3 Fostering Interoperability](#23-fostering-interoperability)

[2.4 Committed to Open Source](#24-committed-to-open-source)

**[E. Summary](#e-summary)**

---

# A. Ontology Design

## 1. Entities

The EduGraph ontology defines competency not as a single concept, but through the intersection of three independent and reusable entity types: ***Area***, ***Scope***, and ***Ability***. 

This multi-dimensional approach ensures that a specific competency such as "calculating the perimeter of a rectangle using integers"—is precisely defined by the convergence of the *knowledge domains* (the Areas, e.g., Rectangle and PerimeterCalculation), the *broader context affecting difficulty* (the Scope, e.g., IntegerNumbers), and the *cognitive skill* involved (the Ability, e.g., ProcedureExecution).

By separating these components across independent dimensions, the system maximizes the reusability of each descriptor and allows for dynamic mapping and inference across subjects, moving beyond traditional, monolithic competency definitions.

### 1.1 Entity Types

### 1.1.1 Area

**Specific Domain of Knowledge:** An Area represents a task, relation, procedure, concept, or
independently learned body of knowledge within a field. Combining Areas changes the nature of
the task or the knowledge required. For example, measuring length and measuring weight require
different knowledge, even though both concern measurement.

| Field | Example of Area |
| :---- | :---- |
| **Geometry** | **Acute Angle.** An angle that measures less than 90 degrees. |
| **Arithmetic** | **Addition.** Adding numbers together. |

### 1.1.2 Scope

**Observable Context of Learning:** A Scope changes context or challenge within the same general
task: a numeric range, representation, tool, scale, or other observable constraint. For example,
meters and centimeters specify contexts for length measurement. Fraction notation is an Area
when notation itself is studied; fractions used to display another task are a Scope.
See [the dimension rules](DOCS_ONTOLOGY.md#21-area-changes-task-nature-scope-changes-task-context).

| Field | Example of Scope |
| :---- | :---- |
| **Physical Numbers**  | **Abacus.** Represents numbers using a physical abacus.  |
| **Time Measurement**  | **Analog Clock.** Involves measuring or representing time using an analog clock.  |

### 1.1.3 Ability

**General Mental Attribute**: An Ability is trainable and applicable across fields. Its definition
must connect long-term cognitive development to the performance demanded by observable learning
content. Multiple Abilities may apply together; there is no primary Ability. An annotation of
a task's demand does not establish a learner's mastery.

| Field | Example of Ability |
| :---- | :---- |
| **Logical Inference**  | **Abductive Reasoning.** A form of logical inference that starts with an observation or set of observations and then seeks to find the simplest and most likely explanation.  |
| **Critical Analysis**  | **Analytical Capability.** The ability to examine information critically, break it down into its component parts, and identify patterns and relationships.  |

## 2. Structural Relations

The structural model distinguishes part-whole organization from capability inheritance.
Both relations are dimension-neutral and connect descriptor individuals.

Both `partOf` and `specializes` are subproperties of `structures`, whose inverse is
`structuredBy`. This shared property supports navigation through the hierarchy while the
specific relation states whether an edge represents membership or inheritance.

### 2.1 PartOf

`partOf` places a constituent within a whole. A constituent can be a component, stage, or
aspect of a broader field or process, without being a narrower form of that whole.
Its inverse, `hasPart`, leads from the whole to its constituents.

For example, `HalfCircle partOf Circle` describes a geometric part: a half circle is not
a kind of complete circle. Likewise, `ErrorDetection partOf ErrorCorrection` identifies one
stage of the correction process. Detecting an error alone does not establish that the complete
process of evaluating and resolving it has been performed.

A `partOf` edge therefore provides no capability substitution. It can still be relevant to
other explicitly justified inference rules, whose semantics must be established separately.

### 2.2 Specializes

`specializes` connects a narrower form of a concept to its more general form. The narrower
capability supports the broader claim, so it can substitute for that claim in matching.
Its inverse, `specializedBy`, leads from the broader concept to its specializations.

For example, `Square specializes Rectangle`: a square preserves the defining properties of a
rectangle while adding a constraint on its side lengths. Similarly, `ProcedureInversion`
specializes `ProcedureUnderstanding`: the inversion task realizes the broader understanding
claim through a more specific cognitive performance.

Specialization is directional. A rectangle claim does not establish the square constraint,
and a general procedure-understanding task does not necessarily demand inversion.
The same rule applies to Area, Scope, and Ability.

From a broad field toward its descendants, composition may be followed by specialization,
but specialization must not be followed by composition. The transition is determined by meaning,
not by a fixed hierarchy depth. Multiple parents require every path to be reviewed.
The exact authoring rule, including mixed children, is in
[DOCS_ONTOLOGY.md](DOCS_ONTOLOGY.md#32-ordered-structure-and-specialization).

Leaf status does not determine whether a descriptor is usable. A non-leaf such as
`FractionNumbers` can describe the observable context at the intended granularity.
A broad structural family does not become an observable capability merely because one
of its constituent tools appears in the task.

## 3. Progression Relations

The design of the EduGraph ontology thinks about progression spatially as a form of dynamic growth and transformation. Progression relations define how concepts and capabilities build upon one another, explaining the cognitive leap between different areas of knowledge. 

The two general relations are `expands` and `integrates`, with `inverts` and `translates`
as their respective subproperties. They describe proposed conceptual dependencies rather than
a mandatory sequence for every learner.

Their coverage and inference semantics remain a separate refinement task. The capability rule
for `specializes` does not decide how progression propagates through a hierarchy:
a `partOf` relation may also contribute to a justified inference without permitting capability
substitution. Existing progression assertions and the illustrative examples below are inputs to
that review, not evidence that a propagation rule is correct. See
[the inference boundary](DOCS_ONTOLOGY.md#33-capability-inheritance-and-other-inference).

### 3.1 Expands

Growing the Competency Space: A *expands* B when the relationship explains how the competency space grows from understanding B to understanding A.

| Field | Example of Expansion |
| :---- | :---- |
| **Arithmetic** | **Multiplication expands Addition**.  Moves from counting units one-by-one to "Scaling" a whole line at once. |
| **Geometry** | **3D Space expands the 2D Plane.**  Adds a third axis (z), allowing for depth and volume. |
| **Number Space** | **Numbers Larger 10 expands Numbers Smaller 10.**  Extends the number space at a pivotal point. |

### 3.1.1 Inverts

Growing with implied inversion: Entity A inverts Entity B when the expands relation implies an inversion logic. In this case, on the theoretical level, an inverse relation exists between A and B. However, in practice there is usually an intuitive order of teaching A and B, expressed by the directionality of this relation.

| Field | Example of Inversion |
| :---- | :---- |
| **Arithmetic**  | **Subtraction inverts Addition.** Students don’t learn addition in complete isolation of subtraction, both are based on an intuitive access to sums and differences with objects which is then formalized as Addition and Subtraction in close succession. |
| **Algebra** | **Logarithm inverts Expontiation.** Here the order in reality will always be Expontiation before Logarithm, and even with long timespans between the introduction of the two. Nevertheless, logarithmic scales can be observed independently in nature. |
| **Counting** | **Subtractive Count inverts Additive Count.** When visually counting, tasks can be structured as counting forward (additive count) or backward (subtractive count) with an intuitive preference for counting forward. |

### 3.2 Integrates

Directly applying formed capabilities: A *integrates* B when the relation explains a reference between parts of the competency space, showing that the capabilities formed in B are directly applied in A. 

| Field | Example |
| :---- | :---- |
| **Algebra** | **The Quadratic Formula integrates Powers & Fractions.**  The quadratic formula applies base arithmetic capabilities to solve a problem in a specific field of algebra. |
| **Geometry** | **Geometric Calculations integrates Arithmetic.**  The entire field of calculating geometric properties like areas, midpoints, perimeters etc. applies various arithmetic capabilities. |
| **Time Intervals** | **Calendar integrates Day, Week, Month & Year.** The concepts of time intervals expressed as days, months, weeks and years are applied to represent their relationship in the scope of a year. |

### 3.2.1 Translates

Application with a change of perspective: A *translates* B when the *integrates* relation implies a change of perspective on the same concepts and problems.  In this case, on the theoretical level, an inverse relation exists between A and B. However, in practice there is usually an intuitive order of teaching A and B, expressed by the directionality of this relation.

| Field | Example of Translation |
| :---- | :---- |
| **Arithmetic** | **Fraction Notation translates Proportions.**  Fractions can express proportion and fraction arithmetic simplifies calculations with proportions. |
| **Geometry** | **Shape Plotting translates Polygons.**  Plotting a polygon on a scalar plane visualizes the abstract definition of a polygon and vice versa. |
| **Number Visualization** | **Base Ten Block translates Base 10.**  Number blocks visualize the idea of the numeric base 10 system to provide an intuitive transition towards formal calculations in this system. |

## 4. Composition Relations

### 4.1 Involves

`involves` composes a competency description from its defining descriptors. Its inverse,
`involvedBy`, identifies competency entities that use a descriptor. A description has at
least one Area and one Ability and zero or more Scopes. Multiple labels form a conjunction:
all named claims must hold.

For example, a competency for calculating a rectangle's perimeter with integers involves
`Rectangle`, `PerimeterCalculation`, `ProcedureExecution`, and `IntegerNumbers`.
The two Areas describe the knowledge required; the Scope describes the numeric context.

This composition allows descriptions to be compared through their constituent claims.
It does not automatically copy every relation of a descriptor onto the competency.
Progression inference through these links requires a separately justified rule.


---

# B. Pedagogic Reasoning

## 1. General Structure

The development of structured competency frameworks often relies on established educational psychology, cognitive science, and epistemological theories. However, traditional academic models are frequently designed to describe human developmental stages or linear instructional taxonomies. When translating these theories into a machine-readable, graph-based knowledge representation (an ontology), principles must be adapted to function as relational, computable nodes rather than purely descriptive concepts.

### 1.1 Competency Components (Paquette)

**Academic Literature:**

Paquette, Marino, and Bejaoui describe competency through a generic skill applied to knowledge
at a performance level. Their comparison identifies the COMP1 triple as skill, knowledge,
and performance, not skill, knowledge, and context.
See [A new competency ontology for learning environments personalization (2021), sections on
the initial model and model comparison](https://doi.org/10.1186/s40561-021-00160-z).

**Ontological Implementation:**

EduGraph adapts the separation of knowledge and generic skill as Area and Ability. Scope is
EduGraph's explicit dimension for observable context and constraints; it is not a renaming of
Paquette's performance dimension. Describing a task's demand does not measure a learner's
proficiency. The following correspondences explain the adaptation, not an exact reproduction
of the source model.

| Academic Concept | Ontology Counterpart | Adaptation Rationale |
| :---- | :---- | :---- |
| **Action Verb / Skill** | *Ability*: Defined as "A general mental attribute that is trainable and applicable across various fields". Examples include *LogicalProcessing* and *AnalogicalReasoning*. | Traditional frameworks embed the verb directly into a text string (e.g., "Understands fractions"). The ontology extracts the ability as a standalone entity, allowing the system to track a student's *LogicalProcessing* across entirely different subjects like Math or Foreign Languages. |
| **Knowledge Object** | *Area*: Defined as "A specific domain of knowledge and understanding within a field". Examples include *FractionArithmetic* and *IntegerArithmetic*. | In standard models, knowledge objects are static taxonomies. Here, *Areas* are interconnected nodes; for example, *FractionArithmetic* translates *ProportionInteraction*, creating a dynamic map of subject matter dependencies. |
| **Competency Definition** | *CompetencyDescription*: Involves at least one Ability and Area, with zero or more Scopes. | Instead of a 1:1 mapping, the ontology uses an intersectional graph. A competency does not "own" an ability or area; it is defined by its relationship to them. This ensures high reusability and allows inference engines to identify overlapping skills across different descriptions. |

### 1.2 Semantic Prerequisite Networks (Sicilia & Sampson)

**Academic Literature:**

Researchers such as Miguel-Angel Sicilia and Demetrios Sampson have extensively explored how to link learning objects and competencies using ontological relations. Their research emphasizes replacing traditional, rigid course syllabi with "Semantic Prerequisite Networks." In these networks, competencies are linked by relations such as requires, is-equivalent-to, or is-part-of. This allows an algorithm to calculate learning paths automatically based on the semantic dependencies of the concepts rather than a teacher's subjective lesson plan.

**Ontological Implementation:**

The ontology adopts the concept of automated pathing but entirely discards the standard, subjective “requires” relation in favor of mathematically objective operators.

| Academic Concept | Ontology Counterpart | Adaptation Rationale |
| :---- | :---- | :---- |
| **"Requires" / Prerequisite** | *expands*: "A expands B when understanding A is based on an understanding of B". *integrates*: "A integrates B when A is synthesized in parts using B". | The term "requires" is pedagogically ambiguous (e.g., does it require it as a building block, or as a broader concept?). The ontology alters this into precise structural relationships. For example, *Multiplication expands Addition*, meaning the domain is grown, whereas *GeometricCalculations integrates Arithmetic* to synthesize an entire new set of tools. |
| **"Is-Equivalent-To"** | *translates*: "A translates B when one is a representation of the other". | True equivalence is rare in learning. The ontology adapts this into a "Translation" relation. For instance, *FractionArithmetic* translates *ProportionInteraction*. This allows the reasoner to understand that the underlying logic is identical, even if the representation differs. |

### 1.3 Context-Awareness in Learning Analytics (CASS & InLOC)

**Academic Literature:**

Modern competency frameworks, such as the Competency and Academic Standards Exchange (CASS) and the Integrating Learning Outcomes and Competencies (InLOC) specifications, highlight the importance of "Context." A student might possess the ability to solve a mathematical operation on paper but fail to do so in a real-world word problem. Academic literature dictates that context (the environment, the tools allowed, the constraints) drastically alters the cognitive load and must be modeled to accurately assess mastery.

**Ontological Implementation:**

The ontology formalizes this environmental factor through the *Scope* class, elevating context from a mere metadata tag to a primary structural node.

| Academic Concept | Ontology Counterpart | Adaptation Rationale |
| :---- | :---- | :---- |
| **Performance Context / Environment** | *Scope*: "An observable context of learning that affects abstraction, variation, generalization, complexity and ultimately measurable differences in difficulty". | Standard models treat context as a descriptive note attached to a test. The ontology models contexts as independent, interconnected entities. For example, *Base10* is a scope that can be translated by the physical scope *BaseTenBlocks*. |
| **Contextual Hierarchy** | `partOf` organizes constituents; `specializes` identifies narrower contexts. | `Abacus` and `BaseTenBlocks` specialize `PhysicalNumbers`. Specialization supports comparison at a broader granularity. Performance across those contexts can inform a diagnostic hypothesis, but hierarchy alone does not prove the cause of a learner’s difficulty. |

### 1.4 Summary: The Intersectional and Reusable Nature of Competency Descriptors

The ontology shifts from viewing a competency as a single, opaque concept to an intersectional relationship defined by three independent, reusable entity types: *Area*, *Scope*, and *Ability*

**Reusability:** By extracting the cognitive skill (*Ability*) and the context (*Scope*) from the subject matter (*Area*), the system maximizes reusability of descriptors. In combination with inference, the amount of explicitly declared relations is reduced to minimum.

**Dynamic Mapping:** The structural and progression relations replace rigid, linear taxonomies (e.g., syllabi) with a dynamic, graph-based map. This allows for solid reasoning over relations between competencies which are now rooted in fundamental structures with a high level objectivity.

**Contextual Granularity:** The introduction of *Scope* as a first-class entity elevates the importance of context, enabling the system to model measurable differences in difficulty based on the environment (e.g., solving a problem with physical manipulatives vs. abstract notation).

## 2. Abilities as Independent Dimension

The tracking of cognitive abilities as independent, domain-general dimensions represents a significant shift from traditional, subject-siloed educational models. In traditional grading, a student’s capacity to reason or evaluate is often obscured by their specific subject knowledge (e.g., failing a physics test might reflect poor mathematical calculation skills rather than a lack of scientific reasoning).

Isolating "abilities" allows for longitudinal tracking of cognitive growth across a student's entire academic career and enables the design of cross-curricular learning paths. The following academic frameworks support this approach, alongside an analysis of how they are adapted into the computable ontology.

### 2.1 Transfer of Learning (Salomon & Perkins)

**Academic Literature:**

Educational psychologists Gavriel Salomon and David Perkins established the framework for the "Transfer of Learning"—the application of skills learned in one context to novel situations. 

They distinguish between "low-road transfer" (automatic triggering of well-practiced routines) and "high-road transfer" (mindful abstraction of a cognitive skill from one context to apply it to another). High-road transfer requires students to possess domain-general cognitive tools, such as analogical reasoning or hypothesis generation, that are not strictly bound to the subject in which they were first learned.

**Ontological Implementation:**

The ontology formalizes high-road transfer by extracting cognitive actions out of subject-specific silos and structuring them as an independent *Ability* class.

| Academic Concept | Ontology Counterpart | Adaptation Rationale |
| :---- | :---- | :---- |
| **Domain-General Cognitive Tools** | *Ability*: "A general mental attribute that is trainable and applicable across various fields." | Instead of embedding a verb inside a math or science standard, the ability is an independent node. For example, *AnalogicalReasoning* is applicable across Math, Science, and Social Science. |
| **High-Road Transfer / Abstraction** | The *involves* property links multiple *CompetencyDescription* nodes to the same *Ability*. | The ontology allows an algorithm to track transferability. Evidence of *HypothesisGeneration* in Biology and History can be tracked under the same Ability. Transfer to another Area remains an empirical question rather than an automatic inheritance of mastery. |

### 2.2 Fluid vs. Crystallized Intelligence (Cattell-Horn-Carroll Theory)

**Academic Literature:**

The Cattell-Horn-Carroll (CHC) Theory represents the consensus psychometric model of cognitive abilities, providing a heavily validated statistical framework for categorizing human cognition.

It makes a fundamental distinction between *Crystallized Intelligence* (Gc)—the depth and breadth of acquired, domain-specific knowledge—and *Fluid Intelligence* (Gf)—the broad ability to reason, form concepts, and solve novel problems independent of past knowledge. For long-term observation, tracking Gf is critical because fluid abilities grow and mature across a lifespan, acting as the engine that allows students to acquire new Gc in unfamiliar domains.

**Ontological Implementation:**

The ontology maps this precise psychological division directly into its structural architecture, ensuring that the engine of learning (the ability) is tracked independently from the accumulated facts (the area).

| Academic Concept | Ontology Counterpart | Adaptation Rationale |
| :---- | :---- | :---- |
| **Fluid Intelligence (Gf)** | *Ability*: Represents fluid reasoning processes such as *DeductiveReasoning*, *ConceptGeneralization*, and *SpatialGeneration*. | Academic theories treat Gf as a psychological trait. The ontology adapts this into a structural tracking dimension. Because *Ability* nodes are static across all grades, a school can longitudinally observe a student's *LogicalProcessing* from elementary arithmetic through advanced calculus. |
| **Crystallized Knowledge (Gc)** | *Area*: "A specific domain of knowledge and understanding within a field." Examples include *FractionArithmetic* or *Geometry*. | By separating Gc (Area) from Gf (Ability), the ontology prevents false negatives in assessment. If a student fails a geometry assessment, the graph can isolate whether the failure was due to lacking the specific Gc (Geometry rules) or the Gf (*SpatialImagination*). |

### 2.3 Self-Regulated Learning and Executive Function (Zimmerman & Diamond)

**Academic Literature:**

Research on Executive Functions (by Adele Diamond) and Self-Regulated Learning (by Barry Zimmerman) emphasizes that academic success relies heavily on metacognitive abilities—planning, monitoring, evaluating one's own progress, and emotional regulation. 

These are highly cross-curricular skills. A student's ability to evaluate the plausibility of an answer or moderate a group discussion applies equally in a physics lab and a literature seminar. Tracking these longitudinally is vital because executive functions develop gradually through adolescence.

**Ontological Implementation:**

The ontology elevates metacognitive, emotional, and social functions to the exact same structural level as logic and mathematics, categorizing them as explicitly queryable abilities.

| Academic Concept | Ontology Counterpart | Adaptation Rationale |
| :---- | :---- | :---- |
| **Executive Evaluation** | *Evaluation*: Sub-abilities include *PlausibilityEvaluation*, *ErrorDetection*, and *RelevanceEvaluation*. | Traditional curriculums often fail to track "error detection" as a distinct, long-term skill. By making *ErrorDetection* an independent node, a system can observe a student's executive functioning maturing over years, across varied subjects. |
| **Self-Regulation and Metacognition** | *Introspection*: Sub-abilities include *SelfAssessment*, *SelfAwareness*, and *SelfRegulation*. | Rather than treating emotional control as a "soft skill" outside the curriculum, the ontology models *SelfRegulation* as a foundational *Ability*. This allows educational software to trigger interventions based on cognitive and emotional regulation patterns rather than just academic scores. |

### 2.4 Summary: The Structural Benefit for Cross-Subject Curriculums

When academic standards are written as monolithic text strings (e.g., *"The student will deduce the area of a triangle"*), the underlying ability (*Deduction*) is trapped inside the subject (*Geometry*).

By describing competencies through Areas and Abilities, with Scopes where relevant, the graph supports comparisons across subjects and contexts.

A curriculum designer can query the ontology to find all competencies across the entire school system that involve *AbductiveReasoning*. This allows schools to construct genuinely cross-curricular projects—for example, pairing a science unit on fossil analysis with a history unit on primary source analysis—because both units can request the same cognitive performance. Whether they develop transferable mastery must be measured.

## 3. Probabilistic vs Logical Relations

### 3.1 Knowledge Space Theory (KST) and Probabilistic Prerequisites

**Academic Literature:**

Knowledge Space Theory (KST), developed by Jean-Claude Falmagne and Jean-Paul Doignon, maps a domain of knowledge by identifying dependencies between concepts. Initially, KST relied on deterministic "surmise relations" (if a student knows B, we can logically surmise they know A). However, because students sometimes guess correctly or make careless slips, modern KST relies on probabilistic interpretations. A prerequisite relation in modern KST is not a strict gatekeeper, but rather a hypothesis about the most probable learning pathways.

**Ontological Implementation:**

The ontology avoids the rigid semantics of traditional prerequisite modeling (such as requires or hasPrerequisite), which break automated reasoning engines when exceptions occur. Instead, it utilizes structural dependency relations like *expands* and *integrates*.

| Academic Concept | Ontology Counterpart | Adaptation Rationale |
| :---- | :---- | :---- |
| **Probabilistic Surmise Relations** | *expands*: "A expands B when understanding A is based on an understanding of B". | A strict "requires" relationship makes a strong behavioral assertion about the learner. The ontology alters this to a structural assertion about the subject matter. What appears logically obvious, serves as a hypothesis for statistical models to handle the behavioral probabilities. |

### 3.2 Probabilistic Graphical Models (PGMs) and Explanatory Skeletons

**Academic Literature:**

In artificial intelligence, Probabilistic Graphical Models (PGMs), such as Bayesian Networks, merge graph theory with probability theory. Judea Pearl’s work on causality emphasizes that while statistical correlation can identify that two variables move together, it takes a directed logical graph to explain *why*. In educational modeling, a pure statistical correlation might show that students who fail fractions also fail algebra. However, without a logical framework mapping the cognitive connection, educators cannot design targeted interventions.

**Ontological Implementation:**

The ontology is designed to function as the directed logical skeleton for a future statistical engine, explicitly defining the *type* of relationship connecting two nodes.

| Academic Concept | Ontology Counterpart | Adaptation Rationale |
| :---- | :---- | :---- |
| **Directed Causal Graphs** | Directional properties such as *integrates*, defined as "A integrates B when A is synthesized in parts using B". | A statistical model might notice a high correlation between measuring angles and drawing triangles. The ontology provides the logical explanation: *TriangleRuler* integrates *DegreeScale*. The logic provides the causal direction for the statistical correlation. |
| **Conditional Independence** | The separation of *Area*, *Ability*, and *Scope* into independent classes. | In PGMs, separating variables reduces computational complexity. By making representations separate (e.g., *RomanNumerals* translates *Base10*), the ontology allows a statistical engine to test variables independently, isolating whether a student's struggle is with the underlying math or the specific notation. |

### 3.3 Educational Data Mining (EDM) and Hypothesis-Driven Curriculum

**Academic Literature:**

The field of Educational Data Mining (EDM), championed by researchers like Ryan Baker and George Siemens, focuses on extracting patterns from large-scale educational datasets. A key principle in EDM is the transition from "curriculum as prescription" to "curriculum as hypothesis." Expert-authored curriculum maps are subjective. True validation occurs when statistical analysis of student performance (e.g., through item response theory) confirms that mastering Concept A significantly increases the probability of mastering Concept B. When the statistics align with the expert map, the logical link transitions from a hypothesis to a validated explanation of cognitive growth.

**Ontological Implementation:**

The ontology encodes expert-authored logic not as absolute truths of human learning, but as structured, testable hypotheses using distinct operational vectors (*expands,* *integrates*).

| Academic Concept | Ontology Counterpart | Adaptation Rationale |
| :---- | :---- | :---- |
| **Expert-Authored Hypotheses** | Defining specific domain relationships, such as *DigitNotation expands NumericIdentity*. | By formalizing these links using standard Semantic Web protocols (OWL/RDF), the ontology allows educational data systems to query the exact nature of the hypothesized relationship and test it against student performance datasets. |
| **Transitioning to Explanation** | The descriptive definitions attached to the properties, such as *translates* ("A translates B when one is a representation of the other"). | Once EDM confirms a statistical correlation between two competencies, the ontology provides the semantic vocabulary to explain it. If success in physical counting correlates with success in symbolic counting, the ontology explains this structurally: *NumberTiles translates Base10*. |

### 3.4 Summary: Logical and statistical relations inform each other

To accommodate both the strict logic of machine-readable ontologies and the statistical reality of human learning, the schema abstracts human behavior out of its relationships. It does not dictate *how* or *when* a student must learn. 

Instead, it defines the structural topology of the subject matter itself. By replacing rigid prerequisite commands with relational hypotheses *(expands, integrates, inverts, translates)*, the ontology provides a stable, explainable skeleton. This architecture allows statistical engines to overlay probabilities, track real-world variances, and eventually validate the logical hypotheses into robust educational explanations.

---

# C. Technological Reasoning

## 1. Classification, Data Efficiency, and LLM Synergy

### 1.1 Avoiding Data Starvation through Reusable Descriptors

Traditional educational taxonomies often suffer from data starvation because they rely on monolithic, highly specific competency statements (e.g., "Can add two-digit numbers using an abacus"). Training machine learning models on these isolated nodes requires massive datasets for each specific node. 

Reusable Areas, Scopes, and Abilities let examples contribute annotations for shared descriptors
across different competency combinations. For example, addition tasks in different numeric
contexts can contribute evidence for the same Addition descriptor.

This supports shared learning rather than requiring an unrelated class for every conjunction.
The supporting research and its limits are separated in
[D.1.1](#11-dimensional-atomicity): reuse makes data aggregation possible, but does not guarantee
sufficient coverage or accurate recognition of unseen combinations.

### 1.2 Leveraging Pre-Trained Knowledge in LLMs

Names and definitions provide the language interface through which a model interprets the
ontology. Familiar terminology helps communicate the intended meaning; precise definitions
distinguish nearby concepts that a name alone could conflate.

This is a semantic clarity concern, independent of whether descriptors are decomposed into
dimensions. [D.1.4](#14-semantic-clarity) separates the ontology-engineering basis from the
evidence for language-based visual classification. Reliable classification of EduGraph
descriptors remains an empirical requirement, not a consequence of familiar wording alone.

### 1.3 Multi-Dimensional Tagging

This atomic structure enables a highly expressive multi-dimensional tagging system. Crucially, it allows for multiple labels from the same dimension. For example, a single learning activity might involve both the *AnalogClock* and *DigitalClock* scopes. Rather than creating a rigid, mutually exclusive hierarchy, this combinatorial tagging approach mirrors the messy reality of educational content, allowing classifiers to accurately capture nuances that single-label hierarchical systems miss.

## 2. Embeddings and Knowledge Graph Extraction (KGE)

### 1.1 Ontology Structure and KGEs

When the ontology is projected into Knowledge Graph Embeddings (KGEs)—using models like TransE or Graph Neural Networks (GNNs)—the distinct relations (*partOf*, *specializes*) and progression relations (*expands*, *integrates*) are translated into geometric distances and directional vectors in a high-dimensional space. The embedding must preserve the difference between structural membership, specialization, and progression rather than treating every edge as an interchangeable parent relation.

### 1.2 Search and Cluster Detection 

This mapped vector space revolutionizes how systems handle content.

* **Semantic Search:** Queries are no longer keyword-based; they are spatial. Searching for content involves finding nodes clustered near a specific coordinate in the semantic space, ensuring results are conceptually and pedagogically relevant, even if the vocabulary differs.

* **Cluster Detection & Auto-Generation:** By running clustering algorithms (like DBSCAN or K-Means) over the KGEs of tagged educational content, the system can identify high-density clusters of *Areas*, *Scopes*, and *Abilities* that co-occur frequently. If a cluster exists but no formal Competency represents it, the AI can automatically generate a new *CompetencyEntity* and formally define it using the *involves* relation, effectively allowing the system to self-organize and discover unmapped curriculum paths.

## 3. Graph Databases and Deterministic Logic

### 3.1 Deterministic Operations via Graph Databases 

Graph databases can deterministically retrieve asserted relations and paths. The interpretation
depends on the edge: `partOf` retrieves constituents, `specializes` supports capability
substitution, and `involves` identifies a competency's descriptors. A retrieved progression
path is evidence in the authored model, not proof of a universal learning prerequisite.

### 3.2 Pairing with Statistical Methods 

The true power lies in pairing this deterministic graph with statistical AI. The graph provides the "rules of physics" for the educational domain—the hard constraints. Statistical methods (like predictive knowledge tracing algorithms) operate within these constraints. For instance, an algorithm predicting student success doesn't have to guess the relationship between *Addition* and *Multiplication*; the graph deterministically provides the *expands* relationship, allowing the statistical model to focus purely on calculating the probability of the student successfully making that leap based on historical data.

### 3.3 The Role of OWL 

The schema declares inverse properties and subproperties. For example,
`A specializes B` entails `B specializedBy A` and `A structures B` under those declarations.
The schema does not declare these properties as OWL transitive properties or encode generic
relation-inheritance chains. Client-library transitive helpers compute graph reachability
explicitly. Their availability does not make every path a semantic inference, nor does the
definition of `specializes` turn descriptor individuals into OWL subclasses. See
[the API semantics](DOCS.md#65-traversal-and-inference-boundaries).

## 4. Mixed Usage: Hybrid AI and Student Knowledge Graphs

### 4.1 Combining Deterministic Querying with ML 

Hybrid AI architectures (Neurosymbolic AI) combine the best of both worlds. For example, deterministic querying can be used to dramatically reduce the search space for an ML algorithm. If a system wants to generate a learning path, it can first use a graph query to traverse structural and progression relations, eliminating implicitly redundant entities or logically impossible jumps. The ML model is then fed this optimized, logically sound subgraph to rank the best possible paths based on user engagement metrics or predicted success rates.

### 4.2 Individual Student Graphs 

When this ontology is combined with a student's personal data (either mapped into the graph database directly or linked via an RDBMS), it creates an Individual Student Knowledge Graph. Instead of just a generic map of mathematics, the system now has a map of *what this specific student knows*.

**Effects:** A system can trace `involves` edges to identify the Areas, Scopes, and Abilities
whose contribution should be investigated. One failed task does not identify the exact cause.
Repeated observations across controlled contexts can support a diagnosis and targeted remediation.

## 5. The Foundation for Content and AI

### 5.1 The Technological Bedrock 

This ontology is the technological foundation for advanced educational AI because it provides a **computable ground truth**.

* **Progression Tracking:** Needs a standardized, multi-dimensional coordinate system to accurately map where a student started and where they are going.

* **Recommendations:** Need the KGEs and progression vectors to ensure suggested content is in the student's Zone of Proximal Development.

* **AI Tutors:** Need the deterministic structural graph to correctly explain *why* a concept works, breaking it down into its atomic *Scopes* and *Areas*, rather than just hallucinating a plausible-sounding but pedagogically flawed explanation.

### 5.2 The Consequences of Lacking this Foundation 

Without this ontological foundation, educational technology degrades into "black box" systems. Recommender systems are forced to rely on collaborative filtering ("Students who clicked this also clicked that"), which ignores pedagogical prerequisites and structural logic entirely. AI tutors lack domain guardrails, leading to logical inconsistencies and unexplainable behavior. Data remains siloed because there is no common semantic vocabulary to link a student's performance in one platform to their performance in another. Ultimately, without the ontology, AI in education is just surface-level pattern matching; with it, it becomes a true engine for cognitive modeling.

---

# D. Resulting Design Decisions

## 1. Core Concepts

The EduGraph ontology is not merely a digital curriculum map; it is a **Neurosymbolic Engine** designed to bridge the gap between human pedagogical expertise and machine-learning efficiency. 
The synthesis of educational theory and computational logic explains the combined design decisions for this ontology:

### 1.1 Dimensional Atomicity

**Design questions:** Which reusable claims make up a competency description? Which claims can
be reused when its context changes?

**Pedagogical basis:** Competency modeling separates generic skill from the knowledge to which
it is applied. [Paquette, Marino, and Bejaoui (2021)](https://doi.org/10.1186/s40561-021-00160-z)
provide this basis, while also modeling performance. As explained in
[B.1.1](#11-competency-components-paquette), EduGraph adapts that separation rather than
attributing its Area, Ability, and Scope dimensions directly to Paquette.

**Technological basis:** [Caruana's Multitask Learning (1997)](https://www.cs.cornell.edu/~caruana/mlj97.pdf)
shows how related tasks can benefit from shared representations and training signals.
This motivates reusing descriptor-level evidence across competency combinations; it is not a
validation of EduGraph's particular decomposition or a guarantee of compositional generalization.

**EduGraph decision:** Describe a competency through a conjunction of reusable Areas, Abilities,
and optional Scopes instead of creating a separate descriptor for every combination. For example,
Addition, ProcedureExecution, and IntegerNumbers remain separate claims. Changing the numeric
context can reuse the same Area and Ability. Whether a classifier recognizes an unseen
combination must still be tested.

This principle governs **decomposition and reuse**. It does not determine how clearly each
constituent is named and defined; that is the role of [semantic clarity](#14-semantic-clarity).

### 1.2 Semantic Clarity

**Design questions:** Can people and models identify the intended meaning of each descriptor?
Can they distinguish it from neighboring concepts?

**Pedagogical basis:** Educators need a shared, precise account of what a descriptor means in
learning content. The supporting definition principle comes from ontology engineering rather
than a theory of learning: [Gruber's ontology design criteria, section 3](https://tomgruber.org/writing/onto-design.pdf)
treat clarity as communicating intended meaning through objective definitions and documented
semantics. This supports precise educational definitions regardless of how a competency is
decomposed; it is not a claim about the effect of context on learning.

**Technological basis:** [Radford et al., Learning Transferable Visual Models From Natural
Language Supervision (2021)](https://proceedings.mlr.press/v139/radford21a.html) demonstrates
natural-language descriptions as an interface for zero-shot visual classification.
That motivates making ontology descriptions usable by language-based classifiers. It does not
establish that educational Abilities are reliably observable or that familiar names guarantee
accuracy without fine-tuning.

**EduGraph decision:** Use recognizable names together with definitions that state the intended
educational meaning, observable evidence, and relevant boundaries. For example, FractionNotation
must mean learning about fraction notation, not merely encountering fractions in a comparison
task. A familiar name alone does not communicate that boundary.

This principle governs **meaning and interpretation**, not descriptor decomposition. Context
belongs in the Scope rationale; it is not the origin of semantic clarity. Classification results
test whether the definitions work in practice, without making the model's interpretation the
authority for their meaning.

### 1.2 Relational Determinism

**Design questions:** How should conceptual dependencies be made explicit? How can they provide
a foundational understanding of educational progression for the AI?

**Pedagogical basis:** *Semantic Prerequisite Networks* (Sicilia & Sampson) and *Knowledge Space Theory* (KST), which view learning as a directional growth through a structured topology.

**Technological basis:** **Neurosymbolic AI** and **Graph Databases**. Statistical models (LLMs/GNNs) excel at prediction but lack causal guardrails; graph logic provides deterministic certainty.

**EduGraph decision:** The ontology provides a "logical skeleton" (*expands*, *integrates*) for "probabilistic muscles" (statistical AI). The pedagogical theory defines the *type* and *direction* of the relationship, which then acts as a foundational understanding of educational progression for the AI. This prevents "hallucinated" learning paths and ensures that recommendations are always grounded in a pedagogically sound structure.

### 1.3 Cognitive Portability

**Design questions:** How can the same Ability be tracked across subjects and over time? How can
that shared dimension help investigate subject-specific and cognitive-processing difficulties?

**Pedagogical basis:** *Transfer of Learning* (Salomon & Perkins) and the distinction between *Fluid and Crystallized Intelligence* (CHC Theory). These theories posit that cognitive abilities are domain-general engines of learning.

**Technological basis:** **Cross-Domain Data Aggregation** and **Longitudinal Tracking**. Traditional systems silo student data by subject; modern data architectures require a universal coordinate system.

**EduGraph decision:** By treating *Abilities* as an independent dimension, the ontology enables cognitive portability. A student's *Analytical Capability* is tracked as a single vector that moves across Math, Science, and Language Arts. This integrates the psychological reality of human intelligence with the computational need for a unified student profile, allowing the system to diagnose whether a struggle is a subject-matter gap or a cognitive-processing bottleneck.

## 2. Pragmatic Development

The EduGraph ontology is not developed in a vacuum. It is the core of a three-way development cycle involving the **Ontology**, 
a **Reference Dataset**, and **Statistical Models** (Classification and Embedding). This pragmatic approach ensures immediate 
applicability and constant validation.

### 2.1 Implicit Validation
Ontology development happens in direct lockstep with the annotation of a custom reference dataset. This dataset serves as 
a continuous sanity check. 

**Classification as evidence:** Repeated difficulty assigning a descriptor to content is a reason
to inspect its definition, neighboring concepts, annotation, and rendered evidence alongside the
model's limitations. A controlled example or counterexample helps determine which part needs
correction. This connects observable classification with the goal of tracking capabilities over
time, without treating a model's verdict as the definition of the ontology.

### 2.2 Direct Applicability
By developing a specialized **Classification Model** and an **Embedding Model** alongside, the ontology moves from a static 
document to an active tool.

**Automatically Tagged Content:** The classification model allows high-quality tagging of learning content with the EduGraph
ontology without human oversight. Using modern multimodal models, the model can operates not only on text documents, but
also on images and video. The high flexibility of modern models opens up the ontology to use cases beyond digital spaces
and allows the tracking of learning activities in offline environments.

**Vectorized Pedagogy:** The embedding model translates ontological nodes into a high-dimensional space where "pedagogical 
distance" becomes measurable. This enables search and recommendation engines to operate with a degree of conceptual nuance 
that keyword-based systems cannot match.

### 2.3 Fostering Interoperability
A common barrier in educational technology is the difficulty of mapping disparate ontologies or standards (e.g., mapping 
Common Core to a proprietary school curriculum). EduGraph bypasses the need for direct, manual "Schema-to-Schema" mapping 
through **Content-Mediated Alignment**.

**Automated Mapping:** When enough content exists that is tagged with another standard, the existing models can 
automatically generate high-confidence mappings. Tagged content itself can act as the "Rosetta Stone" between different systems.

**Ontological Ingestion:** These discovered mappings can then be formally ingested back into the ontology as relations. 
Much like how a *CompetencyDescription* is defined by the *involves* relation, future iterations of the ontology can 
include validated links to external standards, effectively allowing to grow autonomously as more content is processed.

### 2.4 Committed to Open Source
The EduGraph ecosystem is built on the principle of radical transparency and community-driven growth. By making the 
**Ontology**, the **Reference Datasets**, and the **Statistical Models** entirely open source, the project ensures 
that the technological bedrock of education remains a public good.

**Extensibility & Customization:** The ontology is not a closed dogma. Users can customize and extend the model to fit specific local or institutional needs. This is supported by a **specialized online editor**, allowing educators and developers to branch the ontology while maintaining structural compatibility with the core engine.

**Specialization through SFT:** The provided classification and embedding models are designed as foundational blocks. They can be used as a base for further **Supervised Fine-Tuning (SFT)**, allowing institutions to specialize the AI on their own proprietary content or unique pedagogical styles without starting from scratch.

**Collaborative Interoperability:** This open-source approach fosters a culture of joined development. As more users contribute data, refine models, and map new content, the entire ecosystem gains interoperability. The community-driven feedback loop ensures that the ontology and its models evolve at the speed of educational innovation.

---

# E. Summary

EduGraph is more than an academic pipe dream. It is an applicable open source tool that combines pedagogic requirements 
with technological efficiency. Its combination of simplicity and openness makes it accessible to a wide education audience.

Contributions and support are welcome :)
