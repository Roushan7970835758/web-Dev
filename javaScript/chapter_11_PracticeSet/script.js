
// Q-1
class complexNum{
    constructor(real,imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    get real(){
        return this._real  // _ is added to avoid name collision
    }
    get imaginary(){
        return this._imaginary
    }

    set imaginary(newImaginary){
        this._imaginary= newImaginary;

    }
    set real(newReal){
        this._real = newReal
    }
    

    add(num){
        let r = this.real + num.real;
        let i = this.imaginary + num.imaginary;

        return  new complexNum(r,i)
    }
}
let a = new complexNum(2,3);
a.real =10;
a.imaginary=10;
let b = new complexNum(4,5);
let c = a.add(b);
console.log(c.real + " "+ c.imaginary);


//Q-5




// //Q-3
// class Human{
//     walking(){
//         console.log("human is walking");
//     }
// }
// class Student extends Human{
//     walking(){
//         console.log("Student is walking");
//     }
// }

// let s = new Student();
// s.walking()

// //Q-4
// console.log(s instanceof  Human);