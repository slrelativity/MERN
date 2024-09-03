
// Modern JS Array
const seaCreatures = ["crab", "swordfish", "jellyfish", "squid"];
const [crab, swordfish, jellyfish, squid] = seaCreatures;
console.log(crab, swordfish, jellyfish, squid);

// Modern JS Variable
let helloVar = "Hello";

// Modern JS Function  (a) aka "helloWorld(" world!" on line 14
const helloWorld = (a ) => {console.log(helloVar + a)}

// To execute:
helloWorld(" world!");

//Modern JS Setting Object Literal Properties to Variables
const donDuck = {
	firstName: "Donald",
	lastName: "Duck",
	age: 80
};

const {firstName, lastName, age} = donDuck
// Logging Object Literal Properties
console.log(firstName, lastName, age)



const objectBeingDestructured = {
    propertyKey1: "propertyValue1",
    propertyKey2: "propertyValue2",
};
const {propertyKey1, propertyKey2} = objectBeingDestructured
console.log(propertyKey2) //returns "propertyValue2"

var beatles = ["Paul", "George", "John", "Ringo"];// [0, 1, 2, 3]

function printNames(names) {
console.log(names[2])
}

printNames(beatles);


//+++++++++++++++++++++++++++++++SCOPE++++++++++++++++++++++++++++++++
var beatles1 = ['Paul1', 'George1', 'John1', 'Ringo1']
function printNames1(names1) {
    var innerScope = "what can access me?"
	for(let i = 0; i < beatles1.length; i++){
		console.log(beatles1[i])

}
//Runs after the loop has completed
console.log()
    function innerFunction() {
        var deepScope = "can innerScope access me?"
    }
}
printNames1(beatles1);


//+++++++++++++++++++++++++++CONST & LET++++++++++++++++++++++++++++++++++
// let CAN be reassigned
//const CAN NOT be reassigned
for (let i = 0; i < 3; i++){
    console.log(i);
}

const skills = ["breaking code", "fixing the bugs", " bootstrap"];
skills.push("tailwind");
console.log(skills);

//+++++++++++++++++++++++++++++DESTRUCTURING+++++++++++++++++++++++

const person = {
	fName: "Bob",
	lName: "Marley",
	emailAddress: "bob@marley.com",
	password: "sekureP@ssw0rd9",
	username: "barley",
	createdAt: 1543945177623,

};

/* Either way OBJECT OR LITERAL below will work
const fName = person.fname;
const lName = ["lName"];
*/
//If you need to change a varible below you would need do 'password: secret' and console log it as 'secret'
const { fName, lName, emailAddress, password: secret, username} = person;
console.log(fName, lName, emailAddress, secret, username);

/*Behind the scene
        1. Creates the variables - fName, lName, emailAddress, password, username
        2 Search for the person.fName, person.lName, person.emailAddress, person.password, person.username
*/


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// AFTER ES6
const { email } = person;
const [firstAnimal] = animals; //adding "," takes the place of an index and moves it one to the right
console.log(email); // Output: bob@marley.com
console.log(firstAnimal); // Output: horse



//Problem 1000: Why did the code produce that output? If applicable, how would you get the index value that did not output?
const exampleVar = "example";
const exampleArr = ["ex", "am", "ple"];
console.log(exampleArr);



//++++++++++++++++++++++++++SPREAD/REST OPERATOR+++++++++++++++++++++++++++++++++++++++
//Creating copies of elements
const person1 = {
	fName: "Bob",
	lName: "Marley",
	emailAddress: "bob@marley.com",
	password: "sekureP@ssw0rd9",
	username: "barley",
	createdAt: 1543945177623,
};

//To change a varible you would write "personCopy1 = {...person} "curly brackets creates OBJECT"
//Behind the scene
    /* 1. Creates an OBECT of personCopy1
        2. Grabs all the key-value from "person" and puts in the personCopy1 */ 
const personCopy1 = {
    ...person,
    fName : "Pepper",
    lName: "Hanes"}
//Uses .notation to locate first name to change it

console.log(person);
console.log(personCopy1);


//another example along with adding to the array at the end
const animalsCopy = [...animals, "unicorn"];
console.log(animalsCopy);


let state = [1, 2, 3, 4, 5];
const useState = [
	//Array index 0; A Getter Function
	function () {return state;},
	//Array index 1; A Setter Function
	function (newStateValue) {state = newStateValue; return state;},
];
const [getter, setter] = useState;

//...previous code above
function update(param1, param2) {
    setter([...param1, param2])
    return state
}
update(getter(), 6)
console.log(state) //Output: [1, 2, 3, 4, 5, 6]

