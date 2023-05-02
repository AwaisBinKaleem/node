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

app.get("/", async(req, res) => {
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

app.post("/login",async (req, res) => {
  const body = req.body;
  const resData = await services.loginToUser(body);
  if(resData.length>0){
    res.status(200).send(resData[0]);
  }else{
    res.status(404).send(resData)
  }
});

app.post("/signup", (req, res) => {
  const body = req.body;
  const resData = services.signup(body);
  res.status(200).send();
});

app.delete("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const resData = await services.deleteUser(id);
  res.status(200).send();
});

// app.post("/populateDatabase", async (req, res) => {
  //   await services.populate_database()
  //   res.status(200).send();
  // });
  
  app.post("/users", async (req, res) => {
    const body = req.body;
    console.log(body)
    const resData = await services.getAllUsers(body.pageNo);
    res.status(200).send(resData);
  });


app.listen(3001);
