//*Question 49:* Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

// Defines a function that accepts multiple hobbies as arguments
function Hobbies(...hobbies: string[]) {
  // Loops through each hobby in the array
  hobbies.forEach((hobby) => {
    // Logs a statement for each hobby
    console.log(`I enjoy ${hobby}.`);
  });
}

// Calls the function with three hobbies
Hobbies("painting", "coding", "driving", "gardening");

//*Question 50:* Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

// Using template literals to define a multiline string
let myIdealDay = `My ideal day would involve:
1. Waking up early at the morning read namaz and create a new art , learn new lesson etc .
2. At the after noon Spending time with family , watering the plants , self study , cleaning the home.
3. Ending the day read namaz , a few hours codding , watching dramas with family , after the dinner use mobile and sleep.`;

// Logging the multiline string to the console
console.log(myIdealDay);

//*Question 51:* Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number =>
  width * height;

// Example usage of the arrow function
 
console.log('Area of the rectangular is :', calculateAreaArrow(6,3)) // Logs the area of the rectangle
