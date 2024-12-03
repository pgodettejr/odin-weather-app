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

// TODO: Write a function here that PROCESSES the JSON data we're getting from the getForecast() function above & return an object that has only the data we need for the app (current daily temp, 7 day temp forecast, showing temp in Fahrenheit or Celsius, etc.)

// BEGIN
// CALL getForecast function (are we doing async/await here?)
  // WHEN this function receives the JSON data from getForecast
  // SET a variable equal to the "temp" property under the "currentConditions" object
  // SET a variable equal to the "days" array 
  // INIT a "for" loop for the "days" array (represents 7 Day Forecast)
    // INIT the counter variable for this loop and set it's value to 1 (1 representing tomorrow's forecast)
    // WHILE the counter is smaller than 7, get the temp high, the temp low & the current temp of that day. Increment the counter by 1
    // REPEAT getting temperature and weather conditions for each future date after today's date at the location
    // UNTIL the 7th day after today's date is reached (include the 7th day's future forecast)
  // PRINT a new object that only has the current daily temp, the 7 day forecast and whether or not the temp should be F or C from the JSON
  // PRINT = console.log()
// END

async function forecastResults() {
  let weather = await getForecast();

  let todaysTemp = weather.response.currentConditions.temp;
  let futureTemps = weather.response.days;

  // OPTION: 'Filter' method on 'futureTemps' to only get the first 7 items
  for (let i = 1; i <= 7; i++) {
    if (i <= 7) {
      // May need to use 'map' method and/or 'filter' method and create a new array with those instead of what we have below currently
      let futureDate = futureTemps[i].datetime;
      let tempHigh = futureTemps[i].tempmax;
      let tempLow = futureTemps[i].tempmin;

      const outlook = {
        futureDate,
        tempHigh,
        tempLow
      };

      // Possibly try 'Array.from' method to change each object to an array and do something with those new arrays?
      // let arr = Array.from(outlook);
      // alert(arr);
      
      return outlook; // May need this inside { } for closure reasons?
    }
  }

  // let newObject = {
  //   todaysTemp,
  //   forecastResults.outlook
  // };

  // Possible 'for' loop alternative
  // for (let i = 1; i < futureTemps.length; i++) {
  //   if (futureTemps[i] > 7) {
  //     break;
  //   }

  //   // May need to use 'map' method and/or 'filter' method and create a new array with those instead of what we have below currently
  //   let futureDate = futureTemps[i].datetime;
  //   let tempHigh = futureTemps[i].tempmax;
  //   let tempLow = futureTemps[i].tempmin;

  //   const outlook = {
  //     futureDate,
  //     tempHigh,
  //     tempLow
  //   };

  //   return outlook; // May need this inside { } for closure reasons?
  // }

  // Maybe we CAN use a 'for...of' loop but get it to stop at the 7th element/index. My first attempt but 'day' (variable) wasn't defined
  // for (const day of futureTemps) {
  //   if (futureTemps[day] > 7) {
  //     break;
  //   }

  //   let futureDate = futureTemps[day].datetime;
  //   let tempHigh = futureTemps[day].tempmax;
  //   let tempLow = futureTemps[day].tempmin;

  //   const outlook = {
  //     futureDate,
  //     tempHigh,
  //     tempLow
  //   };
    
  //   return outlook;
  // }

  // OPTION: Using 'map' or 'filter' on the original 'days' array is another approach
};

// TODO: Write a function that fetches the GIF that matches the day's forecast (linked to getForecast fetching the Weather Crossing API?). We will need to utilize 'getForecast.response.currentConditions.conditions' to read the weather description.

export { getForecast }