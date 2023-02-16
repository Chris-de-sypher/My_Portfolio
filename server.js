/** @format */

const express = require("express");
const { resolve } = require("path");

const app = express();

app.use(express.static("./style"));
app.use(express.static("./images"));
app.use(express.static("./javascript"));
app.use(express.static("./userImg"));
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(resolve(__dirname, "./index.html"));
});

app.all('*', (req, res) => {
    res.status(404).sendFile(resolve(__dirname, './error.html'))
})


app.listen(4000, () => {
  console.log("user hit the resource");
});
