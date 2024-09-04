var num=10
console.log(num) //10

num=20
console.log(num) //20

// Var can change the value of variable but have scoping problem

{
    let a=10;
    var b=20;
    const c=30;
}

console.log(a) // Cannot be accessed outside the scope
console.log(b) // Can access outside the scope which is problem
console.log(c) // Cannot be accessed outside the scope