const express = require("express");
const app = express();
const PORT = 8000;
const { faker } = require("@faker-js/faker");

const createUsers = () => ({
  _id: faker.datatype.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phoneNumber: faker.phone.number(),
});

const createCompany = () => ({
  _id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD!!!</h1>");
});
app.get("/api/users/new", (req, res) => {
  const newUser = createUsers();
  res.json(newUser);
});
// app.post("/api/users", (req, res) => {
//   users.push({ ...req.body, _id: faker.datatype.uuid() });
//   res.json(users);
// });
app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});
// app.post("/api/companies/new", (req, res) => {
//   users.push({ ...req.body, _id: faker.datatype.uuid() });
//   res.json(companies);
// });
app.listen(PORT, () => {
  console.log(`SERVER IS UP AND RUNNING ON PORT ${PORT}`);
});
