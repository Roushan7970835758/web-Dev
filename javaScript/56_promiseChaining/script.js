// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("resolve after 2 sec");
//     },2000 );
// })

// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve,reject)=>{
//         resolve("promise 2")
//     })

//     return p2;
// }).then((value)=>{
//     console.log("we are done");
// }).then((value)=>{
//     console.log("we are pakka done");
// })


//loadscript function by promises

const loadscript = (src) => {
    return new Promise((reslove, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            reslove("script has been loaded sir")
        }
        script.onerror = () => { reject(0) }
    })
}


let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value);
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")

}).then((value)=>{
    console.log("second script ready");
}).catch((error) => {
    console.log("we are sorry but we are having problems loading this script");
})