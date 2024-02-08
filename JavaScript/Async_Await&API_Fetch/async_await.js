async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

async function main(){
    console.log("Loading Modules");

    console.log("Do something else");

    console.log("Load Data");

    let data= await getData()

    console.log(data)

    console.log("Process data")

    console.log("Task 2")
}

main()