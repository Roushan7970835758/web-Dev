const prompt = require("prompt-sync")();
let a = prompt("enter Your age. ");

let age = parseInt(a);


// if(age<18){
//     console.log("You are under 18 can't drive");
// }else if(age == 18){
//     console.log("you can apply for learning DL");
// }else{
//     console.log('You can drive')
// }

console.log("you can", (age<=18? (age==18? 'apply for DL':"not drive"): "can drive"))