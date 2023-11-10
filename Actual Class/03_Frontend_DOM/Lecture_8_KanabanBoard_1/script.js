

const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const uid = new ShortUniqueId();

const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".remove-btn");

const mainContainer = document.querySelector(".main_cont");

// ======================= Local Storage =======================
let allTickets = localStorage.getItem("localTicket") || [];
let isFromLocalStorage = false;

if (typeof allTickets === "string") {
    allTickets = JSON.parse(allTickets);
    console.log(allTickets);
    populateUI();
}

function populateUI() {
    isFromLocalStorage = true;
    for (ticket of allTickets) {
        createTicket(ticket.content, ticket.color, ticket.id, ticket.isLocked);
    }
    isFromLocalStorage = false;

}

function updateLocalStorage() {
    localStorage.setItem("localTicket", JSON.stringify(allTickets));
}

/************Add lock and Unlock****************************************/
function AddLockAndUnlock(ticketArea, lockBtn, id) {
    lockBtn.addEventListener("click", () => {
        let isLocked = lockBtn.children[0].classList.contains("fa-lock");
        if (isLocked === true) {
            ticketArea.setAttribute("contenteditable", true);
            lockBtn.children[0].classList.remove("fa-lock")
            lockBtn.children[0].classList.add("fa-lock-open")

        } else {
            ticketArea.setAttribute("contenteditable", false);
            lockBtn.children[0].classList.remove("fa-lock-open");
            lockBtn.children[0].classList.add("fa-lock");
        }

        // Update your local storage about the current status.
        let ticketObj = allTickets.find((ticketObject) => {
            return ticketObject.id === id;
        });

        ticketObj.content = ticketArea.textContent;
        ticketObj.isLocked = lockBtn.children[0].classList.contains("fa-lock");
        updateLocalStorage();
    });
}


/************change color ****************************************/
function addColorChangeListner(ticketColorEle, id) {
    let colors = ["pink", "blue", "purple", "green"];
    ticketColorEle.addEventListener("click", (e) => {
        const currentColor = e.target.classList[1];
        let idx = colors.indexOf(currentColor);
        let nextIdx = (idx + 1) % colors.length;

        e.target.classList.remove(currentColor);
        e.target.classList.add(colors[nextIdx]);

        // Update your local storage about the current status.
        let ticketObj = allTickets.find((ticketObject) => {
            return ticketObject.id === id;
        });

        ticketObj.color = colors[nextIdx];
        updateLocalStorage();
    });
}

/************filter ticket****************************************/

toolBoxPriorityContainer.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        return;
    }

    const selectedColor = e.target.classList[1];
    const ticketArray = document.querySelectorAll(".ticket-cont");
    for (ticket of ticketArray) {
        const currentColor = ticket.querySelector(".ticket-color").classList[1];
        if (selectedColor !== currentColor) {
            ticket.style.display = "none";
        } else {
            ticket.style.display = "block";
        }
    }
});

toolBoxPriorityContainer.addEventListener("dblclick", (e) => {
    if (e.target === e.currentTarget) {
        return;
    }

    const ticketArray = document.querySelectorAll(".ticket-cont");
    for (ticket of ticketArray) {
        ticket.style.display = "block";
    }
});

/******************** modal and ticket creation********************************/

const modal = document.querySelector(".modal-cont");
const priorityColorSetModal = modal.querySelector(".priority-color-cont");
const priorityColorArrayOfModal = modal.querySelectorAll(".priority-color");

// plus
addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

deleteBtn.addEventListener("click", () => {
    if (deleteBtn.style.color !== "red") {
        deleteBtn.style.color = "red";
    } else {
        deleteBtn.style.color = "";
    }
});

// Select Color of ticket.
priorityColorSetModal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        return;
    }

    let selectedColor = e.target.classList[1];

    // reset the priorityColor 'active' status.
    for (priorityColor of priorityColorArrayOfModal) {
        priorityColor.classList.remove("active");
    }

    e.target.classList.add("active");
});

// get the content.
modal.addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
        return;
    }

    let textArea = modal.querySelector(".textarea-cont")
    let writtenContent = textArea.value;

    // Get the selected Color at the time of creation of modal.
    let selectedColor = "green";
    for (priorityColor of priorityColorArrayOfModal) {
        if (priorityColor.classList.contains("active")) {
            selectedColor = priorityColor.classList[1];
        }
    }

    createTicket(writtenContent, selectedColor);

    textArea.value = "";
    modal.style.display = "none";

});


// Create Ticket to diplay it.
function createTicket(writtenContent, selectedColor, currentId, isLocked = true) {
    if (writtenContent === "") {
        return;
    }

    const id = currentId || uid();
    let lockOrUnlock = isLocked === true ? "fa-lock" : "fa-lock-open";

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");
    ticketContainer.innerHTML = `<div class="ticket-cont">
    <div class="ticket-color ${selectedColor}"></div>
    <div class="ticket-id">#${id}</div>
    <div class="ticket-area">${writtenContent}</div>
    <div class="lock-unlock">
        <i class="fa-solid ${lockOrUnlock}"></i>
    </div>
</div>`;

    mainContainer.appendChild(ticketContainer);

    // ===================================================

    const ticketArea = ticketContainer.querySelector(".ticket-area");
    const lockBtn = ticketContainer.querySelector(".lock-unlock");
    AddLockAndUnlock(ticketArea, lockBtn, id);

    const ticketColorEle = ticketContainer.querySelector(".ticket-color");
    addColorChangeListner(ticketColorEle, id);
    deleteListner(ticketContainer, id);

    /******** save it to localStorage ********/
    if (isFromLocalStorage) {
        return;
    }

    let ticketObj = {
        id: id,
        content: writtenContent,
        color: selectedColor,
        isLocked: true
    }

    allTickets.push(ticketObj);
    updateLocalStorage();
}

function deleteListner(ticketContainer, id) {
    ticketContainer.addEventListener("click", () => {
        if (deleteBtn.style.color === "red") {
            ticketContainer.remove();

            let restOfTicket = allTicket.filter((ticketObject) => {
                return ticketObject.id != currentId;
            });

            allTickets = restOfTicket;
            updateLocalStorage();
        }
    });
}




