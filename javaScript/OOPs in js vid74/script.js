let a ={
    name:"Roushan",
    language:"javaScript",

    run : ()=>{
        alert("self run")
    }

}
console.log(a);

let p ={
    run:()=>{
        alert("run")
    }
}

p.__proto__ ={
    name2: "Jack",
    lname: "Ryan",
}

a.__proto__ = p
a.run()
console.log(a.name);
console.log(a.name2);