//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    for (var key in object) {
        arr.push(object[key]);

    }
    return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //return all its keys
    // make an empty array
    //put them in a array
    //turn array into string
    // seperate each string with a space
    var str = [];
    for (var key in object) {
        str.push([key]);
        str.toString();
    var newString = str.join(' ');
    } return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
//loop through object
//return all its string values
//return them ina string
// seperate each one with a space.
var str = [];
for(var key in object){
    if (typeof object[key] === typeof 'string')
    str.push(object[key]);
      str.toString();
    var newString = str.join(' ');
} return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
//takes an collection
//return array if its an array or otherwise
//check if its an array or object
if(Array.isArray(collection)){
    return 'array';
} else if (typeof collection === 'object'){
    return 'object';
}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
   
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //takes a string of words
   //acess each word
   //capitalize only that word
   // add the rest of the characters back to each word
  string = string.split(' ');
  for(var i = 0; i < string.length; i++){
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
   
  } return string.join(' ');
  
  
   
   
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//make an name property
var newName = object.name;
newName = newName.charAt(0).toUpperCase() + newName.slice(1);
var brandNewName = 'Welcome ' + newName + '!';
return brandNewName;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var name = object.name;
name = capitalizeWord(name);
var species = object.species;
species = capitalizeWord(species);
var sent = name + ' is a ' + species;
return sent;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //check to see if object has a noise array
    //if it does turn the array to a string seperated by a space
    // if noises dpoesntpass
    //return there are no noises
    if(Array.isArray(object.noises) && object.noises.length > 0){
        return object.noises.join(' ');
    } else {
        return 'there are no noises';
        
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
// Should take a string of words
//return true if that word is included in string of words otherwise false
if(string.includes(word)){
    return true;
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
//should take a name
//put the name to the object's friends array
//return friends array then return the obejct
 object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
//takes a name and object
//make an if statemnt
//if the object has a friends array
//loop through array
// if name is equal to the friends in the object return true;
//otherwise return fslse;
if( object.hasOwnProperty("friends")) {
      for(let i = 0; i < object.friends.length; i++) {
          if(name === object.friends[i]) {
              return true;
          }
      } 
  }return false;
};

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
console.log(name);
    //make an empty array
    // loop through array
    // check if each person name isnt a friend name thats in each persons friends array
    // return the list of the non friends 
   let nofriends = [];
   
    for(let i = 0; i < array.length; i++) {
        
        // console.log(array[i]);
        if(array[i].name !== name && array[i].friends.includes(name) === false) {
            
            nofriends.push(array[i].name);
        }
    } 
        return nofriends;
          
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //create if statements
    //check if the porperty of key  is object
    //then reassign key on object to value
    //
if(object.hasOwnProperty(key)) {
      object[key] = value;
     
  } else {
      object[key] = value;
  }
  return object;
}


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // loop through abject
    //loop thorugh array
    //if properties are listed in the array remove them
    //else return object;
    for(let key in object) {
        for(let i = 0; i < array.length; i++) {
            if(key === array[i]) {
                delete object[key];
            }
        }
    } return object;

}



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//create an empty array named result that will be return at the end
//
//loop through input array;
//use if statement to check if current element does not exist in in result array.
  //push current element in results array.
// return result array;
var result = [];
for(var i = 0; i < array.length; i++){
    var currentElement = array[i];
    if(!result.includes(currentElement)){
        
    result.push(array[i]);
    
        }
} return result;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
