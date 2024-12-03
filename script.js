function myFunction() {
  document.getElementById("sidebar").style.display = "block";
}

function hideSidebar() {
  document.getElementById("sidebar").style.display = "none";
}

// // Toggle menu icon
// function myFunction() {
//   const menuIcon = document.querySelector(".menu-icon");
//   const navLinks = document.querySelector(".nav-links");
//   menuIcon.classList.toggle("active");
//   navLinks.classList.toggle("active");
// }

// Toggle dropdown menu
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const dropdownMenu = toggle.nextElementSibling;
    dropdownMenu.classList.toggle("active");
    toggle.classList.toggle("active");
  });
});

// Toggle arrow icon
const arrowIcons = document.querySelectorAll(".dropdown-toggle");

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("rotate");
  });
});
