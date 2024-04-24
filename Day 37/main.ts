//*Day 37 Challenge: Start Coding!* 

//*Question 109:* Write an if statement that logs "Good Morning" if the current time is before 12 PM.

//*Explain & TIP:* You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.

let currentDate = new Date();
let currentHour = currentDate.getHours();
if (currentHour < 12) {
    console.log ("Good Morning");
} else if (currentHour < 14){
    console.log ("Good Afternoon");
} else if (currentHour < 18){
    console.log ("Good Evening")
} else {
    console.log ("Good Night")
}

// *Question 110:* Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

// *Explain & TIP:* A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.

function studentScore (grade : number) {
    if (grade >= 90) {
        return "A"
 }  else if (grade >= 80) {
        return "B"
 }  else if (grade >= 70) {
        return "C"
 }  else if (grade >= 60) {
        return "D"
 }  else {
    return "F"
 }
    }
console.log (studentScore(99)); // A
console.log (studentScore(75)); // C
console.log (studentScore(65)); // D

// *Question 111:* Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

// *Explain & TIP:* Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.

let personAge  = (18);
if (personAge < 13){
    console.log ("child")
} else if (personAge > 13 || personAge < 19){
    console.log ("teenager")
} else if (personAge >=20){
    console.log ("adult")
}
