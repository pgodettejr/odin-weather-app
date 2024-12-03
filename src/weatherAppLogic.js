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
    // WHILE the counter is smaller than 7, increment the counter by 1
    // REPEAT getting temperature and weather conditions for each future date after today's date at the location
    // UNTIL the 7th day after today's date is reached (include the 7th day's future forecast)
  // PRINT a new object that only has the current daily temp, the 7 day forecast and whether or not the temp should be F or C from the JSON
// END

// TODO: Write a function that fetches the GIF that matches the day's forecast (linked to getForecast fetching the Weather Crossing API?)

export { getForecast }