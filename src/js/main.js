/* The same breakpoints as the CSS ones, for responsibility */
const smallBreakpoint = 600;
const mediumBreakpoint = 800;

const navigation = document.querySelector(".navigation");

/* fullPage.js configuration */
try {
  new fullpage("#app", {
    autoScrolling: true,
    navigation: true,
    navigationPosition: "left",
    scrollingSpeed: 650,
    responsiveWidth: mediumBreakpoint,
    scrollOverflow: true,
    anchors: ["home", "about", "work", "contact", "sourceCode"],
    onLeave: function (origin, destination, direction) {
      if (destination.isFirst && window.innerWidth > mediumBreakpoint) {
        navigation.style.background = "none";
      } else if (origin.isFirst && window.innerWidth > mediumBreakpoint) {
        navigation.style.background =
          "rgba(var(--rgb-dark-not-black), var(--opacity-not-much-transparency))";
      }
      let backgroundStyle;
      let colorStyle;

      if (
        destination.index == 0 ||
        destination.index == 1 ||
        destination.index == 3
      ) {
        backgroundStyle = "var(--color-off-white)";
        colorStyle = "var(--color-dark-not-black)";
      } else {
        backgroundStyle = "var(--color-dark-not-black)";
        colorStyle = "var(--color-off-white)";
      }

      document.querySelectorAll("#fp-nav ul li a span").forEach((element) => {
        element.style.background = backgroundStyle;
      });
      document
        .querySelectorAll("#fp-nav ul li .fp-tooltip")
        .forEach((element) => {
          element.style.background = backgroundStyle;
          element.style.color = colorStyle;
        });
    },
  });
} catch (e) {
  /* fullpage.js is not defined/not needed on the current page */
  navigation.style.background =
    "rgba(var(--rgb-dark-not-black), var(--opacity-not-much-transparency))";
}

/* onLoad logic */
window.addEventListener("load", () => {
  fadeOutLoadingScreen();
});

/* Loader fade-out logic */
function fadeOutLoadingScreen() {
  const loadingScreen = document.querySelector(".loading-screen");
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

/* Contact email method */
function openEmail() {
  window.location = "mailto:hello@lokkeestudios.com";
}

try {
  document.querySelector("#openEmail").addEventListener("click", function () {
    openEmail();
  });
} catch (e) {
  /* There is no openEmail element in the DOM */
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

document.querySelector("#toggleMenu").addEventListener("click", function () {
  toggleMenu(this);
});
