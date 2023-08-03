// function fuctionName(parameters) {
//     // function body
//     // return
// }

// // call the function
// var returnValue = fuctionName(parameters value)

function getAvarage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

// call the function
const assignment1Marks = 60;
const assignment2Marks = 52;
const assignment3Marks = 60;

const myAverage = getAvarage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far:', myAverage);