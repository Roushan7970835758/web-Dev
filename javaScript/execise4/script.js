 
 temp = ()=>{
    document.querySelector("#contentId").classList.toggle("content");

   
 }
function updateClock(){
   const now = new Date();

   const sec = now.getSeconds().toString();
   const min = now.getMinutes().toString();
   let hour = now.getHours();
   var maredian ='AM'
   if(hour >12){
      hour -= 12;
      maredian= 'PM'
   }
   hour = hour.toString();



   
   var currTime = `${hour}:${min}:${sec}${maredian}`;

   const timeElement = document.getElementById('contentId');
   timeElement.textContent = currTime;

   document.querySelector("#contentId").classList.toggle("red");
   if(document.querySelector("#contentId").classList.contains('red') == false){
      document.querySelector("#contentId").classList.add("blue");
   }else{
      document.querySelector("#contentId").classList.remove("blue");
   }
   


}

setInterval(updateClock, 1000);