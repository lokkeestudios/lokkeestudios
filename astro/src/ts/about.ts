/*========= ONLOAD EVENT =========*/
window.addEventListener("load", () => updateTypewriter());

/*========= TYPEWRITER =========*/
const typewriterHeadlines = [
  "Developer",
  "Problem solver",
  "Designer",
  "Coffeeholic",
  "Freelancer",
  "Globetrotter",
];
let index = 0;
const typewriter = document.getElementById("typewriter");
typewriter?.addEventListener("animationend", updateTypewriter);
export function updateTypewriter() {
  if (typewriter == null) return;

  typewriter!.style.animation = "none";

  setTimeout(function () {
    typewriter!.innerText = typewriterHeadlines[index];

    let textLength = typewriterHeadlines[index].length;
    let speed = textLength / 2.3;

    typewriter!.style.animation =
      "typing " + speed + "s steps(" + textLength + ", end)";
    index === typewriterHeadlines.length - 1
      ? (index = 0)
      : index++; /* go back to index 0, if incrementing will causes OutOfBoundsException */
  }, 450);
}
