/*========= MOBILE NAVIGATION =========*/
const menuToggle = document.getElementById("toggle-menu");
const menuToggleOpen = document.getElementById("toggle-menu-open");
const menuToggleClose = document.getElementById("toggle-menu-close");
const menuBackground = document.getElementById("navigation-background");
const menuContents = document.getElementById("navigation-contents");

function toggleMenu() {
  menuToggleOpen?.classList.toggle("hidden");
  menuToggleClose?.classList.toggle("hidden");
  menuBackground?.classList.toggle("translate-y-0");
  menuContents?.classList.toggle("translate-y-1/2");
  menuContents?.classList.toggle("opacity-100");
}

menuToggle?.addEventListener("click", toggleMenu);
