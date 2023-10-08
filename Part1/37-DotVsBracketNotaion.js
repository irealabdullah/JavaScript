// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "Abdullah",
    age: 25,
    "Abdullah hobbies": ["Sleep", "eat", "program"]  // we have two words
}

console.log(person["Abdullah hobbies"]); // see we can use bracket with two words
console.log("---------------------")

person.key = "irealabdulllah@gmail.com"; // see difference between .  --> key = irealabdulllah@gmail.com
console.log(person) 


person[key] = "irealabdulllah@gmail.com"; // we use [] here  --> email = irealabdulllah@gmail.com
console.log(person);

