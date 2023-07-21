const changeBodyRed = ()=>{
    document.body.firstElementChild.style.background="gray"
    document.body.childNodes[2].lastChild.style.color="red"
}


let b = document.body
console.log("first child of b is: ",b.firstChild)
console.log("first Element child of b is: ",b.firstElementChild)
changeBodyRed()
console.log(b.previousElementSibling)
console.log(b.nextElementSibling)
console.log("first element child: ",b.firstElementChild)
console.log(b.lastElementChild)

