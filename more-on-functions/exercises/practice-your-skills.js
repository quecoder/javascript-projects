//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let tripledValue = function (element) {
    if (typeof element === "number") {
        return element * 3;
    } else if (typeof element === "string") {
        return "ARRR!";
    } else {
        return element;
    }
}

console.log(tripledValue(43));


/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let mappedArray = arr.map(tripledValue);

console.log(mappedArray);