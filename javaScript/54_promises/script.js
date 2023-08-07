let promise = new Promise(function (resolve, reject) {
    alert("hello")
    resolve(56)
    
})



console.log('this is me');

setTimeout(() => {
    console.log("it will come after 2 sec")
}, 2000);

console.log("my name is roushan");

console.log(promise);


//fetch google.com homepage  ==> console.log("google.com homepage done")
//fetch data from the data api
//fetch pictures from the server
//print downloading
//rest of script