// Countdown Timer
function updateCountdown() {
    const newYear = new Date('2025-01-01T00:00:00');
    const now = new Date();
    const timeDiff = newYear - now;

    if (timeDiff <= 0) {
        document.getElementById('countdown').textContent = 'Happy New Year!';
        // Show the button after the New Year countdown finishes
        document.getElementById('enter-button').style.display = 'block';
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Allow test access to next page for now (remove once New Year arrives)
document.getElementById('enter-button').addEventListener('click', () => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('background-music').play();
});

// User Input Validation for Final Page
document.getElementById('submit-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    if (userInput === "i love you anuj") {
        alert("Congratulations! You've completed the challenge!");
        // Proceed to the next page or action after correct input
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
