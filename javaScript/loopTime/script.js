//for loop
let sum=0;

console.time('forLoop')
for(let i =0; i<50; i++){
    sum+=i;
}
console.timeEnd('forLoop')



let i=0;
sum=0;

console.time('whileLoop');
while(i<50){
sum+=i;
i++;
}
console.timeEnd("whileLoop")