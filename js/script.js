/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//set global variables
const studentList = document.querySelectorAll('li');
const itemsPerPage = 10;

//function that allows only 10 students to display upon opening webpage
const showPage = (list, page) => {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = (page * itemsPerPage) - 1;
  for (let i = 0; i < list.length; i += 1) {
    if ((i >= startIndex) && (i <= endIndex)) {
        list[i].style.display = '';
      } else {
        list[i].style.display = 'none';
      }
    }
};

//shows page 1 initially, pulls first ten students
showPage(studentList, 1);

//function that includes dynamic links and allows user to move through pages, showing 10 list items at a time, regardless of list size
const appendPageLinks = (list) => {
  const totalPages = Math.round((list.length / itemsPerPage) + 1);
  const childDiv = document.createElement('div');
  childDiv.className = "pagination";
  const parentDiv = document.querySelector('.page');
  parentDiv.appendChild(childDiv);
  const pageLinks = document.createElement('ul');
  childDiv.appendChild(pageLinks);

//this loop creates the links the user has available to them to move through pages
  for (let i = 1; i <= totalPages; i += 1) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = i //assign a text content = i
    a.href = '#'; //taken from example-meets.html?
    li.appendChild(a);
    pageLinks.appendChild(li);

    //add the active class name to the first pagination link (1) initially
    if (i == 1) {
      a.classList.add('active');
    };

//even listener that sets new active set of list items and removes old active set (not sure how else to word this right now)
  li.addEventListener('click', (e) => {
    const aLinks = document.querySelectorAll('a');
    const clicked = event.target;

    showPage(studentList, clicked.textContent);

    for (let i = 0; i < aLinks.length; i ++) {
      aLinks[i].classList.remove('active');
      if (clicked) {
        clicked.className = 'active';
        }
      }
    })
  }
};

appendPageLinks(studentList); //call appendPageLinks func with list name as an argument
