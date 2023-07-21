// prompt always takes input in string format
const prompt = require("prompt-sync")();
let a = prompt("Hey what's your age ?");
console.log(typeof a);

a= Number.parseInt(a);
console.log(typeof a)

