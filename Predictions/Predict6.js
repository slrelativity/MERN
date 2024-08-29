// Problem 6
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
    var name = names[index];
    console.log(name + ' was found at index ' + index);// loops through and prints each name in the array along with their index
    }
    console.log('name and index after loop is ' + name + ':' + index); //prints the string along with Ringo and 4
    }
    actuallyPrintingNames();
}
printNames(beatles);
//3 scopes
//var beatles is the global scope
//it's looping through and the length ends at 4 and ends the loop then goes to the second console log
