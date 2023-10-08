// spread operator
// we used spread operator in arrays [we cloned array using spread operator]and now we are going to use with objects

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

//cloning array using spread operator
const newArray = [...array1, ...array2, 89, 69];
//const newArray = [..."123456789"]; // these will spread alehda alehda
console.log(newArray);


console.log("--------------");
// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
  //key1:"Value3" // value ko override karde ga 
};
//console.log(obj1); 

const obj2 = {
  //key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};
//console.log(obj2);

console.log("--------------");
const CloneObj1 ={...obj1};
console.log(CloneObj1);

//const newObject = { ...obj2, ...obj1, key5: "value5" };
//console.log(newObject);

const mYoBJ = {..."abc"}; //find position of abc --> return you index
console.log(mYoBJ);

//const newObject = { ...["item1", "item2"] }; //index show hoo ga
//console.log(newObject);

const newObject = { ..."abcdefghijklmnopqrstuvwxyz" }; //index show hoo ga
console.log(newObject);
