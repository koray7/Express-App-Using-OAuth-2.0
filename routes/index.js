var express = require("express");
var router = express.Router();
const { requiresAuth } = require("express-openid-connect");
const axios = require("axios");

router.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.render("index", {
    name: "Koray Adams",
    title: "Welcome to my page!",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  });
});

router.get("/secured", requiresAuth(), async (req, res) => {
  let data = {};

  try {
    const apiResponse = await axios.get("http://localhost:8000/public");
    data = apiResponse.data;
  } catch (err) {}

  console.log(req.oidc.isAuthenticated());
  res.render("Secured", {
    name: "Secured Page",
    title: "Welcome to my page!",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
    data,
  });
});

module.exports = router;
