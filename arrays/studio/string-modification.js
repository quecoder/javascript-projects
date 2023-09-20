const input = require('readline-sync');
let word = input.question("Please enter a word: ");
let numToSlice = Number(input.question("Please enter a mumber of characters to slice (minimum 3): "));
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str. 
let firstThree = "";
let remaining = "";
let convertedWord = "";


//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(`Your string ${word} has been converted to ${convertedWord}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


if (word.length < 4) {
    console.log(`Your word ${word} is too short, so we have changed it to LaunchCode. `);
    word = "LaunchCode";
}

if (numToSlice < 3 || numToSlice > word.length) {
    console.log("The number of letters you want to slice off your word, will not work smoothly, so we are changing it to 3.");
    numToSlice = 3;
}

firstThree = str.slice(0, numToSlice);
remaining = str.slice(numToSlice);
convertedWord = remaining + firstThree;



console.log(`Your string ${word} has been converted to ${convertedWord}`);


/*let myQ = input.question("How many letters need to be relocated? ");
let correctAnswerA = 3
let correctAnswerB = "three" 
let correctAnswerC = "Three"

if (myQ == correctAnswerA) {
    console.log("Correct.");
} else if (myQ == correctAnswerB) {
    console.log("Correct.");
} else if (myQ == correctAnswerC) {
    console.log("Correct.");
} else {
    console.log("Incorrect.");
}*/

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

