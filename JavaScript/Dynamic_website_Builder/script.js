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
}


createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 560000, "7 months ago", "31:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")