function foo(a, b) {
  // Check if both inputs are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    // Handle non-number inputs appropriately. For example:
    console.error("Error: Inputs must be numbers");
    return null; //or throw an error
  }
}

console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // Error: Inputs must be numbers
console.log(foo(1, {})); // Error: Inputs must be numbers