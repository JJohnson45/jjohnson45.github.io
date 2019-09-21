/* OPERATORS
Operators: assigns, compares, orinclude them in arthimetic operators. 
Operators can have take can be different sorts
* Ternary - three values */ 
let person = {
  name: 'tony',
  age: 20,
  driver: null
};
ex: 
person.driver = person.age >=16 ? 'Yes' : 'No';

//Binary  - two values 
let a = 9;
let b = 10;
let sum = a + b;
console.log(sum); //19

// Unary - one values 
if( a !== b){
  return true;
}

console.log(10 - 9); //prints 1

if(typeof collection === 'object'){
  return true;
}



/*1. Assignment operators:  =, +=, -=, *=, /=, %= 

* assigns a value to whats on the left to whats on the right.

*2. Arithmetic operators: addition (+), subtract (-), divide (/), multiplication (*). 
*takes a numberical value and return a new single value.


*3. Comparsion & Binary comparsion operators:[  <, >, <=, >=,  ===, !== ]
* compare two values that evaluates to boolean, true or false 


*4. Logical operators: &&, ||, !.
*-  && And operator: if both condtions are true. \
*- || Or operator:  if one of the conditions are true
* - ! Bang operator: flips the value truthiness 
*/

// additional  assignment operator: adds value assigned to the variable and assigns the result to the variable

// the operator: +=

var name = "mike"; // I assign mike to the variable name.

// additional  assignment operator: adds value assigned to the variable and assigns the result to the variable
// the operator: +=

var score = 0;
score += 5;
console.log(score); // prints  5 

//  subtraction assignment operator: subtracts value assigned to the variable and assigns the result to the variable
// the operator: -=

var total = 100;
total -= 55;
console.log(total); // prints 45

/* multiplication assignment operator: multiplies the value assigned to the variable 
and assigns the result to the variable */ 
// the operator: *=

var addUp = 9;
addUp *= 9;
console.log(addUp); // prints 81

// divison assignment operator: divides the value assigned to the variable and assigns the result to the variable
// the operator: /=

var divDown = 49;
divDown /= 7;
console.log(divDown); // prints 7

// remainder assignment operator: divides the value assigned to the variable and assigns the remainder to the variable
// the operator: %= 

var remainder = 11; 
remainder %= 5;
console.log(remainder); // prints 1


// Arithmetic operator: { +, - , /, * }

// addition: add two numbers. 
// the operator: + 

console.log(5 + 8); // prints 13

// subtract: subtract two numbers. 
// the operator: - 

console.log(20 - 10); // prints 10

// divide: divide two numbers 
// the operator: / 

console.log(49 / 7); // prints 7

// Comparsion & Binary comparsion operator: [  <, >, <=, >=,  ===, !==, /,]

// less than: the number on the left of the less than operator is less than the number of right operator.
// the operator: < 
// returns boolean: true or false. 

console.log(5 < 10); // prints true
console.log(8 < 6); // prints false

// less than or equal to: the number on the left of the operator is less than or equal to the number of right operator
// the operator: <= 
// return boolean: true or false

console.log(6 <= 10); // prints true
console.log(8 <= 5); // prints false

// greater than: the number on the left of the operator is greater than the number of right operator
// the operator: >
// return boolean: true or false

console.log(8 > 3); // prints true
console.log(4 > -1); // prints false

/*greater than or equal to: the number on the left of the operator is greater than or equal to the numnber right of the 
operator.
the operator: >= 
returns booleans: true or false
*/
console.log(5 >= 4); // prints true
console.log(7 >= 33); // prints false 

// strict equal to: checks to see if the datatype is stricty equal to the datatype left of the operator
// the operator: === 
// returns boolean: true or false

console.log(98 === 98); // prints true
console.log(22 === "22"); // prints false

// strictly not equal to : checks to see if the dataype is not strictly equal to the datatype on the left of the operator
// the operator: !== 
// returns booleans: true or false

console.log( 2 !== 3); // prints true
console.log(2 !== 2); // prints false


// Logical operators: { &&, ||, ! }

// And operator: && 
// both conditions have to be true
// returns boolean: true or false

console.log(5 > 4 && 67 < 100); // prints true
console.log("JD" === "JD" && 5 < 2); // prints false

// Or operator: || 
// one of the condtions have to be true
// returns boolean: true or false

console.log(21 > 5 || 5 < 2); // prints true
console.log(44 < 32 || 55 > 111); // prints false