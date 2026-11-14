# Question 3 - String Manipulation
# Topic: Name Formatting Utility
#
# Task 1:
# Write a function called formatName(firstName, lastName) that accepts two strings
# and returns a formatted string in this format: "lastName, firstName"
# Example: formatName("John", "Smith") → "Smith, John"

# Helper: capitalises the first letter and lowercases the rest
def capitalise(s):
    if not s:
        return ""
    return s[0].upper() + s[1:].lower()


# Task 1:
def formatName(firstName, lastName):
    return capitalise(lastName) + ", " + capitalise(firstName)


# Task 2:
# Write a function called formatInitials(firstName, lastName) that returns the
# initials of the person as a string in uppercase.
# Example: formatInitials("john", "smith") → "J.S."
# Note: your function should handle inputs in any case (upper, lower, or mixed)
# and always produce properly capitalised output.

# Task 2:
def formatInitials(firstName, lastName):
    first = capitalise(firstName)
    last = capitalise(lastName)
    if first == "" or last == "":
        return ""
    return first[0] + "." + last[0] + "."



# Task 3:
# Call both functions with the following inputs and print each result:
#   formatName("Alice", "Tan")  → Expected: "Tan, Alice"
#   formatName("bob", "lim")    → Expected: "Lim, Bob"
#   formatInitials("Alice","Tan") → Expected: "A.T."
#   formatInitials("bob","lim")   → Expected: "B.L."

# Task 3:
print(formatName("Alice", "Tan"))       # Tan, Alice
print(formatName("bob", "lim"))         # Lim, Bob
print(formatInitials("Alice", "Tan"))   # A.T.
print(formatInitials("bob", "lim"))     # B.L.
