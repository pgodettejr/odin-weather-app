import Update from './img/update.png';
import Delete from './img/trash-bin.png';

// Template for rendering the forecast
function renderForecast() {
  let searchText = document.getElementById("search-text").value.trim();

  if (searchText) { 
    // DOM for "My Projects" section of the sidebar as well as the main area
    const projectSidebar = document.querySelector(".menu-2");
    const main = document.querySelector("main");

    // Generate the sidebar button
    const projectBtn = document.createElement("button");
    let projectBtnText = document.createTextNode(`${searchText}`);
    projectBtn.classList.add("project-btn");
    projectBtn.setAttribute("data-project-title", searchText);

    // Generate "Project" wrapper/container to be added to the main area
    const projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project-wrapper");

    // Generate "Project Name" header to be added to the project container
    const projectName = document.createElement("h4");
    projectName.classList.add("project-name");
    projectName.innerText = searchText;

    // Render "Update" icon button to be added to "Project Name" header
    const updateBtn = document.createElement("button");
    updateBtn.classList.add("update-project");

    const updateIcon = new Image();
    updateIcon.src = Update;
    updateIcon.classList.add("image-button");

    // Render "Delete" icon button to be added to "Project Name" header
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-project");

    const deleteIcon = new Image();
    deleteIcon.src = Delete;
    deleteIcon.classList.add("image-button");
    
    // Append everything where it needs to be
    projectBtn.appendChild(projectBtnText);
    projectSidebar.appendChild(projectBtn);

    updateBtn.appendChild(updateIcon);
    deleteBtn.appendChild(deleteIcon);
    projectWrapper.appendChild(projectName);
    projectWrapper.appendChild(updateBtn);
    projectWrapper.appendChild(deleteBtn);

    main.appendChild(projectWrapper);

    // When here under renderProject():

    // This function will only replace the current project showing in main area once. Will not show another project afterwards if you click it's related sidebar button
    // No matter what button is clicked, all previous <ul> are removed and only the last <ul> shows, even if it's not related to the button clicked.
    // Keep in mind the <ul> remains when renderProject is run, but the project related to it inside the array is deleted due to splice

    // When placed in index.js by itself, the buttons do nothing on click

    // TODO: We need to figure out how to separate this code somehow. renderProject() is doing too much as it is
    // OPTION: HIDE the other projects in the main area instead of outright replacing their elements & add a button to "Show All Projects"
    const projectButtons = document.querySelectorAll(".project-btn");

    projectButtons.forEach(projectBtn => {
      projectBtn.addEventListener('click', () => { // Took the "e" out of the parentheses. Will put it back in if needed later on.
        // TODO: Code to generate the project related to the button clicked via "tabbed browsing" goes here. See example code in comments below.
        // Goal is to render the page elements of the corresponding button WITHOUT recreating the button again

        // TODO: Debug and step through this function and find out exactly what is happening when previously generated buttons are clicked (none of the buttons disappear)
        // NOTE: Do we need to write code that says if the value of the ul is equal to the value of the button, then replace any current content and append the ul of that button?
        main.replaceChildren();

        // OPTION: Try "renderProject(project name selected via button);" instead
        main.appendChild(projectWrapper); // currentProject argument gives Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

        // Previous version that tried to run the code only if the text from the button and the ul matched up

        // const currentProject = document.querySelector(".project-name");

        // if (button.textContent === currentProject.textContent) {
        //   main.replaceChildren(); 
        //   main.appendChild(currentProject);
        // }
      });
    });
  }
}

export { renderForecast }