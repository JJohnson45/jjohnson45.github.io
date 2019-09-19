/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            return animals[i];
        } 
            
        
    }
             return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    //If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
  // - Otherwise do nothing.
  //loop through array
  // reassign the indiviual animal;
  for(var i = 0; i < animals.length; i++){
  if(animals[i].name === name){
      animals[i] = replacement;
      
  }
  }return;
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    //If an animal with that name exists within the `animals` Array, remove it.
    //loop through array
    //remove the animals.
    for(var i = 0;i < animals.length; i++){
        if(animals[i].name === name){
            animals.shift();
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
  // Checks that the animal Object has a `name` property with a length > 0.
  // - Checks that the animal Object has a `species` property with a length > 0.
  // - Has a **unique** name, meaning no other animals have that name.
  // - Adds this new Object to the `animals` Array, **only** if all the other conditions pass. 
  // create for loop
  for(var i = 0; i < animals.length; i++){
      if (animals[i].name.length > 0 && animals[i].species.length > 0 && animals[i].name === animal.name) {
          return null;
      }
      else if(animals[i].name.length > 0 && animals[i].species.length > 0 && animals[i].name !== animal.name){
          animals.push(animal);
  } 

  }
}
  


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
