// So far we know that var allows us to store a snigle peice of data
// for example var a = "oz";
// we also know that you can store differnt data types
// for example var b = 123;

// But how can we store a collection of related items, to the same container or same variable ? this is a case for creating an array. 

// Arrays help us store a collection of data, and gives us a lot of functionality without having to write alot of code.

// Challange: have your ever thrown a party and had the daunting task of having to manage the guest list?, here is a simple useful js program to help.

// This simple script will ask the guess for their names and check the guest list whether or not they should be admitted?
// The Guests are : "oz", "mil", "car", "e", "ma", "will"


 
var guestList = ["oz", "mil", "car", "e", "ma", "will"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
  alert("Welcome!");
} else {
  alert("Sorry, maybe next time.");
}

// Some other useful methods you can use with arrays below //


// (guestList.includes(guestName)

// this looks if the array has a particular item, if it does then it returns true if not then false, so we get a boolean as the output function. 

// console.log(guestList); 

// this gives the names of all the items in an array and the total number of items

// console.log(guestList.length); 

// this gives me the the number of items in an array

// console.log(guestList[0]); 

// this just gives me the specific data in that position zero


// a more complex way of doing this is creting a gigantic set of conditional statement; such as the code below until we break our fingers or loose motivation writing each guest attendee. 

//   if guestName = "oz" {
//     alert("Welcome!");
// } else if guestName = "mil" {
//     alert("Welcome!");
// }
// etc....
