import { getForecast, processData } from './weatherAppLogic.js';
import { renderCurrentTemp } from './weatherUI.js';
import './styles.css';
// import Plus from './img/plus.png';

getForecast("London, UK");
// processData();

// Search bar functionality responsible for reading the location data in the search bar and fetching the forecast for that location
function searchFilter() {
  // OBTAIN the text inside the search bar of the UI and convert that text to lowercase
  const searchInput = document.querySelector('.search-text').value.toLowerCase();

  // CALL getForecast with searchInput as the parameter representing the location to get the weather from
  const myWeather = getForecast(searchInput);
  
  myWeather.then(() => {
    // IF the location that the user inputs can't be found by the weather API THEN
    if (!getForecast) {
      // CREATE a <span> element inside the 'search-results' div with an error message as text
      const searchResults = document.querySelector('.search-results');
      const searchError = document.createElement('span');
      const errorText = document.createTextNode("No GIF related to the search was found");
  
      // APPEND the error message to its <span> element & the <span> element to the 'search-results' div
      searchError.appendChild(errorText);
      searchResults.replaceChildren();
      searchResults.appendChild(searchError);
  
      // SHOW the <span> element with its error message in the UI
      return; // Supposed to end the function without doing anything else. Do we need it?
    // ELSE log the weather location result from the search bar in the console
    } else {
      processData();
    }
    // ENDIF
  })
  .catch(function(err) {
    console.error(`Error: ${err}`);
  });
};

const searchButton = document.getElementById('search-btn');

// Search button logic that calls the searchFilter function on button click
// WHEN the user inputs a location in the Search bar & clicks the Search button
searchButton.addEventListener('click', (e) => { // CALL the searchButton event listener
  e.preventDefault();
  
  searchFilter();

  // REMOVE (HIDE) the Heading element

  // SET the remaining elements to the top of the webpage

  // CALL the render forecast functions under those elements that will:

  // SHOW the forecast for that location for that day
  renderCurrentTemp(); 

  // SHOW the forecast for that location during the next 7 days
  // renderWeeklyTemps();

  // getForecast.response.currentConditions.temp; (for current temp of location searched for)
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