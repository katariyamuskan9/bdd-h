var sofa=new Audio('sounds/pivot.mp3');
function Sofa(){
    if(sofa.paused){
        sofa.play();
    }
    else{
        sofa.pause();
    }


}
var turkey=new Audio('sounds/turkey.mp3');
function Turkey(){
   if(turkey.paused){
       turkey.play();
   }
   else{
       turkey.pause();
   }


}
var pizza=new Audio('sounds/pizza.mp3');
function Pizza(){
    if(pizza.paused){
    pizza.play();
    }
    else{
        pizza.pause();
    }


}
var guitar=new Audio('sounds/guitar.mp3');
function Guitar(){
    if(guitar.paused){
        guitar.play();
    }
    else{
        guitar.pause();
    }


}
var marcel=new Audio('sounds/marcel.mp3');
function Marcel(){
    if(marcel.paused){
        marcel.play();
    }
    else{
        marcel.pause();
    }


}
var v=document.getElementById('v');

function PlayVideo(){
   
    if(v.paused){
        v.play();
    }
    else{
        v.pause();
    }
}