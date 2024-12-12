import { getForecast, processData } from './weatherAppLogic.js';
// import { renderCurrentTemp } from './weatherUI.js';
import './styles.css';
// import Plus from './img/plus.png';

getForecast("London, UK");
// processData();

// Search bar functionality responsible for reading the location data in the search bar and fetching the forecast for that location via 'getForecast' function
function searchFilter() {
  // Convert text to lowercase
  const searchInput = document.querySelector('.search-text').value.toLowerCase();

  // TODO: If we run processData on its own, the location is 'undefined'. If we run both of these together, getForecast grabs the correct location but processData shows an 'undefined' location when it awaits getForecast (see 'weather' variable in processData)
  getForecast(searchInput);
  processData(searchInput);

  // Handle any scenario where there is no location found to get weather for
  if (!processData) {
    const searchResults = document.querySelector('.search-results');
    const searchError = document.createElement('span');
    const errorText = document.createTextNode("No GIF related to the search was found");

    searchError.appendChild(errorText);
    searchResults.replaceChildren();
    searchResults.appendChild(searchError);

    // We had 'response' as the parameter from the cat GIF project but we can't use that here
    // console.log(); 

    return; // Supposed to end the function without doing anything else. Do we need it?
  }
};

const searchButton = document.getElementById('search-btn');

// Search button logic that calls the searchFilter function on button click
// WHEN the user inputs a location in the Search bar & clicks the Search button
searchButton.addEventListener('click', (e) => { // CALL the searchButton event listener
  e.preventDefault();
  
  // TODO: Test this to see if it calls correctly without the variable declared along with it being added as a parameter to the function call
  // let searchInput = document.querySelector('.search-text').value;
  searchFilter(); // Had 'searchInput' here before

  // REMOVE (HIDE) the Heading element

  // SET the remaining elements to the top of the webpage

  // CALL the render forecast functions under those elements that will:
  // renderCurrentTemp(); // SHOW the forecast for that location for that day as well as the next 7 days

  // getForecast.response.currentConditions.temp; (for current temp of location searched for)
  console.log("Success!");
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