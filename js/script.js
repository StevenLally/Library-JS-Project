let library = [];

//Book constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.toggleRead = () => this.read = !this.read;
}

function displayLibrary() {
  const libraryDiv = document.getElementById("library-display");
  //update div with library array content...maybe better to run this only on load then append additions?
}

//push new Book to library array based on form input
function addBookToLibrary() {
  const formInputElements = document.getElementById("new-book-form").elements;

  const title = formInputElements[0].value;
  const author = formInputElements[1].value;
  const pages = formInputElements[2].value;

  library.push(new Book(title, author, pages));
}