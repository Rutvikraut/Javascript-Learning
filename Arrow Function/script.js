// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const a2 = a.map(function (s) {
//   return typeof(s);
// });
// console.log(a2)

// const a3=a.map((s)=>(s.length))
// console.log(a3)

// const a= new String("Hello")
// console.log(typeof(a))
const strings= new Map()
strings.set("Name","Rutvik")
strings.set("age","22")
strings.set("Height","5.5")

console.log(strings)
console.log(strings.get("Name"))
// strings.delete("Height")
console.log(strings)

for (const [key,value] of strings){
    console.log(key,value)
}
console.log(strings.size)
strings.clear()
console.log(strings.size)