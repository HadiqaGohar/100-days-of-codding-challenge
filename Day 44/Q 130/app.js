"use strict";
// *Question 130:* Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
// *Explain & TIP:* In modern JavaScript development, modules 
// allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.
const mathApp_1 = require("./mathApp");
console.log((0, mathApp_1.add)(2, 3)); // output 5
