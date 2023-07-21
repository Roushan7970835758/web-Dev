//Q-1
// let temp =document.body.firstElementChild.childNodes[1];
// temp.style.color ="blue"

//Q-2


//Q-3
let temp =document.body.firstElementChild.lastElementChild;
temp.style.color ="green"

//Q-4
Array.from(document.getElementsByTagName("li")).forEach(element =>{
    element.style.background = "cyan";
})