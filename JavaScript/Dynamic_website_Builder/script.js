function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let tn=document.getElementsByTagName("img")
    tn[0].setAttribute("src",thumbnail)

    let dt=document.getElementsByClassName("duration")
    dt[0].innerHTML=duration

    let tt=document.getElementsByClassName("title")
    tt[0].innerHTML=title

    let CN=document.getElementsByClassName("CName")
    CN[0].innerHTML=cName

    if(views>1000 && views<1000000){
      views=views/1000+"K"
    }
    if(views>1000000)
    {
      views=views/1000000+"M"
    }
    let v=document.getElementsByClassName("views")
    v[0].innerHTML=views

    let MO=document.getElementsByClassName("monthsold")
    MO[0].innerHTML=monthsOld
    
//     let viewStr
//     if (views < 1000) {
//         viewStr = views;
//     }
//     else if (views > 1000000) {
//         viewStr = views / 1000000 + "M";
//     }
//     else {
//         viewStr = views / 1000 + "K";
//     }
//     let html = `<div class="card">
//     <div class="image">
//         <img src="${thumbnail}"
//             alt="">
//         <div class="capsule">${duration}</div>
//     </div>
//     <div class="text">
//         <h1>${title}</h1>
//         <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
//     </div> 
// </div>`

//     document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}




createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 560000, "7 months ago", "35:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
