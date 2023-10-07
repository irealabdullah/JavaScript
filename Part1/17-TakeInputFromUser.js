// nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}

let emailId = "irealabdullah@gmail.com";
let pass = "Poloking123"

if(emailId === "irealabdullah@gmail.com")
{
    console.log("You email is correct");
    if(pass = "Poloking123" )
    {
        console.log("Login Successful...")
    }
    else{
        console.log("Password incorrect");
    }
}

else{
    console.log("Login Failed...");
}

//How to take input from user 
// we use prompt and its type is string so if we want to convert string to integer then we do like this 
// +prompt

let emailAddress , Password;

console.log("Enter Email ID:" + prompt);

if(emailAddress === "irealabdullah@gmail.com")
{
    console.log("Email is Correct..")
    console.log("Enter password" + prompt)
    if(Password === "poloking123")
    {
        console.log("Login Successful");
    }
    else
    {
        console.log("login Failed");
    }
}

else{
    console.log("You entered wrong details");
}

