//*Day 42 Challenge: Start Coding!*

// *Question 124:* Create a function inside an object that returns the object's own name property using the this keyword.

// *Explain & TIP:* The this keyword in an object's method refers to the object itself, making it straightforward to access its properties from within its methods.

const person = {
    name : "Hadiqa Gohar",
    getName : function (){
        return this.name;
    },
};
console.log(person.getName());

//---------------------------------------------------------------------------------------------------------------------

// *Question 125:* Modify a method in an object to use the this keyword to access another property in the same object.

// *Explain & TIP:* You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.
 
const rectangular = {
    length : 6,
    width : 7,
    calculateArea : function (){
        return this.length * this.width
    },
};
console.log(rectangular.calculateArea());


// *Question 126:* Explain how the this keyword changes its value when used inside a nested function within a method.

// *Explain & TIP:* When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function.
 const object = {
    property : 5,
    nestedFunction : function (){
        console.log (this.property);

        const innerMethod = () => {
            console.log(this.property)
        };
            innerMethod();
    },  
 };
 object.nestedFunction();