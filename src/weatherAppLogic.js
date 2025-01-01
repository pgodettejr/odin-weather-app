// Variable that allows both functions below to declare the same user input location via global scope
let myLocation;

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

    return { outlook }; 
  } catch (err) {
    console.error(err);
  }
};

export { getForecast, processData }

// TODO: 

// Example code for replacing Fahrenheit degree with its Celsius equivalent
// The 'convert' function sets the Celsius number based on the number of Fahrenheit degrees passed in a string to the f2c function, which then the f2c function returns the number in Celsius. Instead of "x" being the parameter, we would have no parameter in ours.

// Need to figure out a function for the reverse of this as well (Celsius to Fahrenheit) and implement both to each button's logic in index
// Will this method work for the reverse function?: `${(Math.round(((p1 * 9 / 5) + 32) * 10) / 10)}F`;

// function f2c(x) {
//   function convert(str, p1, offset, s) { - // "p1" gives access to the number of Fahrenheit degrees
//     return `${((p1 - 32) * 5) / 9}C`;
//   }
//   const s = String(x);
//   const test = /(-?\d+(?:\.\d*)?)F\b/g; - // Checks for any number ending in "F"
//   return s.replace(test, convert);
// }

// OPTION: Figure out how to access both the Fahrenheit and Celsius degrees from the json returned from the API and store both in the 'outlook' object generated from 'processData()'. Then, render (update renderCurrentTemp in UI) and toggle from there

// Example function to use if we can figure out how to add both numbers to the 'outlook' object above (test this - might not work as is)
// function switchTemp() {
//   let weatherScale = 'F';

//   if (outlook.temperature === outlook.celsius) {
//     outlook.temperature = outlook.fahrenheit;
//   } else {
//     outlook.temperature = outlook.celsius;
//   }

//   document.querySelector('weather-temp').innerText = outlook.temperature + '&deg;' + weatherScale;
// }