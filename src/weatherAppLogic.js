// Hits the API and returns all the weather data for a location
async function getForecast(location) { 
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8997Y4VLTDSVA5KYY96GVK9Y4`);

    const forecastData = await response.json();

    console.log(forecastData);
    return forecastData;
  } catch (err) {
    console.error(err);
  }
};

// PROCESSES the JSON data we're getting from getForecast() & returns an object that has only the data we need for the app
async function processData() {
  // CALL getForecast function
  const weather = await getForecast("London, UK");

  // WHEN this function receives the JSON data from getForecast
  // SET a variable equal to the "temp" property under the "currentConditions" object
  let todaysTemp = weather.currentConditions.temp;
  console.log(todaysTemp);

  // SET a variable equal to the "days" array 
  let futureTemps = weather.days;
  console.log(futureTemps);

  const outlook = {
    temperature: todaysTemp,
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

        // OPTION: Refactor variables & futureForecast below based on xCheet's example object. We would delete current variables & object below

        // let futureForecast = {
        //   futureDate: day.datetime,
        //   tempHigh: day.tempmax,
        //   tempLow: day.tempmin,
        //   weatherIcon: day.icon
        // };

        let futureDate = day.datetime;
        let tempHigh = day.tempmax;
        let tempLow = day.tempmin;
        let weatherIcon = day.icon;

        const futureForecast = {
          futureDate,
          tempHigh,
          tempLow,
          weatherIcon
        };
        
        this.weeklyForecast.push(futureForecast);
      }
    }
  }

  // PRINT a new object that only has the current daily temp, the 7 day forecast and whether or not the temp should be F or C from the JSON
  outlook.storeForecast();

  // PRINT = console.log()
  console.log(outlook);  
  return outlook;
};

// TODO: Write a function that fetches the GIF that matches the day's forecast (linked to getForecast fetching the Weather Crossing API?). We will need to utilize 'getForecast.response.currentConditions.conditions' to read the weather description & possibly chain the (.then) promises as well (fetch(Weather Crossing), .then(result => fetch(GIPHY)))

export { getForecast, processData }