const express = require("express");
const router = express.Router();
const data = require("../data");
const palindrome = data.palindrome;

router.get("/", (req, res) => {
  res.render("palindrome/static", {});
});

router.get("/server", (req, res) => {
  res.render("palindrome/server", {});
});

module.exports = router;
