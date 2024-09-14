const animalList = ["cats", "dogs", "pokemons", "unicorn", "dragons"];

const users = [
	{ firstName: "Bob", lastName: "Bobbert", age: 31 },
	{ firstName: "John", lastName: "Smith", age: 25 },
	{ firstName: "Bob", lastName: "Smith", age: 27 },
	{ firstName: "Bob", lastName: "White", age: 31 },
];

for (const eachUser of users) {
	console.log(eachUser);
	console.log(eachusers["firstName"]);
	console.log(eachusers["lastName"]);
}

// eachUser:
// { firstName: "Bob", lastName: "Bobbert", age: 31 }
// { firstName: "John", lastName: "Smith", age: 25 }
// { firstName: "Bob", lastName: "Smith", age: 27 }
//  { firstName: "Bob", lastName: "White", age: 31 }

// Object
const pet = {
	petname: "Pepper",
	age: 16,
	haircolor: "White",
};
console.log(pet.haircolor);
console.log(pet["haircolor"]);

for (const eachkey in pet) {
	console.log(eachkey); // "petname", "age", "haircolor"
	console.log(pet[eachkey]); // "Pepper", 16, "White"
}

// eachKey: "petname", "age", "haircolor"
// print value of that key: "Pepper", 16, "White"

//console.log(pet["petname"])
//console.log(pet["age"])
//console.log(pet["haircolor"])
