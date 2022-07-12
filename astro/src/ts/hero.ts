/*========= ONLOAD LISTENER =========*/
window.addEventListener("load", () => {
  updateNavigationBackground();
});

/*========= NAVIGATION =========*/
const navigationClasses = document.getElementById(
  "navigation-background"
)?.classList;
const navTriggerHeight = window.innerHeight;

window.addEventListener("scroll", updateNavigationBackground);

function updateNavigationBackground() {
  if (window.scrollY >= navTriggerHeight) {
    navigationClasses?.replace("bg-transparent", "bg-neutrals-900/80");
    navigationClasses?.add("backdrop-blur-[8px]");
  } else {
    navigationClasses?.replace("bg-neutrals-900/80", "bg-transparent");
    navigationClasses?.remove("backdrop-blur-[8px]");
  }
}

/*========= HERO =========*/
const hero = document.getElementById("home");
const parallaxMultiplier = 0.015;

if (hero != null) {
  window.addEventListener("mousemove", (event: MouseEvent) => {
    let x = event.clientX;
    let y = event.clientY;

    hero.style.backgroundPositionX = "-" + x * parallaxMultiplier + "px";
    hero.style.backgroundPositionY = "-" + y * parallaxMultiplier + "px";
  });
}
