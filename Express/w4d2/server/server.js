const express = require("express");
const app = express();
const PORT = 8000;
const { faker } = require("@faker-js/faker");

const users = [
  {
    _id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  },
  {
    _id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  },
  {
    _id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD!!!</h1>");
});
app.get("/api/users", (req, res) => {
  res.json(users);
});
app.post("/api/users", (req, res) => {
  console.log("THE BODY???", req.body);
  users.push({ ...req.body, _id: faker.datatype.uuid() });
  res.json(users);
});
app.listen(PORT, () => {
  console.log(`SERVER IS UP AND RUNNING ON PORT ${PORT}`);
});
