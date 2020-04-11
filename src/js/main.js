// Select DOM Items
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-items');

// Set Intital State of Menu

let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuButton.classList.add('close'); 
        menu.classList.add('show');
        menuNav.classList.add('show'); 
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        
        // Set Menu State
        showMenu = true;
    } else {
        menuButton.classList.remove('close'); 
        menu.classList.remove('show');
        menuNav.classList.remove('show'); 
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove
            ('show'));
        
        // Set Menu State
        showMenu = false;
    }
}

// Dark Mode
const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '1s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();