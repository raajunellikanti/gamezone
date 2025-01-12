const cardsArray = [
    '🍎', '🍎', '🍌', '🍌','🍇', '🍇',
    '🍉', '🍉','🍓', '🍓', '🍒', '🍒',
    '🥝', '🥝', '🍍', '🍍', '❤️', '❤️'];
  
  let gameGrid = document.getElementById('gameGrid');
  let timerElement = document.getElementById('time');
  let reloadButton = document.getElementById('reloadButton');
  let flippedCards = [];
  let matchedCards = [];
  let isTimerRunning=false;
// Start the timer
function startTimer() {
  if (isTimerRunning) return; // Prevent restarting the timer

  isTimerRunning = true; // Set the timer flag to true
  seconds = 0; // Reset the seconds counter
  timerElement.textContent = "Time: 0 seconds";
  // Start counting time
  timerInterval = setInterval(() => {
    seconds++;
    timerElement.textContent = `Time: ${seconds} seconds`;
  }, 1000);
}
  
  // Function to shuffle cards
  function shuffleCards() {
    return cardsArray.sort(() => 0.5 - Math.random());
  }
  //function to reload game
  let reload=()=>{
    isTimerRunning=false;
    clearInterval(timerInterval);
    initializeGame();
  }
  // Function to initialize the game
  function initializeGame() {
    gameGrid.innerHTML = ''; // Clear the grid
    flippedCards = [];
    matchedCards = [];
    timerElement.textContent = `Time: ${0} seconds`;
    shuffleCards().forEach((emoji) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.emoji = emoji;
      card.innerHTML = '?';
      gameGrid.appendChild(card);
      card.addEventListener('click',()=>{
        flipcard(card);
        startTimer();
      });
    });
  }
  
  // Function to flip a card
  let flipcard=(card)=> {
    if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
      card.classList.add('flipped');
      card.innerHTML = card.dataset.emoji;
      flippedCards.push(card);
  
      if (flippedCards.length === 2) {
        checkMatch();
      }
    }
  }
  
  // Function to check for a match
  function checkMatch() {
    const [card1, card2] = flippedCards;
  
    if (card1.dataset.emoji === card2.dataset.emoji) {
      card1.classList.add('matched');
      card2.classList.add('matched');
      matchedCards.push(card1, card2);
    
      flippedCards = [];
  
      if (matchedCards.length === cardsArray.length) {
        clearInterval(timerInterval); // stop the timer
        setTimeout(() => alert('You win!'), 500);
        setTimeout(() =>{
          shuffleCards();
          initializeGame();
          isTimerRunning=false;
        } , 1000)
        clearInterval(timerInterval);
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.innerHTML = '?';
        card2.innerHTML = '?';
        flippedCards = [];
      }, 1000);
    }
  }
  
  // Event listener for the reload button
  reloadButton.addEventListener('click', reload);

  
  // Initialize the game on page load
  initializeGame();
  