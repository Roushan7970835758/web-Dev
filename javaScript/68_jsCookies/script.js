console.log(document.cookie);
document.cookie = "name=Roushan1122334400";
document.cookie = "name2=Roushan11223344002";
document.cookie = "name=Roushan";
let key = prompt("enter your key")
let value  = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);