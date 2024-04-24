//*Day 38 Challenge: Start Coding!* 

// *Question 112:* Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

// *Explain & TIP:* The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.

function map (city : any ,country = 'USA'){
    console.log (`${city} is in ${country}`)
}
// calling function
map('Karachi','Pakistan');
map('New York');
map('London','United kingdom');

// *Question 113:* Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

// *Explain & TIP:* You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.

let checkMap : Map<string,string> = new Map (
    [
        ['Canada','Ottawa'],
        ['Pakistan','Karachi'],
        ['London','United Kingdom']
    ]
)
function checkMapForCanada (map : Map<string,string>) :void{
    //boolean indicating whether an element with the specified key exists or not
    if (map.has ("Canada")){
        //Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
        console.log (`The capital of canada is : ${map.get("Canada")}`);
    } else {
        console.log ('Canada is not found in map')
    }
}
checkMapForCanada(checkMap)


// *Question 114:* Iterate over a Map of student IDs and names, and log each pair to the console.

// *Explain & TIP:* Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.

let student : any [] = ["Hadiqa","Wajiha","Noor","Ghazal","Mehak"]
student.forEach(student => console.log ({student}))
