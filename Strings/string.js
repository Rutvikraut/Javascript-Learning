//String primitve
const message='Hello'

//String non-primitive
const anothermessage=new String('Hello Rutvik')

// Manipulating from left to right
console.log("1"+"2") //12
console.log(1+"2") //12
console.log("1"+2) //12
console.log(1+2) //3
console.log("1"+2+3) //123
console.log(1+2+"3") //33

// String Methods
const myname="Rutvik"
const lastname="Raut"

console.log(myname.toUpperCase()) //RUTVIK
console.log(myname.toLowerCase()) //rutvik
console.log(myname.length) //6
console.log(myname.charAt(2)); //t
console.log(myname.concat(lastname)) //RutvikRaut

