/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
const studentList = document.querySelectorAll('li');
console.log(studentList);
const itemsPerPage = 10;


/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
const showPage = (list, page) => {
/*
Loop over items in the list parameter
-- If the index of a list item is >= the index of the first
item that should be shown on the page
-- && the list item index is <= the index of the last item
that should be shown on the page, show it
*/
const startIndex = (page * itemsPerPage) - itemsPerPage;
const endIndex = (page * itemsPerPage) - 1;

for (let i = 0; i < list.length; i += 1) {
  if (i >= startIndex) {
    if (i <= endIndex) {
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
  }
}
};

showPage(studentList, 1);

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
/*
1. Determine how many pages are needed for the list by dividing the
total number of list items by the max number of items per page.
*/
const totalPages = Math.round((list.length / itemsPerPage) + 1);
/*
2. Create a div, give it the “pagination” class, and append it to the .page div
*/
const childDiv = document.createElement('div');
//console.log(divPage);
childDiv.className = "pagination";

const parentDiv = document.createElement('page');
//console.log(parentDiv);

/*
3. Add a ul to the “pagination” div to store the pagination links
*/
const pageLinks = document.createElement('ul');

parentDiv.appendChild(childDiv);
childDiv.appendChild(pageLinks);

/*
4. for every page, add li and a tags with the page number text
*/


for (let i = 0; i < totalPages; i += 1) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = i;
  a.href = '#'
  li.appendChild(a);
  pageLinks.appendChild(li);



  li.addEventListener('click', (e) => {
      const links = document.querySelectorAll('a');
      const isClicked = event.target;
      showPage(studentList, isClicked.textContent);
  });
}



/*
5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page
*/


/*
6. Loop over pagination links to remove active class from all links
*/



/*
7. Add the active class to the link that was just clicked. You can identify that
clicked link using event.target
*/
}

appendPageLinks(studentList);





// Remember to delete the comments that came with this file, and replace them with your own code comments.
