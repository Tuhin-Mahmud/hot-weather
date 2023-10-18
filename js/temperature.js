const API_KEY = `0b2f6adc4b7bd9a765b003ced899ea5b`

const loadWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
}

const displayWeather = (data) => {
    console.log(data);
    // const temperature = document.getElementById('temperature')
    // temperature.innerText = data.main.temp
    setInnerText('temperature', data.main.temp)
    setInnerText('condition', data.weather[0].main)

}
const setInnerText = (id, text) => {
    console.log(id, text);
    const temperature = document.getElementById(id)
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field')
    const city = searchField.value;
    // set city 
    document.getElementById('city').innerText = city
    loadWeather(city)

})
loadWeather('Dhaka')