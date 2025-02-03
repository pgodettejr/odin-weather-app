// Variable that allows both the 'getForecast' and 'processData' functions to declare the same user input location via global scope
let myLocation;

// Variable that allows both toggle functions below to declare the same object created from 'processData' via global scope
let data;

// Hits the API and returns all the weather data for a location
// OPTION: Refactor this to the MDN example we have in Obsidian notes (under 'Divide & Conquer')
async function getForecast(location) { 
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8997Y4VLTDSVA5KYY96GVK9Y4`);

    myLocation = location; // This is so 'processData' below remembers the user input location
    const forecastData = await response.json();

    console.log(forecastData);
    return forecastData;
  } catch (err) {
    console.error(err);
  }
};

// PROCESSES the JSON data we're getting from getForecast() & returns an object that has only the data we need for the app
async function processData() {
  try {
    // CALL getForecast function
    const weather = await getForecast(myLocation);

    // WHEN this function receives the JSON data from getForecast

    // SET a variable equal to the "resolvedAddress" property 
    let address = weather.resolvedAddress;
    console.log(address);

    // SET a variable equal to the "temp" property under the "currentConditions" object
    let todaysTemp = weather.currentConditions.temp;
    console.log(todaysTemp);

    // SET a variable equal to the "icon" property (high level weather summary) under the "currentConditions" object
    let currentSummary = weather.currentConditions.icon;
    console.log(currentSummary);

    // SET a variable equal to the "days" array 
    let futureTemps = weather.days;
    console.log(futureTemps);

    // PRINT a new object that only has the current daily temp, the 7 day forecast and whether or not the temp should be F or C from the JSON
    const outlook = {
      location: address,
      temperature: todaysTemp,
      summary: currentSummary,
      weeklyForecast: [],
      storeForecast: function () {
        // INIT a "for" loop for the "days" array (represents 7 Day Forecast)
        for (const day of futureTemps) { 
          // INIT the counter variable for this loop and set it's value to 1 (1 representing tomorrow's forecast)
          if (day === futureTemps[0]) { 
            continue;
          }

          // WHILE the counter is smaller than 7 
            // GET the temp high, the temp low & the current temp of that day. Increment the counter by 1
            // REPEAT getting temperature and weather conditions for each future date after today's date at the location
            // UNTIL the 7th day after today's date is reached (include the 7th day's future forecast)
          if (day === futureTemps[8]) {
            break;
          }

          let futureForecast = {
            futureDate: day.datetime,
            tempHigh: day.tempmax,
            tempLow: day.tempmin,
            weatherIcon: day.icon
          };
          
          this.weeklyForecast.push(futureForecast);
        }
      }
    }

    outlook.storeForecast();

    // PRINT = console.log()
    console.log(outlook);  

    // SET the global variable 'data' to the 'outlook' object created in this function so the toggle functions below can use the object
    data = outlook; 

    // BRANCH: We still need to return the outlook object here for now because it's linked to the rendering functions in the UI module. If we don't return it as the code is, this happens - TypeError: Cannot read properties of undefined (reading 'outlook')
    // We probably DON'T need it, but it would require changing the lines in the render functions where 'outlook' is fetched
    return { outlook };
  } catch (err) {
    console.error(err);
  }
};

function toggleCelsius() {
  // SET a variable equal to the temperature number
  let getScale = data.temperature;

  // CALCULATE the Fahrenheit temperature in Celsius
  const convertCelsius = () => {
    const celsius = `${((getScale - 32) * 5) / 9}`;
    data.temperature = celsius;
  };

  // BRANCH: This could be useful as a way to test the current value and make sure its in 'Fahrenheit' before changing it (modify this regex?)
  // const test = /(-?\d+(?:\.\d*)?)F\b/g; // Checks for any number ending in "F"

  // CALL 'convertCelsius' to change the Fahrenheit temperature to Celsius in the 'outlook' object
  convertCelsius();

  // PRINT the 'outlook' object to console to confirm the temperature change to Celsius
  console.log(data);
  return { data };
}

function toggleFahrenheit() {
  // SET a variable equal to the temperature number
  let getScale = data.temperature;

  // CALCULATE the Celsius temperature in Fahrenheit
  const convertFahrenheit = () => {
    const fahrenheit = `${(Math.round(((getScale * 9 / 5) + 32) * 10) / 10)}`;
    data.temperature = fahrenheit;
  };

  // BRANCH: This could be useful as a way to test the current value and make sure its in 'Celsius' before changing it (modify this regex?)
  // const test = /(-?\d+(?:\.\d*)?)C\b/g;

  // CALL 'convertFahrenheit' to change the Celsius temperature to Fahrenheit in the 'outlook' object
  convertFahrenheit();

  // PRINT the 'outlook' object to console to confirm the temperature change to Celsius
  console.log(data);
  return { data };
}

export { data, getForecast, processData, toggleCelsius, toggleFahrenheit }