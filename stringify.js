// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to check if a string is palindrome
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to truncate a string to a specified length
function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}

// Function to count the occurrences of a substring in a string
function countOccurrences(str, subStr) {
  const regex = new RegExp(subStr, "g");
  return (str.match(regex) || []).length;
}

// Function to remove whitespace from both ends of a string
function trimString(str) {
  return str.trim();
}

// Function to check if a string contains only alphabetic characters
function isAlphabetic(str) {
  return /^[a-zA-Z]+$/.test(str);
}

// Function to check if a string contains only numeric characters
function isNumeric(str) {
  return /^[0-9]+$/.test(str);
}

// Function to check if a string contains only alphanumeric characters
function isAlphaNumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

// Function to convert a string to title case
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Function to remove all non-alphanumeric characters from a string
function removeNonAlphanumeric(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

// Function to pad a string with a specified character to a certain length
function padString(str, length, char = " ") {
  return str.padEnd(length, char);
}

// Exporting utility functions
module.exports = {
  capitalizeFirstLetter,
  isPalindrome,
  reverseString,
  truncateString,
  countOccurrences,
  trimString,
  isAlphabetic,
  isNumeric,
  isAlphaNumeric,
  toTitleCase,
  removeNonAlphanumeric,
  padString,
};
