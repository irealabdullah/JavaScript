// function expression 
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }


const singHappyBirthday = function (){ //This is called function expression 
    console.log("happy birthday to you ......"); //print
}

//--------------------------------
const sumThreeNumbers = function(number1, number2, number3){
    return number1 + number2 + number3; //return
}
//--------------------------------

const Addnumbers = function (num1, num2 ,num3){
    return num1+num2+num3;
}
console.log(Addnumbers(25,30,25));
//--------------------------------


// isEven
// input : 1 number 
// output : true , false 

const Even = function (num)
{
    return num %2 === 0 ;}

console.log(Even(13));
//--------------------------------

// function 
// input : string 
// output: firstCharacter 

const firstChar = function (anyString){
    return anyString[0];
}

console.log(firstChar("zbc"));

//----------------------------------------
// function 
// input : array, target (number)
// output: index of target if target present in array 

const FindNum = function (Array, Enternum)
{
    for(let i = 0; i<=Array.length; i++)
    {
        if(Array[i] === Enternum)
        {
            return i;
        }
    }
    return -1;
}

const MyArray = [2,3,8,9];

let numx = FindNum(MyArray,9)

console.log("Index number:" + numx); 

