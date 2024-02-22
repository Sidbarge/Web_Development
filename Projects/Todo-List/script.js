const todoInput = document.querySelector(".todo")
const button = document.querySelector(".btn")
const ul = document.querySelector("ul")
const close = document.querySelector(".close")

function addtodo() {
    if (todoInput.value == "") {
        alert("Enter Something")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = `${todoInput.value.trim()}
                        <button class="close">X</button>`
        ul.appendChild(li)
        todoInput.value = ""
    }
    savedata()
}

ul.addEventListener('click',(e)=>{
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove()
    }
    savedata()
})
document.addEventListener("keydown",(e)=>{
    // console.log(e.code)
    if(e.code == "Enter"){
        addtodo()
    }
})

function savedata(){
    localStorage.setItem("todos",ul.innerHTML)
}

function showdata(){
    ul.innerHTML = localStorage.getItem("todos")
}
showdata()


