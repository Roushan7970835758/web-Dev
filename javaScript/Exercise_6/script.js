

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    let titleC = document.getElementById("title").value
    let descC = document.getElementById("desc").value
    localStorage.setItem("todo",JSON.stringify([titleC,descC]))
    console.log(e);
    todo.innerHTML= `
     <h1>${titleC}</h1>
    <p>${descC}</p>
    `
    document.getElementById("title").value="";
    document.getElementById("desc").value ="";
})


deleteBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.removeItem('todo')
    console.log(e);
    todo.innerHTML="";
})

