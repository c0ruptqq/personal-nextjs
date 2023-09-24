---
title: 'A-Level Math Statistics'
date: '2023-08-27'
---

# Statistics

## Population and samples 

Population - a whole set of items 

**Population** mean is $\mu$ (mu) and a sample mean is $\bar{X}$ (x-bar). The data collected is called raw data/ A census is a way of collecting population data.

Sample - a selection of the population, a subset that is generated from sampling

**Sample** size needs to be large enough to validate the statistics as representative of the population. Individual units are known as **sampling units**. Sampling frames are a list of numbered sampling units.

| |Advantages | Disadvantaged |
|---------------- | --------------- | --------------- |
|Census |- It should give a completely accurate result | <ul><li>Time consuming and expensive</li><li>Cannot be used when testing process destroys the item</li> <li>Hard to process large quantity of data</li></ul> |
| Sample | <ul><li> Less time consuming and expensive tha a census</li> <li>Fewer people have to respond</li> <li>Less data to process than in a census</li></ul>|<ul><li>The data may not be as accurate</li> <li>The sample may not be large enough to give information about small sub-groups of the population</li></ul> |

### Types of data

Quantitative data - Numerical data

Qualitative data - Non-numerical data

Within quantitative data variables are either:
- Discrete - the variable can only take a specific value. Eg. shoe size
- Continuous - the variable can take any value in a given range, Eg. length, 16:06

Data is usually presented in a list, frequency table or a grouped frequency table. Groups within are called **classes**

Eg. 
| Weight (nearest kg)   | Frequency    |
|--------------- | --------------- |
| 30-34   | 4   |
| 35-39   | 5   |
| 40-45   | 8   |

"30-34"
> 30 is the lower **limit**

> 34 is the upper **limit**

If it was written as $29.5\le w < 34.5$

> 29.5 is the lower **boundary** 

> 34.5 is the upper **boundary**

To calculate:

- Midpoint: $\frac {lower + upper limit (or boundary)} {2}$
- Class width: upper - lower **boundary**

## Sampling

A sampling frame is a list of all the sampling units forming a population from which a sample is taken.

There are multiple ways to take a sample from a sampling frame:

- __Random__ (simple random sampling) - Each member of the sampling frame is numbered. The sample is take using a random number generator

- __Systematic__ - Each member of the sampling frame is numbered and in numerical order. Each member is selected at regular intervals, while the first member is selected using a random number generator.

- __Stratified__ - Population is divided into strata and a random sample proportional to the strata as a proportion of the population is taken.
$$\text{Number of stratum}=\frac {\text{Number in stratum * sample size}} {\text{number in population}}$$

- __Quota__ - Similar to stratified but the sample is not random. Each sub-group (strata) are filled by specifically selecting matching items.
- __Convenience__ (opportunity) - Sample is taken from the item available at the time. Similar to quota however to strata is preset.

### Advantages vs Disadvantages 
<img src="/img/math/1.jpg" alt="ball diagram" width="400"/> 

## Measure of Location

Population mean - $\mu$

Sample mean - $\bar{x}$

Mean from a list of data:

$$\bar{x}=\frac {\sum{x}}{n}$$

Mean from a frequency table:

$$\bar{x}=\frac {\sum{fx} } {\sum f}$$

Median - $Q_2$

$$Q_2=\frac {1} {2}(n+1)^{\text{th}}$$

If there is an even amount of numbers - Half of $\sum \text{two middle numbers}$

If there is an odd amount of numbers - middle value

### Interquartiles

Lower Quartile - $Q_1$

Median - $Q_2$

Upper Quartile - $Q_3$

$$Q_1 = \frac 1 4(n+1)^{th}$$
$$Q_2 = \frac 1 2(n+1)^{th}$$
$$Q_3 = \frac 3 4(n+1)^{th}$$

This data can also be represented in a box and whisker plot:

![d](/img/math/2.jpeg) 

When finding quartiles if the result is:
- .5 - take mean of either side values
- .25 - round down
- .75 - round up

If data is presented in a grouped frequency table *interpolation* can be used, the formula is:

$$Q_2 = b + \frac {(\frac {1}{2}n)-f} {f_c}* c$$
Where:
- $n$ - Number of data points
- $b$ - Lower boundary of the median group
- $f$ - Cumulative frequency of previous group
- $f_c$ - frequency of median group (class)
- $c$ - class width (calculated using boundaries)

The same formula is used for the upper and lower quartiles, just the fraction before n is modified to $\frac 1 4$ and $\frac 3 4$, respectively.
