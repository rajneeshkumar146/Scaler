
const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const uid = new ShortUniqueId();

const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");

const mainContainer = document.querySelector(".main_cont");

//========================= Change color ===========================

const addToggleColor = function (ticketColorElement) {
    let colors = ["pink", "blue", "purple", "green"];
    ticketColorElement.addEventListener("click", (e) => {
        const currentColor = e.target.classList[1];
        let idx = colors.indexOf(currentColor);
        let nextIdx = (idx + 1) % colors.length;

        e.target.classList.remove(currentColor);
        e.target.classList.add(colors[nextIdx]);
    });
}

//========================= Filter tickets ===========================
const filterTickets = function () {
    toolBoxPriorityContainer.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) {
            return;
        }
        const selectColor = event.target.classList[1];
        const tickets = document.querySelectorAll(".ticket-cont");

        for (let ticket of tickets) {
            const currentColor = ticket.querySelector(".ticket-color").classList[1];
            ticket.style.display = selectColor != currentColor ? "none" : "block";
        }
    });

    toolBoxPriorityContainer.addEventListener("dblclick", (event) => {
        if (event.target === event.currentTarget) {
            return;
        }
        // const selectColor = event.target.classList[1];
        const tickets = document.querySelectorAll(".ticket-cont");

        for (let ticket of tickets) {
            // const currentColor = ticket.querySelector(".ticket-color").classList[1];
            ticket.style.display = "block";
        }
    });
}

//========================= Lock and Unlock ===========================
const addLockAndUnlock = function (ticketArea, lockBtn) {
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
    });
}

//========================= Delete feature ===========================

const deleteListner = function (ticketColorElement) {
    ticketColorElement.addEventListener("click", () => {
        if (removeBtn.style.color === "red") {
            ticketColorElement.remove();
        }
    });

}

const deleteBtnEventListener = function () {
    removeBtn.addEventListener("click", () => {
        if (removeBtn.style.color != "red") {
            removeBtn.style.color = "red";
        } else {
            removeBtn.style.color = "";
        }
    });
}

//========================= Modal and ticket creation ===========================
const modalCreation = function () {
    const modal = document.querySelector(".modal-cont");
    const priorityColorSetModal = modal.querySelector(".priority-color-cont");
    const priorityColorArrayOfModal = modal.querySelectorAll(".priority-color");

    addBtnEventListner(modal);
    deleteBtnEventListener();
    pickColorToCreateTicket(priorityColorSetModal, priorityColorArrayOfModal);
    createTicketWithContentAndActiveColor(modal, priorityColorArrayOfModal);
}

const addBtnEventListner = function (modal) {
    addBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    })
}

const pickColorToCreateTicket = function (priorityColorSetModal, priorityColorArrayOfModal) {
    priorityColorSetModal.addEventListener("click", (event) => {
        if (event.target === event.currentTarget) {
            return;
        }

        resetActiveStatusOfColorModal(priorityColorArrayOfModal);
        event.target.classList.add("active");
    })
}

const createTicketWithContentAndActiveColor = function (modal, priorityColorArrayOfModal) {
    modal.addEventListener("keypress", (event) => {
        if (event.key != "Enter") {
            return;
        }

        let textArea = modal.querySelector(".textarea-cont");
        let writtenContent = textArea.value;

        let selectedColor = getSelectedColorOfModal(priorityColorArrayOfModal);
        let uniqueId = uid();
        let isLocked = true;

        buildTicketWithAllFeature(writtenContent, selectedColor, isLocked, uniqueId);

        textArea.value = "";
        modal.style.display = "none";
        resetActiveStatusOfColorModal(priorityColorArrayOfModal);
    })
}

const buildTicketWithAllFeature = function (writtenContent, selectedColor, isLocked, currentUniqueId) {
    if (writtenContent === "") {
        return;
    }

    let lockOrUnlock = isLocked ? "fa-lock" : "fa-lock-open";
    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");
    ticketContainer.innerHTML =
        `<div class="ticket-color ${selectedColor}"></div>
    <div class="ticket id">#${currentUniqueId}</div>
    <div class="ticket-area">${writtenContent}</div>
    <div class="lock-unlock"><i class="fa-solid ${lockOrUnlock}"></i></div>`

    mainContainer.appendChild(ticketContainer);

    // attach other features like lock-unlock, toggle color, filteration etc.,
    addLockAndUnlock(ticketContainer.querySelector(".ticket-area"), ticketContainer.querySelector(".lock-unlock"));
    addToggleColor(ticketContainer.querySelector(".ticket-color"));
    deleteListner(ticketContainer);
}

const resetActiveStatusOfColorModal = function (priorityColorArrayOfModal) {
    for (priorityColor of priorityColorArrayOfModal) {
        priorityColor.classList.remove("active");
    }
}

const getSelectedColorOfModal = function (priorityColorArrayOfModal) {
    for (priorityColor of priorityColorArrayOfModal) {
        if (priorityColor.classList.contains("active")) {
            return priorityColor.classList[1];
        }
    }
}


//=========================  Calling methods ===========================

// const ticketAreaList = mainContainer.querySelectorAll(".ticket-area");
// const lockBtnList = mainContainer.querySelectorAll(".lock-unlock");
// const ticketColorEleList = mainContainer.querySelectorAll(".ticket-color");

// for (let i = 0; i < ticketAreaList.length; i++) {
//     addLockAndUnlock(ticketAreaList[i], lockBtnList[i]);

//     addtoggleColor(ticketColorEleList[i]);
// }


modalCreation();
filterTickets();



