// Variable that allows both functions below to declare the same user input location via global scope
let myLocation;

// Possibly need this empty array to add the outlooks from processData into
// let outlooks = [];

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
    
    return outlook; // OPTION: Return this like a closure/factory function via 'return { outlook }' so the GIF fetching function has access to the outlook OR push it to the empty array above (outlooks.push(outlook);)? See if simply using 'processData.outlook' in other modules will work first.
  } catch (err) {
    console.error(err);
  }
};

export { getForecast, processData }