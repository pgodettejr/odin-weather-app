import { getForecast } from './weatherAppLogic.js';
import './styles.css';
import Plus from './img/plus.png';

// May use as an icon for a button. Delete this along with "import Plus" above if not
const headerTask = document.getElementById("add-task");

const taskIcon = new Image();
taskIcon.src = Plus;
taskIcon.classList.add("image-button");

headerTask.appendChild(taskIcon);


// Template for Search bar

// Search bar DOM
const searchBar = document.getElementById("search-text");

// Search filter event 
searchBar.addEventListener('keyup', searchFilter);

// Search bar functionality
function searchFilter (e) {
  // Convert text to lowercase
  let searchTextConvert = e.target.value.toLowerCase();

  // List of projects
  let projectList = document.querySelectorAll(".project-wrapper");

  // Filters out the project the user wants to search for
  projectList.forEach(project => {
    let projectName = project.firstChild.textContent;

    if (projectName.toLowerCase().indexOf(searchTextConvert) != -1) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  // Attempt to get the search bar to search by tasks as well. Throws a 'Task not found in the tasks array' error.

  // List of tasks
  // let taskList = document.querySelectorAll(".task-wrapper");

  // taskList.forEach(task => {
  //   let taskInfo = task.querySelector(".task-details");
  //   let taskName = taskInfo.firstChild.textContent;

  //   if (taskName.toLowerCase().indexOf(searchTextConvert) != -1) {
  //     task.style.display = 'block';
  //   } else {
  //     task.style.display = 'none';
  //   }
  // });
}