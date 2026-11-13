# Question 3 - String Manipulation
# Topic: Name Formatting Utility
#
# Task 1:
# Write a function called formatName(firstName, lastName) that accepts two strings
# and returns a formatted string in this format: "lastName, firstName"
# Example: formatName("John", "Smith") → "Smith, John"

def formatName(firstName, lastName):
    # Add your code here
    return f"{lastName}, {firstName}"
    pass


@@ -19,7 +19,7 @@
# and always produce properly capitalised output.

def formatInitials(firstName, lastName):
    # Add your code here
    return f"{firstName.strip()[0].upper()}.{lastName.strip()[0].upper()}."
    pass


@@ -30,4 +30,7 @@
#   formatInitials("Alice","Tan") → Expected: "A.T."
#   formatInitials("bob","lim")   → Expected: "B.L."

# Add your code here
print(formatName("Alice", "Tan"))
print(formatName("bob", "lim"))
print(formatInitials("Alice", "Tan"))
print(formatInitials("bob", "lim"))
