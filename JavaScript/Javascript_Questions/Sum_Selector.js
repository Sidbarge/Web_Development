// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


let a=[4,5,-3,5]
const sum=((a)=>{
    let sum1=0
    for (let i=0;i<a.length;i++) {
        if(a[i]>1){
            sum1+=a[i]
        }
        else{
            break
        }
    }
    return sum1
})

console.log(sum(a))