// Method 1: Using prompt() function 
let name = prompt("What is your name?"); 
document.writeln("Hello, " + name + "!"); 
// Method 2: Using confirm() function 
let response = confirm("Are you sure?"); 
if (response) { 
document.writeln("You clicked OK!"); 
} else { 
document.writeln("You clicked Cancel!"); 
} 
// Method 3: Using HTML form and JavaScript 
let form = document.getElementById("myForm"); 
let inputField = document.getElementById("myInput"); 
form.addEventListener("submit", function(event) { 
event.preventDefault(); 
let inputValue = inputField.value; 
document.writeln("You entered: " + inputValue); 
}); 
// Method 4: Using JavaScript readline() function (Node.js) 
// Note: This method only works in Node.js environment 
const readline = require("readline"); 
const rl = readline.createInterface({ 
input: process.stdin, 
output: process.stdout 
}); 
rl.question("What is your name? ", function(answer) { 
console.log("Hello, " + answer + "!"); 
rl.close(); 
});