// Access to fetch at 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=8997Y4VLTDSVA5KYY96GVK9Y4' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

// TODO: App currently just hangs when setting the debugger on 'const forecastData' variable to debug its error. Find out why.
// Location parameter may need to be in curly brackets e.g. { location }
async function getForecast(location) { 
  try {
    // Uncaught (in promise) TypeError: Failed to fetch - See top comment (when there was no parameter in this function & fetch link was carbon copy of what was on WeatherC rossing API website as shown in top comment)
    // OPTION: Potentially replace [location] with either the parameter above or whatever represents user input.
    // Possibly add "Access-Control-Expose/Request-Headers: Content-Encoding,API-Key" to the CORS bracket below (see comment at top)
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=8997Y4VLTDSVA5KYY96GVK9Y4`, {mode: 'no-cors'})

    // Before the 'try..catch' method was implemented, this line threw an "Uncaught (in promise) SyntaxError: Unexpected end of input"
    const forecastData = await response.json();

    console.log(forecastData);
    return forecastData;
  } catch (err) {
    // TODO: Getting a "SyntaxError: Unexpected end of input". Find out why (see 'forecastData' variable above)
    console.error(err);
  }
}

export { getForecast }