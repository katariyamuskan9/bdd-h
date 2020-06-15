
var audio=new Audio('sounds/hb.mp3');
function playSound(){
if(audio.paused){
    audio.play()
}
else{
    audio.pause();
}
}