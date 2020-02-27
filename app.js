const
    io = require("socket.io-client"),
    ioClient = io.connect("http://172.30.170.31:8080");

ioClient.on("seq-num", (msg) => console.info(msg));
