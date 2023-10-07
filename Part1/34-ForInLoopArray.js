// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);


console.log("--------------");



for(let index in fruits) //we used in here to print index
{
    console.log(index);
}