/**
 * 
 * Approach:
      1. HTML/CSS
        Prepare with basic/static HTML/CSS.
     
      2. JavaScript.
        a. We have to listen to three events.
            i. click -> give the rating.
                       Update star upto that level.
                       Update rating count.
            ii. mouseover -> we have to change the star upto that level to yellow.

    Edge case: 
            mouseleave -> Move it gray stars.
 */

const startContainer = document.querySelector(".star_container");
const countSpan = document.querySelector("#count");
const starArray = document.querySelectorAll(".star")
let pidx = 0;


// Event Listeners.
startContainer.addEventListener("click", (e) => {
    if (e.target.hasAttribute("idx")) {
        pidx = e.target.getAttribute("idx");
        fillStar(pidx);
    }
});

startContainer.addEventListener("mouseover", (e) => {

    if (e.target.hasAttribute("class")) {
        cidx = e.target.getAttribute("idx");
        fillColors(cidx);
    }
});

startContainer.addEventListener("mouseleave", (e) => {
    fillColors(pidx);
});

// Helper Methods.
function fillStar(idx) {
    // update on count.
    countSpan.textContent = idx;

    // update colors.
    fillColors(idx);
}

function fillColors(idx) {
    // reset all star to deafult color.
    for (star of starArray) {
        star.classList.remove("yellow");
    }

    // fill with yellow
    for (let i = 0; i < idx; i++) {
        starArray[i].classList.add("yellow")
    }
}


