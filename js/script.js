/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
It defines variables to loop through the list parameter to display the student information
*/

function showPage(list, page) {
   // Creates two variables that will represent the index for the first and last student on the page
   let itemsPerPage = 9;
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   
   let studentList = document.querySelector("ul.student-list");
   studentList.innerHTML = '';
   // The loop to diplay student information
    for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
        let studentItem = `
          <li class="student-item cf">
            <div class="student-details">
              <img class= "avatar" src= ${list[i].picture.large} alt="Profile Picture"></img>
              <h3> ${list[i].name.first} , ${list[i].name.last} </h3>
              <span class= "email:"> ${list[i].email} </span>
            </div>
            <div class="joined-details">
              <span class="date">Joined ${list[i].registered.date} </span>
            </div>
          </li> `;
          studentList.insertAdjacentHTML("beforeend", studentItem);
      } 
  }
 }

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
It creates variables that loop over the number of pages needed and display the buttons
*/
function addPagination(list) {
  // Creates variable to calculate the number of pages needed
  let itemsPerPage = 9;
  let numOfPages = Math.ceil(list.length/itemsPerPage);
  let linkList = document.querySelector("ul.link-list");
  linkList.innerHTML = '';
  
  for (let i = 1; i <= numOfPages; i++){
    const button = `
    <li>
      <button type="button">${[i]}</button>
    </li>`;
    linkList.insertAdjacentHTML("beforeend", button);

    // Gives the first pagination button a class of "active"
    let firstButton = linkList.querySelector("button");
    firstButton.className = "active";
  }

// An event listener when the button element is clicked
  linkList.addEventListener("click", (event) => {
    // If the click target is a button:
      if(event.target.tagName === "BUTTON"){
        let activeElement = linkList.querySelector("button.active");
        activeElement.className = "";
        event.target.className = "active";
        showPage(list, event.target.textContent);
      }
    });
}

// Calls functions
showPage(data,1);
addPagination(data);
