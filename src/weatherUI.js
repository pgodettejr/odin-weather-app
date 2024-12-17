import { getForecast } from './weatherAppLogic.js';
import './styles.css';
import Update from './img/update.png';
// import Delete from './img/trash-bin.png';

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

// TODO: Need another function responsible for rendering the 7 Day Forecast called 'renderWeeklyTemps()'


// TODO: Write a function getWeatherGIF() that fetches the GIF that matches the day's forecast (linked to getForecast fetching the Weather Crossing API?). We will need to utilize 'getForecast.response.currentConditions.conditions' to read the weather description & possibly chain the (.then) promises as well (fetch(Weather Crossing), .then(result => fetch(GIPHY))). The function should also render the background matching the weather condition for the day.

// CALL processData function (by declaring a variable equal to it)
// READ the Weather Crossing API's 'icon set parameter' from the returned 'outlook' object (for today's temperature) in processData 
// SET a variable equal to that 'icon set parameter'
// OBTAIN a GIF from the GIPHY API related to that variable representing the weather text in the 'icon set parameter'
// SET a variable equal to the 'search-results' div
// IF there is no 'icon set parameter' OR there is no weather-related GIF that the GIPHY API can find
  // CREATE a <span> or <img> element showing some type of error message as text or an image (browser may show broken image as default) 
  // APPEND the error message (if needed) to the <span> or <img> element & then that element to the 'search-results' div
  // SHOW that element along with any error message in the UI
// ELSE
  // CREATE an empty <img> element


  // CASE pseudocode goes here


  // APPEND the GIF from the API to that <img> element as a background image
  // SHOW the GIF as a background image for the weather results in the UI

export { renderCurrentTemp }