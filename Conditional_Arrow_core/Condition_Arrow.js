//Problem 1
//Write an arrow function that checks to see if a user is older than 18.
//If they are older than 18, the output should be
//If they are not older than 18, the output should be:

const age = 18;

const checkAge = (age) =>
    age === 17 ? "You are good to go!" : "Sorry! You must be 18 or older!";
    console.log(checkAge(age)) ;

//The conditional logic should be written with a ternary operator.



// Problem 2
// Write an arrow function that checks to see if it is currently raining.
// If it is raining, the output should be:
// If it is not raining, the output should be:

const weather = "rain";

const checkWeather = (weather) => {
    return weather === "rainy" ? "Get your rain jacket!" : "No rain on today's forecast";

}
console.log(checkWeather(weather));
// The conditional logic should be written with a ternary operator.

//Problem 3
//Write an arrow function that checks to see if a number is even.
//If it is even, the output should be:
//If it is not even, the output should be:


const number = 2
const oddOrEven = (number) =>
    number % 2 === 0 ?  "That's an even number!" : "That's an odd number!"

console.log(oddOrEven(number));
//The conditional logic should be written with a ternary operator.

//Problem 4
//Write an arrow function that takes in two parameters and checks whether one number is greater than another.
//If the number is greater, the output should be:

const compareNums = (num1 , num2) =>
    num1 > num2 ? num1 + " is more than" + num2 : num1 + " is less than" +  num2;

//If the number is less than the other number, the output should be:

const number1 = 15;
const number2 = 13;
console.log(compareNums(number1, number2));

//The conditional logic should be written with a ternary operator.