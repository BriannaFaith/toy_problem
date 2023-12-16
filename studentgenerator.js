//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below:

//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
//Prompt-sync to get user input
const prompt = require('prompt-sync')();
//Parsefloat to convert user input to float

const studentMarks = parseFloat(prompt("Enter student marks:"));

// studentGrade to be calculated
function studentGrade(marks){
    // checks the input parameters to be between 0 and 100

    if (!isNaN(marks) && marks >= 0 && marks <= 100){
        if (marks > 79 ){
            return "A";
        } else if (marks >=60){
            return "B";
        } else if (marks >= 50) {
            return "C";
        } else if (marks >= 40) {
            return "D";
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