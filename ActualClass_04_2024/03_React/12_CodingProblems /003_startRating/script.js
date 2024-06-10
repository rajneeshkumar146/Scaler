/**
 * a. We have to listen to three events
 *    1. Click:
 *       a. give the rating.
 *       b. Update star upto that level.
 *       c. Update Rating count.
 * 
 *    2. MouseOver:
 *       we haveto chnage the start upto that level to yellow without chnaging the rating count.
 *    3. MouseLeave[Edge Case]
 */



const starContainer = document.querySelector(".star_container");
const countSpan = document.querySelector("#count");
const starArray = document.querySelectorAll(".star");

// Evenrt Listners for the click on star.
starContainer.addEventListener("click", (event) => {
    if (event.target.hasAttribute("idx")) {
        clickIndex = event.target.getAttribute("idx");
        fillstar(clickIndex);
    }
});

// event Listner for mouse hover.
starContainer.addEventListener("mouseover", (event) => {

});

// event Listner for mouse leave.
starContainer.addEventListener("mousleave", (event) => {

});



// Helper Methods
function fillstar(clickedIndex) {
    // update count.
    countSpan.textContent = clickedIndex;


    // update colors
    fillColor(clickedIndex);
}

function fillColor(clickedIndex) {
    // reset all star to default.
    for (star of starArray) {
        star.classList.remove("yellow");
    }

    for (let currentStar = 0; currentStar < clickedIndex; currentStar++) {
        starArray[currentStar].classList.add("yellow");
    }
}