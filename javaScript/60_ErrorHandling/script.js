

try {
    let age = prompt("Enter your age ")
    age = Number.parseInt(age)
    if(age>150){
        throw new ReferenceError("age is not true")
    }
    console.log(rous);
    throw new ReferenceError("rous is not good")
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}