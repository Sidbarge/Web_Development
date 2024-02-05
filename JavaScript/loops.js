console.log("Javascript loops")
for(let i = 0 ;i<=10 ;i++){
    console.log(i);
}

let obj1={
    name:"SIddharth",
    rollno:111,
    year:3
}

for (const key in obj) {
    console.log(key);
}

for (const a of "Siddharth") {
    console.log(a)
}

let i=4;
// while(i<10){
//     console.log(i)
//     i++
// }

do{
    console.log(i)
    i++
}while(i<10)

let obj={
    'harry':98,
    'rohan':70,
    'akash':7
}

//Using for in loop
// for (const key in obj) {
//     console.log(obj[key])
// }

//Using for loop
let keys=Object.keys(obj)
for(let i=0;i<keys.length;i++){
    const key=keys[i]
    console.log(obj[key])
}