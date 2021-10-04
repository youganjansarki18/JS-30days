const inputs=document.querySelectorAll('.controls input');

function updateHandler(){
    const suffix=this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}
inputs.forEach(input => input.addEventListener('change', updateHandler));
inputs.forEach(input => input.addEventListener('mousemove', updateHandler));

//Background
const button=document.querySelector('button');
const change=document.querySelector('img');
const name_bg=document.querySelector('.name_bg');
button.addEventListener('click',()=>{
    let color='#';
    let random= Math.random().toString(16).slice(2,8);
    color=color+random;
    // console.log(color);
    document.documentElement.style.setProperty(`--base`,color);
    // change.style.backgroundColor=color;
    // console.log(name_bg);
    name_bg.innerHTML=color;
    name_bg.style.color=color;
})
