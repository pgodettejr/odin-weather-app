// Access to fetch at 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=8997Y4VLTDSVA5KYY96GVK9Y4' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

// OPTION: Add location as a parameter to this function if it still doesn't work as is (AFTER solving CORS issue). May need to be in curly brackets e.g. { location }
async function getForecast() { 
  // Uncaught (in promise) TypeError: Failed to fetch - See top comment
  const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=8997Y4VLTDSVA5KYY96GVK9Y4', {mode: 'cors'})

  const forecastData = await response.json();

  console.log(forecastData);
}

export { getForecast }