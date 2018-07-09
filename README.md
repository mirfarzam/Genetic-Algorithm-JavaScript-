# Genetic-Algorithm-JavaScript-
Simple script for implementing Genetic Algorithm

Nowadays, with great machine learning tools I not except that anybody tries to making some generic algorithm. But I tried to code generic algorithm in JS.

First of all, we should select number of chromosome for crossover or mutation changes with selection function which is implement of Tournoment selection algorithem .

selection needs fitness function which is Ackley function here.

after selecting a group of chromosome we apply changes to them . first change which we apply is Crossover .crossover function has 2 input praments, first input is selection group and the second is number of times that we want crossover does function. The breakpoit here is random number.

after Crossover we have Mutation. mutation function also we have 2 parameter inputs, first is output of crossover and the second is number of times that we want mutation does function.

the new population is marged of first selected group before crossover and outputs of mutation.

for showing the enhance of generation we show totall fitness that is sumation of fitness od all chromosome in population. each new generation should (but not always) has lower totall fitness from last generation 
