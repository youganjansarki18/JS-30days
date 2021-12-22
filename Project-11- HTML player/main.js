//Getting all the elements
const player=document.querySelector('.player');
const video=player.querySelector('.viewer');
const progress=player.querySelector('.progress');
const progressBar=player.querySelector('.progress__filled');
const toggle=player.querySelector('.toggle');
const ranges=player.querySelectorAll('.player__slider');
const skipButtons=player.querySelectorAll('[data-skip]');

//BUILDING OUT FUNCTIONS
function toggleplay(){
    // if(video.paused)
    //    video.play();
    // else
    //    video.pause();
    const check= video.paused ? video.play():video.pause();
    const icon= video.paused ?   '►':'❚❚';
    toggle.textContent=icon;
}
function skip(){
    console.log(this.dataset);
    const time=this.dataset.skip;
    console.log(time);
    video.currentTime+=parseFloat(time); //CurrentTime is 0 by default
    //ParseFloat is used to convert string to integer
}
function update(){
    // console.log(this.value);
   // console.log(video.volume);
   
   // video.volume=this.value;
   // console.log(video.volume);

   video[this.name]=this.value;
   console.log(this.value);
   console.log(this.name);
   var curr=this.name;
   video.curr=this.value;  
}

function handleProgress(){
    //We need to chnage the flex-basis to change the progress bar
    var percent_change=((video.currentTime)/(video.duration))*100;
    console.log(percent_change);
    progressBar.style.flexBasis=`${percent_change}%`;
}
function scrub(e){
    const srubTime=(e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime=srubTime;
}
//Adding Event listeners

video.addEventListener('click',toggleplay);
video.addEventListener('timeupdate',handleProgress);
toggle.addEventListener('click',toggleplay);
// ranges.addEventListener('mousemove',update);  //only for volume
skipButtons.forEach(button=>button.addEventListener('click',skip));
ranges.forEach(range=>range.addEventListener('change',update)); //for volume and playback both

//Changing the flex-basis
let mousedown=false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e)=>mousedown && scrub(e));
progress.addEventListener('mousedown',()=>mousedown=true);
progress.addEventListener('mouseup',()=>mousedown=false);

