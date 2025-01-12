
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

document.getElementById('guessBtn').addEventListener('click', () => {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  const feedback = document.getElementById('feedback');
  const attemptsDisplay = document.getElementById('attempts');

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  const diff=randomNumber-userGuess;

  if (userGuess === randomNumber) {
    feedback.textContent = `🎉 congratulations! You guessed it in ${attempts} attempts!`;
    feedback.style.color = 'green';
  } else if (userGuess < randomNumber) {
    if(diff<=10)
    feedback.textContent = 'Near And low! Try again.';
  else feedback.textContent = 'Too low! Try again.';
    feedback.style.color = 'red';
  } else {
    if((diff*-1)<=10)
      feedback.textContent = 'Near And High! Try again.';
    else 
    feedback.textContent = 'Too high! Try again.';
    feedback.style.color = 'red';
  }
});

document.getElementById('ReStart').addEventListener('click' , () =>{
  attempts=0;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  const attemptsDisplay=document.getElementById('attempts');
  const feedback = document.getElementById('feedback');
  feedback.textContent= '';
  attemptsDisplay.textContent=attempts;
})
