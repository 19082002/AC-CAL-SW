var seconds=00;
var tens=00;
var mins=00;
var adtens=document.getElementById('tens');
var admin=document.getElementById('mins');
var adsec=document.getElementById('seconds');
var start=document.getElementById('start');
var stop1=document.getElementById('stop');
var reset=document.getElementById('reset');
var interval;
function startTimer(){
    tens++;
    if(tens<9)
    adtens.innerHTML="0"+tens;
    if(tens>9){
        adtens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        adsec.innerHTML="0"+seconds;
        tens=0;
        adtens.innerHTML="0"+0;
    }
    if(seconds>9)
    adsec.innerHTML=seconds;
    if(seconds>59){
        mins++;
        admin.innerHTML="0"+mins;
        seconds=0;
        adsec.innerHTML="0"+0; 
    }
    if(mins>9)
    admin.innerHTML=mins;

};
start.onclick=function(){
    interval=setInterval(startTimer);

};
stop1.onclick=function(){
 clearInterval(interval);
};
reset.onclick=function(){
clearInterval(interval);
tens="00";
seconds="00";
mins="00";
adsec.innerHTML=seconds;
adtens.innerHTML=tens;
admin.innerHTML=mins;
};