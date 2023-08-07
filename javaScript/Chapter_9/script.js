// Q-1
// function loadScript (src,callback) {
//     let script = document.createElement("script")
//     script.src = src;
//     script.onload = ()=>{
//         callback(script)
//     }
//     document.body.append(script)
    
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",(script)=>{
//     alert("script is loaded")
//     alert(script.src)
// })

const loadScript = async(src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script")
        script.src = src
        script.onload =()=>{
            resolve(src)
        }
        document.head.append(script)
    })
}

const main2 = async()=>{
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
    console.log(a);
}
main2();