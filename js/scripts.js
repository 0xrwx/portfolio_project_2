const nav_item = document.querySelectorAll('.main-nav__items');
const nav_home = document.querySelector('.main-nav__items');

function isOverNavElement() {
  setTimeout(() => {
    nav_item.forEach(node => node.classList.remove('main-nav__items--current'));
    this.classList.add('main-nav__items--current');
  }, 200);
}

function isOutNavElement() {
  setTimeout(() => {
    this.classList.remove('main-nav__items--current');
    nav_home.classList.add('main-nav__items--current');
  }, 200);
}

nav_item.forEach(node => {
    node.addEventListener('mouseover', isOverNavElement);
    node.addEventListener('mouseout', isOutNavElement);
  }
);