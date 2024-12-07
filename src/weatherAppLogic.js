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
    // WHILE the counter is smaller than 7 
      // GET the temp high, the temp low & the current temp of that day. Increment the counter by 1
      // REPEAT getting temperature and weather conditions for each future date after today's date at the location
      // UNTIL the 7th day after today's date is reached (include the 7th day's future forecast)
  // PRINT a new object that only has the current daily temp, the 7 day forecast and whether or not the temp should be F or C from the JSON
  // PRINT = console.log()
// END

async function forecastResults() {
  // We need the 'address', the 'temp' from 'currentConditions' and the 'tempmax' & 'tempmin' from object indexes 1-7 in the 'days' array
  
  // We likely also need to return one object with 2 keys, the first key representing today's temp and the second key representing all the future dates, which will show as a nested array with 15 objects. Then, we need to figure out how to only get indexes 1-7 from that array

  const weather = await getForecast("London, UK");

  // ERROR #1 - Uncaught (in promise) TypeError: weather.json is not a function
  // ERROR #2 - Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'json')
  // const weatherData = await weather.response.json();

  // Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'currentConditions') - happens even w/o async await code
  // When there is no async/await code, this line throws an error before getForecast above finishes (probably b/c the func is synchronous)
  // Previously weather.response.currentConditions.temp & getForecast.currentConditions.temp
  let todaysTemp = weather.currentConditions.temp;
  console.log(todaysTemp);

  let futureTemps = weather.days;
  console.log(futureTemps);

  // OPTION: 'Filter' method on 'futureTemps' to only get the first 7 items
  // for (let i = 1; i <= 7; i++) {
  //   if (i <= 7) {
  //     // May need to use 'map' method and/or 'filter' method and create a new array with those instead of what we have below currently
  //     let futureDate = futureTemps[i].datetime;
  //     let tempHigh = futureTemps[i].tempmax;
  //     let tempLow = futureTemps[i].tempmin;

  //     const outlook = {
  //       todaysTemp,
  //       futureDate,
  //       tempHigh,
  //       tempLow
  //     };

  //     // Possibly try 'Array.from' method to change each object to an array and do something with those new arrays?
  //     // let arr = Array.from(outlook);
  //     // alert(arr);
      
  //     // TODO: outlook[i] object with all keys and values shows up in DevTools but "undefined" in console
  //     // TODO: Loops through once but never again after 'return'. If we put 'return' on the outside, how do we get the function to return 7 objects for each future date. Or do we need one object with 2 keys, the first key representing today's temp and the second key representing all the future dates (it would be a nested object or nested array followed by nested objects for each array index)
  //     console.log(outlook[i]);
  //     return outlook[i]; // May need this inside { } for closure reasons?
  //   }
  // }

  // let newObject = {
  //   todaysTemp,
  //   forecastResults.outlook
  // };

  // Possible 'for' loop alternative
  // OPTION: 'Filter' method on 'futureTemps' to only get the first 7 items
  for (let i = 1; i < futureTemps.length; i++) {
    if (futureTemps[i] > 7) {
      break;
    }

    // May need to use 'map' method and/or 'filter' method and create a new array with those instead of what we have below currently
    let futureDate = futureTemps[i].datetime;
    let tempHigh = futureTemps[i].tempmax;
    let tempLow = futureTemps[i].tempmin;

    const outlook = {
      todaysTemp,
      futureDate,
      tempHigh,
      tempLow
    };

   // Possibly try 'Array.from' method to change each object to an array and do something with those new arrays?
   // let arr = Array.from(outlook);
   // alert(arr);

    // TODO: outlook[i] object with all keys and values shows up in DevTools but "undefined" in console
    // TODO: Loops through once but never again after 'return'. If we put 'return' on the outside, how do we get the function to return 7 objects for each future date. Or do we need one object with 2 keys, the first key representing today's temp and the second key representing all the future dates (it would be a nested object or nested array followed by nested objects for each array index)
    console.log(outlook[i]);
    return outlook[i]; // May need this inside { } for closure reasons?
  }

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

// Preslaw example of step 3 function

// function getWeatherDataLocation(weatherData) {
//   // Preslaw note: with city name for example putting here, is that i am supposed to do ?
//   const createObject = {}
//   return createObject
// }

// Cake's take on Preslaw's getUserWeatherLocation() function (Cake: "maybe make this more useable")

// async function getUserWeatherLocation() {
//   try {
//     const response = await fetch(
//       `https://api.weatherapi.com/v1/forecast.json?key=e5de975d30ff49eeb9a70436231107&q=${searchingLocation.value}&days=7`,
//       { mode: 'cors' }
//     );
//     const weatherData = await response.json();
//     showCurrentWeatherData(weatherData);
//     sevenDaysForecast(weatherData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// xCheet initial getLocation function (Cake said this was a good start)

// function getLocation(data) {
//   let location = data.location;

//   console.log(location);
//   return location;
// }

// xCheet making their own object as an example  (Cake says this is good & just add remaining values)

// let myLocation = {
//   country: data.location.country,
//   name: data.location.name
// }

// TODO: Write a function that fetches the GIF that matches the day's forecast (linked to getForecast fetching the Weather Crossing API?). We will need to utilize 'getForecast.response.currentConditions.conditions' to read the weather description & possibly chain the (.then) promises as well (fetch(Weather Crossing), .then(result => fetch(GIPHY)))

export { getForecast, forecastResults }