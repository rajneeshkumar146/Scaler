/** 
 *  Must have features 
        * Pass time i hours, minutes and seconds.
        * play and pause button.
        * phase 1: Validation check and print timer on console.
        * phase 2: All button should work and UI update.
        * phase 3: Validation so that if user enters any timer greater than 60, then it should move to left bit.
        * 
 *  JavaScript:
           a. We have to listen to five event listners -> H,M,S, Start, Pause, reset, continue
           b. Validation check
           c. Update UI
           
        Edge Case:
           Reset Option.
 */

// Buttons.
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");

// Input Elements.
const hourInput = document.getElementById("hr");
const minuteInput = document.getElementById("min");
const secondInput = document.getElementById("sec");

// History
let counterId;
let saveTimeLeft = 0;


// Event Listners
startBtn.addEventListener("click", (e) => {
    // 1. take Inputs.
    let hour = parseInt(getValidInput(hourInput.value));
    let minute = parseInt(getValidInput(minuteInput.value));
    let second = parseInt(getValidInput(secondInput.value));

    if (!validateInputTime(hour, minute, second)) {
        return;
    }

    let countDownTime = hour * 3600 + minute * 60 + second;
    timer(countDownTime)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
});


pauseBtn.addEventListener("click", (e) => {
    // Pause the process.
    clearInterval(counterId);

    // No change in UI.

    pauseBtn.style.display = "none";
    continueBtn.style.display = "block";
});

continueBtn.addEventListener("click", (e) => {
    // continue the timer.
    timer(saveTimeLeft);

    // No change in UI.

    pauseBtn.style.display = "block";
    continueBtn.style.display = "none";
});

resetBtn.addEventListener("click", (e) => {
    // Change is UIL: reset UI.
    hourInput.value = "00";
    minuteInput.value = "00";
    secondInput.value = "00";

    // reser Process.
    saveTimeLeft = 0;
    clearInterval(counterId);
});



// Helper Functions.
function timer(countDownTime) {
    counterId = setInterval(() => {
        saveTimeLeft = countDownTime--;

        // console.log("Timer: " + countDownTime);

        updateUIEverySecond(countDownTime);
        if (countDownTime == 0) {
            return;
        }
    }, 1000);
}

function updateUIEverySecond(countDownTime) {
    let hour = Math.floor(countDownTime / 3600);
    let minute = Math.floor((countDownTime % 3600) / 60);
    let second = Math.floor(countDownTime % 60);

    // console.log(hour + ":" + minute + ":" + second);
    updateUI_Hour_Min_Sec(hour, minute, second);

}

function updateUI_Hour_Min_Sec(hour, minute, second) {
    hourInput.value = hour < 10 ? `0${hour}` : hour;
    minuteInput.value = minute < 10 ? `0${minute}` : minute;
    secondInput.value = second < 10 ? `0${second}` : second;
}

function getValidInput(value) {
    return !value ? 0 : value;
}

function validateInputTime(hour, minute, second) {
    if (hour < 0 || minute < 0 || second < 0) {
        alert("Negative value's are not allowed!")
        return false;
    } else if (hour > 24) {
        alert("Hour is greater than 24 which is not a valid hour!")
        return false;
    } else if (minute > 60) {
        alert("Minute can't be greater than 60, Value is not a valid!")
        return false;
    } else if (second > 60) {
        alert("Second can't be greater than 60, Value is not a valid!")
        return false;
    }
    return true;
}





