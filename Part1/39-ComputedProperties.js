// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

//Hum ne aisa banana hai 
// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

const obj1 = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj1);
console.log("---------------------")

const obj ={
    key1 : value1,
    key2 : value2
}

console.log(obj);

console.log("---------------------")
const objx = {};
objx[key1] = value1;
objx[key2] = value2;
console.log(objx);

