"use strict";
// *Day 36 Challenge: Start Coding!* 🚀
//*Question 106:* Determine if a given year is a leap year using comparison operators.
//*Explain & TIP:* A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.
function isLeapYear(year) {
    //               0.04   &&   1                      4
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024));
console.log(isLeapYear(1947));
// *Question 107:* Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
// *Explain & TIP:* Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.
function divisible(numbers) {
    return numbers % 2 === 0 && numbers % 3 === 0;
}
console.log(divisible(6)); //true
console.log(divisible(15)); //false
// *Question 108:* Compare two strings to check if they are identical, ignoring case sensitivity.
// *Explain & TIP:* To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.
function compTwostring(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compTwostring("hello", "HELLO"));
console.log(compTwostring("world", "World"));
console.log(compTwostring("helloworld", "helloworlds"));
