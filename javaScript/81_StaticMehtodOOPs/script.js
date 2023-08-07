class Animal{
    constructor(name){
        this._name = name;
    }
    fly(){
        alert("mai urr raha hu");
        
    }
    get (name){
        return this._name;
    }

    set name(newName){
        this._name = newName
    }

}
class Rabit extends Animal{
    eatCarrot(){
        console.log('rabit is eating');
    }
}

let a = new Animal('Bruno')
let b = new Rabit()
a.fly()
console.log(a.name);
a.name = 'Jack'
console.log(a.name);
let c =56;


console.log(a instanceof Animal);
console.log(b instanceof Animal);
console.log(c instanceof Animal);