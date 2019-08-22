// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
// return a contact object
return {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
};
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //Return an object
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function(contact) {
            //get the length of the contact list
            return contacts.length;
        }, 
        addContact: function(contact) {
            //putting a contact inside the contact list
            contacts.push(contact);
        }, 
        findContact: function(fullName) {
            //loop through the array
            //get the first name and last name of each contact
            //test if the fullname of each contact is equal to the fullname argument
            //if it does then return the contact
            for(var i = 0; i < contacts.length; i++) {
                let name = contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"];
                if(fullName === name) {
                return contacts[i];
                }
            }
        
            
        }, 
        removeContact: function(contact) {
         // loop through contact 
         //test if each contact is equal to the contact argument
         // return every contact removed
            for(let i = 0; i < contacts.length; i++) {
                if(contacts[i] === contact) {
                 return  contacts.splice(i,1);
                }
            }
        },
        printAllContactNames: function(contact) {
            //make a string
            let contactsName = "";
            //loop through that string
            // at every string add the the first name and lastname
            //return contacts name with no new line character after it.
            for(let i = 0; i < contacts.length; i++) {
                contactsName += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
              
            }
            
            return contactsName.slice(0,contactsName.length-1);
        }
       
        
    };
}





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
