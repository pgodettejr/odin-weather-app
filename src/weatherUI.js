import { getForecast } from './weatherAppLogic.js';
import './styles.css';
import Update from './img/update.png';
// import Delete from './img/trash-bin.png';

// getForecast.response.currentConditions.temp; (for current temp of location searched for)

// TODO: This is for the 7 day forecast. Currently a forEach method. The problem is the JSON hits the next 15 days including today's date.
// Probably needs to be just a 'for' loop where i starts at 1 (i = 1) and ends at 7 (i <= 7), NOT a forEach method like we have here
// getForecast.response.days.forEach(result => {
  // code goes here... })

// Template for rendering the forecast
function renderCurrentTemp() {
  let searchText = document.getElementById('search-text').value.trim();

  if (searchText) { 
    // DOM for "Weather Results" section of the page
    const forecastDisplay = document.querySelector('.search-results');

    forecastDisplay.replaceChildren(); // Erases previous weather results if necessary (may not keep this [here])

    // Generate "Weather" wrapper to be added to the weather results area (div container)
    const weatherWrapper = document.createElement('div');
    weatherWrapper.classList.add('weather-wrapper');
  
    // Temperature in Fahrenheit or Celsius
    let weatherTemp = document.createElement('h4');
    weatherTemp.classList.add('weather-temp');

    // TODO: Test this line of code. If the text isn't correct, figure out how to get the temp results from the fetch request to show here
    // Put this under button logic in index module if necessary
    weatherTemp.innerText = getForecast.response.currentConditions.temp; 

    // TODO: We need a wrapper/container for both the location icon and the text for the actual location. Place the next 2 elements under it.

    // Name of location from the search bar, icon included 
    //TODO: this is a sample. Need to change 'Update' image link above after getting location/map icon from the internet (see Excalidraw)
    const weatherIcon = new Image();
    weatherIcon.src = Update;
    weatherIcon.classList.add("image-button");

    let weatherLocation = document.createElement('p');
    weatherLocation.classList.add('weather-location');
    weatherLocation.innerText = searchText;
    
    // Append everything where it needs to be
    weatherWrapper.appendChild(weatherTemp);
    weatherWrapper.appendChild(weatherIcon);
    weatherWrapper.appendChild(weatherLocation);

    forecastDisplay.appendChild(weatherWrapper);
  }
}

// TODO: Need another function responsible for rendering the 7 Day Forecast

// TODO: Write a function that renders the background matching the weather condition for the day. Try to separate the fetch request by placing it in another function in the app logic module and have this function call that one.

export { renderCurrentTemp }