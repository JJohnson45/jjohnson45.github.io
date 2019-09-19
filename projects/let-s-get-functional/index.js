// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jjohnson45');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//takes an array 
//return a number
//parameters are the e, i, array
//see if the customers geneder are equal to a male
//the filter function loops through the array
//set a variable equal to 0 so it can return a number
//count up each iteration
//console.log(array);
let count = 0;
_.filter(array, function(customer, i, array){
    if(customer.gender === 'male') {
        count++;
    }
    
});
return count;

};

var femaleCount = function(array){
    //reduce returns a number
    //save reduce to a variable
    //pass in the array
    // parameters are the total(seed),customer(index) arr(array)
    //check if the customers gender is equal to the male gender
    //iterate the seed
    //return total
    //return the female
   let female = _.reduce(array, function(total, customer, arr){
       if(customer.gender === 'female') {
           total++;
       }
       return total;
   }, 0);
   return female;
}; 




var oldestCustomer = function(array) {
     //use filter to get all of the ages that meet the condition
     //set an oldest customer to zero
    let oldestCustomer = 0;
    let customerName;
    _.filter(array, function(customer, i, array){
    //check if customer is older than oldestCustomer
       if(customer.age > oldestCustomer)  {
           //set oldestCustomer to customers age
           oldestCustomer = customer.age;
           
       }
    });
    //use each because it applies a function on every match element
    _.each(array, function(customer, i, array) {
        //check if customers age is the same as the oldestCustomer
        if(customer.age === oldestCustomer) {
            //assign customername to the name of the customer
            customerName = customer.name;
        }
    }); // return customerName;
    return customerName;
};
var youngestCustomer = function(array){
    let youngestCustomer = 0;
    let customerName;
    _.filter(array, function(customer, i, array){
    //check if customer is older than oldestCustomer
       if(customer.age > youngestCustomer)  {
           //set oldestCustomer to customers age
           youngestCustomer = customer.age;
           
       }
    });
    _.filter(array, function(customer, i, array) {
        if(customer.age < youngestCustomer) {
            youngestCustomer = customer.age;
            customerName = customer.name;
        }
    }); return customerName;
};

var averageBalance = function(array){
  return array.reduce(function(balance, customer, arr){
      //iterate through array using reduce
//add accumalator to the current value
//divide the sum by length of the array
//output the balance
var oldBalance = customer['balance'].slice(1);
//access each customer's balance
//slice off the first character "$"
//console.log(oldBalance);
//turn string into number
   var newBalance =  parseFloat(oldBalance.split(',').join(''));
   //add balance to each new balance
 balance += newBalance;
    return balance;
   //divide the sum by length of the array
}, 0)/ array.length;
};

var firstLetterCount = function(array, letter) {
    let namess = [];
    let countUp = 0;
    _.each(array, function(e, i, array) {
      namess.push(e.name); 
    });
    
    _.filter(namess, function(name, i, array) {
        if(name[0].toUpperCase() === letter.toUpperCase()) {
            countUp++;
        }
    });
    return countUp;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let count = 0;
    _.each(array, function(e, i, c){
        if(e.name === customer) {
            _.filter(e.friends, function(friend,i, c){
             if(friend.name.charAt(0).toUpperCase() === letter.toUpperCase()) {
                 count += 1;
             }  
            });
        }
    });
    return count;
};

var friendsCount = function(array, name){
    let count = [];
    _.each(array, function(e, i, c){
     if(e.name !== name) {
         _.filter(e.friends, function(friend, i, c){
             if(friend.name === name) {
                 count.push(e.name);
             }
         });
     }   
    });
    return count;
};

var topThreeTags = function(array) {
    let topTags = [];
    let counter = {};
    for(let i = 0; i < array.length; i++) {
        for(let b = 0; b < array[i].tags.length; b++) {
            let customerTag = array[i].tags[b];
            if(counter[customerTag]) {
                counter[customerTag]++;
                
            }
            else {
                counter[customerTag] = 1;
            }
        }
    }
    
    let order = [];
    for(let key in counter) {
        order.push([key, counter[key]]);
        
    }
    let sortedTags = order.sort((a, b) => a[1] - b[1]);
    let topThree = sortedTags.slice(sortedTags.length - 3);
    console.log(topThree);
    topTags.push(topThree[0][0], topThree[1][0], topThree[2][0]);
    console.log(topTags);
    return topTags;
};

//Create a summary of genders
var genderCount = function(array){
   //create object to return
   genderCount={};
   //get number of males
   genderCount.male = _.reduce(array, function(object, index, array){
       if (index.gender === 'male'){
          object++;
       }
       return object;
   }, 0);
   //get number of females
   genderCount.female = _.reduce(array, function(object, index, array){
       if (index.gender === 'female'){
          object++;
       }
       return object;
   }, 0);
   //get number of non-binary
   genderCount['non-binary'] = _.reduce(array, function(object, index, array){
       if (index.gender === 'non-binary'){
          object++;
       }
       return object;
   }, 0);
   //return object
   return genderCount;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
