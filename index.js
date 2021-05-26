const express = require("express");
const { json } = require("body-parser");
const userController = require("./controllers/users/user.controller");
const worldController = require("./controllers/worlds/world.controller");

const app = express();
const port = 3000;

// User
app.use("/users", userController);

// Monster

// World
app.use("/worlds", worldController);

// Battle

app.get("/", json(), (req, res) => {
  res.json({ boss: "fvhog" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
