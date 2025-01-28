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

    // We still need to return the outlook object here for now because it's linked to the rendering functions in the UI module. If we don't return it as the code is, this happens - TypeError: Cannot read properties of undefined (reading 'outlook')
    // We probably DON'T need it, but it would require changing the lines in the render functions where 'outlook' is fetched
    return { outlook };
  } catch (err) {
    console.error(err);
  }
};

// TODO: Functions are saying that the 'x' parameter is null everywhere it's called and the 's' variable where the String is the expression is also 'null'. Function isn't pulling the 'tempScale' DOM (the text in the h4 element) to use as the parameter to toggle at all.

// *ATTEMPT #1: Removed 'x' as the parameter everywhere its mentioned in both functions to see if that solved null since 'tempScale' is the parameter on the event listener in index module. It simply make the 's' variable equal an empty string.

// ATTEMPT #2: Declare the h4 element tag in the DOM inside the button logic in the index module, then rework both of these functions to still include the equation being returned except change it in our custom 'outlook' object (declare the object in both functions, then code the rest based on that), then directly render it in the button logic in the index module

// BEFORE ATTEMPT #3: Pseudocode both functions below AND the event listener buttons in the index module

// Example code for replacing Fahrenheit degree with its Celsius equivalent using the 'replace()' method in JS
// The 'convert' function sets the Celsius number based on the number of Fahrenheit degrees passed in a string to the f2c function, which then the f2c function returns the number in Celsius. Instead of "x" being the parameter, we would have no parameter in ours.

// See 'Revisiting Rock Paper Scissors' lesson in Foundations to learn how to merge the branch correctly when the F/C feature is done


// ***WHERE WE LAST LEFT OFF (READ FIRST)***

// Every time 'processData' is called (even via 'async/await' when declaring a variable using 'processData' as the expression), a new object is created due to 'processData' calling 'getForecast', which makes a new API call to Weather Crossing

// How do we take existing objects/json we've already pulled from an API and use/declare info from them without calling the API again? How do we take a new object we created from the API call/json, change a value on one of its properties, then return that value/info without fetching a new object via another API call (by calling 'processData' or 'getForecast')?


// Remember that these toggle functions should only be responsible for toggling the temps in the outlook object, NOT displaying F/C in the UI
// TODO: Remove 'async' from both toggle functions and see if they still work properly (they no longer call processData)

async function toggleCelsius() {
  // Declare the 'outlook' object here
  // GET the 'outlook' object returned from 'processData'
  // let outlook = await processData.outlook; // TODO: 'outlook = undefined' when trying to declare the object returned from 'processData'


  // TODO: Still need to find a way to use the original 'outlook' object that 'processData' returns w/o having to call the function again 
  // *ATTEMPT #1: Made the toggle function async/await & changed this to 'await processData.outlook'
  // ATTEMPT #2: Same as first attempt except 'await' on 'processData' only, then declare the temp variable off of that (just like in UI funcs)
  // CALL the 'processData' function
  // const fetchOutlook = await processData();

  // SET a variable equal to the temperature number
  // let getScale = fetchOutlook.outlook.temperature;
  let getScale = data.temperature; // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'temperature') line 114

  // function convertCelsius(str, getScale, offset, scale) { // "getScale" gives access to the number of Fahrenheit degrees
  //   return `${((getScale - 32) * 5) / 9}C`;
  // }

  // CALCULATE the Fahrenheit temperature in Celsius
  const convertCelsius = () => {
    const celsius = `${((getScale - 32) * 5) / 9}`; // TODO: Try adding 'Math.round' & see what happens (e.g. convertFahrenheit below)
    // fetchOutlook.outlook.temperature = celsius;
    data.temperature = celsius;
  };

  // const scale = String(arg);

  // BRANCH: This could be useful as a way to test the current value and make sure its in 'Fahrenheit' before changing it (modify this regex?)
  // const test = /(-?\d+(?:\.\d*)?)F\b/g; // Checks for any number ending in "F"

  // Uncaught (in promise) TypeError: getScale.replace is not a function - because 'replace' looks for a String, not a value from an object
  // return scale.replace(test, convertCelsius);

  // CALL 'convertCelsius' to change the Fahrenheit temperature to Celsius in the 'outlook' object
  convertCelsius();

  // PRINT the 'outlook' object to console to confirm the temperature change to Celsius
  // console.log(fetchOutlook);
  // return { fetchOutlook };
  console.log(data);
  return { data };
}

// Our first attempt at the reverse of the above function (Celsius to Fahrenheit). Implement both functions to each button's logic in index?
// Test this method to see if it works? We might not need 'Math.round()': `${(Math.round(((p1 * 9 / 5) + 32) * 10) / 10)}F`;

// TODO: Current issue is when switching back and forth between Fahrenheit and Celsius, the original 'outlook' object doesn't seem to change as far as the temp value goes. Are the toggle functions simply returning a copy of the original object when they are run? Basically, we are able to switch the temperature scale once but can't switch it again after that (Fahrenheit calculates off the previous Fahrenheit, NOT the current Celsius for example)

// *ATTEMPT #1: Tried to use the logical OR ( II ) operator to represent either object (original or changed) in the 'getScale' variable but doesn't work

async function toggleFahrenheit() {
   // CALL the 'processData' function
  //  const fetchOutlook = await processData();

   // SET a variable equal to the temperature number
  //  let getScale = fetchOutlook.outlook.temperature;

  let getScale = data.temperature;

  // TODO: Rewrite this function as a function expression (copy/paste convertCelsius above except use this Math.round equation instead)
  // function convertFahrenheit(str, p1, offset, s) { // "p1" gives access to the number of Celsius degrees
  //   return `${(Math.round(((p1 * 9 / 5) + 32) * 10) / 10)}F`;
  // }

  // CALCULATE the Celsius temperature in Fahrenheit
  const convertFahrenheit = () => {
    const fahrenheit = `${(Math.round(((getScale * 9 / 5) + 32) * 10) / 10)}`;
    // fetchOutlook.outlook.temperature = fahrenheit;
    data.temperature = fahrenheit;
  };

  // const s = String();

  // BRANCH: This could be useful as a way to test the current value and make sure its in 'Celsius' before changing it (modify this regex?)
  // const test = /(-?\d+(?:\.\d*)?)C\b/g;

  // return s.replace(test, convertFahrenheit);

  // CALL 'convertFahrenheit' to change the Celsius temperature to Fahrenheit in the 'outlook' object
  convertFahrenheit();

  // PRINT the 'outlook' object to console to confirm the temperature change to Celsius
  // console.log(fetchOutlook);
  // return { fetchOutlook };
  console.log(data);
  return { data };
}

// Delete the commented section below when the current F/C branch is complete. The API doesn't have the temp in both Fahrenheit & Celsius

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

export { getForecast, processData, toggleCelsius, toggleFahrenheit }