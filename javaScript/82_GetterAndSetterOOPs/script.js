class Animal{
    constructor(name){
        this.name = name;
    }
    walk(){
        alert("Animal "+Animal.capitalize(this.name)+" is walking ");
        // this.capatalize does't work here
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}

j=new Animal('jack')
j.walk();

// console.log(j.capitalize('temp')); // this does't work