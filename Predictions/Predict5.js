// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //console logging the "value"
console.log(secondKey); //console logging the "secondkey" [1,5,1,8,3,3]
console.log(secondKey[0]); //console "secondkey" at index [0] - 1
console.log(willThisWork); //console "willThisWork" which is now secondkey at index [1] - 5
