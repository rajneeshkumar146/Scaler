/** 
 * Javascript.
             a. We have to listen to three events.
                 i. Click ->  give the rating.
                              update star upto that level.
                              update rating count.

                 ii. mouseover -> We have to change the star upto that level to yellow without chaging the rating count.

                 Edge case:
                 iii. mouseleave -> move it gray stars.
 * 
 */


const starContainer = document.querySelector(".star_container");
const countSpan = document.querySelector("#count");
const starArray = document.querySelectorAll(".star");
let clickedIndex = 0;

// Event Listeners for click on star.
starContainer.addEventListener("click", (e) => {
    if (e.target.hasAttribute("idx")) {
        clickedIndex = e.target.getAttribute("idx");
        fillStar(clickedIndex);
    }
});

// Event Listeners for mouse hover.
starContainer.addEventListener("mouseover", (e) => {
    if(e.target.hasAttribute("idx")){
        currentHoverIndex = e.target.getAttribute("idx");
        fillColor(currentHoverIndex);
    }
})

// Event Listeners for mouse leave.
starContainer.addEventListener("mouseleave", (e) => {
    fillColor(clickedIndex);
})

// Helper Mthods.
function fillStar(clickedIndex) {
    // Update on count.
    countSpan.textContent = clickedIndex;

    // Update colors.
    fillColor(clickedIndex);
}

function fillColor(clickedIndex) {
    // reset all stars to default color.
    for (star of starArray) {
        star.classList.remove("yellow");
    }

    for (let currentStar = 0; currentStar < clickedIndex; currentStar++) {
        starArray[currentStar].classList.add("yellow");
    }
}

