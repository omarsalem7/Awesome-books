const displayBooks = (booksList) => {
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
};

export default displayBooks;
