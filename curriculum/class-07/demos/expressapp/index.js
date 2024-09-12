const express = require("express");

const app = express();

const PORT = 3000;

const users = [
  { name: "Bruno" },
  { name: "Angel" },
  //   { name: "Georgina" },
  { name: "Jesica" },
];

const courses = [101, 102, 201, 301, 401];

app.get("/", (request, response) => {
  response.json({ message: "Bienvenido" });
});
app.get("/users", (request, response) => {
  response.json({ users: users });
});
app.get("/courses", (request, response) => {
  response.json({ courses: courses });
});
app.post("/user", (request, response) => {
  console.log(request);
  response.json({ message: "agregado" });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
