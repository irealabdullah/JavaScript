// undefined 
// null

 let firstName;
 console.log(typeof firstName); //undefined

firstName = "Abdullah";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);

myVariable = "Abdullah";
console.log(myVariable, typeof myVariable);

console.log(typeof null); // javascript main yeh error hai ye --> this is a bug 
// bug , error 



console.log(Number.MAX_SAFE_INTEGER); // this is how long we can store a number 

// BigInt
let myNumber = BigInt(90071992547409915);
console.log(myNumber);

let sameMyNumber = 123n; // this is also big int
console.log(sameMyNumber);
console.log(sameMyNumber+ sameMyNumber);
