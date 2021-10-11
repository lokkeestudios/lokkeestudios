/* fullPage.js configuration */
new fullpage('#app', {
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'left',
  scrollingSpeed: 850,
  responsiveWidth: 600,
  onLeave: function (origin, destination) {
    console.log(origin.isFirst);
    if (destination.isFirst && window.innerWidth > 600) {
      document.querySelector('.navigation').style.background = 'none';
    } else if (origin.isFirst && window.innerWidth > 600) {
      document.querySelector('.navigation').style.background = 'rgba(var(--rgb-dark-not-black), var(--opacity-not-much-transparency))';
    }
  }
})

/* onLoad logic */
window.addEventListener('load', () => {
  fadeOutLoader();
  updateTypewriter();
});

/* Loader fade-out logic */
function fadeOutLoader() {
  console.log("test");
  const loader = document.querySelector('.loader-wrapper');
  const fadeOut = setInterval(function () {
    if (!loader.style.opacity) {
      loader.style.opacity = 1;
    }
    if (loader.style.opacity > 0) {
      loader.style.opacity -= 0.05;
    } else {
      clearInterval(fadeOut);
      loader.style.display = "none";
    }
  }, 35);
}

/* Typewriter configuration */
const texts = ["developer", "graphic designer", "generalist", "student", "coffeeholic", "freelancer", "globetrotter"];
let index = 0;

document.getElementById("typewriter").addEventListener("animationend", updateTypewriter);

function updateTypewriter() {
  let text = document.getElementById("typewriter-text");
  text.style.animation = 'none';

  setTimeout(function () {
    text.innerHTML = texts[index];

    let textLength = texts[index].length;
    let speed = textLength / 2.3;

    text.style.animation = 'typing ' + speed + 's steps(' + textLength + ', end), blink-caret .75s step-end infinite';
    (index === texts.length - 1) ? index = 0 : index++;
  }, 550);
}
