

let prom1=new Promise((resolve, reject) => {
    let a=Math.random();
    if(a<0.5){
        reject("The random number was not supported")
    }
    else{
    
    setTimeout(() => {
        console.log("I am done");
        resolve("Sid")
    }, 3000);
    }
})

prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
}
)
