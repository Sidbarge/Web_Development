let a=prompt("Enter first number")
let b=prompt("Enter the second number")

if(isNaN(a) || isNaN(b) ) //Checks weather the number is number or not 
{
    throw SyntaxError("Sorry this is not allowed")  //By this we can throw our own user defined errors
}

let sum=parseInt(a)+parseInt(b)

try {
    console.log("The sum of numbers is ",sum*x) 
} catch (error) {
    console.log("Error")   //By this error are avoided by handling them and printing normal message
    alert(error.name)
    alert(error.stack)
    alert(error.meassage)
}

finally{
    console.log("The code is been executed and the db is cleared");
}
//If we are in a function and there is return then the code doesnt run after the return but by using finally the finally runs even after return 