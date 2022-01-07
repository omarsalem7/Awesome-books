class Books {
  constructor() {
    this.list = localStorage.getItem('books')
      ? JSON.parse(localStorage.getItem('books'))
      : [];
  }

  addBook(book) {
    this.list.push(book);
    localStorage.setItem('books', JSON.stringify(this.list));
    /* eslint-disable */
    displayBooks();
  }

  removeBook(bookID) {
    this.list = this.list.filter((book) => book.id !== bookID);
    localStorage.setItem('books', JSON.stringify(this.list));
    /* eslint-disable */
    displayBooks();
  }
}
const booksList = new Books();
function displayBooks() {
  const books = document.querySelector('.books');
  let booksHtml = '';
  booksList.list.forEach((book) => {
    booksHtml += `<li class="book-item">
      <div class="book-info">
      <p class="book-title">${
        book.title.charAt(0).toUpperCase() + book.title.slice(1)
      }</p>
      <p class="book-by">by</p>
      <p class="book-author">${book.author}</p>
    </div>
    <button id="${book.id}" class="remove-btn" type="button">Remove</button>
        </li>
        `;
  });
  books.innerHTML = booksHtml;

  // remove book
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      /* eslint-disable */
      booksList.removeBook(parseInt(e.target.id));
    });
  });

  if (booksList.list.length === 0) {
    books.innerHTML = '<h4 class="no-books">No books to show</h4>';
  }
}

displayBooks();

const form = document.querySelector('.add-books');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 100000) + 1;
  const title = document.querySelector('.input-title').value.trim();
  const author = document.querySelector('.input-author').value.trim();
  const newBook = { id, author, title };

  if (title && author) {
    booksList.addBook(newBook);
  } else {
    alert('please enter the title and author');
  }

  form.reset();
});
