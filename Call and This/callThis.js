function setUsername(username){
    this.username=username
}

function createUsername(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}

const user1=new createUsername("Rutvik",'rutvik@gmail.com','pass@123')

console.log(user1)