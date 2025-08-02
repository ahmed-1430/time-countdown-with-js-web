 function startCountdown() {
        let seconds = parseInt(document.getElementById("secondsInput").value);
        const countdownElement = document.getElementById("countdown");

        const timer = setInterval(() => {
            countdownElement.textContent = seconds;
            seconds--;

            if (seconds < 0) {
                clearInterval(timer);
                countdownElement.textContent = "Done!";
            }
        }, 1000);
    }