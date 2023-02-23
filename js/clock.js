function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function curDate(dateNow){
    const weekday = capitalizeFirstLetter(dateNow.toLocaleString('default', {weekday: 'long'}))
    const month = capitalizeFirstLetter(dateNow.toLocaleString('default', {month:'long'}))
    const day = capitalizeFirstLetter(dateNow.toLocaleString('default', {day:'numeric'}))
    return `${weekday}, ${month} ${day}`
}

let dateNow = new Date()
document.getElementById("time").innerHTML = dateNow.toLocaleTimeString()
document.getElementById("date").innerHTML = curDate(dateNow)
function clock(){
    dateNow = new Date()
    document.getElementById("time").innerHTML = dateNow.toLocaleTimeString()
    document.getElementById("date").innerHTML = curDate(dateNow)
    setTimeout(clock, 1000)
}
clock()