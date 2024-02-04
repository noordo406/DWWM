const apiKey = 'cb507937979956af5b48806ba7d849e5'

async function getWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`
    try {
        let calltime = Date.now()
        document.getElementById('errormessage').textContent = "";
        const response = await fetch(apiUrl)
        const data = await response.json()

        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `${data.main.temp}°C`
        if (data.main.temp >= 25) {
            document.getElementById('temperature').classList.add("hot")
            document.getElementById('temperature').classList.remove("cold")
        } else if (data.main.temp <= 10) {
            document.getElementById('temperature').classList.remove("hot")
            document.getElementById('temperature').classList.add("cold")
        } else {
            document.getElementById('temperature').classList.remove("hot")
            document.getElementById('temperature').classList.remove("cold")
        }
        document.getElementById('weather-description').textContent = data.weather[0].description;
        document.getElementById('weather-icon').src = `icons/${data.weather[0].icon}.svg`
        document.getElementById('call-time').textContent = `Données récupérées en ${Date.now() - calltime}ms`
        if (data.weather[0].icon.slice(-1) == "d") {
            data.weather[0].icon.slice(-1)
            document.querySelector('body').classList.add("day")
            document.getElementById('weather-icon').classList.add("day")
            document.getElementById('ball').classList.add("sun")
            document.querySelector('body').classList.remove("night")
            document.getElementById('weather-icon').classList.remove("night")
            document.getElementById('ball').classList.remove("moon")
        } else {
            document.querySelector('body').classList.remove("day")
            document.getElementById('weather-icon').classList.remove("day")
            document.getElementById('ball').classList.remove("sun")
            document.querySelector('body').classList.add("night")
            document.getElementById('weather-icon').classList.add("night")
            document.getElementById('ball').classList.add("moon")
        }
    } catch(error) {
        getWeather('Paris')
        document.getElementById('errormessage').textContent = "Erreur, la ville n'a pas été trouvée";
    }
}

document.querySelector('button').addEventListener('click', function(){
    let city = document.querySelector("#cityinput").value
    if (city != "") {
        getWeather(city)
    }
    
})
getWeather('Paris')