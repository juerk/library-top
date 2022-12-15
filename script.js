let myLibrary = [];
let book = "book";

// function Book(title, author, pages) {
//   this.title = title
//   this.author = author
//   this.pages = pages
// }

// const newBook = new Book(title, author, pages) 

function addBookToLibrary() {
  myLibrary.push(book)
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

  removeButton.setAttribute('id', 'removeBtn')
  removeButton.innerText = "Remove"
  bookDiv.appendChild(removeButton)
  mainDiv.appendChild(bookDiv)

  removeButton.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    render()
  })
  console.log(myLibrary)
}



