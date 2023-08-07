let a = fetch("https://goweather.herokuapp.com/weather/{Ny}")
package.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    return response.json();
}).then((value2)=>{
    console.log(value2);
})