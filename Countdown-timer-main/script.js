let timerInterval;
let timeInSeconds = 0;

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function setTimer() {
    const hoursInput = parseInt(document.getElementById('hours').value) || 0;
    const minutesInput = parseInt(document.getElementById('minutes').value) || 0;
    const secondsInput = parseInt(document.getElementById('seconds').value) || 0;

    timeInSeconds = hoursInput * 3600 + minutesInput * 60 + secondsInput;
    document.getElementById('timer').textContent = formatTime(timeInSeconds);
}

function startTimer() {
    if (timeInSeconds <= 0) {
        return;
    }

    timerInterval = setInterval(() => {
        timeInSeconds--;
        document.getElementById('timer').textContent = formatTime(timeInSeconds);
        if (timeInSeconds <= 0) {
            stopTimer();
            alert('Time is up!');
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function restartTimer() {
    stopTimer();
    startTimer();
}

function resetTimer() {
    stopTimer();
    timeInSeconds = 0;
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('timer').textContent = '00:00:00';
}
