class RailwayForm{
    constructor(givenname,trainNo,address){
        console.log("constructor called..."+givenname +" " + trainNo+" "+address);
        this.name =givenname;
        this.trainNo = trainNo
        this.address = address;
    }
    preview(){
        form.innerHTML+=`${this.name} Your form is for train No. ${this.trainNo}  and your address is ${this.address} <br>`
    }
    submit(){
        form.innerHTML+=`${this.name}  form submitted for train No.  ${this.trainNo} <br>`

    }
    cancel(){
        form.innerHTML+=`${this.name}  form canceled for train No.  ${this.trainNo}`
        
    }
    
}

let roushanForm = new RailwayForm("Roushan Kumar",80833,"Patna")
roushanForm.submit()
roushanForm.preview()