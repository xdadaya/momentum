const sounds = [
    {      
      title: 'Aqua Caelestis',
      src: './assets/sounds/Aqua Caelestis.mp3',
      duration: '00:58'
    },  {      
      title: 'River Flows In You',
      src: './assets/sounds/River Flows In You.mp3',
      duration: '03:50'
    },
    {      
      title: 'Summer Wind',
      src: './assets/sounds/Summer Wind.mp3',
      duration: '05:05'
    },
    {      
      title: 'Ennio Morricone',
      src: './assets/sounds/Ennio Morricone.mp3',
      duration: '05:03'
    }
]

let isPlaying = false
let soundIdx = 0
let audio
const playButton = document.getElementById("playButton")
const soundList = document.querySelectorAll(".play-item")
playButton.addEventListener("click", function(){
    isPlaying ? pause() : play()
})

function play(){
    audio = new Audio(sounds[soundIdx].src)
    audio.play()
    isPlaying = true
    playButton.classList.add("pause")
    soundList[soundIdx].classList.add("item-active")
}

function pause(){
    audio.pause()
    isPlaying = false
    playButton.classList.remove("pause")
}

document.getElementById("songPrev").addEventListener("click", () => {
    if(audio)audio.pause()
    soundList.forEach(item => item.classList.remove("item-active"))
    const newSoundIdx = soundIdx - 1
    newSoundIdx === -1 ? soundIdx = 3 : soundIdx = newSoundIdx % 4
    play()
})

document.getElementById("songNext").addEventListener("click", () => {
    if(audio)audio.pause()
    soundList.forEach(item => item.classList.remove("item-active"))
    const newSoundIdx = soundIdx + 1
    newSoundIdx === 3 ? soundIdx = 3 : soundIdx = newSoundIdx % 4
    play()
})