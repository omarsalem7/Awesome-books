let booksList = [];

function displayBooks() {
  const getBooks = localStorage.getItem('books');
  if (getBooks === null) {
    booksList = [];
  } else {
    booksList = JSON.parse(getBooks);
  }
  const books = document.querySelector('.books');
  let booksHtml = '';
  booksList.forEach((book) => {
    booksHtml += `<li class="book-item">
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
        <button onclick="removeBook(${book.id})" class="remove-btn" type="button">Remove</button>
        <hr>
      </li>
      `;
  });
  books.innerHTML = booksHtml;
}
displayBooks();

// clear inputs
function clearText() {
  document.querySelector('.input-title').value = '';
  document.querySelector('.input-author').value = '';
}

// add book functionality
function addBook(book) {
  booksList.unshift(book);
  clearText();
  localStorage.setItem('books', JSON.stringify(booksList));
  // add book to Dom
  displayBooks();
}

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
  const id = Math.floor(Math.random() * 100000) + 1;
  const title = document.querySelector('.input-title').value.trim();
  const author = document.querySelector('.input-author').value.trim();
  const newBook = { id, author, title };
  const getBooks = localStorage.getItem('books');
  if (getBooks === null) {
    booksList = [];
  } else {
    booksList = JSON.parse(getBooks);
  }
  addBook(newBook);
});

// Function to Remove Book
// eslint-disable-next-line
function removeBook(bookID) {
  const getBooKs = localStorage.getItem('books');
  booksList = JSON.parse(getBooKs);
  const booksVar = booksList.filter((book) => book.id !== bookID);
  booksList = [...booksVar];
  localStorage.setItem('books', JSON.stringify(booksList));
  displayBooks();
}
