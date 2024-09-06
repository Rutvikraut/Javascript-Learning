const userarr=["Rutvik"]

function user(username,rollno,phoneNum){
    this.username=username
    this.rollno=rollno
    this.phoneNum=phoneNum
}

user.prototype.getRoll=function(){
    console.log(this.rollno)
}

user.prototype.getUsername=function(){
    console.log(this.username)
}

user.prototype.getphoneNum=function(){
    console.log(this.phoneNum)
}

const user1=new user("Rutvik",1,7020189655)

user1.getphoneNum()

user1.getRoll()

user1.getUsername()