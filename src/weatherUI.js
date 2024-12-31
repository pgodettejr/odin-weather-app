import { processData } from './weatherAppLogic.js';
import './styles.css';
import Update from './img/update.png';
// import Delete from './img/trash-bin.png';

// DOM for "Weather Results" section of the page
const forecastDisplay = document.querySelector('.search-results');

// let searchText = document.getElementById('search-text').value.trim();

// Template for rendering the current/daily forecast
// TODO: We need to take the 'outlook' object we get from 'processData' and render that info to the UI, not what we currently have now. Seeing if there's text in the search bar, then trying to grab the temp from the 'outlook' object for innerText afterwards doesn't make sense.
async function renderCurrentTemp() {
  // let searchText = document.getElementById('search-text').value.trim();

  try {
    // CALL 'processData' function (or 'searchFilter' function?)
      const fetchData = await processData();

    // OBTAIN the 'outlook' object returned from the 'processData' (or 'searchFilter') function
    // SET a variable equal to the 'outlook' object returned from 'processData' function
      const weatherInfo = fetchData.outlook;

    // *ATTEMPT: removed the 'if' statement entirely for testing as it doesn't make sense for this code to run based on search box text. It should just run either based on the object returned from 'processData' or based on its await call using the 'userLocation' as a parameter in the event listener (see 'userLocation' and 'locationTemp' variables in the event listener under the index module)
    // if (searchText) { 

      // CALL 'replaceChildren' method on the DOM element responsible for holding all UI display elements (forecastDisplay) to remove any weather data from previous searches
      // OPTION: May not keep this [here] - move to search button event listener in index module?
      forecastDisplay.replaceChildren(); 

      // CREATE a wrapper element to be added to the weather results area to contain the text used for displaying the weather
      const weatherWrapper = document.createElement('div');
      weatherWrapper.classList.add('weather-wrapper');

      // CREATE a text element to hold the text that displays the actual temperature
      let weatherTemp = document.createElement('h4');
      weatherTemp.classList.add('weather-temp');

      // CALL the 'innerText' method and SET it equal to the 'temperature' key in the 'outlook' object in order to display the temperature

      // TODO: Test this line of code. If the text isn't correct, figure out how to get the temp results from the fetch request to show here
      // Put this under button logic in index module if necessary

      // WAS: Uncaught TypeError: Cannot read properties of undefined (reading 'currentConditions')
      // ATTEMPT #1: Removed '.response' from the expression 'getForecast.response.currentConditions.temp'
      // ATTEMPT #2: Added async/await to the function & this line of code (await getForecast.currentConditions.temp)
      // ATTEMPT #3: Changed to "processData.outlook.temperature"
      // NOW: Uncaught TypeError: Cannot read properties of undefined (reading 'temperature')
      weatherTemp.innerText = weatherInfo.temperature; 

      // CREATE a text element to display the weather condition equal to the 'icon set parameter'
      const weatherCondition = document.createElement('p');
      weatherCondition.classList.add('weather-condition');
      weatherCondition.innerText = weatherInfo.summary;

      // CREATE a wrapper to contain both the location icon and the text for the actual location. Place the next 2 elements under it.
      const locationWrapper = document.createElement('div');
      locationWrapper.classList.add('location-wrapper');

      // CREATE an image element for displaying the 'location' icon used in Google Maps
      // TODO: this is a sample. Need to change 'Update' image link above after getting location/map icon from the internet (see Excalidraw)
      const weatherIcon = new Image();
      weatherIcon.src = Update;
      weatherIcon.classList.add("image-button");

      // CREATE a text element to hold the text that displays the location searched for
      let weatherLocation = document.createElement('p');
      weatherLocation.classList.add('weather-location');
      weatherLocation.innerText = weatherInfo.location;
      
      // APPEND the location elements under their related location wrapper
      locationWrapper.appendChild(weatherIcon);
      locationWrapper.appendChild(weatherLocation);

      // APPEND the location wrapper containing all location info, the temperature and the weather condition to the wrapper element
      weatherWrapper.appendChild(weatherTemp);
      weatherWrapper.appendChild(weatherCondition);
      weatherWrapper.appendChild(locationWrapper);

      // APPEND the wrapper element to the 'forecastDisplay' element (the UI container)
      forecastDisplay.appendChild(weatherWrapper);
    // }
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
  let weatherSummary = forecastData.outlook.summary;

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
      switch (true) {
        case // fetch() a random weather GIF from the GIPHY API for any of these 'icon1' conditions
        (weatherSummary === "snow") || (weatherSummary === "rain") || (weatherSummary === "fog") || 
        (weatherSummary === "wind") || (weatherSummary === "cloudy"): 
          // APPEND the GIF from the API to that <img> element as a background image
          // SHOW the GIF as a background image for the weather results in the UI

          // OPTION: Potentially need a 'replaceChildren()' of some kind here if we change the <img> placeholder above
          img.src = resultClip.data[0].images.original.url;
          img.style.backgroundImage = img.src;
          break; // OPTION: May need to be 'return true' instead

        case // fetch() a random weather GIF from the GIPHY API for these 'icon2' conditions
        (weatherSummary.startsWith("partly-")) || (weatherSummary.startsWith("clear-")) || (weatherSummary.startsWith("thunder-")):
          // APPEND the GIF from the API to that <img> element as a background image
          // SHOW the GIF as a background image for the weather results in the UI

          // OPTION: Potentially need a 'replaceChildren()' of some kind here if we change the <img> placeholder above
          img.src = resultClip.data[0].images.original.url;
          img.style.backgroundImage = img.src;
          break; // OPTION: May need to be 'return true' instead
      }

      // TODO: Move this conditional up above the switch statement if possible
      // IF there is no 'icon set parameter' OR there is no weather-related GIF that the GIPHY API can find
      if (!weatherSummary || !fetchClip) {
        // CREATE a <span> or <img> element showing some type of error message as text or an image (browser may show broken image as default)
        const summaryError = document.createElement('span');
        const errorMessage = document.createTextNode("We couldn't find a matching weather GIF :(");

        // APPEND the error message (if needed) to the <span> or <img> element & then that element to the 'search-results' div
        summaryError.appendChild(errorMessage);
        forecastDisplay.appendChild(summaryError); // Placeholder for now. Will refactor this to show as a background image

        // SHOW that element along with any error message in the UI
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