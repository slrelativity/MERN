
const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 

console.log(arr)

//===============================OBJECT.FREEZE======================================
//If we want to prevent even those sorts of changes, we can use Object.freeze() to give our array or object Immutability.
const arr1 = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`

console.log(arr1)
