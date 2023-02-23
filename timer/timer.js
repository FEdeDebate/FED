// Define global variables to keep track of the timer state and values
var isTimerRunning = false;
var minutesSet = 5;
var secondsSet = 0;
var minutesRemaining = minutesSet;
var secondsRemaining = secondsSet;
var timerInterval = null;

var remainingMinutes
var remainingSeconds

let minute1 = document.getElementById("minute1");
let minute2 = document.getElementById("minute2");
let second1 = document.getElementById("second1");
let second2 = document.getElementById("second2");
let playButton = document.getElementById("play");
let timerInput = document.getElementById("timerInput");

function updateTimerDisplay() {
    // Convert the remaining time to minutes and seconds
    remainingMinutes = Math.floor(secondsRemaining / 60) + minutesRemaining;
    remainingSeconds = secondsRemaining % 60;

    // Update the minute and second elements with the correct text

    if (remainingMinutes === 0 && remainingSeconds === 0)
    {
        console.log("Time is up!");
        clearInterval(timerInterval);
        isTimerRunning = false;
        playButton.classList.remove("playing");
        playButton.parentElement.style.opacity = 0.75;
        playButton.parentElement.style.pointerEvents = "none";

        new Audio("ring.mp3").play();
        changePageColor(true);
        minute1.textContent = 0; minute2.textContent = 0; second1.textContent = 0; second2.textContent = 0;
    }
    else 
    {
        minute1.textContent = Math.floor(remainingMinutes / 10);
        minute2.textContent = remainingMinutes % 10;
        second1.textContent = Math.floor(remainingSeconds / 10);
        second2.textContent = remainingSeconds % 10;
    }
}
updateTimerDisplay();

function startTimer() {
    isTimerRunning = true;
    playButton.classList.add("playing");
    timerInput.style.opacity = 0.75;
    timerInput.style.pointerEvents = "none";
    timerInterval = setInterval(function () {
        // Decrement the seconds remaining
        secondsRemaining--;
        if (secondsRemaining < 0 && minutesRemaining <= 0) { clearInterval(timerInterval); isTimerRunning = false; }

        // If the seconds have reached zero, decrement the minutes remaining and reset the seconds
        if (secondsRemaining < 0) { minutesRemaining--; secondsRemaining = 59; }
        updateTimerDisplay();
    }, 1000);
}

// Define the function that stops the timer
function stopTimer() {
    // Clear the interval and set the timer state
    clearInterval(timerInterval);
    isTimerRunning = false;
    playButton.classList.remove("playing");

}

// Define the function that resets the timer
function resetTimer() {
    // Clear the interval and reset the timer state and values
    clearInterval(timerInterval);
    isTimerRunning = false;
    minutesRemaining = minutesSet;
    secondsRemaining = secondsSet;
    playButton.classList.remove("playing");
    playButton.parentElement.style.opacity = 1;
    playButton.parentElement.style.pointerEvents = "all";
    timerInput.style.opacity = 1;
    timerInput.style.pointerEvents = "all";

    // Update the timer display
    updateTimerDisplay();
}

function startBtn() { 
    if (remainingMinutes === 0 && remainingSeconds === 0) console.log("clicked start when remaining time is 0")
    else {
        if (!isTimerRunning) startTimer(); 
        else stopTimer();
    }
}
function stopBtn() { if (isTimerRunning) { stopTimer(); }}
function resetBtn() { resetTimer(); changePageColor(false); }

function timerInputChanged() {
    if (timerInput.value === "") { 
        minutesSet = 5; 
        secondsSet = 0; 
        minutesRemaining = minutesSet;
        secondsRemaining = secondsSet;
    }
    else {
        if (/^\d{1,2}(:\d{2}){1,2}$/.test(timerInput.value)) // matches 1 or 2 digits, followed by a colon, followed by 1 or 2 digits
        {
            minutesSet = parseInt(timerInput.value.split(":")[0]);
            secondsSet = parseInt(timerInput.value.split(":")[1]);
            minutesRemaining = minutesSet;
            secondsRemaining = secondsSet;
        }
    }
    updateTimerDisplay();
};

function changePageColor(red) {
    document.body.style.transition = "2.5s ease-in-out";
        document.getElementsByClassName("time-current")[0].style.transition = "2.5s ease-in-out";
        document.getElementsByClassName("time-current")[1].style.transition = "2.5s ease-in-out";
        document.getElementsByClassName("time-current")[2].style.transition = "2.5s ease-in-out";
        document.getElementsByClassName("time-current")[3].style.transition = "2.5s ease-in-out";
        document.getElementsByClassName("time-current")[0].style.transition = "2.5s ease-in-out";
        document.getElementsByClassName("time-current")[1].style.transition = "2.5s ease-in-out";
        document.getElementsByClassName("time-current")[2].style.transition = "2.5s ease-in-out";
        document.getElementsByClassName("time-current")[3].style.transition = "2.5s ease-in-out";
        document.getElementsByClassName("separator")[0].style.transition = "2.5s ease-in-out";

    if (red) {
        document.body.style.backgroundColor = "#3D202F";
        document.getElementsByClassName("time-current")[0].style.backgroundColor = "#1a0d14";
        document.getElementsByClassName("time-current")[1].style.backgroundColor = "#1a0d14";
        document.getElementsByClassName("time-current")[2].style.backgroundColor = "#1a0d14";
        document.getElementsByClassName("time-current")[3].style.backgroundColor = "#1a0d14";
        document.getElementsByClassName("time-current")[0].style.color = "#C45886";
        document.getElementsByClassName("time-current")[1].style.color = "#C45886";
        document.getElementsByClassName("time-current")[2].style.color = "#C45886";
        document.getElementsByClassName("time-current")[3].style.color = "#C45886";
        document.getElementsByClassName("separator")[0].style.color = "#C45886";
    }
    else {
        document.body.style.backgroundColor = "#2C3D3B";
        document.getElementsByClassName("time-current")[0].style.backgroundColor = "#131a18";
        document.getElementsByClassName("time-current")[1].style.backgroundColor = "#131a18";
        document.getElementsByClassName("time-current")[2].style.backgroundColor = "#131a18";
        document.getElementsByClassName("time-current")[3].style.backgroundColor = "#131a18";
        document.getElementsByClassName("time-current")[0].style.color = "#5FA084";
        document.getElementsByClassName("time-current")[1].style.color = "#5FA084";
        document.getElementsByClassName("time-current")[2].style.color = "#5FA084";
        document.getElementsByClassName("time-current")[3].style.color = "#5FA084";
        document.getElementsByClassName("separator")[0].style.color = "#5FA084";
    }
}