/* Functions: create a block of code that can be reused 

* 1. First must define the function
* 2. Function parameters are placeholders for the arguments()
- Function arguments takes place of the parameters when passing into a function.

* 3. EX.1 function hobby(favSport, favMusic) {};
* 4. Functions can see and modify variables in the parent scope not the global scope
* 5. Scope: refers to what variables are accessible and where we can access them. 

*  Global scope - anything outside the function scope

*  Local scope - anthing inside the function body

* Child scope can access the variables of it's parent scope plus global scope but the parent scope doesnt have access to the child scope.
*/
 
// * Closure - 
 function access() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert (name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
access();

// function expression:
// we make a function expression by assigning a function to a variable
//ex:
// named function: 
function movie(title, year) {
    return title + ' ' + year;
}
movie('US', '2019');

// function expression: 
// we make a function expression by assigning a fucntio to a variable
let realName = function(firstName, lastName) {
    return firstName + ' ' + lastName;
}


//Functions can see and modify variables in the global scope 

// ex 
let name = "JD";
function newName() {
name = "phil";
} 
// console.log(name);// prints jd
newName();// to access phil I have to call the function then check for name
console.log(name); // prints phil

