let booksList = [
  {
    id: 0,
    author: "Benjamin Semah",
    title: "Become a Better Programmer"
  },
  {
    id: 1,
    author: "Omar Salem",
    title: "How to Succeed in Programming"
  },
];



function create() {
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

create();

// add book functionality
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
  const title = document.querySelector('.input-title').value.trim();
  const author = document.querySelector('.input-author').value.trim();
  const newBook = { id: Math.floor(Math.random() * 100000) + 2, author: author, title: title }
  addBook(newBook);

  console.log(booksList)
})

function addBook(book) {
  booksList.push(book);
  // add book to Dom
  create();
  clearText();
}

function clearText(){
  document.querySelector(".input-title").value = "";
  document.querySelector(".input-author").value = "";

};



// Function to Remove Book

function removeBook(bookID) {
  const booksVar = booksList.filter(book => book.id !== bookID)
  console.log(booksVar);
  booksList=[...booksVar]
  console.log(booksList)
  create();
}


