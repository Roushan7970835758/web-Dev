// console.log("har\"".length);

// let str = "roushan is a good boy";

// console.log(str.includes('s'))
// console.log(str.endsWith('y'))

let str = "please give rs1000";
console.log(str.slice(0,12))

var ans = "";
for(let i=0; i<str.length;i++)
{
    if(i==3)ans+='x';
    else ans+=str[i];
}
console.log(ans)