// *Day 27 Challenge: Start Coding!*

//*Question 79:* Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.



// This sets up an object for a car with specific details
let myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};


console.log(myCar.model); // Outputs: Corolla
// We use dot notation (car.model) to get the model of the car from our object.

//--------------------------------------------------------------------------------------------------------------------------------------

//*Question 80:* Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.


// Starting with our car object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022
} as {make : string , model : string , year : number , color? : string  
}

// Adding a new property 'color' and updating 'year'
car.color = "blue"; // Adds a new property 'color'
car.year = 2023; // Updates the 'year' property

// updated car object
console.log(car); // Outputs the car object with the new color and updated year


//-------------------------------------------------------------------------------------------------------------------------------------

//*Question 81:* Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.



// This function shows every detail about an object
function ObjectProperties(obj: any) {
    for (let prop in obj) {
        console.log(`${prop} : ${obj[prop]}`);
    }
}

// Using the function with a car object
let Car = {
    make : "Toyota",
    model : "Camery",
    year : 2023,
    color : "black"

};
ObjectProperties(Car)
// It tells us each piece of information stored about the car.
