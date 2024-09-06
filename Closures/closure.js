// function outerFunction(){
//     let name="Rutvik"
//     function innerFunction(){
//         console.log("name")
//         console.log("Inner function")
//     }
//     console.log("Outer Function")
//     innerFunction()
//     // console.log("Outer Function")
// }

// outerFunction()


function outerFunction(){
    let name="Hello"
    console.log("Outer")
    return function(){
        console.log(name)
    }
}

const obj=outerFunction()
obj()