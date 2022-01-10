import displayBooks from './displayBooks';
export default class Books {
  constructor() {
    this.list = localStorage.getItem('books')
      ? JSON.parse(localStorage.getItem('books'))
      : [];
  }

  addBook(book) {
    this.list.push(book);
    localStorage.setItem('books', JSON.stringify(this.list));
    /* eslint-disable */
    displayBooks(this.list);
  }

  removeBook(bookID) {
    this.list = this.list.filter((book) => book.id !== bookID);
    localStorage.setItem('books', JSON.stringify(this.list));
    /* eslint-disable */
    displayBooks(this.list);
  }
}
