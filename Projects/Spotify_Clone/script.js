console.log("Let's Write javascript")
let currSong = new Audio()
let songs;
let wordsToReplace = ["%20", "http://127.0.0.1:5501/songs/"];   //to replace the words with space
let replacementWord = " ";
let regexPattern = new RegExp(wordsToReplace.join('|'), 'gi');
function formatTime(totalSeconds) {
    if(isNaN(totalSeconds) || totalSeconds<0){
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

async function getsongs() {
    let a = await fetch("http://127.0.0.1:5501/songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
        }
    }

    // console.log(songs)
    return songs
}

const playmusic = (track, pause = false) => {
    // let audio= new Audio("/songs/"+track)
    // console.log("before",track)
    // currSong.src=track
    currSong.src = "songs/" + track
    // console.log("after", currSong.src)
    if (!pause) {
        currSong.play()
        plays.src = "btn/pause.svg"
    }
        document.querySelector(".songinfo").innerHTML = track.replace(regexPattern, replacementWord)
        document.querySelector(".songtime").innerHTML = "00:00/00:00"
}
// getsongs()
async function main() {
    //Get the list of all the songs
    songs = await getsongs()
    let firstsong = songs[0].replace(regexPattern, replacementWord).trim()
    // console.log(firstsong, "hello")
    playmusic(firstsong, true)
    // console.log(songs)



    //Shows all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `
                        <li>
                            <img class="invert" src="img/music.svg" alt="">
                            <div class="info">
                                <div>${song.replace(regexPattern, replacementWord)}</div>
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
    })

    //Add an event to the seekbar
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX) / (e.target.getBoundingClientRect().width) * 100
        // console.log(e.target.getBoundingClientRect().width, e.offsetX)
        document.querySelector(".circle").style.left = percent + "%"
        currSong.currentTime = (currSong.duration) * percent / 100
    })

    //Add an event listener to the hamburger
    document.querySelector(".hamburger").addEventListener("click",(e)=>{
        document.querySelector(".left").style.transform='translateX(0px)'
    })

    //Add an event listener to the close button
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.transform='translateX(-600px)'
    })

    //Add an event listener to the previous
    previous.addEventListener("click",()=>{
        // console.log("Previous clicked")
        let index=songs.indexOf(currSong.src)
        // console.log(currSong.src.split('/').slice(-1) [0])
        // console.log(currSong.src)
        // console.log(songs[1],index)
        if((index-1)>=0){
            let previousmusic=songs[index-1].split('/').slice(-1) [0]   //Used to remove the http://127.0.0.1:5500/songs/ part of song link to create a valid link
            playmusic(previousmusic)
        }
    })
    //Add an event listener to the next
    next.addEventListener("click",()=>{
        // console.log("next clicked")
        let index=songs.indexOf(currSong.src)
        // console.log(currSong.src.split('/').slice(-1) [0])
        // console.log(currSong.src)
        // console.log(songs[1],index)
        if((index+1)<songs.length){
            let nextmusic=songs[index+1].split('/').slice(-1) [0]   //Used to remove the http://127.0.0.1:5500/songs/ part of song link to create a valid link
            playmusic(nextmusic)
        }
    })

    //Add an event to the volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
        // console.log(e,e.target,e.target.value)
        currSong.volume=parseInt(e.target.value)/100
    })
}
main()