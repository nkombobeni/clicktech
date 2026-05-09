// =========================
// script.js
// =========================

// SELECT ELEMENTS
const navLinks =
  document.querySelectorAll('.nav-link');

const navbar =
  document.querySelector('.navbar');

// =========================
// Set active link
// =========================
navLinks.forEach(link => {

  link.addEventListener('click', () => {

    navLinks.forEach(item => {
      item.classList.remove('active');
    });

    link.classList.add('active');

  });

});

// =========================
// Header shadow on scroll
// =========================
window.addEventListener('scroll', () => {

  if (window.scrollY > 10) {

    navbar.classList.add('scrolled');

  } else {

    navbar.classList.remove('scrolled');

  }

});

// =========================
// Smooth mobile scroll snap
// =========================
const navBottom =
  document.querySelector('.nav-bottom');

navBottom.style.scrollBehavior =
  'smooth';