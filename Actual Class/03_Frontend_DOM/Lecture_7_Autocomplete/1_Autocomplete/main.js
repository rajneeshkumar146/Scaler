import getCountries from "./fetchData.js";

// getCountries("india").then(console.log).catch(console.log);

const inputBox = document.getElementById("search_input");
const suggetionBox = document.getElementById("suggestion_box");

// Functions------------------------------------------

const handleSearch = async (keyword) => {
    const countriesArr = await getCountries(keyword);
    const countryNameArr = countriesArr.map((country) => country.name.common);
    return countryNameArr;
}

const populateSuggestionBox = (countryNameArr) => {
    if (countryNameArr.length) {
        suggetionBox.classList.add("visible");
    } else {
        suggetionBox.classList.remove("visible");
    }

    // before showing any result reset your suggestion box;
    suggetionBox.innerHTML = "";
    const fragment = document.createDocumentFragment();

    countryNameArr.forEach((countryName) => {
        const li = document.createElement("li");
        li.innerText = countryName;
        fragment.appendChild(li);
    });

    suggetionBox.appendChild(fragment);
}

const handleSuggestions = async (e) => {
    // console.log(e.target.value); // we are able to get input.
    const keyword = e.target.value;
    const countryNameArr = await handleSearch(keyword);
    populateSuggestionBox(countryNameArr);
}

function debounce(fn, delay = 500) {
    let timeoutId = null;
    return function (...args) {
        if (timeoutId) {
            // rseting the timer.
            console.log("I'm resetting you now wait again for the start.");
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn(...args);
            timeoutId = null;   // If work is done clear you past ids.
        }, delay);
    }
}

inputBox.addEventListener("input", debounce(handleSuggestions));