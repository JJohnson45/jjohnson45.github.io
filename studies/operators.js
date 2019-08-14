/* OPERATORS
Operators: assigns, compares, orinclude them in arthimetic operators. 
Operators can have take can different sorts
* Ternary - three values  (ex: person.driver = person.age >=16 ? 'Yes' : 'No';);
* Binary  - two values (ex: a + b);
* Unary - one values (ex: i++);


*1. Assignment operators:  =, +=, -=, *=, /=, %= 

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

var score = 3;
score += 7;

console.log(score); // prints  10 


//  subtraction assignment operator: subtracts value assigned to the variable and assigns the result to the variable
// the operator: -=
var all = 40;
all -= 20;

console.log(all); // prints 20

// multiplication assignment operator: multiplies the value assigned to the variable 
// the operator: *=
var count = 10;
count *= 3;
console.log(count); // prints 30


// divison assignment operator: divides the value assigned to the variable and assigns the result to the variable
// the operator: /=
var countDown = 36;

countDown /= 6;

console.log(countDown); // prints 6


// remainder assignment operator: divides the value assigned to the variable and assigns the remainder to the variable
// the operator: %= 

var remainder = 13; 
remainder %= 4;

console.log(remainder); // prints 1


// Arithmetic operator: { +, - , /, * }
// addition: add two numbers. 
// the operator: + 

console.log(4 + 9); // prints 13

// subtract: subtract two numbers. 
// the operator: - 

console.log(60 - 45); // prints 15

// divide: divide two numbers 
// the operator: / 

console.log(36 / 3); // prints 12


// Comparsion & Binary comparsion operator: [  <, >, <=, >=,  ===, !==, /,]
// less than: the number on the left of the less than operator is less than the number of right operator.
// the operator: < 
// returns boolean: true or false. 

console.log(2 < 3); // prints true
console.log(5 < 9); // prints false


// less than or equal to: the number on the left of the operator is less than or equal to the number of right operator
// the operator: <= 
// return boolean: true or false

console.log(34<= 45); // prints true
console.log(99<=193); // prints false


// greater than: the number on the left of the operator is greater than the number of right operator
// the operator: >
// return boolean: true or false
console.log(2 > 1); // prints true
console.log(4 > -1); // prints false


// greater than or equal to: the number on the left of the operator is greater than or equal to the numnber right of the operator.
//the operator: >= 
//retuns booleans: true or false

console.log(5 >= 2); // prints true
console.log(19 >= 98); // prints false 


// strict equal to: checks to see if the datatype is stricty equal to the datatype left of the operator
// the operator: === 
// returns boolean: true or false
console.log(33 === 33); // prints true
console.log(44 === "44"); // prints false

// srictly not equal to : checks to see if the dataype is not strictly equal to the datatype on the left of the operator
// the operator: !== 
// returns booleans: true or false

console.log( 6 !== 9); // prints true
console.log(5 !== 5); // prints false
