---
title: 'A-Level Physics Calculations'
date: '2023-08-27'
---

# Measurements and errors

### 1.1 SI units and prefixes

SI (international system) is a common unit system that is used across the globe. The SI unit system has 7 fundamental (base) units. All other units are derived.

| Quantity    | SI units    | SI symbol    |
|---------------- | --------------- | --------------- |
| Mass    | Kilogram    | Kg    |
| Length    | Meters    | m    |
| Time    | Seconds| s     |
| Current    | Ampere | A     |
| Amount of substance    | Mole | mol     |
| Absolute temp | Kelvin | K     |
| Luminous Intensity| Candella | Cal     |

Examples:
1) Express newtons in fundamental units
   - F= m x a 
   - units: N = kg x m/s^2 =
   - = kg x ms^-2 <- Exponent form needed for full marks
2) Joules:
   - 123

### Estimation and power of ten

Estimation is a technique that is used to quickly find numerical solutions, questions using estimation are called **fermi** questions 

Estimation is often used for questions that depend on the process.

Only powers of ten are used Eg. $10^2, 10^3$

| Prefix | Abbreviation | Value      |
| ------ | ------------ | ---------- |
| peta   | P            | $10^{15}$  |
| tera   | T            | $10^{12}$  |
| giga   | G            | $10^{9}$   |
| mega   | M            | $10^{6}$   |
| kilo   | k            | $10^{3}$   |
| hecto  | h            | $10^{2}$   |
| deca   | da           | $10^{1}$   |
| deci   | d            | $10^{-1}$  |
| centi  | c            | $10^{-2}$  |
| milli  | m            | $10^{-3}$  |
| micro  | $\mu$       | $10^{-6}$  |
| nano   | n            | $10^{-9}$  |
| pico   | p            | $10^{-12}$ |
| femto  | f            | $10^{-15}$ |

## Limitations of Physical Measurements

Errors are unavoidable. They can be divided into two types:
- random
- Systematic

A random error is one that varies and is likely to be positive or negative (two-sided error)

A systematic error is one which is constant throughout a set of readings (usually one-sided)

To be precise - to be consistent
To be accurate - be close to the true vale


## Uncertainty

The uncertainty on repeated readings can be calculated using $\pm \frac {\text{range}} {2}$

A value should be presented as $\text{mean} \pm \text{absolute uncertainty}$ or $\text{mean} \pm \text{relative uncertainty}$

For analogue scales uncertainty is divided by 2. For digital it is not.

### Addition/subtraction

$(a+b)\pm(\Delta a + \Delta b)$

When adding / subtracting quantities: add the **absolute** uncertainties together

### Multiplication/division

$(a*b)\pm((\Delta a/a + \Delta b/b) * 100)$

When multiplying quantities, add the **percentage** uncertainties

### Raising to a power

$a^x \pm (x * (\Delta a/a)*100%)$

When raising to a power, multiply the exponent value by the percentage uncertainty

# Electricity

### Revision 

In a circuit:

<img src="/img/phys/10.png" alt="" width="400"/>

__Ammeter__
- Ideally has zero resistance
- Measures amps (A)

__Voltmeter__
- Ideally has infinite resistance
- Measures potential difference (V)

__Definitions__
- Current (I) - rate of flow of charge
$$\text{charge}=\frac {\Delta Q} {\Delta T}=\frac {\text{coulombs (C)}} {\text{seconds (S)}}$$

- Charge of an electron - $1.6x10^{-19}C$
- Potential difference (V)
$$V=\frac W Q=JC^{-1}$$
Where "W" is work done

Eg. Electrical energy (Joules)

$$W=IV\Delta{t}$$

- Power - rate at which work is done 

Eg. Electrical power (Watts)

$$P=IV$$

$$P=\frac {W}{\Delta T}=\frac{IV\Delta{T}}{\Delta{T}}=IV$$

- Electrical resistance (R)

$$R=\frac{V}{I}$$
Where R is in ohms ($\Omega$), the above equation is also know as Ohm's Law


A standard variable resistor can be replaced by a *potentiometer*:

![potentiometer](/img/phys/13.png) 

A potentiometer is used to vary potential difference across a component, it a greater range of voltage across a component than a variable resistor.

A diode is a type of an electronic valve. It allows current to flow in 1 direction around a circuit. A diode is a semiconductor.

![diode](/img/phys/16.png) 

### I/V graphs

In an I/V graph if the line is straight and passes through (0,0) then the relationship is linear and proportional. Below are I/V graph of three components:
![graphs](/img/phys/15.png) 

In a bulb the gradient (resistance R) increases as bulb heats up. As it heats up, atoms vibrate with greater KE, thus electrons collided with them with increasing frequency, thus flow decreases and R increases.

In a diode when the gradient in negative (on/below the X axis) the diodes resistance is infinite. To begin to conduct it needs to reach a threshold voltage after which the gradient increases (as seen in the graph).

### Series and parallel circuits

$\xi$ is a symbol used to symbolise the voltage across a cell.

emF - electro-motive-force - energy per charge flowing through the cell of a battery.

In *series*:
- $R_\text{total} = R_1 + R_2 + ... + R_n$
- Current is the same everywhere
- Potential difference is shared (split) across the circuit

In *parallel*:
- $\frac {1} {R_{\text{total}}} = \frac {1} {R_1} + \frac {1} {R_n}$
- Current is shared (split)
- Potential difference is the same across the circuit
