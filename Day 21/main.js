"use strict";
// *Question 61:* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Making a list (enum) for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
// Showing one type of vehicle from the list
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// Filling in the blueprint with an example student
let studentExample = {
    name: "Hadiqa Gohar",
    age: 18,
    courses: ["Biology", "Physics", "Chemistry"]
};
// Showing the student's information
console.log(studentExample);
// Describing a circle using our Shape type
let circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
let rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing result
console.log(circle);
console.log(rectangle);
