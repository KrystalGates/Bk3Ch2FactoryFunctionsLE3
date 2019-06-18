// Factory function lightning exercise:
// ## Functions can perform actions, even calling other functions

// 1. Complete the function below called `contactFactory`:
// * `contactFactory` returns an object with three properties: name, title, email.
// * Make `contactFactory` take a single argument, which will be treated as an array.
// * In the body of the function, loop over that array to set the values of the object's properties.

const contactData = ["Bob", "supervisor", "123@gmail.com"]
function contactFactory(contactData) {
    let contact = {
      name: null,
      title: null,
      email: null
    }
    for (let i=0; i < contactData.length; i++) {
       ///add each arry item to contact
       if (i === 0){
           contact.name = contactData[0] 
       }
       else if (i === 1){
           contact.title = contactData[1] 
       }
       else if (i === 2){
           contact.email = contactData[2] 
       }
     }
    return contact
  }
  console.log(contactFactory(contactData))
  

//   2. Complete the second function called `createContact`:
//   * createContact takes three arguments: name, title, email.
//   * Have the function place the three arguments into an array and pass that array to the `contactFactory` by calling it.
  
  function createContact(name, title, email) {
    let newContact = [name, title, email] 
    /// pass name, title, email to contactFactory as an array
    console.table(contactFactory(newContact))
  }
//   3. Execute createContact and pass in a name, a title, and an email address. Check out your dev tools console for the resulting table of data.

createContact("steve", "manager", "343@yahoo.com")