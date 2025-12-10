document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".header__hamburger");
  const nav = document.querySelector(".header__nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      nav.classList.toggle("is-active");
      hamburger.classList.toggle("is-active");

      // Simple style toggle for mobile menu visibility
      if (nav.classList.contains("is-active")) {
        nav.style.display = "block";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.backgroundColor = "#fcfaf2";
        nav.style.padding = "20px";
        nav.style.boxShadow = "0 5px 10px rgba(0,0,0,0.1)";

        // Change list layout for mobile
        const list = nav.querySelector(".header__list");
        if (list) {
          list.style.flexDirection = "column";
          list.style.alignItems = "center";
        }
      } else {
        nav.style.display = "";
        nav.style.position = "";
        nav.style.top = "";
        nav.style.left = "";
        nav.style.width = "";
        nav.style.backgroundColor = "";
        nav.style.padding = "";
        nav.style.boxShadow = "";

        const list = nav.querySelector(".header__list");
        if (list) {
          list.style.flexDirection = "";
          list.style.alignItems = "";
        }
      }
    });
  }
});
