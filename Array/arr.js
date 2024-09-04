const arr=[2,4,5,6]
console.log(arr) //[2,4,5,6]
arr.push(7) //add 7
arr.push(8) //8
console.log(arr) //[2,4,5,6,7,8]
arr.pop() // removes last element
console.log(arr) //[2,4,5,6,7]

console.log(arr.includes(9)) // false
console.log(arr.includes(4)) // true

const newarr=arr.join()
console.log(newarr) //2,4,5,6,7
console.log(typeof(newarr)) // string


const num=[7,8,9]
// arr.push(num);
console.log(arr) //[ 2, 4, 5, 6, 7, [ 7, 8, 9 ] ]

//Use of spread operator

const arrayUsingSpread=[...arr,...num]
console.log(arrayUsingSpread) //[2, 4, 5, 6, 7, 8, 9]

//Use of slice method

console.log(arr.slice(2,4)) //[5,6]

//Use of Splice method

arr.splice(2,5) //removes from original array
console.log(arr) //[2,4]
