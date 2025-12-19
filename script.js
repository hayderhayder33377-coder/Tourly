'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// Function to close the mobile navigation
const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

// Function to open the mobile navigation
const openNavbar = function () {
  navbar.classList.add("active");
  overlay.classList.add("active");
};

// Event listener for toggle elements (open/close buttons, overlay)
navElemArr.forEach(elem => {
  elem.addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

// Event listener for navigation links - close menu when link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    // Only close if navbar is currently active (mobile view)
    if (navbar.classList.contains("active")) {
      closeNavbar();
    }
  });
});

// Close navbar when window is resized to desktop size
window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && navbar.classList.contains("active")) {
    closeNavbar();
  }
});

// Close navbar when clicking outside on mobile
document.addEventListener("click", function (event) {
  const isClickInsideNavbar = navbar.contains(event.target);
  const isClickOnNavOpenBtn = navOpenBtn.contains(event.target);
  
  if (!isClickInsideNavbar && !isClickOnNavOpenBtn && 
      navbar.classList.contains("active")) {
    closeNavbar();
  }
});

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// Go to top functionality
goTopBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});