const form=document.querySelector('#form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let weight=document.querySelector('#weight-input').value
    let height=document.querySelector('#height-input').value
    let result=document.querySelector('#result')
    if(height==='' || height<=0 || isNaN(height)){
        result.innerHTML=`Please enter valid height...`
    }else if(weight==='' || weight<=0 ||isNaN(weight)){
        result.innerHTML=`Please enter valid weight`
    }else{
        let bmi=CalculateBMI(parseInt(weight),parseInt(height));
        result.innerHTML=`BMI : ${bmi.toFixed(2)}`
    }
})

function CalculateBMI(weigth,height){
    let squaredHeight=(height**2)/10000
    let bmi=weigth/squaredHeight
    return bmi
}