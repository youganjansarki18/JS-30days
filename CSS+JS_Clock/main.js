function setDate(){
    const now= new Date();
    //seconds
    const sec=now.getSeconds();
    const secDeg=((sec/60)*360)+90;
    secHand.style.transform=`rotate(${secDeg}deg)`;
    //minutes
    const min=now.getMinutes();
    const minDeg=((min/60)*360)+90;
    minHand.style.transform=`rotate(${minDeg}deg)`;
    //hours
    const hour=now.getHours();
    const hourDeg=((hour/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDeg}deg)`;
}
const secHand=document.querySelector('.hand-sec');
const minHand=document.querySelector('.hand-min');
const hourHand=document.querySelector('.hand-hour');
setInterval(setDate, 1000); 