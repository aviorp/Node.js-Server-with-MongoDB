const express = require("express");
const router = express.Router();
const adminHandlers = require("../../handlers/adminHandlers/adminHandlers");

router.post("/newProduct", (req, res) => {
  console.log("the Client asked for : " + req.url);
  adminHandlers.newProduct(req, res);
});

router.put("/editProduct", (req, res) => {
  console.log("the Client asked for : " + req.url);

  adminHandlers.editProduct(req, res);
});

module.exports = router;
