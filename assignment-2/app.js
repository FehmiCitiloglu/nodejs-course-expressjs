const express = require("express");
const app = express();
const port = 3000;

app.use("/user", (req, res, next) => {
  console.log("/user middleware");
  res.send("<p>/user middleware</p>");
});

app.use("/", (req, res) => {
  console.log("/ middleware");
  res.send("/ middleware");
});

app.listen(port);
