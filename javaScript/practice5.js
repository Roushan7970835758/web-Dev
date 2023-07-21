const prompt = require("prompt-sync")();

// Q1-
// let arr = [4,3,4];
// let num = prompt("enter a number to add to array",arr)
// let new_num = Number.parseInt(num);

// arr.push(new_num);
// console.log(arr)

//Q2-
// do{
// var num =prompt("enter a number ");
// num = Number.parseInt(num);
// arr.push(num);

// console.log(arr.toString())

// }
// while(num != 0)


//Q3-
let arr2 = [4,3,66,9,40,30,10,200,55];
// let divisibleBy10 = (n)=>{
//     if(n%10 == 0)
//     return n;
// }

let ans = arr2.filter(n=>{
    return (n%10 ==0);
})
console.log(ans)


//Q4-
// let arr2 = [4,3,66,9,40,30,10,200,55];

// let new2 = arr2.map((n)=>{
//     return (n*n)
// })
// console.log(new2.toString())

// Q5-
// let num =prompt("Enter the number ")
// num =Number.parseInt(num);

// let arr =[];
// for(let i=0; i<num;i++){
//     arr.push(i+1);
// }


// let multi =(h1,h2)=>{
//     return h1*h2;
// }
// let fact = arr.reduce((h1,h2)=>{
//     return h1*h2;
// })


// console.log(`the factoril of ${num} is `+ fact)


