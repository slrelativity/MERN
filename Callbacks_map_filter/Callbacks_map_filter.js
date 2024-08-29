// =================================================CALLBACKS============================================


//Functions can be stored in vairables like other data types
let data = [1,2,3]; // define our data
let mapNumbers = (numbers, fn) => { //parameters define what a funtion requires
     for(let i = 0; i < numbers.length; i++){ //function that describes how the data is used
         numbers[i] = fn(numbers[i]);

     }
    return numbers;
}


let doubleNumber = (numbers) => { //passing in another funtions ar CALLBACKS (mapNumbers expect one...fn)
     return numbers * 2;
    };

console.log(mapNumbers(data, doubleNumber)); //when funtion is revoked, we pass data through those parameters as an arguement




//==========================================MAP=============================================

//The .map() function is an array method that creates a new array by iterating over each element of the original and applying a callback function to each element. The new array will have the same length as the original array, however, each element is the result of the callback function.

//The .map() function is commonly used when you need to transform the elements of an array without modifying the original array. It is versatile because we can change its behavior based on the callback we pass into it.
let numbs = [1, 2, 3, 4, 5];
let square = (num) => num * num;
let squaredNumbers = numbs.map(square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


//=======================================FILTER=====================================

//The .filter() function is another array method that creates a new array by iterating over each element of the original and applying a callback test for each element. It returns a new array containing only the elements that pass the test specified by the callback.

//.filter() is commonly used when you need to extract specific elements from an array based on certain criteria.
let digits = [1, 2, 3, 4, 5];
let isDefEven = (number) => {
	return number % 2 === 0;
};
    
let evenNumbers = digits.filter(isDefEven);
console.log(evenNumbers); // Output: [2, 4]


//====================================FOREACH==================================


//The .forEach() function is an array method in JavaScript that iterates over each element of the array and executes a callback function for each element. Unlike map and filter, it does not create a new array. Instead, it performs a specific operation or action on each element of the original array.

//forEach() does what we'd expect from a for loop and can be used in the same situations.
let numbrs = [1, 2, 3];
let printNumber = (numb) => console.log(numb);
numbrs.forEach(printNumber); // Output: 1, 4, 9



//========================================FIND====================================
let numbers = [1, 2, 3, 4, 5];
let isEven = (number) => number % 2 === 0;
let evenNumber = numbers.find(isEven); // Output: 2

console.log(evenNumber)


