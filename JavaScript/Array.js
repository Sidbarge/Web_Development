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

Array.from("Siddharth") //This is used to make any element array

let array=[4,5,7,8,2]
array.toString()
console.log(typeof array.toString()) //Converts the array into the string

console.log(array.join("-"))

array.pop() //Removes the last element of the array
console.log(array)

array.push(2)
console.log(array) //Adds an element at the end

array.shift()  //Removes the first element of the array
console.log(array)

array.unshift(4) //Adds an element at the start
console.log(array)

delete array[2]  //Deletes an element at the index 2
console.log(array)

array.sort()
console.log(array)

for (const i of array) {
    console.log(i)
}

let obj={
    1:'Siddharth',
    2:'Barge'
}

for (const i in obj) {
    console.log(obj[i]) //To print the values
    console.log(i) //To print the keys
}

array.forEach((values,index,array) => {
    console.log((values,index,array))
});

let newarray=array.map((e)=>{
    return e**2
})
console.log(newarray)

let greaterThanFour=(x)=>{
    if(x>4){
        return true
    }
    return false
}

console.log(array.filter(greaterThanFour))

for (const i in array) {
    console.log()
}