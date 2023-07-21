let arr = [4,4,5,4,5,48,"roushan",8.33];
console.log(arr.toString())

//join method
console.log(arr.join("-"))

//removes last element from the array
console.log(arr.pop())

//add element in array
console.log(arr.push("kumar"))
console.log(arr.toString())


//shift
console.log(arr.shift())
console.log(arr.unshift(44)) //add element and return arr length
console.log(arr.toString())

//sorting
console.log(arr.sort())

//splice
arr.splice(5,1,23,24,56,76,55)
console.log(arr.toString())

//reverse
console.log(arr.reverse().toString())

//delete
delete arr[3]
delete arr[2]
delete arr[1]
delete arr[0]
delete arr[6]
delete arr[7]
console.log("after deleting "+arr.toString());

console.log(arr[1])