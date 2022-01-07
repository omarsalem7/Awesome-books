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
