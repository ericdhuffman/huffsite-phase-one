let openMenu = document.querySelector('#open-menu');
let closeMenu = document.querySelector('#close-menu');
let topNavigationMenu = document.querySelector('.top-navbar-menu');

const mobileMenuEvent = (navigation, close, open) => {
    topNavigationMenu.style.display = navigation;
    closeMenu.style.display = close;
    openMenu.style.display = open;
};

openMenu.addEventListener('click', () => mobileMenuEvent("flex", "block", "none"));
closeMenu.addEventListener('click', () => mobileMenuEvent("none", "none", "block"));