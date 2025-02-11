const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

let activeUsers = new Set(); // Multiple users handle karne ke liye

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("join", (data) => {
        activeUsers.add(data.user);
        socket.username = data.user;
        io.emit("message", { user: "System", text: `${data.user} joined the chat.` });
        io.emit("update-users", Array.from(activeUsers)); // Sab users ko updated list bhejo
    });

    socket.on("user-message", (data) => {
        io.emit("message", data);
    });

    socket.on("leave", (data) => {
        activeUsers.delete(data.user);
        io.emit("message", { user: "System", text: `${data.user} left the chat.` });
        io.emit("update-users", Array.from(activeUsers));
    });

    socket.on("disconnect", () => {
        if (socket.username) {
            activeUsers.delete(socket.username);
            io.emit("message", { user: "System", text: `${socket.username} disconnected.` });
            io.emit("update-users", Array.from(activeUsers));
        }
    });
});

server.listen(9000, () => {
    console.log("Server is running on port 9000");
});