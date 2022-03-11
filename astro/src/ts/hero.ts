/*========= ONLOAD LISTENER =========*/
window.addEventListener("load", () => {
  updateNavigationBackground();
});

/*========= NAVIGATION =========*/
const navigationClasses: DOMTokenList | undefined = document.getElementById(
  "navigation-background"
)?.classList;
const navTriggerHeight: number = window.innerHeight;

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
const hero: HTMLElement | null = document.getElementById("home");
const parallaxMultiplier: number = 0.015;

if (hero != null) {
  window.addEventListener("mousemove", (event: MouseEvent) => {
    let x: number = event.clientX;
    let y: number = event.clientY;

    hero.style.backgroundPositionX = "-" + x * parallaxMultiplier + "px";
    hero.style.backgroundPositionY = "-" + y * parallaxMultiplier + "px";
  });
}
