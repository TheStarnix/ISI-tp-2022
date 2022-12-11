var stateRickrolled = false;
var audio = new Audio('videos/rickrolled.mp3');
function rickrolled(){
    if(stateRickrolled == false){
        audio.play();
        stateRickrolled = true;
    } else {
        stateRickrolled = false;
        audio.pause()
    }
}