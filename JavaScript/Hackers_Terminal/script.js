async function main(){
const addItem=async (item) => {
    await randomdelay();
    let div=document.createElement("div");   //This function is used to add the element 
    div.innerHTML=item;
    document.body.append(div)
}
const randomdelay=()=>{
    return new Promise((resolve,reject)=>{    //This function is used to create delay
        timeout=1+6*Math.random();
        console.log(timeout)
        setTimeout(() => {
            resolve()
        }, timeout*1000);
    })
}
    let text=[
        "Initializing Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
       ] 
    let t=setInterval(() => {
        let last=document.body.lastElementChild
        if(last.innerHTML.endsWith("...")){
            last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)     //for loading animation
        }
        else{
        last.innerHTML=last.innerHTML+"."
        }
    }, 300);
    for (const item of text) {
        await addItem(item);
    }

    await randomdelay()
    clearInterval(t)
}   
main()
