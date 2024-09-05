async function getUserData(){
    try{
        const response=await fetch('https://api.github.com/users/RutvikRaut')
        const data= await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

getUserData()

fetch("https://api.github.com/users/RutvikRaut")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))