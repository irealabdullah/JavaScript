// how to clone array 

// how to concatenate two arrays

let array1 = ["BANANA","APPLE"];
let array2 = ["Mango","Guava"];

//console.log(array1===array2); //false


let arr1 = ["BANANA","APPLE"];
let arr2 = arr1;
//console.log(arr1 === arr2); //true


let arrA= ["item1","item2"];
let arrB= ["item1","item2"];
//console.log(arrA === arrB) //false --> arrA != arrB

//-------------------------------------------
//How to clone an array :)

//This below method is not a good way to clone array

let arrayA = ["item1","item2"];
let arrayB = ["item1","item2"];
arrayA.push("item3");
//console.log(arrayA);
//console.log(arrayB);


//-------------------------------------------
//this is how we clone 

// Slice method to clone

let Arry1 = ["item1","item2"];
let Arry2 = Arry1.slice(0); // 0 index se start kare ga aur sara array ka clone bana de ga 
// Arry1 and Arry2 are both different ARRAYS in heap
console.log(Arry2);

//concat method to clone

let arrayyy1 = ["item1","item2"];
let arrayyy2  = [].concat(arrayyy1);

console.log(arrayyy2);

//NEW WAY TO CLONE -> WE USE SPREAD OPERATOR

let arryy1 =["item1","item2"];
let arryy2 = [...arryy1];

console.log(arryy2);

// performance wise slice method is great 
// we use spread operator 



//------------------------------------

//assignment 

let array0 = ["item1","item2"];
//let array5 = array0.slice(0).concat("item3","item4","item5");

// let array5 = [].concat(array0,["item3","item4","item5"]);

//let array5 =[...array0,"item3","item4","item5"];

// console.log(array5);

//---------
let oneMoreArray = ["item3","item4","item5"]
let array5 = [...array0, ...oneMoreArray];

console.log(array5);












