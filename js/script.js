var mainNav = document.querySelector(".main-nav");
var mainNavToggle = document.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav__nojs");

mainNavToggle.addEventListener("click",
  function () {
    if (mainNav.classList.contains("main-nav__closed")) {
      mainNav.classList.remove("main-nav__closed");
      mainNav.classList.add("main-nav__opened");
    } else {
      mainNav.classList.remove("main-nav__opened");
      mainNav.classList.add("main-nav__closed");
    }
  }
);
