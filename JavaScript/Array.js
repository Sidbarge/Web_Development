let arr=[2,3,5,6,7]
console.log(arr)
console.log(arr.length)
console.log(arr[1])
arr[1]=10
console.log(arr[1])

//Arrays are mutuble the values of the array can be changed unlike string

console.log(arr.toString(),typeof arr)

console.log(arr.join(" and "))

arr.push(10)
console.log(arr)

arr.pop()  //The last element will be removed
console.log(arr)

arr.push("Siddharth") //Javascript can contain array of multiple data type
console.log(arr)  //Psuh will add the element at the last

arr.shift()  //This will remove the first element
console.log(arr) 

arr.unshift(999)  //Unshift will add the element at the start
console.log(arr)

delete arr[4]
console.log(arr)

console.log(arr[4])


let numbers=[1,2,4,3,7,5]

numbers.splice(1,2)//This will remove 2 elements from index 1
console.log(numbers)
numbers.splice(1,2,22,33)  //This will remove 2 elements from index 1 and add 22 and 33
console.log(numbers)

//Loops


for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element)
}


numbers.forEach((values,index,arr) => {
    console.log(values,index,arr)
});


for (const iterator of numbers) {
    console.log(iterator)
}
// let NewArr=[]
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     NewArr.push(element**2)
// }

//Instead of above
let NewArr=numbers.map((e)=>{
    return e**2
})
console.log(NewArr)



//Filter

let a=[1,2,4,5,6,7,8,9,11]
console.log(a)

const greaterThanSeven=(e)=>{
    if(e>7){
        return true
    } return false
}

console.log(a.filter(greaterThanSeven))

// Array.from("Siddharth") //This is used to make any element array