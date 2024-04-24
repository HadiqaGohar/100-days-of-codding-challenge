
//*Question 58:* Average Score Calculator: Write a simple program that can take lots of scores and find their average.


// This program calculates the average of all scores given
function averageScore(...scores: number[]): number {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

// Example: finding the average of four scores
console.log(averageScore(10 , 20 , 30 ,40)); // Shows the average score
// We add up all the scores, then divide by how many there are.


//*Question 59:* Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.




// This program makes a function that adds a specific number
function makeAdder(valueToAdd: number): (number : number) => number {
    // This is the magic box. It takes a number and adds your special number to it
    return function(number: number): number {
        return number + valueToAdd;
    };
}

// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.



//*Question 60:* Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.


// user info
let userProfile = (function() {
    //  user's details 
    let name = "Hadiqa Gohar";
    let age = 18;

    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

//  user about
userProfile.displayInfo(); 