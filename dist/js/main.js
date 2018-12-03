// Select Dom Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const down = document.querySelector('.next');
const nav = document.querySelector('#mainnav');
const navName = document.querySelector('.nav-name')
const btnLines = document.querySelectorAll('.btn-line')
const navIcons = document.querySelectorAll('.nav-icons>a')

// Set intital State of Menu 
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuNav.addEventListener('click', closeMenu);
down.addEventListener('click', closeMenu);

function toggleMenu() {
    if (!showMenu) {

        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));


        // Set Menu State 
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));


        // Set Menu State 
        showMenu = false;


    }
}

function closeMenu() {
    console.log('works');

    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
}


window.onscroll = () => {

    if (this.scrollY > 50) {
        nav.classList.add('scrolledNavbar');
        navName.style.color = '#000';
        btnLines.forEach(item => item.style.backgroundColor = '#000');
        navIcons.forEach(item => item.style.color = '#000');
    } else {
        nav.classList.remove('scrolledNavbar');
        navName.style.color = '#fff';
        btnLines.forEach(item => item.style.backgroundColor = '#fff');
        navIcons.forEach(item => item.style.color = '#fff');
    }


};

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});