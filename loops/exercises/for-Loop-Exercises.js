/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

    for (let i = 0; i < 21; i++) {
         console.log(i);
    }

    console.log("----------------------------------------");
    
    for (let i = 3; i < 30; i=i+2) {
      console.log(i);
    }

    console.log("----------------------------------------");

    for(let i = 12; i > -15; i=i-2) {
      console.log(i);
    }

    console.log("----------------------------------------");

    for(let i = 50; i > 19; i=i-3) {
      console.log(i);
    }

    console.log("----------------------------------------");
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42]. */

let str = "LaunchCode";
let arr = [1, 5, "LC101", "blue", 42];
let reversed = "";

/*Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

  console.log("----------------------------------------");

let newArray = str.split("").reverse().join("")
let newStr = newArray

for (let i = 0; i < str.length; i++) {
    

console.log(newArray[i]);
}




  console.log("----------------------------------------");

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let exArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
exArray.sort();

  // FOR AS LONG exARRAY HAS EVEN NUMBERS; PLACE EVEN NUMBERS IN evenARR
  let odds = []; 
  let evens = [];
  
for (let i = 0; i < exArray.length; i++) {

  if (exArray[i] %2) {
    evens.push(exArray[i]);
  } else  {
    odds.push(exArray[i]);
  } 
}
console.log(evens);
console.log(odds);