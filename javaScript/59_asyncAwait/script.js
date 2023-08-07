
async function rous() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" delhi temp is: 27' C")
        }, 2000);
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("banglore temp is: 21' C")
        }, 5000);
    })

    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)

    console.log("Fetching Delhi Weather Please wait...");
    let delhiW = await delhiWeather
    console.log("Feched Delhi Weather: " + delhiW);
    console.log("Fetching banglore Weather Please wait...");


    let bangloreW = await bangaloreWeather
    console.log("Feched Banglore Weather: " + bangloreW);
    return[delhiW,bangloreW]



}

const harry = ()=>{
    console.log("Hey I am harry and I am not waiting ");
}
console.log("welcome to weather control room")
let a = rous()
let b = harry();
a.then((value)=>{
    console.log(value);
})


const main1 = async()=>{
    console.log("Welcome to weather control room");
    let a = await rous()
    let b = await harry()

    a.then((value)=>{
        console.log(value);
    })
}
main1()
