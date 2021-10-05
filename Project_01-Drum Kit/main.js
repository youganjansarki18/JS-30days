window.addEventListener("keydown",function(e){
    // console.log(e.keyCode);
    const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(key);
    // console.log(audio);
    if(!audio) //If key is not found then end the function
       return;
    else
       audio.currentTime=0; //It sets the audio back to 0 for playing when it is hit many times
       audio.play();
    key.classList.add('playing');
    this.setTimeout(function(){
       key.classList.remove('playing');
    },0.07)    
})

// function removeTransition(e){
//     if(e.propertyName!=='transform') return;
//     this.classList.remove('playing');
// }

// const keys=document.querySelectorAll('.key');
// keys.forEach(key => {
//    key.addEventListener('transitioned',removeTransition);
// });
