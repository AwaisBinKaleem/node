const express = require("express");
const app = express();

const services = require("./services");

data =
  "data can be in any formate, string,integers,objects,lists,json,files,html etc";

app.get("/", (req, res) => {
  res.status(200).send("welcome to node js server.powered py express js");
});

app.get("/getData", (req, res) => {
  res.status(200).send(data);
});

app.get("/login", (req, res) => {
  const resData = services.loginToUser();
  res.status(200).send(resData);
});

app.listen(3000);
