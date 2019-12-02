const express = require("express");
const router = express.Router();
const orderHandlers = require("../../handlers/orderHandler/orderHandler");

router.post("/shippingordercheck", (req, res) => {
  console.log("the Client asked for : " + req.url);
  orderHandlers.getDateForShipping(req, res);
});

router.post("/createOrder", (req, res) => {
  console.log("the Client asked for : " + req.url);
  orderHandlers.createOrder(req, res);
});

module.exports = router;
