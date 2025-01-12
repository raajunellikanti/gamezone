// List of game names corresponding to each slide
const gameNames = [
  "Guess Number Game",
  "Memory Game",
  "Count Time Game"
];

const gameNameElement = document.getElementById("gameName");
const gameContainer = document.getElementById("gameContainer");
const pages = document.querySelectorAll(".page");
const arrowLeft = document.getElementById("arrow1");
const arrowRight = document.getElementById("arrow2");

// Current slide index
let currentIndex = 0;

// Function to update the slider position and game name
function updateSlider(index) {
  // Ensure index is within bounds
  if (index < 0) index = gameNames.length - 1;
  if (index >= gameNames.length) index = 0;

  // Update the position of the slider
  gameContainer.style.transform = `translateX(-${index * 100}%)`;

  // Update the game name
  gameNameElement.textContent = gameNames[index];

  // Update active page indicator
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });

  // Update the current index
  currentIndex = index;
}

// Add event listeners to arrows
arrowLeft.addEventListener("click", () => updateSlider(currentIndex - 1));
arrowRight.addEventListener("click", () => updateSlider(currentIndex + 1));

// Add event listeners to page indicators
pages.forEach((page, index) => {
  page.addEventListener("click", () => updateSlider(index));
});

// Initialize slider
updateSlider(currentIndex);
