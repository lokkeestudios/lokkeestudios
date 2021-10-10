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
      $(".navigation").css("background", "none");
    } else if (origin.isFirst && window.innerWidth > 600) {
      $(".navigation").css("background", "rgba(var(--rgb-dark-not-black), var(--opacity-not-much-transparency))");
    }
  }
})

/* onLoad logic */
$(window).on('load', () => {
  $('.loader-wrapper').delay(250).fadeOut('slow');
  updateTypewriter();
});

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
    let speed = textLength / 2.1;

    text.style.animation = 'typing ' + speed + 's steps(' + textLength + ', end), blink-caret .75s step-end infinite';
    (index === texts.length - 1) ? index = 0 : index++;
  }, 550);
}
