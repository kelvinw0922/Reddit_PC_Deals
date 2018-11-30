const express = require("express");
const router = express.Router();

router.get("/ssd", (req, res) => {
  res.render("deals/ssd");
});

router.get("/hdd", (req, res) => {
  res.render("deals/hdd");
});

router.get("/monitor", (req, res) => {
  res.render("deals/monitor");
});

module.exports = router;
