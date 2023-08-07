let p1 =new Promise((resolve,reject)=>{
    alert("hey i am NOT resolved")
    setTimeout(() => {
        resolve(1);
    }, 2000);
})
p1.then(()=>{
    console.log("hurray");
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve (4);
        }, 6000);
    })
}).then((value)=>{console.log(value);})
p1.then(()=>{
    alert("congrats this promise is now resolved");
})