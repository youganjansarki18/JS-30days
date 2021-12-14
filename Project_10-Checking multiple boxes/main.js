const check=document.querySelectorAll('.container-checkbox input[type="checkbox"]');
console.log(check);

let lastChecked;
function handlecheck(e){
    //Check if shift key is pressed or not
    //Check that they are checking it
    console.log("start");
    let inBetween=false;
    if(e.shiftKey && this.checked){
       check.forEach(checkbox=>{
           console.log(checkbox);
           if(check===this || check===lastChecked){
               inBetween=!inBetween;
               console.log("starting the phase");
           }

           if(inBetween){
               check.checked=true;
           }
       });
   }
   lastChecked=this;
}

check.forEach(checkbox=>{
    checkbox.addEventListener('click',handlecheck);
})