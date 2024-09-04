// function myfunc(){
//     this.myvar=0
//     var that =this
//     setTimeout(function(){
//         that.myvar++
//         console.log(that.myvar)
//         console.log(this.myvar)
//     },0);
// }
// myfunc()
// function myfunc() {
//     this.myvar = 0
//     setTimeout(
//         () => {
//             this.myvar++
//             console.log(this.myvar)
//         },0
//     )
// }
// myfunc()

// const func=()=>{
//     let username='Rutvik'
//     console.log(this.username)
// }
// func()

// const func=(x=10)=>x

// console.log(func())
// console.log(func(5))
// console.log(func(undefined))
// console.log(func(null))
// function f (x, y = 7, z = 42) {
//     return x + y + z
// }
// console.log(f(1,2,3) === 50)

// function myName(name){
//     let myname=name
//     return myname
// }

// console.log(myName("Rutvik"))

const profile={
    user:"Rutvik",
    age:22,
    message:function(){
        console.log(this.user)
    }
}

profile.message()
