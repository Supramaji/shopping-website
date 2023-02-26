var carousel = document.querySelector('.carousel');
var slides = document.querySelectorAll('.slide');
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var slideWidth = slides[0].clientWidth;
var currentSlide = 0;

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  carousel.style.left = -currentSlide * slideWidth + 'px';
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 1;
  }
  carousel.style.left = -currentSlide * slideWidth + 'px';
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);