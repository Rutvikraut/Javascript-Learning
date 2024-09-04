// Immediately Invoked Function Expression

(function sayMyName(){
    console.log("Rutvik")
})(); // semicolon sends the context of this function

(()=>{console.log("Rutvik")})();

( (name) =>{
        console.log(`${name}`)
})("Rutvik");