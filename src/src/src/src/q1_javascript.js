// Question 1 - Functions and Conditionals
// Topic: Temperature Converter
//
// Task 1:
// Write a function called convertTemp that accepts two arguments:
//   - value: a numeric temperature value
//   - unit: a string, either "C" for Celsius or "F" for Fahrenheit
//
// The function should:
//   - Convert Celsius to Fahrenheit if unit is "C"  →  Formula: (value × 9/5) + 32
//   - Convert Fahrenheit to Celsius if unit is "F"  →  Formula: (value − 32) × 5/9
//   - Return -1 if unit is neither "C" nor "F"
//   - Round the result to 2 decimal places before returning

function convertTemp(value, unit) {
    let result;
    if (unit === "C") {
        result = (value * 9 / 5) + 32;
    } else if (unit === "F") {
        result = (value - 32) * 5 / 9;
    } else {
        return -1;
    }
    return Math.round(result * 100) / 100;
}



// Task 2:
// Call the function with the following inputs and print each result:
//   convertTemp(100, "C")      → Expected: 212.0
//   convertTemp(32, "F")       → Expected: 0.0
//   convertTemp(37, "C")       → Expected: 98.6
//   convertTemp("invalid","X") → Expected: -1

// Task 2:
console.log(convertTemp(100, "C"));         // 212
console.log(convertTemp(32, "F"));          // 0
console.log(convertTemp(37, "C"));          // 98.6
console.log(convertTemp("invalid", "X"));   // -1
