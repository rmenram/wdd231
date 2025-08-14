// select HTML elements in the document
const currentTemp = document.querySelector('#weather');
const forecastTemp = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Las Vegas,us&units=imperial&APPID=89a8bf4b946bd962d7f6826d566e77c1';

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Las Vegas,us&units=imperial&APPID=89a8bf4b946bd962d7f6826d566e77c1';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `<p>${data.weather[0].description}</p><p>${data.main.temp}&deg;F</p><p>High: ${data.main.temp_max}&deg;F</p><p>Low: ${data.main.temp_min}&deg;F</p><p>Humidity: ${data.main.humidity}</p><p>Wind: ${data.wind.speed}</p>`;
}

async function forecastFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // testing only
            displayForecast(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    for (let i = 1; i < 40; i += 8) {
        let dateString = data.list[i].dt_txt;
        let dateObject = new Date(dateString);
        //const dayNumber = dateObject.getDay(); // Returns 4 for Thursday
        let options = { weekday: 'long' };
        let dayName = dateObject.toLocaleDateString('en-US', options); // Returns "Thursday"
        let p = document.createElement("p");
        p.textContent = dayName + ": " + data.list[i].main.temp + "\u00B0F";
        forecastTemp.appendChild(p);
    }
}

apiFetch();
forecastFetch();