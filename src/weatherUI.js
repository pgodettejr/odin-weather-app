import { getForecast, processData } from './weatherAppLogic.js';
import './styles.css';
import Update from './img/update.png';
// import Delete from './img/trash-bin.png';

// DOM for "Weather Results" section of the page
const forecastDisplay = document.querySelector('.search-results');

// Template for rendering the forecast
function renderCurrentTemp() {
  let searchText = document.getElementById('search-text').value.trim();

  if (searchText) { 
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


// OPTION: Possibly need to chain the (.then) promises as well (fetch(Weather Crossing), .then(result => fetch(GIPHY))). 

// See if simply using 'processData.outlook(.summary)' will work first. The function should also render the background matching the weather condition for the day.

// CALL processData function (by declaring a variable equal to it? as a parameter of the function itself? Do we call it at all?)
function getWeatherGIF() {
  // READ the Weather Crossing API's 'icon set parameter' from the returned 'outlook' object (for today's temperature) in processData 
  // SET a variable equal to that 'icon set parameter'
  let weatherSummary = processData.outlook.summary;

  // CREATE an empty <img> element
  const img = document.createElement('img');
  img.src = "#";

  // Temporary placeholder for appending the <img> element for the GIFs to be appended to for now (intended to be used as a background image)
  forecastDisplay.appendChild(img);

  // OBTAIN the GIFs from the GIPHY API related to that variable representing the weather text in the 'icon set parameter'
  let summonClip = async () => {
    const fetchClip = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&q=${weatherSummary}`, 
      {mode: 'cors'})
    
    const resultClip = await fetchClip.json();

    // CASE weather summary (icon set parameter) OF
    switch (true) {
      case // fetch() a random weather GIF from the GIPHY API for any of these 'icon1' conditions
      (weatherSummary === "snow") || (weatherSummary === "rain") || (weatherSummary === "fog") || 
      (weatherSummary === "wind") || (weatherSummary === "cloudy"): 
        // APPEND the GIF from the API to that <img> element as a background image
        // SHOW the GIF as a background image for the weather results in the UI

        // OPTION: Potentially need a 'replaceChildren()' of some kind here if we change the <img> placeholder above
        img.src = resultClip.data.images.original.url;
        img.style.backgroundImage = img.src;
        break; // OPTION: May need to be 'return true' instead

      case // fetch() a random weather GIF from the GIPHY API for these 'icon2' conditions
      (weatherSummary.startsWith("partly-")) || (weatherSummary.startsWith("clear-")) || (weatherSummary.startsWith("thunder-")):
        // APPEND the GIF from the API to that <img> element as a background image
        // SHOW the GIF as a background image for the weather results in the UI

        // OPTION: Potentially need a 'replaceChildren()' of some kind here if we change the <img> placeholder above
        img.src = resultClip.data.images.original.url;
        img.style.backgroundImage = img.src;
        break; // OPTION: May need to be 'return true' instead
    }

    // IF there is no 'icon set parameter' OR there is no weather-related GIF that the GIPHY API can find
    if (!weatherSummary || !fetchClip) {
      // CREATE a <span> or <img> element showing some type of error message as text or an image (browser may show broken image as default)
      const summaryError = document.createElement('span');
      const errorMessage = document.createTextNode("We couldn't find a matching weather GIF :(");

      // APPEND the error message (if needed) to the <span> or <img> element & then that element to the 'search-results' div
      summaryError.appendChild(errorMessage);

      // SHOW that element along with any error message in the UI
      // TODO: Figure out how to display the error message as the background image itself (where the GIF would normally be). CSS 'background-image' property with 'url(link)' as the key? Create another container to use as the background and append the error to that?

      // 'return' nothing goes here?
    }
  }

  summonClip();
}

export { renderCurrentTemp, getWeatherGIF }