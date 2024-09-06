String.prototype.getLength=function(){
    console.log(this)
    console.log(`Length is ${this.trim().length}`)
}

const myname="   Rutvik    "

myname.getLength()
//Created a method which will give length of any string
