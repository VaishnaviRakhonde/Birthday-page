// Countdown Timer to Birthday
function countdownToBirthday() {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), 10, 15); // 15 November
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const diff = nextBirthday - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = ` ${days}: ${hours}: ${minutes}: ${seconds}`;
    setTimeout(countdownToBirthday, 1000);
}
countdownToBirthday();

// Confetti and Balloons
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        document.getElementById("confetti").appendChild(confetti);
    }
}

function createBalloons() {
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        balloon.style.animationDuration = `${Math.random() * 2 + 4}s`;
        document.getElementById("balloons").appendChild(balloon);
    }
}

// Candle Blowing and Popup Message
document.getElementById("celebrateButton").addEventListener("click", function() {
    createConfetti();
    createBalloons();
    document.getElementById("messagePopup").style.display = "block";
});

// Close Popup
function closePopup() {
    document.getElementById("messagePopup").style.display = "none";
}
