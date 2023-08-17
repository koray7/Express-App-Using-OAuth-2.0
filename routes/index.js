var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.render("index", { title: "Express Demo" });
});

module.exports = router;
