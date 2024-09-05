const promise=new Promise((resolve,reject)=>{
    setTimeout(function(){
        const error=false
        if(!error){
            resolve({username:"Rutvik",email:"rutvikraut567@gmail.com"})
        }else{
            reject("Error: Something went wrong")
        }
    },1000)
})

async function getdata(){
    try{
        const response=await promise
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

getdata()