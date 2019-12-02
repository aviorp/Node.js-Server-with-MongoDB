const Cart = require("../../models/cart.model");

const getCart = (req, res) => {
  Cart.findOne(
    { customerId: req.decodedUser.username, isActive: true },

    async (err, result) => {
      if (err) {
        await res.json({
          message: "There is an Error , Contact the Admin : " + err
        });
      }
      if (result === null) {
        await res.redirect("/cart/newcart");
      } else {
        await res.json(result);
      }
    }
  );
};

const newCart = (req, res) => {
  let newCart = Cart({
    customerId: req.decodedUser.username,
    products: req.body.products,
    isActive: true
  });
  newCart.save(err => {
    if (err) {
      res.json({
        message: "There is an Error , Contact the Admin : " + err
      });
    }
  });
  res.json("New Cart for you. Happy Shopping!");
};

const updateCart = (req, res) => {
  Cart.updateOne(
    { customerId: req.decodedUser.username, isActive: true },
    { $push: { products: req.body.product } },

    { _v: 0 },
    async (err, result) => {
      if (err) {
        await res.json({
          message: "There is an Error , Contact the Admin : " + err
        });
      }
      await res.json(result);
    }
  );
};

const deleteProductFromArray = (req, res) => {
  Cart.updateOne(
    { customerId: req.decodedUser.username, isActive: true },
    { $pull: { products: req.body.product } },

    { _v: 0 },
    async (err, result) => {
      if (err) {
        await res.json({
          message: "There is an Error , Contact the Admin : " + err
        });
      }
      await res.json(result);
    }
  );
};

const clearCart = (req, res) => {
  Cart.updateOne(
    { customerId: req.decodedUser.username, isActive: true },
    { $set: { products: [] } },
    { _v: 0 },
    async (err, result) => {
      if (err) {
        await res.json({
          message: "There is an Error , Contact the Admin : " + err
        });
      }
      await res.json(result);
    }
  );
};

const buy = (req, res) => {
  Cart.updateOne(
    { customerId: req.decodedUser.username },
    { $set: { isActive: false } },
    async (err, result) => {
      if (err) {
        await res.json({
          status: "error",
          message: "there is an Error : " + err
        });
      }
      await res.json(result);
    }
  );
};
module.exports = {
  newCart,
  getCart,
  updateCart,
  deleteProductFromArray,
  clearCart,
  buy
};
