const express = require("express");
const { json } = require("body-parser");
const { route } = require("../users/user.controller");

const router = express.Router();
let worlds = []; //it will get set after

router.get("/", json(), (req, res) => {
  res.json({ worlds: worlds });
});

router.post("/", json(), (req, res) => {
  worlds.push(req.body); // body arguments
  res.json({ worlds: req.body });
});

router.put("/", json(), (req, res) => {
  const currIndex = worlds.findIndex((world) => {
    return req.body.id === world.id;
  });

  worlds[currIndex] = req.body;
  res.json({ worlds: worlds });
});

router.delete("/:id", json(), (req, res) => {
  worlds = worlds.filter((world) => {
    return req.params.id !== world.id;
  });
  res.json({ worlds: worlds });
});

module.exports = router;
