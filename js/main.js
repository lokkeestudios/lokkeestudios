/* Mobile responsive width */
const mobileWidth = 600;

/* fullPage.js configuration */
new fullpage('#app', {
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'left',
  scrollingSpeed: 650,
  responsiveWidth: 600,
  anchors: ['home', 'about', 'work', 'contact', 'sourceCode'],
  onLeave: function (origin, destination) {
    console.log(origin.isFirst);
    if (destination.isFirst && window.innerWidth > mobileWidth) {
      document.querySelector('.navigation').style.background = 'none';
    } else if (origin.isFirst && window.innerWidth > mobileWidth) {
      document.querySelector('.navigation').style.background = 'rgba(var(--rgb-dark-not-black), var(--opacity-not-much-transparency))';
    }
  }
})

/* onLoad logic */
window.addEventListener('load', () => {
  fadeOutLoadingScreen();
  updateTypewriter();
});

/* Loader fade-out logic */
function fadeOutLoadingScreen() {
  const loadingScreen = document.querySelector('.loading-screen');
  const fadeOut = setInterval(function () {
    if (!loadingScreen.style.opacity) {
      loadingScreen.style.opacity = 1;
    }
    if (loadingScreen.style.opacity > 0) {
      loadingScreen.style.opacity -= 0.05;
    } else {
      clearInterval(fadeOut);
      loadingScreen.style.display = "none";
    }
  }, 35);
}

/* Typewriter configuration */
const texts = ["developer", "graphic designer", "coffeeholic", "freelancer", "globetrotter"];
let index = 0;

document.getElementById("typewriter").addEventListener("animationend", updateTypewriter);

function updateTypewriter() {
  let text = document.getElementById("typewriter-text");
  text.style.animation = 'none';

  setTimeout(function () {
    text.innerHTML = texts[index];

    let textLength = texts[index].length;
    let speed = textLength / 2.3;

    text.style.animation = 'typewriter-typing ' + speed + 's steps(' + textLength + ', end), typewriter-blink-caret .75s step-end infinite';
    (index === texts.length - 1) ? index = 0 : index++;
  }, 550);
}

/* Toggle mobile navigation-menu method */
function toggleMenu(toggleIcon) {
  const navigationContent = document.getElementById("menu-toggled");

  if (navigationContent.style.display === "flex") {
    navigationContent.style.display = "none";
    toggleIcon.classList.remove("fa-times");
    toggleIcon.classList.add("fa-bars");
  } else {
    navigationContent.style.display = "flex";
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-times");
  }
}

document.querySelector('#toggleMenu').addEventListener("click", function () {
  toggleMenu(this)
});

/* Contact email method */
function openEmail() {
  window.location = "mailto:hello@lokkeestudios.com";
}

document.querySelector('#openEmail').addEventListener("click", function () {
  openEmail()
});
