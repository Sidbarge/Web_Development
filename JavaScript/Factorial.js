let a=6
let b=[]
for(let i=a;i>=1;i--){
    b.push(i);
}
let c=b.reduce((x,y)=>x*y)
console.log(c)