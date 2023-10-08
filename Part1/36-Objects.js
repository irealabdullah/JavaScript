// objects reference type  
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index



// how to create objects 

//key value pair
// const person = {name:"Abdullah",age:25}; // how to create objects
// console.log(person);

//----------------------------------------------

//we can also store array in objects

const person = {
    name: "Abdullah",
    age: 25,
    hobbies: ["programming", "sleeping", "eating"]
}
console.log(person);

//----------------------------------------------

// how to access data from objects 
console.log(person["name"]);
console.log(person["age"]);
console.log(person.hobbies);

// how to add key value pair to objects
person.Father = "Tariq"; //add using . notation 
person["Gender"] = "male"; //add using [] notation
console.log(person);

console.log("--------------------------------------");
console.log(person["name"]);
console.log(person["age"]);
console.log(person.hobbies);
console.log(person.Gender);
console.log(person.Father);