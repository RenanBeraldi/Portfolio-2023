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
