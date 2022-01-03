const booksList = [
  {
    author: "Benjamin Semah",
    title: "Become a Better Programmer"
  },
  {
    author: "Omar Salem",
    title: "How to Succeed in Programming"
  }
];

const books = document.querySelector('.books');

let booksHtml = ``;

booksList.forEach((book) => {
  booksHtml = 
    booksHtml + 
    `<li class="book-item">
      <p class="book-title">${book.title}</p>
      <p class="book-author">${book.author}</p>
      <button class="remove-btn" type="button">Remove</button>
      <hr>
    </li>
    `
});

books.innerHTML = booksHtml;