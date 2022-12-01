let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.showTitle = function() {
    return this.title
  }
  this.showAuthor= function() {
    return this.author
  }
  this.showPages = function() {
    return this.pages
  }
}

function addBookToLibrary() {
  let newBook = new Book (document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value);

  let bookDiv = document.querySelector("#bookDiv");
  let newDiv = document.createElement("div");
  bookDiv.appendChild(newDiv)

  let titleSpan = document.createElement("span")
  titleSpan.textContent = newBook.showTitle()
  newDiv.appendChild(titleSpan)

  let authorSpan = document.createElement("span")
  authorSpan.textContent = newBook.showAuthor()
  newDiv.appendChild(authorSpan)

  let pagesSpan = document.createElement("span")
  pagesSpan.textContent = newBook.showPages()
  newDiv.appendChild(pagesSpan)

  myLibrary.push(newBook)
  // myLibrary.push(newBook.showTitle(), newBook.showAuthor(), newBook.showPages())
  console.log(myLibrary)
}

function popFunction() {
  myLibrary.pop();
  console.log(myLibrary)
}

function formToggle() {
  let x = document.getElementById("formdiv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
