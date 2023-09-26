// functionsExercise
const input = require ('readline-sync');

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    } 
    return reversed;
}

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
    line += '#';
}
return line 
}

console.log(makeLine(5));
console.log("//////////////////////");

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++){
        square += (makeLine(size) + '\n');
    }
       return square;   
 }

console.log(makeSquare(5, 5));
console.log("//////////////////////");

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++){
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}
 
console.log(makeRectangle(5, 3));
console.log("//////////////////////");

function makeDownwardStairs(height) {
    let downwardStairs = '';
    for (let i = 0; i < height; i++) {
        downwardStairs += (makeLine(i+1) + '\n');
    }
    return downwardStairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));
console.log("//////////////////////");

function makeSpaceLine(numSpaces, numChars) {
    let spaces = '';
    for (let i = 0; i < numSpaces; i++) {
        spaces += ' ';
    }
    let chars = makeLine(numChars);

    return `${spaces}${chars}${spaces}`;
}

console.log(makeSpaceLine(3, 5));
console.log("//////////////////////");

     function makeIsoscelesTriangle(height) {
        let isoscelesTriangle = '';

        for (let i = 0; i < height; i++) {
            isoscelesTriangle += `${makeSpaceLine(height - i - 1, 2 * i + 1)}\n`
        }
        return isoscelesTriangle.slice(0, -1);
    }
    console.log(makeIsoscelesTriangle(5));
    console.log("//////////////////////");

function makeDiamond(height) {
    let topHalf = makeIsoscelesTriangle(height);

    let bottomHalf = reverse(topHalf);

    return `${topHalf}\n${bottomHalf}`;
    
}
console.log(makeDiamond(5));
console.log("//////////////////////");

