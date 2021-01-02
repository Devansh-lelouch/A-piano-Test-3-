const WhiteKeys = ["q","w","e","r","t","y","u","i","o","p","[","]","\\","'"]
const BlackKeys = ['1','2','3','4','5','6','7','8','9','0']

const keys = document.querySelectorAll(".key")
const whiteKeys =document.querySelectorAll(".key.white")
const blackKeys =document.querySelectorAll(".key.black")




keys.forEach(key=>{
    key.addEventListener("click",() => playKey(key))
})

document.addEventListener("keydown",keyPressed)
function keyPressed(event){
 if(event.repeat){
        return
    }
    const key = event.key;
    const WhiteKeyIndex = WhiteKeys.indexOf(key)
    const BlackKeyIndex = BlackKeys.indexOf(key)
   
    if(WhiteKeyIndex>-1){
        playKey(whiteKeys[WhiteKeyIndex])
    }
    if(BlackKeyIndex>-1){
        playKey(blackKeys[BlackKeyIndex])
    }
}

document.addEventListener("keydown",(e)=>{
     if (e.repeat) {
       return;
     }
     if(e.keyCode==71){  //G
         playKey(whiteKeys[4])
     }
     if(e.keyCode==67){ //C
         playKey(whiteKeys[0])
     }
     if(e.keyCode==68){ //D
         playKey(whiteKeys[1])
     }
     if(e.keyCode==65){//A
         playKey(whiteKeys[5])
     }
     if(e.keyCode==70){//F
         playKey(whiteKeys[3])
     }
     if(e.keyCode==66){//B
         playKey(whiteKeys[6])
     }
   
     
     
    
})


function playKey(key){
    const keyAudio = document.getElementById(key.dataset.note);
    keyAudio.play()
    keyAudio.currentTime = 0 //starts replaying the music from 0 sec which is the starting time of the music. 
    key.classList.add("active")
    keyAudio.addEventListener('ended',()=>{
        key.classList.remove("active")
    })
    
}