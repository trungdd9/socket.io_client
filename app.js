const
    io = require("socket.io-client"),
    ioClient = io.connect("http://localhost:8080");

ioClient.on("seq-num", (msg) => console.info(msg));