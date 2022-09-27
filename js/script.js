const btn = document.querySelector(".footer__box-link"),
  contact = document.querySelector(".contact"),
  body = document.querySelector("body"),
  course = document.querySelector('.course'),
  arrowBtn = document.querySelector('.arrow__btn');

btn.addEventListener("click", () => {
  contact.classList.add("active");
  body.style = "overflow:hidden";
  arrowBtn.style.display = "none"
});

const menu = document.querySelector(".menu"),
  closeMenu = document.querySelector(".close"),
  navList = document.querySelector(".nav__list");

menu.addEventListener("click", () => {
  body.style = "overflow:hidden";
  navList.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  body.style = "overflow:visible";
  navList.classList.remove("active");
});

window.addEventListener('scroll', function scroll() {
  if (scrollY > course.offsetTop / 2) {
    arrowBtn.style =` opacity: 1;
    z-index: 999;
    pointer-events: all;`
  } else {
    arrowBtn.style =` opacity: 0;
    z-index: -999;
    pointer-events: none;`
  }
})