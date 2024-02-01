
document.addEventListener("DOMContentLoaded", function () {
  let hamburger = document.querySelector(".hamburger");
  let navbar_menu = document.querySelector(".navbar-menu");
  navbar_menu.style.display = "none";

  function display_menu(event) {
    event.preventDefault();
    let targetId = event.target.getAttribute("href").substring(1);
    let targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    navbar_menu.style.display = "none";
  }

  hamburger.addEventListener("click", function (event) {
    if (navbar_menu.style.display === "block") {
      navbar_menu.style.display = "none";
    } else {
      navbar_menu.style.display = "block";
    }
  });

  let menuItems = document.querySelectorAll(".navbar-menu a");
  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", display_menu);
  });
});
