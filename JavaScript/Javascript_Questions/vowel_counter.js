let v=["A","a","E","e","I","i","O","o","U","u"]

let count=0;
let s="Siddharth"

let counter=((string)=>{
    for(let i=0;i<string.length;i++){
        for(let j=0;j<v.length;j++){
        if(string[i]==v[j]){
            count=count+1
        }
    }
    }
    return count;
})

console.log(counter(s))