"use strict";
//*Day 30 Challenge: Start Coding!* 
//*Question 88:* Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
// This function rounds a decimal number to the nearest whole number
function roundToNearestInteger(num) {
    return Math.round(num); // Rounds the number
}
// Example: Rounding a decimal
console.log(roundToNearestInteger(5.9)); // Outputs: 6
console.log(roundToNearestInteger(2.3)); // Outputs: 2
//-------------------------------------------------------------------------------------------------------------------------------------
//*Question 89:* Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
// This function changes a string into a number
function convertStringToNumber(str) {
    return parseFloat(str); // Converts the string to a number
}
// Example: Turning a numeric string into number
console.log(convertStringToNumber("12")); // Outputs: 12
console.log(convertStringToNumber("71.3")); // Outputs: 71.3
//-------------------------------------------------------------------------------------------------------------------------------------
//*Question 90:* Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
// This function checks if a value is Not a Number (NaN)
function isValueNaN(value) {
    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}
// Examples: Checking different values
console.log(isValueNaN("Pakistan")); // Outputs: true, because "Pakistan" isn't a number
console.log(isValueNaN(1947)); // Outputs: false, because 1947 is a number
