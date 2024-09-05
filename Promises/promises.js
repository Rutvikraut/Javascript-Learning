// Promises States is a object representing eventual completion or failure of asynchronous operation

const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

const promiseTwo=new Promise((resolve,reject)=>{
    setTimeout(function(){
        const error=true
        if(!error){
            resolve({username:"Rutvik",email:"rutvikraut567@gmail.com"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})

promiseTwo.then((res)=>{
    return res.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Promise Either resolve or reject")
})