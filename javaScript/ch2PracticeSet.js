const prompt = require("prompt-sync")();
// //Q1--
// let a = prompt("Enter your age. ")
// let age = parseInt(a);

// console.log(a>=21? "You are elder": a>=9? "You lie beetween 10-20": "you are younger")

// //Q2--https://www.w3schools.com/signup/index.php
// let temp = prompt("enter your name ");
// switch(temp){
//     case "roushan":
//         console.log("your pasport has been prepared");
//         break;
//     case "aditya":
//         console.log("Your passport had need varivication");
//         break;
//     case "sumit":
//         console.log("you can't apply for passport")
//         break;
//     default:
//         console.log("Thanks for visiting passport seva kendra")
// }

let a = prompt("enter the number ");
let num = parseInt(a);
if(num%2 == 0 && num%3 == 0){
    console.log("the no. is divisible by 2,3");
}
else console.log("the  no is not divisible by 2,3")

console.log("you can", (age<=18? (age==18? 'apply for DL':"not drive"): "can drive"))

