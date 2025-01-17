const currentPath = window.location.pathname;

const homePage = document.querySelector('#Home');
const favoritesPage = document.querySelector('#Favorites');
const homePageMenu = document.querySelector('#Home-menu');
const favoritesPageMenu = document.querySelector('#Favorites-menu');
const scrollButton = document.querySelector('.btn-scroll-top');
const btnMuscles = document.querySelector('#Muscles');

document.addEventListener('DOMContentLoaded', pageSwitch());

function pageSwitch() {
  homePage.classList.remove('heder-nav-link-active');
  favoritesPage.classList.remove('heder-nav-link-active');
  homePageMenu.classList.remove('active-menu-nav-list-item');
  favoritesPageMenu.classList.remove('active-menu-nav-list-item');

  if (!currentPath.includes('favorites.html')) {
    homePage.classList.add('heder-nav-link-active');
    homePageMenu.classList.add('active-menu-nav-list-item');
    scrollButton.href = './index.html#header';
    btnMuscles.classList.add('exercise-button-active');
  } else {
    favoritesPage.classList.add('heder-nav-link-active');
    favoritesPageMenu.classList.add('active-menu-nav-list-item');
    scrollButton.href = './favorites.html#header';
  }
}
