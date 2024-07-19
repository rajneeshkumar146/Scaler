const express = require("express");
const http = require("http");
const { Server } = require("socket.io");


const app = express();
const server = http.createServer(app);
app.use(express.static("public"));

// This io is responsible for handeling all the socket connection.
const io = new Server(server);
let room;

io.on("connection", (socket) => {
    console.log("a user connected: ", socket.id);
    // setInterval(() => {
    //     socket.emit("message", "message from server" + "-" + socket.id + "at" + new Date());
    // }, 2000)
    // socket.emit("message", "message from server");

    socket.on("message", (data) => {
        socket.broadcast.emit("brodcast", data);
    });

    socket.on("create_grp", (roomId) => {
        console.log("Group is created with roomId: ", roomId);
        socket.broadcast.emit("Group is created", roomId);
        room = roomId;
        socket.join(room);
    });

    socket.on("join_grp", () => {
        console.log(socket.id, "joined the room: ", room);
        socket.join(room);
    });

    socket.on("grp_message", (data) => {
        console.log("Group Message: ", data);
        socket.to(room).emit("serv_grp_message", data);
    });

    socket.on("leave_grp", (data) => {
        console.log(socket.id, "left the room: ", room);
        socket.leave(room);
    });

    // disconnect event is fired when a user disconnects from the server.
    socket.on("disconnect", () => {
        console.log("User disconnected: " + socket.id);
    })
})

app.get("/", (req, res) => {
    res.send("hello world");
});


server.listen(3000, () => {
    console.log("listening at 3000");
})