let score="33"
let valueInNumber=Number(score)
console.log(valueInNumber) //33
console.log(typeof(valueInNumber)) //Number

let score1="33abc"
let valueInNumber1=Number(score1)
console.log(valueInNumber1) //NaN
console.log(typeof(valueInNumber1)) //Number

let isLoggedIn=3 
let valueInBoolean=Boolean(isLoggedIn)
console.log(valueInBoolean) // True for non-zero values
console.log(Number(valueInBoolean)) // 1
console.log(typeof(valueInBoolean)) //boolean