function getWeather(){
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('city') || "Minsk"}&lang=en&appid=be76db0e55fe0285e1855c1e9f50e137&units=metric`)
		.then(response => response.json())
		.then(response => {
			if(response.cod !=404){
				document.getElementById("weather-temperature").innerHTML = Math.floor(response.main.temp) + "°C"
				document.getElementById("weather-description").innerHTML = response.weather[0].description
				document.getElementById("weather-wind").innerHTML = "Wind speed: " + Math.floor(response.wind.speed) + " m/s"
				document.getElementById("weather-humidity").innerHTML = "Humidity: " + response.main.humidity + "%"
				wi = document.getElementById("weather-icon")
				if(wi.classList[2]) wi.classList.remove(wi.classList[2])
				document.getElementById("weather-icon").classList.add(`owf-${response.weather[0].id}`)
			}
			else {
				document.getElementById("weather-temperature").innerHTML = `Error! city not found for '${localStorage.getItem("city")}'!`
				document.getElementById("weather-wind").innerHTML = ""
				document.getElementById("weather-humidity").innerHTML = ""
				if(wi.classList[2]) wi.classList.remove(wi.classList[2])
			}
		})
	}

getWeather()
localStorage.getItem('city') ? document.getElementById("city-input").value = localStorage.getItem('city') : document.getElementById("city-input").value = "Minsk"
document.getElementById("city-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        localStorage.setItem('city', event.target.value)
		getWeather()
    }
  });