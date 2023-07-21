const prompt = require("prompt-sync")();

let Rnum = Math.ceil(Math.random()*100);
let chance =0;

do{
var a = prompt("Enter a number between 1-100 ");
a = Number.parseInt(a);
chance++;

let diff = Rnum-a;
if(diff >0)console.log(`the no. is greater `)
else if(diff == 0)break;
else console.log(`the No is smaller`)


}while(a !=Rnum);
console.log(`you score is ${100-chance}`)