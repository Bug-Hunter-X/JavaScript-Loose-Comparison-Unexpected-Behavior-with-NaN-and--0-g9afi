# JavaScript Loose Comparison Unexpected Behavior with NaN and -0

This repository demonstrates an uncommon bug in JavaScript related to loose comparison (==) with NaN (Not a Number) and -0 (negative zero).

## The Bug

JavaScript's loose comparison operator (==) does not always behave as expected, particularly with NaN and -0.  The following code shows this unexpected behavior:

* `NaN == NaN` evaluates to `false` (NaN is never equal to itself, even NaN).
* `0 == -0` evaluates to `true` (-0 is considered equal to 0).

This behavior can lead to unexpected results in programs that rely on loose comparison for equality checks.

## Solution

To avoid this issue, use strict equality (===) instead of loose equality (==) when comparing values, including NaN and -0.  Strict equality checks for both value and type.  Additionally, it is often advisable to use a dedicated function to check for NaN, such as `Number.isNaN()`, because loose comparisons cause problems in this regard. 

## How to run the code

1. Clone this repository
2. Open `bug.js` and `bugSolution.js` in a code editor.
3. Run `bug.js` in a JavaScript runtime environment (e.g., Node.js, browser's console) to observe the unexpected behavior. 
4. Run `bugSolution.js` to see the corrected behavior using strict equality and Number.isNaN().