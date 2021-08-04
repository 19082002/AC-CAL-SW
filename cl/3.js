var timer=document.getElementById('timer');
var hr=document.getElementById('hr');
var min=document.getElementById('min');
var sec=document.getElementById('sec');
var ap=document.getElementById('ap');
var start=document.getElementById('start');

var currenttime;
var alarmelement;
var activealarm=false;

var sound=new Audio("py.mp3");
sound.loop=true;

function showtime(){
    var now=new Date();
    var hrs1=now.getHours();
           var mins1=now.getMinutes();
           var sec1=now.getSeconds();
           if(hrs1<10)
           {
               hrs1='0'+hrs1;
           }
           if(mins1<10)
           {
               mins1='0'+mins1;
           }
           if(sec1<10)
           {
               sec1='0'+sec1;
           }
    currenttime=hrs1+":"+mins1+":"+sec1;
    if(currenttime===alarmelement){
        sound.play();
    }
    timer.textContent=currenttime;
    setTimeout(showtime,1000);
   
}
showtime();
function addminsec(id){
    var select=id;
    var min=59;
    for(i=0;i<=min;i++){
        select.options[select.options.length]= new Option(i<10 ? "0"+i : i);
    }

}

function addhr(id){
    var select=id;
    var hr=24;
    for(i=0;i<=hr;i++){
        select.options[select.options.length]= new Option( i<10 ? "0"+i : i);
    } 
}
addhr(hr);
addminsec(min);
addminsec(sec);
 
start.onclick=function(){
    if(activealarm===false){
        hr.disabled=true;
        min.disabled=true;
        sec.disabled=true;
       

        alarmelement=hr.value+":"+min.value+":"+sec.value;
        this.textContent="Clear Alarm";
        activealarm =true;
    
    
    }
    else{
        hr.disabled=false;
        min.disabled=false;
        sec.disabled=false;
        
        sound.pause();
        this.textContent="Set Alarm";
        activealarm=false;
    }
}

