"use strict";
//*Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let laptop = {
    make: "Apple",
    model: "MacBook Pro",
    year: 2023,
    describe: function () {
        console.log(`This laptop is a ${laptop.year} ${laptop.make} ${laptop.model}.`);
    }
};
laptop.describe();
//*Question 47:* Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// Different brand laptops array
let laptops = ([
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
]);
// destructuring to assign the first and second laptops to variables
let [laptop1, laptop2] = laptops;
// log the variable
console.log('First laptop :', laptop1);
console.log('Second laptop :', laptop2);
//*Question 48:* Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
//comparing prices of two different sets of laptops
// Array of laptop price for set 1
let laptopPricesSet1 = [1500, 2000, 1300];
// Array of laptop price for set 2
let laptopPricesSet2 = [1050, 1350, 1800];
// Combining array using spread operator
let combinedPrices = [...laptopPricesSet1, ...laptopPricesSet2];
// Sorting in assending order
let sortedPrice = combinedPrices.sort((a, b) => a - b);
// Logging the result
console.log('Sorted laptop prices :', sortedPrice);
