console.log("Hello")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
let button=document.querySelector(".btn")
button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b>I was just clicked</b>"
}) 

button.addEventListener("dblclick",()=>{
    alert("You just double clicked me")
}) 
button.addEventListener("contextmenu",()=>{
    alert("You just right clicked me")
}) 

document.addEventListener("keydown",(e)=>{
    console.log(e)
})