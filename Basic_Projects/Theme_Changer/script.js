const buttons=document.querySelectorAll('.button')
console.log(buttons)

buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const btnId=e.target.id
        document.body.style.backgroundColor=btnId
    })
})