# EduGraph Design Overview

This document explains the design rationale. [The development references](docs/README.md) define
the authoring rules for dimension boundaries, observable claims, and relation semantics.
[DOCS.md](DOCS.md) describes the implemented APIs and build workflow. The literature comparisons
below offer familiar points of reference, not an account of where EduGraph's design originated.
They do not add inference rules or establish learner mastery.

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

[1.2 Competency Relations](#12-competency-relations-sicilia-sampson--fytros)

[1.3 Context in Competency Frameworks](#13-context-in-competency-frameworks-cass--inloc)

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

[2. Embeddings and Knowledge Graph Embeddings (KGE)](#2-embeddings-and-knowledge-graph-embeddings-kge)

[2.1 Ontology Structure and KGEs](#21-ontology-structure-and-kges)

[2.2 Search and Cluster Detection](#22-search-and-cluster-detection)

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

[1.2 Semantic Clarity](#12-semantic-clarity)

[1.3 Relational Determinism](#13-relational-determinism)

[1.4 Cognitive Portability](#14-cognitive-portability)

[2. Pragmatic Development](#2-pragmatic-development)

[2.1 Implicit Validation](#21-implicit-validation)

[2.2 Direct Applicability](#22-direct-applicability)

[2.3 Fostering Interoperability](#23-fostering-interoperability)

[3. Committed to Open Source](#3-committed-to-open-source)

**[E. Summary](#e-summary)**

[References](#references)

---

# A. Ontology Design

## 1. Entities

The EduGraph ontology defines competency not as a single concept, but through the intersection of three independent and reusable entity types: ***Area***, ***Scope***, and ***Ability***. 

This multi-dimensional approach ensures that a specific competency such as "calculating the perimeter of a rectangle using integers"—is precisely defined by the convergence of the *knowledge domains* (the Areas, e.g., Rectangle and PerimeterCalculation), the *context shaping difficulty and available solution approaches* (the Scope, e.g., IntegerNumbers), and the *cognitive skill* involved (the Ability, e.g., ProcedureExecution).

By separating these components across independent dimensions, the system maximizes the reusability of each descriptor and allows for dynamic mapping and inference across subjects, moving beyond traditional, monolithic competency definitions.

### 1.1 Entity Types

### 1.1.1 Area

**Specific Domain of Knowledge:** An Area represents a task, relation, procedure, concept, or
independently learned body of knowledge within a field. Combining Areas changes the nature of
the task or the knowledge required. For example, measuring length and measuring weight require
different knowledge, even though both concern measurement.

| Field | Example of Area |
| :---- | :---- |
| **Geometry** | **Acute Angle.** An angle greater than 0 and less than 90 degrees. |
| **Arithmetic** | **Addition.** Adding numbers together. |

### 1.1.2 Scope

**Observable Context of Learning:** A Scope changes context or challenge within the same general
task: a numeric range, representation, tool, scale, or other observable constraint. For example,
meters and centimeters specify contexts for length measurement. Fraction notation is an Area
when notation itself is studied; fractions used to display another task are a Scope.
See [the dimension rules](docs/descriptors.md#ont-d2--choose-the-dimension-by-meaning).

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

For example, `Circle partOf CircularShapes` places complete circles in a field alongside half
circles and quarter circles. The fact that a semicircular piece is physically part of a circle
does not establish the same relationship between their concepts.
Likewise, `ErrorDetection partOf ErrorCorrection` identifies one
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
[the structural reference](docs/structure.md#ont-s4--composition-may-lead-into-specialization).

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
[the inference boundary](docs/relations.md#ont-r4--state-the-inference-rule-separately).

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
| **Algebra** | **Logarithm inverts Exponentiation.** Exponentiation is commonly introduced before logarithms, sometimes with a long interval between them. Nevertheless, logarithmic scales can be observed independently in nature. |
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
`involvedBy`, identifies competency entities that use a descriptor. The ontology leaves the
composition open, with no required dimension or descriptor count. Applications may impose their
own completeness requirements. Multiple labels form a conjunction: all named claims must hold.

For example, a competency for calculating a rectangle's perimeter with integers involves
`Rectangle`, `PerimeterCalculation`, `ProcedureExecution`, and `IntegerNumbers`.
The two Areas describe the knowledge required; the Scope describes the numeric context.

This composition allows descriptions to be compared through their constituent claims.
It does not automatically copy every relation of a descriptor onto the competency.
Progression inference through these links requires a separately justified rule.


---

# B. Pedagogic Reasoning

## 1. General Structure

The following comparisons connect EduGraph to related concepts in the literature. Each
“Academic Literature” section explains the related idea on its own terms. “Ontological
Implementation” then describes the overlap, the difference, and the reason for EduGraph's
choice. These are comparisons for readers familiar with that work, not claims that the
ontology was derived from it.

### 1.1 Competency Components (Paquette)

**Academic Literature:**

Paquette, Marino, and Bejaoui describe a competency in terms of the knowledge involved,
the skill used to apply it, and how well it is performed. These three elements form their
COMP1 model: knowledge, skill, and performance.[^paquette]

**Ontological Implementation:**

**Overlap:** Both distinguish the knowledge involved from the skill used. Area and Ability provide a similar separation in EduGraph.

**Difference:** EduGraph describes content using Area, Ability, and Scope labels without requiring a fixed combination. Scope identifies context and constraints, not the learner's performance level. The dimensions are therefore not a direct mapping of COMP1.

**Reasoning:** Content must be describable without knowing who will use it or how well they will perform. Reusable labels also let different tasks share claims: Addition and ProcedureExecution, for example, can appear with different numeric Scopes. Learner performance needs separate evidence.

### 1.2 Competency Relations (Sicilia; Sampson & Fytros)

**Academic Literature:**

Sicilia examines how explicit competency descriptions can connect an organization's needs,
available skills, and learning resources.[^sicilia] Sampson and Fytros examine how competence
information can be represented so that learning software can use it.[^sampson] The shared idea
is to make competencies and their relationships available for software to compare and use.

**Ontological Implementation:**

**Overlap:** EduGraph also makes competency descriptions and their relationships explicit, so applications can use shared relations between content and systematically explore connections between competencies.

**Difference:** EduGraph distinguishes relations such as *expands*, *integrates*, and *translates* rather than treating every connection as a prerequisite or equivalence. For example, *GeometricCalculations integrates Arithmetic* describes the use of arithmetic within geometry, not a required sequence of lessons.

**Reasoning:** Applications need to understand the connections that can be inferred between competencies. Distinguishing relations between their atomic parts makes claims inspectable without assuming that every learner follows the same path. Progression inference and learning-path recommendations at the competency level still need their own validation.

For example, *Multiplication expands Addition* suggests an intuitive sequence, while *Subtraction inverts Addition* is compatible with introducing the two operations either sequentially or together. Similarly, using the Pythagorean theorem to find a missing side involves square roots, but square roots can be introduced alongside that application rather than beforehand.

### 1.3 Context in Competency Frameworks (CaSS & InLOC)

**Academic Literature:**

CaSS (Competency and Skills System) includes a field for the scope in which a competency
applies.[^cass] InLOC (Integrating Learning Outcomes and Competences) distinguishes a competency
definition from information about its applicability, including context and scope.[^inloc]
These mechanisms let a description say where or under what conditions it is relevant.

**Ontological Implementation:**

**Overlap:** EduGraph likewise distinguishes the task from the context in which it is presented.

**Difference:** EduGraph represents observable contexts as reusable Scope entities with their own relationships, rather than only as descriptive text. For example, Abacus and BaseTenBlocks both specialize PhysicalNumbers.

**Reasoning:** Explicit Scopes allow the same context to be identified across many tasks and compared consistently. They describe changes in difficulty and available solution approaches without treating every contextual variation as a different Area. Their effect on a learner must still be assessed. For example, moving from NumbersSmaller10 to NumbersLarger10 can be a substantial step when learning basic arithmetic at a young age, but only a minor change in difficulty when solving algebra problems later in school.

### 1.4 Summary: The Intersectional and Reusable Nature of Competency Descriptors

The ontology shifts from viewing a competency as a single, opaque concept to an intersectional relationship defined by three independent, reusable entity types: *Area*, *Scope*, and *Ability*

**Reusability:** By extracting the cognitive skill (*Ability*) and the context (*Scope*) from the subject matter (*Area*), the system maximizes reusability of descriptors. Explicit inference rules can reduce repeated declarations.

**Dynamic Mapping:** The structural and progression relations replace rigid, linear taxonomies (e.g., syllabi) with a dynamic, graph-based map. This makes the stated relationships inspectable and available for comparison.

**Contextual Granularity:** The introduction of *Scope* as a first-class entity elevates the importance of context, enabling the system to describe contexts and investigate differences in difficulty (e.g., solving a problem with physical manipulatives vs. abstract notation).

## 2. Abilities as Independent Dimension

The tracking of cognitive abilities as independent, domain-general dimensions represents a significant shift from traditional, subject-siloed educational models. In traditional grading, a student’s capacity to reason or evaluate is often obscured by their specific subject knowledge (e.g., failing a physics test might reflect poor mathematical calculation skills rather than a lack of scientific reasoning).

Separating Abilities lets the same kind of cognitive performance be described across subjects
and over time. The following comparisons explain how this relates to transfer, intelligence
research, and self-regulation, while keeping task descriptions separate from evidence of a
learner's capabilities.

### 2.1 Transfer of Learning (Salomon & Perkins)

**Academic Literature:**

Salomon and Perkins describe transfer as applying learning from one context in another.
They distinguish “low-road transfer,” where practice makes a response readily available,
from “high-road transfer,” where a learner deliberately identifies and applies a relevant
idea in a new situation. Whether transfer occurs depends on the conditions of learning
and use.[^transfer]

**Ontological Implementation:**

**Overlap:** The same cognitive performance can be relevant in different subjects. For example, HypothesisGeneration can be demanded in both Biology and History.

**Difference:** Transfer research asks how learning in one context carries into another. EduGraph's Ability labels describe what a task demands; using the same label in two subjects does not show that a learner has transferred the skill.

**Reasoning:** A shared descriptor makes cross-subject observations comparable without assuming their outcome. It allows applications to investigate transfer while requiring learner evidence to establish whether it happened.

### 2.2 Fluid vs. Crystallized Intelligence (Cattell-Horn-Carroll Theory)

**Academic Literature:**

CHC theory describes several broad and more specific cognitive abilities. It distinguishes
acquired knowledge (Gc) from reasoning with novel problems (Gf), alongside abilities such as
visual processing and memory. Studies of intelligence tests examine and refine this
structure.[^chc]

**Ontological Implementation:**

**Overlap:** CHC and EduGraph both distinguish knowledge from aspects of cognitive performance.

**Difference:** Area and Ability are not measures of Gc and Gf. EduGraph describes knowledge required by content and a wider range of task demands, including reasoning, communication, and self-regulation. It does not assign intelligence-test scores.

**Reasoning:** Content annotations need labels that can be justified from observable content. A task can demand DeductiveReasoning without providing enough evidence to assess a learner's fluid intelligence. Keeping these purposes separate supports content classification without making unsupported claims about the learner.

### 2.3 Self-Regulated Learning and Executive Function (Zimmerman & Diamond)

**Academic Literature:**

Diamond describes executive functions such as inhibition, working memory, and cognitive
flexibility.[^diamond] Zimmerman describes self-regulated learning through planning,
monitoring, and reflection.[^zimmerman] These related accounts examine how people manage
their actions and learning, but do not treat all cognitive, emotional, and social processes
as the same thing.

**Ontological Implementation:**

**Overlap:** EduGraph includes related performances, such as SelfRegulation or ErrorDetection, alongside other Abilities.

**Difference:** The ontology does not reproduce either research model or equate each Ability with an executive function. It identifies what content explicitly or implicitly asks a learner to do, rather than explaining all the processes involved in doing it.

**Reasoning:** These _observable_ demands should be describable across subjects just like reasoning or communication. Explicit labels allow relevant observations to be collected, while judgments about self-regulation or executive-function development require evidence beyond a task label.

### 2.4 Summary: The Structural Benefit for Cross-Subject Curriculums

When academic standards are written as monolithic text strings (e.g., *"The student will deduce the area of a triangle"*), the underlying ability (*Deduction*) is trapped inside the subject (*Geometry*).

By describing competencies through Areas and Abilities, with Scopes where relevant, the graph supports comparisons across subjects and contexts.

A curriculum designer can query the ontology to find all competencies across the entire school system that involve *AbductiveReasoning*. This allows schools to construct genuinely cross-curricular projects—for example, pairing a science unit on fossil analysis with a history unit on primary source analysis—because both units can request the same cognitive performance. Whether they develop transferable mastery must be measured.

## 3. Probabilistic vs Logical Relations

### 3.1 Knowledge Space Theory (KST) and Probabilistic Prerequisites

**Academic Literature:**

Knowledge Space Theory describes possible states of knowledge and relationships between
them. Its assessment models account for uncertainty, including careless errors and lucky
guesses. A wrong answer can therefore be treated separately from the question of whether
the learner has the relevant knowledge.[^kst]

**Ontological Implementation:**

**Overlap:** Both distinguish a description of knowledge relationships from observations of learner performance.

**Difference:** EduGraph's *expands* and *integrates* relations describe conceptual connections. They do not define the set of possible learner knowledge states or the probabilities of observed answers.

**Reasoning:** The same ontology should support different assessment approaches. Keeping conceptual relationships separate from response models allows applications to choose and test how they interpret learner evidence without changing the meaning of the content labels.

### 3.2 Probabilistic Graphical Models (PGMs) and Explanatory Skeletons

**Academic Literature:**

Probabilistic Graphical Models, such as Bayesian Networks, describe relationships between
variables. Causal models go further by stating assumptions about how one variable affects
another. Pearl distinguishes these causal claims from statistical associations: a correlation
alone does not establish a cause.[^pearl]

**Ontological Implementation:**

**Overlap:** EduGraph also makes the type and direction of relationships explicit, so their meaning can be inspected.

**Difference:** Its relations describe concepts, not probability distributions or established causes of learner performance. Separate Area, Scope, and Ability dimensions do not imply statistical independence.

**Reasoning:** A relation such as *TriangleRuler integrates DegreeScale* should remain useful for describing content even when no learner data is available. An application may use such connections when constructing a statistical model, but must justify that model's assumptions separately.

### 3.3 Educational Data Mining (EDM) and Hypothesis-Driven Curriculum

**Academic Literature:**

Educational Data Mining and Learning Analytics study patterns in educational data. Baker
and Siemens discuss prediction, relationships between observations, and testing ideas about
learning.[^edm] Different methods answer different questions; finding an association is not
the same as establishing its cause.[^pearl]

**Ontological Implementation:**

**Overlap:** EduGraph's descriptions and relations can be compared with observed performance to investigate ideas about learning.

**Difference:** The ontology records authored conceptual claims; it is not itself a data-mining method. A frequent pattern in learner data does not automatically become an ontology relation.

**Reasoning:** Keeping the claim separate from the evidence makes both reviewable. For example, *NumberTiles translates Base10* can guide a comparison of representations, while performance data can test whether the proposed connection helps explain learning. Agreement alone does not prove causality.

### 3.4 Summary: Logical and statistical relations inform each other

To accommodate both the strict logic of machine-readable ontologies and the statistical reality of human learning, the schema abstracts human behavior out of its relationships. It does not dictate *how* or *when* a student must learn. 

Instead, it defines the structural topology of the subject matter itself. By replacing rigid prerequisite commands with relational hypotheses *(expands, integrates, inverts, translates)*, the ontology provides a stable, explainable skeleton. This architecture allows statistical engines to overlay probabilities, track real-world variances, and test whether the proposed relationships help explain learning.

---

# C. Technological Reasoning

## 1. Classification, Data Efficiency, and LLM Synergy

### 1.1 Avoiding Data Starvation through Reusable Descriptors

Treating each highly specific competency statement (e.g., "Can add two-digit numbers using an abacus") as an unrelated training class can leave few examples per class. Reusable descriptors offer a way to share evidence across such combinations.[^caruana]

Reusable Areas, Scopes, and Abilities let examples contribute annotations for shared descriptors
across different competency combinations. For example, addition tasks in different numeric
contexts can contribute evidence for the same Addition descriptor.

This supports shared learning rather than requiring an unrelated class for every conjunction.
The related research and its limits are discussed in
[D.1.1](#11-dimensional-atomicity): reuse makes data aggregation possible, but does not guarantee
sufficient coverage or accurate recognition of unseen combinations.

### 1.2 Leveraging Pre-Trained Knowledge in LLMs

Names and definitions provide the language interface through which a model interprets the
ontology. Familiar terminology helps communicate the intended meaning; precise definitions
distinguish nearby concepts that a name alone could conflate.

This is a semantic clarity concern, independent of whether descriptors are decomposed into
dimensions. [D.1.2](#12-semantic-clarity) separates the ontology-engineering comparison from the
evidence for language-based visual classification. Reliable classification of EduGraph
descriptors remains an empirical requirement, not a consequence of familiar wording alone.

### 1.3 Multi-Dimensional Tagging

This atomic structure enables a highly expressive multi-dimensional tagging system. Crucially, it allows for multiple labels from the same dimension. For example, a single learning activity might involve both the *AnalogClock* and *DigitalClock* scopes. Rather than creating a rigid, mutually exclusive hierarchy, this combinatorial tagging approach mirrors the messy reality of educational content, allowing annotations to express combinations that a single label cannot capture.

## 2. Embeddings and Knowledge Graph Embeddings (KGE)

### 2.1 Ontology Structure and KGEs

Knowledge Graph Embeddings (KGEs) represent entities and relations as learned vectors. TransE, for example, models a relation as a translation between entity vectors; Graph Neural Networks (GNNs) offer other ways to learn from graph structure.[^transe][^gnn] An EduGraph embedding should distinguish *partOf*, *specializes*, *expands*, and *integrates*. Whether it preserves those distinctions must be tested.

### 2.2 Search and Cluster Detection

This vector space can support search and grouping of content.

* **Semantic Search:** Queries are no longer keyword-based; they are spatial. Searching for content involves finding nodes clustered near a specific coordinate in the semantic space, potentially finding related content even when vocabulary differs. Pedagogical relevance still needs validation.

* **Cluster Detection & Auto-Generation:** By running clustering algorithms (like DBSCAN or K-Means) over the KGEs of tagged educational content, the system can identify high-density clusters of *Areas*, *Scopes*, and *Abilities* that co-occur frequently. If a cluster exists but no formal Competency represents it, the AI could propose a new *CompetencyEntity* using the *involves* relation. Frequent co-occurrence alone does not establish a coherent competency; the proposal needs review.

## 3. Graph Databases and Deterministic Logic

### 3.1 Deterministic Operations via Graph Databases 

Graph databases can deterministically retrieve asserted relations and paths. The interpretation
depends on the edge: `partOf` retrieves constituents, `specializes` supports capability
substitution, and `involves` identifies a competency's descriptors. A retrieved progression
path is evidence in the authored model, not proof of a universal learning prerequisite.

### 3.2 Pairing with Statistical Methods 

The graph can provide explicit conceptual relationships to statistical methods, such as knowledge tracing. For example, the recorded *Multiplication expands Addition* relation can inform a model of student progress. It does not determine success probabilities or prove that every learner must follow that order; those questions need performance data and a tested model.

### 3.3 The Role of OWL 

OWL supports inverse properties and subproperties.[^owl] The schema declares both. For example,
`A specializes B` entails `B specializedBy A` and `A structures B` under those declarations.
The schema does not declare these properties as OWL transitive properties or encode generic
relation-inheritance chains. Client-library transitive helpers compute graph reachability
explicitly. Their availability does not make every path a semantic inference, nor does the
definition of `specializes` turn descriptor individuals into OWL subclasses. See
[the API semantics](DOCS.md#65-traversal-and-inference-boundaries).

## 4. Mixed Usage: Hybrid AI and Student Knowledge Graphs

### 4.1 Combining Deterministic Querying with ML 

Hybrid AI architectures (Neurosymbolic AI) combine symbolic methods with neural learning.[^nesy] For example, graph queries can select relevant concepts before an ML model ranks candidate learning paths. Only explicit, justified rules should exclude a path; graph structure alone does not make a learning sequence correct.

### 4.2 Individual Student Graphs 

When this ontology is combined with a student's personal data (either mapped into the graph database directly or linked via an RDBMS), it creates an Individual Student Knowledge Graph. Instead of just a generic map of mathematics, the system now has a map of *evidence and estimates about what this specific student knows*.

**Effects:** A system can trace `involves` edges to identify the Areas, Scopes, and Abilities
whose contribution should be investigated. One failed task does not identify the exact cause.
Repeated observations across controlled contexts can support a diagnosis and targeted remediation.

## 5. The Foundation for Content and AI

### 5.1 The Technological Bedrock 

This ontology is the technological foundation for advanced educational AI because it provides a **shared, explicit model of educational claims**.

* **Progression Tracking:** Needs a standardized, multi-dimensional coordinate system to accurately map where a student started and where they are going.

* **Recommendations:** Can use embeddings, progression relations, and learner evidence to suggest suitable challenges. Their suitability must be evaluated.

* **AI Tutors:** Can use the graph to identify relevant concepts and relationships when explaining a task. Correct explanations still require mathematical evidence and validation.

### 5.2 The Consequences of Lacking this Foundation 

Without a shared vocabulary, linking learner evidence and content across systems requires additional mapping. Educational AI can use other approaches, including content models and collaborative filtering, but an explicit ontology makes its descriptions and assumptions easier to inspect. The ontology supports explainability; it does not by itself guarantee it.

---

# D. Resulting Design Decisions

## 1. Core Concepts

The EduGraph ontology is designed to support **Neurosymbolic AI**, connecting human pedagogical expertise with machine learning.
The following points summarize EduGraph's design choices and relate them to familiar ideas.
“Pedagogical basis” describes the educational reasoning for each choice; references provide
comparisons, not a history of how the schema was developed.

### 1.1 Dimensional Atomicity

**Design questions:** Which reusable claims make up a competency description? Which claims can
be reused when its context changes?

**Pedagogical basis:** A task's knowledge, cognitive demands, and context need to be
distinguishable. Paquette's separation of knowledge and skill provides a useful comparison,
but his performance dimension answers a different question.[^paquette] See
[B.1.1](#11-competency-components-paquette) for the overlap and difference.

**Technological basis:** Caruana's *Multitask Learning* (1997)[^caruana]
shows how related tasks can benefit from shared representations and training signals.
This offers a comparison for reusing descriptor-level evidence across competency combinations;
it does not validate EduGraph's particular decomposition or guarantee recognition of unseen combinations.

**EduGraph decision:** Describe a competency through a conjunction of reusable Areas, Abilities,
and Scopes instead of creating a separate descriptor for every combination. The choice of
dimensions remains open. For example,
Addition, ProcedureExecution, and IntegerNumbers remain separate claims. Changing the numeric
context can reuse the same Area and Ability. Whether a classifier recognizes an unseen
combination must still be tested.

This principle governs **decomposition and reuse**. It does not determine how clearly each
constituent is named and defined; that is the role of [semantic clarity](#12-semantic-clarity).

### 1.2 Semantic Clarity

**Design questions:** Can people and models identify the intended meaning of each descriptor?
Can they distinguish it from neighboring concepts?

**Pedagogical basis:** Educators need a shared, precise account of what a descriptor means in
learning content. A related principle in
ontology engineering is Gruber's clarity criterion: communicate intended meaning through
objective definitions and documented semantics.[^gruber] This supports precise educational definitions regardless of how a competency is
decomposed; it is not a claim about the effect of context on learning.

**Technological basis:** Radford et al.'s *Learning Transferable Visual Models From Natural
Language Supervision* (2021)[^clip] demonstrates
natural-language descriptions as an interface for zero-shot visual classification.
This is a relevant comparison for the use of ontology descriptions by language-based classifiers. It does not
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

### 1.3 Relational Determinism

**Design questions:** How should conceptual dependencies be made explicit? How can they provide
a foundational understanding of educational progression for the AI?

**Pedagogical basis:** Describing how concepts relate is a different task from predicting a
learner's progress. Competency modeling and Knowledge Space Theory offer related distinctions,
although their relations and assessment models differ from EduGraph's.[^sicilia][^sampson][^kst]
The comparisons in section B explain those differences.

**Technological basis:** **Neurosymbolic AI** combines learned models with explicit knowledge.[^nesy] **Graph Databases** make recorded relations available for consistent queries. Consistency with a graph is not proof that its educational claims are correct.

**EduGraph decision:** Record the *type* and *direction* of conceptual relationships through *expands* and *integrates*, providing a foundational understanding of educational progression for the AI. Keep those authored relationships separate from predictions about learners. They make recommendations inspectable, but do not guarantee correct learning paths.

### 1.4 Cognitive Portability

**Design questions:** How can the same Ability be tracked across subjects and over time? How can
that shared dimension help investigate subject-specific and cognitive-processing difficulties?

**Pedagogical basis:** Comparing cognitive performance across subjects requires shared
descriptions without assuming equal performance in every context. Transfer research asks how
learning carries between contexts, while CHC examines the structure of cognitive abilities.[^transfer][^chc]
These are useful comparisons, not direct mappings to Area and Ability.

**Technological basis:** **Cross-Domain Data Aggregation** and **Longitudinal Tracking** benefit from shared labels. These allow observations from different subjects and times to be brought together without treating the tasks as identical.

**EduGraph decision:** Treat *Abilities* as an independent dimension so observations of *AnalyticalCapability*, for example, can be compared across Math, Science, and Language Arts. This supports a shared learner profile and investigation of subject-specific and cognitive-processing difficulties. A shared label does not establish transferable mastery or diagnose the cause of a difficulty.

## 2. Pragmatic Development

Ontology development benefits from feedback between definitions, **Annotated Content**, and
**Classification and Embedding Models**. Applying descriptors to varied content helps test whether
their meanings are useful and distinguishable, independently of any particular application.

### 2.1 Implicit Validation
Annotating varied learning content provides an ongoing check of the ontology's definitions
and distinctions.

**Classification as evidence:** Repeated difficulty assigning a descriptor to content is a reason
to inspect its definition, neighboring concepts, annotation, and content evidence alongside the
model's limitations. A controlled example or counterexample helps determine which part needs
correction. This connects observable classification with the goal of tracking capabilities over
time, without treating a model's verdict as the definition of the ontology.

### 2.2 Direct Applicability
**Classification Models** can identify ontology descriptors in learning content, while
**Embedding Models** can represent their meanings and relationships for comparison.

**Automatically Tagged Content:** Classification can make learning content easier to label and the ontology easier to adopt. Restricting predictions to ontology identifiers prevents invented labels, but does not establish that the selected labels are correct. Evaluate both missing and incorrect annotations against the available content evidence.

Large Vision-Language Models (LVLMs) offer pretrained visual and language capabilities.[^clip]
Their use with EduGraph should preserve the ontology's intended meanings. No particular model
or training method is required.

**Vectorized Pedagogy:** An embedding model can represent descriptors and their relationships as vectors. Distances between them can support similarity search and recommendation engines, or provide a fast initial filter before a reasoning model examines the results.

### 2.3 Fostering Interoperability
A common barrier in educational technology is the difficulty of mapping disparate ontologies or standards (e.g., mapping 
Common Core to a proprietary school curriculum). EduGraph explores **Content-Mediated Alignment** as a way to support, rather than replace,
reviewed mappings between standards.

**Automated Mapping:** Content labeled under both systems can provide evidence for candidate mappings. Sufficient coverage and validation are needed before those mappings can be treated as reliable.

**Ontological Ingestion:** These discovered mappings can then be formally ingested back into the ontology as relations. 
Much like how a *CompetencyDescription* is defined by the *involves* relation, future iterations of the ontology can 
include validated links to external standards, allowing the ontology to grow through reviewed evidence from more content.

## 3. Committed to Open Source

The EduGraph ontology is open source so its definitions and relations can be inspected, reused,
and improved collaboratively. Sharing annotated examples and model evaluations can help others
assess whether those meanings work in practice.

**Extensibility & Customization:** The ontology is not a closed dogma. Users can customize and extend the model to fit specific local or institutional needs. This is supported by a **specialized online editor**, allowing educators and developers to branch the ontology while maintaining structural compatibility with the core engine.

**Specialization through SFT:** Classification and embedding models may be adapted to particular content through **Supervised Fine-Tuning (SFT)**. Adaptation should retain shared descriptor meanings rather than silently redefine them for a local collection.

**Collaborative Interoperability:** This open-source approach encourages shared development. As contributors refine models and map new content, they improve interoperability across the ecosystem. The feedback between content, models, and ontology helps all three evolve as our understanding improves.

---

# E. Summary

EduGraph is more than an academic pipe dream. It is an applicable open source tool that combines pedagogic requirements 
with technological efficiency. Its combination of simplicity and openness makes it accessible to a wide education audience.

Contributions and support are welcome :)

---

# References

Footnotes identify related research or specifications. The comparisons are not claims about
EduGraph's intellectual origins. Its design choices and proposed applications are not results
established by those sources. Technical documentation
was checked on 9 September 2026.

[^paquette]: Paquette, G., Marino, O., & Bejaoui, R. (2021). [A new competency ontology for learning environments personalization](https://doi.org/10.1186/s40561-021-00160-z). *Smart Learning Environments*, 8, 16. See the initial competency model and model comparison.

[^sicilia]: Sicilia, M.-A. (2005). [Ontology-Based Competency Management: Infrastructures for the Knowledge Intensive Learning Organization](https://www.cc.uah.es/msicilia/papers/SICI_COMP_05.pdf). Author's chapter manuscript; see competency description and knowledge-gap analysis.

[^sampson]: Sampson, D., & Fytros, D. (2008). [Competence Models in Technology-Enhanced Competence-Based Learning](https://doi.org/10.1007/978-3-540-74155-8_9). In *Handbook on Information Technologies for Education and Training*, 2nd ed., pp. 155–177.

[^cass]: CaSS Project. [CaSS Schema](https://schema.cassproject.org/), version 0.3, Competency `scope` property. This documents a context field, not a theory of cognitive load.

[^inloc]: InLOC Project. [How to follow InLOC in the structuring of LOC information](https://www.simongrant.org/InLOC/How%2Bto%2Bfollow%2BInLOC). See “Recognising LOC definitions” and “What to leave out” for applicability and context.

[^transfer]: Salomon, G., & Perkins, D. N. (1989). [Rocky Roads to Transfer: Rethinking Mechanisms of a Neglected Phenomenon](https://doi.org/10.1207/s15326985ep2402_1). *Educational Psychologist*, 24(2), 113–142.

[^chc]: Reynolds, M. R., Keith, T. Z., Flanagan, D. P., & Alfonso, V. C. (2013). [A cross-battery, reference variable, confirmatory factor analytic investigation of the CHC taxonomy](https://doi.org/10.1016/j.jsp.2013.02.003). *Journal of School Psychology*, 51(4), 535–555. See the introduction for the wider CHC model and the study for supporting evidence.

[^diamond]: Diamond, A. (2013). [Executive Functions](https://www.devcogneuro.com/Publications/ExecutiveFunctions2013.pdf). *Annual Review of Psychology*, 64, 135–168. DOI: 10.1146/annurev-psych-113011-143750.

[^zimmerman]: Zimmerman, B. J. (2002). [Becoming a Self-Regulated Learner: An Overview](https://doi.org/10.1207/s15430421tip4102_2). *Theory Into Practice*, 41(2), 64–70.

[^kst]: Doignon, J.-P., & Falmagne, J.-C. (2015). [Knowledge Spaces and Learning Spaces](https://arxiv.org/abs/1511.06757). Author manuscript. See the separate treatment of knowledge structures and probabilistic assessment.

[^pearl]: Pearl, J. (2009). [Causal inference in statistics: An overview](https://escholarship.org/content/qt1kd1m111/qt1kd1m111.pdf). *Statistics Surveys*, 3, 96–146. See section 2 on causal assumptions and their distinction from associations.

[^edm]: Baker, R., & Siemens, G. (2014). [Educational Data Mining and Learning Analytics](https://doi.org/10.1017/CBO9781139519526.016). In *The Cambridge Handbook of the Learning Sciences*, 2nd ed., pp. 253–272. [Author manuscript](https://learninganalytics.upenn.edu/ryanbaker/BakerSiemensHandbook2013.pdf).

[^caruana]: Caruana, R. (1997). [Multitask Learning](https://www.cs.cornell.edu/~caruana/mlj97.pdf). *Machine Learning*, 28, 41–75.

[^transe]: Bordes, A., Usunier, N., Garcia-Duran, A., Weston, J., & Yakhnenko, O. (2013). [Translating Embeddings for Modeling Multi-relational Data](https://papers.nips.cc/paper/5071-translating-embeddings-for-modeling-multi-relational-data.pdf). *Advances in Neural Information Processing Systems*, 26.

[^gnn]: Schlichtkrull, M., et al. (2017). [Modeling Relational Data with Graph Convolutional Networks](https://arxiv.org/abs/1703.06103). Author preprint. Describes relation-aware graph learning, not a guarantee that vector distance measures educational similarity.

[^owl]: W3C (2012). [OWL 2 Web Ontology Language Primer, Second Edition](https://www.w3.org/TR/owl2-primer/). Sections 4.5 and 6 distinguish property hierarchies, inverses, transitivity, and property chains. EduGraph's actual declarations are in [core-schema.ttl](core-schema.ttl).

[^nesy]: Sarker, M. K., Zhou, L., Eberhart, A., & Hitzler, P. (2021). [Neuro-Symbolic Artificial Intelligence: Current Trends](https://arxiv.org/abs/2105.05330). Author preprint.

[^gruber]: Gruber, T. R. (1995). [Toward Principles for the Design of Ontologies Used for Knowledge Sharing](https://tomgruber.org/writing/onto-design.pdf). *International Journal of Human-Computer Studies*, 43, 907–928; linked author report revised in 1993. See section 3, “Clarity.”

[^clip]: Radford, A., et al. (2021). [Learning Transferable Visual Models From Natural Language Supervision](https://proceedings.mlr.press/v139/radford21a.html). *Proceedings of Machine Learning Research*, 139, 8748–8763.
