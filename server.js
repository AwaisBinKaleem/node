const express = require("express");
const chance = require("chance")();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const services = require("./services");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ type: "application/*+json" }));

// data =
//   "data can be in any formate, string,integers,objects,lists,json,files,html etc";

let response = [];
let id = 0;
const getMockData = () => {
  for (let i = 1; i <= 10; i++) {
    id++;
    response.push({
      id: id,
      name: chance.name(),
      email: chance.email(),
      address: {
        city: chance.city(),
        country: chance.country(),
      },
      contact: {
        phone: chance.phone(),
      },
    });
  }
  return response;
};

app.get("/", (req, res) => {
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

app.post("/login", (req, res) => {
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
