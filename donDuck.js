const seaCreatures = ["crab", "swordfish", "jellyfish", "squid"]
const [crab, swordfish, jellyfish, squid]=seaCreatures;
console.log(crab, swordfish, jellyfish, squid)

// Modern JS Variable
let helloVar = "Hello"
	
// Modern JS Function
const helloWorld =  (a) => {
    console.log(helloVar + a)
}
// To execute:
helloWorld(" world!")


// // Modern JS Object literal
// const donDuck = {
//     firstName: "Donald",
//     lastName: "Duck",
//     age: 80,
//  }
//  //Modern JS Setting Object Literal Properties to Variables
//  const {firstName, lastName, age} = donDuck 
//  // Logging Object Literal Properties
//  console.log(firstName, lastName, age)
 
 
//  const objectBeingDestructured = {
//     propertyKey1: "propertyValue1",
//     propertyKey2: "propertyValue2"
//  }
//  {propertyKey1, propertyKey2} = objectBeingDestructured
//  console.log(propertyKey2) //returns "propertyValue2"

// var beatles = ["Paul", "George", "John", "Ringo"];

// function printNames(names) {
//     console.log(names[2])
// }


// printNames(beatles);

// var beatles = ['Paul', 'George', 'John', 'Ringo']
// function printNames(names) {
//    var innerScope = "what can access me?"
// 	for(let i = 0; i < beatles.length; i++){
// 		console.log(beatles[i])
// }
// //Runs after the loop has completed
// console.log(i)
//    function innerFunction() {
//       var deepScope = "can innerScope access me?"
//   }
// }
// printNames(beatles); 

const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

const {firstName, lastName} = person

console.log(firstName, lastName);

// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// // AFTER ES6
// const { email } = person;
// const [firstAnimal] = animals;
// console.log(email); // Output: bob@marley.com
// console.log(firstAnimal); // Output: horse


 //Problem 1000: Why did the code produce that output? If applicable, how would you get the index value that did not output?
 const exampleVar = "example";
 const exampleArr = ["ex", "am", "ple"];
 console.log(exampleArr);
     
 //1. Prediction of the example output should be in commented-out code here.
 //2. The actual output
 //3. Answering any questions associated with the problem block here.
     
 //Problem 2: ...ect
 
 