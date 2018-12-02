const express = require("express");
const router = express.Router();

// Deals Page
router.get("/ssd", (req, res) => {
  res.render("deals/ssd", {
    active: {
      ssd: true,
      hdd: false,
      monitor: false
    }
  });
});

router.get("/hdd", (req, res) => {
  res.render("deals/hdd", {
    active: {
      ssd: false,
      hdd: true,
      monitor: false
    }
  });
});

router.get("/monitor", (req, res) => {
  res.render("deals/monitor", {
    active: {
      ssd: false,
      hdd: false,
      monitor: true
    }
  });
});

// AJAX GET Request of each deals' pages
router.get("/result/:product", (req, res) => {
  res.send(req.params.product);
});

module.exports = router;
