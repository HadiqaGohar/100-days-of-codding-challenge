//*Day 34 Challenge: Start Coding!* 

//*Question 100:* Use the JavaScript Math object to find the square root of 144.


// Finds the square root of 144 using Math.sqrt()
const squareRoot: number = Math.sqrt(144);

console.log(squareRoot); // Outputs: 12

//------------------------------------------------------------------------------------------------------------------

//*Question 101:* Generate a random integer between 1 and 10.


// Generates a random integer between 1 and 10
function genRandomInt(): number {
    // math.floor => Returns the greatest integer less than or equal to its numeric argument.
    // math.random => Returns a pseudorandom number between 0 and 1.
    return Math.floor(Math.random() * 10) + 1;
}

console.log(genRandomInt()); // Outputs a random integer between 1 and 10

//------------------------------------------------------------------------------------------------------------------

//*Question 102:* Calculate and log the absolute difference between the number -5 and 5.

// Calculates the absolute difference between -5 and 5
const absDifference: number = Math.abs(-5 - 5);

console.log(absDifference); // Outputs: 10

