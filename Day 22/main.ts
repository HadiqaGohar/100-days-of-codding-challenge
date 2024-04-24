//QUESTION 64

// This function mixes a text and a number into one text
function combineStringAndNumber(text: string, number: number): string {
    // Joins the text and number into a single text
    return text + number;
  }
  
  // Trying it out with "Age: " and 30
  console.log(combineStringAndNumber("Age: ", 30)); // Shows "Age: 30"
  // Here, we put together the text and number.

  //---------------------------------------------------------------------------------------------------------------------

//QUESTION 65

  // This function finds the leftover of dividing two numbers
function remainder(num1: number, num2: number): number {
    // Gives back the leftover of num1 divided by num2
    return num1 % num2;
  }
  
  // Trying it with 5 divided by 2
  console.log(remainder(5, 2)); // Shows 1
  // This tells us the leftover, which is 1 here.

  //----------------------------------------------------------------------------------------------------------------

//QUESTION 66

  // This function sees if both inputs are true
function checkBothTrue(val1: boolean, val2: boolean): boolean {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
  }
  
  // Trying it with true and false
  console.log(checkBothTrue(true, false)); // Shows false
  // It checks two things, but since one is false, the answer is false.