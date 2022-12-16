let myLibrary = [];

let titleValue = document.getElementById('title').value
let authorValue = document.getElementById('author')
let pagesValue = document.getElementById('pages')

function Book(title, author, pages) {
  this.title = form.title.value
  this.author = form.author.value
  this.pages = form.pages.value
}

const addBookButton = document.getElementById('addBookButton')
addBookButton.addEventListener('click', function(){
  addBookToLibrary()
})

function addBookToLibrary() {
  event.preventDefault()
  const newBook = new Book(title, author, pages) 
  myLibrary.push(newBook)
  render()
}

function render() {
  const display = document.getElementById('mainDiv');
  const books = document.querySelectorAll('.bookDiv');
  books.forEach(book => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i])
  }
}

function createBook(item) {
  let mainDiv = document.getElementById('mainDiv')
  let removeButton = document.createElement('button')
  let bookDiv = document.createElement('div')

  bookDiv.classList.add('bookDiv')
  bookDiv.setAttribute('id', myLibrary.indexOf(item))

  mainDiv.appendChild(bookDiv)

  removeButton.setAttribute('id', 'removeBtn')
  removeButton.innerText = "Remove"
  bookDiv.appendChild(removeButton)

  removeButton.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    render()
  })
  console.log(myLibrary)
}

function toggleBookForm() {
  let bookForm = document.getElementById('form')
  if (bookForm.style.display === 'none'){
    bookForm.style.display = 'block'
  } else {
    bookForm.style.display = 'none'
  }
}




// Add Book button should pop up a form for client to fill in values for title, author, pages, has read
// Add DOM elements to display book info on book cards
// add button that toggles read/not read



