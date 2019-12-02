const express = require("express");
const router = express.Router();
const cartHandlers = require("../../handlers/cartHandlers/cartHandlers");

router.post("/newCart", (req, res) => {
  console.log("the Client asked for : " + req.url);

  cartHandlers.newCart(req, res);
});
router.put("/updateCart", (req, res) => {
  console.log("the Client asked for : " + req.url);

  cartHandlers.updateCart(req, res);
});
router.put("/deleteProductFromCart", (req, res) => {
  console.log("the Client asked for : " + req.url);

  cartHandlers.deleteProductFromArray(req, res);
});
router.put("/clearCart", (req, res) => {
  console.log("the Client asked for : " + req.url);

  cartHandlers.clearCart(req, res);
});

router.get("/getCart", (req, res) => {
  console.log("the Client asked for : " + req.url);
  cartHandlers.getCart(req, res);
});

router.put("/buy", (req, res) => {
  console.log("the Client asked for : " + req.url);
  cartHandlers.buy(req, res);
});

module.exports = router;
