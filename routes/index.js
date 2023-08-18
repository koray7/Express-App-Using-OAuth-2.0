var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.render("index", {
    name: "Koray Adams",
    title: "Welcome to my page!",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  });
});

module.exports = router;
