
let starter  = document.getElementById('start');
let stoper = document.getElementById('stop');


let music = new Audio('music.mp3');



starter.addEventListener('click',()=>{
    timer(1)
    let i=1
    setInterval(() => {
        timer.innerHTML=i;
        i--
    }, 1000);
    
})
start2.addEventListener('click',()=>{
    timer(3)
    let i=3
    setInterval(() => {
        timer.innerHTML=i;
        i--
    }, 1000);
})
start3.addEventListener('click',()=>{
    timer(5)
})
start4.addEventListener('click',()=>{
    timer(10)
})
start5.addEventListener('click',()=>{
    timer(15)
})







stoper.addEventListener('click',()=>{
    stopAlarm();
})


function timer(t){
    setTimeout(() => {
    music.play()
    }, t*1000);
}
function stopAlarm(){
    music.pause();
}
