/*========= INITIALIZATION =========*/
import Splide from "@splidejs/splide";

/*========= SPLIDEJS PROJECTS SLIDER =========*/
if (document.querySelector(".splide") != null) {
  new Splide(".splide", {
    classes: {
      pagination: "hidden",
    },
  }).mount();
}
