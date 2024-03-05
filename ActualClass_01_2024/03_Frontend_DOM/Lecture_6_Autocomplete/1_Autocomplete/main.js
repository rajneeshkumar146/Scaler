import getCountries from "./fetchApi.js";

// getCountries("ind").then(console.log).catch(console.log);

const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

// Functions ------------------------------------
const handleSearch = async (keyword) => {
    const countriesArr = await getCountries(keyword);
    const countryNameArr = countriesArr.map((country) => country.name.common);
    console.log(countryNameArr);
    return countryNameArr;
}

const populateSuggestionBox = (countryNameArr) => {
    if (countryNameArr.length) {
        suggestionBox.classList.add("visible");
    } else {
        suggestionBox.classList.remove("visible");
    }

    // Before showing any result reset ypu suggestion.
    suggestionBox.innerHTML = "";
    const fragment = document.createDocumentFragment();

    countryNameArr.forEach((countryName) => {
        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    });

    suggestionBox.appendChild(fragment);
}

const handleSuggestions = async (e) => {
    const keyword = e.target.value;
    const countryNameArr = await handleSearch(keyword);
    populateSuggestionBox(countryNameArr);
}

function debounce(cb, delay = 500) {
    let timeoutId = null;
    return function (...args) {
        if (timeoutId) {
            // reseting the timer.
            console.log("I'm resetting you now wait again for the start.");
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            cb(...args);
            timeoutId = null;  // If work is done clear you past ids.
        }, delay);
    }
}

inputBox.addEventListener("input", debounce(handleSuggestions));




