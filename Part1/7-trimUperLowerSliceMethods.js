// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "    Abdullah Tariq";
console.log(firstName);
console.log(firstName.length);
firstName = firstName.trim(); // "Abdullah Tariq" 
console.log(firstName)

console.log(firstName.length);
firstName = firstName.toUpperCase();
console.log(firstName);
firstName = firstName.toLowerCase();
console.log(firstName);

//start index 
// end index

//start from 0 index and go to 8 index 
let str = firstName.slice(0,8);
console.log(str.toUpperCase());

let newString = firstName.slice(1); // bdullah tariq
console.log(newString);