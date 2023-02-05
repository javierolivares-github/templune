// VARIABLES
const menuIconsWrapper = document.querySelector(".menu-icons");
const menuIcon = document.querySelector(".menu-outline");
const closeIcon = document.querySelector(".close-outline");
const navbarMenu = document.querySelector(".nav-menu");
const logo = document.querySelector(".logo");
const navbarLinks = document.querySelectorAll(".nav-link");


// EVENT LISTENERS
menuIconsWrapper.addEventListener("click", toggleMenu);

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    toggleMenu();
  })
})

// FUNCTIONS
function toggleMenu() {
  navbarMenu.classList.toggle("active");
  logo.classList.toggle("hidden");
  menuIcon.classList.toggle("hide");
  closeIcon.classList.toggle("show");
}

console.log(menuOutline)









