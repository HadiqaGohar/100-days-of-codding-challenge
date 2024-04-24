// *Question 61:* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.


// Making a list (enum) for different types of vehicles
enum VehicleType {
    Car,
    Truck,
    Motorcycle
}

// Showing one type of vehicle from the list
console.log(VehicleType.Car); // It shows 0 because enums start counting from 0


//*Question 62:* Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
}

// Filling in the blueprint with an example student
let studentExample : Student = {
    name: "Hadiqa Gohar",
    age: 18,
    courses: ["Biology", "Physics", "Chemistry"]
};

// Showing the student's information
console.log(studentExample);


//*Question 63:* Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Showing result
console.log(circle); 
console.log(rectangle); 



