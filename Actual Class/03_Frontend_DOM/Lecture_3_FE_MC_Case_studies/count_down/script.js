// Buttons.
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");


// Input elements.
const hourInput = document.getElementById("hr");
const minuteInput = document.getElementById("min");
const secondInput = document.getElementById("sec");

// History.
let counterId;
let saveTimeLeft;

// Event Listners.

startBtn.addEventListener("click", (e) => {
    // 1. Take inputes.
    let hour = parseInt(getValidInput(hourInput.value));
    let minute = parseInt(getValidInput(minuteInput.value));
    let second = parseInt(getValidInput(secondInput.value));

    if (!validateInputTime(hour, minute, second)) {
        return;
    }

    // b. transform our input -> object 
    const {
        transformedHrs,
        transformedMins,
        transformedSecs
    } = tranformInputs(hour, minute, second);

    updateUI_Hour_Min_Sec(transformedHrs, transformedMins, transformedSecs);

    let countDownTime = hour * 3600 + minute * 60 + second;
    timer(countDownTime);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", (e) => {
    // Pause the process.
    clearInterval(counterId);

    // No change on the UI.

    // Visibility of buttons.
    pauseBtn.style.display = "none";
    continueBtn.style.display = "block";
});

continueBtn.addEventListener("click", (e) => {
    // Continue the timer.
    timer(saveTimeLeft);

    // No change in UI.
});

resetBtn.addEventListener("click", (e) => {
    // Change in UI: reset UI.
    hourInput.value = "";
    minuteInput.value = "";
    secondInput.value = "";

    // reset Process.
    saveTimeLeft = 0;
    clearInterval(counterId);
});

// helper functions.

function timer(countDownTime) {
    counterId = setInterval(() => {
        countDownTime--;
        saveTimeLeft = countDownTime;


        // console.log("timer: " + countDownTime);

        // Upadte UI.
        updateUIEverySecond(countDownTime);

        if (countDownTime === 0) {
            return;
        }
    }, 1000);
}

function updateUIEverySecond(countDownTime) {

    let hour = Math.floor(countDownTime / 3600);
    let minute = Math.floor((countDownTime % 3600) / 60);
    let second = Math.floor(countDownTime % 60);

    // console.log(hour, minute, second);
    updateUI_Hour_Min_Sec(hour, minute, second);
}

function tranformInputs(hour, minute, second) {

}

function updateUI_Hour_Min_Sec(hour, minute, second) {
    hourInput.value = hour < 10 ? `0${hour}` : hour;
    minuteInput.value = minute < 10 ? `0${minute}` : minute;
    secondInput.value = second < 10 ? `0${second}` : second;
}


function getValidInput(val) {
    return !val ? 0 : val;
}

function validateInputTime(hour, minute, second) {
    if (hour < 0 || minute < 0 || second < 0) {
        alert("negative value's is not valid");
        return false;
    } else if (hour > 24) {
        alert("hour is greater than 24 which is not a valid hour!");
        return false;
    } else if (minute > 60 || second > 60) {
        alert("Minute/Seconds can't be greater than 60, Value is not a valid!");
        return false;
    }

    return true;
}

