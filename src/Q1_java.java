// Question 1 - Functions and Conditionals
// Topic: Temperature Converter
//
// Task 1:
// Write a method called convertTemp that accepts two arguments:
//   - value: a numeric temperature value (double)
//   - unit: a String, either "C" for Celsius or "F" for Fahrenheit
//
// The method should:
//   - Convert Celsius to Fahrenheit if unit is "C"  →  Formula: (value × 9/5) + 32
//   - Convert Fahrenheit to Celsius if unit is "F"  →  Formula: (value − 32) × 5/9
//   - Return -1 if unit is neither "C" nor "F"
//   - Round the result to 2 decimal places before returning

public class Q1_java {

    public static double convertTemp(double value, String unit) {
        double result;

        if (unit.equals("C")) {
            result = (value * 9.0 / 5.0) + 32;
        } else if (unit.equals("F")) {
            result = (value - 32) * 5.0 / 9.0;
        } else {
            return -1;
        }

        // Round to 2 decimal places
        return Math.round(result * 100.0) / 100.0;
    }

    public static void main(String[] args) {
        System.out.println(convertTemp(100, "C"));  // 212.0
        System.out.println(convertTemp(32, "F"));   // 0.0
        System.out.println(convertTemp(37, "C"));   // 98.6
        System.out.println(convertTemp(0, "X"));    // -1.0
    }
}
