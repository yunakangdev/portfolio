'use strict';

// Change slides automatically
var counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 2) {
    counter = 1;
  }
}, 5000);

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItem = document.querySelectorAll('.navbar__menu__item');

// Show / hide nav menu when clicking toggle
function showHideMenu() {
  if (navbarMenu.style.display === "none") {
    navbarMenu.style.display = "flex";
  } else {
    navbarMenu.style.display = "none";
  }
}

// Transform nav menu when scrolling down
document.addEventListener('scroll', () => {
  if (navbarMenu.style.display !== "none" && window.scrollY > navbarHeight) {
    navbarMenu.classList.add('menu__transform');
    for (var i = 0; i < navbarMenuItem.length; i++) {
      navbarMenuItem[i].classList.add('menu__item__transform');
    }  
  } else {
    navbarMenu.classList.remove('menu__transform');
    for (var i = 0; i < navbarMenuItem.length; i++) {
      navbarMenuItem[i].classList.remove('menu__item__transform');
    }
  }
})

const navbarBackground = document.querySelector('#navbar__menu');

// Fade in / out nav menu when scrolling down
document.addEventListener('scroll', () => {
  if (window.scrollY < navbarHeight) {
  navbarBackground.style.opacity = 1 - window.scrollY / navbarHeight;
  } else {
  navbarBackground.style.opacity = 0 + (window.scrollY - navbarHeight) / 150;
  }
});

// Scroll into view of the selector
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth'});  
}

// Handle scrolling when tapping on nav menu
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

const arrowUp = document.querySelector('.arrow-up');

// Show arrow up button when scrolling down
document.addEventListener('scroll', () => {
  if(window.scrollY >= navbarHeight) {
    arrowUp.style.opacity = 0 + (window.scrollY - navbarHeight) / 150;
    arrowUp.classList.add('visible');
  } else {
    arrowUp.style.opacity = 0;
    arrowUp.classList.remove('visible');
  }
});

// Scrolling up when clicking arrow up button
arrowUp.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  scrollIntoView(link);
})