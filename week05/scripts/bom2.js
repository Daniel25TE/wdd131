const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => { displayList(chapter); });

function displayList(item) {
    let li =document.createElement('li'); // create a new list item
    let deletebutton = document.createElement('button'); // create a new button
    li.textContent = item;
    deletebutton.textContent = '❌'; // set the button text to "delete"
    deletebutton.classList.add('delete'); // add a class to the button for styling
    li.append(deletebutton); // append the button to the list item
    list.append(li); // append the list item to the list
    deletebutton.addEventListener('click', function() {
        list.removeChild(li);
        deleteChapter(li.textContent); // remove the chapter from the array
        input.focus();
    })
    console.log('I do not like to copy code.');
}
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray)); // save the array to localStorage
}
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')); // get the array from localStorage
}
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter); // remove the chapter from the array
    setChapterList();
}

button.addEventListener('click', () => {
    if (input.value != '') {  // make sure the input is not empty
      displayList(input.value); // call the function that outputs the submitted chapter
      chaptersArray.push(input.value);  // add the chapter to the array
      setChapterList(); // update the localStorage with the new array
      input.value = ''; // clear the input
      input.focus(); // set the focus back to the input
    }
  });
