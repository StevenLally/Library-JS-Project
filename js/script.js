let library = [];

//Book constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

//add individual book to display table in index.html
function appendBookToTable(book){
  book.toggleRead = () => book.read = !book.read;
  const row = document.createElement("tr");

  const title = document.createElement("td");
  title.innerText = book.title; 

  const author = document.createElement("td");
  author.innerText = book.author;

  const pages = document.createElement("td");
  pages.innerText = book.pages;

  const read = document.createElement("td");
  read.innerText = book.read ? "Yes" : "No";

  const toggleRead = document.createElement("td");
  toggleRead.innerHTML = '<button type="button" class="btn btn-success">Toggle Read</button>';
  toggleRead.addEventListener("click", () => {
    book.toggleRead();
    updateStorage();
    read.innerText = book.read ? "Yes" : "No";
  })

  const remove = document.createElement("td");
  remove.innerHTML = '<button type="button" class="btn btn-secondary">Remove</button>';
  remove.addEventListener("click", () => {
    const index = library.indexOf(book);
    library.splice(index, 1);
    updateStorage();

    row.remove();
  });
  
  row.append(title, author, pages, read, toggleRead, remove);

  document.querySelector("tbody").append(row);
}

//push new Book to library array based on form input
function addBookToLibrary() {
  // @ts-ignore
  const formInput = document.getElementById("new-book-form").elements;

  const title = formInput[0].value;
  const author = formInput[1].value;
  const pages = formInput[2].value;

  let newBook = new Book(title, author, pages);
  library.push(newBook);

  updateStorage();

  appendBookToTable(newBook);
}

//display any previously stored books in array upon page load
function displayLibrary() {
  const libraryDiv = document.getElementById("library-display");
    library.forEach((book) => appendBookToTable(book));
}

//update localStorage
function updateStorage() {
  localStorage.setItem('library', JSON.stringify(library));
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem('library')) {
    library = JSON.parse(localStorage.getItem('library'));
  } else {
    updateStorage();
  }
  
  displayLibrary();
});

//Submit book from form and reset fields
document.querySelector("#form-btn").addEventListener("click", () => {
  addBookToLibrary();
  document.querySelector("#new-book-form").reset();
});