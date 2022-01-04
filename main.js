class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook() {
    const books = document.querySelector('.books');
    let booksHtml = '';
    booksHtml = `<li id="${this.id}" class="book-item">
          <p class="book-title">${this.title}</p>
          <p class="book-author">${this.author}</p>
          <button class="remove-btn" type="button">Remove</button>
          <hr>
        </li>
        `;
    books.innerHTML += booksHtml;

    const newBookData = {
      id: this.id,
      author: this.author,
      title: this.title,
    };
    const getBooks = JSON.parse(localStorage.getItem('getBooks'));
    getBooks.push(newBookData);
    localStorage.setItem('getBooks', JSON.stringify(getBooks));
    console.log(books.querySelector('.remove-btn'))
    books.querySelector('.remove-btn').addEventListener('click', () => {
      this.removeBook();
    })
  }

  removeBook() {
    const removedBook = document.querySelector('#${this.id}');
    removedBook.remove();
    let getBooks = localStorage.getItem('getBooks');
    getBooks = getBooks.filter(book => book.id !== this.id);
    localStorage.setItem('getBooks', JSON.stringify(getBooks));
  }
}

function displayBooks() {
  let getBooks = localStorage.getItem('getBooks');
  if (getBooks === null) {
    getBooks = [];
  } else {
    getBooks = JSON.parse(getBooks);
  }
  console.log(getBooks);
  if (getBooks) {
    getBooks.forEach((book) => {
      console.count('hello');
      const myBook = new Book(book.id, book.author, book.title);
      myBook.addBook();
    });
  }
  localStorage.setItem('getBooks', JSON.stringify(getBooks));

  const addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', () => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const title = document.querySelector('.input-title').value.trim();
    const author = document.querySelector('.input-author').value.trim();
    const newBook = new Book(id, title, author);
    newBook.addBook();
  });
}
displayBooks();

/*
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
*/
