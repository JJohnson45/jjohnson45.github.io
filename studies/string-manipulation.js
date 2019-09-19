// Sting Manipulation

//strings are immutable. but you can alter the string. 
//methods - toUpperCase, toLowerCase, slice, replace, concat, split,


// toUpperCase: to upper case the string

// toUpperCase: to upper case the string
let bigStr = 'lowercase';

console.log(bigStr.toUpperCase());  // prints 'LOWERCASE'

// toLowerCase: to lower case the string
let litteStr = 'BABYSTRING';

console.log(litteStr.toLowerCase()); // prints 'babystring'

// slice: take out elements from a string from (start, end)
let myStr = 'tjcdef3f';
let newStr = myStr.slice(0,2);
console.log(newStr); // prints 'tj'


// replace: replace a element with a element you provides
let replaceStr = ' I will be great!';
let replaceStr1 = replaceStr.replace('great', 'good');
console.log(replaceStr1); // prints 'I will be good'

// concat: join two strings together using the concat method operator and return a new string
let str5 = 'I cant wait';
let str6 = 'to be successful!';
console.log(str5.concat(' ', str6)); // prints I cant wait to be successful!

// split: splits a String object into an array of strings by separating the string into substrings,
// using a specified separator string to determine where to make each split.

let wideStr = 'The Saints will lose this year';
let takeWordsOut = wideStr.split(' ');
console.log(takeWordsOut[1]); // prints Lakers
console.log(takeWordsOut[6]); // prints playoffs

//The + and += operator can also be used to add (concatenate) strings.
var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;
console.log(txt3); //John Doe

var txt1 = "What a very ";
txt1 += "nice day";
console.log(txt1); //what a very nice day








