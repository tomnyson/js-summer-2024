// countdown.js

// Set the date and time for the flash sale end (adjust this to your needs)
const flashSaleEndDate = new Date('2024-07-30T23:59:59').getTime();

// Update the countdown every 1 second
const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = flashSaleEndDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    console.log("days", days);
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log("hours",hours);
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById('timer').innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = "EXPIRED";
    }
};

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);
