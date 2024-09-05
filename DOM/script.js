// const headingName=document.querySelector('.heading');
// headingName.style.backgroundColor="green"

// const heading2=document.querySelectorAll('h2')

// console.log(heading2)

// heading2.forEach((h)=>{
//     h.style.backgroundColor='red'
// })

// console.log(headingName.innerText)


// const parent=document.querySelector('.parent')
// // console.log(parent)
// console.log(parent.children[0].innerHTML)

// for (let index = 0; index < parent.children.length; index++) {
//     console.log(parent.children[index].innerHTML);
    
// }

// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)


//Create new element

const div=document.createElement('div')
console.log(div)

div.className="main"

div.id=Math.floor(Math.random()*10+1)

// div.innerText="Rutvik"

const childText=document.createTextNode("Rutvik")
div.append(childText)

document.body.appendChild(div)