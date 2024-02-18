console.log("Let's Write javascript")
let currSong = new Audio()
let songs;
let currfolder;
function formatTime(totalSeconds) {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
        return "00:00";
    }
    // Round the total seconds to the nearest whole number
    const roundedSeconds = Math.round(totalSeconds);

    // Calculate minutes and remaining seconds
    const minutes = Math.floor(roundedSeconds / 60);
    const seconds = roundedSeconds % 60;

    // Format the time as 'mm:ss'
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return formattedTime;
}

async function getsongs(folder) {
    currfolder = folder;
    let a = await fetch(`http://127.0.0.1:5502/${folder}/`)
    console.log(folder)
    console.log(a, "a")
    let response = await a.text();
    // console.log(response,"response")
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }
    //Shows all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `
                        <li>
                            <img class="invert" src="img/music.svg" alt="">
                            <div class="info">
                            <div> ${song.replaceAll("%20", " ")}</div>
                                <div>Sid</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="img/play.svg" alt="">
                            </div>
                        </li>`
    }

    //Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click", element => {
            // console.log("sid", e.querySelector(".info").firstElementChild.innerHTML)
            // console.log((e.querySelector(".info").firstElementChild.innerHTML.trim()))
            playmusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    })

    // console.log(songs)
    return songs
}

const playmusic = (track, pause = false) => {
    // let audio= new Audio("/songs/"+track)
    // console.log("before",track)
    // currSong.src=track
    currSong.src = `/${currfolder}/` + track
    // console.log("after", currSong.src)
    if (!pause) {
        currSong.play()
        plays.src = "btn/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00/00:00"
}

async function displayAlbums(){
    let a = await fetch(`http://127.0.0.1:5502/songs/`)
    let response = await a.text();
    // console.log(response,"response")
    let div = document.createElement("div")
    div.innerHTML = response
    let anchors=div.getElementsByTagName("a")
    let cardContainer=document.querySelector(".cardContainer")
    let array=Array.from(anchors)
    // console.log(array)
        for (let index = 0; index < array.length; index++) {
            const e = array[index];
            
        
        if(e.href.includes("/songs/")){
            let folder=e.href.split("/").slice(-1)[0]

            //Get the metadata of the folder
            let a = await fetch(`http://127.0.0.1:5502/songs/${folder}/info.json`)
            let response = await a.json();
            // console.log(response)

            cardContainer.innerHTML=cardContainer.innerHTML+`
            <div data-folder="${folder}" class="card">
                <div class="play">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" fill="#1ed760" />
                        <path d="M9.5 16.5V7.5L16.5 12L9.5 16.5Z" fill="black" />
                    </svg>
                </div>
                <img src="/songs/${folder}/cover.jpg" alt="">
                <h2>${response.title}</h2>
                <p style="color: grey;">${response.description}</p>
            </div>`
        }
    }

    //Load playlist whenever the card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            songs = await getsongs(`songs/${item.currentTarget.dataset.folder}`)
        })
    })
    // console.log(anchors)
}
// getsongs()
async function main() {
    //Get the list of all the songs
    songs = await getsongs("songs/cs")
    playmusic(songs[0], true)
    // console.log(songs)

    //Display all the albums on the page
    displayAlbums()

    //Attach an event listener to the play, next and previous
    // console.log(plays, "play")
    plays.addEventListener("click", () => {
        if (currSong.paused) {
            currSong.play()
            plays.src = "btn/pause.svg"
        }
        else {
            currSong.pause()
            plays.src = "btn/play.svg"
        }
    })

    //Listen for timeupdate event
    currSong.addEventListener("timeupdate", () => {
        // console.log(currSong.currentTime, currSong.duration)
        document.querySelector(".songtime").innerHTML = `${formatTime(currSong.currentTime)}/${formatTime(currSong.duration)}`
        document.querySelector(".circle").style.left = ((currSong.currentTime) / (currSong.duration)) * 100 + "%"
        if (((currSong.currentTime) / (currSong.duration)) * 100 + "%" == "100%") {
            let index = songs.indexOf(currSong.src.split("/").slice(-1)[0])
            if ((index + 1) < songs.length) {
                playmusic(songs[index + 1])
            }
        }
    })

    //Add an event to the seekbar
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX) / (e.target.getBoundingClientRect().width) * 100
        // console.log(e.target.getBoundingClientRect().width, e.offsetX)
        document.querySelector(".circle").style.left = percent + "%"
        currSong.currentTime = (currSong.duration) * percent / 100
    })

    //Add an event listener to the hamburger
    document.querySelector(".hamburger").addEventListener("click", (e) => {
        document.querySelector(".left").style.transform = 'translateX(0px)'
    })

    //Add an event listener to the close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.transform = 'translateX(-600px)'
    })

    //Add an event listener to the previous
    previous.addEventListener("click", () => {
        currSong.pause()
        console.log("Previous clicked")
        let index = songs.indexOf(currSong.src.split("/").slice(-1)[0])   //Used to remove the http://127.0.0.1:5500/songs/ part of song link to create a valid link
        if ((index - 1) >= 0) {
            playmusic(songs[index - 1])
        }

    })
    //Add an event listener to the next
    next.addEventListener("click", () => {
        // console.log("next clicked")
        currSong.pause()
        console.log("Next clicked")

        let index = songs.indexOf(currSong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length) {
            playmusic(songs[index + 1])
        }
    })

    //Add an event to the volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        // console.log(e,e.target,e.target.value)
        currSong.volume = parseInt(e.target.value) / 100
    })

    //Add event listener to mute the track
    document.querySelector(".volume>img").addEventListener("click",e=>{
        console.log(e.target)
        if(e.target.src.includes("volume.svg")){
            e.target.src=e.target.src.replace("img/volume.svg" , "img/mute.svg")
            currSong.volume=0
            document.querySelector(".range").getElementsByTagName("input")[0].value=0
        }
        else{
            e.target.src=e.target.src.replace("img/mute.svg","img/volume.svg")
            currSong.volume=0.10
            document.querySelector(".range").getElementsByTagName("input")[0].value=20
        }
        
    })
    
}
main()