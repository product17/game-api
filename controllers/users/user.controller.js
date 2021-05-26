const express = require("express");
const { json } = require("body-parser");

const router = express.Router();
const users = []; //it will get set after

router.get("/", json(), (req, res) => {
  res.json({ users: users });
});

router.post("/", json(), (req, res) => {
  users.push(req.body); // body arguments
  res.json({ user: req.body });
});

module.exports = router;

// REST: Post to users object creates new user
// Router is like a map
// Tolook: Singleton, instantiate the first time, then after it will alawys be same instance. Caching design pattern.
// In node, files are singletons. Global scope are singleton
