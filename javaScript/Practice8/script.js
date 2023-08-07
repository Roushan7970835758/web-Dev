// //Q-1
// btn1.onclick = () => {
//     alert('you clicked btn 1')
// }

// btn2.onclick = function () {
//     alert('you have clicked btn 2')
// }
// let x = document.getElementsByClassName('btn3')[0];

// x.onclick = function () {
//     alert('you have clicked on btn 3')
//     prompt('what is your age')
// }

// let y = document.getElementsByClassName('btn4')[0];
// y.onclick = function () {
//     alert('you have clicked on btn 4')
//     prompt('what is your age')
// }



// myLink.addEventListener('click', function (e) {
//     // location.href = "https://google.com"
//     console.log(e);
//     window.open('https://www.google.com', '_blank')

// })

// myLink2.addEventListener('click', function () {
//     window.open('https://www.fb.com', '_blank')
// })

// myLink3.addEventListener('click', function () {
//     window.open('https://www.twittew.com', '_blank')
// })


// const fetchContent = async(url)=>{
//     con = await fetch(url);
//     let a = await con.json()
//     return a;
// }

// setInterval(async function(){
//     let url = "https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// },3000)

// temp = ()=>{
//     document.querySelector("#bulb").classList.toggle("yellow")
    
// }
// setInterval(temp,100)

temp = ()=>{
    document.querySelector("#bulb").classList.toggle("red")
    if(document.querySelector("#bulb").classList.contains("red") == false){
        document.querySelector("#bulb").classList.toggle("blue")
    }
    
}
setInterval(temp,200)


// temp = ()=>{
//     document.querySelector("#bulb").classList.toggle("blue")
    
// }
// setInterval(temp,300)