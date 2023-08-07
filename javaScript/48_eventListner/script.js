let x = function(e){
    alert("hellow roushan");
}

let y = function(e){
    alert('hellow roushan222!')
}

btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a = prompt("what is your favorite number?");
if(a == 2){
    btn.removeEventListener('click',x)
}