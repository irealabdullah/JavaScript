// while loop in array 
const fruits = ["apple", "mango", "grapes"];
const fruits2 = []; // khali array
let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase()); //khali array main push kardia hai 
    i++;
}
console.log(fruits2);