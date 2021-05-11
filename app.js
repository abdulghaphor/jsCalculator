// Create a calculator function that takes three parameters.
// The first and second parameters are integers (103, 4, 5663, -193, 0)
// The third parameter is a string that is a mathematical operation ("+", "-", "*", "/")
// Validate the parameters, then return the result of the operation.
// if there is an error, return a sentense describing the error that starts with "error:"
// example: error: The first parameter is not an integer.
// use yarn test, to check for the validity of your code.
// You can also use "yarn app" to check your code
// HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
// HINT: https://www.w3schools.com/jsref/jsref_includes_array.asp
// HINT: https://javascript.info/switch

// REMEMBER THERE IS NO RIGHT WAY OF DOING THINGS. USE YOUR IMAGINATION
// TO DO THIS ASSIGNMENT.

function calculator(firstNumber, secondNumber, operation) {
  const operationsArray = ["+", "-", "*", "/"];
  // start here

  if (Number.isInteger(firstNumber) !== true) {
    // the return function in this case is used to stop
    // the function from running till the end
    return "error: first parameter is not an integer";
  }
  // adding an exclamation point infront of your condition in
  // an if statement checks for falsy conditions
  if (!Number.isInteger(secondNumber)) {
    return "error: second parameter is not an integer";
  }

  // matching with an array yeilds a bonus.
  // if (["+","-","*","/"].includes(operation))

  if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/"
  ) {
    return "error: not a valid operation";
  }

  // using switch yields a bonus.
  if (operation === "+") {
    let result = firstNumber + secondNumber;
    return result;
  }

  if (operation === "-") {
    // You can immediately return the value without the need
    // to create a variable then store the value in
    return firstNumber - secondNumber;
  }

  if (operation === "*") {
    return firstNumber * secondNumber;
  }

  if (operation === "/") {
    return firstNumber / secondNumber;
  }
}

// DO NOT TOUCH
console.log(calculator(1, 5, "*"));
module.exports = calculator;
