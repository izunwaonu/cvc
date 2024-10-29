const words = ["cat", "bat", "dad", "hat", "rat", "bag", "man", "pan", "tap"];
const images = words.map(word => `images/${word}.png`);

// Lesson 1: Meet the Words
const wordContainer = document.getElementById('word-container');
words.forEach((word, index) => {
  const wordCard = document.createElement('div');
  wordCard.className = 'word-card';
  wordCard.textContent = word;
  wordCard.addEventListener('click', () => showImage(index));
  wordContainer.appendChild(wordCard);
});

function showImage(index) {
  const img = document.createElement('img');
  img.src = images[index];
  img.alt = words[index];
  wordContainer.appendChild(img);
}

// Lesson 2: Sound it Out!
const soundCards = document.getElementById('sound-cards');
words.forEach((word) => {
  const soundCard = document.createElement('div');
  soundCard.className = 'sound-card';
  soundCard.textContent = word;
  soundCard.addEventListener('click', () => displaySounds(word));
  soundCards.appendChild(soundCard);
});

function displaySounds(word) {
  const phoneticSounds = {
    cat: "k - a - t",
    bat: "b - a - t",
    dad: "d - a - d",
    hat: "h - a - t",
    rat: "r - a - t",
    bag: "b - a - g",
    man: "m - a - n",
    pan: "p - a - n",
    tap: "t - a - p"
  };
  const feedback2 = document.getElementById('feedback-2');
  feedback2.textContent = `Sounds: ${phoneticSounds[word]}`;
}

// Game 1: Tap the Word
const game1Container = document.getElementById('game-1');
words.forEach((word, index) => {
  const img = document.createElement('img');
  img.src = images[index];
  img.alt = word;
  img.addEventListener('click', () => displayAnswer(word));
  game1Container.appendChild(img);
});

function displayAnswer(word) {
  const feedback1 = document.getElementById('feedback-1');
  feedback1.textContent = `This is a ${word}!`;
}

// Game 3: Flip the Cards
// const flipGame = document.getElementById('flip-game');
// words.forEach((word) => {
//   const flipCard = document.createElement('div');
//   flipCard.className = 'flip-card';
  
//   const flipCardInner = document.createElement('div');
//   flipCardInner.className = 'flip-card-inner';
  
//   const front = document.createElement('div');
//   front.className = 'flip-card-front';
//   // front.textContent = 'img';
//   const img = document.createElement('img'); // Create an img element
// img.src = images[words.indexOf(word)]; // Set the source to the corresponding image
// img.alt = word; // Provide an alt text for accessibility
// front.appendChild(img);
  
//   const back = document.createElement('div');
//   back.className = 'flip-card-back';
//   back.textContent = word;
  
//   flipCardInner.appendChild(front);
//   flipCardInner.appendChild(back);
//   flipCard.appendChild(flipCardInner);

//   flipCard.addEventListener('click', () => {
//     flipCard.classList.toggle('flipped');
//   });

//   flipGame.appendChild(flipCard);
// });
const flipGame = document.getElementById('flip-game');
words.forEach((word) => {
  const flipCard = document.createElement('div');
  flipCard.className = 'flip-card';
  
  const flipCardInner = document.createElement('div');
  flipCardInner.className = 'flip-card-inner';
  
  const front = document.createElement('div');
  front.className = 'flip-card-front';
  
  // Create an img element for the front
  const img = document.createElement('img');
  img.src = images[words.indexOf(word)]; // Set the source to the corresponding image
  img.alt = word; // Provide an alt text for accessibility
  front.appendChild(img); // Append the image to the front div

  const back = document.createElement('div');
  back.className = 'flip-card-back';
  back.textContent = word; // Set the word as the content of the back

  // Append both sides to the flipCardInner
  flipCardInner.appendChild(front);
  flipCardInner.appendChild(back);
  flipCard.appendChild(flipCardInner);

  flipCard.addEventListener('click', () => {
    flipCard.classList.toggle('flipped'); // Toggle the flip on click
  });

  flipGame.appendChild(flipCard);
});

