// Generate random numbers and update dice images and heading text
function playGame() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Get the left and right image elements
  const leftImage = document.querySelector('.img1');
  const rightImage = document.querySelector('.img2');

  // Set the source attribute of the left and right image elements with the random dice images
  leftImage.setAttribute('src', `images/dice${randomNumber1}.png`);
  rightImage.setAttribute('src', `images/dice${randomNumber2}.png`);

  // Get the <h1> element
  const heading = document.querySelector('h1');

  // Check the dice values and change the heading text accordingly
  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins!";
  } else {
    heading.innerHTML = "Draw!";
  }
}

// Get the "Play" button element
const playButton = document.querySelector('#play-button');

// Add click event listener to the "Play" button
playButton.addEventListener('click', playGame);
