# What is Fetch() ?

Fetch() method start the process of fetching a resource from network, returning a promise which is fullfilled once the response is available.

fetch() promise only rejects when network error is encountered **(usually when their is permission issue)**

fetch() promise does not reject on HTTP errors(404, etc.). Instead then() handler must check the Response.ok and Response.status properties

## Using Try Catch

```Javascript
async function getUserData(){
    try{
        const response=await fetch('url')
        const data= await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
```
## Using then()

```Javascript
fetch("url")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
```