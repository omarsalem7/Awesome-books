class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook() {
    const books = document.querySelector('.books');
    const listItem = document.createElement('li');
    listItem.id = `${this.id}`;
    listItem.className = 'book-item';
    const booksHtml = `
         <div class="book-info">
          <p class="book-title">${this.title}</p>
          <p class="book-by">by</p>
          <p class="book-author">${this.author}</p>
        </div>
          <button class="remove-btn" type="button">Remove</button>
        `;
    listItem.innerHTML += booksHtml;
    books.append(listItem);
    const newBookData = {
      id: this.id,
      title: this.title,
      author: this.author,
    };
    const getBooks = JSON.parse(localStorage.getItem('getBooks'));
    getBooks.push(newBookData);
    localStorage.setItem('getBooks', JSON.stringify(getBooks));
    listItem.querySelector('.remove-btn').addEventListener('click', () => {
      this.removeBook();
    });
    document.querySelector('.input-title').value = '';
    document.querySelector('.input-author').value = '';
  }

  removeBook() {
    const removeBook = document.getElementById(`${this.id}`);
    removeBook.remove();
    let getBooks = JSON.parse(localStorage.getItem('getBooks'));
    const booksVar = getBooks.filter((book) => book.id !== this.id);
    getBooks = [...booksVar];
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
  if (getBooks) {
    getBooks.forEach((book) => {
      const myBook = new Book(book.id, book.title, book.author);
      myBook.addBook();
    });
  }
  localStorage.setItem('getBooks', JSON.stringify(getBooks));

  const addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', () => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const title = document.querySelector('.input-title').value.trim();
    const author = document.querySelector('.input-author').value.trim();
    if (title && author) {
      const newBook = new Book(id, title, author);
      newBook.addBook();
    } else {
      alert('please enter the title and author');
    }
  });
}
displayBooks();

