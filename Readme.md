# Node.js Stringify

This repository provides a collection of common utility functions for string manipulation in Node.js. These functions are designed to simplify common tasks such as capitalization, palindrome checking, string reversal, and more.

## Usage

To use these utility functions in your Node.js project, you can directly download the `stringify.js` file from this repository and include it in your project. Then, require it where needed in your code.

### Download

You can download the `stringify.js` file from this repository [here](link-to-file).

### Example

Once you have added `stringify.js` to your project, you can import the `stringify` module and use any of the provided utility functions. Here's an example of how to use them:

```javascript
// Importing the stringify module
const stringify = require("./stringify");

// Example usage
const str = "Hello, World!";

console.log("Original String:", str); //Hello World!
console.log("Capitalized First Letter:", stringify.capitalizeFirstLetter(str)); // Output: Hello, World!
console.log(
  "Is Palindrome?:",
  stringify.isPalindrome("A man, a plan, a canal, Panama")
); // Output: true
console.log("Reversed String:", stringify.reverseString(str)); // Output: !dlroW ,olleH
console.log("Truncated String:", stringify.truncateString(str, 5)); // Output: Hello...
console.log('Occurrences of "l":', stringify.countOccurrences(str, "l")); // Output: 3
console.log("Trimmed String:", stringify.trimString("   Hello, World!   ")); // Output: Hello, World!
console.log("Is Alphabetic?:", stringify.isAlphabetic("Hello")); // Output: true
console.log("Is Numeric?:", stringify.isNumeric("123")); // Output: true
console.log("Is Alphanumeric?:", stringify.isAlphaNumeric("Hello123")); // Output: true
console.log("Title Case:", stringify.toTitleCase("hello world")); // Output: Hello World
console.log(
  "Remove Non-Alphanumeric:",
  stringify.removeNonAlphanumeric("Hello, World!")
); // Output: HelloWorld
console.log("Padded String:", stringify.padString("Hello", 10, "*")); // Output: Hello*****
```

## Functions

- `capitalizeFirstLetter(str)`: Capitalizes the first letter of a string.
- `isPalindrome(str)`: Checks if a string is a palindrome.
- `reverseString(str)`: Reverses a string.
- `truncateString(str, maxLength)`: Truncates a string to a specified length.
- `countOccurrences(str, subStr)`: Counts the occurrences of a substring in a string.
- `trimString(str)`: Removes whitespace from both ends of a string.
- `isAlphabetic(str)`: Checks if a string contains only alphabetic characters.
- `isNumeric(str)`: Checks if a string contains only numeric characters.
- `isAlphaNumeric(str)`: Checks if a string contains only alphanumeric characters.
- `toTitleCase(str)`: Converts a string to title case.
- `removeNonAlphanumeric(str)`: Removes all non-alphanumeric characters from a string.
- `padString(str, length, char)`: Pads a string with a specified character to a certain length.

## Contributing

Contributions are welcome! If you have any ideas for additional utility functions or improvements to existing ones, feel free to open an issue or submit a pull request.
