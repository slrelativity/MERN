// Instead of this:
const divider1 = () => 50/5
divider1()



// into their divider function:
const divider = (a, b) => a/b
divider(4, 2)
divider(20, 4)
divider(6030, 25)


// The same would occur in an example designed to output a string:
const personArr = [
  {
	firstName: "Jane",
	lastName: "Doe"
  },
  {
    lastName: "Smith",
    firstName: "John"
  },
]
const [personOne, personTwo] = personArr
const displayName = (lName, fName ) => `${lName} ${fName} `
console.log(displayName(personOne.lastName, personOne.firstName))
console.log(displayName(personTwo.lastName, personTwo.firstName))




