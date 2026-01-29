# Library Project

This is a simple **Library application** built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-library) curriculum.  
It allows users to:

- Add new books with title, author, pages, and read status.
- Toggle the read status of a book.
- Delete books from the library.
- Display the library dynamically on the page.

## Technologies Used

- HTML
- Sass
- JavaScript (ES6)
- Git & GitHub for version control

## Implementation Notes

- The `Book` constructor function creates book instances with a unique ID.
- A prototype method `changeReadStatus()` is used to toggle a book's read status. This keeps the logic inside the object, following good separation of concerns.
- Event listeners on the buttons handle user interaction and update both the UI and the data in `myLibrary`.

### Challenges Faced

Initially, the click handler directly changed the button text and class before updating the book’s data. I changed it so the **Book instance itself controls its state**, and the UI shows that state.

---


