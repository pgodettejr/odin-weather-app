import { data, getForecast, processData, toggleCelsius, toggleFahrenheit } from './weatherAppLogic.js';
import { renderCurrentTemp, getWeatherGIF } from './weatherUI.js';
import './styles.css';

// Search bar functionality responsible for reading the location data in the search bar and fetching the forecast for that location
async function searchFilter() {
  // OBTAIN the text inside the search bar of the UI and convert that text to lowercase
  const searchInput = document.querySelector('.search-text').value.toLowerCase();
  
  try {
    // CALL getForecast with searchInput as the parameter representing the location to get the weather from
    const myWeather = await getForecast(searchInput);

    // IF the location that the user inputs can't be found by the weather API THEN
    if (!myWeather) {
      // CREATE a <span> element inside the 'search-results' div with an error message as text
      const searchResults = document.querySelector('.search-results');
      const searchError = document.createElement('span');
      const errorText = document.createTextNode("No GIF related to the search was found");
  
      // APPEND the error message to its <span> element & the <span> element to the 'search-results' div
      searchError.appendChild(errorText);
      searchResults.replaceChildren();
      searchResults.appendChild(searchError);
  
      // SHOW the <span> element with its error message in the UI
      // BRANCH: Supposed to end the function without doing anything else. Do we need it?
      return; 
    // ELSE log the weather location result from the search bar in the console
    } else {
      processData();
    }
    // ENDIF
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

const searchButton = document.getElementById('search-btn');

// Search button logic that calls the searchFilter function on button click
// WHEN the user inputs a location in the Search bar & clicks the Search button
searchButton.addEventListener('click', async (e) => { // CALL the searchButton event listener
  e.preventDefault();
  
  // Variable for 'searchFilter' function
  const userLocation = await searchFilter();

  // BRANCH: REMOVE (HIDE) the Heading element

  // BRANCH: SET the remaining elements to the top of the webpage

  // CALL the render forecast functions under those elements that will:

  // SHOW the forecast for that location for that day
  const locationTemp = await renderCurrentTemp(userLocation);
  
  // BRANCH: SHOW the forecast for that location during the next 7 days
  // renderWeeklyTemps

  // DISPLAY the GIF for the related weather condition as a background image
  getWeatherGIF(userLocation);

  // BRANCH: Do we even need to return this?
  return locationTemp;
});

// Fahrenheit and Celsius button logic that call 'toggleFahrenheit()' & 'toggleCelsius()' respectively to toggle the temperature number being shown in the UI of the current location between the degrees in Fahrenheit and the degrees in Celsius
const fahrenheitBtn = document.getElementById('fahrenheit-btn');
const celsiusBtn = document.getElementById('celsius-btn');

fahrenheitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let celsiusScale = document.querySelector('.weather-temp');
  toggleFahrenheit(celsiusScale);
  celsiusScale.innerText = data.temperature + "°F"
});

celsiusBtn.addEventListener('click', (e) => {
  e.preventDefault();

  let fahrenheitScale = document.querySelector('.weather-temp');
  toggleCelsius(fahrenheitScale);
  fahrenheitScale.innerText = data.temperature + "°C"
});