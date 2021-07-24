const express = require("express");
const cors = require("cors");
const notes = require("./data/notes.js");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(cors());

app.get("/", (req, res) => {
  res.send("api is running..");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server listening at ${PORT}`));
