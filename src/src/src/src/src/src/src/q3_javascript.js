// Question 3 - String Manipulation
// Topic: Name Formatting Utility
//
// Task 1:
// Write a function called formatName(firstName, lastName) that accepts two strings
// and returns a formatted string in this format: "lastName, firstName"
// Example: formatName("John", "Smith") → "Smith, John"

// Helper: capitalises the first letter and lowercases the rest
function capitalize(s) {
    if (!s) {
        return "";
    }
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}


   // Task 1:
function formatName(firstName, lastName) {
    return capitalize(lastName) + ", " + capitalize(firstName);
}


// Task 2:
// Write a function called formatInitials(firstName, lastName) that returns the
// initials of the person as a string in uppercase.
// Example: formatInitials("john", "smith") → "J.S."
// Note: your function should handle inputs in any case (upper, lower, or mixed)
// and always produce properly capitalised output.


   // Task 2:
function formatInitials(firstName, lastName) {
    const f = capitalize(firstName).charAt(0);
    const l = capitalize(lastName).charAt(0);
    return f + "." + l + ".";
}


// Task 3:
// Call both functions with the following inputs and print each result:
//   formatName("Alice", "Tan")    → Expected: "Tan, Alice"
//   formatName("bob", "lim")      → Expected: "Lim, Bob"
//   formatInitials("Alice","Tan") → Expected: "A.T."
//   formatInitials("bob","lim")   → Expected: "B.L."

// Task 3:
console.log(formatName("Alice", "Tan"));       // Tan, Alice
console.log(formatName("bob", "lim"));         // Lim, Bob
console.log(formatInitials("Alice", "Tan"));   // A.T.
console.log(formatInitials("bob", "lim"));     // B.L.
