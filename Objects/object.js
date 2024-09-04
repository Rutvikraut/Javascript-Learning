//data type of key is String by default


let Student={
    firstName:"Rutvik",
    lastName:"Raut",
    age:22,
    rollno:24,
    phone:123456
}

console.log(`My name is ${Student.firstName} ${Student.lastName}. My age is ${Student.age}.`)

Student.rollno=25

console.log(Student.rollno) //25 new value

console.log(Student['age']) //22


//Destructuring objects

const {firstName,lastName}=Student

console.log(firstName) //Rutvik
console.log(lastName) //Raut

// Accessing Keys

console.log(Object.keys(Student)) //returns array of keys
