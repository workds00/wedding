const landingSection = document.getElementById("landing-section") as HTMLDivElement;
const openButton = document.getElementById("open-button") as HTMLButtonElement;
const countdownDays = document.getElementById("countdown-days") as HTMLDivElement;
const countdownHours = document.getElementById("countdown-hours") as HTMLDivElement;
const countdownMinutes = document.getElementById("countdown-minutes") as HTMLDivElement;
const countdownSeconds = document.getElementById("countdown-seconds") as HTMLDivElement;

openButton.addEventListener("click", () => {
    landingSection.classList.toggle("hidden");
});

// Countdown timer
const countdownElement = document.getElementById("countdown") as HTMLDivElement;
const countdownDate = new Date("2025-06-22T00:00:00Z").getTime();
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownDays.innerHTML = days.toString();
    countdownHours.innerHTML = hours.toString().padStart(2, '0');
    countdownMinutes.innerHTML = minutes.toString().padStart(2, '0');
    countdownSeconds.innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "EXPIRED";
    }
}
, 1000);