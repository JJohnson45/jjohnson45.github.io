/* LOOPS;
Loops: for loop, for-in loops, while loops

*  its a built in feature in javascript that allow us to excute a block of code as many times you want to and you can iterating over a collection of data.

*  For loops vs While loops:

* - use a for loop over a while loop if you know the number of times you want to loop through.

* - use a while loop over a for loop if you dont know the number of times you should loop through

// for loop: its best to use this loop to go through an array

// they are three conditions that goes inside (); the start, stop, incrementing. (i++)


// loop forward

let arr = [0, 1, 2, 3, 4, 5 ];

for(let i = 0; i < arr.length; i++) {
18
    console.log(i); // prints 0,1,2,3,4,5

}

// looping backwards

for(let i = arr.length - 1; i > -1; i--) {

    console.log(i); // prints 5,4,3,2,1,0
24
}

// for-in loops:  loop over objects and get keys or the values out of it

var person = {

  name: "JD",

  city: 'Slidell',

  sport: 'basketball'

};

 for(let key in person) {

     console.log(key); // prints name, city, sport

    console.log(person[key]); // prints JD, Slidell, basketball

 }

 

 /* while loop: use the keyword while then a parenthesis, states a condition and while its true it will run this block of code.

 /* var i = 3;

let greetings = [];

while (i < 8) { // everytime this condition is true run this code block

  greetings += "hey, how you doing!";

  i++;

}

console.log(greetings); // prints "hey, how you doing!" 5 times
*/