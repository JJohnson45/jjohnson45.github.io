/* Sting Manipulation

strings are immutable. but you can alter the string. 
methods - toUpperCase, toLowerCase, slice, replace, concat, split,


// toUpperCase: to upper case the string

let tallStr = 'happy';

console.log(tallStr.toUpperCase());  // prints 'HAPPY'


// toLowerCase: to lower case the string

let smallStr = 'SAD';

console.log(smallStr.toLowerCase()); // prints 'sad'


// slice: take out elements from a string

let myStr = 'bd457dw';

let newStr = myStr.slice(0,2);

console.log(newStr); // prints 'bd'


// length: return the length of the string

let name = 'Johnson';

console.log(name.length); // prints 6


// replace: replace a element with a element you give

let Str = ' I'm tall';

let newStr = Str.replace('tall', 'short');

console.log(replaceStr1); // prints "I'm short"


// concat: join two strings together using the concat method operator and return a new string

let strOne = 'I love';

let strTwo = 'to read';

console.log(str5.concat(strOne, strTwo)); // prints I love to read


// split: splits a String object into an array of strings by separating the string into substrings,
// using a specified separator string to determine where to make each split.

let str = 'I hope to move back to Miami and enjoy my life, finally';

let newWords = str.split(' ');

console.log(newWords[3]); // prints Move
console.log(newWords[6]); // prints Miami




*/
