

const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const uid = new ShortUniqueId();


const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");

const mainContainer = document.querySelector(".main_cont");

// ========================= Local Storgae ===========================

let allTickets = localStorage.getItem("localTickets") || [];
let isFromLocalStorage = false;

if (typeof allTickets === "string") {
    allTickets = JSON.parse(allTickets);
    populateUI();
}

function populateUI() {
    isFromLocalStorage = true;
    for (let i = 0; i < allTickets.length; i++) {
        let ticket = allTickets[i];
        buildTicketWithAllFeatures(ticket.content, ticket.color, ticket.isLocked, ticket.id, ticket.isPending);
    }
    isFromLocalStorage = false;
}

function updateLocalStorage() {
    console.log(allTickets);
    localStorage.setItem("localTickets", JSON.stringify(allTickets));
}



//========================= Lock and Unlock ===========================

function addLockAndUnlock(ticketArea, lockBtn, currentId) {
    lockBtn.addEventListener("click", () => {
        let isLocked = lockBtn.children[0].classList.contains("fa-lock");
        if (isLocked) {
            lockBtn.children[0].classList.remove("fa-lock");
            lockBtn.children[0].classList.add("fa-lock-open");
            ticketArea.setAttribute("contenteditable", true);
        } else {
            lockBtn.children[0].classList.remove("fa-lock-open");
            lockBtn.children[0].classList.add("fa-lock");
            ticketArea.setAttribute("contenteditable", false);
        }

        // Update your local storage about the current status.
        let ticketObj = allTickets.find((ticketObject) => {
            return ticketObject.id === currentId;
        });


        ticketObj.content = ticketArea.textContent;
        ticketObj.isLocked = lockBtn.children[0].classList.contains("fa-lock");
        updateLocalStorage();
    });
}

//========================= Change color ===========================

function addtoggleColor(ticketColorEle, currentId) {
    let colors = ["pink", "blue", "purple", "green"];
    ticketColorEle.addEventListener("click", (e) => {
        const currentColor = e.target.classList[1];
        let idx = colors.indexOf(currentColor);
        let nextIdx = (idx + 1) % colors.length;

        e.target.classList.remove(currentColor);
        e.target.classList.add(colors[nextIdx]);

        // Update your local storage about the current status.
        let ticketObj = allTickets.find((ticketObject) => {
            return ticketObject.id === currentId;
        });

        ticketObj.color = colors[nextIdx];
        updateLocalStorage();
    });
}

//========================= Filter tickets ===========================

function filterTickets() {
    toolBoxPriorityContainer.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
            return;
        }
        const selectColor = e.target.classList[1];
        const ticketArray = document.querySelectorAll(".ticket-cont");

        for (ticket of ticketArray) {
            const currentColor = ticket.querySelector(".ticket-color").classList[1];
            if (selectColor !== currentColor) {
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
        const selectColor = e.target.classList[1];
        const ticketArray = document.querySelectorAll(".ticket-cont");

        for (ticket of ticketArray) {
            ticket.style.display = "block";
        }
    });
};

//========================= Delete feature ===========================

function deleteListner(ticketContainer, id) {
    ticketContainer.addEventListener("click", () => {
        if (removeBtn.style.color === "red") {
            ticketContainer.remove();

            // Update your local storage about the current status.
            let newAllTickets = allTickets.filter((ticketObject) => {
                return ticketObject.id !== id;
            });

            allTickets = newAllTickets;
            updateLocalStorage();
        }
    });
}

function deleteBtnEventListener() {
    removeBtn.addEventListener("click", () => {
        if (removeBtn.style.color !== "red") {
            removeBtn.style.color = "red";
        } else {
            removeBtn.style.color = "";
        }
    });
}


//========================= Modal and ticket creation ===========================

function modalCreation() {
    const modal = document.querySelector(".modal-cont");
    const priorityColorSetModal = modal.querySelector(".priority-color-cont");
    const priorityColorArrayOfModal = modal.querySelectorAll(".priority-color");

    addBtnEventListener(modal);
    deleteBtnEventListener();
    activeColorToCreateTicket(priorityColorSetModal, priorityColorArrayOfModal);
    createTicketWithContentAndActiveColor(modal, priorityColorArrayOfModal);
}

function addBtnEventListener(modal) {
    addBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
}

function activeColorToCreateTicket(priorityColorSetModal, priorityColorArrayOfModal) {
    priorityColorSetModal.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
            return;
        }

        resetActiveStatusOfColorModal(priorityColorArrayOfModal);

        e.target.classList.add("active");
    });
}

function createTicketWithContentAndActiveColor(modal, priorityColorArrayOfModal) {
    modal.addEventListener("keypress", (e) => {
        if (e.key !== "Enter") {
            return;
        }

        let textArea = modal.querySelector(".textarea-cont");
        let writtenContent = textArea.value;

        // get the selected Color at the time of creation of modal.

        let selectedColor = "green";
        for (priorityColor of priorityColorArrayOfModal) {
            if (priorityColor.classList.contains("active")) {
                selectedColor = priorityColor.classList[1];
            }
        }

        const id = uid();
        buildTicketWithAllFeatures(writtenContent, selectedColor, true, id, true);

        textArea.value = "";
        modal.style.display = "none";
        resetActiveStatusOfColorModal(priorityColorArrayOfModal);
    });
}

function buildTicketWithAllFeatures(writtenContent, selectedColor, isLocked, currentId, isPending) {
    if (writtenContent == "") {
        return;
    }

    let lockOrUnlock = isLocked ? "fa-lock" : "fa-lock-open";

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");
    ticketContainer.setAttribute("draggable", "true");
    ticketContainer.innerHTML =
        `<div class="ticket-color ${selectedColor}"></div>
    <div class="ticket-id">#${currentId}</div>
    <div class="ticket-area">${writtenContent}</div>
    <div class="lock-unlock"><i class="fa-solid ${lockOrUnlock}"></i></div>`;

    // mainContainer.appendChild(ticketContainer);

    const pendingContainer = document.querySelector(".pending-cont");
    const finishedContainer = document.querySelector(".finished-cont");
    if (isPending) {
        pendingContainer.appendChild(ticketContainer)
    } else {
        finishedContainer.appendChild(ticketContainer);
    }

    // attach other features like lock-unlock, toggle color etc.,

    const ticketArea = ticketContainer.querySelector(".ticket-area");
    const lockBtn = ticketContainer.querySelector(".lock-unlock");
    addLockAndUnlock(ticketArea, lockBtn, currentId);

    const ticketColorEle = ticketContainer.querySelector(".ticket-color");
    addtoggleColor(ticketColorEle, currentId);
    deleteListner(ticketContainer, currentId);

    if (!isFromLocalStorage) {
        createTicketObjAndUpdateLocalStorage(currentId, writtenContent, selectedColor, isLocked, isPending);
    }
}

function createTicketObjAndUpdateLocalStorage(currentId, writtenContent, selectedColor, isLocked, isPending) {
    let ticketObj = {
        id: currentId,
        content: writtenContent,
        color: selectedColor,
        isLocked: isLocked,
        isPending: isPending
    }

    allTickets.push(ticketObj);
    updateLocalStorage();
}


function resetActiveStatusOfColorModal(priorityColorArrayOfModal) {
    for (priorityColor of priorityColorArrayOfModal) {
        priorityColor.classList.remove("active");
    }
}


//=========================  Calling methods ===========================

const ticketAreaList = mainContainer.querySelectorAll(".ticket-area");
const lockBtnList = mainContainer.querySelectorAll(".lock-unlock");
const ticketColorEleList = mainContainer.querySelectorAll(".ticket-color");

for (let i = 0; i < ticketAreaList.length; i++) {
    addLockAndUnlock(ticketAreaList[i], lockBtnList[i]);

    addtoggleColor(ticketColorEleList[i]);
}


modalCreation();
filterTickets();




