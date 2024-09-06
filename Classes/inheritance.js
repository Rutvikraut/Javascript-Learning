class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)    // Goes to User parent class
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`Course added by ${this.username}`)
    }
}

const user1=new Teacher("Rutvik","abc@gmail.com",123)

user1.addCourse()
