let num =[14,37,6,70,9];
// num.forEach((e,i,num)=>{
//     console.log(e,i,num);
// });

// num.forEach(v=>{
//     console.log(v);
// })
// console.log(b)
let compare = (a,b)=>{
    return a-b;
}

num.forEach((v,i,num)=>{
    console.log(v*i,num.sort(compare))
});

