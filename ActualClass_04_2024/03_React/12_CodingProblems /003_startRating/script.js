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
let clickedIndex = 0;

// Evenrt Listners for the click on star.
starContainer.addEventListener("click", (event) => {
    if (event.target.hasAttribute("idx")) {
        clickedIndex = event.target.getAttribute("idx");
        fillstar(clickedIndex);
    }
});

// event Listner for mouse hover.
starContainer.addEventListener("mouseover", (event) => {
    if (event.target.hasAttribute("idx")) {
        currentHoverIndex = event.target.getAttribute("idx");
        // console.log("Rajneesh: ", currentHoverIndex);
        fillColor(currentHoverIndex);
    }

});

// event Listner for mouse leave.
starContainer.addEventListener("mouseleave", (event) => {
    fillColor(clickedIndex);
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