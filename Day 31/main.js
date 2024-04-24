"use strict";
// *Day 31 Challenge: Start Coding!* 
//*Question 91:* Create an array of your three favorite fruits and add a new fruit to the end of the array.
// Defines an array with three favorite fruits
let favoriteFruits = ["Apple", "Banana", "Strewberry"];
favoriteFruits.push("Mango"); // .push use add
console.log(favoriteFruits); // Outputs: ['Apple', 'Banana', 'Strewberry', 'Mango']
//--------------------------------------------------------------------------------------------------------------------------------------
//*Question 92:* Write a function to remove the last element from an array and return the removed element.
// This function removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop(); // Removes and returns the last element of the array
}
// Example: Removing the last fruit from the array
const personName = ["Hadiqa", "Wajiha", "Noor"];
console.log(removeLastElement(personName)); // Outputs: 'Noor'
console.log(personName); // Outputs: ['Hadiqa', 'Wajiha']
//*Question 93:* Find the index of "Banana" in an array of fruits and replace it with "Mango".
// This function finds "Banana" in the fruits array and replaces it with "Mango"
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1)
        fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}
// Example: Replacing "Banana" in the array
const fruits = ["Kivi", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); // Outputs: ['Kivi', 'Mango', 'Cherry']
// We're swapping "Banana" for "Mango" in our fruit list.
