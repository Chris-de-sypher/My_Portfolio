/** @format */

const express = require("express");
const { resolve } = require("path");
const PORT = process.env.PORT || 4000;
const app = express();
const dotenv = require("dotenv");
const serverless = require("serverless-http");
const router = express.Router();
const hostname = '0.0.0.0';

app.use(express.static(resolve(__dirname, "./src/images")));
app.use(express.static(resolve(__dirname, "./src/style")));
app.use(express.static(resolve(__dirname, "./src/javascript")));
app.use(express.static(resolve(__dirname, "./src/userImg")));
app.use(express.static(resolve(__dirname, "./src/Html")));

router.get("/", (req, res) => {
  res.status(200).sendFile(resolve(__dirname, "./src/Html/index.html"));
});

router.get("./portfolio", (req, res) => {
  if (req.url == 'portfolio.html') {
      res.status(200).sendFile(resolve(__dirname, "./src/Html/portfolio.html"));
  }
});

router.all("*", (req, res) => {
  res.status(404).sendFile(resolve(__dirname, "./src/Html/error.html"));
});

app.use(router);

app.listen(PORT, hostname, () => {
  console.log("user hit the resource");
});



module.exports.handler = serverless(app);
