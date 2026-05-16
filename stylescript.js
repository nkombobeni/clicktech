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









/* =========================================
   PRODUCT CAROUSEL - CLICK.TECH
========================================= */

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.product-slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let autoSlide;

/* =========================================
   UPDATE CAROUSEL
========================================= */

function updateCarousel(index) {

  track.style.transform =
    `translateX(-${index * 100}%)`;

  dots.forEach(dot =>
    dot.classList.remove('active')
  );

  dots[index].classList.add('active');

  currentSlide = index;
}

/* =========================================
   AUTO SLIDE
========================================= */

function startAutoSlide() {

  autoSlide = setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    updateCarousel(currentSlide);

  }, 4000);
}

/* =========================================
   DOT CLICK
========================================= */

dots.forEach((dot, index) => {

  dot.addEventListener('click', () => {

    clearInterval(autoSlide);

    updateCarousel(index);

    startAutoSlide();
  });

});

/* =========================================
   KEYBOARD NAVIGATION
========================================= */

document.addEventListener('keydown', (e) => {

  if (e.key === 'ArrowRight') {

    currentSlide =
      (currentSlide + 1) % slides.length;

    updateCarousel(currentSlide);
  }

  if (e.key === 'ArrowLeft') {

    currentSlide =
      (currentSlide - 1 + slides.length)
      % slides.length;

    updateCarousel(currentSlide);
  }
});

/* =========================================
   TOUCH SWIPE
========================================= */

let startX = 0;
let endX = 0;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {

  endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {

    currentSlide =
      (currentSlide + 1) % slides.length;

    updateCarousel(currentSlide);
  }

  if (endX - startX > 50) {

    currentSlide =
      (currentSlide - 1 + slides.length)
      % slides.length;

    updateCarousel(currentSlide);
  }
});

/* =========================================
   INIT
========================================= */

updateCarousel(0);
startAutoSlide();













