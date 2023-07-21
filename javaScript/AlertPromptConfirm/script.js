alert("enter a numbeer")
let a = prompt("enter here","007") //always takes input in string
alert("you enter a of type "+typeof(a))
a= Number.parseInt(a)

let write = confirm("do you want to show it")
if(write == true){

    document.write(a)
}else{
    document.write("pls allow me to write")
}