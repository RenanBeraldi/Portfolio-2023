"use strict";

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  const sectionAbout = document.querySelector("#about");

  if (window.scrollY >= sectionAbout.getBoundingClientRect().top) {
    nav.classList.add("sticky");
    nav.classList.remove("nav__show");
  } else {
    nav.classList.remove("sticky");
    nav.classList.add("nav__show");
  }

  if (window.scrollY === 0) {
    nav.classList.remove("nav__show");
  }
});

// Revealing Elements on Scroll
ScrollReveal().reveal(".primary__heading", {
  delay: 500,
  origin: "bottom",
  distance: "40px",
  reset: true,
});

ScrollReveal().reveal(".about__left", {
  delay: 600,
  origin: "right",
  distance: "20px",
  reset: true,
});

ScrollReveal().reveal(".about__right", {
  delay: 600,
  origin: "left",
  distance: "20px",
  reset: true,
});

ScrollReveal().reveal(".skills__line-1", {
  delay: 500,
  origin: "left",
  distance: "40px",
  reset: true,
});

ScrollReveal().reveal(".skills__line-2", {
  delay: 600,
  origin: "right",
  distance: "40px",
  reset: true,
});

ScrollReveal().reveal(".contact__content, .contact__header", {
  delay: 700,
  origin: "bottom",
  distance: "40px",
  reset: true,
});

ScrollReveal().reveal(".contact__content-2", {
  delay: 900,
  origin: "top",
  distance: "40px",
  reset: true,
});
