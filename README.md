# JavaScript Loose Typing Bug
This repository demonstrates a common issue in JavaScript related to loose typing and the unexpected behavior of the + operator when used with different data types.

## Bug Description
JavaScript's dynamic typing system allows for flexibility but can also lead to unexpected results. The + operator, when used with a combination of numbers and strings or objects, performs string concatenation instead of numerical addition. This can cause errors that are difficult to debug, especially in larger codebases.

## Reproduction
The `bug.js` file contains a function `foo` that adds two parameters. The function demonstrates the unexpected behavior when adding numbers and strings or objects using the + operator.

## Solution
The `bugSolution.js` file provides a solution to mitigate this problem by explicitly checking data types before performing addition.  Type checking ensures that the + operator is used correctly for numerical addition.

## How to Run
1. Clone the repository.
2. Open a terminal and navigate to the directory.
3. Run the following command in the terminal: node bug.js and node bugSolution.js

This will execute the buggy code and the corrected code, demonstrating the difference in output.