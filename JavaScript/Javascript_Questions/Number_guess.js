let n=1+Math.floor(Math.random()*100)
console.log(n)


for(let i=0;i<5;i++){  
    let a=prompt("Guess the number")
if(a==n){
    console.log("You have guessed the correct number")
}
else if(a<n){
    console.log("Guess little higher");
}
else{
    console.log("Guess little lower");
}
}

