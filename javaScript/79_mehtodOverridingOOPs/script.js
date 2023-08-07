class Employee{
    constructor(name){
        console.log(`${name} Employee constructor is here`);
        this.name =name
    }
    login(){
        console.log("Employee has logged in");
        
    }
    logout(){
        console.log(`Employee had logged out`);

    }
    requestLeaves(leaves){
        console.log(` Employee has requested ${leaves} leaves --Auto Approved`);

    }
}

class Programmer extends Employee{
    // constructor(){ --> this constructor is automatically created
    //     super()
    // }
    constructor(name){
        super(name) // compulsury .. should be on first line
        console.log(`This is newly written constructor `);
    }
    requestCoffee(x){
        console.log(`Employee has requested ${x} cofees`);
    }
    requestLeaves(leaves){
        // console.log(`Employee has requested ${leaves+1 } one extra leaves`);
        super.requestLeaves(2)//parent's request leave method runs
        console.log(`one day extra is given `);

    }
}

let e = new Programmer("Roushan")
e.login()
e.requestLeaves(2)
e.requestCoffee(1);
