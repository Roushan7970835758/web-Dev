//sorting array

let num = [22,6,9,2,6];
let compare=(a,b)=>{
    return b-a;
}
num.sort();
console.log(num.toString())
num.sort(compare)
console.log(num.toString())
