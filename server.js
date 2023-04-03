const express = require("express");
const chance = require("chance")();
const cors = require("cors");
const app = express();

const services = require("./services");

app.use(cors());
app.use(express.json());

// data =
//   "data can be in any formate, string,integers,objects,lists,json,files,html etc";

let response = [];
let id = 0;

app.get("/", (req, res) => {
  res.status(200).send("welcome to node js server.powered py express js");
});

app.get("/getData", async (req, res) => {
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
  await res.status(200).send(response);
});

app.get("/login", (req, res) => {
  const resData = services.signup();
  res.status(200).send(resData);
});

app.listen(3000);
