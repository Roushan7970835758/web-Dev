const obj ={
    roushan:90,
    harry:49,
    sweta:34,
    hemu:67
}
for(let i =0;i<Object.keys(obj).length;i++)
{
    console.log(Object.keys(obj)[i]);
    console.log(obj[Object.keys(obj)[i]]);
}

for(i in obj)
    console.log(obj[i])

const fun=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
}
console.log(fun(3,4,5,5,4))