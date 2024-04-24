"use strict";
//*Question 52:* Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
// Sets up details about a smartphone
let smartphone = {
    make: "OPPO",
    model: "A1K",
    storage: "8GB",
    screenSize: "6.2 inches",
    batteryLife: "48 hours "
};
// Shows what we've set up about the smartphone
console.log(smartphone);
//*Question 53:* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["Typescript", "Javascript", "Python"],
    frameworks: ["Angular", "React", "Vue"],
    tools: ["Webpack", "Git", "Docker"]
};
// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;
// Showing a skill from each category
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
console.log(`Language: ${languages[1]}, Framework: ${frameworks[1]}, Tool: ${tools[1]}`);
console.log(`Language: ${languages[2]}, Framework: ${frameworks[2]}, Tool: ${tools[2]}`);
//*Question 54:* Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject = value;
    // return value
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("name", "Hadiqa Gohar");
// Showing the user's choice
console.log(userPreference);
