
// VARIABLES:

/*We use variables To hold things in place.  
*Variables assign values of a certain type, like a Boolean, Array, Number, Object, String or another data-type. 
Variables can CHANGE the value to which they are assigned.

 * 1. To make a variable we use the keyword, var, with a name  for our variable.
 * 2. There are 2 parts to using a variables: declaration and initialization (or assignment).
 
// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
var myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable with the var keyword  - we cannot do this with constants //
var myVariable = 1;
myVariable = true;
myVariable = "someString";
console.log(myVariable); // prints "something"


/* We can also declare variables with var, let, and const. You uses the key words
"var", "let", or "const". 
*/

/* var is a global variable. you can reassigned it at anytime. The variable and its name 
* will always be read by the computer first then whats assigned to it will get read. 
*/
var name = "Johndareous";
name = "JD"; // I reassigned name to JD
console.log(name); // prints JD

// let is local scope variable. You can use it like var. its blocked scope
let favFood = "pizza";
favFood = "chicken wings";
console.log(favFood); // prints chicken wings  

// const is block scope variable. You cant reassigned it. its blocked scope
const message = "Hey my name is";
console.log(message); // prints Hey my name is. 
message = "slim shady";
console.log(message); // typeError: assignment to constant variable

/* Hoisting is what will the computer read first before it excutes your code. 
Before the statements of a program are executed all var and function declaractions are hoisted to the top.
Because of this, var values will not throw a ReferenceErrors if you try referencing them before they are declared
*/

console.log(name); // prints undefined
 var newName = "phil"; 
 console.log(newName); // prints phil
 
 /* let and const values are not hoisted and therefore if you referencing them before they are declared 
 you will get a ReferenceError.
 */
 
 console.log(fruit); // prints ReferenceError
 console.log(F); // prints RefereneceError
 
 let fruit = "strawberries";
 let F = "fun";