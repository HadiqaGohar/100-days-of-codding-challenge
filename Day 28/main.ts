// *Day 28 Challenge: Start Coding!* 

//*Question 82:* Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.

// This function counts how many characters are in a string
function stringLength(str: string): number {
    return str.length; // Returns the number of characters in the string
}

// Example: Measuring the length 
console.log(stringLength("My name is hadiqa gohar and i am a student of GIAIC")); // Outputs: 51

//--------------------------------------------------------------------------------------------------------------------------------------

//*Question 83:* Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.


// This function changes a string to uppercase and  lowercase
function convertCase(str: string) {
    let upperCaseStr = str.toUpperCase(); // Converts to uppercase
    let lowerCaseStr = str.toLowerCase(); // Converts to lowercase

    console.log("Uppercase:", upperCaseStr, "Lowercase:", lowerCaseStr);
}

convertCase("Hadiqa Gohar"); // Outputs:  Uppercase: HADIQA GOHAR Lowercase: hadiqa gohar

//--------------------------------------------------------------------------------------------------------------------------------------

//*Question 84:* Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".


// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with the 'g' flag for a global replacement
}

// javascript change into typescript
console.log(replaceJavaScriptWithTypeScript("I love JavaScript and JavaScript is awesome!"));
// Outputs: "I love TypeScript and TypeScript is awesome!"

