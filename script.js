// Countdown Timer
function updateCountdown() {
    const newYear = new Date('2025-01-01T00:00:00');
    const now = new Date();
    const timeDiff = newYear - now;

    if (timeDiff <= 0) {
        document.getElementById('countdown').textContent = 'Happy New Year!';
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Confetti Effect
document.getElementById('celebrate-button').addEventListener('click', () => {
    createConfetti();
});

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        document.body.appendChild(confetti);
    }
}

// Welcome screen transition
document.getElementById('enter-button').addEventListener('click', () => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('background-music').play();
});
