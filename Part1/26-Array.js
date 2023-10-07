// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

let fruits = ["apple", "mango", "grapes"];
let numbers = [1,2,3,4];
let mixed = [1,2,2.3, "string", null, undefined];

console.log(mixed);
console.log(numbers);
console.log(fruits[2]);




let electronics = ["mouse", "keyboard", "ram"];
let obj = {}; // object literal
console.log(electronics);
electronics[1] = "Rom";
console.log(electronics);
console.log(typeof electronics);
console.log(typeof obj);
console.log(Array.isArray(electronics)); // it will tell you that this is array
console.log(Array.isArray(obj));

// all the reference type are of object type 
// array indexing 