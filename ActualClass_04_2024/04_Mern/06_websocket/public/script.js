const socket = io();
socket.on("message", (data) => {
    console.log("receiving message: ", data);
});



const btn = document.getElementById("send");
const ul = document.getElementById("list");
const input = document.getElementById("message");
const grpBtn = document.getElementById("createGrp");
const joinBtn = document.getElementById("joinGrp");
const stg = document.getElementById("stg");
const leaveRoomBtn = document.getElementById("leave");


btn.addEventListener("click", () => {
    const value = input.value;
    const div = document.createElement("div");
    div.setAttribute("class", "sender");
    const li = document.createElement("li");
    li.innerText = value;
    const para = document.createElement("p");
    para.innerText = "Sender";
    div.appendChild(li);
    div.appendChild(para);
    ul.appendChild(div);

    socket.emit("message: ", value);
    input.value = "";
});

// brodcasted Message.
socket.on("brodcast", (data) => {
    const div = document.createElement("div");
    div.setAttribute("class", "receiver");
    const li = document.createElement("li");
    li.innerText = data;

    const para = document.createElement("p");
    para.innerText = "Receiver";
    div.appendChild(li);
    div.appendChild(para);
    ul.appendChild(div);
});

grpBtn.addEventListener("click", () => {
    console.log("group created req");
    socket.emit("create_grp", Math.random(0, 1) * 1000);
});

joinGrp.addEventListener("click", () => {
    console.log("group join req");
    socket.emit("join_grp");
});

stg.addEventListener("click", () => {
    const value = input.value;
    if (value) {
        console.log("value: ", value);
        socket.emit("grp_message", value);
    }
});

socket.on("serv_grp_messsage", (data) => {
    console.log("grp message", data);
});

leaveRoomBtn.addEventListener("click", () => {
    socket.emit("leave_grp");
});





