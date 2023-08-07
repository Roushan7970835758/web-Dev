class Animal{
    Animal(name,color){
        this.name =name;
        this.color=color;

    }
    run(){
        console.log(this.name +" is running ");
    }
    shout(){
        console.log(this.name+" is shouting");
    }

    
}
class Monkey extends Animal{
    eatbanana(){
        console.log(this.name + " is eating bannana");
    }
    hide(){
        console.log(this.name + " is hidding");
    }
}

let ani = new Animal("Bruno","white")
let m = new Monkey("Chimpu","orange")
ani.shout();
m.eatbanana();