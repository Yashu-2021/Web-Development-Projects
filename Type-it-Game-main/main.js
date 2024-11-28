// Activate Game
window.addEventListener('load', init);

// Levels 
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
};

// Current Level
let currentLevel = levels.easy;

// Globals
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input'),
    currentWord = document.querySelector('#current-word'),
    scoreDisplay = document.querySelector('#score'),
    timeDisplay = document.querySelector('#time'),
    message = document.querySelector('#message'),
    seconds = document.querySelector('#seconds'),
    hardBtn = document.querySelector('#hardBtn'),
    mediumBtn = document.querySelector('#mediumBtn'),
    easyBtn = document.querySelector('#easyBtn');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initialize Game
function init() {
    // Show number of settings UI
    seconds.innerHTML = currentLevel;
    // Load Word From Array
    showWord(words);
    // Match User Word, input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check Game Status
    setInterval(checkStatus, 50);
};

// Pick & Show Random Word 
function showWord(words) {
    const randomWord = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomWord];
}

// Countdown Timer
function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
};

// Check Game Status 
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!';
        score = -1;
    }
};

// Match User to word Input (A)
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    // Updating UI with 0 instead of -1
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

};

// Match currentWork to wordInput (A)
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
};

// Events change difficulty
// Hard 
hardBtn.addEventListener('click', e => {
    currentLevel = levels.hard;
    seconds.innerHTML = currentLevel;
});

// Medium 
mediumBtn.addEventListener('click', e => {
    currentLevel = levels.medium;
    seconds.innerHTML = currentLevel;
});

// Easy 
easyBtn.addEventListener('click', e => {
    currentLevel = levels.easy;
    seconds.innerHTML = currentLevel;
});