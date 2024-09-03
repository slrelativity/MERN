// Functional
function greet(name) {
    return `Hello, ${name}!`;
    }
 console.log(greet('Cleetus')); // Output: Hello, Cleetus!


 // Object Oriented
class Greeter {
    constructor(name) {
        this.name = name; 
    }
    greet() {  
       return `Hello, ${this.name}!`; 
    }
}
const greeter = new Greeter('Jimbo');
console.log(greeter.greet()); // Output: Hello, Jimbo!
