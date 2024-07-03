if (!window.sliderInstance) {
    window.sliderInstance = {};

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
            window.sliderInstance.timeoutID = setTimeout(autoSlide, cycle);
        }

        // Ensure the autoSlide runs only if .screens is present
        const screensContainer = document.querySelector(`${containerSelector} .screens`);
        if (screensContainer) {
            window.sliderInstance = {
                timeoutID: null,
                stop: function() {
                    clearTimeout(this.timeoutID);
                }
            };
            autoSlide();
        }
    }
}

initializeSlider2('.screens-container2', 2000, 4);
initializeSlider2('.screens-container3', 4000, 19);
initializeSlider2('.screens-container4', 5000, 3);
initializeSlider2('.screens-container5', 3000, 3);
initializeSlider2('.screens-container6', 4000, 9);
initializeSlider2('.screens-container7', 4000, 8);


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

