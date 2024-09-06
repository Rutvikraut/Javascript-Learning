const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')

console.log(descriptor)

// Output:
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,       
//   configurable: false      
// }

//Make the user data not editable
const user={
    username:'Rutvik',
    password:123
}
Object.defineProperty(user,'username',{
    writable:false,
    enumerable:false
})

Object.defineProperty(user,'password',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(user,'username'))
console.log(Object.getOwnPropertyDescriptor(user,'password'))
