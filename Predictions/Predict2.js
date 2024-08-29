const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);//Elon
console.log(employeeName);//Will not run. employeeName has not been defined


