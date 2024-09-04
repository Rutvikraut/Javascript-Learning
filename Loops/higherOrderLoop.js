const arr=[1,2,3,4,5,6,7,8]

for(const key of arr)
{
    console.log(key)
}

for(const key in arr){
    console.log(key," ",arr[key])
}