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
*/
let itemsPerPage = 9;

function showPage(list, page) {
   // create two variables that will represent the index for the first and last student on the page
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   
   // select the element with a class of `student-list` and assign it to a variable
   let studentList = document.querySelector("ul.student-list");
   // set the innerHTML property of the variable you just created to an empty string
   studentList.innerHTML = '';
   // loop over the length of the `list` parameter
     // inside the loop create a conditional to display the proper students
       // inside the conditional:
         // create the elements needed to display the student information
         // insert the above elements
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
*/
function addPagination(list) {
  // create a variable to calculate the number of pages needed
  let numOfPages = Math.ceil(list.length/itemsPerPage);
  // select the element with a class of `link-list` and assign it to a variable
  let linkList = document.querySelector("ul.link-list");
  // set the innerHTML property of the variable you just created to an empty string
  linkList.innerHTML = '';
  // loop over the number of pages needed
    // create the elements needed to display the pagination button
    // insert the above elements
  for (let i = 1; i <= numOfPages; i++){
    const button = `
    <li>
      <button type="button">${[i]}</button>
    </li>`;
    linkList.insertAdjacentHTML("beforeend", button);
    // give the first pagination button a class of "active"
    let firstButton = linkList.querySelector("button");
    firstButton.className = "active";
    
  }

// create an event listener on the `link-list` element
  linkList.addEventListener("click", (event) => {
    // if the click target is a button:
      if(event.target.tagName === "BUTTON"){
        let activeElement = linkList.querySelector("button.active");
        activeElement.className = "";
        event.target.className = "active";
        showPage(list, event.target.textContent);
      }
        // remove the "active" class from the previous button
        // add the active class to the clicked button
        // call the showPage function passing the `list` parameter and page to display as arguments
  
    });
    
}


//Call functions
showPage(data,1);
addPagination(data);
