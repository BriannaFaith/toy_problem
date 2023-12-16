
//Prompt-sync to get user input
const prompt = require('prompt-sync')();

//Parsefloat usage to convert user input to float

const studentMarks = parseFloat(prompt("Enter student marks:"));

// studentGrade to be calculated
function studentGrade(marks){
    // checks the input parameters to be between 0 and 100 and return grades

    if (!isNaN(marks) && marks >= 0 && marks <= 100){
        //checks for value greater than 79
        if (marks > 79 ){
            return "A";
            // checks for value greater or equal to 60
        } else if (marks >=60){
            return "B";
            //checks for value greater than or equal to 50
        } else if (marks >= 50) {
            return "C";
            //checks for value greater than or equal to 40
        } else if (marks >= 40) {
            return "D";
            //checks for value less than 40
        } else {
            return "E";
        }
    } else {
        //error message for invalid input
    return ("Please enter a number between 0 and 100.");
    }
}
//displaying the result
console.log(studentGrade(studentMarks));