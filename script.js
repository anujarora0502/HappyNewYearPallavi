document.addEventListener('DOMContentLoaded', function () {
    // Get the container for fireworks
    const container = document.querySelector('.fireworks');
    
    // Initialize fireworks
    const fireworks = new Fireworks.default(container,{
        speed: 4,
        acceleration: 1.05,
        friction: 1,
        gravity: 4,
        particles: 400,
        explosion: 10
    });
    
    // Variable to keep track of whether fireworks are active or not
    let fireworksActive = false;

    // Fireworks effect on 'Celebrate' button click
    const celebrateButton = document.getElementById('celebrateButton');
    celebrateButton.addEventListener('click', function() {
        if (fireworksActive) {
            fireworks.stop(); // Stop the fireworks animation if it's active
            celebrateButton.textContent = 'Celebrate'
            celebrateButton.style.backgroundColor = 'teal'
        } else {
            fireworks.start(); // Start the fireworks animation if it's not active
             celebrateButton.textContent = 'Stop'
             celebrateButton.style.backgroundColor = 'red'
        }
        // Toggle the status of fireworks
        fireworksActive = !fireworksActive;
    });
});
