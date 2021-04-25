'use strict';

// Sound effects for icons
const bgSound = new Audio('./sound/opened_window_sound.mp3');
const startupSound = new Audio('./sound/startup_sound.mp3');
const clickSound = new Audio('./sound/click_sound.mp3');
const vaseSound1 = new Audio('./sound/ceramic_sound1.mp3');
const vaseSound2 = new Audio('./sound/ceramic_sound2.mp3');
const vaseSound3 = new Audio('./sound/ceramic_sound3.mp3');

window.addEventListener('mouseover', () => {
  bgSound.volume = 0.5;
  bgSound.play();
})

const homeImage = document.querySelector('#home__image');
homeImage.addEventListener('click', () => {
  clickSound.volume = 0.2;
  clickSound.play();
})

const productDesign = document.querySelector('.product__design');
productDesign.addEventListener('click', () => {
  clickSound.volume = 0.2;
  clickSound.play();
})

const projectSlides = document.querySelector('.projects__slides');
projectSlides.addEventListener('click', () => {
  clickSound.volume = 0.2;
  clickSound.play();
})

const testimonialFirst = document.querySelector('.moe');
testimonialFirst.addEventListener('click', () => {
  clickSound.volume = 0.2;
  clickSound.play();
})

const testimonialSecond = document.querySelector('.jisoo');
testimonialSecond.addEventListener('click', () => {
  clickSound.volume = 0.2;
  clickSound.play();
})

const testimonialFirstFace = document.querySelector('.yousef');
testimonialFirstFace.addEventListener('click', () => {
  clickSound.volume = 0.2;
  clickSound.play();
})

const testimonialSecondFace = document.querySelector('.lee');
testimonialSecondFace.addEventListener('click', () => {
  clickSound.volume = 0.2;
  clickSound.play();
})

const computer = document.querySelector('.computer');
computer.addEventListener('mouseover', () => {
  startupSound.playbackRate = 1.1;
  startupSound.volume = 0.1;
  startupSound.play();
})

const framework = document.querySelector('.framework');
framework.addEventListener('mouseover', () => {
  clickSound.volume = 0.2;
  clickSound.play();
})

const db = document.querySelector('.db');
db.addEventListener('mouseover', () => {
  clickSound.volume = 0.3;
  clickSound.play();
})

const vase1 = document.querySelector('.vase1');
vase1.addEventListener('mouseover', onVase1Click);

const vase2 = document.querySelector('.vase2');
vase2.addEventListener('mouseover', onVase2Click);

const vase3 = document.querySelector('.vase3');
vase3.addEventListener('mouseover', onVase3Click);

function onVase1Click() {
  vaseSound1.volume = 0.2;
  vaseSound1.play();
}

function onVase2Click() {
  vaseSound2.volume = 0.2;
  vaseSound2.play();
}

function onVase3Click () {
  vaseSound3.volume = 0.2;
  vaseSound3.play();
}

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

// Make each nav menu Active when each section is shown
const sectionIds = [
  '#about',
  '#skills',
  '#projects',
  '#testimonials',
  '#contact',
];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => 
  document.querySelector(`[data-link="${id}"]`)
);

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

function selectNavItem(selectedNavIndex) {
  if (selectedNavItem) {
    selectedNavItem.classList.remove('active');
  } 
  selectedNavItem.classList.add('active');  
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if(!entry.isIntersecting && entry.intersectionRatio > 0) {
      const passingEntryIndex = sectionIds.indexOf(`#${entry.target.id}`);

      if(entry.boundingClientRect.y < 0) {
        selectedNavIndex = passingEntryIndex + 1;
      } else {
        selectedNavIndex = passingEntryIndex - 1;
      }
      selectNavItem(selectedNavIndex);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

