async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
let sum=(a,b,c) => {
  return a+b+c
}

(async function main(){   //This IIFE Imediately invoking Function is used to quickly create a async function
    // let a=await sleep()
    // console.log(a);
    // let b=await sleep()
    // console.log(b);

    let [x,y]=[4,5]
    console.log(x,y)

    let [c,d,...rest]=[7,8,9,4,5,6]
    console.log(c,d,rest)

    let obj={
        a:1,
        b:2,
        c:3
    }

    let {a, b}=obj
    console.log(a,b)

    let arr=[4,5,6]
    console.log(sum(arr[0],arr[1],arr[2]));   //This both are same
    console.log(sum(...arr));

    let obj1={...arr}
    console.log(obj1);
})()