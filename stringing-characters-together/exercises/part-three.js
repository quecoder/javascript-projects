//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.replace('JavaScript', 'JS'))

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let firstInitial = language[0]
let lastInitial = language[4]
let outputInitial = firstInitial+lastInitial
console.log(`The abbreviation for '${language}' is '${outputInitial}'`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(`${language.slice(0,1)}ava${language.slice(4,10).toLowerCase()}`)

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let capTitle = notTitleCase

console.log(`${notTitleCase[0].toUpperCase()}${notTitleCase.slice(1,6)}${notTitleCase[6].toUpperCase()}${notTitleCase.slice(7,10)}`);
