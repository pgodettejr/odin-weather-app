async function getForecast() {
  const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=8997Y4VLTDSVA5KYY96GVK9Y4', {mode: 'cors'})

  const forecastData = await response.json();

  console.log(forecastData);
}

export { getForecast }