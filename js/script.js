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
  // @ts-ignore
  const formInput = document.getElementById("new-book-form").elements;

  const title = formInput[0].value;
  const author = formInput[1].value;
  const pages = formInput[2].value;

  library.push(new Book(title, author, pages));
}