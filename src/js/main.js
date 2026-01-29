"use strict";
const body = document.querySelector("body");
const btnAdd = document.querySelector(".add");
const btnConfirm = document.querySelector(".confirm");
const btnCancel = document.querySelector(".cancel");
const popup = document.querySelector(".pop-up");
const form = document.querySelector("form");
const library = document.querySelector(".library");
const titleInfo = document.querySelector("input[name=btitle]");
const authorInfo = document.querySelector("input[name=bauthor]");
const pagesInfo = document.querySelector("input[name=bpages]");
const readInfo = document.querySelector("input[class=check]");

const myLibrary = [];

function Book(title, author, pages, read, id) {
  if (!new.target) {
    throw Error("Must use the new operator to call the function");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function openNewBookWindow() {
  popup.classList.remove("hidden");
}

function closeNewBookWindow(event) {
  event.preventDefault();
  form.reset();
  popup.classList.add("hidden");
}

function grabBookInfo(event) {
  let title = titleInfo.value;
  let author = authorInfo.value;
  let pages = pagesInfo.value;
  let read = readInfo.checked ? "Read" : "Not read";
  let id = crypto.randomUUID();
  if (title && author && pages) {
    addBookToLibrary(title, author, pages, read, id, event);
  }
}

function addBookToLibrary(title, author, pages, read, id, event) {
  let book = new Book(title, author, pages, read, id);
  myLibrary.push(book);
  closeNewBookWindow(event);
  createLibrary();
}

function createLibrary() {
  library.innerHTML = "";

  myLibrary.forEach((book) => {
    let newBook = document.createElement("div");
    newBook.setAttribute("data-id", `${book.id}`);
    newBook.classList.add("tile");

    let titleP = document.createElement("p");
    titleP.classList.add("ntitle");
    titleP.innerText = book.title;

    let authorP = document.createElement("p");
    authorP.classList.add("nauthor");
    authorP.innerText = book.author;

    let pagesP = document.createElement("p");
    pagesP.classList.add("npages");
    pagesP.innerText = book.pages;

    let readBtn = document.createElement("button");
    readBtn.innerText = book.read;

    if (book.read === "Read") {
      readBtn.classList.add("read");
    } else {
      readBtn.classList.add("unread");
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "DELETE";
    deleteBtn.classList.add("ndelete");

    library.append(newBook);
    newBook.append(titleP, authorP, pagesP, readBtn, deleteBtn);

    readBtn.addEventListener("click", changeReadStatus);
    deleteBtn.addEventListener("click", deleteBook);
  });
}

function changeReadStatus(e) {
  let dataId = e.target.parentNode.getAttribute("data-id");
  if (e.target.innerHTML === "Read") {
    e.target.innerHTML = "Not read";
    e.target.classList.replace("read", "unread");
    myLibrary.forEach((book) => {
      if (book.id === dataId) {
        book.read = "Not read";
      }
    });
  } else {
    e.target.innerHTML = "Read";
    e.target.classList.replace("unread", "read");
    myLibrary.forEach((book) => {
      if (book.id === dataId) {
        book.read = "Read";
      }
    });
  }
}

function deleteBook(e) {
  let index;
  let dataId = e.target.parentNode.getAttribute("data-id");
  myLibrary.forEach((book) => {
    if (book.id === dataId) {
      index = myLibrary.indexOf(book);
    }
  });

  myLibrary.splice(index, 1);
  e.target.parentNode.remove();
}

btnAdd.addEventListener("click", openNewBookWindow);
btnCancel.addEventListener("click", closeNewBookWindow);
btnConfirm.addEventListener("click", grabBookInfo);
