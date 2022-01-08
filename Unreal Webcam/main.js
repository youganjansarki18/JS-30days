const video=document.querySelector('.player');
const canvas=document.querySelector('.photo');
const ctx=canvas.getContext('2d');
const strip=document.querySelector('.strip');
const snap=document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video:true,audio:false})
      .then(localMediaStream=>{
          console.log(localMediaStream);
        //   video.src=window.URL.createObjectURL(localMediaStream);
          video.srcObject = localMediaStream;
          video.play();
      })
      .catch(err=>{
          console.log(`Oh..Nooo`,err);
      });

      console.log(video.width);
}

function paint0nCanvas(){
     const width=video.videoWidth-50;
     const height=video.videoHeight-50;
     canvas.width=width;
     canvas.height=height;

     setInterval(()=>{
         ctx.drawImage(video,0,0,width,height);
     },16);
}

function takePhoto(){
    snap.ariaCurrenTime=0;
    snap.play();

    //take the data out of the screen
    const data=canvas.toDtaURL('image/jpeg');
    console.log(data);
    const link=document.createElement('a');
    // link.href=data;
    // link.

}
getVideo();
video.addEventListener('canplay',paint0nCanvas);
