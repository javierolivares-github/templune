// VARIABLES
const menuIcon = document.querySelector(".menu-outline");
const navbarMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");
const navbarLinks = document.querySelectorAll(".nav-link");

// EVENT LISTENERS
menuIcon.addEventListener("click", toggleMenu);

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    toggleMenu();
  })
})

// FUNCTIONS
function toggleMenu() {
  navbarMenu.classList.toggle("active");
  logo.classList.toggle("hidden");
}









