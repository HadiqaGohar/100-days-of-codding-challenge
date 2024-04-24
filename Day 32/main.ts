// *Day 32 Challenge: Start Coding!* 

//*Question 94:* Use the .map() method to create a new array that contains the length of each word from an array of words.


// Defines an array with some words
const words: string[] = ["Generative", "AI", "Web3.0", "Metaverse"];
// Uses .map() to create a new array with the length of each word
const lengths: number[] = words.map(word => word.length);

console.log(lengths); // Outputs: [10, 2, 6, 9]


//-------------------------------------------------------------------------------------------------------------------------------------

//*Question 95:* Write a function that uses the .filter() method to return an array of numbers greater than 10.


// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}

// Example: Filtering an array of numbers
const number: number[] = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(number)); // Outputs: [15, 20, 25]

//--------------------------------------------------------------------------------------------------------------------------------------

//*Question 96:* Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.


// This function calculates the sum of all numbers in an array
function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Example: Calculating the sum of an array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers)); // Outputs: 15

