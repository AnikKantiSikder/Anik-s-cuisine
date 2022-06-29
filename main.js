
const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const bgOverlayEl = document.querySelector('.nav__bgOverlay');

const navOpen = () => {
    navList.classList.add('show');
    bgOverlayEl.classList.add('active');

    // For controlling the scroll.(This code prevent the scrolling when the nav menu opens)
    document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow: hidden;';

}

const navClose = () => {
    navList.classList.remove('show');
    bgOverlayEl.classList.remove('active');

    // For controlling the scroll.(This code enable the scrolling when the nav menu closes)
    document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
bgOverlayEl.addEventListener('click', navClose);