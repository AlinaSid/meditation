const timer=5;
let amountTime=5*60;

function calculateTime(){
    const calm= document.querySelector(".calm");

    let minutes= Math.floor(amountTime/60);
    let seconds= amountTime%60;
    if(seconds<10){
        seconds="0"+seconds
    }
    calm.textContent=`${minutes}:${seconds}`;

    amountTime--;

    if(amountTime<0){
        stopTimer();
        amountTime=0
    }
 
    function stopTimer(){
        clearInterval(timerID)
    }
    
    

 
}



 let timerID=setInterval(calculateTime,1000)

 const button=document.querySelector(".MyBtn");

 button.addEventListener("click",function(){
     document.querySelector(".player").play;
     document.querySelector(".MyVideo").play;
 })