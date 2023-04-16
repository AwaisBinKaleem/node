require("dotenv").config()
const express = require("express");
const chance = require("chance")();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const  {routes} = require("./src/routes")
// console.log(routes)

const services = require("./src/Services/services");
const {getMockData} = require("./src/helpers/mock_data")

app.use(express.static('public'))

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ type: "application/*+json" }));

// data =
//   "data can be in any formate, string,integers,objects,lists,json,files,html etc";


app.get(routes.ROOT, (req, res) => {
  res.status(200).send("welcome to node js server.powered py express js");
});

app.get("/getData", async (req, res) => {
  await res.status(200).send(getMockData());
});

app.post("/getData/:id", async (req, res) => {
  console.log(req.query);
  let id = parseInt(req.params.id);
  let user = {};
  user = response.find((item) => {
    return item.id === id;
  });
  await res.status(200).send(user);
});

app.post(routes.LOGIN, (req, res) => {
  const body = req.body;
  const resData = services.loginToUser(body);
  res.status(200).send(resData);
});

app.post("/signup", (req, res) => {
  const body = req.body;
  const resData = services.signup(body);
  res.status(200).send();
});

app.listen(3000);
