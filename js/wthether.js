// const API_KEY = `0b2f6adc4b7bd9a765b003ced899ea5b`;

// const loadTemperature = (city) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayTemperature(data))
// }

// const displayTemperature = (data) => {
//     // const temperature = document.getElementById('Temperature')
//     // temperature.innerText = data.main.temp
//     setInnerTextById('Temperature', data.main.temp)
//     setInnerTextById('condition', data.weather[0].main)
//     console.log(data.weather[0].main);

// }

// const setInnerTextById = (id, text) => {
//     const temperature = document.getElementById(id)
//     temperature.innerText = text;
// }

// document.getElementById('btn-search').addEventListener('click', function () {
//     const searchField = document.getElementById('search-field')
//     const city = searchField.value;
//     console.log(city);
//     // st city
//     document.getElementById('city').innerText = city;

//     loadTemperature(city)

// })
// loadTemperature('dhaka')











// const API_KEY = `0b2f6adc4b7bd9a765b003ced899ea5b`;

// const loadTemperature = (city) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayTemperature(data))

// }
// const displayTemperature = (data) => {
//     console.log(data.weather[0].main);
//     // const temperature = document.getElementById('Temperature')
//     // temperature.innerText = data.main.temp;
//     setInnerTextById('Temperature', data.main.temp)
//     setInnerTextById('condition', data.weather[0].main)
// }

// const setInnerTextById = (id, text) => {
//     const temperature = document.getElementById(id)
//     temperature.innerText = text;

// }

// document.getElementById('btn-search').addEventListener('click', function () {
//     const searchField = document.getElementById('search-field')
//     const city = searchField.value;
//     // set city
//     const changeCity = document.getElementById('city')
//     changeCity.innerText = city;
//     loadTemperature(city)

//     // document.getElementById('city').innerText = city
// })
// loadTemperature('dhaka')