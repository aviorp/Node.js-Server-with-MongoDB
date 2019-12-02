const express = require("express");
const router = express.Router();
const productsHandler = require("../handlers/productsHandler/productsHandler");

router.get("/", (req, res) => {
  console.log("the Client asked for : " + req.url);

  productsHandler.getAll(req, res);
});
router.get("/category/:name", (req, res) => {
  console.log("the Client asked for : " + req.url);

  productsHandler.getSpecific(req, res);
});
router.get("/search/:name", (req, res) => {
  console.log("the Client asked for : " + req.url);

  productsHandler.search(req, res);
});

module.exports = router;
