"use strict";
// *Day 23 Challenge: Start Coding!* 
//*Question 67:* Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
// This function adds a number and a string that represents a number
function add(number1, numberinString) {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberinString); //Number change string into number
}
console.log(add(4, "8")); // Shows 12
//-------------------------------------------------------------------------------------------------------------------------------------
//*Question 68:* Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
// multiplies two decimal numbers
function multiplyDecimals(num1, num2) {
    // use formula => math.round 
    return Math.round((num1 * num2) * 100) / 100; //Returns a supplied numeric expression rounded to the nearest integer.
}
console.log(multiplyDecimals(0.3, 0.25)); // Shows 0.08 
//-------------------------------------------------------------------------------------------------------------------------------------
//*Question 69:* Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(num1, num2) {
    // Calculates the quotient and remainder
    let quotient = Math.floor(num1 / num2); //Returns the greatest integer less than or equal to its numeric argument
    let remainder = num1 % num2;
    // Returns both in an object
    return { quotient, remainder };
}
// 4 divided 23
console.log(divideAndRemainder(4, 23)); // Shows { quotient: 0, remainder: 5 }
