class RailwayForm{
    submit(){
        alert(this.name + " form submitted for train No. " + this.trainNo)

    }
    cancel(){
        alert(this.name + " form canceled for train No. " + this.trainNo)
    }
    fill(givenname,trainNo){
        this.name =givenname;
        this.trainNo = trainNo
    }
}

let roushanForm = new RailwayForm()
let harryForm  =  new RailwayForm()

roushanForm.fill("Roushan Verma",4455)
harryForm.fill("harry ali",10665)

roushanForm.submit()
harryForm.submit()
roushanForm.cancel()
