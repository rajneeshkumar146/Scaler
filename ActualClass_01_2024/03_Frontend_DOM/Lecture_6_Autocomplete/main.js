import getCountries from "./fetchApi.js";

// getCountries("ind").then(console.log).catch(console.log);

const inputBox = document.getElementById("search_input");
const suggestionBox = document.getElementById("suggestion_box");

// Functions ------------------------------------
const handleSearch = async (keyword) => {
    const countriesArr = await getCountries(keyword);
    const countryNameArr = countriesArr.map((country) => country.name.common);
    return countryNameArr;
}

const populateSuggestionBox = (countryNameArr) => {

}

const handleSuggestions = async (e) => {
    const keyword = e.target.value;
    const countryNameArr = await handleSearch(keyword);
    populateSuggestionBox(countryNameArr);
}

inputBox.addEventListener("input", handleSuggestions);




