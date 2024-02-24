window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loading').classList.add('hidden');
  }, 1000);
});

function toggleDropdown(menu) {
menu.classList.toggle("active");
}

function updateMainTitle(event) {
  event.preventDefault();

  var selectedTag = document.getElementById("selectedTag");

  selectedTag.innerText = event.target.innerText;
  selectedTag.style.display = "inline-block";

  var projects = document.querySelectorAll('.projects div');
  var chosenTag = event.target.getAttribute("data-tag");

  if (chosenTag === "all") {
  projects.forEach(project => {
      project.style.display = "block";
  });
  } else {
  projects.forEach(project => {
      var projectTags = project.getAttribute("data-tags").split(' ');

      if (projectTags.includes(chosenTag)) {
      project.style.display = "block";
      } else {
      project.style.display = "none";
      }
  });
  }
}

var slideshowContainers = document.getElementsByClassName("slide-container");

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

function scrollToProjects() {
var projectsSection = document.getElementById("projects");

if (projectsSection) {
  projectsSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
}

function scrollToAboutMe() {
var projectsSection = document.getElementById("about-me");

if (projectsSection) {
  projectsSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
}

function loadProjectDetails(projectFile) {
  var projectDetailsContainer = document.getElementById('projectDetails');

  var xhr = new XMLHttpRequest();
  xhr.open('GET', projectFile, true);

  xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
          projectDetailsContainer.innerHTML = xhr.responseText;

          // Create a script element
          var scriptElement = document.createElement('script');
          scriptElement.src = './popup.js'; // Adjust the path accordingly

          // Append the script to the head of the document
          document.head.appendChild(scriptElement);

          document.querySelector('.close-btn').addEventListener('click', function() {
              var projectPopUp = document.getElementById('projectPopUp');
              projectPopUp.style.display = 'none';
              
              const videoElement = document.querySelector('.video video');
              videoElement.pause();
          });

          document.addEventListener('click', closePopUpOutside);

      } else {
      console.error('Failed to load project details.');
      }
  };

  xhr.send();
}

function showProjectPopUp(content) {
  var projectDetailsContainer = document.getElementById('projectDetails');

  // Calculate the center of the viewport
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  var top = viewportHeight / 2;
  var left = viewportWidth / 2;

  // Apply the calculated position to the pop-up
  projectDetailsContainer.style.top = top + 'px';
  projectDetailsContainer.style.left = left + 'px';

  // Set the content in the pop-up
  projectDetailsContainer.innerHTML = content;

  // Show the pop-up
  projectDetailsContainer.style.display = 'block';
}

function closePopUpOutside(event) {
  var projectPopUp = document.getElementById('projectPopUp');
  var projectDetailsContainer = document.getElementById('projectDetails');

  // Check if the clicked element is outside the pop-up container
  if (!projectDetailsContainer.contains(event.target) && event.target !== projectPopUp) {
      // Hide the pop-up
      projectPopUp.style.display = 'none';
      const videoElement = document.querySelector('.video video');
      videoElement.pause();

      // Remove the event listener to prevent unwanted behavior
      document.removeEventListener('click', closePopUpOutside);
  }
}





