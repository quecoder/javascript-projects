let i = 0;

while (i < 51) {
  console.log(i);
  i++;
}

let numbers = [ /* some numbers */ ];
let searchVal = 42;
let i = 0;

while (i < numbers.length) {
   if (numbers[i] === searchVal) {
      break;
   }
   i++;
}

if (i < numbers.length) {
   console.log("The value", searchVal, "was located at index", i);
} else {
   console.log("The value", searchVal, "is not in the array.");
}