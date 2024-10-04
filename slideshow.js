let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

showSlides();

function showSlides() {
  // Remove all classes from slides to reset them
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("current", "prev", "next");
  }

  // Set the current, previous, and next slides
  let currentSlideIndex = slideIndex;
  let nextSlideIndex = (slideIndex + 1) % slides.length;
  let prevSlideIndex = (slideIndex - 1 + slides.length) % slides.length;

  // Add classes to the corresponding slides
  slides[currentSlideIndex].classList.add("current");
  slides[nextSlideIndex].classList.add("next");
  slides[prevSlideIndex].classList.add("prev");

  // Increment the slide index
  slideIndex = (slideIndex + 1) % slides.length;

  // Set the timer for the next slide change
  setTimeout(showSlides, 10000);
}
