/*vartab=("mot1","mot2");
var compteur=0;
function wordSwitch()

     if wordSwitch=1
     resulat.innerHTML=tab[compteur];
     compteur++;
     if(count<0) {
    	blockCount.classList.add("red");
   } 
   else if(count>=0) {
     	blockCount.classList.remove("red");
   }
   else{}
}

setTimeout(wordSwitch();1000);*/

var btn=document.querySelector(".to-btn");
var nav=document.querySelector(".nav");

btn.onclick=function(){
   nav.classList.toggle('nav_open');
}

