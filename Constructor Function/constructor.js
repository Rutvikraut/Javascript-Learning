function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
}

const userOne= new User('Rutvik',10,true) //constructor

console.log(userOne) // return object
console.log(userOne.constructor)

console.log(userOne instanceof User) //true