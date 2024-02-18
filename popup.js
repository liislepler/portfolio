function initializeSlider(containerSelector, cycle, numScreens) {
  let currentIndex = 0;

  function showSlide(index) {
      const screens = document.querySelector(`${containerSelector} .screens`);
      if (screens) {
          screens.style.transform = `translateX(${index * -100}%)`;
      }
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % numScreens;
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + numScreens) % numScreens;
      showSlide(currentIndex);
  }

  function autoSlide() {
      nextSlide();
      setTimeout(autoSlide, cycle);
  }

  // Ensure the autoSlide runs only if .screens is present
  const screensContainer = document.querySelector(`${containerSelector} .screens`);
  if (screensContainer) {
      autoSlide();
  }

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
}

function initializeSlider2(containerSelector, cycle, numScreens) {
  let currentIndex = 0;

  function showSlide(index) {
      const screens = document.querySelector(`${containerSelector} .screens`);
      if (screens) {
          screens.style.transform = `translateX(${index * -100}%)`;
      }
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % numScreens;
      showSlide(currentIndex);
  }

  function autoSlide() {
      nextSlide();
      setTimeout(autoSlide, cycle);
  }

  // Ensure the autoSlide runs only if .screens is present
  const screensContainer = document.querySelector(`${containerSelector} .screens`);
  if (screensContainer) {
      autoSlide();
  }
}

// Example usage for the first slider
initializeSlider('.screens-container', 4000, 8);
// Example usage for the second slider
initializeSlider2('.screens-container2', 2000, 4);


var slideshowContainers = document.getElementsByClassName("title-container");

for (let s = 0; s < slideshowContainers.length; s++) {
  var cycle = slideshowContainers[s].dataset.cycle;
  var slides = slideshowContainers[s].querySelectorAll('.slide');
  var slideIndex = 0;
  showSlides(slides, slideIndex, cycle);
}

function showSlides(slides, slideIndex, cycle) {
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  };

  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
  };

  slides[slideIndex - 1].style.display = "block";

  setTimeout(function() {
      showSlides(slides, slideIndex, cycle)
  }, cycle);
}

