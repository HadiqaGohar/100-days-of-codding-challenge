// Reusing the person object from Question 133
var person = {
    name: "Hadiqa Gohar",
    age: 18,
    city: "Karachi",
};
// Converts the object into a JSON string with indentation
var jsonString = JSON.stringify(person, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(jsonString);
// Shows how adding indentation to the JSON string makes it easier to read.
