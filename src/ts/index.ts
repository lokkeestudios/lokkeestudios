/* typewriter configuration */
const texts: Array<string> = [
  "Developer",
  "Problem solver",
  "Graphic designer",
  "Coffeeholic",
  "Freelancer",
  "Globetrotter",
];
let index: number = 0;

const typewriter: HTMLElement | null = document.querySelector(".typewriter");

typewriter!.addEventListener("animationend", updateTypewriter);

function updateTypewriter() {
  typewriter!.style.animation = "none";

  setTimeout(function () {
    typewriter!.innerHTML = texts[index];

    let textLength: number = texts[index].length;
    let speed: number = textLength / 2.3;

    typewriter!.style.animation =
      "typing " + speed + "s steps(" + textLength + ", end)";
    index === texts.length - 1 ? (index = 0) : index++;
  }, 450);
}

/* onload logic */
window.addEventListener("load", () => {
  fadeOutLoadingScreen();
  if (typewriter != null) updateTypewriter();
});

/* loading screen fade-out logic */
function fadeOutLoadingScreen() {
  const loadingScreen: HTMLElement | null =
    document.querySelector(".loading-screen");

  if (loadingScreen == null) return;

  const fadeOut: number = window.setInterval(function () {
    if (!loadingScreen.style.opacity) {
      loadingScreen.style.opacity = "1";
    }
    if (parseFloat(loadingScreen.style.opacity) > 0) {
      loadingScreen.style.opacity = (
        parseFloat(loadingScreen.style.opacity) - 0.05
      ).toString();
    } else {
      clearInterval(fadeOut);
      loadingScreen.style.display = "none";
    }
  }, 35);
}

/* Contact email method */
function openEmail() {
  location.href = "mailto:hello@lokkeestudios.com";
}

const emailInteractable: HTMLElement | null =
  document.querySelector("#openEmail");

if (emailInteractable != null) {
  emailInteractable.addEventListener("click", function () {
    openEmail();
  });
}
