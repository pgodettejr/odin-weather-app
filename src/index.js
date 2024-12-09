import { getForecast, processData } from './weatherAppLogic.js';
import { renderCurrentTemp } from './weatherUI.js';
import './styles.css';
// import Plus from './img/plus.png';

getForecast("London, UK");
processData();

// Search bar functionality responsible for reading the location data in the search bar and fetching the forecast for that location via 'getForecast' function
// TODO: Refactor this code by continuing to convert it from the GIF search version to weather search instead

// function searchFilter() {
//   // Convert text to lowercase
//   const searchInput = document.querySelector('.search-text').value.toLowerCase();

//   // TODO: Code for condition where there is no location found goes here. See searchFilter sample below except create the span in this function and append it to the appropriate HTML element.

//   getForecast(searchInput);
// };

const searchButton = document.getElementById('search-btn');

// Search button logic that calls the searchFilter function on button click
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  let searchInput = document.querySelector('.search-text').value;
  getForecast(searchInput);
  renderCurrentTemp();

  // getForecast.response.currentConditions.temp; (for current temp of location searched for)

  // TODO: This is for the 7 day forecast. Currently a forEach method. The problem is the JSON hits the next 15 days including today's date
  // Probably needs to be just a 'for' loop where i starts at 1 (i = 1) and ends at 7 (i <= 7), NOT a forEach method like we have here
  // getForecast.response.days.forEach(result => {
    // code goes here... })

});

// Random cat GIF and GIF search code template for use above

// Image for random cat GIF on page load as well as GIF refresh for "More Cats!" button
// const img = document.querySelector('img');
    
// Search DOM
// const searchButton = document.getElementById('search-btn');

// Search bar functionality
// function searchFilter() {
//   const searchInput = document.querySelector('.search-text').value;
//   fetch(`https://api.giphy.com/v1/gifs/search?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&q=${searchInput}&limit=5`, {mode: 'cors'})
//     .then(response => response.json())
//     .then(response => {
//       // Supposed to handle any scenario when GIPHY doesn't find any GIFs related to the search
//       if (response.data.length === 0) {
//         const searchError = document.querySelector('span');
//         const errorText = document.createTextNode("No GIF related to the search was found");
//         searchError.appendChild(errorText);

//         // When this console.log is the only code under this 'then', all data info from the search shows up in console
//         console.log(response); 

//         return; // Supposed to end the function without doing anything else. Do we need it?
//       }

//       const searchResults = document.querySelector('.search-results');
//       searchResults.replaceChildren();

//       response.data.forEach(result => {
//         const gifWrapper = document.createElement("div");
//         gifWrapper.classList.add("result-wrapper");

//         const resultGif = document.createElement("img");
//         resultGif.src = result.images.original.url;

//         gifWrapper.appendChild(resultGif);
//         searchResults.appendChild(gifWrapper);
//       })
//     })
//     .catch(function(err) {
//       console.error(`Error: ${err}`);
//     });  
// };

// async function getCats() {
//   const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&s=cats', {mode: 'cors'})
//   const catData = await response.json();
//   img.src = catData.data.images.original.url;
// }

// getCats();

// const catsButton = document.querySelector('#fetch');

// catsButton.addEventListener('click', async () => {
//   try {
//     const fetchCats = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=Pge93Q0t0NjGU4FoHUse9HbIP6TRMCtP&s=cats', {mode: 'cors'})
//     const anotherCat = await fetchCats.json();
//     img.src = anotherCat.data.images.original.url; 
//   } catch (e) {
//     console.error(`Error: ${e}`);
//   }
// });


// Possible template to use for the weather icons after the user has search for the forecast of a location
// const headerTask = document.getElementById("add-task");

// const taskIcon = new Image();
// taskIcon.src = Plus;
// taskIcon.classList.add("image-button");
// headerTask.appendChild(taskIcon);