const express = require("express");
const router = express.Router();
const { search } = require("../public/js/redditapi");
const path = require("path");
const { spinner } = require("../helpers/spinner");

// Deals Page
router.get("/ssd", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    active: {
      ssd: true,
      hdd: false,
      monitor: false,
      mouse: false,
      gpu: false
    },
    product: productName,
    title: "Solid State Drives (SSD)"
  });
});

router.get("/hdd", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    active: {
      ssd: false,
      hdd: true,
      monitor: false,
      mouse: false,
      gpu: false
    },
    product: productName,
    title: "Hard Drives (HDD)"
  });
});

router.get("/monitor", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    active: {
      ssd: false,
      hdd: false,
      monitor: true,
      mouse: false,
      gpu: false
    },
    product: productName,
    title: "Monitors"
  });
});

router.get("/mouse", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    active: {
      ssd: false,
      hdd: false,
      monitor: false,
      mouse: true,
      gpu: false
    },
    product: productName,
    title: "Mouse"
  });
});

router.get("/gpu", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    active: {
      ssd: false,
      hdd: false,
      monitor: false,
      mouse: false,
      gpu: true
    },
    product: productName,
    title: "Graphic Processing Unit (GPU)"
  });
});

// AJAX GET Request of each deals' pages
router.get("/result/:product", (req, res) => {
  search(req.params.product, "new").then(results => {
    res.send(results);
  });
});

module.exports = router;
