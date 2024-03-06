

const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");
const uid = new ShortUniqueId();


const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");

const mainContainer = document.querySelector(".main_cont");



//========================= Lock and Unlock ===========================

function addLockAndUnlock(ticketArea, lockBtn) {
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

//========================= Change color ===========================

function addtoggleColor(ticketColorEle) {
    let colors = ["pink", "blue", "purple", "green"];
    ticketColorEle.addEventListener("click", (e) => {
        const currentColor = e.target.classList[1];
        let idx = colors.indexOf(currentColor);
        let nextIdx = (idx + 1) % colors.length;

        e.target.classList.remove(currentColor);
        e.target.classList.add(colors[nextIdx]);
    });
}

//========================= Filter tickets ===========================

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

//========================= Modal and ticket creation ===========================

const modal = document.querySelector(".modal-cont");
const priorityColorSetModal = modal.querySelector(".priority-color-cont");
const priorityColorArrayOfModal = modal.querySelectorAll(".priority-color");

addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

priorityColorSetModal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        return;
    }

    resetActiveStatusOfColorModal();

    e.target.classList.add("active");
});

// get the content.
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

    createTicket(writtenContent, selectedColor);

    textArea.value = "";
    modal.style.display = "none";
    resetActiveStatusOfColorModal();
});

function createTicket(writtenContent, selectedColor, isLocked = true) {
    if (writtenContent == "") {
        return;
    }

    const id = uid();
    let lockOrUnlock = isLocked ? "fa-lock" : "fa-lock-open";

    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");
    ticketContainer.innerHTML =
        `<div class="ticket-color ${selectedColor}"></div>
    <div class="ticket-id">#${id}</div>
    <div class="ticket-area">${writtenContent}</div>
    <div class="lock-unlock"><i class="fa-solid ${lockOrUnlock}"></i></div>`;

    mainContainer.appendChild(ticketContainer);

    // attach other features like lock-unlock, toggle color etc.,

    const ticketArea = ticketContainer.querySelector(".ticket-area");
    const lockBtn = ticketContainer.querySelector(".lock-unlock");
    addLockAndUnlock(ticketArea, lockBtn);
    
    const ticketColorEle = ticketContainer.querySelector(".ticket-color");
    addtoggleColor(ticketColorEle);
}


function resetActiveStatusOfColorModal(){
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



