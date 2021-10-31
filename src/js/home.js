/* onLoad logic */
window.addEventListener('load', () => {
  updateTypewriter();
});

/* Typewriter configuration */
const texts = ["Developer", "Problem solver", "Graphic designer", "Coffeeholic", "Freelancer", "Globetrotter"];
let index = 0;

document.getElementById("typewriter").addEventListener("animationend", updateTypewriter);

function updateTypewriter() {
  let text = document.getElementById("typewriter-text");
  text.style.animation = 'none';

  setTimeout(function () {
    text.innerHTML = texts[index];

    let textLength = texts[index].length;
    let speed = textLength / 2.3;

    text.style.animation = 'typewriter-typing ' + speed + 's steps(' + textLength + ', end)';
    (index === texts.length - 1) ? index = 0 : index++;
  }, 450);
}

/* Form logic such as submitting */
{
  let addTouchedClass = function () {
    this.classList.add('contact-form__input-field--is-touched')
  }
  document
    .querySelectorAll('input')
    .forEach((element) => {
      element.addEventListener('blur', addTouchedClass, false)
      element.addEventListener('keydown', addTouchedClass, false)
    })
  document
    .querySelectorAll('textarea')
    .forEach((element) => {
      element.addEventListener('blur', addTouchedClass, false)
      element.addEventListener('keydown', addTouchedClass, false)
    })
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  postFormData(formData).then(() => {
    document.getElementById('contact-form').reset();
    document.getElementById('contact-form').style.display = "none";
    document.getElementById('contact-form-success').style.display = "block";
  });
}

function postFormData(formData) {

  return fetch("handle_contact-form.php", {
    method: "POST",
    body: formData
  });
}
