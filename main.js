let booksList = [];

function displayBooks() {
  let getBooks = localStorage.getItem("books");
  if (getBooks === null) {
    booksList = [];
  } else {
    booksList = JSON.parse(getBooks);
  }
  let books = document.querySelector('.books');
  let booksHtml = ``;
  booksList.forEach((book) => {
    booksHtml =
      booksHtml +
      `<li class="book-item">
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
        <button onclick="removeBook(${book.id})" class="remove-btn" type="button">Remove</button>
        <hr>
      </li>
      `
  });
  books.innerHTML = booksHtml;
}
displayBooks();

// add book functionality
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
  const title = document.querySelector('.input-title').value.trim();
  const author = document.querySelector('.input-author').value.trim();
  const newBook = { id: Math.floor(Math.random() * 100000) + 2, author: author, title: title }

  let getBooks = localStorage.getItem("books");
  if (getBooks === null) {
    booksList = [];
  } else {
    booksList = JSON.parse(getBooks);
  }
  addBook(newBook);
})

function addBook(book) {
  booksList.push(book);
  clearText();
  localStorage.setItem("books", JSON.stringify(booksList));
  // add book to Dom
  displayBooks();
}

// clear inputs
function clearText() {
  document.querySelector(".input-title").value = "";
  document.querySelector(".input-author").value = "";

};

// Function to Remove Book
function removeBook(bookID) {
  let getBooKs = localStorage.getItem("books");
  booksList = JSON.parse(getBooKs);
  const booksVar = booksList.filter(book => book.id !== bookID)
  booksList = [...booksVar];
  localStorage.setItem("books", JSON.stringify(booksList));
  displayBooks();
}
