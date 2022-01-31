/*--------- INITIALIZATION ---------*/
import Splide from "@splidejs/splide";

/*--------- SPLIDEJS PROJECTS SLIDER ---------*/
new Splide(".splide", {
  type: "loop",
  padding: { left: "16.666666%", right: "16.666666%" },
  gap: "8rem",
  heightRatio: 0.5,
  breakpoints: {
    1280: {
      padding: { left: "12.5%", right: "12.5%" },
      gap: "6rem",
      heightRatio: 0.5,
    },
    1024: {
      padding: { left: "12.5%", right: "12.5%" },
      gap: "1rem",
      heightRatio: 1,
    },
    768: {
      padding: { left: "8.333333%", right: "8.333333%" },
      gap: "1rem",
      heightRatio: 1.6,
    },
  },
}).mount();

/* Form logic such as submitting */
const form: HTMLFormElement | null = document.getElementById(
  "contact-form"
) as HTMLFormElement;

if (form != null) form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event: Event) {
  if (form != null) {
    event.preventDefault();

    const formData: FormData = new FormData(form);
    postFormData(formData).then(() => {
      form.reset();
      form.style.display = "none";

      const contactFormSuccess: HTMLElement | null = document.getElementById(
        "contact-form-success"
      );
      if (contactFormSuccess != null)
        contactFormSuccess.style.display = "block";
    });
  }
}

function postFormData(formData: FormData) {
  return fetch("/handle_contact-form.php", {
    method: "POST",
    body: formData,
  });
}

/* onload logic */
window.addEventListener("load", () => {
  updateNavigationBackground();
  updateTypewriter();
  fadeOutLoadingScreen();
});

/*--------- EMAIL ---------*/
const typewriterHeadlines: Array<string> = [
  "Developer",
  "Problem solver",
  "Designer",
  "Coffeeholic",
  "Freelancer",
  "Globetrotter",
];
let index: number = 0;

const typewriter: HTMLElement | null = document.getElementById("typewriter");

typewriter?.addEventListener("animationend", updateTypewriter);

function updateTypewriter() {
  if (typewriter == null) return;

  typewriter!.style.animation = "none";

  setTimeout(function () {
    typewriter!.innerText = typewriterHeadlines[index];

    let textLength: number = typewriterHeadlines[index].length;
    let speed: number = textLength / 2.3;

    typewriter!.style.animation =
      "typing " + speed + "s steps(" + textLength + ", end)";
    index === typewriterHeadlines.length - 1
      ? (index = 0)
      : index++; /* go back to index 0, if incrementing will causes OutOfBoundsException */
  }, 450);
}

/*--------- EMAIL ---------*/
const openEmailAnchor: HTMLElement | null =
  document.getElementById("open-email");

openEmailAnchor?.addEventListener(
  "click",
  () => (location.href = "mailto:hello@lokkeestudios.com")
);

/*--------- LOADER ---------*/
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

/*--------- NAVIGATION ---------*/
const navigationClasses: DOMTokenList | undefined =
  document.getElementById("navigation")?.classList;
const triggerHeight: number = window.innerHeight;

window.addEventListener("scroll", updateNavigationBackground);

function updateNavigationBackground() {
  if (window.scrollY >= triggerHeight) {
    navigationClasses?.replace("bg-transparent", "bg-neutrals-900/70");
    navigationClasses?.add("backdrop-blur-md");
  } else {
    navigationClasses?.replace("bg-neutrals-900/70", "bg-transparent");
    navigationClasses?.remove("backdrop-blur-md");
  }
}

/*--------- HERO ---------*/
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
