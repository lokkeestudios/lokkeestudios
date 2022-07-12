/*========= ONLOAD LISTENER =========*/
window.addEventListener("load", () => {
  fadeOutLoadingScreen();
});

/*========= LOADER =========*/
function fadeOutLoadingScreen() {
  const loader = document.getElementById("loader");
  const loaderLogo = document.getElementById("loader-logo");
  const fadeOutDuration = 1400; /* 1.2s + 0.2s */
  const fadeOutLogoDuration = 750; /* 0.75s */

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
