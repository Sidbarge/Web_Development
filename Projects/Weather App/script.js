const key="d46125b4ce0b749f52cb70c28bc8ec25"

function renderWeatherInfo(data){
    let p=document.createElement("p")
    p.innerHTML= `${data?.main?.temp.toFixed(2)} \u00B0C`  //?. this check weather data or main are null or undefined before going to temp by this error is not thrown 
    // p.innerHTML= `${data.main.temp.toFixed(2)}`
    document.body.appendChild(p)
}
async function getdata(){
    try {
        let lat=18.686211;
        let lon=74.165398;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
        const data = await response.json()
        console.log(data)
        renderWeatherInfo(data)
        
    } catch (error) {
        console.log("Error Occured" , error)
    }
}
let x=document.createElement("div")
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    document.body.appendChild(x)
  }

  getLocation()
getdata()

