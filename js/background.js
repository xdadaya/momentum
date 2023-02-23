let locale = "afternoon"
if (time < 24) locale = "evening"
if (time < 18) locale = "afternoon"
if (time < 12) locale = "morning"
if (time < 6) locale = "night"

function getIdx(idx){
    return ("0"+idx).slice(-2)
}

let idx = getIdx(Math.floor(Math.random() * 20)+1)
changeBg()
document.body.style.backgroundSize = 'cover'

function imgNext(){
    const newIdx = (Number(idx)+1)
    idx = getIdx(newIdx === 20 ? 20 : newIdx % 20)
    changeBg()
}

function imgPrev(){
    const newIdx = (Number(idx)-1)
    idx = getIdx(newIdx === 0 ? 20 : newIdx)
    changeBg()
}

function changeBg(){
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/xdadaya/stage1-tasks/assets/images/${locale}/${idx}.jpg`
    img.onload = () => {      
        document.body.style.background = 'url('+img.src+')'
        document.body.style.backgroundSize = 'cover'
    }
}