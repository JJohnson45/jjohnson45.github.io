/*
Control Flow: if, else if, else, switch
 Conditional statements control the flow of the application
true/false allows us to run code depending on which statement passes
 */

// if statement: use the key word if

let num = 5;
if(num < 12) {
    console.log(num);
} else {
    console.log("Have fun");
}
// prints: num
 

//  else if: if one condition isnt true, it will go to the next one until one passes.

let hat= 13;
if(hat < 3) {
    console.log("see ya later");
} else if(hat <= 5) { 
    console.log("goodbye!");
} else{ 
    console.log("Get lost!");
}
// prints: Get lost!


// switch statement: use the keyword switch with conditions in the body; break statement ends the case. 

let newCar = "Balling";

switch (newCar) {
    case "speeding":
        console.log("I love my new car");
        break;
        case "dream car":
            console.log("Ferrari");
            break;
        case "newCar": 
            console.log("Im going to get that dream car.");
            break;
        default: 
            console.log("I finally got that car");
}