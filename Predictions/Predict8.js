// Problem 8
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        console.log(name + ' was found at index ' + index);//The inner scope can see the Global scope to run the console.log const name is names at index
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);
