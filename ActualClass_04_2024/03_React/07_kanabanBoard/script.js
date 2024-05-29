
const toolBoxPriorityContainer = document.querySelector(".toolbox-priority-cont");

const mainContainer = document.querySelector(".main_cont");
const ticketColorElements = mainContainer.querySelectorAll(".ticket-color");

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
        const selectColor = event.target.classList[1];
        const tickets = document.querySelectorAll(".ticket-cont");

        for (let ticket of tickets) {
            const currentColor = ticket.querySelector(".ticket-color").classList[1];
            ticket.style.display = "block";
        }
    });
}

//========================= Lock and Unlock ===========================
const addLockAndUnlock = function () {

}



ticketColorElements.forEach(ticketColorElement => {
    addToggleColor(ticketColorElement);
});
filterTickets();