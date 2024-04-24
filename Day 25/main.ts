//*Day 25 Challenge: Start Coding!* 

//*Question 73:* Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.


// This function shows how to assign and update variable values
function updateVariable() {
    let age : number = 17; // Initially value 17
    console.log("Initial value:", age); // Logs the initial value

    age = 18; // Updated value  18
    console.log("Updated value:", age); // Logs the updated value
}

updateVariable();    // We assign a value to a variable and then update it,

//--------------------------------------------------------------------------------------------------------------------------------------

//*Question 74:* Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// This function swaps the values of two variables
function swapValues() {
    let a = 5, b = 10; // Initially, a is 5 and b is 10
    console.log("Before swap: a =", a, "b =", b);

    let c = a; // Temporarily stores the value of a
    a = b; // Sets a to b's value
    b = c; // Sets b to a's original value stored in temp

    console.log("After swap: a =", a, "b =", b); // Logs the swapped values
}

swapValues();

//--------------------------------------------------------------------------------------------------------------------------------------

//*Question 75:* Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.


// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 4; // Starts with x equal to 4
    console.log("Initial x:", x);

    x += 1; // Adds 1 to x
    console.log("After addition:", x); // Shows x after addition

    x -= 2; // Subtracts 2 from x
    console.log("After subtraction:", x); // Shows x after subtraction

    x *= 3; // Multiplies x by 3
    console.log("After multiplication:", x); // Shows x after multiplication

    x /= 4; // Divides x by 4
    console.log("After division:", x); // Shows x after division
}

useCompoundOperators();
