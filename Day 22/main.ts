//*Question 64:* Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".


// This function mixes a text and a number into one text
function combineStrAndNum(text: string, number: number): string {
    // Joins the text and number into a single text
    return text + number;    // string + number
}

//   text is "age" & 30 is "number"
console.log(combineStrAndNum("Age: ", 30)); // Shows "Age: 30"

//*Question 65:* Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.


// This function finds the leftover of dividing two numbers
function remainder(num1: number, num2: number): number {
    // num1 divided by num2
    return num1 % num2;
}

// 5 divided by 2
console.log(remainder(5, 2)); 
// returns remainder 1



//*Question 66:* Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.


// This function sees if both inputs are true
function checkBothTrue(val1: boolean, val2: boolean): boolean {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
}
// is both are true so && operators show true else they show false
console.log(checkBothTrue(true, false)); // Shows false