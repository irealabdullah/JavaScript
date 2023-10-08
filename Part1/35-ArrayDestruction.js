// array destructuring 

//const myArray =["item1","item2","item3"];
const myArray =["item1","item2","item3","item4","item5"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// console.log("value of myVar1: ",myvar1)
// console.log("value of myVar2: ",myvar2)


//-----------------------------------------------------------
//there is shortcut of doing this above thing by destructing method 
//we use array destructing to write short code -->simple words
let [myVar1,myVar2,myVar3] = myArray
console.log("value of myVar1: ",myVar1)
console.log("value of myVar2: ",myVar2)
console.log("value of myVar3: ",myVar3)

//we can also use const keyword 
//THESE WILL ACT AS 
//const[Myvar1,Myvar2,Myvar3] = myArray;


//let [myVar1, , myVar2] = myArray // we can also use this concept , ,

//if i want to make new array then 
let mynewArray = myArray.slice(3);
console.log(mynewArray);
