let slideIndex = 1;
let interval = setInterval(() => showSlides(slideIndex += 1), 4000);

// Next/previous controls
function plusSlides(n) {
  console.log(n);
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
  const slides = document.querySelectorAll(".mySlides");
  if(slideIndex <= 0) { slideIndex = 1; }
  if(slideIndex > slides.length) { slideIndex = slides.length; }
  for (i = 0; i < slideIndex; i++) {
      slides[i].style.marginLeft = "-100vw";
  }
  slides[slideIndex-1].style.marginLeft = "0vw";
}