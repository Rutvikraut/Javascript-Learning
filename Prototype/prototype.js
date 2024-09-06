const fruits=["Apple","Pineapple","Banana"]

const User={
    username:"Rutvik",
    mob:"0123456789"
}

//Like is Object is global and parent for all
Object.prototype.anyMethod=function(){       
    console.log("Any method Called")
}

User.anyMethod()
fruits.anyMethod()
// object is super for all its child like function array, string, etc.
// So when we call the method on any child it will get call


//if we add prototype method only to specific child then it doesn't call the super class or object

//---------------------------------------------------------------------------------

//Inheritance

const parent={
    lastname:"Raut"
}

const child={
    firstname:"Rutvik"
}

Object.setPrototypeOf(child,parent)

console.log(child.firstname,child.lastname) // So child get access of its parent

