let a = [
    "Initilizing Hack tool...",
    "Connecting to facebook...",
    "Connecting to server 8000...",
    "Connection failed. Retrying...",
    "Connecting to server 3000:80.72.44.5...",
    "Connected sucessfully....",
    "Username Roushan Verma...",
    "Trying Brute Force...",
    "200K passwords tried....",
    "Match not found...",
    "Another 200K passwords tried....",
    "Match found...",
    "Accessing Account...",
    "Hacked Successful..."

]

const sleep = (second)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {resolve(true)
            
        }, second * 1000)
    })
}
const showHack=async (message)=>{
    await sleep(2)
    // console.log(message);
    const textToAnimate=message;
    const textContainer = document.getElementById("text")
    function animateText() {
        let charIndex = 0;
        const interval = setInterval(() => {
          text.innerHTML += textToAnimate[charIndex];
          charIndex++;
          if (charIndex === textToAnimate.length) {
            clearInterval(interval);
          }
        }, 100);
    }

        // window.addEventListener("load", animateText);

        
}

(async ()=>{
    for(let i=0;i<a.length;i++){
        await showHack(a[i])
    }
})()