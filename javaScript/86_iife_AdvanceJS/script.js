let a = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(456)
    },1000)
})

( async()=>{
    let b = await a;
    text.innerHTML+=`${b}<br>`;

    let c = await a;
    text.innerHTML+=`${c}<br>`;

    let d = await a;
    text.innerHTML+=`${d}<br>`;
})()

