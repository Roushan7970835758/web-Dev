

do {
    let age = prompt("Enter your age");
    age = Number.parseInt(age);
    if(age>100){
        location.href = "www.google.com";
    }
    else if(age <0){
        console.error();
        alert("Not a Valid Age")
        document.body.style.background = "red"
    }
    else if (age < 18) {
        alert("You can't drive");
        document.body.style.background = "purple"
    }
    else if (age == 18) {
        alert("You can apply for DL")
        document.body.style.background = "yellow"
    } else {
        alert("you can drive")
        document.body.style.background = "green"
    }
} while (confirm("do you want to inquire againg"))
