// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// two ways to iterate objects
// 1) for in loop 
// 2) Object.keys 

for(let key in person){
     // console.log(`${key} : ${person[key]}`);
     console.log(key," : " ,person[key]);
 }


 //------------------------------------
 console.log(Object.keys(person));
 //------------------------------------
 console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person))); // see if this is array or not 
console.log(val);

for(let key of Object.keys(person)){
     console.log(person[key]);
}