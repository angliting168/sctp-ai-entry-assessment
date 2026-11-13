// Question 3 - String Manipulation
// Topic: Name Formatting Utility
//
// Task 1:
// Write a method called formatName(firstName, lastName) that accepts two Strings
// and returns a formatted String in this format: "lastName, firstName"
// Example: formatName("John", "Smith") → "Smith, John"
//
// Task 2:
// Write a method called formatInitials(firstName, lastName) that returns the
// initials of the person as a String in uppercase.
// Example: formatInitials("john", "smith") → "J.S."
// Note: your method should handle inputs in any case (upper, lower, or mixed)
// and always produce properly capitalised output.

public class Q3_java {

    private static String capitalize(String s) {
        if (s == null || s.isEmpty()) {
            return "";
        }
        return s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase();
    }

    public static String formatName(String firstName, String lastName) {
        return capitalize(lastName) + ", " + capitalize(firstName);
    }


     public static String formatInitials(String firstName, String lastName) {
        String first = capitalize(firstName);
        String last = capitalize(lastName);
        String f = first.isEmpty() ? "" : first.substring(0, 1);
        String l = last.isEmpty() ? "" : last.substring(0, 1);
        return f + "." + l + ".";
    }

   public static void main(String[] args) {
        // Task 3:
        System.out.println(formatName("Alice", "Tan"));       // Tan, Alice
        System.out.println(formatName("bob", "lim"));         // Lim, Bob
        System.out.println(formatInitials("Alice", "Tan"));   // A.T.
        System.out.println(formatInitials("bob", "lim"));     // B.L.
    }
}
