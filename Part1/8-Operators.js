// typeof operator 

// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
//------------
// BigInt
// Symbol

let age = 22; 
let firstName = "Abdullah";
var Age = 30;
 console.log(typeof age);
console.log(typeof Age);
console.log(typeof firstName);


// // 22 -> "22"
// // convert number to string. 

age = age + "";
console.log(typeof(age)); //"22"


// // convert string to number. 

let number = "35"
console.log(typeof number);
number = Number(number);  // Here we are doing conversion by using Number()
console.log(typeof number);

let Myage = +"18";// Here we are doing conversion by using +

console.log("Age is " + typeof Myage);