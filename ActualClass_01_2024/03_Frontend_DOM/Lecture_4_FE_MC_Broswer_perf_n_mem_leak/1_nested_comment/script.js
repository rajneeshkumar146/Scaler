const container = document.querySelector(".container")

container.addEventListener("click", (e) => {
    const targetElem = e.target;
    if (targetElem.classList.contains("reply")) {
        console.log("I'm in reply");

        // <div class="comment_reply_container">
        //      <input type="text" placeholder="Write your comment">
        //      <button class="btn-submit">submit</button>
        // </div> 

        createReplyInput(e);
    }
});


function createReplyInput(e){
    const fragment = document.createDocumentFragment();
    const replyContainer = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");


    replyContainer.appendChild(input);
    replyContainer.appendChild(button);
    fragment.appendChild(replyContainer);

    e.target.parentNode.appendChild(fragment);
}