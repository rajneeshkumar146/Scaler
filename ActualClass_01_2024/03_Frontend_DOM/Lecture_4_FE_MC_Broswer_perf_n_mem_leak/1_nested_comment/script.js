const container = document.querySelector(".container")

container.addEventListener("click", (e) => {
    const targetElem = e.target;
    if (targetElem.classList.contains("reply")) {
        // console.log("I'm in reply");
        createReplyInput(e);
    } else {
        const isSubmit = targetElem.classList.contains("btn-submit");
        if (isSubmit) {
            createComment(e);
        }
    }
});


function createReplyInput(e) {
    const fragment = document.createDocumentFragment();
    const replyContainer = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    replyContainer.setAttribute("class", "comment_reply_container");

    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Write your comment");

    button.setAttribute("class", "btn-submit");
    button.textContent = "submit";

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);
    fragment.appendChild(replyContainer);

    e.target.parentNode.appendChild(fragment);
}

function createComment(e) {

    // <div class="comment-container">
    //             <div class="comment_card">
    //                 <h3 class="coment_text">Thanks for asking, How are you?</h3>
    //                 <div class="reply">Reply</div>
    //             </div> 

    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "comment-container");

    const input = e.target.parentNode.children[0];
    // console.log(input.value);
}