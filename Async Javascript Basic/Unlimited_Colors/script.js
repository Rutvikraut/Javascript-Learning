const start=document.querySelector('#start')
const stopChanging=document.querySelector('#stop')

// stop.addEventListener('click',stopchangingcolor)

let intervalId;
const startchangingcolor=function(){
    if(!intervalId){
        intervalId=setInterval(changeBgColor,500)
    }
    function changeBgColor(){
        document.body.style.backgroundColor=generateRandomColor()
    }
}

const stopchangingcolor=function(){
    clearInterval(intervalId)
    intervalId=null
}
function generateRandomColor(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i = 0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
start.addEventListener('click',startchangingcolor);
stopChanging.addEventListener('click',stopchangingcolor)