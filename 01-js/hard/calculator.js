/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
      this.result = 0; // Initialize result to 0
  }

  // Method to add a value to the result
  add(value) {
      this.result += value;
      return this.result;
  }

  // Method to subtract a value from the result
  subtract(value) {
      this.result -= value;
      return this.result;
  }

  // Method to multiply the result by a value
  multiply(value) {
      this.result *= value;
      return this.result;
  }

  // Method to divide the result by a value
  divide(value) {
      if (value !== 0) {
          this.result /= value;
          return this.result;
      } else {
        throw new Error("Cannot divide by zero. Please choose a non-zero divisor.");
      }
  }
  // Method to clear the result
  clear() {
    return this.result = 0;
  }
  // Method to get the current result
  getResult() {
    return this.result;
}

// Method to evaluate a string expression with multi-arithmetic operations
calculate(expression) {
    try {
        // Remove any extra spaces from the expression
        const cleanedExpression = expression.replace(/\s+/g, '');
        
        // Check if the expression contains division by zero
        if (cleanedExpression.includes('/0')) {
          throw new Error("Cannot divide by zero. Please choose a non-zero divisor.");
      }
        // Evaluate the expression using JavaScript's built-in eval function
        this.result = eval(cleanedExpression);
        return this.result;
    } catch (error) {
        throw new Error("Invalid expression. Please check your input.");
    }
}
}

// Example usage:
// const myCalculator = new Calculator();
// console.log("add " +myCalculator.add(5)); // 5
// console.log("sub " +myCalculator.subtract(2)); // 3
// console.log("multiply " +myCalculator.multiply(4)); // 12
// console.log("divide " +myCalculator.divide(3)); // 4
// console.log("Result = " + myCalculator.getResult());
// console.log("Clear "+myCalculator.clear());//0
// console.log("add " +myCalculator.add(8));//8
// console.log("Result = " + myCalculator.getResult());
// console.log("Clear "+myCalculator.clear());//0
// console.log("Evaluate 10 +   2 *    (   6 - (4 + 1) / 2) + 7 = " +myCalculator.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7"));



module.exports = Calculator;
