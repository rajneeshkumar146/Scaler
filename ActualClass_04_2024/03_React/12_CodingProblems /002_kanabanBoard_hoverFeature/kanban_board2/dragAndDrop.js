const container = document.querySelectorAll(".container");
let draggedBox = null;

container.forEach((container) => {

    // info whenver drag behaviour starts 
    container.addEventListener("dragstart", (event) => {
        console.log("Drag is started on: ", container);
        draggedBox = event.target;
    });

    // when you are dragging over a drop point , only triggered when you are in draggable area  
    container.addEventListener("dragover", (event) => {
        // console.log("Dragging is going on: ", event);
        event.preventDefault();
    });

    // when you either leave the draggable container / press esc
    container.addEventListener("dragend", (event) => {
        console.log("Dragging is finished", container);
    });


    // drop represent -> when you drop a draggable element in a drop zone
    container.addEventListener("drop", (event) => {
        console.log("Drag is completed on: ", container);
        if (draggedBox) {
            container.appendChild(draggedBox);

            // identify your parent.
            const isPending = container.classList[0] === "pending-cont" ? true : false;

            // dragged box
            const currentId = draggedBox.querySelector(".ticket-id").innerText.split("#")[1];

            let ticketObj = allTickets.find((ticketObject) => {
                return ticketObject.id === currentId;
            });

            ticketObj.isPending = isPending;
            updateLocalStorage();
            draggedBox = null;
        }

    });
})