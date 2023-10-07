// and  or operator 


let firstName = "Abdullah Tariq";

if(firstName[0] === "A"){
    console.log("your name starts with A")
}
else{
    console.log("Your name doesnot start with A")
}

let age = 19;

if(age > 18){
    console.log("you are above 18");
}

if(firstName[0] === "A" && age>18){
    console.log("Name starts with A and above 18");
}else{
    console.log("Your name doesnot start with A and you are below 18");
}

let Fname = "Abdullah";
let MyAge = 25;

if(Fname[0] === "A" || MyAge>18){
    console.log("Your name is Abdullah and you are 25");
}else{
    console.log("wrong identity");
}