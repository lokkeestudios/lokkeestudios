/*========= IMPORTS =========*/
import site from "../data/site";

/*========= ONLOAD LISTENER =========*/
window.addEventListener("load", () => {
  fadeOutLoadingScreen();
});

/*========= LOADER =========*/
function fadeOutLoadingScreen() {
  const loader: HTMLElement | null = document.getElementById("loader");
  const loaderLogo: HTMLElement | null = document.getElementById("loader-logo");
  const fadeOutDuration: number = 1400; /* 1.2s + 0.2s */
  const fadeOutLogoDuration: number = 750; /* 0.75s */

  if (loader == null || loaderLogo == null) return;

  loaderLogo.classList.add("animate-loader-logo-fade-out");
  loader.classList.add("animate-loader-fade-out");

  setTimeout(function () {
    loaderLogo.classList.add("hidden");
  }, fadeOutLogoDuration);

  setTimeout(function () {
    loader.classList.add("hidden");
  }, fadeOutDuration -
    100); /* shorter duration, to prevent animation flickering */
}

/*========= EMAIL ANCHOR =========*/
const openEmailAnchor: HTMLElement | null =
  document.getElementById("open-email");

openEmailAnchor?.addEventListener(
  "click",
  () => (location.href = "mailto:" + site.email)
);

/*========= MOBILE NAVIGATION =========*/
const menuToggle: HTMLElement | null = document.getElementById("toggle-menu");
const menuToggleOpen: HTMLElement | null =
  document.getElementById("toggle-menu-open");
const menuToggleClose: HTMLElement | null =
  document.getElementById("toggle-menu-close");
const menuBackground: HTMLElement | null = document.getElementById(
  "navigation-background"
);
const menuContents: HTMLElement | null = document.getElementById(
  "navigation-contents"
);

function toggleMenu() {
  menuToggleOpen?.classList.toggle("hidden");
  menuToggleClose?.classList.toggle("hidden");
  menuBackground?.classList.toggle("translate-y-0");
  menuContents?.classList.toggle("translate-y-1/2");
  menuContents?.classList.toggle("opacity-100");
}

menuToggle?.addEventListener("click", toggleMenu);
