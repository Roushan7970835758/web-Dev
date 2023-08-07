// console.log("start");

// setTimeout(function(){
// console.log("this is setTimeout");
// },1000)

// console.log('end');

function loadScript(src,callback){
    var script  = document.createElement('script');
    script.src = src;
    script.onload=()=>{
        console.log("loaded script with src: " + src)
        callback(null,src);
    }
    
    script.onerror=()=>{
        console.log("eroor loading script with src: "+src);
        callback(new Error("src got some error "))
    }
    document.body.appendChild(script);
}

loadScript("https://cdnm.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",(error,src)=>{
    if(error){
        console.log(error)
        return;
    }
    alert('script is loaded');
    alert('script source is: '+script.src)
})