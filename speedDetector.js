// Import the prompt-sync library
const prompt = require('prompt-sync')();
//Prompt to get input of speed
const carSpeed = prompt("Enter the speed of the car:");
demeritPoints(parseFloat(carSpeed));

//demeritPoints function calculation
function demeritPoints(speed) {
    //speed limit variable declared
    const speedLimit = 70;
    // kmPerDemerit points declared
    const kmPerDemeritPoint = 5;

    // check speed against speedlimit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}
