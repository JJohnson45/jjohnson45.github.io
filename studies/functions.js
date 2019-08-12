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


// function expression:
// we make a function expression by assigning a function to a variable
ex:
function newPhone(iphone, android) {
    return iphone + ' ' + android;
}
newPhone('iphone', 'android');


//Functions can see and modify variables in the global scope 
 ex: 
let name = "JD";
function newName() {
name = "waxx";
} 
// console.log(name);// prints JD
newName();// to access waxx I have to call the function then check for name
console.log(name); // prints waxx
*/
