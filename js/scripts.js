const nav_item = document.querySelectorAll('.main-nav__items');
const nav_home = document.querySelector('.main-nav__items');

function isOverNavItem() {
  setTimeout(() => {
    this.classList.add('main-nav__items--current');
  }, 100);
}

function isOutNavItem() {
  setTimeout(() => {
    this.classList.remove('main-nav__items--current');
  }, 100);
}

nav_item.forEach(node => {
  node.addEventListener('mouseover', isOverNavItem
);
  node.addEventListener('mouseout', isOutNavItem);
});

const client_image = document.querySelectorAll('.clients__item');

function isOverClientImage() {
  const image_src = (this.firstElementChild.firstElementChild.src).slice(22);
  const image = this.firstElementChild.firstElementChild;

  switch(image_src) {
    case 'images/svg/airbnb-logo.svg':
      image.setAttribute('src', 'images/svg/airbnb-logo-colored.svg');
      break;
    case 'images/svg/google-logo.svg':
      image.setAttribute('src', 'images/svg/google-logo-colored.svg');
      break;
    case 'images/svg/microsoft-logo.svg':
      image.setAttribute('src', 'images/svg/microsoft-logo-colored.svg');
      break;
    case 'images/svg/fedEx-logo.svg':
      image.setAttribute('src', 'images/svg/fedEx-logo-colored.svg');
      break;
    default:
      console.log('EROR');
  }
}

function isOutClientImage() {
  const image_src = (this.firstElementChild.firstElementChild.src).slice(22);
  const image = this.firstElementChild.firstElementChild;

  switch(image_src) {
    case 'images/svg/airbnb-logo-colored.svg':
      image.setAttribute('src', 'images/svg/airbnb-logo.svg');
      break;
    case 'images/svg/google-logo-colored.svg':
      image.setAttribute('src', 'images/svg/google-logo.svg');
      break;
    case 'images/svg/microsoft-logo-colored.svg':
      image.setAttribute('src', 'images/svg/microsoft-logo.svg');
      break;
    case 'images/svg/fedEx-logo-colored.svg':
      image.setAttribute('src', 'images/svg/fedEx-logo.svg');
      break;
    default:
      console.log('EROR');
  }
}

client_image.forEach(node => {
  node.addEventListener('mouseover', isOverClientImage);
  node.addEventListener('mouseout', isOutClientImage);
});

const button = document.querySelectorAll('.button');

function isOverButton() {
  
}

function isOutButton() {

}

button.forEach(node => {
  node.addEventListener('mouseover', isOverButton);
  node.addEventListener('mouseout', isOutButton);
});