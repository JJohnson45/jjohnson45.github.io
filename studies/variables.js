
// VARIABLES:

/*We use variables To hold things in place.  
*Variables assign values of a certain type, like a Boolean, Array, Number, Object, String or another data-type. 
Variables can CHANGE the value to which they are assigned.

 * 1. To make a variable we use the keyword, var, with a name  for our variable.
 * 2. There are 2 parts to using a variables: declaration and initialization (or assignment).
 
// 1. declaration //
var myDog;

/* At the declaration parts, the variable myDogis undefined because it's NOT initialized to anything.

 /* console.log(myDog); // prints => undefined
 
// 2. initialization //

myDog = 'pitbull';

console.log(myDog); // prints => pitbull

// 3. re-assignment //

myDog = 'beagle';

console.log(myDog); // prints => beagles

// NOTE: We can assign and re-assign anything to a variable with the var keyword  - we cannot do this with constants and lets //

var myVariable = 33;
myVariable = false;
myVariable = "string";

console.log(myVariable); // prints "string"

/* also we can declare variables with var, let, and const. You use the key words "var", "let", or "const". 
/* var is a global variable. therefore you can reassigned it. The variable and its name will be read by the computer first then whats assigned to it will get read. 

var name = "JD";
name = "Waxx"; // I reassigned name to Waxx

console.log(name); // prints Waxx

// let is local scope variable. You can use it like var. its a blocked scope

let favSport = "Basketball";
favSport = "football";

console.log(favSport; // prints football  

// const is block scope variable. You CANNOT reassigned it. its blocked scope

const career = "CEO";

console.log(career); // prints CEO. 

Career = "Photographer";

console.log(Career); // typeError: assignment to constant variable

/* Hoisting is what the computer read first before it runs your code. Before the statements of a program are executed all var and function declaractions are hoisted to the top.
 //
console.log(name); // prints undefined

 var newName = "Randy"; 

 console.log(newName); // prints Randy

 /* let and const values are not hoisted and if you referencing them before they are declared you will get a ReferenceError.
 
 console.log(candy); // prints ReferenceError

 console.log(smoothie); // prints RefereneceError

 let candy = "starburts";
 let smoothie = "watermelon smoothie"; */