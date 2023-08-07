class RailwayForm{
    constructor(givenname,trainNo){
        console.log("constructor called..."+givenname + trainNo);
        this.name =givenname;
        this.trainNo = trainNo
    }
    submit(){
        form.innerHTML+=`${this.name}  form submitted for train No.  ${this.trainNo} <br>`

    }
    cancel(){
        form.innerHTML+=`${this.name}  form canceled for train No.  ${this.trainNo}`
        
    }
    
}

let roushanForm = new RailwayForm("Roushan Verma",4455)
let harryForm  =  new RailwayForm("harry ali",10665)
let harryForm2  =  new RailwayForm("harry ali",554420)

// roushanForm.fill("Roushan Verma",4455)
// harryForm.fill("harry ali",10665)
// harryForm2.fill("harry ali",554420)

roushanForm.submit()
harryForm.submit()
harryForm2.submit()
harryForm2.cancel()
