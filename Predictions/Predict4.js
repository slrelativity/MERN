// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;//index 1
const [,,,second] = numbers; //index 3
const [ , , , , , , , ,third] = numbers; //index 8
//Predict the output
console.log(first === second);//false
console.log(first === third);//true
//const first is at index 1(2) === const second is at index 3(5)
//const first is at index 1(2) === const second is at index 8(2)
