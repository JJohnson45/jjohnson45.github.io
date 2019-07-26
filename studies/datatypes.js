/*DATATYPES
Javascript, has two different datatypes simple/primitive and complex datatypes.

1. Simple/Primitive dataypes: immutable. they dont hold or collect other values. copy by value
simple datatypes: number, string, boolean, Nan, undefined, and null


2. Complex datatypes: can take in other values so they can be indefinite size. 
they are copied by reference
complex datatypes: array, object, and function 

The differnce the two are that simple datatypes dont hold or collect value. (copy by value)
Complex datatypes can take other values and can grow into any size.(coby by reference)


// number datatype
var num = 3; 


// string: a character datatype stored inside quotations 
let str = "tupac"; 


// boolean:  true or false
console.log(true);
console.log(false);


// NaN: not a number 

typeof NaN; // prints 'number'
console.log(isNaN(80)); // prints false
45
console.log(isNaN('JD')); // prints true


// undefined: is property of the global object. 
var name;

console.log(name); // prints undefined 


// null: a variable points to no object
var nothing = null; 


// array: is a collection of data stored in braces. []
let arr = [ 1, 2, 3]; 

// object: is key value pairs stored in curly braces. {}

let myObj = { favSnack: "starburst", favSport: "basketball"};


// function: its a resusable block code. It take in two parameters with a function body. 
function myName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
*/