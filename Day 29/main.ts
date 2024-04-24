// *Day 29 Challenge: Start Coding!* 

//*Question 85:* Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.


// This function finds where "code" first shows up in a text
function findCodePosition(str: string): number {
    return str.indexOf("code"); // Looks for "code" and tells where it found it
}
console.log(findCodePosition("100 days of code challenge")); // Outputs : 12

//--------------------------------------------------------------------------------------------------------------------------------------

//*Question 86:* Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.


// This function checks if a sentence has "JavaScript" in it
function cheakWord(str: string): boolean {
    return str.includes("JavaScript"); // Checks for "JavaScript" and returns true or false
}
// Outputs true or false based on the check
console.log(cheakWord("I Learn JavaScript!")); // return true
console.log(cheakWord("I learn javascript")); // return false

//--------------------------------------------------------------------------------------------------------------------------------------

//*Question 87:* Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.


// This function takes out the first 10 characters from any text
function extractChar(str: string): string {
    return str.substring(0, 10); // Gets characters from start to position 10
}
console.log(extractChar("Generative AI")); // Shows the first 10 characters

