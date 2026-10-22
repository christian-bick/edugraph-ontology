# Probability, statistics and combinatorics — implementation draft

Status: merged into `main` at `9750eff` through
[PR #75](https://github.com/christian-bick/edugraph-ontology/pull/75), 2026-10-21.
Original implementation branch: `codex/probability-statistics-combinatorics`.
Baseline: merged `main` at `5f521686e01d20befb494f5af178e0f02c21e372`, including
[Calculus PR #74](https://github.com/christian-bick/edugraph-ontology/pull/74).
Authored sources: [Areas](../../core-areas-math.ttl) and [Scopes](../../core-scopes-math.ttl).

The [Markov-chain absorption and convergence follow-up](markov-absorption-convergence-draft.md)
adds seven Areas under the existing stochastic-process family, merged at `53e6602` through
[PR #85](https://github.com/christian-bick/edugraph-ontology/pull/85). This later batch is not
part of the original implementation counts below.

## Scope and structure

Probability models random outcomes and quantities; Statistics concerns observed data and the
conclusions supported by study designs and sampling models; Combinatorics concerns finite
counting and structure. Probability and Combinatorics are new roots. The existing Statistics
root is retained and developed. Shared set knowledge lives in SetTheory and symbolic conventions
in FormalMathematics. This follows a subject structure usable beyond an individual syllabus.

The implementation adds **160 Areas and 15 Scopes**, and replaces one existing Area
and one existing Scope with renamed identifiers. The Scope also gains broader meaning.
The **177 introduced identifiers** comprise **18 organizers** and **159 eligible descriptors**;
retiring the two old identifiers gives a net increase of 175 descriptors. These introduced identifiers carry
**125 partOf**, **50 specializes**, and **62 progression** assertions.
The resulting graph has **1314 descriptors and 7005 assertions**.

The tags `core` and `advanced` below are planning annotations, not ontology Scopes or claims
that every national curriculum requires the same content. The union spans school foundations,
advanced secondary courses and selected introductory university connections. German Länder
vary; Bavaria's enrichment modules are optional. French terminale and mathématiques expertes
provide different requirements. This is a researched concept-coverage draft, not a completed
competency-by-competency certification or a dataset implementation.

The hierarchy uses constituent organization before specialization, in accordance with
[ONT-S4 and ONT-S5](../structure.md). P denotes partOf; S denotes specializes. No specializing
branch returns to constituent children, and no parent mixes child roles.

```text
Probability [root]
  P ProbabilityFoundations
    P EventIndependence
    P ProbabilityAxioms
    P ProbabilityEvent
    P ProbabilityModel
    P RandomExperiment
    P RandomVariable
    P RepeatedIndependentTrials
    P SampleSpace
  P ProbabilityLimitTheorems
    P CentralLimitTheorem
    P ChebyshevInequality
    P LawOfLargeNumbers
    P MarkovInequality
  P ProbabilityMethods
    P MonteCarloEstimation
    P NormalApproximation
    P SamplingSimulation
  P ProbabilityRules
    P AdditionProbabilityRule
    P BayesTheorem
    P ClassicalProbability
    P ComplementProbability
    P ConditionalProbability
    P MultiplicationProbabilityRule
    P TotalProbabilityTheorem
  P RandomVariableTheory
    P ConditionalDistribution
    P CumulativeDistributionFunction
    P JointDistribution
    P ProbabilityDensityFunction
    P ProbabilityDistribution
      S ContinuousProbabilityDistribution
        S ChiSquaredDistribution
        S ContinuousUniformDistribution
        S ExponentialDistribution
        S NormalDistribution
        S StudentTDistribution
      S DiscreteProbabilityDistribution
        S BernoulliDistribution
        S BinomialDistribution
        S DiscreteUniformDistribution
        S GeometricDistribution
        S HypergeometricDistribution
        S PoissonDistribution
    P ProbabilityMassFunction
    P RandomVariableIndependence
    P RandomVariableMoments
      P Covariance
      P ExpectationLinearity
      P ExpectedValue
      P RandomVariableStandardDeviation
      P RandomVariableVariance
      P VarianceOfSum
  P StochasticProcesses
    P FiniteMarkovChain
    P MarkovStateDistribution
    P MarkovTransitionMatrix
    P StationaryDistribution
Statistics [root]
  P BivariateStatistics
    P AssociationAndCausation
    P ContingencyAssociation
    P LeastSquaresFit
    P PearsonCorrelation
    P RegressionModel
    P RegressionResidual
    P StatisticalExtrapolation
  P DescriptiveStatistics
    P ArithmeticMean
    P DispersionMeasure
      S DataRange
      S DataStandardDeviation
      S DataVariance
      S InterquartileRange
      S MeanAbsoluteDeviation
    P EmpiricalDistributionShape
    P FrequencyDistribution
    P Mode
    P Quantile
      S Median
      S Quartile
    P RelativeFrequency
      S ConditionalRelativeFrequency
    P StatisticalOutlier
    P WeightedArithmeticMean
  P HypothesisTesting
    P HypothesisTest
      S BinomialTest
      S ChiSquaredIndependenceTest
      S MeanTTest
      S RandomizationTest
    P PValue
    P SignificanceLevel
    P StatisticalHypotheses
    P TestingError
      S TypeOneError
      S TypeTwoError
    P TestPower
    P TestStatistic
  P StatisticalData
    P MeasurementScale
    P PopulationParameter
    P SampleStatistic
    P StatisticalPopulation
    P StatisticalSample
    P StatisticalVariability
    P StatisticalVariable
  P StatisticalEstimation
    P ConfidenceInterval
    P EstimatorBias
    P MarginOfError
    P ParameterEstimation
      S UnbiasedVarianceEstimation
    P SamplingDistribution
    P StandardError
  P StudyDesign
    P Census
    P Confounding
    P ObservationalStudy
    P RandomizedExperiment
    P SamplingBias
    P SamplingDesign
      S SimpleRandomSampling
      S StratifiedSampling
    P StatisticalQuestion
Combinatorics [root]
  P CombinatorialEnumeration
    P BinomialCoefficient
    P CircularPermutationCounting
    P MultinomialCoefficient
    P OrderedSelectionCounting
      S OrderedSelectionWithoutRepetition
        S PermutationCounting
      S OrderedSelectionWithRepetition
    P StarsAndBars
  P CountingPrinciples
    P BijectionCounting
    P ComplementCounting
    P DivisionCountingPrinciple
    P DoubleCounting
    P ExhaustiveEnumeration
    P InclusionExclusionPrinciple
    P PigeonholePrinciple
    P ProductCountingPrinciple
    P SumCountingPrinciple
Arithmetic [existing]
  P ArithmeticOperations [existing]
    P Factorial
SetTheory [root]
  P CartesianProduct
  P FiniteSetCardinality
  P SetDifference
    S SetComplement
  P SetDisjointness
  P SetInclusion
  P SetIntersection
  P SetMembership
  P SetUnion
```

ProbabilityNotation and SetNotation are additional constituents of FormalMathematics.
PascalIdentity and BinomialCoefficientSymmetry specialize AlgebraicEquivalence, without a
second structural parent under Combinatorics. Their progression links retain the connection
to BinomialCoefficient. Existing BinomialTheorem is reused.

The existing NumberTheory organizer ArithmeticFunctions is renamed to NumberTheoreticFunctions,
retaining DivisorCount, DivisorSum, EulersTotient and MultiplicativeArithmeticFunction as
constituents. Its clarified definition and naming rationale are recorded in the
[number-theory design](number-theory-basics-draft.md#family-naming-refinement--2026-10-21).

The representation refinements use the same subject-based organization:

```text
RepresentationalScope [existing]
  P ProbabilityRepresentation
    S ProbabilityTree
  P AlgebraicRepresentation
    S AlgebraTiles
    S EqualityBalanceRepresentation
    S GraphicalAlgebraicRepresentation [replaces GraphicalSolutionRepresentation]
    S SymbolicAlgebraicRepresentation
    S TabularAlgebraicRepresentation
    S VerbalAlgebraicRepresentation
```

## Boundary decisions

- ProbabilityFoundations introduces RandomVariable alongside experiments, outcomes, events and
  models. RandomVariableTheory groups its probability distributions, dependence and numerical
  summaries; the foundational concept has one structural home.
- Probability laws retain one primary home in ProbabilityRules or RandomVariableMoments.
  They establish how events, conditioning and stochastic quantities determine probabilities
  or moments. This is a reviewable educational placement choice: these laws are equalities,
  but the new knowledge is not ordinary algebraic rewriting. No duplicate applying-the-law
  techniques or extra structural parents are introduced.
- Theoretical moments and observed-data summaries are distinct. RandomVariableVariance
  concerns a probability law; DataVariance uses the divisor n for the empirical data;
  UnbiasedVarianceEstimation uses n-1 under its stated independent-sampling assumptions.
- Random variables assign values to outcomes. Events are sets of outcomes. Density height
  is not point probability. A continuous CDF does not by itself guarantee a density;
  ProbabilityDensityFunction therefore remains separate from ContinuousProbabilityDistribution.
- ProbabilityModel and RelativeFrequency distinguish a model from observations. Numerical
  probabilities alone do not imply an evidenced ProbabilisticErrorBound.
- ConfidenceInterval concerns repeated-procedure coverage. PValue is a probability under
  a specified null model, not the probability that the null is true. Failure to reject does
  not establish the null; power and Type II error depend on a specified alternative.
- Random sampling supports population generalization; random assignment supports treatment
  comparisons. RandomizationTest also admits justified exchangeability-based permutations
  and therefore has no mandatory RandomizedExperiment progression edge.
- RegressionModel composes with existing AffineDependence, QuadraticDependence or
  ExponentialDependence. LeastSquaresFit and RegressionResidual provide independent
  statistical knowledge. There is no duplicated regression family per algebraic form.
- Factorial belongs to ArithmeticOperations: its product rule and zero case are reusable
  independently of counting. PermutationCounting and BinomialCoefficient retain their
  integrates links to Factorial. Functional study composes Factorial with NumericFunction
  and relevant sequence or function-property concepts when evidenced; no separate
  FactorialFunction descriptor is introduced.
- BinomialCoefficient gives subset-count meaning; BinomialTheorem remains the expansion
  identity. OrderedSelectionCounting specializes by repetition conditions; PermutationCounting
  is the full-selection case. StarsAndBars also covers unordered repeated selections.
- Existing LinePlot covers numerical dot plots; no DotPlot synonym is added. Existing
  DataTable, BarGraph and PictureGraph are reused. Chart Scopes describe representation,
  while FrequencyDistribution and statistical summaries identify learned knowledge.
- ProbabilityRepresentation is partOf RepresentationalScope, parallel to DataRepresentation,
  NumberRepresentation and GeometryRepresentation. ProbabilityTree specializes it. The family
  groups what is represented; the child identifies a particular form. A theoretical probability
  tree does not require collected data, while an unweighted counting tree alone does not establish
  ProbabilityTree. The new parent and its specialization remain eligible direct Scopes.
- AlgebraicRepresentation groups algebraic presentation contexts, with symbolic, verbal,
  tabular, balance-model, tile-model and graphical specializations. GraphicalAlgebraicRepresentation
  replaces the narrower GraphicalSolutionRepresentation and covers function graphs as well as
  graphical solution sets. Representation Scopes do not by themselves assert notation knowledge,
  equation solving or solution-set interpretation; these remain separately evidenced Area claims.
- A tabular algebraic rule need not be collected data or determine a unique rule beyond its displayed
  values. A narrative setting alone does not establish a verbal algebraic relationship. AlgebraTiles
  and EqualityBalanceRepresentation cover physical or depicted models; ordinary numerical tiles
  and mass-measurement balances retain their existing meanings.
- Existing proof-method and evidence Scopes are reused. BijectionCounting and DoubleCounting
  supply specifically combinatorial methods; their proof role can be described compositionally.
- Finite Markov models cover state evolution, transition probabilities and stationary laws.
  Stationarity does not imply convergence. Graph-specific representation and graph theory
  remain a separate extension; ordinary matrix arithmetic is reused.

## Candidate definitions and examples

Definitions and examples below match the authored source. Each definition is phrased as
knowledge or a mathematical activity, rather than prescribing an Ability; see
[ONT-D4](../descriptors.md#ont-d4--define-the-educational-meaning-and-its-boundaries).

### Areas

| Identifier | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| Probability | core | Root | The mathematical study of random outcomes, their likelihoods, and the behavior of random quantities and processes. | Modeling repeated coin tosses; comparing the chances of different outcomes. |
| ProbabilityFoundations | core | P: Probability | The experiments, outcome sets, events, random variables, models, and consistency conditions used to describe uncertainty. | Distinguishing an individual die outcome from the event of rolling an even number. |
| RandomExperiment | core | P: ProbabilityFoundations | A specified procedure with an uncertain outcome among identifiable possibilities. | Rolling a die once; recording the waiting time until the next bus. |
| RandomVariable | core | P: ProbabilityFoundations | A numerical quantity assigning one value to each outcome of a random experiment, with probabilities induced by its event model. | Assigning to each sequence of three coin tosses its number of heads. |
| SampleSpace | core | P: ProbabilityFoundations | The set of all outcomes distinguished by a specified random experiment. | For two coin tosses, the outcomes HH, HT, TH, and TT. |
| ProbabilityEvent | core | P: ProbabilityFoundations | A collection of outcomes in a sample space to which the probability model assigns a probability. | The event {2,4,6} for an even result on a six-sided die. |
| ProbabilityModel | core | P: ProbabilityFoundations | A mathematical description assigning probabilities to events of a specified random experiment, with assumptions that can be compared with observations. | Assigning probability 1/6 to each face of a fair die; questioning that model after strongly uneven observed frequencies. |
| ProbabilityAxioms | core | P: ProbabilityFoundations | Nonnegativity, total probability one, and countable additivity for disjoint events as the consistency conditions of a probability model. | For disjoint die events {1,2} and {3}, adding their probabilities gives the probability of {1,2,3}. |
| EventIndependence | core | P: ProbabilityFoundations | The condition that probabilities of intersections equal products of probabilities for every finite subcollection of the specified events. Pairwise independence alone need not establish independence of a larger collection. | The first and second results of independent coin tosses; two disjoint events of positive probability that are not independent. |
| RepeatedIndependentTrials | core | P: ProbabilityFoundations | Repeated random experiments for which events determined by distinct trials are mutually independent, without requiring identical trial distributions. | Independent coin tosses with a fixed success probability; independent trials using differently biased coins. |
| ProbabilityRules | core | P: Probability | Rules for deriving event probabilities from a probability model and relationships among events. | Computing a union probability; updating a probability after observing evidence. |
| ClassicalProbability | core | P: ProbabilityRules | The probability of an event as its number of favorable outcomes divided by the size of a finite sample space of equally likely outcomes. | Three even faces among six equally likely die faces give probability 1/2. |
| ComplementProbability | core | P: ProbabilityRules | The equality between an event complement probability and one minus the event probability. | If rain has probability 0.3, no rain has probability 0.7. |
| AdditionProbabilityRule | core | P: ProbabilityRules | The rule P(A union B)=P(A)+P(B)-P(A intersection B), with the intersection correction zero for disjoint events. | For a fair die, rolling even or greater than four has probability 3/6+2/6-1/6=4/6. |
| ConditionalProbability | core | P: ProbabilityRules | The probability of an event after restricting to a conditioning event of positive probability, given by P(A given B)=P(A intersection B)/P(B). | Among die outcomes greater than three, the probability of an even result is 2/3. |
| MultiplicationProbabilityRule | core | P: ProbabilityRules | The factorization of an intersection probability into a positive-probability conditioning event and a conditional probability, iterated along successive events when each conditioning probability is defined. | Drawing two red balls without replacement from three red and two blue balls has probability (3/5)(2/4). |
| TotalProbabilityTheorem | core | P: ProbabilityRules | The expression of an event probability as the sum of conditional probabilities weighted by the probabilities of a finite or countable partition into positive-probability events. | With 60% of parts from a machine having defect rate 0.02 and 40% from one having rate 0.05, the overall defect probability is 0.032. |
| BayesTheorem | core | P: ProbabilityRules | The reversal of conditioning through P(A given B)=P(B given A)P(A)/P(B), when both conditioning events have positive probability. | With P(A)=0.2, P(B given A)=0.8 and P(B)=0.4, P(A given B)=0.4. |
| RandomVariableTheory | core | P: Probability | The probability distributions, dependence, and numerical summaries of random variables. | The number of heads in ten tosses and its distribution. |
| ProbabilityDistribution | core | P: RandomVariableTheory | The assignment of probabilities to possible values or sets of values of random quantities. | A fair die assigns probability 1/6 to each value from one through six. |
| DiscreteProbabilityDistribution | core | S: ProbabilityDistribution | A probability distribution concentrated on a finite or countably infinite set of values, whose point probabilities sum to one. | The number of successes in ten trials; the number of trials until the first success. |
| ContinuousProbabilityDistribution | core | S: ProbabilityDistribution | A real-valued probability distribution with a continuous cumulative distribution function and zero probability at each individual value. | A uniform distribution on [0,1] assigns probability 0.2 to [0.3,0.5] and zero to {0.4}. |
| BernoulliDistribution | core | S: DiscreteProbabilityDistribution | The nature of a two-valued probability law assigning probability p to 1 and 1-p to 0, with 0 <= p <= 1. | A success indicator with p=0.3. |
| BinomialDistribution | core | S: DiscreteProbabilityDistribution | The nature of the count of successes in n independent Bernoulli trials with one fixed success probability p, including its parameters and probabilities. | The number of heads in ten independent fair coin tosses. |
| GeometricDistribution | advanced | S: DiscreteProbabilityDistribution | The nature of the number of independent Bernoulli trials up to and including the first success with fixed probability 0 < p <= 1. The support begins at one. | For p=1/2, the probability that the first success is on trial three is 1/8. |
| HypergeometricDistribution | core | S: DiscreteProbabilityDistribution | The nature of a success count in a uniformly chosen fixed-size sample without replacement from a finite population containing a fixed number of successes. | The number of red balls in three draws without replacement from five red and seven blue balls. |
| PoissonDistribution | advanced | S: DiscreteProbabilityDistribution | The nature of a count distribution with parameter lambda > 0 and probabilities exp(-lambda) lambda^k/k! for nonnegative integers k, with mean and variance lambda. | A model assigning mean three arrivals per interval to an arrival count. |
| DiscreteUniformDistribution | core | S: DiscreteProbabilityDistribution | The nature of a probability law assigning the same probability to every value in a specified nonempty finite set. | Choosing each of eight names with probability 1/8. |
| ContinuousUniformDistribution | core | S: ContinuousProbabilityDistribution | The nature of a distribution with constant density 1/(b-a) on a finite interval [a,b], where a < b, and zero density outside. | A uniform waiting time on [0,10] falls between two and five with probability 0.3. |
| NormalDistribution | core | S: ContinuousProbabilityDistribution | The nature of a real probability law with density exp(-(x-mu)^2/(2 sigma^2))/(sigma sqrt(2pi)), determined by its mean mu and positive standard deviation sigma. | A normal model with mean 100 and standard deviation 15; its standardized variable has mean zero and standard deviation one. |
| ExponentialDistribution | advanced | S: ContinuousProbabilityDistribution | The nature of a nonnegative waiting-time law with density lambda exp(-lambda x) for x >= 0 and rate lambda > 0, including its memoryless property. | With rate two per minute, the probability of waiting longer than one minute is exp(-2). |
| StudentTDistribution | advanced | S: ContinuousProbabilityDistribution | The nature of the law of Z/sqrt(U/nu), where Z is standard normal, U is independent chi-squared with nu > 0 degrees of freedom, and nu controls tail weight. | A normal-population mean statistic using estimated standard deviation has a t distribution with n-1 degrees of freedom. |
| ChiSquaredDistribution | advanced | S: ContinuousProbabilityDistribution | The nature of the gamma probability law with shape nu/2 and scale two for nu > 0 degrees of freedom, represented for integer nu by a sum of nu independent squared standard normal variables. | The sum of four independent squared standard normal variables has mean four and a chi-squared distribution with four degrees of freedom. |
| ProbabilityMassFunction | core | P: RandomVariableTheory | The function assigning each possible value of a discrete random variable its probability, with nonnegative values summing to one. | For the number of heads in two fair tosses, p(0)=1/4, p(1)=1/2, and p(2)=1/4. |
| ProbabilityDensityFunction | core | P: RandomVariableTheory | A nonnegative integrable function with total integral one that assigns probabilities to intervals by integration; its height is not a point probability. | A uniform density of two on [0,1/2] gives P(0 <= X <= 1/4)=1/2. |
| CumulativeDistributionFunction | core | P: RandomVariableTheory | The function F(x)=P(X <= x), recording cumulative probability through a real threshold. | For a fair die, F(3.5)=1/2. |
| JointDistribution | advanced | P: RandomVariableTheory | The probability law of a tuple of random variables, recording their combined values and dependence. | A table of the joint probabilities for two dice, with row and column totals giving their individual laws. |
| ConditionalDistribution | advanced | P: RandomVariableTheory | The probability distribution of a random quantity after conditioning on specified information, using probability ratios for positive-probability events or conditional densities where defined. | The distribution of the first die given that the sum of two dice is seven. |
| RandomVariableIndependence | core | P: RandomVariableTheory | The factorization of joint probabilities into marginal probabilities for every choice of measurable value sets and every finite subcollection of the specified random variables. | The outcomes of independently rolled dice; the dependent quantities X and X squared when X is uniform on [-1,1]. |
| RandomVariableMoments | core | P: RandomVariableTheory | Numerical summaries and identities describing the location, spread, and joint variation of probability laws. | Comparing the mean and variance of two payout distributions. |
| ExpectedValue | core | P: RandomVariableMoments | The probability-weighted mean of a random variable, formed by a sum or integral when its absolute expectation is finite. | A fair six-sided die has expected value 3.5, although no roll equals 3.5. |
| RandomVariableVariance | core | P: RandomVariableMoments | The expected squared deviation of a random variable from its mean when its second moment is finite. | A Bernoulli variable with p=0.5 has variance 0.25. |
| RandomVariableStandardDeviation | core | P: RandomVariableMoments | The nonnegative square root of finite variance, expressing probabilistic spread in the same units as the random variable. | A random variable with variance 9 square centimeters has standard deviation 3 centimeters. |
| Covariance | advanced | P: RandomVariableMoments | The expected product of two centered random variables with finite second moments, measuring their joint linear variation. | For Y=2X with Var(X)=3, Cov(X,Y)=6; X uniform on [-1,1] has Cov(X,X squared)=0 despite dependence. |
| ExpectationLinearity | core | P: RandomVariableMoments | The identity equating the expectation of a finite linear combination of integrable random variables to the same combination of their expectations, without requiring independence. | E(2X+3Y)=2E(X)+3E(Y), including when X and Y are dependent. |
| VarianceOfSum | core | P: RandomVariableMoments | The variance identity Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y) for finite second moments, reducing to a sum of variances when covariance is zero. | Independent variables of variances two and five have sum variance seven; Var(X+X)=4Var(X). |
| ProbabilityLimitTheorems | core | P: Probability | Bounds and convergence results describing fluctuations, repeated random trials, and distributional approximation. | Bounding the chance of a large deviation; explaining stabilization of sample averages. |
| MarkovInequality | advanced | P: ProbabilityLimitTheorems | The bound P(X >= a) <= E(X)/a for nonnegative X with finite expectation and a > 0. | A nonnegative waiting time with mean two minutes exceeds or equals ten minutes with probability at most 0.2. |
| ChebyshevInequality | core | P: ProbabilityLimitTheorems | The bound P(abs(X-mu) >= t) <= Var(X)/t squared for a random variable of finite variance and t > 0. | For variance four, a deviation of at least six from the mean has probability at most 1/9. |
| LawOfLargeNumbers | core | P: ProbabilityLimitTheorems | The convergence in probability of sample averages to the common mean for independent identically distributed random variables with finite absolute expectation. | The proportion of heads in independent fair tosses approaches 1/2 in probability as the number of tosses grows. |
| CentralLimitTheorem | advanced | P: ProbabilityLimitTheorems | The convergence in distribution of sqrt(n)(sample mean-mu)/sigma to the standard normal law for independent identically distributed variables with finite positive variance sigma squared. | Standardized averages of many independent uniform draws have approximately a standard normal distribution. |
| ProbabilityMethods | core | P: Probability | Methods for generating, approximating, and comparing outcomes within specified probability models. | Simulating repeated trials; approximating a binomial tail with a normal model. |
| SamplingSimulation | core | P: ProbabilityMethods | Generating random outcomes according to a specified probability model to examine its behavior over repeated simulated samples. | Simulating 10000 sets of ten fair tosses to estimate the probability of at least eight heads. |
| MonteCarloEstimation | core | P: ProbabilityMethods | Approximating a quantity by a sample average or frequency generated from a probability model, with sampling variation in the approximation. | Estimating pi from the fraction of uniform points in a unit square lying inside a quarter-circle. |
| NormalApproximation | core | P: ProbabilityMethods | Approximating a probability law by a normal distribution under justified parameter or sample-size conditions, including continuity correction for integer-valued events. | Approximating P(X <= 45) for X binomial with n=100 and p=0.5 by a normal probability through 45.5. |
| StochasticProcesses | advanced | P: Probability | Random quantities indexed by time or steps and the dependence governing their evolution. | A sequence of weather states; a random walk indexed by successive moves. |
| FiniteMarkovChain | advanced | P: StochasticProcesses | A process on a finite state set whose next-state distribution, given its history, depends only on the present state. | A two-state weather model whose tomorrow probabilities depend on today but not earlier weather. |
| MarkovTransitionMatrix | advanced | P: StochasticProcesses | The row-stochastic matrix P of a time-homogeneous finite Markov chain, with entry P(i,j) giving the probability of state j next given state i now. | P=[[0.8,0.2],[0.3,0.7]] gives a 0.2 chance of moving from the first state to the second. |
| MarkovStateDistribution | advanced | P: StochasticProcesses | The probability vector over states of a finite Markov chain and its propagation by pi_(n+1)=pi_n P for a time-homogeneous row transition matrix. | Starting at pi_0=[1,0] with P=[[0.8,0.2],[0.3,0.7]] gives pi_1=[0.8,0.2]. |
| StationaryDistribution | advanced | P: StochasticProcesses | A probability row vector pi satisfying pi P=pi for a finite Markov transition matrix, remaining unchanged under a step without itself guaranteeing convergence from other initial states. | For P=[[0.8,0.2],[0.3,0.7]], pi=[0.6,0.4] is stationary. |
| ProbabilityNotation | core | P: FormalMathematics | The conventions for denoting event probabilities, conditioning, probability distributions, and expectations of random quantities. | Reading P(A given B) as conditioning on B, X~B(10,0.5) as a distribution assertion, and E(X) as an expectation. |
| StatisticalData | core | P: Statistics | The units, variables, populations, samples, and variation that give statistical data their meaning. | Identifying the pupils, recorded heights, and sampled classes in a school height survey. |
| StatisticalPopulation | core | P: StatisticalData | The complete collection of units or possible observations to which a statistical investigation refers. | All pupils enrolled in a school on the survey date. |
| StatisticalSample | core | P: StatisticalData | A collection of selected units or observations used to describe the collected data or inform conclusions about a population, allowing repeated selections when the sampling design permits them. | The 80 pupils whose heights were recorded from a school of 900 pupils. |
| StatisticalVariable | core | P: StatisticalData | A characteristic recorded for each observational unit, with values that can differ between units. | Recording each pupil's travel mode and journey time. |
| StatisticalVariability | core | P: StatisticalData | Differences among observations and the changes in statistical summaries across repeated samples or measurements. | Pupils have different journey times; two random samples produce different mean times. |
| MeasurementScale | core | P: StatisticalData | The distinctions and comparisons supported by nominal, ordinal, interval, and ratio scales of statistical variables. | Travel mode is nominal, a satisfaction ranking is ordinal, Celsius temperature has an interval scale, and duration has a ratio scale. |
| PopulationParameter | core | P: StatisticalData | A numerical characteristic of a specified population or probability model, distinguished from a statistic calculated from observed sample data. | The proportion of all town residents who commute by bicycle. |
| SampleStatistic | core | P: StatisticalData | A numerical summary calculated from observed sample data without using unknown population parameters. | The proportion 18/60 of sampled residents who commute by bicycle. |
| StudyDesign | core | P: Statistics | The organization of data collection and comparison that determines which statistical conclusions the resulting evidence can support. | Choosing between a random household survey and a randomized comparison of two treatments. |
| StatisticalQuestion | core | P: StudyDesign | A question answered through data that anticipates variation among the relevant observations. | Asking how daily journey times vary among pupils in a school. |
| Census | core | P: StudyDesign | Data collection intended to include every unit in a specified finite population. | Recording the travel mode of every pupil enrolled in a class. |
| SamplingDesign | core | P: StudyDesign | A specified procedure for selecting observational units from a population, including how inclusion is determined and what inference it supports. | Selecting households from an address register before interviewing residents. |
| SimpleRandomSampling | core | S: SamplingDesign | Selection of a fixed-size sample without replacement so that every subset of that size has the same probability of selection. | Selecting 20 distinct pupil identifiers uniformly from a register of 200. |
| StratifiedSampling | advanced | S: SamplingDesign | Random selection of samples within defined, nonoverlapping population groups, with group sizes or selection probabilities accounted for when combining results. | Sampling pupils separately from each year group and weighting the estimates by year-group size. |
| ObservationalStudy | core | P: StudyDesign | Data collection without assigning the exposures or treatments whose relationships are being investigated. | Recording existing exercise habits and blood pressure without assigning exercise routines. |
| RandomizedExperiment | core | P: StudyDesign | A study that assigns treatments using a random mechanism to support comparison of their effects under the study conditions. | Randomly assigning volunteers to one of two exercise routines and comparing their outcomes. |
| SamplingBias | core | P: StudyDesign | Systematic distortion of population conclusions caused by the selection or participation process, distinct from random sampling variation. | An online-only transport survey underrepresents residents without internet access. |
| Confounding | core | P: StudyDesign | Mixing of an explanatory factor's relationship with an outcome with the influence of another related factor. | Age differs between two self-selected exercise groups and also affects their blood pressure. |
| DescriptiveStatistics | core | P: Statistics | Summaries of observed data through frequencies, location, dispersion, shape, and unusual values. | Describing journey times by their median, interquartile range, and skewness. |
| FrequencyDistribution | core | P: DescriptiveStatistics | The counts of observations assigned to distinct values, categories, or defined intervals, including joint and marginal counts for several variables. | Travel-mode counts of 12 walkers, 8 cyclists, and 10 bus passengers; row and column totals in a two-way table. |
| RelativeFrequency | core | P: DescriptiveStatistics | The fraction of a specified collection of observations belonging to a value, category, interval, or joint category. | 12 of 30 pupils walk to school, giving a relative frequency of 0.4. |
| ConditionalRelativeFrequency | core | S: RelativeFrequency | A relative frequency calculated within the observed subgroup satisfying a stated condition. | Among 20 pupils living within two kilometres, 12 walk, giving 12/20 = 0.6. |
| ArithmeticMean | core | P: DescriptiveStatistics | The sum of the values in a nonempty finite numerical data collection divided by the number of observations. | The mean of 2, 4, and 9 is 5. |
| WeightedArithmeticMean | core | P: DescriptiveStatistics | An average formed by dividing the sum of values multiplied by specified nonnegative weights by the positive total weight. | Scores 70 and 90 with weights 1 and 3 have weighted mean 85. |
| Quantile | core | P: DescriptiveStatistics | A value marking a specified cumulative fraction of a nonempty ordered data collection under a stated convention, with ties and interpolation accounted for. | For the values 1 through 9, the nearest-rank convention gives 9 as the 90th percentile. |
| Median | core | S: Quantile | The middle location of ordered numerical data, using the central value for an odd count and the arithmetic mean of the two central values for an even count. | The median of 2, 4, and 9 is 4; the median of 2, 4, 8, and 10 is 6. |
| Quartile | core | S: Quantile | A quantile at one quarter, one half, or three quarters of the cumulative distribution of ordered data, with a stated finite-data convention. | For the values 1 through 8, taking medians of the two halves gives lower quartile 2.5 and upper quartile 6.5. |
| Mode | core | P: DescriptiveStatistics | A value or category occurring with maximal frequency in observed data, allowing ties. | The modes of 1, 1, 2, 2, and 3 are 1 and 2. |
| DispersionMeasure | core | P: DescriptiveStatistics | A numerical summary of how widely the observed values in a data collection are spread. | Comparing two classes whose journey times have equal means but different spreads. |
| DataRange | core | S: DispersionMeasure | The difference between the greatest and least values in a nonempty finite numerical data collection. | The range of 2, 4, and 9 is 7. |
| InterquartileRange | core | S: DispersionMeasure | The difference between the upper and lower quartiles of numerical data, using the same quartile convention. | Lower and upper quartiles of 8 and 15 give an interquartile range of 7. |
| DataVariance | core | S: DispersionMeasure | The arithmetic mean of squared deviations of a nonempty finite numerical data collection from its arithmetic mean, with divisor equal to its number of observations. | The data 1 and 3 have mean 2 and variance ((1-2)^2 + (3-2)^2)/2 = 1. |
| DataStandardDeviation | core | S: DispersionMeasure | The nonnegative square root of the variance of a finite numerical data collection, expressed in the data's units. | The data 1 and 3 have variance 1 and standard deviation 1. |
| MeanAbsoluteDeviation | core | S: DispersionMeasure | The arithmetic mean of the absolute deviations of a nonempty finite collection of numerical observations from their arithmetic mean. | The data 1, 3, and 5 have mean absolute deviation (2 + 0 + 2)/3 = 4/3. |
| EmpiricalDistributionShape | core | P: DescriptiveStatistics | The overall arrangement of observed frequencies across values, including symmetry, skewness, peaks, gaps, and clusters. | Journey times concentrated near 15 minutes with a long tail toward longer journeys. |
| StatisticalOutlier | core | P: DescriptiveStatistics | An observation unusually separated from the data's overall pattern under a specified contextual or numerical criterion. | For 10, 10, 11, 11, 12, 12, and 60, the value 60 lies beyond the upper 1.5-interquartile-range fence when Q1=10 and Q3=12. |
| BivariateStatistics | core | P: Statistics | Descriptions and models of relationships between two observed variables, including the limits of interpretation. | Relating height to arm span or comparing travel modes between year groups. |
| ContingencyAssociation | core | P: BivariateStatistics | A relationship between categorical variables evidenced by differences in their conditional relative frequencies. | The observed cycling proportion is 0.6 in one year group and 0.2 in another. |
| PearsonCorrelation | core | P: BivariateStatistics | The normalized sum of paired centered cross-products measuring linear association between two numerical variables, each with positive empirical variance. | Paired data (1,2), (2,4), and (3,6) have correlation 1; a curved pattern can have correlation near zero. |
| RegressionModel | core | P: BivariateStatistics | A statistical relationship using explanatory values to model a numerical response while accounting for variation around fitted predictions. | Fitting a quadratic relationship between speed and stopping distance to measured pairs. |
| LeastSquaresFit | core | P: BivariateStatistics | Fitting a specified model to observed data by minimizing the sum of squared differences between observed and predicted responses. | Choosing a fitted line that minimizes the sum of squared vertical residuals. |
| RegressionResidual | core | P: BivariateStatistics | The difference between an observed response and the response predicted by a fitted model at the same explanatory value. | An observed stopping distance of 24 m and a predicted distance of 21 m give a residual of 3 m. |
| StatisticalExtrapolation | core | P: BivariateStatistics | Prediction from a fitted statistical model beyond the range or conditions represented by the observed data, with the model's applicability requiring justification. | Using a model fitted to journeys of 1 to 10 km to predict the cost of a 50 km journey. |
| AssociationAndCausation | core | P: BivariateStatistics | The distinction between an observed relationship and evidence that changing one factor produces a change in another, accounting for study design and possible confounding. | An association between ice-cream sales and swimming incidents does not establish that buying ice cream causes the incidents. |
| StatisticalEstimation | core | P: Statistics | Inference of population or model characteristics from observed data together with the uncertainty and assumptions of those estimates. | Estimating a population proportion from a random survey and reporting an interval. |
| SamplingDistribution | core | P: StatisticalEstimation | The probability distribution of a statistic across repeated samples generated by a specified sampling design and population model. | The distribution of sample proportions across repeated simple random samples of 100 residents. |
| ParameterEstimation | core | P: StatisticalEstimation | Using a statistic or specified data-based procedure to estimate an unknown population or model parameter. | Estimating the town's cycling proportion by 18/60 from a random sample. |
| UnbiasedVarianceEstimation | advanced | S: ParameterEstimation | Estimation of a population variance by the sum of squared deviations from the sample mean divided by n-1 for n independent identically distributed observations with finite variance and n > 1. | For sample values 1 and 3, the variance estimate is ((1-2)^2 + (3-2)^2)/(2-1) = 2. |
| StandardError | core | P: StatisticalEstimation | The standard deviation of a statistic's sampling distribution, or an estimate of that standard deviation under a specified sampling model. | For independent observations with standard deviation 12, the mean of 36 observations has standard error 2. |
| EstimatorBias | advanced | P: StatisticalEstimation | The difference between an estimator's expected value under a specified sampling model and the parameter being estimated. | Using the sample's maximum to estimate the upper endpoint of a continuous uniform population produces downward bias. |
| ConfidenceInterval | core | P: StatisticalEstimation | An interval computed from sample data by a procedure with a stated exact or approximate repeated-sampling coverage for a population parameter under specified assumptions. | A procedure whose intervals contain the fixed population proportion in 95% of repeated samples yields an interval [0.42, 0.50]. |
| MarginOfError | core | P: StatisticalEstimation | The distance from a point estimate to an endpoint of a specified uncertainty interval, linked to its confidence procedure and assumptions. | An estimate 0.46 with interval [0.42, 0.50] has a margin of error of 0.04 on each side. |
| HypothesisTesting | core | P: Statistics | Statistical procedures and decision principles for assessing claims against observed data under explicit sampling assumptions. | Testing a claimed coin probability and distinguishing false rejection from failure to detect a change. |
| StatisticalHypotheses | core | P: HypothesisTesting | Null and alternative claims about a population or data-generating model that specify the statistical comparison being made. | H0: p <= 0.5 versus H1: p > 0.5 for a coin's probability of heads. |
| HypothesisTest | core | P: HypothesisTesting | A data-based assessment of a null claim against a specified alternative using a reference model and a decision rule with stated exact or approximate control of false-rejection probability. | Rejecting a fair-coin model when a specified number of heads in 100 tosses falls in a preselected rejection region. |
| TestStatistic | core | P: HypothesisTesting | A sample summary chosen to measure departure from a null claim, with a reference distribution under that claim. | The number of heads in 100 tosses; the standardized difference between a sample mean and a hypothesized mean. |
| SignificanceLevel | core | P: HypothesisTesting | A prespecified upper bound on the probability of rejecting a true null hypothesis under the test's null model and assumptions. | Selecting a rejection region whose probability under H0 is at most 0.05. |
| PValue | core | P: HypothesisTesting | The probability, under a specified null model, of a test-statistic result at least as incompatible with that model as the observed result, using the test's stated ordering of outcomes. | An upper-tail coin test reports p=0.03 for obtaining at least as many heads as observed under the null probability. |
| TestingError | core | P: HypothesisTesting | An erroneous hypothesis-test decision, consisting of rejecting a true null hypothesis or failing to reject it when a specified alternative is true. | Rejecting a genuinely fair coin model; failing to reject fairness when a specified biased-coin alternative is true. |
| TypeOneError | core | S: TestingError | Rejection of a null hypothesis when that hypothesis is true. | Declaring evidence against a fair-coin model when the coin is fair. |
| TypeTwoError | core | S: TestingError | Failure to reject a null hypothesis when a specified alternative is true. | Failing to detect a coin whose probability of heads is 0.6 in a test against fairness. |
| TestPower | advanced | P: HypothesisTesting | The probability that a test rejects its null hypothesis for a specified alternative, equal to one minus the corresponding Type II error probability. | A test has power 0.8 against p=0.6 when it rejects fairness in 80% of repeated samples generated with p=0.6. |
| BinomialTest | core | S: HypothesisTest | A hypothesis test about a success probability using the binomial count model for independent Bernoulli trials with a common probability. | Testing H0: p <= 0.5 against p > 0.5 using the upper tail of 100 independent trials. |
| MeanTTest | advanced | S: HypothesisTest | A hypothesis test of a population mean or difference of means using a standardized mean statistic and a Student t reference distribution under the required model conditions or a justified approximation. | Testing a normal population mean with (sampleMean - mu0)/(sampleSD/sqrt(n)) and n-1 degrees of freedom. |
| ChiSquaredIndependenceTest | advanced | S: HypothesisTest | A hypothesis test of independence between categorical variables using observed and independence-expected cell counts, with a chi-squared approximation valid under the sampling and expected-count conditions. | Comparing observed travel-mode counts by year group with counts expected from row and column totals. |
| RandomizationTest | core | S: HypothesisTest | A hypothesis test that compares an observed statistic with its distribution under treatment reassignments or label permutations justified by the null hypothesis and study design. | Reassigning two treatment labels according to the original randomized design to assess an observed difference in mean outcomes. |
| Combinatorics | core | Root | The counting and structural relationships of finite selections, arrangements, and configurations. | Counting committees, arranging letters, or proving that two people share a birth month. |
| CountingPrinciples | core | P: Combinatorics | General relationships and methods for counting finite configurations and deriving existence from cardinality bounds. | Adding disjoint cases, correcting repeated counts, or comparing objects with available places. |
| CombinatorialEnumeration | core | P: Combinatorics | Counting rules and numerical quantities for finite selections and arrangements under specified order and repetition conditions. | Counting three-position codes, five-person committees, or arrangements of repeated letters. |
| ExhaustiveEnumeration | core | P: CountingPrinciples | Systematic listing of every admissible finite configuration exactly once, with a check that none is omitted. | Listing 00, 01, 10, and 11 as all length-two binary strings. |
| SumCountingPrinciple | core | P: CountingPrinciples | The equality between the size of a finite union of pairwise disjoint sets and the sum of their sizes. | Choosing one item from four distinct soups or three distinct salads gives 4 + 3 = 7 choices. |
| ProductCountingPrinciple | core | P: CountingPrinciples | The product of the choice counts at successive stages when each stage has the same number of admissible choices for every earlier admissible choice sequence. | Choosing a chair and then a different vice-chair from five people gives 5 * 4 = 20 assignments. |
| ComplementCounting | core | P: CountingPrinciples | Counting a subset by subtracting the number of excluded configurations from a known finite total. | Among 2^4 binary strings of length four, 2^4 - 1 = 15 contain at least one 1. |
| DivisionCountingPrinciple | core | P: CountingPrinciples | Counting distinct configurations by dividing a known count by a positive integer multiplicity shared by every configuration. | The 20 ordered pairs of different people from a group of five represent each two-person committee twice, giving 20/2 = 10 committees. |
| InclusionExclusionPrinciple | core | P: CountingPrinciples | The size of a union of finitely many finite sets as the alternating sum of individual-set and intersection sizes, correcting repeated counts. | If 8 students study French, 6 study German, and 3 study both, 8 + 6 - 3 = 11 study at least one. |
| BijectionCounting | advanced | P: CountingPrinciples | Determining the size of a finite set by establishing a one-to-one correspondence with another finite set whose size can be determined. | Matching each subset of {a, b, c} with its three-bit membership string gives 2^3 = 8 subsets. |
| DoubleCounting | advanced | P: CountingPrinciples | Establishing a cardinality relationship by counting the same finite collection in two different ways. | Counting each handshake at its two participants gives 5 * 4 = 2h, so h = 10 when five people all shake hands once. |
| PigeonholePrinciple | advanced | P: CountingPrinciples | The guarantee that assigning more than k*m objects to m places puts at least k+1 objects in some place, for positive integer m and nonnegative integer k. | Among 25 people, at least three share a birth month because 25 > 2 * 12. |
| OrderedSelectionCounting | core | P: CombinatorialEnumeration | Counting finite selections in which positions distinguish outcomes, subject to stated restrictions on repetition and available choices. | Treating AB and BA as different two-position codes and deciding whether AA is admissible. |
| OrderedSelectionWithRepetition | core | S: OrderedSelectionCounting | Counting length-k lists from n available distinct values when every value is available at every position, giving n^k for positive integer n and nonnegative integer k. | There are 10^3 = 1000 three-digit codes when leading zeros and repeated digits are allowed. |
| OrderedSelectionWithoutRepetition | core | S: OrderedSelectionCounting | Counting length-k lists of distinct elements from an n-element set, giving n!/(n-k)! for integers 0 <= k <= n. | Assigning first, second, and third places among seven competitors gives 7 * 6 * 5 = 210 outcomes. |
| PermutationCounting | core | S: OrderedSelectionWithoutRepetition | Counting linear arrangements of every member of an n-element set exactly once, giving n! for nonnegative integer n. | Four different books have 4! = 24 orders on a shelf. |
| CircularPermutationCounting | advanced | P: CombinatorialEnumeration | Counting circular arrangements of n distinct objects, identifying arrangements exactly when a rotation matches them, giving (n-1)! for positive integer n. | Five different people around an unnumbered round table have 4! = 24 seating orders when clockwise and anticlockwise orders are distinguished. |
| Factorial | core | P: ArithmeticOperations | The product of the integers from 1 through a nonnegative integer n, with the empty product 0! equal to 1. | 5! = 5 * 4 * 3 * 2 * 1 = 120; 0! = 1. |
| BinomialCoefficient | core | P: CombinatorialEnumeration | The number binom(n,k) of k-element subsets of an n-element set, equal to n!/(k!(n-k)!) for integers 0 <= k <= n. | binom(5,2) = 10 counts two-person committees from five people and length-five binary strings containing exactly two 1s. |
| MultinomialCoefficient | advanced | P: CombinatorialEnumeration | The number n!/(n_1!...n_r!) of partitions of an n-element set into labeled groups of prescribed nonnegative sizes n_1 through n_r summing to n, equivalently counting arrangements with those fixed multiplicities. | The letters of LETTER have 6!/(2!2!) = 180 distinct linear arrangements. |
| StarsAndBars | advanced | P: CombinatorialEnumeration | Counting nonnegative integer solutions of x_1 + ... + x_r = n by placing r-1 separators among n identical units, giving binom(n+r-1,r-1) for n >= 0 and r >= 1. | Allocating five identical tokens among three named boxes, allowing empty boxes, gives binom(7,2) = 21 allocations. |
| PascalIdentity | core | S: AlgebraicEquivalence | The recurrence binom(n+1,k) = binom(n,k-1) + binom(n,k) for integers n >= 1 and 1 <= k <= n, together with the boundary values binom(n,0) = binom(n,n) = 1. | binom(6,2) = binom(5,1) + binom(5,2) = 5 + 10 = 15. |
| BinomialCoefficientSymmetry | core | S: AlgebraicEquivalence | The identity binom(n,k) = binom(n,n-k) for integers 0 <= k <= n, relating the counts of selected and omitted elements. | binom(7,2) = binom(7,5) = 21. |
| SetMembership | core | P: SetTheory | The relationship between an object and a set containing that object as an element. | For A = {1, 3, 5}, 3 belongs to A and 2 does not. |
| SetInclusion | core | P: SetTheory | The relationship in which every element of one set is also an element of another, including equality and proper inclusion. | {1, 3} is a proper subset of {1, 3, 5}; the empty set is a subset of every set. |
| SetUnion | core | P: SetTheory | The set of elements belonging to at least one of the given sets. | {1, 2} union {2, 3} = {1, 2, 3}. |
| SetIntersection | core | P: SetTheory | The set of elements belonging to every one of the given sets. | {1, 2} intersection {2, 3} = {2}. |
| SetDifference | core | P: SetTheory | The set of elements belonging to a first set and not to a second set. | {1, 2, 3} minus {2, 4} = {1, 3}. |
| SetComplement | core | S: SetDifference | The difference between a specified universe and one of its subsets, containing exactly the universe's elements outside that subset. | Within U = {1, 2, 3, 4, 5, 6}, the complement of {2, 4, 6} is {1, 3, 5}. |
| SetDisjointness | core | P: SetTheory | The absence of shared elements between two sets, extended to a family by requiring every distinct pair to have empty intersection. | {1, 3, 5} and {2, 4, 6} are disjoint; {1, 2} and {2, 3} are not. |
| CartesianProduct | core | P: SetTheory | The set of ordered tuples formed by taking one element from each of a specified finite list of sets, with positions retaining the order of those sets. | {a, b} x {0, 1} = {(a,0), (a,1), (b,0), (b,1)}. |
| FiniteSetCardinality | core | P: SetTheory | The number of distinct elements in a finite set, independent of their order or repeated listing. | The set {a, a, b} has cardinality 2; the empty set has cardinality 0. |
| SetNotation | core | P: FormalMathematics | The conventions for expressing sets, their elements, membership, inclusion, and set operations using lists, set-builder descriptions, and symbols. | Interpreting 3 ∈ {1, 3, 5}, reading {x ∈ Z : x > 0}, and distinguishing element membership a ∈ A from subset inclusion A ⊆ B. |
| NumberTheoreticFunctions | core | P: NumberTheory | The study of numerical functions on positive integers through divisibility, coprimality, prime factorization, and relationships among their values. | Counting the positive divisors of 12; determining how many integers from 1 through 12 are coprime to 12. |

### Representation Scopes

| Identifier | Stage | Placement | Definition | Example |
| --- | --- | --- | --- | --- |
| Histogram | core | S: DataRepresentation | Numerical data grouped into adjacent intervals and represented by bar areas proportional to frequencies or relative frequencies, with height adjusted for unequal widths. | Equal-width height intervals with frequency bars; unequal-width intervals displayed using frequency density. |
| BoxPlot | core | S: DataRepresentation | Numerical data represented using a box spanning the lower and upper quartiles, a median mark, and whiskers and outlier marks under a stated convention. | A box from the first quartile 12 to the third quartile 20, with median 16. |
| ScatterPlot | core | S: DataRepresentation | Paired numerical observations represented as points whose coordinates give the two measured values. | One point per plant showing height against age. |
| TwoWayTable | core | S: DataTable | Data arranged by two categorical variables with cell entries recording counts or proportions for their joint categories. | Counts of bicycle and bus users separated by year group. |
| PieChart | core | S: DataRepresentation | A whole partitioned into circular sectors with angles and areas proportional to category shares. | A half-circle sector representing 50% of respondents. |
| TimeSeriesPlot | core | S: DataRepresentation | Observations plotted against ordered times, optionally joined to display temporal change. | Daily temperatures plotted against dates. |
| StemAndLeafPlot | core | S: DataRepresentation | Numerical observations arranged into shared leading-digit stems and trailing-digit leaves under a stated key. | The row 2 &#124; 1 4 8 representing 21, 24, and 28. |
| ProbabilityRepresentation | core | P: RepresentationalScope | Random outcomes, events, and their probabilities or distributions expressed through diagrams, tables, graphs, or symbolic forms. | A two-draw urn tree with branch probabilities; a table assigning probabilities to die outcomes. |
| ProbabilityTree | core | S: ProbabilityRepresentation | Successive random outcomes represented by a branching tree whose branches carry conditional or initial probabilities. | A two-draw urn tree with updated probabilities on the second draw. |
| AlgebraicRepresentation | core | P: RepresentationalScope | Algebraic quantities, expressions, constraints, and functions expressed through symbols, language, tables, diagrams, graphs, or physical models. | The relationship y = 2x + 1 expressed as a formula, a value table, a verbal rule, or a coordinate graph. |
| SymbolicAlgebraicRepresentation | core | S: AlgebraicRepresentation | Algebraic quantities, expressions, constraints, or functions expressed using mathematical symbols and notation. | 3x + 2; 2x + 3 = 11; f(x) = x^2. |
| VerbalAlgebraicRepresentation | core | S: AlgebraicRepresentation | Algebraic quantities, relationships, or rules expressed in spoken or written natural language. | Twice an unknown number plus three equals eleven; the output is one more than twice the input. |
| TabularAlgebraicRepresentation | core | S: AlgebraicRepresentation | Algebraic relations or functions represented by rows or columns of corresponding variable values. | A table for y = 2x + 1 pairing inputs 0, 1, and 2 with outputs 1, 3, and 5. |
| EqualityBalanceRepresentation | core | S: AlgebraicRepresentation | Equality of algebraic quantities or expressions represented by balanced opposing sides in a physical or depicted model. | Three identical unknown boxes and two unit weights balance eleven unit weights, representing 3x + 2 = 11. |
| AlgebraTiles | core | S: AlgebraicRepresentation | Algebraic expressions represented by physical or depicted tiles whose shapes and sign conventions encode constant and variable terms. | One x^2 tile, three x tiles, and two unit tiles arranged into a rectangle with sides x + 1 and x + 2. |
| GraphicalAlgebraicRepresentation | core | S: AlgebraicRepresentation | Algebraic relationships, functions, or solution sets represented by plotted points, curves, or regions on a number line or in a coordinate system. | The graph of y = x^2 used to compare function values; an open endpoint at 2 and a ray for x > 2; the shaded half-plane x + y <= 1 with its boundary included. |

### Existing annotation updates

| Identifier | Definition | Example |
| --- | --- | --- |
| Statistics | Collection, description, and analysis of data, including inference about populations or data-generating processes and the uncertainty of those conclusions. | Summarizing recorded journey times; estimating a population proportion from a random sample; assessing a randomized treatment comparison. |
| SetTheory | The mathematical study of sets, their elements, operations, and relationships. | Describing an event as a subset of possible outcomes; forming a Cartesian product of two sets. |

### Progression assertions

These edges express particular conceptual integrations or extensions, not automatic
label propagation or a universal teaching order; see [ONT-R3](../relations.md#ont-r3--state-the-conceptual-progression-precisely).

| Source | Relation | Target |
| --- | --- | --- |
| ClassicalProbability | integrates | FiniteSetCardinality |
| MultiplicationProbabilityRule | integrates | ConditionalProbability |
| TotalProbabilityTheorem | integrates | ConditionalProbability |
| BayesTheorem | integrates | ConditionalProbability |
| BinomialDistribution | integrates | BinomialCoefficient |
| BinomialDistribution | integrates | RepeatedIndependentTrials |
| HypergeometricDistribution | integrates | BinomialCoefficient |
| ProbabilityDensityFunction | integrates | DefiniteIntegral |
| RandomVariableStandardDeviation | integrates | RandomVariableVariance |
| ExpectationLinearity | integrates | ExpectedValue |
| VarianceOfSum | integrates | RandomVariableVariance |
| VarianceOfSum | integrates | Covariance |
| MarkovInequality | integrates | ExpectedValue |
| ChebyshevInequality | integrates | RandomVariableVariance |
| CentralLimitTheorem | integrates | NormalDistribution |
| MonteCarloEstimation | integrates | SamplingSimulation |
| MonteCarloEstimation | integrates | LawOfLargeNumbers |
| NormalApproximation | integrates | NormalDistribution |
| MarkovTransitionMatrix | integrates | ConditionalProbability |
| MarkovTransitionMatrix | integrates | MatrixStructure |
| MarkovStateDistribution | integrates | RowColumnProduct |
| MarkovStateDistribution | integrates | MarkovTransitionMatrix |
| StationaryDistribution | integrates | MarkovTransitionMatrix |
| InterquartileRange | integrates | Quartile |
| DataStandardDeviation | integrates | DataVariance |
| ContingencyAssociation | integrates | ConditionalRelativeFrequency |
| ContingencyAssociation | integrates | FrequencyDistribution |
| LeastSquaresFit | integrates | RegressionResidual |
| AssociationAndCausation | integrates | Confounding |
| SamplingDistribution | integrates | ProbabilityDistribution |
| SamplingDistribution | integrates | SampleStatistic |
| StandardError | integrates | SamplingDistribution |
| StandardError | integrates | RandomVariableStandardDeviation |
| EstimatorBias | integrates | ExpectedValue |
| EstimatorBias | integrates | ParameterEstimation |
| MarginOfError | integrates | ConfidenceInterval |
| BinomialTest | integrates | BinomialDistribution |
| MeanTTest | integrates | StudentTDistribution |
| ChiSquaredIndependenceTest | integrates | ChiSquaredDistribution |
| ChiSquaredIndependenceTest | integrates | ContingencyAssociation |
| ExhaustiveEnumeration | integrates | FiniteSetCardinality |
| SumCountingPrinciple | integrates | SetDisjointness |
| SumCountingPrinciple | integrates | FiniteSetCardinality |
| ProductCountingPrinciple | integrates | FiniteSetCardinality |
| ComplementCounting | integrates | SetComplement |
| ComplementCounting | integrates | FiniteSetCardinality |
| DivisionCountingPrinciple | integrates | FiniteSetCardinality |
| InclusionExclusionPrinciple | expands | SumCountingPrinciple |
| InclusionExclusionPrinciple | integrates | SetIntersection |
| BijectionCounting | integrates | FiniteSetCardinality |
| DoubleCounting | integrates | FiniteSetCardinality |
| PigeonholePrinciple | integrates | FiniteSetCardinality |
| OrderedSelectionWithRepetition | integrates | ProductCountingPrinciple |
| OrderedSelectionWithoutRepetition | integrates | ProductCountingPrinciple |
| PermutationCounting | integrates | Factorial |
| CircularPermutationCounting | integrates | DivisionCountingPrinciple |
| CircularPermutationCounting | integrates | PermutationCounting |
| BinomialCoefficient | integrates | Factorial |
| MultinomialCoefficient | expands | BinomialCoefficient |
| StarsAndBars | integrates | BinomialCoefficient |
| PascalIdentity | integrates | BinomialCoefficient |
| BinomialCoefficientSymmetry | integrates | BinomialCoefficient |

## Representative coverage and contrasting evidence

| Requirement or example | Supported concepts | Boundary or counterexample |
| --- | --- | --- |
| CCSS 6.SP: questions, distributions, center/spread | StatisticalQuestion, StatisticalVariability, FrequencyDistribution, ArithmeticMean, Median, InterquartileRange, MeanAbsoluteDeviation | A request for one person's recorded age need not be a statistical question anticipating variability. |
| CCSS 7.SP: sampling, probability and simulations | SamplingDesign, StatisticalSample, RelativeFrequency, ProbabilityModel, SamplingSimulation | Observed frequency is not an exact guarantee of the model probability. |
| CCSS 8.SP and HSS-ID: association, fitted rules and residuals | ContingencyAssociation, PearsonCorrelation, RegressionModel, RegressionResidual, LeastSquaresFit | A near-zero Pearson correlation need not rule out nonlinear dependence. |
| CCSS HSS-IC: surveys, experiments and inference | StudyDesign descendants, SamplingDistribution, ConfidenceInterval, RandomizationTest | Random treatment assignment is distinct from random selection of people from a population. |
| CCSS HSS-CP including (+): event rules and counting | Set concepts, ConditionalProbability, EventIndependence, AdditionProbabilityRule, MultiplicationProbabilityRule, combinatorial counting | Disjoint positive-probability events are not independent. |
| CCSS HSS-MD (+): expected outcomes and fair decisions | ExpectedValue with evidenced payoff quantities; DiscreteUniformDistribution with RandomExperiment and the appropriate Ability | Expected payoff is not a guaranteed payout; drawing lots does not necessarily involve simulation. |
| French terminale: sample-mean concentration | ChebyshevInequality, ExpectationLinearity, VarianceOfSum, RandomVariableIndependence, LawOfLargeNumbers | The mean-variance calculation supplies the sample-size factor; a duplicate concentration-law node is unnecessary. |
| German elevated level: density, normal law and testing | ProbabilityDensityFunction, CumulativeDistributionFunction, NormalDistribution, BinomialTest, SignificanceLevel, TestingError | A density value above one can be valid; probability comes from the integral. |
| Optional German enrichment | MeasurementScale, PearsonCorrelation, RegressionModel, MeanTTest, ChiSquaredIndependenceTest, PValue | These optional modules do not establish a universal German requirement. |
| French mathématiques expertes: finite Markov chains | FiniteMarkovChain, MarkovTransitionMatrix, MarkovStateDistribution, StationaryDistribution | A stationary vector does not guarantee convergence of an arbitrary starting distribution. |
| Advanced counting | BijectionCounting, DoubleCounting, PigeonholePrinciple, MultinomialCoefficient, StarsAndBars | CircularPermutationCounting identifies rotations but not reflections. |

## Adoption effects

Among retained existing identifiers, only **Statistics and SetTheory** change labeling eligibility: their first constituent
children make them organizers under [ONT-E7](../content-evidence.md#ont-e7--label-observable-descriptors-not-organizational-nodes).
Their identifiers remain, with concise definitions and examples. Structural ancestry of retained
existing identifiers is unchanged after mapping the renamed ArithmeticFunctions organizer to
NumberTheoreticFunctions. The schema and Ability source remain unchanged.
The user's merged NumericalIntegration relation refinement is preserved.
Within this draft, ProbabilityTree gains ProbabilityRepresentation as an inherited Scope;
its definition and direct-label eligibility are unchanged.
RandomVariable moves from RandomVariableTheory to ProbabilityFoundations, preserving its
definition, example and direct-label eligibility; both containing-family definitions clarify
the distinction between the foundational object and its distributions and properties.
Factorial moves from CombinatorialEnumeration to ArithmeticOperations, preserving its
definition, example, incoming progression links and direct-label eligibility. Functional
knowledge remains compositional. The draft uses the refined identifiers TypeOneError and
TypeTwoError for testing errors.

**GraphicalSolutionRepresentation is retired in favor of GraphicalAlgebraicRepresentation.**
The replacement broadens the meaning from displayed solution sets to graphical algebraic
relationships and functions, and specializes the new AlgebraicRepresentation Scope. The parent
and all six specializations are eligible direct labels. Existing uses of the old identifier can
map to the broader graphical context, preserving any separately evidenced SolutionSet,
RelationSatisfaction or solving claims. The new Scope alone does not establish those claims;
annotations relying on the old Scope to convey the solution-set role need review.

The retired IRI and generated client key are not retained as aliases. There were no incoming
authored ontology relations or direct uses of the old identifier in the inspected sibling
content repository's src/docs/.agents files. Current design and coverage references use the
replacement; consumer packages, external annotations and model vocabularies must account for
the identifier change when adopting the release.

The inspected sibling content repository contains direct Statistics labels in CCSS grades
1–5 and the statistical-graphs, measurement-data, measurement-extrema and
measurement-line-plot-problems generators, plus associated tests. Those uses need an
evidence-based migration before adopting a package containing this branch. No direct SetTheory
uses were found in its authored src/docs search. Existing released packages remain pinned;
this branch does not upgrade or regenerate the content dataset.

| Existing content | Migration direction to review |
| --- | --- |
| Categorical tables and bar/picture graphs | FrequencyDistribution, plus the evidenced arithmetic or collection concepts and existing representation Scopes. |
| Measurement line plots | FrequencyDistribution and relevant measurement/arithmetic concepts, retaining LinePlot. |
| Measurement extrema | Existing comparison/extremal knowledge as evidenced; DataRange only when the greatest-minus-least spread is actually involved. |
| Generic root labels in tests or fixtures | Replace according to the mathematical claim under test; do not mechanically assert every child. |
| GraphicalSolutionRepresentation in external annotations or client code | Use GraphicalAlgebraicRepresentation for the broader context; preserve or review separately evidenced solution-set and solving claims. |

## Verification and remaining work

Verification passed on 2026-10-21, including the representation and foundational-placement refinements:

- Both Turtle sources round-trip byte for byte through the editor's actual parser and serializer,
  including its alphabetical relation order.
- Independent source review confirms that all 177 introduced definitions, examples and relation sets
  match the design tables. The graph has 1,314 descriptors and 7,005 assertions, with zero
  structural, progression or eligibility findings.
- Comparison with the merged baseline accounts for 945 assertions on introduced identifiers,
  retirement of five assertions each for GraphicalSolutionRepresentation and ArithmeticFunctions,
  four incoming parent-reference replacements, two existing definition replacements and two
  added examples. Only Statistics and SetTheory change retained-identifier label eligibility;
  retained ancestry after rename mapping and the NumericalIntegration refinement are preserved.
- The full Docker gate passes: TypeScript compilation and client tests, ontology validation,
  validation of all 38 Markdown files, and npm package/browser checks; Python lint, strict typing,
  all 49 tests, and wheel/sdist consumer checks.

A passing build is not a curriculum completeness certificate.

The [remaining-school-foundations record](remaining-school-foundations-draft.md) records
spatial geometry, complex numbers, the separate GraphTheory root, logical foundations and conics
merged through PRs #76–80, and the two targeted number-theory results merged at `0af4aba`
through PR #81. These are separate from the probability merge. The
[school curriculum audit](coverage-audit-2026-10-21.md) now checks the resulting subject coverage
and distinguishes mathematical gaps from representation and digital-tool contexts.

Deferred beyond those proposals: full graph theory; abstract measure theory;
general stochastic-process theory; Bayesian inference;
ANOVA, multiple-regression inference, bootstrap families and detailed nonparametric methods.
Statistical report evaluation composes these Areas with existing evaluation Abilities and
evidence Scopes. A later standard-leaf audit should decide whether remaining tasks expose
additional independent knowledge rather than introducing a topic for each curriculum phrase.

## Research sources

University organization informs the subject boundaries; school programmes select the useful
range. Source coverage is paraphrased; definitions and examples above are independently authored.

- [Penn State STAT 414: Introduction to Probability Theory](https://online.stat.psu.edu/stat414/index): Subject organization, random variables, distributions, moments and limit results.
- [CCSS: Using Probability to Make Decisions](https://www.thecorestandards.org/Math/Content/HSS/MD/): Random variables, expected values, and decisions.
- [CCSS Grade 6 Statistics and Probability](https://www.thecorestandards.org/Math/Content/6/SP/): Statistical questions, variability, descriptive distribution summaries, median, mean, interquartile range and mean absolute deviation.
- [CCSS Interpreting Categorical and Quantitative Data](https://www.thecorestandards.org/Math/Content/HSS/ID/): Joint, marginal and conditional relative frequencies; empirical distributions; fitted functions; residuals, correlation and causal interpretation.
- [CCSS Making Inferences and Justifying Conclusions](https://www.thecorestandards.org/Math/Content/HSS/IC/): Sampling and study design; simulation-based estimation and comparison of randomized treatments.
- [Bavaria Gymnasium year 12 elevated mathematics](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/mathematik/regulaer): One-sided binomial significance testing and statistical decision errors.
- [Bavaria Gymnasium year 12 optional enrichment course](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/12/mathematik/vertieft): Measurement scales, regression/correlation and p-values with chi-squared independence testing or t-testing.
- [NIST Engineering Statistics Handbook: confidence intervals](https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm): Repeated-sampling interpretation of coverage and one/two-sided intervals.
- [NIST Engineering Statistics Handbook: confidence limits for the mean](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm): Mean estimation, standard error and Student t conditions.
- [French terminale mathematics programme](https://eduscol.education.gouv.fr/sites/default/files/document/spe246annexe1158907pdf-84159.pdf): Counting, Bernoulli/binomial models, random-variable sums, concentration and weak law of large numbers.
- [MIT Mathematics for Computer Science, Lecture 16: Counting](https://ocw.mit.edu/courses/6-1200j-mathematics-for-computer-science-spring-2024/mit6_1200j_s24_lec16.pdf): University-informed organization around sum, product and bijection principles; precise constant-stage-count condition for the generalized product rule.
- [MIT Mathematics for Computer Science, Basic Counting Notions](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/07bf26057bac1ee419e19006909bb9a2_MIT6_042JF10_rec15.pdf): Generalized pigeonhole principle and uniform-multiplicity division rule.
- [MIT Mathematics for Computer Science, course notes](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/93cad640cf3ed0b23ef70688f452d4d5_MIT6_042JF10_notes.pdf): Cardinality rules, repeated arrangements, inclusion-exclusion and combinatorial proofs; generating functions and infinite sets identified as later extensions.
- [MIT Probability and Random Variables, 2019 first midterm solutions](https://ocw.mit.edu/courses/18-600-probability-and-random-variables-fall-2019/043a5f241c41a11ebbae7a84acfa94d2_MIT18_600F19_mid1_2019_soln.pdf): Concrete stars-and-bars interpretation as allocation of identical objects among named recipients and nonnegative integer solutions.
- [French mathématiques expertes programme](https://eduscol.education.gouv.fr/sites/default/files/document/spe264annexe1158825pdf-84165.pdf): Finite Markov chains, transition matrices and stationary distributions; graph theory remains separate.
- [French official programme index and transition dates](https://eduscol.education.gouv.fr/5817/programmes-et-ressources-en-mathematiques-voie-gt): The 2026 terminale replacement applies from 2027–2028; the cited terminale programme applies to 2026–2027.
- [Bavaria Gymnasium year 13](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/13/mathematik): Continuous densities and normal models.
- [CCSS Conditional Probability and Rules of Probability](https://www.thecorestandards.org/Math/Content/HSS/CP/): Events, conditional probability, independence and finite counting.
