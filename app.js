import displayBooks from './modules/displayBooks.js';
import Books from './modules/books.js';

const booksList = new Books();
displayBooks(booksList);

const form = document.querySelector('.add-books');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = Math.floor(Math.random() * 100000) + 1;
  const title = document.querySelector('.input-title').value.trim();
  const author = document.querySelector('.input-author').value.trim();
  const newBook = { id, author, title };

  booksList.addBook(newBook);
});

//  ****************SPA**************** //
const navItems = document.querySelectorAll('.nav-list-item a');
const booksWraper = document.querySelector('.books-wraper');
const booksForm = document.querySelector('.books-form');
const contactInfo = document.querySelector('.contact-info');
// specify default values
booksWraper.style.display = 'block';
booksForm.style.display = 'none';
contactInfo.style.display = 'none';
navItems[0].style.color = 'chocolate';
navItems[0].addEventListener('click', (e) => {
  booksWraper.style.display = 'block';
  booksForm.style.display = 'none';
  contactInfo.style.display = 'none';
  navItems.forEach((item) => {
    item.style.color = 'black';
  });
  e.target.style.color = 'chocolate';
});
navItems[1].addEventListener('click', (e) => {
  booksWraper.style.display = 'none';
  booksForm.style.display = 'block';
  contactInfo.style.display = 'none';
  navItems.forEach((item) => {
    item.style.color = 'black';
  });
  e.target.style.color = 'chocolate';
});
navItems[2].addEventListener('click', (e) => {
  booksWraper.style.display = 'none';
  booksForm.style.display = 'none';
  contactInfo.style.display = 'block';
  navItems.forEach((item) => {
    item.style.color = 'black';
  });
  e.target.style.color = 'chocolate';
});
