const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    const targetElem = e.target;
    // console.log(targetElem);

    if (targetElem.classList.contains("reply")) {
        // console.log("I'm in reply");

        // <div class="comment-reply-container">
        //         <input type="text" placeholder="Write Your Comment">
        //         <button class="btn-submit">submit</button>
        // </div> 

        createReplyInput(e);
    } else {
        const isSubmit = targetElem.classList.contains("btn-submit");
        if (isSubmit) {
            //    console.log("I'm in submit button where is my input?")
            createComment(e);
        }
    }
});

function createComment(e) {
    // <div class="comment-container">
    //         <div class="comment-card">
    //             <h3 class="comment_text">Good Morning Everyone, How are you?</h3>
    //             <div class="reply"> Reply </div>
    //         </div>
    // </div>

    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "comment-container");

    const input = e.target.parentNode.children[0];
    commentContainer.innerHTML = `  <div class="comment-card">
                                        <h3 class="comment_text">${input.value}</h3>
                                        <div class="reply"> Reply </div>
                                    </div>`;


    const commentReplyBox = e.target.parentNode;
    const commentCard = commentReplyBox.parentNode;
    console.log(commentCard);
    commentCard.replaceChild(commentContainer, commentReplyBox);
}

function createReplyInput(e) {
    const fragment = document.createDocumentFragment();
    const replyContainer = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");


    replyContainer.setAttribute("class", "comment-reply-container");

    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Write Your Comment");

    button.setAttribute("class", "btn-submit");
    button.textContent = "submit";

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);
    fragment.appendChild(replyContainer);

    // console.log(e.target.parentNode);
    e.target.parentNode.appendChild(fragment);
}