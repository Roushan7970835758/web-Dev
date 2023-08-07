// let arr = [3,5]
// let a = arr[0];
// let b = arr[1]; //-------->no need to do like this

let [a,b, ,...rest]= [4,5,8,12,33,4,333,3,3]; // here a=4,b=5
// console.log(a,b,c,rest);

//Spread Oprator --> convert arr into key-value pair
let arr1 = [3,5,8];
let obj1 = {...arr1}
console.log(obj1);

let sum=(v1,v2,v3)=>{
    return v1+v2+v3;
}
console.log(sum(...arr1));

const a1 = 'the',b1='no';
const c1 = {a1,b1}
console.log(c1);

