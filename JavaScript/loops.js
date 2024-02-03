console.log("Javascript loops")
for(let i = 0 ;i<=10 ;i++){
    console.log(i);
}

let obj={
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