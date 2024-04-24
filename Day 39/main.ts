// *Day 39 Challenge: Start Coding!* 

// *Question 115:* Use a switch statement to log the days of the week based on a number (1-7).

// *Explain & TIP:* A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.
function logDayOfWeek (dayNumber : number) :void {
let day : any
switch (dayNumber){
     case 0:
     day = "Sunday";
     break;
     case 1:
     day = "Monday";
     break;
     case 2:
     day = "Tuesday";
     break;
     case 3:
     day = "Wednesday";
     break;
     case 4:
     day = "Thursday";
     break;
     case 5:
     day = "Friday";
     break;
     case 6:
     day = "Sunday";
     break;
}
console.log (`Day ${dayNumber} correspends to ${day}`);
}
logDayOfWeek(5);
logDayOfWeek(3);
// *Question 116:* Create a switch case that matches several cases to the same code block, representing seasons.

// *Explain & TIP:* You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.

function getSeason (month:number):void{
    switch (month){
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer"); 
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
            default:
                console.log("Invalid month");
                break;
    }
}
getSeason(10);
getSeason(9);
getSeason(12);
getSeason(14);

// *Question 117:* Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

// *Explain & TIP:* The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.

function evaluteGrade(grade:string) : void {
    switch (grade) {
        case "A1":
        console.log("Marvelous");
        break;
        case "A":
        console.log("Excellent");
        break;
        case "B":
        console.log("Good");
        break;
        case "C":
        console.log("Fair");
        break;
        case "D":
        console.log("Poor");
        break;
        case "F":
        console.log("Invalid grade");
        break;        
    }
}
evaluteGrade("A1");
evaluteGrade("B");
evaluteGrade("F");