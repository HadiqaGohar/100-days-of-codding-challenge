"use strict";
//*Question 55:* Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
// Starts with a list of numbers
let numbers = [1, 2, 3, 4, 5];
// Doubles each number => squaring 
let doubledNumbers = numbers.map(number => number * 2);
// Shows the new list of doubled numbers
console.log("Original Number", numbers);
console.log("Double Number", doubledNumbers); // Output: [2, 4, 6, 8, 10]
// This line takes each number, doubles it, and puts it in a new list.
//*Question 56:* Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// A mixed bag of items
let mixedArray = [4, "apple", 12, "banana", null, "Mango", false, "Grapes", true, "Cherry", undefined, "strewberry"];
// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");
// Shows the list of just words
console.log("Original list :", mixedArray);
console.log(stringsArray);
//*Question 57:* Find the Average Grade: Given a list of grades, calculate the average grade.
// A list of grades
let grades = [98, 54, 86, 78, 94, 64];
// Calculates the average grade
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length; // First, we add up all the grades. Then, we divide by how many grades there are to get the average.
// Shows result
console.log(averageGrade);
