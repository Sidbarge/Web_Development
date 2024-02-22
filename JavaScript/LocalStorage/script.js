let key=prompt("Enter the key")
let value=prompt("Enter the value")

localStorage.setItem(key,value)

console.log(`The key is ${key} and the value is ${localStorage.getItem(key)}`)  //To get the value we should pass key not value

if( key == 10){
    localStorage.removeItem(key)
}

if( key == 0)
{
    localStorage.clear()  //Clears all the local storage
}