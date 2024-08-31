require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("API Running...")
});

const main = require("./db");
const port = process.env.PORT;
app.listen(port, () => {
  main(); //Database connection
  console.log(`Server is Running at https://localhost:${port}`);
});