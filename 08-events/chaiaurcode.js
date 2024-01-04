const start= document.getElementById('start');
const stop = document.getElementById('stop');
let interval;
const randomColor= function(){
    const hex="0123456789ABCDEF"
    let color ="#"
    for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
const stopChangingColor = function(){
    clearTimeout(startChangingColor);
}

const startChangingColor=function(){
document.body.style.backgroundColor=randomColor();
}
start.addEventListener('click', function(){
     interval=setInterval(startChangingColor,100);
})

stop.addEventListener('click',function(){
    clearTimeout(interval);
    
})