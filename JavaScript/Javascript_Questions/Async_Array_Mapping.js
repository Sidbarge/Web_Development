// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function delay(arr){
    return newarr=arr.map((e)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(e*2)
            }, 500);
        })
    })
}
const arr = [1, 2, 3, 4, 5];
const promise=delay(arr)

Promise.all(promise)
.then(e=>{
    console.log(e);
})