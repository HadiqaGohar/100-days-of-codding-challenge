"use strict";
// *Day 43 Challenge: Start Coding!* 
Object.defineProperty(exports, "__esModule", { value: true });
// *Question 127:* Convert a traditional function expression to an arrow function.
// *Explain & TIP:* Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.
const traditionalFunction = function (a, b) {
    return a + b;
};
const arrowfunction = (a, b) => a + b;
console.log(traditionalFunction(5, 3));
console.log(arrowfunction(5, 3));
