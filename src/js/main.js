"use strict";
const body = document.querySelector("body");
const btnAdd = document.querySelector(".add");
const btnConfirm = document.querySelector("button.confirm");
const btnCancel = document.querySelector("button.cancel");
const popup = document.querySelector(".pop-up");
const form = document.querySelector("form");
const titleInfo = document.querySelector("input[name=btitle]");
const authorInfo = document.querySelector("input[name=bauthor]");
const pagesInfo = document.querySelector("input[name=bpages]");
const readInfo = document.querySelector("input[class=check]");

const myLibrary = [
  {
    title: "Zmierzch",
    author: "Stephenie Meyer",
    pages: 435,
    read: "Read: yes",
    id: "23-23-re-23",
  },
  {
    title: "Uzumaki",
    author: "Junji Ito",
    pages: 435,
    read: "Read: yes",
    id: "23-24-tr-23",
  },
];

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
//OPEN POP UP
function openNewBookWindow() {
  popup.classList.remove("hidden");
}
//CLOSE POP UP AND CLEAN FORM
function closeNewBookWindow(event) {
  event.preventDefault();
  form.reset();
  popup.classList.add("hidden");
}
//GRAB INFO FROM FORM AND SEND TO PROCESS
function grabBookInfo(event) {
  event.preventDefault(event);
  let title = titleInfo.value;
  let author = authorInfo.value;
  let pages = pagesInfo.value;
  let read = readInfo.checked ? "Read: yes" : "Read: no";
  let id = crypto.randomUUID();

  addBookToLibrary(title, author, pages, read, id);
}
//ADD TO ARRAY
function addBookToLibrary(title, author, pages, read, id) {
  // take params, create a book then store it in the array
  let book = new Book(title, author, pages, read, id);
  myLibrary.push(book);
  console.log(myLibrary);
}
//CREATE BOOK TILE FROM ARRAY
function createLibrary() {
  myLibrary.forEach((book) => {});
}

btnAdd.addEventListener("click", openNewBookWindow);
btnCancel.addEventListener("click", closeNewBookWindow);
btnConfirm.addEventListener("click", grabBookInfo);
