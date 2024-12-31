import { processData } from './weatherAppLogic.js';
import './styles.css';
import GPS from './img/Emey87-Trainee-Gps.48.png';
// import Delete from './img/trash-bin.png';

// DOM for "Weather Results" section of the page
const forecastDisplay = document.querySelector('.search-results');

// let searchText = document.getElementById('search-text').value.trim();

// Template for rendering the current forecast
async function renderCurrentTemp() {
  // let searchText = document.getElementById('search-text').value.trim();

  try {
    // CALL 'processData' function (or 'searchFilter' function?)
    const fetchData = await processData();

    // OBTAIN the 'outlook' object returned from the 'processData' (or 'searchFilter') function
    // SET a variable equal to the 'outlook' object returned from 'processData' function
    const weatherInfo = fetchData.outlook; 

    // CALL 'replaceChildren' method on the DOM element responsible for holding all UI display elements (forecastDisplay) to remove any weather data from previous searches
    // OPTION: May not keep this [here] - move to search button event listener in index module?
    forecastDisplay.replaceChildren(); 

    // CREATE a wrapper element to be added to the weather results area to contain the text used for displaying the weather
    const weatherWrapper = document.createElement('div');
    weatherWrapper.classList.add('weather-wrapper');

    // CREATE a text element to hold the text that displays the actual temperature
    let weatherTemp = document.createElement('h4');
    weatherTemp.classList.add('weather-temp');

    // CALL the 'innerText' method 
    // SET the method equal to the 'temperature' key in the 'outlook' object in order to display the temperature
    weatherTemp.innerText = weatherInfo.temperature + "°F"; 

    // CREATE a text element to display the weather condition equal to the 'icon set parameter'
    const weatherCondition = document.createElement('p');
    weatherCondition.classList.add('weather-condition');
    weatherCondition.innerText = weatherInfo.summary.replace("-", " ");

    // CREATE a wrapper to contain both the location icon and the text for the actual location. Place the next 2 elements under it.
    const locationWrapper = document.createElement('div');
    locationWrapper.classList.add('location-wrapper');

    // CREATE a text element to hold the text that displays the location searched for
    let weatherLocation = document.createElement('p');
    weatherLocation.classList.add('weather-location');
    weatherLocation.innerText = weatherInfo.location;

    // CREATE an image element for displaying the 'location' icon used in Google Maps
    const weatherIcon = new Image();
    weatherIcon.src = GPS;
    weatherIcon.classList.add("image-button");

    // APPEND the location elements under their related location wrapper
    locationWrapper.appendChild(weatherLocation);
    locationWrapper.appendChild(weatherIcon);

    // APPEND the location wrapper containing all location info, the temperature and the weather condition to the wrapper element
    weatherWrapper.appendChild(weatherTemp);
    weatherWrapper.appendChild(weatherCondition);
    weatherWrapper.appendChild(locationWrapper);

    // APPEND the wrapper element to the 'forecastDisplay' element (the UI container)
    forecastDisplay.appendChild(weatherWrapper);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

// BRANCH: Need another function responsible for rendering the 7 Day Forecast called 'renderWeeklyTemps()'


async function getWeatherGIF() {
  // CALL processData function
  const forecastData = await processData();

  // READ the Weather Crossing API's 'icon set parameter' from the returned 'outlook' object (for today's temperature) in processData
  // SET a variable equal to that 'icon set parameter'

  // OPTION: Potentially concatenate "-weather" here to stop the API from getting non-weather related GIFs. Change all conditionals in the first case of the switch statement below to '.startsWith' if we go this route. Not the best since all summary text will show "Weather" at the end of each one in the UI.
  let weatherSummary = forecastData.outlook.summary

  // CREATE an empty <img> element
  const img = document.createElement('img');
  img.src = "#";

  // Temporary placeholder for appending the <img> element for the GIFs (intended to be used as a background image)
  forecastDisplay.appendChild(img);

  // OBTAIN the GIFs from the GIPHY API related to that variable representing the weather text in the 'icon set parameter'
  let summonClip = async () => {
    try {
      const fetchClip = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&q=${weatherSummary}&limit=1`, {mode: 'cors'})
    
      const resultClip = await fetchClip.json();
      console.log(resultClip);

      // BRANCH: Write code that finds the GIF with the largest dimensions in its original version in the data array & display that one

      // CASE weather summary (icon set parameter) OF
      // BRANCH: "clear-" condition always shows a non-weather related GIF as the top GIF from the GIPHY API. Find a fix for this.
      switch (true) {
        case // fetch() a random weather GIF from the GIPHY API for any of these 'icon1' conditions
        (weatherSummary === "snow") || (weatherSummary === "rain") || (weatherSummary === "fog") || 
        (weatherSummary === "wind") || (weatherSummary === "cloudy"): 
          // APPEND the GIF from the API to that <img> element as a background image
          // BRANCH: SHOW the GIF as a background image for the weather results in the UI

          // OPTION: Potentially need a 'replaceChildren()' of some kind here if we change the <img> placeholder above for background image
          img.src = resultClip.data[0].images.original.url;
          img.style.backgroundImage = img.src;
          break; // OPTION: May need to be 'return true' instead

        case // fetch() a random weather GIF from the GIPHY API for these 'icon2' conditions
        (weatherSummary.startsWith("partly-")) || (weatherSummary.startsWith("clear-")) || (weatherSummary.startsWith("thunder-")):
          // APPEND the GIF from the API to that <img> element as a background image
          // BRANCH: SHOW the GIF as a background image for the weather results in the UI

          // OPTION: Potentially need a 'replaceChildren()' of some kind here if we change the <img> placeholder above for background image
          img.src = resultClip.data[0].images.original.url;
          img.style.backgroundImage = img.src;
          break; // OPTION: May need to be 'return true' instead
      }

      // BRANCH: Move this conditional up above the switch statement if possible
      // IF there is no 'icon set parameter' OR there is no weather-related GIF that the GIPHY API can find
      if (!weatherSummary || !fetchClip) {
        // CREATE a <span> or <img> element showing some type of error message as text or an image (browser may show broken image as default)
        const summaryError = document.createElement('span');
        const errorMessage = document.createTextNode("We couldn't find a matching weather GIF :(");

        // APPEND the error message (if needed) to the <span> or <img> element & then that element to the 'search-results' div
        summaryError.appendChild(errorMessage);
        forecastDisplay.appendChild(summaryError); // Placeholder for now. Will refactor this to show as a background image

        // BRANCH: SHOW that element along with any error message in the UI
        // TODO: Figure out how to display the error message as the background image itself (where the GIF would normally be). CSS 'background-image' property with 'url(link)' as the key? Create another container to use as the background and append the error to that?

        // 'return' nothing goes here?
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }

  summonClip();
}

export { renderCurrentTemp, getWeatherGIF }