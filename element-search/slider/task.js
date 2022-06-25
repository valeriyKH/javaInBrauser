let sliderPrev = document.querySelector(".slider__arrow_prev");
let nextSlider = document.querySelector(".slider__arrow_next");
let images = Array.from(document.querySelectorAll(".slider__item"));


let classDelete = () => {
  images.forEach((element) => element.classList.remove("slider__item_active"));
};

let adderClass = (i) => {
  images[i].classList.add("slider__item_active");
};

nextSlider.onclick = () => {
  let i = images.findIndex((element) =>
    element.classList.contains("slider__item_active")
  );
  if (i >= images.length - 1) {
    i = -1;
  }
  classDelete();
  adderClass(i + 1);
};

sliderPrev.onclick = () => {
  let i = images.findIndex((element) =>
    element.classList.contains("slider__item_active")
  );
  if (i <= 0) {
    i = images.length;
  }
  classDelete();
  adderClass(i - 1);
};