/* LOOPS;
Loops: for loop, for-in loops, while loops

*  its a built in feature in javascript that allow us to excute a block of code as many times you want to and you can iterating over a collection of data.

*  For loops vs While loops:

* - use a for loop over a while loop if you know the number of times you want to loop through.

* - use a while loop over a for loop if you dont know the number of times you should loop through

// for loop: its best to use this loop to go through an array

// they are three conditions that goes inside (); the start, stop, incrementing. (i++)
*/

// loop forward

let arr = [0, 1, 2, 3, 4, 5 , 6, 7 ];

for(let i = 0; i < arr.length; i++) {
    console.log(i); // prints 0,1,2,3,4,5,6,7
}

// looping backwards
for(let i = arr.length - 1; i > -1; i--) {
    console.log(i); // prints 7,6,5,4,3,2,1,0
}


// for-in loops: designed to loop over objects and get keys or the values out of it
// 
var Pet = {
  name: "WAXX",
  breed: 'pitbull',
  age: '2'
};

 for(let key in Pet) {
     console.log(key); // prints name, breed, age
    console.log(Pet[key]); // prints JD, pitbull, 2
 }
 
 /* while loop: use the keyword while then a parenthesis, states a condition and
 while its true it will run this block of code.
 */
 
 var i = 4;
let greetings = [];
while (i < 10) { // everytime this condition is true run this code block
  greetings += "whats up bro!";
  i++;
}
console.log(greetings); // prints "whats up bro!" 6 times