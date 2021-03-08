let slideIndex = 1;
let interval = setInterval(() => showSlides(slideIndex += 1), 4000);

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearInterval(interval);
  interval = setInterval(() => showSlides(slideIndex += 1), 4000);
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(interval);
  interval = setInterval(() => showSlides(slideIndex += 1), 4000);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}