let library = [];

//Book constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.toggleRead = () => this.read = !this.read;
}

//two generic test books to show display
library.push(new Book("test title 1", "test author 1", 1));
library.push(new Book("test title 2", "test author 2", 2));

function appendBookToTable(book){
  const row = document.createElement("tr");

  const title = document.createElement("td");
  title.innerText = book.title; 

  const author = document.createElement("td");
  author.innerText = book.author;

  const pages = document.createElement("td");
  pages.innerText = book.pages;

  const read = document.createElement("td");
  read.innerText = book.read ? "Yes" : "No";
  read.addEventListener("click", () => {
    book.toggleRead();
    read.innerText = book.read ? "Yes" : "No";
  });

  const remove = document.createElement("td");
  remove.innerHTML = '<button type="button" class="btn btn-secondary">Remove</button>';
  remove.addEventListener("click", () => row.remove());
  
  row.append(title, author, pages, read, remove);

  document.querySelector("tbody").append(row);
}

function displayLibrary() {
  const libraryDiv = document.getElementById("library-display");
  //update div with library array content...maybe better to run this only on load then append additions?
  library.forEach(book => appendBookToTable(book));
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

  appendBookToTable(newBook);
}

document.addEventListener("DOMContentLoaded", displayLibrary);
document.querySelector("#form-btn").addEventListener("click", () => {
  addBookToLibrary();
  document.querySelector("#new-book-form").reset();
});