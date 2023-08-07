class password{
    constructor(){
        this.pass ="";
    }

    generatePassword(len){
        let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let num  = '1234567890'
        let spChar = '!@#$%^&*()_+'

        let i=0;
        while(i<len){
            this.pass+=char[Math.floor(Math.random()*char.length)];
            this.pass+=num[Math.floor(Math.random()*num.length)];
            this.pass+=spChar[Math.floor(Math.random()*spChar.length)];
            i+=3  
        }
        this.pass = this.pass.substr(0,len);
        return this.pass;
        
    }

}


function addTask(){
    if(document.getElementById('inputField').value ===''){
        alert("enter the length of password")
        return;
    }
    let len = parseInt(document.getElementById('inputField').value);   
    let alfa = new password();
    let realPass = alfa.generatePassword(len);
    console.log(realPass)
    resultP.innerHTML = `<h1>The password of length: ${len} is ${realPass}</h1>`


}
document.getElementById("inputField").addEventListener("keydown",(e)=>{
    if(e.keyCode === 13){
        e.preventDefault();
        document.getElementById("submit").submit();
    }
})
