const express = require("express");
const router = express.Router();
const { search } = require("../public/js/redditapi");
const path = require("path");

// Deals Page

// SSD
router.get("/ssd", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    ssd: true,
    product: productName,
    title: "Solid State Drives (SSD)"
  });
});

// HDD
router.get("/hdd", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    hdd: true,
    product: productName,
    title: "Hard Drives (HDD)"
  });
});

// Monitor
router.get("/monitor", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    monitor: true,
    product: productName,
    title: "Monitors"
  });
});

// Mouse
router.get("/mouse", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    mouse: true,
    product: productName,
    title: "Mouse"
  });
});

// GPU
router.get("/gpu", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    gpu: true,
    product: productName,
    title: "Graphic Processing Unit (GPU)"
  });
});

// CPU
router.get("/cpu", (req, res) => {
  productName = path.basename(req.route.path);
  res.render("deals/product", {
    cpu: true,
    product: productName,
    title: "Central Processing Unit (CPU)"
  });
});

// AJAX GET Request of each deals' pages
router.get("/result/:product", (req, res) => {
  search(req.params.product, "new").then(results => {
    res.send(results);
  });
});

module.exports = router;
