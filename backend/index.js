const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());
app.use(bodyParser.json());

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});

app.post("/api/login", (req, res) => {
  const { username } = req.body;
  const sessionId = `${username}-${Date.now()}`;
  res.json({ sessionId });
});

app.get("/api/comments", (req, res) => {
  db.query("SELECT * FROM comments", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/api/comments", (req, res) => {
  const { username, comment } = req.body;
  db.query(
    "INSERT INTO comments (username, comment) VALUES (?, ?)",
    [username, comment],
    (err, results) => {
      if (err) throw err;
      io.emit("newComment", {
        id: results.insertId,
        username,
        comment,
        timestamp: new Date(),
      });
      res.sendStatus(201);
    }
  );
});
