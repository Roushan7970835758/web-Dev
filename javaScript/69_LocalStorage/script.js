let key = prompt("Enter key")
let value = prompt("enter value")

localStorage.setItem(key,value)


console.log(`the value at ${key} is ${localStorage.getItem(key)}`);

if(key == 'red' || key == 'blue'){
    localStorage.removeItem(key)

}
if(key == 0){
    localStorage.clear()
}